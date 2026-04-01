import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "服務項目",
  description:
    "LINE LIFF 前台、CRM 後台、n8n 自動化、ERP/POS 串接與 AI 系統規劃。為台灣中小企業建置真正能運轉的營運系統。",
};

const coreServices = [
  {
    label: "Frontstage",
    title: "LINE LIFF 系統開發",
    description:
      "把預約、下單、查詢、會員互動放進客戶最熟悉的 LINE 使用情境，降低操作門檻，也讓流程更容易落地。",
    features: [
      "預約系統、多門市時段管理與自動提醒",
      "B2B 訂購流程、訂單追蹤與會員查詢",
      "不額外下載 App，就能先快速驗證真實需求",
      "前後端分離，未來轉 App 可延用原有後端與資料庫",
    ],
  },
  {
    label: "Backstage",
    title: "CRM 管理後台建置",
    description:
      "把訂單、客戶、門市與營運數據整理成管理者每天會打開的工作台，而不是只能展示的報表頁。",
    features: [
      "訂單、預約、客戶與商品的統一管理",
      "營運趨勢、客戶健康度與流失風險追蹤",
      "多門市或多角色權限與資料檢視邏輯",
      "以未來擴充與維運為前提規劃資料結構",
    ],
  },
  {
    label: "Automation",
    title: "n8n 與 AI 自動化流程",
    description:
      "把通知、推播、喚回、報表與內部交辦這類規則明確的工作交給系統，讓團隊把時間留給更高價值的事情。",
    features: [
      "預約確認、前日提醒與週期性通知",
      "流失客戶喚回、分群推播與再行銷流程",
      "週報、月報與資料整理自動生成",
      "不只堆節點，連例外情況與維運也一起設計",
    ],
  },
  {
    label: "Strategy",
    title: "AI 商業系統規劃",
    description:
      "適合在正式開發前，先把流程拆解、優先順序與系統邊界想清楚，避免一開始就做出又重又難維護的東西。",
    features: [
      "流程診斷與 AI / 自動化導入優先順序",
      "LIFF、CRM、資料模型與權限結構規劃",
      "數位轉型路線圖與 MVP 定義",
      "從顧問到落地建置可銜接，不會中途斷線",
    ],
  },
];

const engagementModes = [
  {
    title: "顧問診斷",
    description:
      "先釐清現況流程、資料散落點與哪些地方最值得自動化，適合還在評估從哪裡開始的團隊。",
  },
  {
    title: "系統建置",
    description:
      "把前台、後台、自動化與資料流整合成可實際上線的系統，適合已確認需求範圍並準備投入執行的團隊。",
  },
  {
    title: "維運優化",
    description:
      "上線後依真實使用狀況修正流程、補強權限、微調自動化與報表，讓系統能真正長期被用下去。",
  },
];

const secondaryServices = [
  {
    title: "ERP / POS 系統串接",
    description:
      "把前台訂單、庫存異動與客戶資料自動回寫到既有的 ERP 或 POS 系統，讓線上線下數據同步，真正走完商業化流程的最後一哩路。",
  },
  {
    title: "內部工作坊與流程教學",
    description:
      "如果團隊需要把 AI / 自動化觀念帶進內部，我也提供以實際工作流為主的教學與工作坊。",
  },
  {
    title: "影像與內容流程支援",
    description:
      "包含節點式 AI 影像生成工作流與內容製作相關支援，通常作為主系統專案的延伸項目處理。",
  },
];

const faqs = [
  {
    question: "專案通常需要多久？",
    answer:
      "核心版本通常約 4-5 週，完整版本約 5-7 週。實際時程取決於需求複雜度、整合範圍與資料是否到位。",
  },
  {
    question: "一定要先做 App 嗎？",
    answer:
      "不一定。很多情況下先用 LINE LIFF 會更快驗證需求，也更容易讓客戶開始使用。若後續要轉成 App，後端可沿用，前端再另外調整。",
  },
  {
    question: "只有一部分流程想先自動化，也可以合作嗎？",
    answer:
      "可以。不是每次都要從整套系統開始。很多團隊會先從預約提醒、喚回推播、報表自動化或前台表單流程切入。",
  },
  {
    question: "上線後維護怎麼安排？",
    answer:
      "可依專案性質安排維護與微調，包含系統監控、Bug 修復、功能小幅調整與流程優化，避免系統上線後失去更新節奏。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
                Services
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
                服務不是把工具湊在一起，
                <span className="block">而是把營運流程接成一套能用的系統</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                我目前的主軸聚焦在 LINE 前台、CRM 後台、n8n 自動化、ERP/POS 系統串接，以及 AI 系統規劃。
                目標不是做出一堆功能，而是讓管理者和團隊真的能更快、更穩定地運作。
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-[#f8f3eb] p-7">
              <p className="text-sm font-medium text-stone-900">適合這類需求</p>
              <ul className="mt-4 space-y-3">
                {[
                  "預約、訂單、會員或客戶資料散在不同工具",
                  "需要 LINE 入口，但不想一開始就投入 App 開發",
                  "想把提醒、推播、報表或內部通知流程自動化",
                  "已經導入很多工具，但沒有被整理成同一套系統",
                  "有既有 ERP 或 POS，需要讓新系統的資料能自動回寫",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-stone-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-14">
          <div className="grid gap-5 lg:grid-cols-2">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-[0.26em] text-amber-700">
                  {service.label}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-stone-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 md:mt-14">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-10 text-white md:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-200/80">
                合作模式
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                可以先從診斷開始，也可以直接進入系統建置
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {engagementModes.map((mode) => (
                <div
                  key={mode.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold">{mode.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-14">
          <div className="grid gap-5 lg:grid-cols-2">
            {secondaryServices.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-stone-200 bg-[#f8f3eb] p-7"
              >
                <p className="text-xs font-medium uppercase tracking-[0.26em] text-stone-500">
                  延伸支援
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-stone-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 md:mt-14">
          <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
              常見問題
            </p>
            <div className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[1.5rem] border border-stone-200 bg-stone-50/70 p-6"
                >
                  <h3 className="text-lg font-semibold text-stone-950">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-14">
          <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
                  下一步
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
                  知道流程有問題，但不確定從哪裡開始？先來聊聊現況
                </h2>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  我可以先陪你拆解現有流程，再一起判斷該先做 LIFF 前台、CRM 後台，還是先從自動化切入，避免一開始就走錯方向。
                </p>
              </div>

              <a
                href="mailto:vjvan.n@gmail.com?subject=%E8%AB%AE%E8%A9%A2%20vjvan.com%20%E6%9C%8D%E5%8B%99"
                className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
              >
                預約系統諮詢
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
