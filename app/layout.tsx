import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "允雷 | AI商業系統架構師",
    template: "%s | 允雷",
  },
  description:
    "幫企業用AI建立自動化系統,解決重工、耗時、低效的工作。提供AI商業架構顧問、Weavy.ai教學、n8n自動化流程建立等服務。",
  metadataBase: new URL("https://vjvan.com"),
  openGraph: {
    title: "允雷 | AI商業系統架構師",
    description:
      "幫企業用AI建立自動化系統,解決重工、耗時、低效的工作。",
    url: "https://vjvan.com",
    siteName: "允雷",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
