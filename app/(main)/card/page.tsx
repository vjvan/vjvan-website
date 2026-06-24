import type { Metadata } from "next";
import Link from "next/link";
import CtaLink from "@/components/CtaLink";
import JsonLd from "@/components/JsonLd";

const LINE_URL = "https://lin.ee/XjnkG91";
const EMAIL = "vjvan.n@gmail.com";

export const metadata: Metadata = {
  title: "電子名片 · Card",
  description:
    "允雷（VJVAN 唯捷允雷有限公司）的一頁式電子名片。AI 商業系統架構師，專注 LINE LIFF、流程自動化、ERP-Lite 與 AI 搜尋可見度。掃碼即可存聯絡方式、加 LINE、預約諮詢。",
  alternates: { canonical: "https://www.vjvan.com/card" },
  openGraph: {
    title: "允雷 · VJVAN 電子名片",
    description: "AI 商業系統架構師，幫企業把營運流程整理成能長期自動運行的系統。",
    url: "https://www.vjvan.com/card",
    type: "profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "允雷 · VJVAN 電子名片" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "電子名片", item: "https://www.vjvan.com/card" },
  ],
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://www.vjvan.com/card",
  name: "允雷 · VJVAN 電子名片",
  mainEntity: {
    "@type": "Person",
    name: "允雷",
    alternateName: ["VJVAN", "唯捷允雷"],
    jobTitle: "AI 商業系統架構師",
    url: "https://www.vjvan.com",
    image: "https://www.vjvan.com/portrait.png",
    email: EMAIL,
    worksFor: {
      "@type": "Organization",
      name: "唯捷允雷有限公司",
      alternateName: "VJVAN",
      url: "https://www.vjvan.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "屏東 Pingtung",
      addressCountry: "TW",
    },
    sameAs: [
      "https://www.threads.net/@vjvan_n",
      "https://www.instagram.com/vjvan_n",
      "https://x.com/vjvan_n",
      "https://www.linkedin.com/in/vjvan",
      "https://www.youtube.com/@%E5%85%81%E9%9B%B7",
      "https://www.facebook.com/vjvan.tw",
      "https://github.com/vjvan",
    ],
  },
};

const services = [
  { label: "LINE LIFF 系統", body: "補貨、預約、會員，讓客戶在 LINE 裡直接完成下單與互動。" },
  { label: "AI 系統與流程自動化", body: "把 LINE、Google Sheet、ERP、n8n 串成一條自動跑的流水線。" },
  { label: "ERP-Lite 進銷存", body: "中小企業專屬的輕量後台：進貨、銷貨、庫存、客戶資料一次整理。" },
  { label: "官網與 AI 搜尋可見度", body: "讓 Google 與 AI 助理都能正確找到你、介紹你（SEO / AEO / GEO）。" },
];

const works = [
  { label: "食材通路 B2B", body: "LINE 下單直接接進後台與 ERP，業務不用再手抄訂單。" },
  { label: "汽車美容預約", body: "線上預約加會員制與自動提醒，門市少接很多電話。" },
  { label: "雲端整合", body: "把分散的工具與資料接上同一套雲端架構，長期好維護。" },
];

const socials = [
  { label: "Threads", href: "https://www.threads.net/@vjvan_n" },
  { label: "Instagram", href: "https://www.instagram.com/vjvan_n" },
  { label: "X", href: "https://x.com/vjvan_n" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vjvan" },
  { label: "YouTube", href: "https://www.youtube.com/@%E5%85%81%E9%9B%B7" },
  { label: "Facebook", href: "https://www.facebook.com/vjvan.tw" },
  { label: "GitHub", href: "https://github.com/vjvan" },
];

const sectionLabelStyle = {
  fontFamily: "var(--f-mono), monospace",
  color: "var(--ink-muted)",
} as const;

const zhBody = "var(--f-zh-body), sans-serif";
const zhDisplay = "var(--f-zh-display), serif";

function PrimaryAction({
  kicker,
  title,
  glyph,
  href,
  download,
  external,
}: {
  kicker: string;
  title: string;
  glyph: string;
  href: string;
  download?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="flex flex-col gap-1">
        <span className="eyebrow" style={{ color: "var(--signal)" }}>
          {kicker}
        </span>
        <span style={{ fontFamily: zhBody, fontSize: 16, lineHeight: 1.5, color: "var(--ink)" }}>
          {title}
        </span>
      </span>
      <span
        aria-hidden="true"
        style={{ fontFamily: "var(--f-mono), monospace", fontSize: 18, color: "var(--ink-muted)" }}
      >
        {glyph}
      </span>
    </>
  );

  const className =
    "editorial-card editorial-card--interactive flex items-center justify-between gap-4 px-5 py-4";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  if (download) {
    return (
      <a href={href} download={download} className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export default function CardPage() {
  return (
    <>
      <JsonLd id="json-ld-card-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-card-profile" data={profilePageJsonLd} />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[680px] py-12 md:py-20">
          {/* 識別區 */}
          <section>
            <div className="eyebrow mb-8">數位名片 · DIGITAL CARD</div>
            <div className="flex items-center gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portrait.png"
                alt="允雷 · VJVAN"
                width={88}
                height={88}
                className="rounded-full object-cover"
                style={{ width: 88, height: 88, border: "1px solid var(--rule)", flexShrink: 0 }}
              />
              <div className="min-w-0">
                <h1
                  className="m-0"
                  style={{
                    fontFamily: zhDisplay,
                    fontWeight: 400,
                    fontSize: "clamp(34px, 8vw, 46px)",
                    lineHeight: 1.1,
                    letterSpacing: "0.01em",
                  }}
                >
                  允雷
                  <span style={{ color: "var(--ink-muted)", fontSize: "0.5em", marginLeft: 10 }}>
                    VJVAN
                  </span>
                </h1>
                <div className="eyebrow mt-2" style={{ color: "var(--signal)" }}>
                  AI 商業系統架構師
                </div>
                <div
                  className="mt-1"
                  style={{ fontFamily: zhBody, fontSize: 13, lineHeight: 1.5, color: "var(--ink-muted)" }}
                >
                  唯捷允雷有限公司 · 屏東
                </div>
              </div>
            </div>
            <p
              className="mt-6 m-0"
              style={{ fontFamily: zhBody, fontSize: 18, lineHeight: 1.8, color: "var(--ink)" }}
            >
              幫企業把散在 LINE、Excel、ERP 的營運流程，整理成能長期自動運行的系統。
            </p>
          </section>

          {/* 主要行動 */}
          <section className="mt-10 grid gap-3">
            <PrimaryAction
              kicker="存入通訊錄"
              title="把我的聯絡方式存進你的手機"
              glyph="↓"
              href="/vcard"
              download="vjvan.vcf"
            />
            <PrimaryAction
              kicker="LINE 直接聊"
              title="加入官方帳號，傳訊息給我"
              glyph="→"
              href={LINE_URL}
              external
            />
            <PrimaryAction kicker="預約諮詢" title="聊聊你想自動化的流程" glyph="→" href="/consult" />
          </section>

          {/* 服務 */}
          <section className="mt-14 pt-10" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="text-[11px] tracking-[0.16em] uppercase mb-6" style={sectionLabelStyle}>
              我能幫你解決的事
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-5">
              {services.map((item) => (
                <li key={item.label}>
                  <div
                    style={{ fontFamily: zhDisplay, fontSize: 18, lineHeight: 1.4, color: "var(--ink)" }}
                  >
                    {item.label}
                  </div>
                  <p
                    className="m-0 mt-1"
                    style={{ fontFamily: zhBody, fontSize: 14, lineHeight: 1.7, color: "var(--ink-muted)" }}
                  >
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="cta-row mt-7">
              <CtaLink href="/services">看完整服務架構</CtaLink>
            </div>
          </section>

          {/* 做過的系統 */}
          <section className="mt-14 pt-10" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="text-[11px] tracking-[0.16em] uppercase mb-6" style={sectionLabelStyle}>
              做過的系統
            </div>
            <ul className="m-0 p-0 list-none grid gap-3">
              {works.map((item) => (
                <li key={item.label} className="editorial-card p-4">
                  <div
                    className="eyebrow mb-2"
                    style={{ color: "var(--signal)" }}
                  >
                    {item.label}
                  </div>
                  <p
                    className="m-0"
                    style={{ fontFamily: zhBody, fontSize: 14, lineHeight: 1.7, color: "var(--ink-muted)" }}
                  >
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="cta-row mt-7">
              <CtaLink href="/cases">看更多案例</CtaLink>
            </div>
          </section>

          {/* 聯絡與社群 */}
          <section className="mt-14 pt-10" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="text-[11px] tracking-[0.16em] uppercase mb-6" style={sectionLabelStyle}>
              聯絡與社群
            </div>
            <dl className="m-0 flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <dt className="eyebrow" style={{ width: 64, flexShrink: 0 }}>
                  EMAIL
                </dt>
                <dd className="m-0" style={{ fontFamily: zhBody, fontSize: 15 }}>
                  <a href={`mailto:${EMAIL}`} className="link-underline">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline gap-4">
                <dt className="eyebrow" style={{ width: 64, flexShrink: 0 }}>
                  網站
                </dt>
                <dd className="m-0" style={{ fontFamily: zhBody, fontSize: 15 }}>
                  <a href="https://www.vjvan.com" className="link-underline">
                    vjvan.com
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline gap-4">
                <dt className="eyebrow" style={{ width: 64, flexShrink: 0 }}>
                  LINE
                </dt>
                <dd className="m-0" style={{ fontFamily: zhBody, fontSize: 15 }}>
                  <a href={LINE_URL} target="_blank" rel="noreferrer" className="link-underline">
                    加入官方帳號
                  </a>
                </dd>
              </div>
            </dl>
            <div
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[13px]"
              style={{ fontFamily: zhBody, color: "var(--ink-muted)" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pb-[1px]"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </section>

          {/* 底部 */}
          <section className="mt-14 pt-10" style={{ borderTop: "1px solid var(--rule)" }}>
            <div className="cta-row">
              <CtaLink href="/" variant="primary">
                看完整網站
              </CtaLink>
              <CtaLink href="/about" arrow="none">
                關於允雷
              </CtaLink>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
