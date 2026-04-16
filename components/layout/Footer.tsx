import Link from "next/link";

const LINE_URL = "https://lin.ee/XjnkG91";

export default function Footer() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <footer
      className="mt-20"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div className="mx-auto max-w-[1120px] px-5 md:px-10 py-12 flex flex-col gap-8">
        <div
          className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] tracking-[0.14em] uppercase"
          style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
        >
          <Link
            href="/consult"
            className="pb-[1px]"
            style={{ color: "var(--signal)", borderBottom: "1px solid currentColor" }}
          >
            預約諮詢 →
          </Link>
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
            href="https://www.linkedin.com/in/vjvan"
            target="_blank"
            rel="noreferrer"
            className="pb-[1px]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            LinkedIn
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
          className="flex flex-col gap-2 md:flex-row md:justify-between md:items-baseline text-[11px] tracking-[0.14em] uppercase"
          style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
        >
          <div>© 2026 唯捷允雷有限公司 · VJVAN CO., LTD.</div>
          <div>FOUNDED IN PINGTUNG · EDITORIAL ISSUE 01</div>
          <div>LAST UPDATED {lastUpdated}</div>
        </div>
      </div>
    </footer>
  );
}
