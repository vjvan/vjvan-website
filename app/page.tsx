import Link from "next/link";

const heroStats = [
  {
    value: "4-7 週",
    label: "核心系統交付",
    description: "依需求範圍規劃 MVP 到完整版本，從需求確認後啟動。",
  },
  {
    value: "24 / 7",
    label: "自動化持續運作",
    description: "讓預約、提醒、推播與報表流程不再依賴人工補位。",
  },
  {
    value: "LIFF + CRM + n8n",
    label: "核心交付主軸",
    description: "把前台體驗、後台管理與自動化流程串成同一套營運系統。",
  },
];

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
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(214,145,88,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(120,83,57,0.12),transparent_30%)]" />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs font-medium tracking-[0.24em] text-stone-600 uppercase shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-600" />
              AI Business Systems
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-stone-950 md:text-6xl">
              把 LINE、CRM 與 n8n
              <span className="block text-stone-700">串成真正能運轉的營運系統</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              我做的不是單點 AI 工具導入，而是把詢價、預約、回購、客服、報表和內部流程整理成一套可持續維運的系統。
              適合想提升效率、但不想讓團隊被更多零散工具綁住的中小企業。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="mailto:vjvan.n@gmail.com?subject=%E8%AB%AE%E8%A9%A2%20vjvan.com%20%E7%B3%BB%E7%B5%B1%E5%BB%BA%E7%BD%AE"
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stone-900/10 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-stone-800"
              >
                預約 30 分鐘諮詢
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-white"
              >
                查看服務與交付範圍
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-stone-600">
              <span className="rounded-full border border-stone-200 bg-white/75 px-4 py-2">
                高雄 / 遠端服務全台
              </span>
              <span className="rounded-full border border-stone-200 bg-white/75 px-4 py-2">
                LIFF 先行，保留 App Ready 架構
              </span>
              <span className="rounded-full border border-stone-200 bg-white/75 px-4 py-2">
                流程診斷 → 建置整合 → 上線維運
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-36 w-36 rounded-full bg-amber-200/50 blur-3xl" />
            <div className="absolute -right-2 bottom-10 h-32 w-32 rounded-full bg-stone-300/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 p-7 text-white shadow-[0_28px_80px_rgba(56,38,26,0.22)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
                    營運系統藍圖
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-snug">
                    讓前台體驗、後台數據與自動化流程接在同一條線上
                  </h2>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-amber-100">
                  App Ready
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "LINE 前台入口",
                    description: "預約、下單、查詢、會員互動集中在熟悉的使用情境。",
                  },
                  {
                    title: "CRM 管理後台",
                    description: "把訂單、客戶、門市與經營數據整理成可決策的畫面。",
                  },
                  {
                    title: "n8n 自動化流程",
                    description: "提醒、推播、分眾喚回與報表生成交給系統持續運轉。",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-medium text-white">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-stone-300">
                          {item.description}
                        </p>
                      </div>
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { value: "4-5 週", label: "核心版本" },
                  { value: "40%+", label: "訊息費優化空間" },
                  { value: "0 重寫", label: "未來轉 App 後端" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-5"
                  >
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-xs tracking-[0.18em] text-stone-400 uppercase">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.75rem] border border-stone-200/80 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <p className="text-3xl font-semibold tracking-tight text-stone-950">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-stone-800">{stat.label}</p>
              <p className="mt-3 text-sm leading-6 text-stone-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="rounded-[2rem] border border-stone-200 bg-white/75 p-8 shadow-sm backdrop-blur md:p-10">
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
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50/80 p-6"
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

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
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
              className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm"
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

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid gap-5 lg:grid-cols-3">
          {standards.map((standard) => (
            <div
              key={standard.title}
              className="rounded-[1.75rem] border border-stone-200 bg-[#f8f3eb] p-7"
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
        <div className="rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-10 text-white md:px-10">
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

      <section className="mx-auto max-w-6xl px-6 pt-10 pb-20 md:pt-14 md:pb-24">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
                下一步
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
                如果你想把 AI 真的接進營運，不只是多裝幾個工具，我們可以先從一次對話開始
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                先聊清楚你現在的流程、資料與營運卡點，再決定該做系統重整、LIFF 前台、CRM 後台，還是先從 n8n 自動化切進去。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="mailto:vjvan.n@gmail.com?subject=%E8%AB%AE%E8%A9%A2%20vjvan.com%20%E7%B3%BB%E7%B5%B1%E5%BB%BA%E7%BD%AE"
                className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
              >
                預約系統諮詢
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
              >
                查看完整服務
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
