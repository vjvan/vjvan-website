import type { Metadata } from "next";

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

export default function ConsultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
