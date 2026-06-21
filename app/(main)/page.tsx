import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";
import CtaLink from "@/components/CtaLink";
import HeroVideo from "@/components/HeroVideo";
import JsonLd from "@/components/JsonLd";

const caseSnapshots = [
  {
    id: "b2b-replenishment",
    eyebrow: "FOOD B2B",
    title: "食材通路補貨系統",
    metric: "3H→30M",
    metricLabel: "抓單時間壓縮",
    situation: "清晨人工抓單、LINE 訊息與後台資料分散，越忙越容易漏單。",
    system: "把留資、訂單、出貨與客服資料收回同一條後台流程，讓前線少轉抄、老闆看得到節奏。",
    href: "/blog/case-b2b-fulfillment-3hr-to-30min",
  },
  {
    id: "auto-beauty-booking",
    eyebrow: "AUTO BEAUTY",
    title: "三門市汽車美容預約系統",
    metric: "6659",
    metricLabel: "筆資料搬遷",
    situation: "預約、會員、提醒、回訪原本散在表單與人工流程，門市越多越難管理。",
    system: "讓客戶在 LINE 內預約，門市用同一個後台管理排程、會員、方案與提醒。",
    href: "/blog/case-auto-beauty-phase1-launch",
  },
  {
    id: "erp-lite",
    eyebrow: "ERP-LITE",
    title: "中小企業自家進銷存",
    metric: "1 DB",
    metricLabel: "共用資料源",
    situation: "ERP、表單、Excel、LINE 各自存資料，前線仍然要人工轉抄。",
    system: "用自家資料庫把 LIFF、CRM、庫存與報表接成同一個營運底座，先能跑，再逐步長大。",
    href: "/services/erp-lite",
  },
];

export default function Home() {
  const posts = getAllPosts();
  const latest = posts[0];

  const heroVideoLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "唯捷允雷 VJVAN — AI 商業系統架構師品牌片頭",
    description:
      "唯捷允雷 / VJVAN 品牌片頭。AI 商業系統架構師，把散在 LINE、Excel、門市的流程重組為能自動跑、能長期累積的營運資產。",
    thumbnailUrl: "https://www.vjvan.com/hero/hero-poster.jpg",
    uploadDate: "2026-04-30",
    duration: "PT8S",
    contentUrl: "https://www.vjvan.com/hero/hero-1600.mp4",
    embedUrl: "https://www.vjvan.com/",
    publisher: {
      "@type": "Organization",
      name: "唯捷允雷 VJVAN",
      url: "https://www.vjvan.com/",
    },
  };

  const caseSnapshotsLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VJVAN 唯捷允雷案例快照",
    url: "https://www.vjvan.com/",
    itemListElement: caseSnapshots.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.title,
        description: `${item.situation}${item.system}`,
        url: `https://www.vjvan.com${item.href}`,
        about: item.eyebrow,
        creator: {
          "@type": "Organization",
          name: "唯捷允雷有限公司",
          url: "https://www.vjvan.com",
        },
      },
    })),
  };

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
              className="m-0 mb-7 max-w-[560px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                letterSpacing: "0.04em",
                color: "var(--ink-muted)",
              }}
            >
              專注 AI 與商業邏輯的系統整合・社群亦稱 AI 系統架構師
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
              多數中小企業不缺 AI 工具，缺的是
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>讓工具替你工作的系統</strong>
              。我把散在 LINE、Excel、門市的流程，重組為能自動跑、能長期累積的營運資產。餐飲補貨、汽車美容預約、電商訂單整合，原理都一樣。
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
                    JAMstack · Serverless · 自動化 · LINE 生態系
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

      <section
        className="mx-auto max-w-[1120px] py-9 md:py-12"
        style={{ borderTop: "1px solid var(--rule)" }}
        aria-label="品牌片頭"
      >
        <div className="grid gap-6 md:gap-20 md:grid-cols-[1fr_2fr] items-baseline mb-7">
          <div
            className="text-[11px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
          >
            COVER FILM ↓
          </div>
          <div
            className="text-[11px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
          >
            08 SEC · NO SOUND · LOOP
          </div>
        </div>
        <HeroVideo
          poster="/hero/hero-poster.jpg"
          webmSrc="/hero/hero-1600.webm"
          mp4Src="/hero/hero-1600.mp4"
          mp4MobileSrc="/hero/hero-1280.mp4"
          ariaLabel="唯捷允雷 VJVAN 品牌片頭"
        />
        <JsonLd id="hero-video-jsonld" data={heroVideoLd} />
        <JsonLd id="case-snapshot-jsonld" data={caseSnapshotsLd} />
      </section>

      <section
        className="mx-auto max-w-[1120px] py-9 md:py-12"
        style={{ borderTop: "1px solid var(--rule)" }}
        aria-label="我幫誰"
      >
        <div className="grid gap-8 md:gap-20 md:grid-cols-[1fr_2fr]">
          <div
            className="text-[11px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
          >
            WHO I HELP →
          </div>
          <div>
            <h2
              className="m-0 mb-7"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: "clamp(30px, 4.2vw, 56px)",
                lineHeight: 1.08,
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              我幫正在長大的生意，
              <br />
              把日常流程變成系統。
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {["食品批發", "汽車美容", "多門市服務業", "一人公司", "中小企業老闆"].map((item) => (
                <div
                  key={item}
                  className="py-3"
                  style={{ borderTop: "1px solid var(--rule)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--f-zh-body), sans-serif",
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: "var(--ink)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1120px] py-9 md:py-12"
        style={{ borderTop: "1px solid var(--rule)" }}
        aria-label="我解什麼問題"
      >
        <div className="grid gap-8 md:gap-20 md:grid-cols-[1fr_2fr]">
          <div
            className="text-[11px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
          >
            OPERATING PROBLEMS →
          </div>
          <div className="grid gap-5">
            {[
              "LINE 接單混亂，訊息、訂單、客戶狀態散在不同對話裡。",
              "Google Sheet 管不起來，資料越累積，越沒有人敢改。",
              "ERP 有，但前端資料進不去，現場仍然靠人工轉抄。",
              "AI 工具很多，但沒有形成營運系統，最後只是多一堆帳號。",
            ].map((problem, index) => (
              <div
                key={problem}
                className="grid gap-4 md:grid-cols-[72px_1fr] py-5"
                style={{ borderTop: index === 0 ? "none" : "1px solid var(--rule)" }}
              >
                <div
                  className="text-[11px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                >
                  0{index + 1}
                </div>
                <p
                  className="m-0"
                  style={{
                    fontFamily: "var(--f-zh-body), sans-serif",
                    fontSize: 18,
                    lineHeight: 1.75,
                    color: "var(--ink-muted)",
                  }}
                >
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1120px] py-9 md:py-12"
        style={{ borderTop: "1px solid var(--rule)" }}
        aria-label="系統成果與諮詢入口"
      >
        <div className="grid gap-8 md:gap-20 md:grid-cols-[1fr_2fr]">
          <div
            className="text-[11px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
          >
            PROOF BAR →
          </div>
          <div>
            <div className="grid gap-4 md:grid-cols-4 mb-9">
              {[
                ["6659", "筆資料搬遷"],
                ["3H→30M", "抓單時間壓縮"],
                ["B2B", "補貨系統"],
                ["3", "門市預約系統"],
              ].map(([metric, label]) => (
                <div
                  key={label}
                  className="pt-4"
                  style={{ borderTop: "2px solid var(--signal)" }}
                >
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: "var(--f-display), serif",
                      fontStyle: "italic",
                      fontSize: "clamp(28px, 3.6vw, 44px)",
                      lineHeight: 1,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {metric}
                  </div>
                  <div
                    className="text-[11px] tracking-[0.12em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex flex-wrap gap-7 items-center text-[12px] tracking-[0.12em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace" }}
            >
              <CtaLink href="/services/erp-lite" variant="primary">
                LINE LIFF／ERP 整合
              </CtaLink>
              <CtaLink href="/services/seo-aeo-geo" arrow="none">
                SEO／AEO／GEO
              </CtaLink>
              <CtaLink href="/glossary/ai-business-system" arrow="none">
                AI 商業系統
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1120px] py-9 md:py-12"
        style={{ borderTop: "1px solid var(--rule)" }}
        aria-label="案例快照"
      >
        <div className="grid gap-8 md:gap-20 md:grid-cols-[1fr_2fr]">
          <div
            className="text-[11px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
          >
            CASE SNAPSHOTS →
          </div>
          <div>
            <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end mb-8">
              <h2
                className="m-0"
                style={{
                  fontFamily: "var(--f-zh-display), serif",
                  fontSize: "clamp(30px, 4.2vw, 56px)",
                  lineHeight: 1.08,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              >
                不展示功能，
                <br />
                展示流程被收回來的樣子。
              </h2>
              <p
                className="m-0"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--ink-muted)",
                }}
              >
                案例快照只保留可公開的產業、流程與成果。真正重要的不是用了哪些工具，而是原本散落的人工作業，最後能不能變成一條可以交接、追蹤、優化的系統。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {caseSnapshots.map((item) => (
                <article
                  key={item.id}
                  className="group flex min-h-[360px] flex-col justify-between p-5 md:p-6"
                  style={{
                    border: "1px solid var(--rule)",
                    background: "color-mix(in srgb, var(--paper) 94%, var(--ink) 6%)",
                  }}
                >
                  <div>
                    <div
                      className="mb-6 flex items-center justify-between gap-4 text-[10px] tracking-[0.16em] uppercase"
                      style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                    >
                      <span>{item.eyebrow}</span>
                      <span style={{ color: "var(--signal)" }}>FIELD CASE</span>
                    </div>
                    <div
                      className="mb-4"
                      style={{
                        fontFamily: "var(--f-display), var(--f-zh-display), serif",
                        fontStyle: "italic",
                        fontSize: "clamp(36px, 5vw, 52px)",
                        lineHeight: 0.95,
                        color: "var(--ink)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.metric}
                    </div>
                    <div
                      className="mb-7 text-[11px] tracking-[0.12em] uppercase"
                      style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                    >
                      {item.metricLabel}
                    </div>
                    <h3
                      className="m-0 mb-4"
                      style={{
                        fontFamily: "var(--f-zh-display), serif",
                        fontSize: 24,
                        lineHeight: 1.25,
                        fontWeight: 400,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <div className="grid gap-4">
                      <p
                        className="m-0"
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "var(--ink-muted)",
                        }}
                      >
                        <span style={{ color: "var(--ink)", fontWeight: 500 }}>Before：</span>
                        {item.situation}
                      </p>
                      <p
                        className="m-0"
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "var(--ink-muted)",
                        }}
                      >
                        <span style={{ color: "var(--ink)", fontWeight: 500 }}>System：</span>
                        {item.system}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={item.href}
                    className="mt-8 inline-flex w-fit text-[11px] tracking-[0.14em] uppercase"
                    style={{
                      fontFamily: "var(--f-mono), monospace",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--signal)",
                      paddingBottom: 2,
                    }}
                  >
                    Open snapshot →
                  </Link>
                </article>
              ))}
            </div>
          </div>
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

      <section
        className="mx-auto max-w-[1120px] py-9 md:py-12"
        style={{ borderTop: "1px solid var(--rule)" }}
        aria-label="目前開設的課程"
      >
        <div className="grid gap-6 md:gap-20 md:grid-cols-[1fr_2fr] items-baseline">
          <div
            className="text-[11px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
          >
            NOW TEACHING →
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
                href="/courses/prompt-to-pixel"
                className="pb-[3px]"
                style={{ borderBottom: "2px solid var(--signal)" }}
              >
                Prompt to Pixel
              </Link>
              <span
                className="ml-3"
                style={{
                  fontFamily: "var(--f-display), serif",
                  fontStyle: "italic",
                  fontSize: 26,
                  color: "var(--ink-muted)",
                  letterSpacing: "-0.005em",
                }}
              >
                the One-Person AI Video Pipeline
              </span>
            </h2>
            <div
              className="text-[11px] tracking-[0.12em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
            >
              COURSE · MONTHLY · FOUNDING MEMBER US$49/MO
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
