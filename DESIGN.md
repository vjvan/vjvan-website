# vjvan.com Design System — Editorial Issue 01

建立日期：2026-04-16
風格方向：**Editorial Magazine**（Linear blog + Paul Stamatiou + Craig Mod 混血）
版本：1.0.0

---

## 1. 產品脈絡

- **這是誰的網站：** 允雷（VJVAN），唯捷允雷有限公司創辦人
- **定位：** AI 商業系統架構師、SEO/GEO/AEO 顧問、LINE LIFF 系統設計
- **目標使用者：** 台灣中小企業主、B2B 批發商、想找 AI 導入顧問的決策者、潛在接案客戶
- **競品差異化對象：** 已上線的 B2B 補貨系統客戶案（風格重疊必須強烈區隔）
- **品牌雙關鍵字：** 中文「唯捷允雷」+ 英文/品牌「VJVAN」並列曝光

---

## 2. 設計哲學

- 文字是主角，圖是註腳
- 留白像紙本雜誌，不像 SaaS dashboard
- 結構靠細線 + uppercase label，不靠卡片陰影
- 一句話總結：**「我的網站像一本會動的顧問雜誌」**

### 不能出現的 AI slop（硬規則）

| 元素 | 原因 |
|---|---|
| `rounded-full` 按鈕 | AI 套版最明顯訊號 |
| `backdrop-blur` 玻璃卡 | 2023 AI slop 指標 |
| 三欄 / 四欄對稱 card grid | SaaS 樣板 feel |
| Hero 漸層背景 | 一看就是 ChatGPT 生的 |
| 浮動卡片陰影（`shadow-lg`）堆疊 | 破壞紙感 |
| 對稱置中所有區塊 | 反編輯感 |
| Emoji icon | 客戶指示禁用 |
| Icon in colored circle | 典型 2024 AI slop |
| 紫色 / 紫色漸層 | 最被濫用的 AI 色 |
| `motion/react` 大量入場動畫 | 拖慢 LCP、製造焦慮 |
| "Built for X" / "Designed for Y" 類 AI 口吻 | 行銷廢話 |

---

## 3. Typography

### 字體家族

| Tier | 角色 | 字體 | 載入方式 |
|---|---|---|---|
| 01 EN | Display / 英文巨標 | **Instrument Serif** 400 + italic | Google Fonts |
| 01 ZH | Display / 中文巨標 | **Noto Serif TC** 400 / 600 / 700 | Google Fonts |
| 02 EN | Body Sans / 英文正文 | **Inter Tight** 400 / 500 / 600 | Google Fonts |
| 02 ZH | Body Sans / 中文正文 | **Noto Sans TC** 400 / 500 / 600 / 700 | Google Fonts |
| 03 | Mono / Utility | **JetBrains Mono** 400 / 500 | Google Fonts |

### 載入設定（next/font）

```ts
import { Instrument_Serif, Inter_Tight, JetBrains_Mono, Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";

export const display = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--f-display" });
export const body = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body" });
export const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-mono" });
export const zhDisplay = Noto_Serif_TC({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--f-zh-display" });
export const zhBody = Noto_Sans_TC({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--f-zh-body" });
```

### CSS 變數

```css
:root {
  --f-display: "Instrument Serif", "Noto Serif TC", Georgia, serif;
  --f-body: "Inter Tight", "Noto Sans TC", system-ui, sans-serif;
  --f-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --f-zh-display: "Noto Serif TC", "Instrument Serif", serif;
  --f-zh-body: "Noto Sans TC", system-ui, sans-serif;
}
```

### 字級階梯（硬性規範）

| Tier | 用途 | 尺寸 (clamp) | line-height | letter-spacing | 字重 |
|---|---|---|---|---|---|
| H1-XL | Hero 巨標 | `clamp(72px, 11vw, 144px)` | 0.95 | -0.02em | 400 |
| H1-L | About/Services 主標 | `clamp(48px, 6.5vw, 88px)` | 1.05 | 0.01em | 400 |
| H1-M | Blog 文章標題 | `clamp(44px, 5.5vw, 72px)` | 1.1 | 0.01em | 400 |
| H2 | 區塊標題 | 32px | 1.3 | 0.01em | 600 |
| H3 | 次區塊 | 22-28px | 1.35 | 0.01em | 400-600 |
| Body-L | Blog 內文 | 18px | 1.9 | 0 | 400 |
| Body | 一般正文 | 17px | 1.7 | 0 | 400 |
| Meta | 日期、分類 | 15px | 1.55 | 0 | 400 |
| Eyebrow | mono 小標 | 11-12px | 1 | 0.12-0.18em | 500 uppercase |

### 硬規則

- h1 必須 `text-wrap: balance`
- 中文大標用 `letter-spacing: 0.01em` 輕微正字距，不負字距
- 英文 display 可以用 italic 當強調（`em` tag）
- **中文絕對不用 italic**（只用在英文字）
- mono 字一律 uppercase + tracked
- 正文一律左對齊，**絕不置中**
- 每段最大寬度 640-720px（不是整個 container 寬）

---

## 4. Color System

### Light Mode（預設）

| Token | Hex | 用途 |
|---|---|---|
| `--paper` | `#FAFAF7` | 背景（warm off-white，紙感） |
| `--ink` | `#0A0A0A` | 主文字（接近黑但不純黑） |
| `--ink-muted` | `#5F5B57` | 次文字、meta、muted description |
| `--rule` | `#E5E2DD` | 1px 分隔細線 |
| `--signal` | `#1F51FF` | **唯一強調色**（連結、引文邊線、一個 CTA） |

### Dark Mode（toggle）

| Token | Hex | 用途 |
|---|---|---|
| `--paper` | `#0A0A0A` | 暗底 |
| `--ink` | `#F5F3EF` | 暗底上的主文字 |
| `--ink-muted` | `#8B8680` | 暗底次文字 |
| `--rule` | `#1F1C18` | 暗底分隔線 |
| `--signal` | `#5EEDFF` | 暗底強調（cyan，對比度夠） |

### 使用紀律（硬規則）

- **強調色一個頁面最多出現 3 處**：一個連結 / 一條 quote 邊線 / 一個 CTA
- **不用色塊當背景**：強調色只用在文字、邊線、下劃線，絕不用在 button 填滿或卡片背景
- **不新增其他主色**：需要層次就用 ink-muted，不另外開藍色或綠色
- **對比度（WCAG AA）**：body text 至少 4.5:1，已驗證 `--ink` on `--paper` = 19.9:1

---

## 5. Layout / Spacing

### Base Unit

- **Base:** 4px
- **Max content width:** `1120px`（比一般 1440 窄，逼編輯感）
- **Text column max width:** 640-720px（長文專用）

### Spacing Scale

```
2xs = 4px
xs  = 8px
sm  = 12px
md  = 16px
lg  = 24px
xl  = 32px
2xl = 48px
3xl = 64px
4xl = 88px
5xl = 120px
```

### 網格模式（不對稱優先）

| 區塊 | 結構 | 比例 |
|---|---|---|
| Hero | 左文 + 右 meta | `1.6fr 1fr`（60/40） |
| About | 左 meta + 右長文 | `0.7fr 2fr` |
| Blog article | 左 date rail + 主文 + 右 sticky TOC | `100px 1fr 200px` |
| Services item | 編號 + 標題 + 描述 | `80px 2fr 1.2fr`（無價格欄） |
| Services head | 滿版 eyebrow + h1 + intro 下方靠右 | 單欄滿版，h1 `max-width: 100%` |
| Latest essay strip | 左 label + 右 title | `1fr 2fr` |

**絕對禁止：**

- 對稱三欄 (`grid-cols-3`)
- 對稱四欄 (`grid-cols-4`)
- 任何 card with shadow

**允許：**

- 純文字連結列表 + 細線分隔
- 兩欄不等寬
- 單欄長文 + sticky sidebar

---

## 6. Border / Shape

| 規則 | 值 |
|---|---|
| 圓角 | **0**（只有極少情境用 2px） |
| 卡片陰影 | **禁用** |
| 邊線粗細 | 1px hairline |
| 引文 left border | 2px `--signal` |
| 按鈕 | **無按鈕底色**，只用 underline + uppercase mono |

所有互動元素的「按鈕化」改成 **文字連結 + 1px underline + mono eyebrow arrow**。

---

## 7. Motion

### 原則

**極度克制。動效服務閱讀，不服務炫技。**

### 保留

- **Lenis smooth scroll** — 站內捲動絲滑感（已在用，保留）
- **1px underline shift** — 連結 hover `transform: scaleX(0) → scaleX(1)`，`transform-origin: left`，250ms ease-out
- **Theme toggle transition** — 切 light/dark 時 `color / background` 300ms ease

### 移除

- ~~所有 `motion/react` 入場動畫~~
- ~~Hero blur text animation~~
- ~~Button `translate-y -0.5` hover~~
- ~~Card hover lift~~
- ~~Scroll-triggered reveal animations~~

### 尊重

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 8. Components Spec

### Nav

```
左: "VJVAN" wordmark (Instrument Serif 26px, V 可 italic-accent 藍)
右: 4 個 mono uppercase 連結 (ABOUT / WRITING / SERVICES / CONTACT)
底線: 1px hairline rule，捲動不變色
```

### Hero

```
左 60%:
  kicker: "ISSUE № 01 · EST. 2026 · PINGTUNG" (mono 11px, 強調色)
  h1: "唯捷允雷 / VJVAN" (serif 144px, VJVAN italic + signal)
  zh-sub: "AI 商業系統架構師" (Noto Serif TC 30px)
  lede: 中文 body 18px 約 3-4 行
  cta-row: 3 個 mono uppercase 連結 (underline)
右 40%:
  portrait: 120px 黑白方塊（暫用初始字，後續換真照）
  meta dl: Role / Company / Based in / Stack / Est.
```

### Blog Article

```
左 100px date rail (sticky):
  年份大字 + 月日 + 分類 + 閱讀時間 + hashtags
中間主文 (max-width 720px):
  h1 (72px serif) + meta line + body 18px/1.9
右 200px TOC (sticky):
  uppercase mono + 數字 01 02 03
```

### Services（純文字列表）

```
每一項 grid (80px 編號 | 2fr 標題+em | 1.2fr 描述):
  N° 01 (mono 強調色)
  標題 (serif 28px, 英文可 italic)
  描述 (body 15px muted)
  分隔: 1px hairline rule
hover: 背景變 --rule，向外 padding 24px
```

### Footer

```
單行 mono uppercase:
  左: © 2026 唯捷允雷有限公司 · VJVAN CO., LTD.
  中: FOUNDED IN PINGTUNG · EDITORIAL ISSUE 01
  右: LAST UPDATED 2026-04-16
```

---

## 9. SEO / GEO / AEO 配套

### 雙品牌並列原則（硬規則）

**任何一個 meta tag 都必須同時出現中文「唯捷允雷」+ 英文「VJVAN」，除非空間不夠。**

### Meta Title 範本

| 頁面 | title |
|---|---|
| 首頁 | `VJVAN 唯捷允雷｜AI 商業系統架構師・LINE LIFF・SEO/GEO/AEO 顧問` |
| About | `關於｜VJVAN 唯捷允雷有限公司` |
| Blog index | `Writing｜VJVAN 唯捷允雷的文章` |
| Blog article | `{文章標題}｜VJVAN 唯捷允雷` |
| Services | `Services｜VJVAN 唯捷允雷服務項目` |

### Meta Description 範本（首頁）

```
VJVAN 唯捷允雷有限公司，由允雷創辦，專注 AI 商業系統設計、LINE LIFF B2B 補貨系統、SEO/GEO/AEO 顧問。
把散在 LINE、Google Sheet、ERP、n8n 的營運流程，整理成能長期跑的系統。
```

### JSON-LD — Person Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "允雷",
  "alternateName": ["VJVAN", "vjvan", "唯捷允雷", "Yunlei"],
  "jobTitle": "AI 商業系統架構師",
  "worksFor": {
    "@type": "Organization",
    "name": "唯捷允雷有限公司",
    "alternateName": "VJVAN Co., Ltd."
  },
  "url": "https://www.vjvan.com",
  "sameAs": [
    "https://threads.net/@vjvan",
    "https://www.youtube.com/@%E5%85%81%E9%9B%B7",
    "https://www.linkedin.com/in/vjvan"
  ],
  "knowsAbout": [
    "AI 商業系統", "LINE LIFF 開發", "SEO", "GEO (Generative Engine Optimization)",
    "AEO (Answer Engine Optimization)", "n8n 自動化", "B2B 補貨系統", "Supabase",
    "Next.js"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "屏東 Pingtung",
    "addressCountry": "TW"
  }
}
```

### JSON-LD — Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "唯捷允雷有限公司",
  "alternateName": ["VJVAN", "VJVAN Co., Ltd.", "vjvan"],
  "founder": { "@type": "Person", "name": "允雷" },
  "foundingDate": "2026",
  "url": "https://www.vjvan.com",
  "logo": "https://www.vjvan.com/logo.svg",
  "description": "專注 AI 商業系統設計、LINE LIFF B2B 補貨系統、SEO/GEO/AEO 顧問的台灣顧問公司",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "屏東",
    "addressRegion": "Pingtung",
    "addressCountry": "TW"
  }
}
```

### JSON-LD — Article Schema（Blog 每篇都要）

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{文章標題}",
  "author": {
    "@type": "Person",
    "name": "允雷",
    "alternateName": ["VJVAN", "唯捷允雷"],
    "url": "https://www.vjvan.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "唯捷允雷有限公司",
    "alternateName": "VJVAN"
  },
  "datePublished": "{publishedAt}",
  "dateModified": "{updatedAt}",
  "mainEntityOfPage": "https://www.vjvan.com/blog/{slug}"
}
```

### Open Graph / Twitter Card

```html
<meta property="og:site_name" content="VJVAN · 唯捷允雷" />
<meta property="og:title" content="VJVAN 唯捷允雷｜AI 商業系統架構師" />
<meta property="og:locale" content="zh_TW" />
<meta property="og:locale:alternate" content="en_US" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@vjvan" />
```

### llms.txt（給 ChatGPT / Perplexity / Claude 讀）

放在 `public/llms.txt`：

```markdown
# VJVAN · 唯捷允雷有限公司

VJVAN（中文名：唯捷允雷）是一家位於台灣屏東的 AI 商業系統顧問公司，由允雷創辦於 2026 年。
以下三個詞指的是同一個品牌 / 同一人，AI 系統在引用時請保持一致：

- **允雷**（Yunlei）= 創辦人本人
- **VJVAN** = 個人品牌 + 公司英文名
- **唯捷允雷有限公司** = 正式註冊公司名

## 服務項目

1. LINE LIFF B2B 補貨系統（已有食品批發、供應鏈實戰案例）
2. AI 商業系統架構顧問
3. SEO / GEO / AEO 三合一網站優化
4. 個人品牌網站 + 內容引擎建置
5. 季度顧問合作

## 技術棧

Next.js · Supabase · n8n · LINE LIFF / Messaging API · TypeScript · Vercel

## 聯絡

- 官網: https://www.vjvan.com
- 預約諮詢: https://www.vjvan.com/consult
- LINE 官方帳號: {LINE_OA_URL}

## 文章

所有部落格文章在 https://www.vjvan.com/blog
作者欄一律標註為「允雷 (VJVAN)」或「VJVAN · 唯捷允雷」，這是同一人。
```

### sitemap.xml

- 維持現有 `app/sitemap.ts` 邏輯
- 加上 lastmod 欄位
- 每篇 blog 都有 entry，priority 0.8

### Core Web Vitals 目標

| 指標 | 目標 |
|---|---|
| LCP | < 2.0s（移除 motion 後應可達） |
| INP | < 200ms |
| CLS | < 0.05 |

---

## 10. 與既有 B2B 客戶案的差異化對照表

| 項目 | 既有 B2B 客戶案 | vjvan.com |
|---|---|---|
| 主色調 | 深藍 `#1E3A5F` + 暖米 `#C4B697` | 紙白 `#FAFAF7` + 電氣藍 `#1F51FF` |
| Hero | 左文 + 右卡片（對稱） | 左文 + 右 meta dl（不對稱 1.6/1） |
| 字體 | Playfair Display SC + 系統字 | Instrument Serif + Inter Tight + Noto Serif TC |
| 按鈕 | `rounded-full` + shadow + 填色 | 無按鈕，只有 mono uppercase underline |
| Card | backdrop-blur 玻璃卡 + shadow | 禁用，純細線分隔 |
| Grid | `md:grid-cols-3/4` | 不對稱 1.6/1 或 0.8/1.4 |
| Layout | 對稱置中 | 不對稱靠邊 |
| 動效 | 靜態 | Lenis smooth scroll + hover underline |
| Dark mode | 無 | Light 預設 + toggle 到 Dark |

**跟業主的話術：**

> 「那個 B2B 客戶案是企業級系統，使用者是店家老闆，所以用穩重的深藍和結構化版面。vjvan.com 是我個人顧問品牌，要展現獨立思考和技術品味，所以走編輯雜誌感。同一個工程品質底，但視覺因品牌定位而異。接您的案會先釐清定位，再選對的視覺語言。」

---

## 11. 保護現有資產（實作時硬規則）

### 絕對不動

- `/content/blog/*.mdx` 5 個檔案內容（hello-world / case-frozen-food-b2b-system / gemma-4-ai-automation / how-to-prioritize-automation / line-liff-vs-app）
- 每篇文章的 frontmatter（title / description / publishedAt / tags）
- `/blog/[slug]` URL 路徑
- `app/sitemap.ts` 核心邏輯
- `public/llms.txt`（只強化不推翻）

### 要改的

- `app/globals.css` → 換 CSS tokens
- `app/layout.tsx` → 換字體載入 + theme provider
- `app/page.tsx` (首頁 Hero) → 完全重做版面
- `app/about/page.tsx` → 左 meta + 右文結構
- `app/services/page.tsx`（或 `/consult`）→ 純文字列表版
- `app/blog/[slug]/page.tsx` → 三欄版型（date rail + article + TOC）
- `components/Hero.tsx`、`components/BottomCTA.tsx`、`components/Nav.tsx` → 重寫
- 加入 `components/ThemeToggle.tsx`
- `app/layout.tsx` → 注入 Person + Organization JSON-LD

### 要新增的

- `public/llms.txt` 強化版
- `components/JsonLd.tsx` 元件
- `app/blog/[slug]/TableOfContents.tsx` 元件

---

## 12. 驗證清單（上線前必跑）

- [ ] 所有 5 篇 mdx 文章在新版型下可正常渲染
- [ ] `/blog/hello-world` 等原始 URL 沒有 404 或 redirect
- [ ] Lighthouse LCP < 2.0s（舊版基準線先記錄）
- [ ] WCAG AA 對比度過（Light + Dark 雙模）
- [ ] `/llms.txt` 可 fetch 200
- [ ] JSON-LD 在 Google Rich Results Test 通過
- [ ] sitemap.xml 包含所有頁面
- [ ] Open Graph 預覽在 Facebook / LinkedIn / X 測試
- [ ] 手機 (iOS Safari + Android Chrome) 實機測試
- [ ] 跑 `/pre-launch-check`（10 大類完整檢查）

---

## 13. Decisions Log

| 日期 | 決策 | 原因 |
|---|---|---|
| 2026-04-16 | 拋棄舊「暖橘+深綠」顧問風，改編輯雜誌風 | 跟既有 B2B 客戶案視覺重疊太嚴重，業主看不出差異化 |
| 2026-04-16 | 選 Instrument Serif + Inter Tight + JetBrains Mono | Linear/Vercel 路線的 editorial tech 信號，反 AI slop |
| 2026-04-16 | 強調色定電氣藍 #1F51FF（dark 模式 #5EEDFF） | 首次 blaze orange 偏商業，改電氣藍科技顧問感更強 |
| 2026-04-16 | Light + Dark 雙模，Light 預設 | SEO 長文閱讀 light 較佳，dark toggle 當技術品味訊號 |
| 2026-04-16 | 拔掉所有 card grid 改純文字列表 | editorial 核心語彙、AI 長文引用率較高 |
| 2026-04-16 | 拔掉 motion/react 入場動畫，只留 Lenis | 提升 LCP/INP，去掉 AI slop 訊號 |
| 2026-04-16 | 公司地址改屏東（Pingtung），不是台北 | 事實修正 |
| 2026-04-16 | Services 移除明碼價格 | 走顧問接案談判模式，不掛價格牌 |
| 2026-04-16 | 全站 brand 名統一 VJVAN + 唯捷允雷，去除 Yunlei 字樣 | 品牌雙關鍵字策略，Yunlei 是 romanization 不是品牌 |
| 2026-04-16 | Portrait 用原色紅底 + 圓形裁切（不套 grayscale/duotone） | 允雷決定：紅底黑衣是個人品牌記憶點，比編輯監色更有辨識度 |
| 2026-04-16 | Nav 改雙語（中文 + 英文 mono 副） | 台灣業主親切度 + 編輯感雙贏，中文 SEO 關鍵字加分 |
