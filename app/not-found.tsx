import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
        找不到這個頁面
      </h1>
      <p className="mt-4 text-base leading-7 text-stone-600">
        可能是連結過期、網址輸入錯誤,或這個頁面已經被移除。
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
        >
          回首頁
        </Link>
        <Link
          href="/consult"
          className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-white"
        >
          預約諮詢
        </Link>
      </div>
    </div>
  );
}
