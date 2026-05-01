import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Services · 服務項目",
  description:
    "VJVAN 唯捷允雷的服務項目:LINE LIFF 自動化、AI 商業系統架構、個人品牌網站、季度顧問合作。",
  alternates: { canonical: "https://www.vjvan.com/services" },
  openGraph: {
    title: "Services｜VJVAN · 唯捷允雷",
    description: "LINE LIFF 自動化、AI 商業系統架構。",
    url: "https://www.vjvan.com/services",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Services｜VJVAN · 唯捷允雷" }],
  },
};

const servicesVideoLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "VJVAN 服務體系六大項目 Cover Film",
  description: "VJVAN 唯捷允雷六大服務體系 (LINE LIFF / AI 商業系統 / AI 搜尋 / 個人品牌 / ERP-Lite / 季度顧問) 編輯式總覽。",
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

const services = [
  {
    num: "N° 01",
    titleZh: "LINE LIFF 自動化系統",
    titleEn: null,
    desc: "把原本散在訊息、表單、電話裡的營運流程,整理成客戶可以在 LINE 內自助完成的一條線。重點不是功能多,是能長期自動運轉。",
  },
  {
    num: "N° 02",
    titleZh: "AI 商業系統",
    titleEn: "architecture",
    desc: "替中小企業盤點營運流程,設計可執行的系統藍圖。產出可落地的 blueprint,不只是 PPT。",
  },
  {
    num: "N° 03",
    titleZh: "AI 搜尋時代",
    titleEn: "visibility",
    desc: "當客戶用 AI 搜尋你的產業時,你的公司要是第一個被引用的答案。",
  },
  {
    num: "N° 04",
    titleZh: "個人品牌網站 + 內容引擎",
    titleEn: null,
    desc: "替專業工作者建立可長期發佈內容的基礎建設,讓你的名字在產業裡累積。",
  },
  {
    num: "N° 05",
    titleZh: "ERP-Lite 自家進銷存",
    titleEn: "system",
    desc: "為中小企業量身打造屬於自己的進貨、銷貨、庫存與客戶系統，不必每年付授權費、不必綁外部 ERP 廠商。一次建好長在自家伺服器，跟現有 LIFF / CRM 共用一套資料庫。",
    href: "/services/erp-lite",
  },
  {
    num: "N° 06",
    titleZh: "季度顧問合作(Retainer)",
    titleEn: null,
    desc: "每月固定 8 至 12 小時深度諮詢 + 系統調整,適合已經上線但需要持續優化的客戶。",
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

          <section
            className="py-9 md:py-12"
            aria-label="服務體系總覽影片"
          >
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
                10 SEC · NO SOUND · LOOP
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
                  {"href" in s && s.href && (
                    <>
                      {" "}
                      <a
                        href={s.href}
                        className="inline-block text-[11px] tracking-[0.12em] uppercase pb-[1px]"
                        style={{
                          fontFamily: "var(--f-mono), monospace",
                          color: "var(--signal)",
                          borderBottom: "1px solid var(--signal)",
                          marginLeft: 6,
                        }}
                      >
                        詳情 →
                      </a>
                    </>
                  )}
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
