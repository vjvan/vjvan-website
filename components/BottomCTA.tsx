import EmailSubscribe from "./EmailSubscribe";

export default function BottomCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-20 md:pt-14 md:pb-24">
      <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
              下一步
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
              想把 AI 真正接進營運？我們可以先從一次對話開始
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-600">
              先聊清楚你現在的流程與營運卡點,再決定該做系統重整、LIFF 前台、CRM 後台,還是先從自動化切入。
            </p>
          </div>

          <a
            href="mailto:vjvan.n@gmail.com?subject=%E8%AB%AE%E8%A9%A2%20vjvan.com%20%E7%B3%BB%E7%B5%B1%E5%BB%BA%E7%BD%AE"
            className="inline-flex items-center justify-center rounded-full bg-action px-8 py-4 text-base font-semibold text-white shadow-lg shadow-action/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-action-hover"
          >
            預約 30 分鐘免費諮詢
          </a>
        </div>
      </div>

      <div className="mt-5 rounded-[2rem] border border-stone-200 bg-[#f8f3eb] p-8 md:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-500">
              Newsletter
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-950">
              不定期分享 AI 自動化與系統建置的實戰觀點
            </h3>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              包含流程診斷思路、技術選型判斷、以及我在幫客戶建置系統時遇到的真實問題與解法。
            </p>
          </div>

          <EmailSubscribe />
        </div>
      </div>
    </section>
  );
}
