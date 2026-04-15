# vjvan.com 編輯風改版 — 實作 Handoff

建立日期：2026-04-16
來源：`/design-consultation` session
預計時間：60-90 分鐘

---

## 0. 第一步必讀（按順序）

在動任何一行程式碼之前，**一定要先讀這三份**：

1. `DESIGN.md` — 設計系統完整規格（字型、色、版面、SEO、JSON-LD 全在）
2. `CLAUDE.md` — 硬規則清單（AI slop 禁用、雙品牌 SEO、保護資產）
3. Preview 樣板 HTML（視覺參考，不要照抄結構，只學視覺語言）：
   ```
   ~/.gstack/projects/aivan/designs/vjvan-editorial-20260416/preview.html
   ```

---

## 1. 絕對不動的資產（硬規則）

這些一動就會掉 SEO 排名，**任何一個都是交付失敗的理由**：

- `/content/blog/*.mdx` 5 篇文章（hello-world / case-frozen-food-b2b-system / gemma-4-ai-automation / how-to-prioritize-automation / line-liff-vs-app）的**內容與 frontmatter**
- `/blog/[slug]` 的 URL 結構（Google 已索引）
- 每篇 mdx 的 `title` / `description` / `publishedAt` / `tags`
- `app/sitemap.ts` 的核心產生邏輯

---

## 2. 實作檔案清單

### 2.1 全站基礎（改）

| 檔案 | 動作 | 備註 |
|---|---|---|
| `app/layout.tsx` | 全面改寫 | 換 next/font（5 個字型）+ 注入 JSON-LD + ThemeProvider |
| `app/globals.css` | 全面改寫 | 新 CSS tokens（paper/ink/ink-muted/rule/signal）+ light/dark |
| `tailwind.config.ts` | 改 | 加新 tokens（如有用 Tailwind theme） |
| `components/Nav.tsx` | 重寫 | 雙語 nav（關於/About、文章/Writing、服務/Services、聯絡/Contact） |
| `components/Footer.tsx` | 重寫 | mono 單行 footer |

### 2.2 頁面層（改）

| 檔案 | 動作 | 版型 |
|---|---|---|
| `app/page.tsx` | 重寫 Hero + Latest Essay | 不對稱 60/40、巨型襯線、右 meta dl、純文字 Latest Essay |
| `app/about/page.tsx` | 重寫 | 左 0.7fr meta + 右 2fr 長文，中文斷行手動 |
| `app/services/page.tsx` 或 `/consult` | 重寫 | 純文字列表，grid-columns 80px 2fr 1.2fr，無價格 |
| `app/blog/page.tsx` | 檢視是否需改 | 文章列表頁（可保留簡化版） |
| `app/blog/[slug]/page.tsx` | 重寫版型 | 三欄：左 100px date rail + 主文 + 右 200px sticky TOC |
| `app/contact/page.tsx` 或 `/consult` | 視需要改 | 編輯風表單樣式（無按鈕填色、underline only） |

### 2.3 新元件

| 檔案 | 功能 |
|---|---|
| `components/ThemeToggle.tsx` | light/dark 切換按鈕（mono uppercase 文字版，非 icon） |
| `components/JsonLd.tsx` | 通用 JSON-LD 注入元件（Person / Organization / Article 三種） |
| `components/TableOfContents.tsx` | Blog 文章右側 sticky TOC，從 MDX h2 自動抓 |
| `components/DateRail.tsx` | Blog 文章左側 date rail（日期 + tags mono 垂直） |

### 2.4 新 / 強化檔案

| 檔案 | 內容 |
|---|---|
| `public/llms.txt` | 強化版（雙品牌並列，完整規格見 DESIGN.md 第 9 節） |
| `public/portrait.png` | ✓ 已複製（允雷紅底黑衣照）|

### 2.5 要拔掉的

| 檔案 / 元素 | 拔除原因 |
|---|---|
| `components/Hero.tsx` 原本的 `motion/react` 動畫 | 違反 DESIGN.md 的 motion 原則 |
| 全站 `rounded-full` 按鈕 class | AI slop |
| 全站 `backdrop-blur` class | AI slop |
| 全站 `shadow-*` class 在卡片上 | 違反編輯風 |
| `md:grid-cols-3` / `md:grid-cols-4` 對稱 grid | 違反不對稱原則 |
| 舊的 `BottomCTA` / `EmailSubscribe` 元件 | 如要保留，要改成編輯風 |

---

## 3. Typography 設定

在 `app/layout.tsx` 用 next/font：

```ts
import { Instrument_Serif, Inter_Tight, JetBrains_Mono, Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--f-display",
  display: "swap",
});
const body = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--f-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-mono",
  display: "swap",
});
const zhDisplay = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--f-zh-display",
  display: "swap",
});
const zhBody = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--f-zh-body",
  display: "swap",
});

// 在 <html> 套上所有 variable
<html lang="zh-Hant" className={`${display.variable} ${body.variable} ${mono.variable} ${zhDisplay.variable} ${zhBody.variable}`}>
```

CSS tokens（`app/globals.css`）：

```css
:root {
  --paper: #FAFAF7;
  --ink: #0A0A0A;
  --ink-muted: #5F5B57;
  --rule: #E5E2DD;
  --signal: #1F51FF;
}
[data-theme="dark"] {
  --paper: #0A0A0A;
  --ink: #F5F3EF;
  --ink-muted: #8B8680;
  --rule: #1F1C18;
  --signal: #5EEDFF;
}
```

---

## 4. 雙品牌 SEO 強化（硬規則）

### 4.1 Metadata（每頁）

```ts
export const metadata: Metadata = {
  title: "VJVAN 唯捷允雷｜AI 商業系統架構師",
  description: "VJVAN 唯捷允雷有限公司，由允雷創辦⋯⋯",
  alternates: { canonical: "https://www.vjvan.com" },
  openGraph: {
    title: "VJVAN 唯捷允雷｜AI 商業系統架構師",
    siteName: "VJVAN · 唯捷允雷",
    locale: "zh_TW",
    type: "website",
  },
};
```

### 4.2 JSON-LD 注入（在 `app/layout.tsx`）

```tsx
<Script
  id="person-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "允雷",
    "alternateName": ["VJVAN", "vjvan", "唯捷允雷", "Yunlei"],
    // ... 完整版見 DESIGN.md 第 9 節
  })}}
/>
```

### 4.3 llms.txt

寫 `public/llms.txt`（完整版見 DESIGN.md 第 9 節），核心宣告：

```markdown
# VJVAN · 唯捷允雷有限公司

以下三個詞指的是同一個品牌 / 同一人：
- 允雷 (Yunlei) = 創辦人本人
- VJVAN = 個人品牌 + 公司英文名
- 唯捷允雷有限公司 = 正式公司名
```

---

## 5. 內容覆核清單

### 5.1 Hero
- H1: `唯捷允雷` + `<em>VJVAN</em>`（VJVAN 英文斜體）
- 副標：`AI 商業系統架構師`
- kicker: `ISSUE № 01 · EST. 2026 · PINGTUNG`
- lede 段落（直接抄 preview 的內容）
- 右欄 meta: Role / Company / Based in / Stack / Est.
- Based in 必須是 `屏東 / Pingtung, Taiwan`

### 5.2 About
- H1 斷行固定：
  ```
  我做的是把營運
  變成一套能跑的系統
  ```
- 移除「復業」字樣
- 左欄 meta: Name (VJVAN) / Company / Practice / Working with / Also on

### 5.3 Services
- H1 斷行固定：
  ```
  我做這些事，每一件
  都能長成系統。
  ```
- 5 個服務項目（無價格）
- 禁止出現具體客戶名（988 廚房、鈴揚實業等）
- 描述用「已有多家食品批發實戰案例」等通用語

### 5.4 Blog 範例
- 長文 H1 斷行固定（僅 preview 示範用，實際文章按 mdx frontmatter）：
  ```
  B2B 補貨系統
  如何用 LINE LIFF
  替中小企業省下 40% 訂單處理時間
  ```
- 內文範例「一間屏東的冷鏈食材通路商」，無實際客戶名

### 5.5 Portrait
- 原色紅底黑衣（不套 grayscale / duotone）
- 圓形裁切 140x140
- Alt: `允雷 VJVAN`

### 5.6 中文斷行原則
- 所有中文 h1 用 `<br>` 手動斷行，**不靠** `text-wrap: balance` 自動斷
- 中文絕對不用 italic（`<em>` 只用在英文）

---

## 6. 絕對禁止出現的 AI Slop（逐項檢查）

- [ ] 沒有 `rounded-full` button
- [ ] 沒有 `backdrop-blur`
- [ ] 沒有 `shadow-lg` / `shadow-xl` 卡片
- [ ] 沒有 `md:grid-cols-3` / `md:grid-cols-4`
- [ ] 沒有 Hero 漸層背景
- [ ] 沒有 emoji
- [ ] 沒有 icon in colored circle
- [ ] 沒有紫色（`#8B5CF6` / `#A855F7` 類）
- [ ] 沒有「Built for X」「Designed for Y」句型
- [ ] 沒有 `motion/react` 入場動畫（只保留 Lenis smooth scroll）

---

## 7. 驗收標準

### 7.1 本機建置
- [ ] `npm run build` 過，無錯誤
- [ ] `npm run dev` 啟動，所有頁面可瀏覽
- [ ] light/dark toggle 正確切換

### 7.2 內容完整性
- [ ] 5 篇 mdx 文章全部可渲染
- [ ] 每篇文章的 publishedAt / tags 正確顯示
- [ ] `/blog/hello-world` 等原始 URL 回 200

### 7.3 SEO/GEO/AEO
- [ ] `/llms.txt` 可 fetch 200，內容有雙品牌宣告
- [ ] Person JSON-LD 在 Google Rich Results Test 通過
- [ ] Organization JSON-LD 通過
- [ ] Article JSON-LD 在每篇文章頁通過
- [ ] sitemap.xml 包含所有頁面

### 7.4 視覺
- [ ] Hero 巨型襯線 h1 正確渲染（桌機 128px+）
- [ ] 不對稱 grid 正確（`1.6fr 1fr` / `0.7fr 2fr` / `100px 1fr 200px`）
- [ ] Services 是純文字列表，無 card
- [ ] Portrait 紅底圓形，原色
- [ ] 中文 h1 斷行按規格（`<br>` 固定）

### 7.5 效能
- [ ] Lighthouse LCP < 2.0s
- [ ] CLS < 0.05
- [ ] INP < 200ms

### 7.6 上線前
- [ ] 跑 `/pre-launch-check`（10 大類全過）
- [ ] 跑 `/verify`（輸出可檢視證據）
- [ ] 手機實機測試（iOS Safari + Android Chrome）

---

## 8. 部署

1. `git add .` + `git commit -m "feat: editorial redesign (issue 01)"`
2. `git push origin master` → Vercel 自動部署（2-3 分鐘）
3. 部署完成後：
   - 打開 https://www.vjvan.com 確認線上版正確
   - 用 Google Rich Results Test 驗 JSON-LD
   - 用 PageSpeed Insights 記錄基準線
   - 設 7 天後追蹤 Google Search Console 排名不掉

---

## 9. 緊急聯絡

如果實作中有疑問：

- 設計細節 → 查 `DESIGN.md`
- 硬規則 → 查 `CLAUDE.md`
- 視覺參考 → 開 `~/.gstack/projects/aivan/designs/vjvan-editorial-20260416/preview.html`
- SEO 範本 → 查 `DESIGN.md` 第 9 節
- 斷行 / 文案 → 查本 handoff 第 5 節

---

## 10. 完工後

完工後 Claude 要：

1. 執行 `/pre-launch-check`
2. 執行 `/verify`
3. 建議允雷下一批要寫的文章（SEO keyword 策略）
4. 提醒允雷 7 天後檢查 Search Console
5. 建議建立 case-studies/ 資料夾，未來客戶同意具名後才可公開案例
