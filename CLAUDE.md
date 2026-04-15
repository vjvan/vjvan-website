# vjvan.com — Claude 建站指令

## Design System（硬規則）

在做任何視覺或 UI 決策前，**必讀 `DESIGN.md`**。所有字型、色彩、間距、版面原則都定義在那裡，不得擅自偏離。

- 字型：Instrument Serif + Inter Tight + JetBrains Mono + Noto Serif TC + Noto Sans TC
- 色彩：Light 預設（paper `#FAFAF7` / ink `#0A0A0A` / signal `#1F51FF`），Dark toggle
- 版面：不對稱優先，禁用對稱三欄 card grid
- 按鈕：無按鈕，只用 mono uppercase underline
- 陰影：全站禁用 shadow，用 1px hairline rule 分隔

## AI Slop 禁用清單

這些一旦出現就是錯：

- `rounded-full` 按鈕
- `backdrop-blur` 玻璃卡
- `shadow-lg` / `shadow-xl` 卡片陰影
- 三欄 / 四欄對稱 grid
- Hero 漸層背景
- Emoji
- Icon in colored circle
- 紫色 / 紫色漸層
- `motion/react` 入場動畫
- "Built for X" / "Designed for Y" 口吻

## 雙品牌 SEO 硬規則

所有 meta / JSON-LD / og / llms.txt 都必須同時出現：

- 中文：「唯捷允雷」
- 英文：「VJVAN」

公司全名：「唯捷允雷有限公司」。創辦人：「允雷」。地點：屏東 Pingtung。

## 絕對不動的資產

- `/content/blog/*.mdx` 5 篇文章內容
- `/blog/[slug]` URL 結構
- 文章 frontmatter metadata
- `app/sitemap.ts` 核心邏輯

## 上線前必跑

- `/pre-launch-check`（10 大類檢查）
- `/verify`（最終驗證）
- Lighthouse Core Web Vitals 對比
- Google Rich Results Test 驗 JSON-LD
