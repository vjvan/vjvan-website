import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Case · 南台灣冷凍食品 B2B 訂單流自動化",
  description:
    "VJVAN 唯捷允雷實戰案例：南台灣冷凍食品 B2B 批發商，把散在 LINE 群組、Excel、電話的訂單流，整理成一條會自己跑的訂單系統。3 個月 production 連續穩定運轉，客戶下單到通知 0 分鐘，零資料遺失。",
  alternates: { canonical: "https://www.vjvan.com/cases/988-kitchen-b2b" },
  openGraph: {
    title: "南台灣冷凍食品 B2B 訂單流自動化｜VJVAN · 唯捷允雷",
    description:
      "把散在 LINE / Excel / 電話的訂單流，整理成一條會自己跑的訂單系統。3 個月 production 連續穩定運轉。",
    url: "https://www.vjvan.com/cases/988-kitchen-b2b",
    type: "article",
    locale: "zh_TW",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "988 冷凍食品 B2B 案例｜VJVAN" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "案例", item: "https://www.vjvan.com/cases" },
    { "@type": "ListItem", position: 3, name: "南台灣冷凍食品 B2B", item: "https://www.vjvan.com/cases/988-kitchen-b2b" },
  ],
};

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "南台灣冷凍食品 B2B 訂單流自動化",
  description:
    "把散在 LINE 群組、Excel、電話的訂單流，整理成一條會自己跑的訂單系統。3 個月 production 連續穩定運轉。",
  author: {
    "@type": "Person",
    name: "允雷 (Van)",
    url: "https://www.vjvan.com/about",
    image: "https://www.vjvan.com/portrait.png",
  },
  publisher: {
    "@type": "Organization",
    name: "唯捷允雷 VJVAN",
    url: "https://www.vjvan.com/",
    logo: { "@type": "ImageObject", url: "https://www.vjvan.com/portrait.png" },
  },
  datePublished: "2026-05-01",
  inLanguage: "zh-TW",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.vjvan.com/cases/988-kitchen-b2b" },
};

const caseVideoLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "南台灣冷凍食品 B2B 訂單流自動化 Cover Film",
  description: "22 秒視覺敘事:從 BEFORE (訂單散三處) 到 AFTER (一條會自己跑的訂單系統),最後展示 3 個月 production 質化成績單。純視覺無聲。",
  thumbnailUrl: "https://www.vjvan.com/cases-hero/case-988-poster.jpg",
  uploadDate: "2026-05-01",
  duration: "PT22S",
  contentUrl: "https://www.vjvan.com/cases-hero/case-988-1600.mp4",
  embedUrl: "https://www.vjvan.com/cases/988-kitchen-b2b",
  publisher: {
    "@type": "Organization",
    name: "唯捷允雷 VJVAN",
    url: "https://www.vjvan.com/",
  },
};

const kpis = [
  { value: "3 個月", label: "production 連續穩定運轉", detail: "持續中" },
  { value: "99%+", label: "訂單通知準時送達", detail: "客戶 / 司機 / 老闆三向通知" },
  { value: "0 分", label: "人工抄單時間", detail: "每筆訂單系統自動處理" },
  { value: "0 次", label: "資料遺失事件", detail: "後備機制讓掉單不發生" },
];

const platformLayers = [
  {
    name: "客戶端",
    desc: "客戶在 LINE 內就完成整個下單流程，不用裝 App、不用註冊新帳號。",
  },
  {
    name: "後端與資料層",
    desc: "雲端原生服務承載訂單資料，可信儲存 + 即時可查。",
  },
  {
    name: "自動化層",
    desc: "訂單一進系統，後續通知、紀錄、派單都自動處理，沒有人工抄單。",
  },
  {
    name: "操作介面",
    desc: "老闆熟悉的工作面板，不需學新工具，每天看訂單跟改商品照舊。",
  },
];

const beforeList = [
  "客戶在 LINE 群組打字下單，老闆要逐則翻閱避免漏單",
  "老闆 Excel 抄一遍貼進舊 ERP，每筆訂單佔 5 至 10 分鐘",
  "司機等通知打電話來確認當日要送哪幾家",
  "對帳要翻 LINE 群組 + Excel + ERP 三處比對，月結結到深夜",
];

const afterList = [
  "客戶在 LINE 內瀏覽商品、加購物車、確認下單",
  "訂單即時進入後端，資料可信儲存",
  "後續通知 / 紀錄 / 派單由系統自動處理",
  "三層後備機制確保訂單不掉，老闆隨時看得到當日訂單全貌",
];

export default function Case988Page() {
  return (
    <>
      <JsonLd id="json-ld-case988-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-case988-article" data={caseStudyJsonLd} />
      <JsonLd id="json-ld-case988-video" data={caseVideoLd} />

      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          {/* Hero */}
          <div
            className="pb-12 mb-4"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            <div
              className="mb-6 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              <span style={{ color: "var(--signal)" }}>Case Study</span>
              <span>·</span>
              <span>南台灣冷凍食品 B2B</span>
              <span>·</span>
              <span>3 MONTHS IN PROD</span>
            </div>
            <h1
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 6.5vw, 88px)",
                lineHeight: 1.05,
                letterSpacing: "0.01em",
                textWrap: "balance",
              }}
            >
              把訂單流變成
              <br />
              <em
                style={{
                  fontFamily: "var(--f-display), serif",
                  fontStyle: "italic",
                  color: "var(--signal)",
                }}
              >
                全自動的一年。
              </em>
            </h1>
            <p
              className="m-0 mb-6 max-w-[720px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              客戶是南台灣的冷凍食品 B2B 批發商，每月穩定上單。原本下單流程散在 LINE 群組、Excel、電話三個地方，老闆每天花幾個小時抄單對帳，司機等老闆通知才知道要送哪幾家，月結要熬夜結到深夜。
            </p>
            <p
              className="m-0 max-w-[720px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              我們把這條流程整理成一條會自己跑的訂單系統。客戶下單到三向通知送達 0 分鐘，3 個月 production 連續穩定運轉，零資料遺失。
            </p>
          </div>

          {/* Cover Film */}
          <section className="py-9 md:py-12" aria-label="案例 22 秒視覺敘事">
            <div className="grid gap-6 md:gap-20 md:grid-cols-[1fr_2fr] items-baseline mb-7">
              <div
                className="text-[11px] tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
              >
                COVER FILM ↓
              </div>
              <div
                className="text-[11px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
              >
                22 SEC · NO SOUND · LOOP · 5 SCENES
              </div>
            </div>
            <HeroVideo
              poster="/cases-hero/case-988-poster.jpg"
              webmSrc="/cases-hero/case-988-1600.webm"
              mp4Src="/cases-hero/case-988-1600.mp4"
              mp4MobileSrc="/cases-hero/case-988-1280.mp4"
              ariaLabel="南台灣冷凍食品 B2B 訂單流自動化案例 cover film"
            />
          </section>

          {/* KPI */}
          <section className="py-12">
            <div
              className="mb-8 text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              Results · 跑了一年的成績單
            </div>
            <div
              className="grid gap-x-12 gap-y-10 md:grid-cols-2 py-8"
              style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
            >
              {kpis.map((k) => (
                <div key={k.label}>
                  <div
                    style={{
                      fontFamily: "var(--f-display), serif",
                      fontStyle: "italic",
                      fontSize: 64,
                      lineHeight: 1.0,
                      color: "var(--signal)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {k.value}
                  </div>
                  <div
                    className="mt-4"
                    style={{
                      fontFamily: "var(--f-zh-display), serif",
                      fontSize: 22,
                      lineHeight: 1.4,
                      color: "var(--ink)",
                    }}
                  >
                    {k.label}
                  </div>
                  <div
                    className="mt-2 text-[12px] tracking-[0.12em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    {k.detail}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Before / After */}
          <section className="py-12 grid gap-12 md:grid-cols-2">
            <div>
              <div
                className="mb-6 text-[11px] tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "#B22B2B", fontWeight: 500 }}
              >
                § 01 — Before
              </div>
              <h2
                className="m-0 mb-6"
                style={{
                  fontFamily: "var(--f-zh-display), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: 1.2,
                }}
              >
                訂單散在三個地方
              </h2>
              <ul className="m-0 p-0 list-none grid gap-4">
                {beforeList.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-baseline"
                    style={{
                      fontFamily: "var(--f-zh-body), sans-serif",
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: "var(--ink)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--f-mono), monospace", color: "#B22B2B", fontWeight: 500 }}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                className="mb-6 text-[11px] tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
              >
                § 02 — After
              </div>
              <h2
                className="m-0 mb-6"
                style={{
                  fontFamily: "var(--f-zh-display), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: 1.2,
                }}
              >
                一條自動產線
              </h2>
              <ul className="m-0 p-0 list-none grid gap-4">
                {afterList.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-baseline"
                    style={{
                      fontFamily: "var(--f-zh-body), sans-serif",
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: "var(--ink)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* System Architecture (護城河保護版,只寫角色不寫品牌) */}
          <section className="py-12">
            <div
              className="mb-8 text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              System · 系統由四層構成
            </div>
            <div className="grid gap-y-8 max-w-[920px]">
              {platformLayers.map((s, i) => (
                <article
                  key={s.name}
                  className="grid gap-4 md:grid-cols-[200px_1fr] py-6"
                  style={{ borderTop: i === 0 ? "1px solid var(--rule)" : "none", borderBottom: "1px solid var(--rule)" }}
                >
                  <h3
                    className="m-0"
                    style={{
                      fontFamily: "var(--f-zh-display), serif",
                      fontWeight: 400,
                      fontSize: 26,
                      lineHeight: 1.2,
                      color: "var(--ink)",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="m-0"
                    style={{
                      fontFamily: "var(--f-zh-body), sans-serif",
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: "var(--ink)",
                    }}
                  >
                    {s.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Conclusion + CTA */}
          <section
            className="py-12 mt-8"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <h2
              className="m-0 mb-6 max-w-[820px]"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: 1.2,
              }}
            >
              這套系統不是 demo，是真的在跑的 production。
            </h2>
            <p
              className="m-0 mb-10 max-w-[680px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              如果你也是 B2B 補貨型的批發商、餐廳、食材供應商，正在用 LINE 群組接訂單、Excel 抄單對帳，這條產線可以複製到你的場景。一起聊聊。
            </p>
            <div
              className="flex flex-wrap gap-7 items-center text-[12px] tracking-[0.12em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace" }}
            >
              <CtaLink href="/consult" variant="primary">
                預約諮詢
              </CtaLink>
              <CtaLink href="/services" arrow="none">
                看其他服務
              </CtaLink>
              <CtaLink href="/cases" arrow="none">
                回案例列表
              </CtaLink>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
