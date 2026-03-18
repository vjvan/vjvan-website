import Link from "next/link";

const services = [
  {
    title: "AI商業架構顧問",
    description: "為企業規劃AI導入策略與自動化系統架構,從痛點分析到系統落地。",
  },
  {
    title: "Weavy.ai影像生成教學",
    description: "節點式AI影像生成工作流教學,從入門到進階應用。",
  },
  {
    title: "n8n自動化流程建立",
    description: "設計與建置自動化工作流,消除重複性工作,提升營運效率。",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          幫企業用AI
          <br />
          建立自動化系統
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          解決重工、耗時、低效的工作。從流程診斷到系統建置,讓AI成為你的營運引擎。
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/services"
            className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            了解服務
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            閱讀文章
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">服務項目</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
            >
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            準備好讓AI提升你的營運效率了嗎?
          </h2>
          <p className="mt-4 text-gray-300">
            從一次對話開始,了解AI能為你的企業做什麼。
          </p>
        </div>
      </section>
    </>
  );
}
