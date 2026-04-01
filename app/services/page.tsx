import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "服務項目",
  description:
    "LINE LIFF 系統開發、CRM 管理後台建置、n8n 自動化流程設計、AI 商業架構顧問。台灣中小企業數位轉型首選。",
};

const services = [
  {
    title: "LINE LIFF 系統開發",
    description:
      "在 LINE 內建置功能完整的 Web App，客戶不需下載額外 App，打開 LINE 就能預約、下單、查紀錄。",
    features: [
      "預約系統（多門市、時段管理、自動提醒）",
      "B2B 訂購系統（商品瀏覽、下單、訂單追蹤）",
      "會員管理（消費紀錄、分群標籤）",
      "前後端分離架構，未來轉 App 後端零重寫",
    ],
  },
  {
    title: "CRM 管理後台建置",
    description:
      "為企業主打造的經營管理儀表板，打開手機就能掌握營運全貌。",
    features: [
      "即時營運數據與趨勢分析",
      "客戶健康度追蹤、流失預警",
      "多門市對比儀表板",
      "訂單/預約/商品統一管理",
    ],
  },
  {
    title: "n8n 自動化流程設計",
    description:
      "串接各種工具與服務，讓重複性工作自動完成，系統 24 小時幫你跑。",
    features: [
      "預約確認與前日提醒通知",
      "流失客戶自動喚回推播",
      "精準分眾推播（降低 LINE 訊息費 40%+）",
      "週報/月報自動生成",
    ],
  },
  {
    title: "AI 商業架構顧問",
    description:
      "從痛點分析、流程拆解，到系統設計與落地執行，為企業規劃最適合的 AI 導入策略。",
    features: [
      "企業 AI 導入策略規劃",
      "數位轉型路線圖",
      "自動化系統架構設計",
      "系統建置與部署",
    ],
  },
  {
    title: "Weavy.ai 影像生成教學",
    description:
      "節點式 AI 影像生成工作流教學，從基礎操作到進階應用，建立完整的 AI 影像生成能力。",
    features: [
      "節點式工作流設計",
      "AI 影像生成實戰教學",
      "工作流範本與最佳實踐",
      "從入門到進階完整課程",
    ],
  },
  {
    title: "AI 影片製作",
    description:
      "快速產出品牌動畫、產品介紹、數據報告影片，批量客製化不需要逐支手動剪輯。",
    features: [
      "行銷影片快速產出",
      "品牌形象動畫製作",
      "數據驅動的報告影片",
      "批量客製化影片產出",
    ],
  },
];

const faqs = [
  {
    question: "LINE LIFF 系統建置費用大概多少？",
    answer:
      "費用依功能範圍、門市數量、整合需求而定，每個專案都是客製化的。歡迎聯繫討論，我會根據你的需求提供詳細報價。",
  },
  {
    question: "開發需要多久？",
    answer:
      "核心系統約 4-5 週，完整系統約 5-7 週（自需求確認完成起算）。實際時程視需求複雜度和資料到齊速度而定。",
  },
  {
    question: "客戶需要下載 App 嗎？",
    answer:
      "不需要。LINE LIFF 系統直接在 LINE 內開啟，客戶點選連結或圖文選單就能使用，零下載門檻。",
  },
  {
    question: "未來想轉成獨立 App 可以嗎？",
    answer:
      "可以。系統採前後端分離架構，後端 API 與資料庫在轉為 App 時完全不需要重寫，僅需調整前端介面，大幅降低轉換成本。",
  },
  {
    question: "系統上線後誰來維護？",
    answer:
      "提供月維護方案，包含系統監控、Bug 修復、功能微調。緊急故障保證 4 小時內回應，確保系統穩定運作。",
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

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">服務項目</h1>
        <p className="text-gray-600 mb-12">
          從顧問諮詢到系統建置到持續維護，提供完整的 AI 導入與自動化服務。
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 border border-gray-200 rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-sm text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-gray-500 flex items-start gap-2"
                  >
                    <span className="text-gray-400 mt-0.5">-</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-8">常見問題</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
