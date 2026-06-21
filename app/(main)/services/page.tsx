import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Services · 服務項目",
  description:
    "VJVAN 唯捷允雷的服務項目：LINE LIFF 自動化、AI 商業系統架構、AI 搜尋可見度、個人品牌網站、ERP-Lite、季度顧問合作。",
  alternates: { canonical: "https://www.vjvan.com/services" },
  openGraph: {
    title: "Services｜VJVAN · 唯捷允雷",
    description: "LINE LIFF 自動化、AI 商業系統架構。",
    url: "https://www.vjvan.com/services",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Services｜VJVAN · 唯捷允雷" }],
  },
};

type Service = {
  id: string;
  num: string;
  titleZh: string;
  titleEn?: string;
  summary: string;
  fit: string;
  deliverables: string[];
  outcomes: string[];
  nextStep: string;
  ctaLabel: string;
  href: string;
};

const services: Service[] = [
  {
    id: "line-liff-automation",
    num: "N° 01",
    titleZh: "LINE LIFF 自動化系統",
    summary:
      "把原本散在訊息、表單、電話裡的營運流程，整理成客戶可以在 LINE 內自助完成的一條線。重點不是功能多，而是能長期自動運轉。",
    fit: "已經有 LINE 客戶池、門市或業務接單量，但訂單、預約、會員資料仍靠人工整理的公司。",
    deliverables: ["LIFF 使用者流程", "管理後台", "通知與提醒節點", "客戶／訂單資料結構", "上線驗證清單"],
    outcomes: ["減少人工轉抄", "讓客戶自助完成關鍵動作", "把 LINE 從聊天工具變成營運入口"],
    nextStep: "先盤點目前 LINE 對話、表單與後台資料流，找出最該自動化的一段。",
    ctaLabel: "盤點 LINE 流程",
    href: "/consult",
  },
  {
    id: "ai-business-system",
    num: "N° 02",
    titleZh: "AI 商業系統",
    titleEn: "architecture",
    summary:
      "替中小企業盤點營運流程，設計可執行的系統藍圖。產出能交給人、AI agent 或工程團隊落地的 blueprint，不只是 PPT。",
    fit: "公司已經開始用 AI 工具，但流程仍然靠老闆腦袋、資深員工經驗或多個零散 SaaS 撐住。",
    deliverables: ["營運流程盤點", "資料流與角色分工圖", "系統優先序", "MVP 範圍", "導入路線圖"],
    outcomes: ["知道先做哪一段最有 ROI", "避免買一堆工具卻沒有系統", "讓自動化投資能被驗收"],
    nextStep: "先用一次架構諮詢，把目前最卡的營運流程畫成可執行路線。",
    ctaLabel: "看系統架構定義",
    href: "/glossary/ai-business-system",
  },
  {
    id: "ai-search-visibility",
    num: "N° 03",
    titleZh: "AI 搜尋時代",
    titleEn: "visibility",
    summary:
      "讓你的服務、案例、FAQ 與專業定義能被 Google、ChatGPT、Perplexity 等搜尋與回答系統正確理解、引用與推薦。",
    fit: "已經有專業服務或內容資產，但搜尋結果只看到競品、媒體文章，AI 回答也不會引用你的公司。",
    deliverables: ["SEO／AEO／GEO audit", "結構化資料", "llms.txt / llms-full.txt", "服務頁與 FAQ", "內容更新路線"],
    outcomes: ["讓機器讀得懂你是誰", "提升被搜尋與 AI 引用的機率", "把案例與服務頁變成長期入口"],
    nextStep: "先看完整服務頁，再決定要從技術 SEO、內容結構或案例頁開始。",
    ctaLabel: "看 AI 搜尋服務",
    href: "/services/seo-aeo-geo",
  },
  {
    id: "personal-brand-content-engine",
    num: "N° 04",
    titleZh: "個人品牌網站 + 內容引擎",
    summary:
      "替專業工作者建立可長期發佈內容的基礎建設，讓你的名字、方法論與案例在產業裡累積，而不是只靠社群短貼文流量。",
    fit: "顧問、講師、專業工作者、一人公司負責人，已經有觀點與案例，但缺一個能承接信任的主站。",
    deliverables: ["品牌定位頁", "內容分類架構", "Blog / case study 系統", "CTA 漏斗", "基礎 SEO 與社群預覽"],
    outcomes: ["把內容變成可搜尋資產", "讓陌生客戶更快理解你", "讓社群流量有地方沉澱"],
    nextStep: "先整理三篇代表觀點與三個可公開案例，確認網站要承接什麼樣的諮詢。",
    ctaLabel: "討論品牌網站",
    href: "/consult",
  },
  {
    id: "erp-lite",
    num: "N° 05",
    titleZh: "ERP-Lite 自家進銷存",
    titleEn: "system",
    summary:
      "為中小企業打造屬於自己的進貨、銷貨、庫存與客戶系統，不必一開始就導入重型 ERP，也不讓前線永遠卡在 Excel。",
    fit: "商品、庫存、客戶與訂單已經變多，但正式 ERP 太重，既有表單與試算表又開始管不住。",
    deliverables: ["資料庫設計", "進銷存流程", "LIFF / CRM 串接", "管理後台", "報表與權限規則"],
    outcomes: ["建立自家資料底座", "減少重複輸入", "讓未來 AI agent 有乾淨資料可用"],
    nextStep: "先確認商品、客戶、訂單、庫存四張核心表是否已經需要被系統化。",
    ctaLabel: "看 ERP-Lite 架構",
    href: "/services/erp-lite",
  },
  {
    id: "retainer",
    num: "N° 06",
    titleZh: "季度顧問合作",
    titleEn: "retainer",
    summary:
      "每月固定深度諮詢與系統調整，適合已經有網站、LIFF、CRM、後台或自動化流程，但需要持續優化的客戶。",
    fit: "系統已經上線，老闆開始看得到數據與新需求，但內部沒有固定的 AI 系統架構角色。",
    deliverables: ["每月優先序會議", "系統調整建議", "小型自動化修補", "營運數據回顧", "下階段 roadmap"],
    outcomes: ["避免系統上線後停滯", "讓新需求有節奏地消化", "把一次性專案變成長期營運資產"],
    nextStep: "先用一次諮詢確認目前系統狀態、每月節奏與可以承接的調整範圍。",
    ctaLabel: "討論季度合作",
    href: "/consult",
  },
];

const servicesVideoLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "VJVAN 服務體系六大項目 Cover Film",
  description: "VJVAN 唯捷允雷六大服務體系（LINE LIFF / AI 商業系統 / AI 搜尋 / 個人品牌 / ERP-Lite / 季度顧問）編輯式總覽。",
  thumbnailUrl: "https://www.vjvan.com/services-hero/services-poster.jpg",
  uploadDate: "2026-05-01",
  duration: "PT10S",
  contentUrl: "https://www.vjvan.com/services-hero/services-1600.mp4",
  embedUrl: "https://www.vjvan.com/services",
  publisher: {
    "@type": "Organization",
    name: "唯捷允雷 VJVAN",
    url: "https://www.vjvan.com/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "服務", item: "https://www.vjvan.com/services" },
  ],
};

const serviceCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VJVAN 唯捷允雷服務項目",
  url: "https://www.vjvan.com/services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.titleZh,
      description: `${service.summary} 適合對象：${service.fit} 預期成果：${service.outcomes.join("、")}。`,
      url: `https://www.vjvan.com/services#${service.id}`,
      serviceOutput: service.deliverables.join("、"),
      provider: {
        "@type": "Organization",
        name: "唯捷允雷有限公司",
        url: "https://www.vjvan.com",
      },
      areaServed: "Taiwan",
    },
  })),
};

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="pt-4" style={{ borderTop: "1px solid var(--rule)" }}>
      <div
        className="mb-3 text-[12px] tracking-[0.08em]"
        style={{ fontFamily: "var(--f-zh-body), sans-serif", color: "var(--signal)", fontWeight: 500 }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd id="json-ld-services-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-services-catalog" data={serviceCatalogJsonLd} />
      <JsonLd id="json-ld-services-video" data={servicesVideoLd} />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          <div
            className="pb-12 md:pb-12"
            style={{ borderBottom: "1px solid var(--rule)", marginBottom: 12 }}
          >
            <div
              className="mb-7 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              服務項目 / 2026
            </div>
            <h1
              className="m-0 mb-12 max-w-full"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 7vw, 96px)",
                lineHeight: 1.08,
                letterSpacing: "0.01em",
              }}
            >
              我做這些事，每一件
              <br />
              都能長成系統。
            </h1>
            <div className="grid gap-12 md:grid-cols-2">
              <div />
              <p
                className="m-0 max-w-[560px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "var(--ink-muted)",
                }}
              >
                我不做單件事的外包。每個服務都以「客戶三年後還在跑」為標準設計，而不是交付後就失聯。先盤點營運現場，再決定該用網站、LINE、CRM、ERP-Lite，還是 AI agent。
              </p>
            </div>
          </div>

          <section
            className="py-12 md:py-16"
            aria-label="服務體系總覽影片"
          >
            <div className="grid gap-6 md:gap-20 md:grid-cols-[1fr_2fr] items-baseline mb-7">
              <div
                className="text-[11px] tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
              >
                服務總覽影片 ↓
              </div>
              <div
                className="text-[11px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
              >
                10 秒 · 無聲 · 循環
              </div>
            </div>
            <HeroVideo
              poster="/services-hero/services-poster.jpg"
              webmSrc="/services-hero/services-1600.webm"
              mp4Src="/services-hero/services-1600.mp4"
              mp4MobileSrc="/services-hero/services-1280.mp4"
              ariaLabel="VJVAN 六大服務體系 Cover Film"
            />
          </section>

          <section aria-label="服務項目與適合對象">
            {services.map((service) => (
              <article
                key={service.num}
                id={service.id}
                className="scroll-mt-24 grid gap-6 md:gap-12 md:grid-cols-[80px_1fr] py-12 md:py-16"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                <div
                  className="text-[12px] tracking-[0.18em]"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                >
                  {service.num}
                </div>

                <div>
                  <div className="grid gap-6 md:grid-cols-[1fr_1.05fr] md:items-start mb-8">
                    <div>
                      <h2
                        className="m-0"
                        style={{
                          fontFamily: "var(--f-zh-display), serif",
                          fontSize: "clamp(30px, 4.4vw, 52px)",
                          lineHeight: 1.12,
                          letterSpacing: "0.01em",
                          fontWeight: 400,
                        }}
                      >
                        {service.titleZh}
                        {service.titleEn && (
                          <>
                            <br />
                            <em
                              style={{
                                fontFamily: "var(--f-display), serif",
                                fontStyle: "italic",
                                color: "var(--signal)",
                                letterSpacing: "-0.02em",
                              }}
                            >
                              {service.titleEn}
                            </em>
                          </>
                        )}
                      </h2>
                    </div>
                    <p
                      className="m-0"
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {service.summary}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-4">
                    <DetailBlock label="適合對象">
                      <p
                        className="m-0"
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "var(--ink-muted)",
                        }}
                      >
                        {service.fit}
                      </p>
                    </DetailBlock>

                    <DetailBlock label="交付物">
                      <ul
                        className="m-0 grid gap-2 pl-4"
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 14,
                          lineHeight: 1.55,
                          color: "var(--ink-muted)",
                          listStyle: "disc",
                        }}
                      >
                        {service.deliverables.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </DetailBlock>

                    <DetailBlock label="預期成果">
                      <ul
                        className="m-0 grid gap-2 pl-4"
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 14,
                          lineHeight: 1.55,
                          color: "var(--ink-muted)",
                          listStyle: "disc",
                        }}
                      >
                        {service.outcomes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </DetailBlock>

                    <DetailBlock label="下一步">
                      <p
                        className="m-0 mb-5"
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "var(--ink-muted)",
                        }}
                      >
                        {service.nextStep}
                      </p>
                      <div
                        className="text-[12px] tracking-[0.08em]"
                        style={{ fontFamily: "var(--f-zh-body), sans-serif" }}
                      >
                        <CtaLink href={service.href} variant="primary">
                          {service.ctaLabel}
                        </CtaLink>
                      </div>
                    </DetailBlock>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <div
            className="cta-row mt-12"
          >
            <CtaLink href="/consult" variant="primary">
              預約諮詢
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
