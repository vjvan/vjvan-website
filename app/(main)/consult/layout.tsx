import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Consult · 預約諮詢",
  description:
    "預約 30 分鐘免費諮詢，討論 LINE LIFF B2B 補貨系統、CRM 後台、n8n 自動化或 AI 導入需求。一個工作天內回覆。",
  openGraph: {
    title: "Consult｜VJVAN · 唯捷允雷",
    description: "預約 30 分鐘免費諮詢，討論系統建置需求。",
    url: "https://www.vjvan.com/consult",
    siteName: "VJVAN · 唯捷允雷",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Consult｜VJVAN · 唯捷允雷" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consult｜VJVAN · 唯捷允雷",
    description: "預約 30 分鐘免費諮詢，討論系統建置需求。",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.vjvan.com/consult",
  },
};

const consultPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "預約 30 分鐘 AI 商業系統諮詢",
  url: "https://www.vjvan.com/consult",
  description:
    "預約 30 分鐘免費諮詢，討論 LINE LIFF、ERP-Lite、CRM 後台、自動化流程、AI 導入與 SEO／AEO／GEO。",
  mainEntity: {
    "@type": "Organization",
    name: "唯捷允雷有限公司",
    alternateName: "VJVAN Co., Ltd.",
    url: "https://www.vjvan.com",
    email: "vjvan.n@gmail.com",
    areaServed: "Taiwan",
  },
};

const consultFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "第一次諮詢需要先準備規格書嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "不需要。只要描述目前的生意型態、最花時間的流程、每天大約幾筆訂單或預約，以及正在使用哪些工具，就能先判斷第一步。",
      },
    },
    {
      "@type": "Question",
      name: "送出表單後會怎麼聯絡？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "表單送出後會導向 LINE，一個工作天內由允雷本人主動聯絡，約 30 分鐘線上諮詢。",
      },
    },
    {
      "@type": "Question",
      name: "哪些需求適合先諮詢？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "適合 LINE 訊息管不動、Excel 或 Google Sheet 拖慢營運、想做 ERP-Lite／CRM／自動化，或想讓網站與內容在 AI 搜尋時代更容易被理解的中小企業與專業服務者。",
      },
    },
  ],
};

export default function ConsultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="json-ld-consult-page" data={consultPageJsonLd} />
      <JsonLd id="json-ld-consult-faq" data={consultFaqJsonLd} />
      {children}
    </>
  );
}
