import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "允雷 | AI商業系統架構師",
    template: "%s | 允雷",
  },
  description:
    "幫台灣中小企業把 LINE、CRM 與 n8n 串成真正能運轉的 AI 自動化營運系統，從流程診斷、系統建置到上線維運。",
  metadataBase: new URL("https://vjvan.com"),
  openGraph: {
    title: "允雷 | AI商業系統架構師",
    description:
      "幫台灣中小企業把 LINE、CRM 與 n8n 串成真正能運轉的 AI 自動化營運系統。",
    url: "https://vjvan.com",
    siteName: "允雷",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "允雷 | AI商業系統架構師",
    description:
      "幫台灣中小企業把 LINE、CRM 與 n8n 串成真正能運轉的 AI 自動化營運系統。",
  },
  alternates: {
    canonical: "https://vjvan.com",
  },
  other: {
    "llms.txt": "https://vjvan.com/llms.txt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "允雷",
    jobTitle: "AI 商業系統架構師",
    url: "https://vjvan.com",
    email: "vjvan.n@gmail.com",
    telephone: "+886988067272",
    image: "https://vjvan.com/images/vjvan-portrait.jpg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TW",
      addressLocality: "高雄市",
    },
    knowsAbout: [
      "LINE LIFF 開發",
      "AI 商業系統架構",
      "CRM 系統建置",
      "n8n 自動化",
      "Supabase",
      "React",
      "Next.js",
      "B2B 系統",
      "數位轉型",
    ],
    sameAs: [
      "https://www.linkedin.com/in/vjvan",
      "https://github.com/vjvan",
    ],
  };

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "允雷 AI 商業系統架構",
    url: "https://vjvan.com",
    description:
      "幫台灣中小企業用 AI 建立自動化營運系統。LINE LIFF 系統開發、CRM 後台建置、n8n 自動化流程設計。",
    areaServed: {
      "@type": "Country",
      name: "台灣",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "系統建置服務",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LINE LIFF 系統開發",
            description:
              "在 LINE 內建置預約系統、B2B 訂購系統、會員管理等功能完整的 Web App",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM 管理後台建置",
            description:
              "即時營運數據儀表板、客戶健康度追蹤、多門市統一管理",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "n8n 自動化流程設計",
            description:
              "預約通知、流失喚回、分眾推播、報表自動生成等自動化流程",
          },
        },
      ],
    },
  };

  return (
    <html lang="zh-TW">
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <Script
          id="json-ld-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} antialiased text-stone-950`}
      >
        <Header />
        <main className="min-h-screen overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
