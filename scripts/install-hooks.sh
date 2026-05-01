#!/usr/bin/env bash
# 安裝 vjvan-website 的 git hooks
# 跨機器搬 repo 後跑一次: bash scripts/install-hooks.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOOK_DIR="$REPO_ROOT/.git/hooks"

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

chmod +x "$HOOK_DIR/post-commit"
chmod +x "$REPO_ROOT/scripts/sync-blogs-to-vault.sh"

echo "Installed git hooks:"
ls -la "$HOOK_DIR/post-commit"
echo ""
echo "Test it: cd $REPO_ROOT && touch content/blog/.test && git add . && git commit -m test"
echo "(然後 git reset HEAD~1 移除 test commit)"
