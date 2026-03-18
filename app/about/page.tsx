import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我",
  description: "允雷 - AI商業系統架構師。幫企業用AI建立自動化系統。",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">關於我</h1>

      <div className="prose prose-gray max-w-none space-y-6">
        <p className="text-lg text-gray-600">
          我是允雷,AI商業系統架構師。
        </p>
        <p className="text-gray-600">
          我幫企業用AI建立自動化系統,解決重工、耗時、低效的工作。
          從流程診斷、系統架構設計,到實際建置與上線,提供完整的AI導入服務。
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">我做的事</h2>
        <ul className="space-y-3 text-gray-600">
          <li>為企業規劃AI導入策略與自動化系統架構</li>
          <li>Weavy.ai節點式AI影像生成教學</li>
          <li>n8n自動化流程設計與建置</li>
          <li>AI影片製作相關教學</li>
        </ul>

        <h2 className="text-xl font-semibold mt-12 mb-4">工具與技術</h2>
        <ul className="space-y-3 text-gray-600">
          <li>Claude Code - 主要開發與建置工具</li>
          <li>Weavy.ai - 節點式AI影像生成</li>
          <li>n8n - 自動化流程引擎</li>
          <li>Next.js / React - 前端開發</li>
          <li>Supabase - 後端與資料庫</li>
        </ul>
      </div>
    </section>
  );
}
