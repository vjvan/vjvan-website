#!/usr/bin/env bash
# 安裝 vjvan-website 的 git hooks
# 跨機器搬 repo 後跑一次: bash scripts/install-hooks.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# git-path hooks: 支援 worktree 比 .git/hooks 寫死更穩 (Codex review SUGGEST A, 2026-05-06)
HOOK_DIR="$(git -C "$REPO_ROOT" rev-parse --git-path hooks)"

# post-commit: 把新提交的 blog 同步到 aivan vault
cat > "$HOOK_DIR/post-commit" <<'EOF'
#!/usr/bin/env bash
# vjvan-website post-commit hook
# 自動把 content/blog/*.mdx 同步成 .md 到 aivan vault
# 給允雷在 Obsidian 內閱讀對外文章用

REPO_ROOT="$(git rev-parse --show-toplevel)"

# 在 background 跑，不阻塞 git commit
(
  bash "$REPO_ROOT/scripts/sync-blogs-to-vault.sh" \
    >> /tmp/vjvan-blog-sync.log 2>&1
) &
EOF

# pre-commit: 阻擋 public/canvases/ 違反對外公開檢查的 canvas
# 對應 SOP: ~/aivan/references/sops/canvas-public-safe-checklist.md
# 觸發: 任何 commit 動到 public/canvases/*.canvas
# bypass: git commit --no-verify (留 audit trail)
cat > "$HOOK_DIR/pre-commit" <<'EOF'
#!/usr/bin/env bash
# vjvan-website pre-commit hook
# 對外公開 canvas 4 項檢查 (客戶名 / 系統技術細節 / 具體價碼 / 內部敘事)
# 對應 SOP: references/sops/canvas-public-safe-checklist.md (in aivan vault)

set -e

STAGED=$(git diff --cached --name-only --diff-filter=ACMR | grep '^public/canvases/.*\.canvas$' || true)

if [ -z "$STAGED" ]; then
  exit 0
fi

REPO_ROOT="$(git rev-parse --show-toplevel)"
CHECK="$REPO_ROOT/scripts/canvas_public_safe_check.sh"

if [ ! -x "$CHECK" ]; then
  echo "[pre-commit] error: $CHECK 不存在或不可執行"
  echo "  解法: cp ~/aivan/scripts/canvas_public_safe_check.sh \"\$CHECK\" && chmod +x \"\$CHECK\""
  exit 1
fi

TMP=$(mktemp -d)
trap "rm -rf $TMP" EXIT

ARGS=()
while IFS= read -r f; do
  [ -z "$f" ] && continue
  basename=$(basename "$f")
  if git show ":$f" > "$TMP/$basename" 2>/dev/null; then
    ARGS+=("$TMP/$basename")
  fi
done <<< "$STAGED"

if [ ${#ARGS[@]} -eq 0 ]; then
  exit 0
fi

echo "[pre-commit] 檢查 ${#ARGS[@]} 個 staged canvas (對外公開 4 項檢查)..."
if ! "$CHECK" "${ARGS[@]}"; then
  echo ""
  echo "[blocked] commit 阻擋 — canvas 違反對外公開檢查"
  echo "對應 SOP: references/sops/canvas-public-safe-checklist.md (in aivan vault)"
  echo ""
  echo "解法 3 選 1:"
  echo "  1. 對外脫敏: 用 ~/aivan/scripts/canvas_make_public_versions.py 產 -public 版"
  echo "  2. 撤下 staged: git reset HEAD <檔>"
  echo "  3. 緊急 bypass: git commit --no-verify (留審計痕跡,事後補審查)"
  exit 1
fi
EOF

chmod +x "$HOOK_DIR/post-commit"
chmod +x "$HOOK_DIR/pre-commit"
chmod +x "$REPO_ROOT/scripts/sync-blogs-to-vault.sh"
chmod +x "$REPO_ROOT/scripts/canvas_public_safe_check.sh" 2>/dev/null || true

echo "Installed git hooks:"
ls -la "$HOOK_DIR/post-commit" "$HOOK_DIR/pre-commit"
echo ""
echo "Test post-commit: cd $REPO_ROOT && touch content/blog/.test && git add . && git commit -m test"
echo "Test pre-commit:  staged 一個 internal 版 canvas (含「988 廚房」等 keyword) 應被阻擋"
echo "(然後 git reset HEAD~1 移除 test commit)"
