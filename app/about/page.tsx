import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於允雷",
  description:
    "允雷專注於為台灣中小企業規劃與建置 LINE、CRM、n8n 串接的 AI 營運系統。",
};

const principles = [
  {
    label: "流程優先",
    title: "先理解營運卡點，再決定技術組合",
    description:
      "我不會先丟一串工具名，而是先看你的前台、內部流程、資料流與人工作業，找出真正造成效率損耗的地方。",
  },
  {
    label: "系統視角",
    title: "前台、後台、資料與自動化一起設計",
    description:
      "真正能長期運作的系統，不是只把某個畫面做出來，而是讓 LINE 體驗、CRM 管理與自動化流程接在同一條營運線上。",
  },
  {
    label: "可維運",
    title: "上線之後，團隊真的用得下去",
    description:
      "我在意的是系統上線後能不能持續被使用、能不能被管理、能不能在未來擴充，而不是只完成 demo。",
  },
];

const fitCases = [
  "已經有 LINE、表單、試算表、人工訊息混在一起，流程越做越亂",
  "需要預約、訂單、會員、回購或分眾推播整合成同一套系統",
  "想導入 AI 與自動化，但不希望最後變成更多零散工具",
  "希望先快速落地，再保留未來轉 App 或產品化的空間",
];

const workStyle = [
  "你會直接和實際規劃與建置的人討論，不是先經過業務再層層轉述。",
  "我偏好先把系統骨架搭穩，再往上疊功能，而不是先把表面做滿。",
  "如果需求不適合做大系統，我會直接建議先做最小可用版本，不會為了案子把範圍灌大。",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
            About
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            我做的不是單點工具導入，而是把營運流程整理成真的能跑的系統
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            我是允雷，專注協助台灣中小企業把 LINE 前台、CRM 後台與 n8n 自動化流程串成一套可持續維運的營運系統。
            從流程診斷、系統架構設計，到實際建置與上線後調整，我會一起把整條路走完。
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-600">
            <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2">
              高雄 / 遠端服務全台
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2">
              LINE LIFF / CRM / n8n
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2">
              LIFF 先行，保留 App Ready 架構
            </span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-[#f8f3eb] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-500">
            我特別適合的題目
          </p>
          <ul className="mt-6 space-y-4">
            {fitCases.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-stone-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[1.5rem] border border-stone-200 bg-white/80 p-6">
            <p className="text-sm font-medium text-stone-900">合作方式偏向小而深</p>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              我不是大型 agency。好處是你能直接和負責規劃與實作的人討論，決策速度快，系統脈絡也不容易在溝通中失真。
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
            方法
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
            我看 AI 導入的方式，比起多裝工具，更像是在整理一家公司真正的作業邏輯
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-amber-700">
                {principle.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-10 text-white md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-200/80">
                工作方式
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                我偏好的做法是，先把骨架搭穩，再把功能做對
              </h2>
            </div>

            <div className="space-y-4">
              {workStyle.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm leading-7 text-stone-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
                下一步
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
                如果你正在想怎麼把 AI 接進實際營運，可以先從你的流程開始聊
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                不一定一開始就要做大系統。先把現在的作業方式看清楚，再決定該從哪個環節切入，通常會比直接堆功能有效很多。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:vjvan.n@gmail.com?subject=%E8%AB%AE%E8%A9%A2%20vjvan.com%20%E5%85%B3%E6%96%BC%E5%90%88%E4%BD%9C"
                className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
              >
                預約系統諮詢
              </a>
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
