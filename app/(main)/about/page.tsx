import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About · 關於",
  description:
    "VJVAN 唯捷允雷有限公司由允雷創辦,專注把中小企業散落在不同工具與對話裡的營運流程,整理成能長期自動運行的系統。",
  alternates: { canonical: "https://www.vjvan.com/about" },
  openGraph: {
    title: "關於 VJVAN · 唯捷允雷",
    description: "AI 商業系統架構師，一家位於屏東的顧問公司。",
    url: "https://www.vjvan.com/about",
    type: "profile",
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

export default function AboutPage() {
  return (
    <>
      <JsonLd id="json-ld-about-breadcrumb" data={breadcrumbJsonLd} />
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
                      href="https://www.facebook.com/vvstw/"
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
                我做的是把營運
                <br />
                變成一套能跑的系統
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
                過去十年我做過行銷、拍過片、寫過程式、做過系統。兜了一圈,回到最根本的事:幫一家公司把「智慧」從腦袋裡拆出來,寫進可以自動運行的工作流。這是 AI 時代真正值錢的東西。
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
                工作上我偏好小而深。你會直接和實際規劃與建置的人討論，不是先經過業務再層層轉述。需求不適合做大系統，我會直接建議先做最小可用版本。
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
