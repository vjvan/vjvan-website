import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "已退訂 · Unsubscribed",
  robots: { index: false, follow: false },
};

const STATUS_COPY: Record<
  string,
  { headline: string; body: string; tone: "ok" | "error" }
> = {
  all: {
    headline: "已退訂所有 email",
    body: "你不會再收到 vjvan.com 的任何 marketing email。重要的服務性通知 (例如 Founding Member 連結) 仍會寄送。",
    tone: "ok",
  },
  drip: {
    headline: "已退訂課程通知",
    body: "你不會再收到 P2P AI Lab 的 nurture email。其他類型 (newsletter / broadcast) 跟服務性信件仍會寄送。",
    tone: "ok",
  },
  newsletter: {
    headline: "已退訂電子報",
    body: "你不會再收到月度電子報。其他類型仍會寄送。",
    tone: "ok",
  },
  broadcast: {
    headline: "已退訂活動 broadcast",
    body: "你不會再收到 P2P 開站等大型 broadcast。其他類型仍會寄送。",
    tone: "ok",
  },
  invalid: {
    headline: "退訂連結無效或已過期",
    body: "請從最新一封信內的退訂連結重新點擊。如果問題持續，可直接寫信到 vjvan.n@gmail.com。",
    tone: "error",
  },
  error: {
    headline: "退訂處理時發生錯誤",
    body: "系統暫時有問題。請稍後再試，或直接寫信到 vjvan.n@gmail.com 由允雷手動處理。",
    tone: "error",
  },
};

export default async function UnsubscribedPage({
  searchParams,
}: {
  searchParams: Promise<{ scope?: string; status?: string }>;
}) {
  const params = await searchParams;
  const key = params.status || params.scope || "all";
  const copy = STATUS_COPY[key] || STATUS_COPY.all;
  const accent = copy.tone === "error" ? "var(--ink-muted)" : "var(--signal)";

  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto max-w-[680px] py-20 md:py-32">
        <div
          className="mb-8 text-[11px] tracking-[0.18em] uppercase"
          style={{ fontFamily: "var(--f-mono), monospace", color: accent, fontWeight: 500 }}
        >
          UNSUBSCRIBED · {key.toUpperCase()}
        </div>
        <h1
          className="m-0 mb-8"
          style={{
            fontFamily: "var(--f-zh-display), serif",
            fontWeight: 400,
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 1.15,
            letterSpacing: "0.01em",
          }}
        >
          {copy.headline}
        </h1>
        <p
          className="m-0 mb-10"
          style={{
            fontFamily: "var(--f-zh-body), sans-serif",
            fontSize: 18,
            lineHeight: 1.8,
            color: "var(--ink-muted)",
          }}
        >
          {copy.body}
        </p>

        {copy.tone === "ok" && (
          <p
            className="m-0 mb-10 text-[15px]"
            style={{
              fontFamily: "var(--f-zh-body), sans-serif",
              color: "var(--ink-muted)",
              lineHeight: 1.8,
            }}
          >
            如果是退錯了或想要重新訂閱，直接寫信到{" "}
            <a
              href="mailto:vjvan.n@gmail.com"
              className="pb-[1px]"
              style={{ borderBottom: "1px solid var(--signal)" }}
            >
              vjvan.n@gmail.com
            </a>{" "}
            告訴我，我會手動加回名單。
          </p>
        )}

        <div
          className="flex flex-wrap gap-7 items-center text-[12px] tracking-[0.12em] uppercase"
          style={{ fontFamily: "var(--f-mono), monospace" }}
        >
          <Link
            href="/"
            className="pb-[2px]"
            style={{ borderBottom: "1px solid var(--ink)", color: "var(--ink)" }}
          >
            回到 vjvan.com →
          </Link>
          <Link
            href="/blog"
            className="pb-[2px]"
            style={{ borderBottom: "1px solid var(--rule)", color: "var(--ink-muted)" }}
          >
            讀最近文章
          </Link>
        </div>
      </div>
    </div>
  );
}
