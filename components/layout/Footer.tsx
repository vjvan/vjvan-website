export default function Footer() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <footer
      className="mt-20"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div className="mx-auto max-w-[1120px] px-5 md:px-10 py-12">
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
