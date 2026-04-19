import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "LIFF 是什麼？LINE Front-end Framework 完整定義 · VJVAN 唯捷允雷",
  description:
    "LIFF (LINE Front-end Framework) 是 LINE 官方提供的網頁框架,讓 Web App 在 LINE 內直接運行並讀取用戶資料。本頁整理 LIFF 定義、與 Mini App 的差別、常見誤區與實務應用場景。",
  alternates: { canonical: "https://www.vjvan.com/glossary/liff" },
  openGraph: {
    title: "LIFF 是什麼｜VJVAN · 唯捷允雷",
    description: "LINE Front-end Framework 完整定義 + 與 Mini App 的差別 + 實務應用場景。",
    url: "https://www.vjvan.com/glossary/liff",
    type: "article",
  },
};

const definedTermJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "LIFF",
  alternateName: "LINE Front-end Framework",
  termCode: "liff",
  description:
    "LIFF 是 LINE 官方提供的網頁應用程式框架,允許 Web App 在 LINE 內建瀏覽器運行,並透過 LIFF SDK 讀取用戶 LINE Profile、發送訊息、關閉視窗等整合功能。",
  url: "https://www.vjvan.com/glossary/liff",
  sameAs: "https://developers.line.biz/en/docs/liff/overview/",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "VJVAN Glossary",
    url: "https://www.vjvan.com/glossary",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "LIFF 跟 LINE Mini App 有什麼不同？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LIFF 是 Web App,跑在 LINE 內建瀏覽器 (WebView) 裡,開發者用熟悉的 HTML/JS 就能上線。Mini App 是 LINE 2024 年推出的新規格,需要申請審核、使用原生元件,偏向原生 App 體驗。中小企業 B2B 自動化多數用 LIFF 就足夠,Mini App 多為零售 C2C 品牌的行銷專案。",
      },
    },
    {
      "@type": "Question",
      name: "LIFF 可以獨立於 LINE 之外運行嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可以,但功能會降級。LIFF URL 在 Chrome / Safari 等外部瀏覽器打開時,無法取得 LINE Profile、無法發送 LINE 訊息,只剩一般網頁功能。實務上建議引導用戶一律從 LINE 內點開 LIFF 連結,才能用全部功能。",
      },
    },
    {
      "@type": "Question",
      name: "LIFF 一定要搭配 LINE Login 嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "不一定。基本 LIFF 只需要 User ID,不需要完整 LINE Login。但若要跨裝置同步資料、或在後台辨識用戶身份,就需要搭配 LINE Login SDK + idToken 驗證。常見誤區是以為打開 LIFF 就等於登入。",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "Glossary", item: "https://www.vjvan.com/glossary" },
    { "@type": "ListItem", position: 3, name: "LIFF", item: "https://www.vjvan.com/glossary/liff" },
  ],
};

export default function LiffGlossaryPage() {
  return (
    <>
      <JsonLd id="json-ld-liff-defined" data={definedTermJsonLd} />
      <JsonLd id="json-ld-liff-faq" data={faqJsonLd} />
      <JsonLd id="json-ld-liff-breadcrumb" data={breadcrumbJsonLd} />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[880px] py-14 md:py-24">
          <div
            className="pb-8"
            style={{ borderBottom: "1px solid var(--rule)", marginBottom: 28 }}
          >
            <div
              className="mb-6 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              Glossary / N° 01
            </div>
            <h1
              className="m-0 mb-6"
              style={{
                fontFamily: "var(--f-zh-display), var(--f-display), serif",
                fontWeight: 400,
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "0.005em",
              }}
            >
              LIFF <em style={{ fontFamily: "var(--f-display), serif", fontStyle: "italic", color: "var(--signal)" }}>LINE Front-end Framework</em>
            </h1>
            <p
              className="m-0 max-w-[640px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 20,
                lineHeight: 1.55,
                color: "var(--ink)",
              }}
            >
              LIFF 是 LINE 官方提供的網頁應用程式框架,讓 Web App 在 LINE 內直接運行,並能讀取用戶 LINE Profile、發送訊息、關閉視窗等整合功能。中小企業做 B2B 補貨、預約、會員卡自動化時,LIFF 是目前最低進入門檻的 LINE 官方方案。
            </p>
          </div>

          <section className="mb-14">
            <h2
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                marginBottom: 16,
              }}
            >
              詳細解釋
            </h2>
            <div
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--ink)",
              }}
            >
              <p style={{ margin: "0 0 16px" }}>
                LIFF 全名 <em style={{ fontStyle: "italic" }}>LINE Front-end Framework</em>,是 LINE 開發者平台推出的整合性框架,核心角色是讓網頁 App 能以「LINE 原生一部分」的形式存在 — 用戶不用安裝任何新 App,從 LINE 訊息、Rich Menu、LINE OA 訊息中點擊連結,LIFF 頁面會在 LINE 內建瀏覽器打開,並自動帶入用戶身份資訊。詳細規格見{" "}
                <a
                  href="https://developers.line.biz/en/docs/liff/overview/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--signal)", textDecoration: "underline" }}
                >
                  LINE Developers 官方文件
                </a>
                。
              </p>
              <p style={{ margin: "0 0 16px" }}>
                對中小企業老闆而言,LIFF 的價值在於「客戶已經在 LINE 裡,你把流程推到客戶面前,而不是要求客戶下載 App」。根據{" "}
                <a
                  href="https://linecorp.com/zh-hant/pr/news/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--signal)", textDecoration: "underline" }}
                >
                  LINE Taiwan 官方公告
                </a>
                ,LINE 在台灣月活用戶超過 2,100 萬,覆蓋率遠高於任何單一品牌 App,這是 LIFF 成為 B2B 自動化主流選擇的結構性優勢。
              </p>
            </div>
          </section>

          <section className="mb-14">
            <h2
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                marginBottom: 16,
              }}
            >
              常見誤區
            </h2>
            <div
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--ink)",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <strong style={{ display: "block", marginBottom: 6 }}>誤區 1:LIFF 跟 Mini App 是同一件事</strong>
                LIFF 是 Web App (HTML/JS),Mini App 是 LINE 2024 年推出的新規格,需要申請審核、走原生元件。中小企業 B2B 自動化多數用 LIFF 就足夠。
              </div>
              <div style={{ marginBottom: 20 }}>
                <strong style={{ display: "block", marginBottom: 6 }}>誤區 2:LIFF 可以完全脫離 LINE 運行</strong>
                LIFF URL 在 Chrome / Safari 打開時,功能會降級 — 無法取 LINE Profile、無法發 LINE 訊息。實務上要引導用戶從 LINE 內打開。
              </div>
              <div>
                <strong style={{ display: "block", marginBottom: 6 }}>誤區 3:打開 LIFF = 已登入</strong>
                基本 LIFF 只有 User ID,不等於 LINE Login。若要跨裝置同步、後台辨識身份,要加 LINE Login SDK + idToken 驗證。
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                marginBottom: 16,
              }}
            >
              實務應用場景
            </h2>
            <ul
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--ink)",
                paddingLeft: 20,
              }}
            >
              <li>B2B 補貨系統 (食材通路商 / 耗材供應商 / 餐飲原物料)</li>
              <li>高客單預約系統 (汽車美容 / 醫美診所 / 連鎖健身房)</li>
              <li>數位會員卡 + 次數制消費追蹤</li>
              <li>連鎖加盟總部跨店訂單整合與配送排程</li>
            </ul>
            <p
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
                marginTop: 16,
              }}
            >
              延伸閱讀:{" "}
              <Link href="/blog/line-liff-vs-app" style={{ color: "var(--signal)", textDecoration: "underline" }}>
                LIFF vs 獨立 App 怎麼選
              </Link>
              {" · "}
              <Link href="/blog/case-frozen-food-b2b-system" style={{ color: "var(--signal)", textDecoration: "underline" }}>
                冷凍水產食材通路商 B2B 補貨案例
              </Link>
            </p>
          </section>

          <section
            className="mt-14"
            style={{
              fontFamily: "var(--f-mono), monospace",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              borderTop: "1px solid var(--rule)",
              paddingTop: 16,
            }}
          >
            相關概念 <span style={{ color: "var(--signal)", margin: "0 8px" }}>·</span>
            <Link href="/glossary/ai-business-system" style={{ color: "var(--ink-muted)", textDecoration: "underline" }}>
              AI 商業系統
            </Link>
          </section>

          <div
            className="mt-12 flex flex-wrap gap-7 text-[12px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace" }}
          >
            <CtaLink href="/consult" variant="primary">
              預約 LIFF 諮詢
            </CtaLink>
            <CtaLink href="/services" arrow="none">
              看服務項目
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
