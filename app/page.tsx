import BottomCTA from "@/components/BottomCTA";
import Hero from "@/components/Hero";

const problems = [
  {
    title: "資料散在不同工具",
    description:
      "LINE、表單、試算表、人工訊息各自運作，資訊無法同步，管理者很難掌握全貌。",
  },
  {
    title: "流程靠人撐著跑",
    description:
      "預約提醒、流失喚回、回購通知和報表整理都靠人工補位，團隊時間被重複工作吃掉。",
  },
  {
    title: "系統能用但不成體系",
    description:
      "你可能已經用過 AI 工具，但沒有把流程設計、資料結構與權限管理整理成長期可維運的系統。",
  },
];

const capabilities = [
  {
    eyebrow: "Frontstage",
    title: "LINE 商業前台",
    description:
      "用 LINE LIFF 建立客戶真的會打開的前台入口，降低使用門檻，同時保留未來轉 App 的彈性。",
    points: [
      "預約、下單、查詢、會員互動集中在 LINE 內完成",
      "前後端分離架構，未來擴成 App 不必重寫後端",
      "適合需要快速驗證又不想一開始就走高成本 App 開發的團隊",
    ],
  },
  {
    eyebrow: "Backstage",
    title: "CRM 與管理後台",
    description:
      "把訂單、客戶、門市與營運數據整理成能日常使用的後台，而不是只能展示的儀表板。",
    points: [
      "即時看訂單、預約、客戶健康度與多門市表現",
      "資料結構與權限規劃一起處理，後續擴充更穩定",
      "管理者能直接掌握重點，不用再等人工整理報表",
    ],
  },
  {
    eyebrow: "Automation",
    title: "n8n 與 AI 自動化流程",
    description:
      "串接通知、分眾推播、報表生成與內部任務流，把可規則化的工作交給系統持續執行。",
    points: [
      "預約確認、前日提醒、流失喚回與週報月報自動跑",
      "依客戶分群設計推播，兼顧成效與 LINE 訊息成本",
      "不是堆節點，而是把流程、例外情境與維運一起想清楚",
    ],
  },
];

const standards = [
  {
    label: "LIFF 先行，App Ready",
    title: "先快速落地，再保留產品化空間",
    description:
      "以 LINE LIFF 先驗證真實流程，未來如果需要轉獨立 App，後端 API 與資料庫維持可延用。",
  },
  {
    label: "端到端交付",
    title: "不只給建議，也把系統建到能用",
    description:
      "從流程診斷、架構設計、整合建置到上線後微調都處理，不把核心落地責任留給客戶自己收尾。",
  },
  {
    label: "管理者視角",
    title: "每個畫面都回到營運效率與決策速度",
    description:
      "設計目標不是做得炫，而是讓老闆與團隊打開系統就知道接下來要做什麼。",
  },
];

const processSteps = [
  {
    number: "01",
    title: "流程診斷",
    description:
      "先看你現有的工具、資料流與人工工作，找出真正卡住營運效率的位置。",
  },
  {
    number: "02",
    title: "架構規劃",
    description:
      "定義前台入口、資料模型、自動化節點與管理後台邏輯，避免做出只能撐短期的系統。",
  },
  {
    number: "03",
    title: "建置整合",
    description:
      "把 LIFF、CRM、n8n 與必要服務串起來，讓系統在真實場景裡開始運轉。",
  },
  {
    number: "04",
    title: "上線維運",
    description:
      "依實際使用回饋調整流程與權限，確保系統不是上線一次就放著不管。",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="rounded-[2rem] border border-whisper bg-white p-8 shadow-notion md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
              常見卡點
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
              你不是缺一個 AI 工具，而是缺一套能接住營運流程的系統
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-600">
              很多企業真正的問題不是沒有工具，而是工具彼此不相通。前台、後台、資料與自動化沒被整理成一套系統，團隊只會越用越累。
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-[1.5rem] border border-whisper bg-warm-cream p-6"
              >
                <h3 className="text-lg font-semibold text-stone-900">{problem.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 bg-warm-white md:mt-14">
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
              核心服務
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
              先把最重要的三個面向做好，系統才會真的開始產生營運價值
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-[1.75rem] border border-whisper bg-white p-7 shadow-notion"
              >
                <p className="text-xs font-medium uppercase tracking-[0.26em] text-amber-700">
                  {capability.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
                  {capability.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {capability.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {capability.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-stone-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid gap-5 lg:grid-cols-3">
          {standards.map((standard) => (
            <div
              key={standard.title}
              className="rounded-[1.75rem] border border-whisper bg-white p-7 shadow-notion"
            >
              <p className="text-sm font-medium text-amber-800">{standard.label}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-950">
                {standard.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="rounded-[2rem] border border-whisper bg-[#1a120e] px-8 py-10 text-white shadow-notion-lg md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-200/80">
              合作方式
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              先釐清流程，再設計系統，不用一開始就把預算砸在錯的地方
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm tracking-[0.24em] text-amber-200/75">{step.number}</p>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}
