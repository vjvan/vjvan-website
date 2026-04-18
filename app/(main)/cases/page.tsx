import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Cases · 系統導入案例",
  description:
    "VJVAN 唯捷允雷實際落地的系統導入案例，涵蓋食品批發 B2B 補貨、汽車美容預約、多門市 CRM 與自動化通知。",
  alternates: { canonical: "https://www.vjvan.com/cases" },
  openGraph: {
    title: "Cases｜VJVAN · 唯捷允雷",
    description: "不同產業，同一種執行力。",
    url: "https://www.vjvan.com/cases",
    type: "website",
  },
};

type Metric = { value: string; label: string; detail: string };
type Case = {
  id: string;
  num: string;
  industry: string;
  titleZh: string;
  titleEn?: string;
  subtitle: string;
  description: string;
  metrics: Metric[];
  techStack: string[];
  timeline: string;
  before: string[];
  after: string[];
};

const cases: Case[] = [
  {
    id: "b2b-replenishment",
    num: "N° 01",
    industry: "食品批發",
    titleZh: "B2B 補貨系統",
    titleEn: "replenishment",
    subtitle: "從電話抄單到 LINE 自助下單，訂單處理效率提升 4 倍。",
    description:
      "食品批發業者原本靠電話和 LINE 文字訊息接單，人工抄寫容易出錯，每週花大量時間處理訂單。導入 LINE LIFF 訂購系統 + CRM 管理後台 + n8n 自動化後，客戶可以在 LINE 內直接瀏覽商品、選規格、下單，後台即時同步。",
    metrics: [
      { value: "-75%", label: "訂單處理時間", detail: "從人工抄寫到系統自動記錄" },
      { value: "83%", label: "客戶自主下單", detail: "從電話+文字到 LIFF 自助" },
      { value: "15 hr", label: "每週省下人力", detail: "減少重複性接單與通知工作" },
      { value: "0", label: "人為訂單錯誤", detail: "客戶自行選品確認，系統自動記錄" },
    ],
    techStack: ["LINE LIFF", "Supabase", "n8n", "Next.js"],
    timeline: "4 週上線",
    before: [
      "電話 + LINE 文字訊息接單，人工抄寫",
      "手動登記訂單，容易遺漏或出錯",
      "紙本 + 記憶管理客戶，無法追蹤消費數據",
      "人工逐一通知出貨與確認",
      "每週 2 至 3 筆訂單出錯（聽錯品項、數量寫錯）",
    ],
    after: [
      "LINE 內直接瀏覽商品、選規格、下單",
      "系統自動記錄，即時同步後台",
      "CRM 後台統一管理，消費數據一目了然",
      "自動推播訂單確認、出貨提醒",
      "系統接單零人為錯誤",
    ],
  },
  {
    id: "auto-beauty-booking",
    num: "N° 02",
    industry: "汽車美容",
    titleZh: "三門市預約系統",
    titleEn: "booking",
    subtitle: "把散在 Google 表單和電話的預約流程，整理成能自動運轉的營運系統。",
    description:
      "三間門市的汽車美容業者，預約靠電話和 Google 表單，客戶管理靠試算表，推播靠群發。導入 LINE LIFF 預約系統 + CRM 後台 + n8n 自動化 + 行銷整合模組，讓預約、管理、提醒、喚回全部系統化。",
    metrics: [
      { value: "3 間", label: "門市統一管理", detail: "各店獨立排班，老闆看合併報表" },
      { value: "40%+", label: "預估訊息費節省", detail: "精準分眾取代群發推播" },
      { value: "自動", label: "洗車週期提醒", detail: "依鍍膜方案計算下次建議時間" },
      { value: "自動", label: "流失客戶喚回", detail: "超過設定天數未回訪自動推播" },
    ],
    techStack: ["LINE LIFF", "Supabase", "n8n", "Next.js"],
    timeline: "5 至 7 週",
    before: [
      "電話預約，容易撞時段或漏接",
      "Google 表單 + 試算表手動維護客戶資料",
      "LINE 群發推播，訊息費浪費、客戶被打擾",
      "無法追蹤客戶回購週期和流失狀況",
      "三間門市數據各自為政，老闆無法統一看報表",
    ],
    after: [
      "LINE 內選門市、選時段、一鍵預約",
      "CRM 後台統一管理預約、客戶、消費紀錄",
      "精準分眾推播，降低無效訊息量",
      "洗車週期自動提醒，流失客戶自動喚回",
      "三門市儀表板，營運數據即時對比",
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "Cases", item: "https://www.vjvan.com/cases" },
  ],
};

const caseArticles = cases.map((c) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `${c.industry}｜${c.titleZh}`,
  description: c.description,
  author: {
    "@type": "Person",
    name: "允雷",
    alternateName: ["VJVAN", "唯捷允雷"],
    url: "https://www.vjvan.com",
  },
  publisher: {
    "@type": "Organization",
    name: "唯捷允雷有限公司",
    alternateName: "VJVAN",
    url: "https://www.vjvan.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.vjvan.com/cases#${c.id}`,
  },
  inLanguage: "zh-TW",
}));

export default function CasesPage() {
  return (
    <>
      <JsonLd id="json-ld-cases-breadcrumb" data={breadcrumbJsonLd} />
      {caseArticles.map((ld, i) => (
        <JsonLd key={cases[i].id} id={`json-ld-case-${cases[i].id}`} data={ld} />
      ))}

      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          <div
            className="pb-12 mb-4"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            <div
              className="mb-6 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              Cases / 2026
            </div>
            <h1
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 6.5vw, 88px)",
                lineHeight: 1.05,
                letterSpacing: "0.01em",
              }}
            >
              不同產業，
              <br />
              同一種執行力。
            </h1>
            <p
              className="m-0 max-w-[640px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              以下是不同產業場景的導入成果。客戶名以產業類別代稱，細節可在諮詢時逐步展開。
            </p>
          </div>

          {cases.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="py-16 scroll-mt-24"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <div className="grid gap-6 md:gap-12 md:grid-cols-[80px_1fr] mb-10">
                <div
                  className="text-[12px] tracking-[0.18em]"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                >
                  {c.num}
                </div>
                <div>
                  <div
                    className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[11px] tracking-[0.14em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    <span style={{ color: "var(--signal)" }}>{c.industry}</span>
                    <span>·</span>
                    <span>{c.timeline}</span>
                  </div>
                  <h2
                    className="m-0 mb-4"
                    style={{
                      fontFamily: "var(--f-zh-display), serif",
                      fontSize: "clamp(32px, 4.5vw, 56px)",
                      lineHeight: 1.15,
                      letterSpacing: "0.01em",
                      fontWeight: 400,
                    }}
                  >
                    {c.titleZh}
                    {c.titleEn && (
                      <>
                        {" "}
                        <em
                          style={{
                            fontFamily: "var(--f-display), serif",
                            fontStyle: "italic",
                            color: "var(--signal)",
                          }}
                        >
                          {c.titleEn}
                        </em>
                      </>
                    )}
                  </h2>
                  <p
                    className="m-0 mb-2 max-w-[720px]"
                    style={{
                      fontFamily: "var(--f-zh-body), sans-serif",
                      fontSize: 20,
                      lineHeight: 1.6,
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    {c.subtitle}
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
                    {c.description}
                  </p>
                </div>
              </div>

              {/* Metrics - editorial strip */}
              <div
                className="grid gap-x-8 gap-y-8 md:grid-cols-4 mb-14 py-8"
                style={{
                  borderTop: "1px solid var(--rule)",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div
                      className="mb-2"
                      style={{
                        fontFamily: "var(--f-display), serif",
                        fontSize: 48,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        color: "var(--ink)",
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      className="mb-1"
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--ink)",
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Before / After */}
              <div className="grid gap-10 md:gap-16 md:grid-cols-2 max-w-[920px]">
                <div>
                  <div
                    className="mb-5 pb-2 text-[11px] tracking-[0.18em] uppercase"
                    style={{
                      fontFamily: "var(--f-mono), monospace",
                      color: "var(--ink-muted)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    Before
                  </div>
                  <ul className="m-0 p-0 list-none flex flex-col gap-3">
                    {c.before.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: "var(--ink-muted)",
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.7em",
                            width: 8,
                            height: 1,
                            background: "var(--ink-muted)",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div
                    className="mb-5 pb-2 text-[11px] tracking-[0.18em] uppercase"
                    style={{
                      fontFamily: "var(--f-mono), monospace",
                      color: "var(--signal)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    After
                  </div>
                  <ul className="m-0 p-0 list-none flex flex-col gap-3">
                    {c.after.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: "var(--ink)",
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.7em",
                            width: 8,
                            height: 1,
                            background: "var(--signal)",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          {/* CTA */}
          <div className="mt-16 flex flex-wrap gap-8 items-center text-[12px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace" }}
          >
            <CtaLink href="/consult" variant="primary">
              預約諮詢
            </CtaLink>
            <CtaLink href="/services" arrow="none">
              看服務
            </CtaLink>
            <CtaLink href="/blog" arrow="none">
              看更多觀點
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
