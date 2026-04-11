# vjvan.com Design Principles

## 破解 AI Slop 規則

### 禁用元素
- 禁用純線性漸層 hero 作為唯一視覺層 (radial gradient 配其他視覺元素 OK)
- 禁用對稱三欄 feature grid (用非對稱 / bento / 兩欄打破)
- 禁用 stone 色盤當主色 (我們用暖橘 + 深綠)
- 禁用 "solution for X" / "built for Y" 類 AI 無意義標語
- 禁用任何 emoji 作為視覺元素

### 必用元素
- Smooth scroll: Lenis
- 動畫層: Motion (Framer Motion 獨立版)
- 文字動效: BlurText (or equivalent) 用於主標
- 非對稱 grid / bento layout 取代三欄對稱 grid

## 色彩系統

- Brand (暖橘): #b45309
- Action (深綠): #0d9488
- Background: #f7f1e8 (warm cream)
- Foreground: #201714
- 不得新增其他主色

## Typography

- 中文: Noto Sans TC (weights 400/500/600/700)
- 英文: Geist Sans
- Mono: Geist Mono
- H1 必須做 text-wrap: balance

## 動態層

- Hero 入場: Motion stagger (H1 blur in → subtitle fade in → CTA fade up)
- Scroll: Lenis (duration 1.2, easing cubic-out)
- Button hover: translate-y -0.5 + color transition
- 尊重 prefers-reduced-motion (已在 globals.css)

## 參考
決策 [2026-04-11] pre-launch-check skill 建立決策。所有改動必過 /pre-launch-check。
