import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Services · 服務項目",
  description:
    "VJVAN 唯捷允雷的服務項目：LINE LIFF B2B 補貨系統、AI 商業系統架構、SEO/GEO/AEO 顧問、個人品牌網站與內容引擎、季度顧問合作。",
  alternates: { canonical: "https://www.vjvan.com/services" },
  openGraph: {
    title: "Services｜VJVAN · 唯捷允雷",
    description: "AI 商業系統設計、LINE LIFF、SEO/GEO/AEO 顧問。",
    url: "https://www.vjvan.com/services",
    type: "website",
  },
};

const services = [
  {
    num: "N° 01",
    titleZh: "LINE LIFF B2B 補貨系統",
    titleEn: null,
    desc: "幫批發、供應鏈、經銷體系把訂單從 LINE 群裡收乾淨，串 ERP、自動化補貨預測、出貨提醒。已有多家食品批發實戰案例。",
  },
  {
    num: "N° 02",
    titleZh: "AI 商業系統",
    titleEn: "architecture",
    desc: "替中小企業盤點營運流程，設計自動化工作流、資料層、權限模型。產出可執行的 blueprint，不只是 PPT。",
  },
  {
    num: "N° 03",
    titleZh: "SEO · GEO · AEO",
    titleEn: "consulting",
    desc: "當客戶用 AI 搜尋你的產業時，你的公司要是第一個被引用的答案。",
  },
  {
    num: "N° 04",
    titleZh: "個人品牌網站 + 內容引擎",
    titleEn: null,
    desc: "替專業工作者建立一套可長期發佈內容的基礎建設：網站、部落格、電子報、AI 驅動的內容產線。",
  },
  {
    num: "N° 05",
    titleZh: "季度顧問合作（Retainer）",
    titleEn: null,
    desc: "每月固定 8 至 12 小時深度諮詢 + 系統調整，適合已經上線但需要持續優化的客戶。",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "服務", item: "https://www.vjvan.com/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd id="json-ld-services-breadcrumb" data={breadcrumbJsonLd} />
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
              Services / 2026
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
                className="m-0 max-w-[520px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "var(--ink-muted)",
                }}
              >
                我不做單件事的外包。每個服務都以「客戶三年後還在跑」為標準設計，而不是交付後就失聯。一次接 3 至 4 個專案，品質優於數量。
              </p>
            </div>
          </div>

          <div>
            {services.map((s) => (
              <article
                key={s.num}
                className="grid gap-6 md:gap-12 md:grid-cols-[80px_2fr_1.2fr] py-9 items-baseline"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                <div
                  className="text-[12px] tracking-[0.18em]"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                >
                  {s.num}
                </div>
                <h2
                  className="m-0"
                  style={{
                    fontFamily: "var(--f-zh-display), serif",
                    fontSize: 28,
                    lineHeight: 1.3,
                    letterSpacing: "0.01em",
                    fontWeight: 400,
                  }}
                >
                  {s.titleZh}
                  {s.titleEn && (
                    <>
                      {" "}
                      <em
                        style={{
                          fontFamily: "var(--f-display), serif",
                          fontStyle: "italic",
                        }}
                      >
                        {s.titleEn}
                      </em>
                    </>
                  )}
                </h2>
                <p
                  className="m-0"
                  style={{
                    fontFamily: "var(--f-zh-body), sans-serif",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--ink-muted)",
                  }}
                >
                  {s.desc}
                </p>
              </article>
            ))}
          </div>

          <div
            className="mt-12 flex flex-wrap gap-7 text-[12px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace" }}
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
