import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "成功案例",
  description:
    "LINE LIFF + CRM + n8n 自動化系統的實際導入成果。訂單處理時間減少 75%、客戶自主下單 83%、每週省 15 小時。",
};

const cases = [
  {
    id: "b2b-replenishment",
    industry: "食品批發",
    title: "B2B 補貨系統",
    subtitle: "從電話抄單到 LINE 自助下單，訂單處理效率提升 4 倍",
    description:
      "食品批發業者原本靠電話和 LINE 文字訊息接單，人工抄寫容易出錯，每週花大量時間處理訂單。導入 LINE LIFF 訂購系統 + CRM 管理後台 + n8n 自動化後，客戶可以在 LINE 內直接瀏覽商品、選規格、下單，後台即時同步。",
    metrics: [
      { value: "-75%", label: "訂單處理時間", detail: "從人工抄寫到系統自動記錄" },
      { value: "83%", label: "客戶自主下單", detail: "從電話+文字到 LIFF 自助" },
      { value: "15hr", label: "每週省下人力", detail: "減少重複性接單與通知工作" },
      { value: "0", label: "人為訂單錯誤", detail: "客戶自行選品確認，系統自動記錄" },
    ],
    techStack: ["LINE LIFF", "Supabase", "n8n", "Next.js"],
    timeline: "4 週上線",
    before: [
      "電話 + LINE 文字訊息接單，人工抄寫",
      "手動登記訂單，容易遺漏或出錯",
      "紙本 + 記憶管理客戶，無法追蹤消費數據",
      "人工逐一通知出貨與確認",
      "每週 2-3 筆訂單出錯（聽錯品項、數量寫錯）",
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
    industry: "汽車美容",
    title: "三門市預約系統 + 行銷整合",
    subtitle: "把散在 Google 表單和電話的預約流程，整理成一套能自動運轉的營運系統",
    description:
      "三間門市的汽車美容業者，預約靠電話和 Google 表單，客戶管理靠試算表，推播靠群發。導入 LINE LIFF 預約系統 + CRM 後台 + n8n 自動化 + 行銷整合模組，讓預約、管理、提醒、喚回全部系統化。",
    metrics: [
      { value: "3 間", label: "門市統一管理", detail: "各店獨立排班，老闆看合併報表" },
      { value: "40%+", label: "預估訊息費節省", detail: "精準分眾取代群發推播" },
      { value: "自動", label: "洗車週期提醒", detail: "依鍍膜方案計算下次建議時間" },
      { value: "自動", label: "流失客戶喚回", detail: "超過設定天數未回訪自動推播" },
    ],
    techStack: ["LINE LIFF", "Supabase", "n8n", "Next.js"],
    timeline: "5-7 週（建置中）",
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

const caseStudiesJsonLd = cases.map((c) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `${c.industry} ${c.title}`,
  description: c.description,
  author: {
    "@type": "Person",
    name: "允雷",
    jobTitle: "AI 商業系統架構師",
    url: "https://vjvan.com",
  },
  publisher: {
    "@type": "Person",
    name: "允雷",
    url: "https://vjvan.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://vjvan.com/cases#${c.id}`,
  },
  inLanguage: "zh-TW",
}));

export default function CasesPage() {
  return (
    <>
      {caseStudiesJsonLd.map((jsonLd, i) => (
        <Script
          key={cases[i].id}
          id={`json-ld-case-${cases[i].id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
            Case Studies
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            不只是做出來，而是真的被用起來
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            以下是同一套技術架構（LINE LIFF + Supabase + n8n）在不同產業場景的導入成果。
            每個案例的核心邏輯相同，但業務流程各自不同。
          </p>
        </section>

        {cases.map((c) => (
          <section key={c.id} id={c.id} className="mt-10 md:mt-14">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-amber-700">
                    {c.industry}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-base text-stone-600">{c.subtitle}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                    {c.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
                    {c.timeline}
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {c.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.5rem] border border-stone-200 bg-stone-950 p-6 text-white"
                  >
                    <p className="text-3xl font-semibold">{metric.value}</p>
                    <p className="mt-2 text-sm font-medium">{metric.label}</p>
                    <p className="mt-2 text-xs leading-5 text-stone-400">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Before / After */}
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50/80 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
                    導入前
                  </p>
                  <ul className="mt-4 space-y-3">
                    {c.before.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-stone-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-[#f8f3eb] p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
                    導入後
                  </p>
                  <ul className="mt-4 space-y-3">
                    {c.after.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-stone-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="mt-10 md:mt-14">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-10 text-white md:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-200/80">
                  你的場景也適用
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  同一套架構，不同的業務邏輯。先從你的流程開始聊。
                </h2>
                <p className="mt-4 text-base leading-7 text-stone-300">
                  不管是預約、訂購、會員管理還是內部流程自動化，核心技術棧是相同的。差異在於你的業務流程怎麼設計。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="mailto:vjvan.n@gmail.com?subject=%E8%AB%AE%E8%A9%A2%20vjvan.com%20%E6%A1%88%E4%BE%8B"
                  className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
                >
                  預約系統諮詢
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  查看服務內容
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
