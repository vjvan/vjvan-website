import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#efe5d9]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-800">
              VJ VAN
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
              允雷
            </p>
            <p className="mt-2 text-sm font-medium text-stone-700">
              AI 商業系統架構師
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600">
              幫台灣中小企業把 LINE、CRM 與 n8n 串成能持續運轉的營運系統，從流程診斷、系統建置到上線後調整一路處理。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:vjvan.n@gmail.com"
                className="inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-white/70"
              >
                vjvan.n@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/vjvan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-white/70"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/vjvan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-white/70"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                服務聚焦
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                LINE LIFF 前台
                <br />
                CRM 管理後台
                <br />
                n8n / AI 自動化流程
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                站內導覽
              </p>
              <div className="mt-3 flex flex-col gap-3 text-sm text-stone-700">
                <Link href="/" className="hover:text-stone-950">
                  首頁
                </Link>
                <Link href="/about" className="hover:text-stone-950">
                  關於我
                </Link>
                <Link href="/services" className="hover:text-stone-950">
                  服務項目
                </Link>
                <Link href="/blog" className="hover:text-stone-950">
                  觀點
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-300/70 pt-6 text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} 允雷. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
