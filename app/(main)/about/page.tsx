import type { Metadata } from "next";
import CtaLink from "@/components/CtaLink";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About · 關於",
  description:
    "VJVAN 唯捷允雷有限公司由允雷創辦，專注把中小企業散落在不同工具與對話裡的營運流程，整理成能長期自動運行的系統。",
  alternates: { canonical: "https://www.vjvan.com/about" },
  openGraph: {
    title: "關於 VJVAN · 唯捷允雷",
    description: "AI 商業系統架構師，一家位於屏東的顧問公司。",
    url: "https://www.vjvan.com/about",
    type: "profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "關於 VJVAN · 唯捷允雷" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "關於", item: "https://www.vjvan.com/about" },
  ],
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "關於 VJVAN 唯捷允雷",
  url: "https://www.vjvan.com/about",
  description:
    "允雷是 VJVAN 唯捷允雷有限公司創辦人，定位為 AI 商業系統架構師，協助台灣中小企業把 LINE、Excel、CRM、ERP 與 AI 工具整理成能長期運作的營運系統。",
  mainEntity: {
    "@type": "Person",
    name: "允雷",
    alternateName: ["VJVAN", "唯捷允雷", "AI 商業系統架構師"],
    jobTitle: "AI 商業系統架構師",
    worksFor: {
      "@type": "Organization",
      name: "唯捷允雷有限公司",
      alternateName: "VJVAN",
      url: "https://www.vjvan.com",
    },
    knowsAbout: ["LINE LIFF 自動化", "AI 商業系統架構", "ERP-Lite", "內容資產", "中小企業數位轉型"],
  },
};

const letterPrinciples = [
  {
    label: "01",
    title: "先看現場，不先賣工具",
    body: "如果問題只是流程沒有整理好，先補一張表、一段 SOP 或一個最小後台，比直接導入大型系統更負責任。",
  },
  {
    label: "02",
    title: "資料能交接，系統才算完成",
    body: "一套系統不只要當下能用，還要讓新人接得起來、老闆看得到狀態、未來 AI agent 有乾淨資料可接。",
  },
  {
    label: "03",
    title: "小公司也需要長期架構",
    body: "中小企業不一定要一次做大，但每一步都應該能接到下一步，避免今天省下成本，半年後全部重做。",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd id="json-ld-about-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-about-page" data={aboutPageJsonLd} />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          <section className="grid gap-10 md:gap-[72px] md:grid-cols-[0.7fr_2fr]">
            <aside>
              <div
                className="mb-8 text-[11px] tracking-[0.14em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
              >
                About the Author
              </div>
              <dl className="m-0 flex flex-col gap-6">
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Name
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 16, lineHeight: 1.55 }}>
                    VJVAN
                  </dd>
                </div>
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Company
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16, lineHeight: 1.55 }}>
                    唯捷允雷有限公司
                  </dd>
                </div>
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Practice
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16, lineHeight: 1.55 }}>
                    LINE LIFF 自動化、AI 商業系統架構
                  </dd>
                </div>
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Working with
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16, lineHeight: 1.55 }}>
                    台灣中小企業、個人品牌
                  </dd>
                </div>
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Also on
                  </dt>
                  <dd className="m-0 flex flex-wrap gap-x-3 gap-y-1" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 16, lineHeight: 1.55 }}>
                    <a
                      href="https://www.threads.net/@vjvan_n"
                      target="_blank"
                      rel="noreferrer"
                      className="pb-[1px]"
                      style={{ borderBottom: "1px solid var(--rule)" }}
                    >
                      Threads
                    </a>
                    <span style={{ color: "var(--ink-muted)" }}>·</span>
                    <a
                      href="https://www.youtube.com/@%E5%85%81%E9%9B%B7"
                      target="_blank"
                      rel="noreferrer"
                      className="pb-[1px]"
                      style={{ borderBottom: "1px solid var(--rule)" }}
                    >
                      YouTube
                    </a>
                    <span style={{ color: "var(--ink-muted)" }}>·</span>
                    <a
                      href="https://www.instagram.com/vjvan_n"
                      target="_blank"
                      rel="noreferrer"
                      className="pb-[1px]"
                      style={{ borderBottom: "1px solid var(--rule)" }}
                    >
                      Instagram
                    </a>
                    <span style={{ color: "var(--ink-muted)" }}>·</span>
                    <a
                      href="https://x.com/vjvan_n"
                      target="_blank"
                      rel="noreferrer"
                      className="pb-[1px]"
                      style={{ borderBottom: "1px solid var(--rule)" }}
                    >
                      X
                    </a>
                    <span style={{ color: "var(--ink-muted)" }}>·</span>
                    <a
                      href="https://www.facebook.com/vjvan.tw"
                      target="_blank"
                      rel="noreferrer"
                      className="pb-[1px]"
                      style={{ borderBottom: "1px solid var(--rule)" }}
                    >
                      Facebook
                    </a>
                    <span style={{ color: "var(--ink-muted)" }}>·</span>
                    <a
                      href="https://www.linkedin.com/in/vjvan"
                      target="_blank"
                      rel="noreferrer"
                      className="pb-[1px]"
                      style={{ borderBottom: "1px solid var(--rule)" }}
                    >
                      LinkedIn
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>

            <div>
              <h1
                className="m-0 mb-10"
                style={{
                  fontFamily: "var(--f-zh-display), serif",
                  fontWeight: 400,
                  fontSize: "clamp(40px, 5.2vw, 72px)",
                  lineHeight: 1.12,
                  letterSpacing: "0.01em",
                }}
              >
                我做的不是單點工具導入，
                <br />
                而是把營運流程整理成
                <br />
                真正能跑的系統
              </h1>
              <p
                className="m-0 mb-6 max-w-[640px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 19,
                  lineHeight: 1.85,
                  color: "var(--ink)",
                }}
              >
                有些公司買了很多 SaaS，還是每天被訂單淹沒。不是工具不夠多，是沒人把它們接起來。
              </p>
              <p
                className="m-0 mb-6 max-w-[640px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 19,
                  lineHeight: 1.85,
                  color: "var(--ink-muted)",
                }}
              >
                過去十年我做過行銷、拍過片、寫過程式、做過系統。兜了一圈，回到最根本的事：幫一家公司把「智慧」從腦袋裡拆出來，寫進可以自動運行的工作流。這是 AI 時代真正值錢的東西。
              </p>
              <p
                className="m-0 mb-6 max-w-[640px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 19,
                  lineHeight: 1.85,
                  color: "var(--ink-muted)",
                }}
              >
                2026 年，唯捷允雷（VJVAN）成為一家專注 AI 商業系統的顧問公司。這個網站是我工作的索引、寫字的地方，也是我對「一家公司應該長什麼樣」的長期思考。
              </p>
              <p
                className="m-0 max-w-[640px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 19,
                  lineHeight: 1.85,
                  color: "var(--ink-muted)",
                }}
              >
                工作上我偏好小而深。你會直接和實際負責規劃與建置的人（就是允雷，我本人）一起討論，不是先經過業務再層層轉述。需求不適合做大系統，我會直接建議先做最小可用版本。
              </p>
            </div>
          </section>

          <section
            className="mt-14 md:mt-24 pt-10 md:pt-14"
            style={{ borderTop: "1px solid var(--rule)" }}
            aria-labelledby="founder-letter-title"
          >
            <div className="grid gap-8 md:gap-[72px] md:grid-cols-[0.7fr_2fr]">
              <div
                className="text-[11px] tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
              >
                創辦人筆記 →
              </div>
              <article>
                <div
                  className="mb-8 text-[11px] tracking-[0.14em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                >
                  寫在屏東 · 少一點噪音，多一點系統
                </div>
                <h2
                  id="founder-letter-title"
                  className="m-0 mb-8 max-w-[760px]"
                  style={{
                    fontFamily: "var(--f-zh-display), serif",
                    fontSize: "clamp(32px, 4.6vw, 60px)",
                    lineHeight: 1.12,
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}
                >
                  我相信小公司也可以有很好的系統，只是不必一開始就做成大公司的樣子。
                </h2>

                <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                  <div>
                    {[
                      "我接觸的很多中小企業，其實不是不懂數位化，也不是不願意用 AI。真正卡住的是：訂單、客戶、庫存、預約、出貨、內容與老闆腦袋裡的判斷，全部散在不同地方。",
                      "所以我做的不是把更多工具塞進公司，而是先把現場怎麼運作看清楚，再決定哪一段應該被系統接住。可能是一個 LINE LIFF、一個後台、一套 ERP-Lite，也可能只是一個更好的資料流設計。",
                      "我的工作標準很簡單：系統上線後，老闆要更清楚，前線要更少轉抄，客戶要更容易完成動作。這三件事都成立，才值得往下一層自動化。",
                    ].map((paragraph) => (
                      <p
                        key={paragraph}
                        className="m-0 mb-6"
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 18,
                          lineHeight: 1.9,
                          color: "var(--ink-muted)",
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                    <div
                      className="mt-9 text-[12px] tracking-[0.14em] uppercase"
                      style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                    >
                      允雷 · VJVAN
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {letterPrinciples.map((principle) => (
                      <div
                        key={principle.label}
                        className="p-5"
                        style={{
                          border: "1px solid var(--rule)",
                          background: "color-mix(in srgb, var(--paper) 96%, var(--ink) 4%)",
                        }}
                      >
                        <div
                          className="mb-4 text-[10px] tracking-[0.16em] uppercase"
                          style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                        >
                          原則 {principle.label}
                        </div>
                        <h3
                          className="m-0 mb-3"
                          style={{
                            fontFamily: "var(--f-zh-display), serif",
                            fontSize: 22,
                            lineHeight: 1.28,
                            fontWeight: 400,
                            letterSpacing: "0.01em",
                          }}
                        >
                          {principle.title}
                        </h3>
                        <p
                          className="m-0"
                          style={{
                            fontFamily: "var(--f-zh-body), sans-serif",
                            fontSize: 14,
                            lineHeight: 1.7,
                            color: "var(--ink-muted)",
                          }}
                        >
                          {principle.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-10 flex flex-wrap gap-7 text-[12px] tracking-[0.12em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace" }}
                >
                  <CtaLink href="/consult" variant="primary">
                    預約一次系統盤點
                  </CtaLink>
                  <CtaLink href="/services" arrow="none">
                    看服務架構
                  </CtaLink>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
