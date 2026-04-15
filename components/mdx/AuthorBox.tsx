import Link from "next/link";

export default function AuthorBox() {
  return (
    <div className="author-box">
      <img src="/portrait.png" alt="允雷 VJVAN" />
      <div className="author-box-content">
        <p className="author-box-name">允雷 · VJVAN</p>
        <p className="author-box-title">AI SYSTEMS ARCHITECT</p>
        <p className="author-box-bio">
          專注把台灣中小企業散在 LINE、Google Sheet、ERP、n8n 的營運流程，整理成能長期跑的系統。從流程診斷到上線維運，一起把整條路走完。
        </p>
        <Link
          href="/about"
          className="mt-3 inline-block text-[11px] tracking-[0.14em] uppercase pb-[2px]"
          style={{
            fontFamily: "var(--f-mono), monospace",
            color: "var(--signal)",
            borderBottom: "1px solid currentColor",
          }}
        >
          更多關於 VJVAN →
        </Link>
      </div>
    </div>
  );
}
