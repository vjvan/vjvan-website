import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";

const url = "https://www.vjvan.com/services/seo-aeo-geo";

export const metadata: Metadata = {
  title: "SEO／AEO／GEO／AI 搜尋優化｜VJVAN 唯捷允雷",
  description:
    "SEO／AEO／GEO／AI 搜尋優化服務：用基礎 SEO、可索引架構、好內容、結構化資料與外部提及，讓企業在 Google 與 AI 搜尋時代更容易被理解、被引用、被找到。",
  alternates: { canonical: url },
  openGraph: {
    title: "SEO／AEO／GEO／AI 搜尋優化｜VJVAN · 唯捷允雷",
    description:
      "不是神秘技巧，而是把網站、內容、案例證據與結構化資料整理到搜尋引擎和 AI 系統都讀得懂。",
    url,
    type: "website",
    locale: "zh_TW",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SEO／AEO／GEO／AI 搜尋優化｜VJVAN · 唯捷允雷",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "服務", item: "https://www.vjvan.com/services" },
    { "@type": "ListItem", position: 3, name: "SEO／AEO／GEO", item: url },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO／AEO／GEO／AI 搜尋優化",
  alternateName: "AI Search Visibility Optimization",
  serviceType: "SEO, Answer Engine Optimization, Generative Engine Optimization",
  provider: {
    "@type": "Organization",
    name: "唯捷允雷有限公司",
    alternateName: "VJVAN Co., Ltd.",
    url: "https://www.vjvan.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Taiwan",
  },
  description:
    "協助企業把網站技術基礎、內容架構、案例證據、結構化資料與外部提及整理成搜尋引擎和 AI 系統可讀、可理解、可引用的公開知識資產。",
  offers: {
    "@type": "Offer",
    priceCurrency: "TWD",
    availability: "https://schema.org/InStock",
    url,
  },
};

const faqItems = [
  {
    question: "GEO 是不是有一套可以操控 ChatGPT 或 Google AI Overview 的秘密技巧？",
    answer:
      "不是。這個服務不承諾操控任何 AI 答案，也不販售神秘技巧。核心仍然是基礎 SEO、可索引網站、清楚內容、結構化資料、案例證據與可信外部提及，讓搜尋引擎與 AI 系統更容易理解你的公司。",
  },
  {
    question: "AEO／GEO 跟傳統 SEO 有什麼不同？",
    answer:
      "傳統 SEO 偏向讓頁面被搜尋結果找到；AEO／GEO 更重視你的內容能不能回答問題、能不能被摘要、能不能被引用。做法不是取代 SEO，而是把 SEO 基礎做穩後，補上問答式內容、清楚實體資訊與結構化資料。",
  },
  {
    question: "多久會看到效果？",
    answer:
      "技術修復與結構化資料通常可以在數週內完成，但搜尋與 AI 引用需要重新爬取、索引與累積信任。合理觀察期通常是 8 至 12 週，且會受到產業競爭、既有網站品質與外部提及影響。",
  },
  {
    question: "一定要重新做網站嗎？",
    answer:
      "不一定。若現有網站可維護、可索引、速度與內容架構可修，會優先做低風險修補。只有在網站本身無法產出乾淨 HTML、無法管理內容或技術債太重時，才會建議重建。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const outcomes = [
  {
    value: "SEO",
    label: "搜尋基礎",
    detail: "技術索引、metadata、canonical、sitemap、內部連結與頁面品質先做穩。",
  },
  {
    value: "AEO",
    label: "答案可讀性",
    detail: "把服務、案例、FAQ 與比較內容整理成能回答真實問題的格式。",
  },
  {
    value: "GEO",
    label: "AI 可理解",
    detail: "強化品牌實體、結構化資料、證據鏈與公開內容脈絡。",
  },
  {
    value: "Evidence",
    label: "案例證據",
    detail: "用可驗證的交付、客戶情境與專業觀點，累積被引用的理由。",
  },
];

const fits = [
  {
    label: "已經有專業服務，但搜尋結果講不清楚你是誰",
    detail: "網站有內容，卻缺少服務頁、案例頁、FAQ 與結構化資料，搜尋引擎只能讀到破碎訊號。",
  },
  {
    label: "B2B、顧問、系統整合、教育訓練與高單價服務",
    detail: "成交前客戶會大量搜尋、比較與問 AI，需要讓公開資訊足夠完整且可信。",
  },
  {
    label: "想讓公司名、創辦人與服務主題建立明確關聯",
    detail: "例如「AI 商業系統架構師」、「LINE LIFF 自動化」、「中小企業 ERP-Lite」這類可被理解的實體關係。",
  },
  {
    label: "網站已上線，但缺少持續內容與外部提及策略",
    detail: "需要把 blog、案例、社群、PR、合作頁與知識庫串成一條長期信任鏈。",
  },
];

const pains = [
  "Google 搜尋有收錄，但 AI 摘要或問答工具幾乎不引用你。",
  "服務講得太抽象，客戶看完仍不知道你解決什麼問題。",
  "網站頁面看起來漂亮，但 HTML、metadata、sitemap、schema 與內部連結不完整。",
  "公司有真實案例，卻沒有整理成可被搜尋與引用的公開證據。",
  "內容散在 Threads、簡報、LINE 對話與 Notion，沒有回到網站形成長期資產。",
];

const deliverables = [
  {
    title: "AI 搜尋可見度稽核",
    detail: "檢查索引狀態、metadata、sitemap、robots、HTML 可讀性、內容缺口、結構化資料與品牌實體訊號。",
  },
  {
    title: "服務頁與案例頁架構",
    detail: "整理適合誰、痛點、交付物、流程、案例證據、FAQ、CTA，讓搜尋者和 AI 系統都能快速理解。",
  },
  {
    title: "結構化資料與技術 SEO 修補",
    detail: "補上 BreadcrumbList、Service、FAQPage、Article、Organization 等合適 schema，並修正 canonical、sitemap 與內部連結。",
  },
  {
    title: "AEO 內容題庫",
    detail: "把客戶會問的問題拆成 FAQ、比較文、教學文、案例文與詞彙頁，形成可持續發布的內容 backlog。",
  },
  {
    title: "外部提及與內容分發建議",
    detail: "規劃哪些內容應該回到官網，哪些適合發到 Threads、LinkedIn、合作方頁面或媒體，累積可信提及。",
  },
];

const flow = [
  {
    step: "01",
    title: "診斷現況",
    detail: "先看網站是否可索引、搜尋結果如何呈現、AI 工具能否正確描述你的公司，以及主要服務頁缺哪些證據。",
  },
  {
    step: "02",
    title: "定義搜尋戰場",
    detail: "選出 3 至 5 個最該被找到的服務主題，不從流量最大開始，而從最接近成交、最能代表定位的問題開始。",
  },
  {
    step: "03",
    title: "補技術與結構",
    detail: "修 metadata、canonical、sitemap、JSON-LD、內部連結、頁面標題層級與可讀 HTML，讓機器先讀得懂。",
  },
  {
    step: "04",
    title: "重寫關鍵頁面",
    detail: "把首頁、服務頁、案例頁與 FAQ 改成能回答真實採購問題的內容，而不是只寫品牌形容詞。",
  },
  {
    step: "05",
    title: "發布與觀察",
    detail: "送出 sitemap、觀察 Search Console、追蹤收錄與查詢變化，8 至 12 週後依證據調整下一輪內容。",
  },
];

const evidence = [
  {
    title: "vjvan.com 本站第一輪 SEO／AEO 改造",
    detail:
      "已導入 llms.txt、llms-full.txt、blog FAQ／HowTo schema、案例頁與服務頁 JSON-LD、sitemap 管理與內容型 landing page，讓網站從作品集轉向可被搜尋理解的知識資產。",
  },
  {
    title: "988 廚房 B2B 系統案例內容化",
    detail:
      "把客戶案從單一作品整理成案例、流程、商業洞察與可發布文章，讓「系統交付」累積成可被搜尋與引用的專業證據。",
  },
  {
    title: "萊刻靚汽車美容系統上線紀錄",
    detail:
      "將 LINE LIFF 預約系統、資料搬遷、教育訓練與上線流程整理成案例素材，讓專案成果不只停留在內部交付。",
  },
];

const principles = [
  "不承諾排名保證，也不承諾 AI 一定引用。",
  "不把 GEO 包裝成神秘黑盒；能做的是把公開內容整理到更可信、更完整、更可索引。",
  "不為了塞關鍵字犧牲閱讀品質；能成交的內容，通常也比較容易被引用。",
  "不只修技術，也會要求真實案例、專業觀點與外部提及，因為 AI 搜尋看的是整體訊號。",
];

export default function SeoAeoGeoPage() {
  return (
    <>
      <JsonLd id="json-ld-seo-aeo-geo-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-seo-aeo-geo-service" data={serviceJsonLd} />
      <JsonLd id="json-ld-seo-aeo-geo-faq" data={faqJsonLd} />

      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          <div className="pb-12 mb-4" style={{ borderBottom: "1px solid var(--rule)" }}>
            <div
              className="mb-6 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              <span style={{ color: "var(--signal)" }}>Service N° 03</span>
              <span>·</span>
              <span>SEO / AEO / GEO</span>
              <span>·</span>
              <span>AI Search Visibility</span>
            </div>
            <h1
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(42px, 6.4vw, 88px)",
                lineHeight: 1.05,
                letterSpacing: "0.01em",
                textWrap: "balance",
              }}
            >
              讓搜尋引擎與 AI，
              <br />
              都讀得懂
              <br />
              <em style={{ fontFamily: "var(--f-display), serif", fontStyle: "italic", color: "var(--signal)" }}>
                你真正會做的事。
              </em>
            </h1>
            <p
              className="m-0 mb-6 max-w-[760px]"
              style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 18, lineHeight: 1.8, color: "var(--ink-muted)" }}
            >
              AI 搜尋不是一個可以鑽漏洞的新遊戲。Google、ChatGPT、Perplexity 或其他答案引擎要引用一家公司，前提仍然很樸素：網站要能被索引，內容要回答真實問題，結構化資料要清楚，品牌與服務要有可信的外部提及。
            </p>
            <p
              className="m-0 max-w-[760px]"
              style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16, lineHeight: 1.8, color: "var(--ink-muted)" }}
            >
              我做的 SEO／AEO／GEO，是把你的網站、案例、FAQ、服務頁、內容引擎與公開證據整理成一個「機器讀得懂、人也願意信」的系統。不是保證排名，而是讓你更有資格被找到、被理解、被引用。
            </p>
          </div>

          <section className="py-12">
            <div
              className="mb-8 text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              Search Stack
            </div>
            <div className="grid gap-x-8 gap-y-8 md:grid-cols-4 py-8" style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
              {outcomes.map((m) => (
                <div key={m.label}>
                  <div className="mb-2" style={{ fontFamily: "var(--f-display), serif", fontSize: 44, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                    {m.value}
                  </div>
                  <div className="mb-1" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>
                    {m.label}
                  </div>
                  <div style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 13, lineHeight: 1.6, color: "var(--ink-muted)" }}>
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="mb-5 text-[11px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}>
              Fit Check
            </div>
            <h2 className="m-0 mb-10" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, letterSpacing: "0.01em", fontWeight: 400 }}>
              適合誰
            </h2>
            <div className="grid gap-y-6 max-w-[920px]">
              {fits.map((f, i) => (
                <div key={f.label} className="grid gap-6 md:grid-cols-[80px_1fr] py-5" style={{ borderBottom: "1px solid var(--rule)" }}>
                  <div className="text-[12px] tracking-[0.18em]" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}>
                    N° 0{i + 1}
                  </div>
                  <div>
                    <h3 className="m-0 mb-2" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: 22, lineHeight: 1.35, fontWeight: 600 }}>
                      {f.label}
                    </h3>
                    <p className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 15, lineHeight: 1.7, color: "var(--ink-muted)" }}>
                      {f.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="mb-5 text-[11px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}>
              Pain Points
            </div>
            <h2 className="m-0 mb-10" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, letterSpacing: "0.01em", fontWeight: 400 }}>
              常見痛點
            </h2>
            <ul className="m-0 p-0 list-none grid gap-4 max-w-[820px]">
              {pains.map((pain) => (
                <li key={pain} style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16, lineHeight: 1.75, color: "var(--ink-muted)", paddingLeft: 18, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "0.78em", width: 8, height: 1, background: "var(--signal)" }} />
                  {pain}
                </li>
              ))}
            </ul>
          </section>

          <section className="py-16" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="mb-5 text-[11px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}>
              Deliverables
            </div>
            <h2 className="m-0 mb-10" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, letterSpacing: "0.01em", fontWeight: 400 }}>
              交付物
            </h2>
            <div className="grid gap-y-6 max-w-[920px]">
              {deliverables.map((item, i) => (
                <div key={item.title} className="grid gap-6 md:grid-cols-[80px_1fr] py-5" style={{ borderBottom: "1px solid var(--rule)" }}>
                  <div className="text-[12px] tracking-[0.18em]" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}>
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="m-0 mb-2" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: 22, lineHeight: 1.35, fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 15, lineHeight: 1.7, color: "var(--ink-muted)" }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="mb-5 text-[11px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}>
              Workflow
            </div>
            <h2 className="m-0 mb-10" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, letterSpacing: "0.01em", fontWeight: 400 }}>
              導入流程
            </h2>
            <div className="grid gap-y-7 max-w-[920px]">
              {flow.map((f) => (
                <div key={f.step} className="grid gap-6 md:grid-cols-[80px_1fr] py-5" style={{ borderBottom: "1px solid var(--rule)" }}>
                  <div className="text-[12px] tracking-[0.18em]" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}>
                    Step {f.step}
                  </div>
                  <div>
                    <h3 className="m-0 mb-2" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: 22, lineHeight: 1.35, fontWeight: 600 }}>
                      {f.title}
                    </h3>
                    <p className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 15, lineHeight: 1.7, color: "var(--ink-muted)" }}>
                      {f.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="mb-5 text-[11px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}>
              Evidence
            </div>
            <h2 className="m-0 mb-10" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, letterSpacing: "0.01em", fontWeight: 400 }}>
              案例證據
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {evidence.map((item) => (
                <article key={item.title} className="p-6" style={{ border: "1px solid var(--rule)" }}>
                  <h3 className="m-0 mb-3" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: 22, lineHeight: 1.35, fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 14, lineHeight: 1.7, color: "var(--ink-muted)" }}>
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="py-16" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="mb-5 text-[11px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}>
              FAQ
            </div>
            <h2 className="m-0 mb-10" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, letterSpacing: "0.01em", fontWeight: 400 }}>
              常見問題
            </h2>
            <div className="grid gap-y-6 max-w-[920px]">
              {faqItems.map((item) => (
                <div key={item.question} className="py-5" style={{ borderBottom: "1px solid var(--rule)" }}>
                  <h3 className="m-0 mb-3" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: 22, lineHeight: 1.35, fontWeight: 600 }}>
                    {item.question}
                  </h3>
                  <p className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 15, lineHeight: 1.8, color: "var(--ink-muted)" }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="mb-5 text-[11px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}>
              Principles
            </div>
            <h2 className="m-0 mb-8" style={{ fontFamily: "var(--f-zh-display), serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, letterSpacing: "0.01em", fontWeight: 400 }}>
              先講清楚我不做什麼
            </h2>
            <ul className="m-0 p-0 list-none grid gap-4 max-w-[820px]">
              {principles.map((item) => (
                <li key={item} style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16, lineHeight: 1.75, color: "var(--ink-muted)", paddingLeft: 18, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "0.78em", width: 8, height: 1, background: "var(--signal)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-16 flex flex-wrap gap-8 items-center text-[12px] tracking-[0.12em] uppercase" style={{ fontFamily: "var(--f-mono), monospace" }}>
            <CtaLink href="/consult" variant="primary">
              預約 AI 搜尋健檢
            </CtaLink>
            <CtaLink href="/services" arrow="left">
              回服務首頁
            </CtaLink>
            <CtaLink href="/cases" arrow="none">
              看案例
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
