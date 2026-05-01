import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--f-display",
  display: "optional",
  preload: true,
});

const body = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-body",
  display: "optional",
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-mono",
  display: "optional",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "VJVAN 唯捷允雷｜AI 商業系統架構師・LINE LIFF・SEO/GEO/AEO 顧問",
    template: "%s｜VJVAN 唯捷允雷",
  },
  description:
    "VJVAN 唯捷允雷有限公司，由允雷創辦，專注 AI 商業系統設計、LINE LIFF B2B 補貨系統、SEO/GEO/AEO 顧問。把散在 LINE、Google Sheet、ERP、n8n 的營運流程，整理成能長期跑的系統。",
  metadataBase: new URL("https://www.vjvan.com"),
  openGraph: {
    title: "VJVAN 唯捷允雷｜AI 商業系統架構師",
    description:
      "VJVAN 唯捷允雷有限公司，由允雷創辦，專注 AI 商業系統設計、LINE LIFF、SEO/GEO/AEO 顧問。",
    url: "https://www.vjvan.com",
    siteName: "VJVAN · 唯捷允雷",
    locale: "zh_TW",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "VJVAN 唯捷允雷 — AI 商業系統架構師",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vjvan",
    creator: "@vjvan",
    title: "VJVAN 唯捷允雷｜AI 商業系統架構師",
    description: "AI 商業系統設計、LINE LIFF、SEO/GEO/AEO 顧問。",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.vjvan.com",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "允雷",
  alternateName: ["VJVAN", "vjvan", "唯捷允雷", "Yunlei"],
  jobTitle: "AI 商業系統架構師",
  worksFor: {
    "@type": "Organization",
    name: "唯捷允雷有限公司",
    alternateName: "VJVAN Co., Ltd.",
  },
  url: "https://www.vjvan.com",
  image: "https://www.vjvan.com/portrait.png",
  email: "vjvan.n@gmail.com",
  sameAs: [
    "https://www.threads.net/@vjvan_n",
    "https://www.youtube.com/@%E5%85%81%E9%9B%B7",
    "https://www.linkedin.com/in/vjvan",
    "https://github.com/vjvan",
    "https://x.com/vjvan_n",
    "https://www.instagram.com/vjvan_n",
    "https://www.facebook.com/vjvan.tw",
  ],
  knowsAbout: [
    "AI 商業系統架構",
    "LINE LIFF 自動化",
    "SEO",
    "GEO (Generative Engine Optimization)",
    "AEO (Answer Engine Optimization)",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "屏東 Pingtung",
    addressRegion: "Pingtung",
    addressCountry: "TW",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "唯捷允雷有限公司",
  alternateName: ["VJVAN", "VJVAN Co., Ltd.", "vjvan"],
  founder: { "@type": "Person", name: "允雷" },
  foundingDate: "2026",
  url: "https://www.vjvan.com",
  logo: "https://www.vjvan.com/portrait.png",
  description: "專注 AI 商業系統設計、LINE LIFF B2B 補貨系統、SEO/GEO/AEO 顧問的台灣顧問公司",
  address: {
    "@type": "PostalAddress",
    addressLocality: "屏東",
    addressRegion: "Pingtung",
    addressCountry: "TW",
  },
  sameAs: [
    "https://www.threads.net/@vjvan_n",
    "https://www.linkedin.com/in/vjvan",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "";
  const lang = pathname.startsWith("/en") ? "en" : "zh-Hant";

  return (
    <html
      lang={lang}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`}
        </Script>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
