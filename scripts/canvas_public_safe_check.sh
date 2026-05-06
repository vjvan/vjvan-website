#!/usr/bin/env bash
# canvas_public_safe_check.sh — Canvas 對外公開前 4 項檢查
#
# Usage: scripts/canvas_public_safe_check.sh <canvas-path> [<canvas-path>...]
#
# Exit 0 if all pass, 1 if any fail.
#
# 對應 SOP: references/sops/canvas-public-safe-checklist.md (in aivan vault)
# 對應事故: decisions/log.md 2026-05-06 (撤下 988 outbox + architecture)
#
# 2026-05-06 Codex review fix:
#   - grep -F 字面比對 (避免 . 被當 regex 任意字元誤判,例如 n8n.vjvan.com)
#   - python3 stdin 模式 (避免單引號 path 注入)
#   - 移除 「Mac Mini」keyword (Codex 指出對外文章談 M4 Mac Mini 評測會誤殺)

set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Usage: $0 <canvas-path> [<canvas-path>...]"
  exit 2
fi

GLOBAL_FAIL=0

for CANVAS in "$@"; do
  if [ ! -f "$CANVAS" ]; then
    echo "[error] file not found: $CANVAS"
    GLOBAL_FAIL=1
    continue
  fi

  echo "=== checking: $CANVAS ==="

  # python3 stdin 模式取代 -c "..." 內嵌 path,避免單引號 path injection
  TEXT=$(python3 - "$CANVAS" <<'PY'
import json, sys
d = json.load(open(sys.argv[1]))
out = []
for n in d.get('nodes', []):
    out.append(n.get('text', '') or n.get('label', ''))
for e in d.get('edges', []):
    out.append(e.get('label', '') or '')
print('\n'.join(out))
PY
)

  FAIL=0

  # Check 1: 客戶名 / 員工名 (硬規則) — grep -F 字面比對
  for kw in "988 廚房" "戎的魚店" "鈴揚" "萊克靚" "大雄" "慧盈" "惠君" "鈺婷" "Sharon" "阿程" "學哥" "蕙丞" "周漢文" "王振華" "義伯"; do
    if echo "$TEXT" | grep -Fq "$kw"; then
      echo "  [FAIL-1] 客戶名/員工名: $kw"
      FAIL=1
    fi
  done

  # Check 2: 系統技術細節 (P0 — 攻擊面情報) — grep -F 字面比對
  # 移除「Mac Mini」keyword (Codex 指出可能誤殺對外文章 Mac Mini 評測等無關段落)
  for kw in "lexicographic" "ngrok-free" "n8n.vjvan.com" "minimal-postgres" "SERVICE_ROLE_KEY" "WEBHOOK_SECRET" "x-webhook-secret" "n8n_notified" "n8n-error-handler" "retry-pending-orders" "api-988" "ERP_Import_Flat" "supabase-edge-function"; do
    if echo "$TEXT" | grep -Fq "$kw"; then
      echo "  [FAIL-2] 系統細節: $kw"
      FAIL=1
    fi
  done

  # Check 3: 具體價碼 / 客戶承諾 — grep -F 字面比對 (不需跳脫)
  for kw in "US\$49" "US\$4,900" "NT\$200k" "NT\$680k" "NT\$5k-10k" "US\$5k-20k" "前 100 位" "founding member 收滿" "北部車隊" "冷凍倉"; do
    if echo "$TEXT" | grep -Fq "$kw"; then
      echo "  [FAIL-3] 具體價碼/承諾: $kw"
      FAIL=1
    fi
  done

  # Check 4: 內部敘事 / 工具名 — grep -F 字面比對
  for kw in "失準警鈴" "naval-for-vjvan" "sop-extractor" "teaching-multiplier" "vault-curator" "從客戶收到錢" "AGENTS.md" "CLAUDE.md" "decisions/log.md"; do
    if echo "$TEXT" | grep -Fq "$kw"; then
      echo "  [FAIL-4] 內部敘事/工具名: $kw"
      FAIL=1
    fi
  done

  if [ $FAIL -eq 0 ]; then
    echo "  ✅ 通過 4 項對外公開檢查"
  else
    echo "  ❌ 不可放進 vjvan-website public/canvases/"
    GLOBAL_FAIL=1
  fi
  echo ""
done

if [ $GLOBAL_FAIL -eq 0 ]; then
  echo "[ok] 全部通過"
  exit 0
else
  echo "[blocked] 有檔案違規,撤下或脫敏後重檢"
  exit 1
fi
