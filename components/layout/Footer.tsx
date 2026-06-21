import CtaLink from "@/components/CtaLink";

const LINE_URL = "https://lin.ee/XjnkG91";

export default function Footer() {
  const lastUpdated = new Intl.DateTimeFormat("zh-TW", { dateStyle: "medium" }).format(new Date());

  return (
    <footer
      className="mt-16 md:mt-24"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div className="mx-auto max-w-[1120px] px-5 md:px-10 py-12 flex flex-col gap-8">
        <div
          className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] tracking-[0.08em]"
          style={{ fontFamily: "var(--f-zh-body), sans-serif", color: "var(--ink-muted)" }}
        >
          <CtaLink href="/consult" variant="primary">
            預約諮詢
          </CtaLink>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            LINE OA
          </a>
          <a
            href="https://www.threads.net/@vjvan_n"
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            Threads
          </a>
          <a
            href="https://www.instagram.com/vjvan_n"
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            Instagram
          </a>
          <a
            href="https://x.com/vjvan_n"
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/vjvan"
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@%E5%85%81%E9%9B%B7"
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/vjvan.tw"
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            Facebook
          </a>
          <a
            href="https://github.com/vjvan"
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            GitHub
          </a>
        </div>
        <div
          className="flex flex-col gap-2 md:flex-row md:justify-between md:items-baseline text-[12px] tracking-[0.08em]"
          style={{ fontFamily: "var(--f-zh-body), sans-serif", color: "var(--ink-muted)" }}
        >
          <div>© 2026 唯捷允雷有限公司 · VJVAN</div>
          <div>屏東成立 · 觀點第一期</div>
          <div>更新 {lastUpdated}</div>
        </div>
      </div>
    </footer>
  );
}
