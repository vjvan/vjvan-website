import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "ERP-Lite 自家進銷存｜中小企業專屬 ERP",
  description:
    "為中小企業量身打造屬於自己的 ERP-Lite 系統，涵蓋進貨、銷貨、庫存、CRM、基本財務報表。不綁外部 ERP 廠商授權費，跟既有 LIFF / 客戶端共用一套資料庫，3 至 4 個月可上線。",
  alternates: { canonical: "https://www.vjvan.com/services/erp-lite" },
  openGraph: {
    title: "ERP-Lite｜VJVAN · 唯捷允雷",
    description: "把進銷存、庫存、客戶資料整理成一套會自己跑的系統，長在自家不綁廠商。",
    url: "https://www.vjvan.com/services/erp-lite",
    type: "website",
    locale: "zh_TW",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "服務", item: "https://www.vjvan.com/services" },
    { "@type": "ListItem", position: 3, name: "ERP-Lite", item: "https://www.vjvan.com/services/erp-lite" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP-Lite 自家進銷存系統",
  alternateName: "Custom Lightweight ERP for SMEs",
  serviceType: "Custom ERP development for small and medium businesses",
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
    "為中小企業設計輕量化進銷存 + 庫存 + CRM + 基本財務報表系統。不含複雜會計分錄，會計報表可匯出給會計師。長在客戶自家伺服器，無年度授權費。",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "TWD",
    lowPrice: "500000",
    highPrice: "800000",
    offerCount: "1",
  },
};

const fits = [
  {
    label: "B2B 批發 / 食材 / 原料",
    detail: "客戶下單頻率高、SKU 多、需要訂單與庫存即時連動",
  },
  {
    label: "中小型製造 / 加工",
    detail: "原料進貨、製造批次、出貨追蹤需要一條線整合",
  },
  {
    label: "通路或代理銷售",
    detail: "多客戶、多帳期、需要應收帳款與毛利分析",
  },
  {
    label: "已有 LIFF 客戶端但後台還在 Excel",
    detail: "前端客戶下單已經自動化，但內部訂單轉開單仍靠人工",
  },
];

const notFits = [
  "需要完整雙式記帳會計、稅務申報、合併報表的中大型企業",
  "業務規則需要 ISO 認證或法規嚴格控管（醫療、金融、上市公司）",
  "預算 NT$300,000 以下、希望全部買 SaaS 解決的客戶",
];

const modules = [
  { name: "進貨管理", lines: ["採購單建立、廠商管理、進貨成本歸戶"] },
  { name: "銷貨管理", lines: ["業務手動建單與 LIFF 客戶下單合流、出貨單、退貨"] },
  { name: "庫存管理", lines: ["多倉庫、批號、效期、即時庫存、低庫存提醒"] },
  { name: "CRM 客戶資料", lines: ["客戶分級、消費歷程、應收帳款帳齡"] },
  { name: "基本財務報表", lines: ["營收、毛利、進貨成本、應收應付，每月可匯出給會計師"] },
  { name: "電子發票串接", lines: ["走 ezPay / 綠界 / 藍新等 API，自動開立發票"] },
];

const outcomes = [
  { value: "1 套", label: "資料庫共用", detail: "ERP 跟 LIFF / CRM 共用同一個 PostgreSQL，不再資料分裂" },
  { value: "0", label: "年度授權費", detail: "系統長在客戶自家，不綁外部廠商每年收費" },
  { value: "3 至 4 月", label: "上線週期", detail: "ERP-Lite 範圍下的標準工期" },
  { value: "可擴", label: "未來模組擴充", detail: "需要時可加採購預測、人力排班、薪資等模組" },
];

const flow = [
  {
    step: "01",
    title: "免費諮詢與盤點",
    detail: "60 至 90 分鐘的視訊或實體會議，盤點現有流程、資料散落點、痛點優先序。會後提供書面摘要。",
  },
  {
    step: "02",
    title: "提案三件組",
    detail: "依盤點結果產出 Proposal、Battle Card 與 Domain Brief，含 A / B / C 三層方案與報價。",
  },
  {
    step: "03",
    title: "簽約與開工",
    detail: "Adobe Acrobat Sign 電子簽章、第一期 70% 款項到位後 1 週內開工。",
  },
  {
    step: "04",
    title: "分階段交付",
    detail: "每 2 至 3 週交付一個可驗收的模組，客戶可邊用邊回饋，不用等 4 個月一次性大爆炸。",
  },
  {
    step: "05",
    title: "上線與維運",
    detail: "上線後 30 天內免費 bug 修復，之後可選擇季度顧問合作（Retainer）持續優化。",
  },
];

export default function ErpLitePage() {
  return (
    <>
      <JsonLd id="json-ld-erp-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-erp-service" data={serviceJsonLd} />

      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          {/* Hero */}
          <div
            className="pb-12 mb-4"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            <div
              className="mb-6 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              <span style={{ color: "var(--signal)" }}>Service N° 05</span>
              <span>·</span>
              <span>ERP-Lite</span>
              <span>·</span>
              <span>NT$500K 至 800K</span>
            </div>
            <h1
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 6.5vw, 88px)",
                lineHeight: 1.05,
                letterSpacing: "0.01em",
                textWrap: "balance",
              }}
            >
              不必每年付授權費，
              <br />
              中小企業也能擁有
              <br />
              <em
                style={{
                  fontFamily: "var(--f-display), serif",
                  fontStyle: "italic",
                  color: "var(--signal)",
                }}
              >
                自家的 ERP。
              </em>
            </h1>
            <p
              className="m-0 mb-6 max-w-[720px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              傳統 ERP 廠商一套五十萬起跳，每年還要付授權維護費，客製要排隊半年。對年營收幾千萬到上億的中小企業來說，買不下手卻又被 Excel 拖累。ERP-Lite 是另一條路：把進銷存、庫存、CRM、基本財務報表這些真正會用到的核心，量身打造一套長在自家伺服器，跟既有 LINE LIFF 客戶端共用一套資料庫，3 至 4 個月上線。
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
              不是想取代 SAP、Oracle 那種大型 ERP。而是給「真正規模還沒到那裡、但業務已經跑不動」的中小企業，一個能用、能改、能長大的起點。
            </p>
          </div>

          {/* Outcomes */}
          <section className="py-12">
            <div
              className="mb-8 text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              What You Get
            </div>
            <div
              className="grid gap-x-8 gap-y-8 md:grid-cols-4 py-8"
              style={{
                borderTop: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              {outcomes.map((m) => (
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
          </section>

          {/* Modules */}
          <section
            className="py-16"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <div
              className="mb-5 text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              Modules
            </div>
            <h2
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                fontWeight: 400,
              }}
            >
              標準包含的六個核心模組
            </h2>
            <div className="grid gap-y-6 max-w-[920px]">
              {modules.map((m, i) => (
                <div
                  key={m.name}
                  className="grid gap-6 md:grid-cols-[80px_1fr] py-5"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  <div
                    className="text-[12px] tracking-[0.18em]"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                  >
                    N° 0{i + 1}
                  </div>
                  <div>
                    <h3
                      className="m-0 mb-2"
                      style={{
                        fontFamily: "var(--f-zh-display), serif",
                        fontSize: 22,
                        lineHeight: 1.35,
                        fontWeight: 600,
                      }}
                    >
                      {m.name}
                    </h3>
                    <p
                      className="m-0"
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {m.lines.join("、")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fit / Not Fit */}
          <section
            className="py-16"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <div
              className="mb-5 text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              Fit Check
            </div>
            <h2
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                fontWeight: 400,
              }}
            >
              這不是給每一家公司用的
            </h2>
            <div className="grid gap-10 md:grid-cols-2 max-w-[920px]">
              <div>
                <div
                  className="mb-5 pb-2 text-[11px] tracking-[0.18em] uppercase"
                  style={{
                    fontFamily: "var(--f-mono), monospace",
                    color: "var(--signal)",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  適合導入
                </div>
                <ul className="m-0 p-0 list-none flex flex-col gap-4">
                  {fits.map((f) => (
                    <li
                      key={f.label}
                      style={{
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
                      <div
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: "var(--ink)",
                          fontWeight: 500,
                          marginBottom: 4,
                        }}
                      >
                        {f.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "var(--ink-muted)",
                        }}
                      >
                        {f.detail}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  className="mb-5 pb-2 text-[11px] tracking-[0.18em] uppercase"
                  style={{
                    fontFamily: "var(--f-mono), monospace",
                    color: "var(--ink-muted)",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  不適合
                </div>
                <ul className="m-0 p-0 list-none flex flex-col gap-3">
                  {notFits.map((s) => (
                    <li
                      key={s}
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
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Workflow */}
          <section
            className="py-16"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <div
              className="mb-5 text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              Workflow
            </div>
            <h2
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                fontWeight: 400,
              }}
            >
              從諮詢到上線的五步流程
            </h2>
            <div className="grid gap-y-7 max-w-[920px]">
              {flow.map((f) => (
                <div
                  key={f.step}
                  className="grid gap-6 md:grid-cols-[80px_1fr] py-5"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  <div
                    className="text-[12px] tracking-[0.18em]"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                  >
                    Step {f.step}
                  </div>
                  <div>
                    <h3
                      className="m-0 mb-2"
                      style={{
                        fontFamily: "var(--f-zh-display), serif",
                        fontSize: 22,
                        lineHeight: 1.35,
                        fontWeight: 600,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="m-0"
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {f.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing transparency */}
          <section
            className="py-16"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <div
              className="mb-5 text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              Pricing
            </div>
            <h2
              className="m-0 mb-8"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                fontWeight: 400,
              }}
            >
              透明報價，不打迷糊仗
            </h2>
            <p
              className="m-0 mb-4 max-w-[720px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              標準範圍 NT$500,000 至 NT$800,000（未稅），分簽約期 60% 與驗收期 40% 兩階段付款。
            </p>
            <p
              className="m-0 mb-4 max-w-[720px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              實際報價依模組數量、業務流程複雜度、第三方串接需求（如電子發票、物流、金流）逐項估算。提案三件組會列出每一項工時來源，讓你看得到每一塊錢花在哪裡。
            </p>
            <p
              className="m-0 max-w-[720px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              預算低於 NT$300,000、或希望買 SaaS 解決而非客製的，我可以推薦幾家適合的工具，不勉強接案。
            </p>
          </section>

          {/* CTA */}
          <div
            className="mt-16 flex flex-wrap gap-8 items-center text-[12px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace" }}
          >
            <CtaLink href="/consult" variant="primary">
              預約諮詢
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
