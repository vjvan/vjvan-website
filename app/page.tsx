import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";
import CtaLink from "@/components/CtaLink";

export default function Home() {
  const posts = getAllPosts();
  const latest = posts[0];

  return (
    <div className="px-5 md:px-10">
      <section
        className="mx-auto max-w-[1120px] grid gap-10 md:gap-20 items-start py-14 md:py-24"
        style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
      >
        <div className="grid gap-10 md:gap-20 md:grid-cols-[1.6fr_1fr]">
          <div>
            <div
              className="text-[11px] tracking-[0.18em] uppercase mb-7"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)", fontWeight: 500 }}
            >
              ISSUE № 01 · EST. 2026 · PINGTUNG
            </div>
            <h1
              className="m-0 mb-5"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(56px, 11vw, 144px)",
                lineHeight: 0.95,
                letterSpacing: "-0.005em",
              }}
            >
              唯捷允雷
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--signal)",
                  fontFamily: "var(--f-display), serif",
                  letterSpacing: "-0.02em",
                }}
              >
                VJVAN
              </em>
            </h1>
            <p
              className="m-0 mb-9"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: 1.4,
                letterSpacing: "0.02em",
                color: "var(--ink)",
              }}
            >
              AI 商業系統架構師
            </p>
            <p
              className="m-0 mb-11 max-w-[560px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-muted)",
              }}
            >
              我不是「做工具導入」
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>的顧問</strong>
              。我把散在 LINE、Google Sheet、ERP、n8n、客戶對話裡的營運流程，整理成一套能真的跑、能長期自動補血的系統。寫字、寫系統、寫 SEO，都是同一件事：讓一家公司的智慧可以被複製。
            </p>
            <div
              className="flex flex-wrap gap-7 items-center text-[12px] tracking-[0.12em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace" }}
            >
              <CtaLink href="/consult" variant="primary">
                預約諮詢
              </CtaLink>
              <CtaLink href="/blog" arrow="none">
                讀最近的觀點
              </CtaLink>
              <CtaLink href="/services" arrow="none">
                看服務
              </CtaLink>
            </div>
          </div>

          <aside
            className="md:pl-8"
            style={{ borderLeft: "none" }}
          >
            <div
              className="hidden md:block h-px w-full mb-7 md:h-auto md:w-px md:absolute"
              aria-hidden="true"
            />
            <div className="md:border-l md:pl-8" style={{ borderColor: "var(--rule)" }}>
              <div
                className="mb-7 overflow-hidden"
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/portrait.png"
                  alt="允雷 VJVAN"
                  width={280}
                  height={280}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <dl className="flex flex-col gap-5 m-0">
                <div>
                  <dt
                    className="text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Role
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 15, lineHeight: 1.5 }}>
                    AI Systems Architect
                  </dd>
                </div>
                <div>
                  <dt
                    className="text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Company
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 15, lineHeight: 1.5 }}>
                    唯捷允雷有限公司 VJVAN
                  </dd>
                </div>
                <div>
                  <dt
                    className="text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Based in
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 15, lineHeight: 1.5 }}>
                    屏東 / Pingtung, Taiwan
                  </dd>
                </div>
                <div>
                  <dt
                    className="text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Stack
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 15, lineHeight: 1.5 }}>
                    Next.js · Supabase · n8n · LINE LIFF
                  </dd>
                </div>
                <div>
                  <dt
                    className="text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    Est.
                  </dt>
                  <dd className="m-0" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 15, lineHeight: 1.5 }}>
                    2026
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {latest && (
        <section
          className="mx-auto max-w-[1120px] py-9 md:py-12"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          <div className="grid gap-6 md:gap-20 md:grid-cols-[1fr_2fr] items-baseline">
            <div
              className="text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
            >
              LATEST ESSAY →
            </div>
            <div>
              <h2
                className="m-0 mb-[10px]"
                style={{
                  fontFamily: "var(--f-zh-display), serif",
                  fontSize: 28,
                  lineHeight: 1.35,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              >
                <Link
                  href={`/blog/${latest.slug}`}
                  className="pb-[3px]"
                  style={{ borderBottom: "2px solid var(--signal)" }}
                >
                  {latest.title}
                </Link>
              </h2>
              <div
                className="text-[11px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
              >
                FIELD NOTES · {latest.readingTime.replace("分鐘閱讀", "MIN READ")} · {latest.date}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
