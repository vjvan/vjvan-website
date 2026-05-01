#!/usr/bin/env bash
# vjvan-website blog → aivan vault sync
#
# 把 content/blog/*.mdx 的 publish-ready 文章 mirror 到 aivan vault
# 的 content/published-blogs/，副檔名改 .md 讓 Obsidian 認得。
#
# 用途:
# - 允雷在 Obsidian 內看 / 標註 / 摘要對外 blog 文章
# - 副本是「閱讀用」，編輯仍以 vjvan-website 真實 .mdx 為準
#
# 觸發時機:
# - .git/hooks/post-commit 自動跑 (見 install-hooks.sh)
# - 或手動跑: bash scripts/sync-blogs-to-vault.sh

set -euo pipefail

VAULT_DIR="/Users/vjvan/Library/Mobile Documents/iCloud~md~obsidian/Documents/aivan/content/published-blogs"
BLOG_DIR="$(cd "$(dirname "$0")/.." && pwd)/content/blog"

mkdir -p "$VAULT_DIR"

count=0
for src in "$BLOG_DIR"/*.mdx; do
  [ -f "$src" ] || continue
  name="$(basename "$src" .mdx)"
  dst="$VAULT_DIR/$name.md"
  # 只在 source 比 dest 新 (或 dest 不存在) 時複製
  if [ ! -f "$dst" ] || [ "$src" -nt "$dst" ]; then
    cp "$src" "$dst"
    count=$((count + 1))
  fi
done

if [ "$count" -gt 0 ]; then
  echo "[sync-blogs-to-vault] Synced $count blog post(s) → aivan vault"
fi
