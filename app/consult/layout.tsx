import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "預約諮詢",
  description:
    "預約 30 分鐘免費諮詢，討論你的 LINE 系統、CRM 後台、n8n 自動化或 AI 導入需求。一個工作天內回覆。",
  openGraph: {
    title: "預約諮詢 | 允雷",
    description:
      "預約 30 分鐘免費諮詢，討論你的系統建置需求。",
    url: "https://vjvan.com/consult",
  },
  twitter: {
    card: "summary_large_image",
    title: "預約諮詢 | 允雷",
    description:
      "預約 30 分鐘免費諮詢，討論你的系統建置需求。",
  },
  alternates: {
    canonical: "https://vjvan.com/consult",
  },
};

export default function ConsultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
