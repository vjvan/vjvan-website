import CtaLink from "@/components/CtaLink";

export default function NotFound() {
  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto max-w-[1120px] py-14 md:py-24">
        <div
          className="mb-12 text-[11px] tracking-[0.18em] uppercase"
          style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
        >
          ERROR 404 · PAGE NOT FOUND
        </div>
        <h1
          className="m-0 mb-10"
          style={{
            fontFamily: "var(--f-zh-display), serif",
            fontWeight: 400,
            fontSize: "clamp(56px, 10vw, 144px)",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
          }}
        >
          找不到這頁
        </h1>
        <p
          className="m-0 mb-12 max-w-[640px]"
          style={{
            fontFamily: "var(--f-zh-body), sans-serif",
            fontSize: 19,
            lineHeight: 1.85,
            color: "var(--ink-muted)",
          }}
        >
          這個網址不存在，或是頁面被重新整理過了。可以從下面的連結繼續逛。
        </p>
        <div
          className="flex flex-wrap gap-7 text-[12px] tracking-[0.12em] uppercase"
          style={{ fontFamily: "var(--f-mono), monospace" }}
        >
          <CtaLink href="/" variant="primary">
            回首頁
          </CtaLink>
          <CtaLink href="/blog" arrow="none">
            看觀點
          </CtaLink>
          <CtaLink href="/services" arrow="none">
            看服務
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
