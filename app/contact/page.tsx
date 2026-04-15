import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact｜VJVAN 唯捷允雷",
  description:
    "和 VJVAN 唯捷允雷聯絡。AI 商業系統諮詢、LINE LIFF B2B 補貨系統、SEO/GEO/AEO 顧問合作。",
  alternates: { canonical: "https://www.vjvan.com/contact" },
  openGraph: {
    title: "Contact｜VJVAN · 唯捷允雷",
    description: "AI 商業系統諮詢、LINE LIFF B2B 補貨系統、SEO/GEO/AEO 顧問合作。",
    url: "https://www.vjvan.com/contact",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.vjvan.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd id="json-ld-contact-breadcrumb" data={breadcrumbJsonLd} />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          <div className="grid gap-10 md:gap-[72px] md:grid-cols-[0.7fr_2fr]">
            <aside>
              <div
                className="mb-8 text-[11px] tracking-[0.14em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
              >
                Contact / Intake
              </div>
              <dl className="m-0 flex flex-col gap-6">
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Email
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 16 }}>
                    <a
                      href="mailto:vjvan.n@gmail.com"
                      className="pb-[1px]"
                      style={{ borderBottom: "1px solid var(--signal)" }}
                    >
                      vjvan.n@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Based in
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16 }}>
                    屏東 / Pingtung, Taiwan
                  </dd>
                </div>
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Response
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16 }}>
                    通常 48 小時內回覆
                  </dd>
                </div>
                <div>
                  <dt
                    className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Also on
                  </dt>
                  <dd className="m-0 flex flex-wrap gap-x-3" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 16 }}>
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
                告訴我你的
                <br />
                營運卡在哪裡
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
                我會優先回覆已經能描述具體問題的訊息：是哪個流程的哪一步、卡了多久、目前怎麼處理。
              </p>
              <p
                className="m-0 mb-10 max-w-[640px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 19,
                  lineHeight: 1.85,
                  color: "var(--ink-muted)",
                }}
              >
                不確定的話，直接寫「我們是做什麼的、一天大概處理多少筆訂單、現在誰在處理」也可以。第一次對話不收費，我會判斷是不是對的題目。
              </p>

              <div
                className="text-[12px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace" }}
              >
                <a
                  href="mailto:vjvan.n@gmail.com?subject=%E8%AB%AE%E8%A9%A2%20vjvan.com%20%E7%B3%BB%E7%B5%B1%E5%BB%BA%E7%BD%AE"
                  className="pb-[2px]"
                  style={{ color: "var(--signal)", borderBottom: "1px solid currentColor" }}
                >
                  寫信給我 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
