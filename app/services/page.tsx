import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務項目",
  description: "AI商業架構顧問、Weavy.ai教學、n8n自動化流程建立等服務。",
};

const services = [
  {
    title: "AI商業架構顧問",
    description:
      "為企業規劃AI導入策略與自動化系統架構。從痛點分析、流程拆解,到系統設計與落地執行。",
    features: [
      "企業AI導入策略規劃",
      "自動化系統架構設計",
      "流程優化與效率診斷",
      "系統建置與部署",
    ],
  },
  {
    title: "Weavy.ai影像生成教學",
    description:
      "節點式AI影像生成工作流教學課程。從基礎操作到進階應用,建立完整的AI影像生成能力。",
    features: [
      "節點式工作流設計",
      "AI影像生成實戰教學",
      "工作流範本與最佳實踐",
      "從入門到進階完整課程",
    ],
  },
  {
    title: "n8n自動化流程建立",
    description:
      "設計與建置自動化工作流,串接各種工具與服務,消除重複性工作,讓系統自己跑。",
    features: [
      "客製化自動化流程設計",
      "多平台API串接整合",
      "定時任務與觸發器設定",
      "流程監控與維護",
    ],
  },
  {
    title: "AI影片教學",
    description:
      "AI影片製作相關教學,運用AI工具提升影片製作效率與品質。",
    features: [
      "AI影片生成工具應用",
      "影片製作流程自動化",
      "AI輔助剪輯與後製",
      "實戰案例分享",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">服務項目</h1>
      <p className="text-gray-600 mb-12">
        從顧問諮詢到實際建置,提供完整的AI導入與自動化服務。
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-8 border border-gray-200 rounded-xl"
          >
            <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
            <p className="text-sm text-gray-600 mb-6">{service.description}</p>
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
  );
}
