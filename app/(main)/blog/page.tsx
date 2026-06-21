import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, type PostMeta } from "@/lib/mdx";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Writing · 觀點",
  description:
    "VJVAN 唯捷允雷的觀點筆記。關於中小企業 AI 系統、LINE 生態、AI 搜尋時代與自動化架構的實戰書寫。",
  alternates: { canonical: "https://www.vjvan.com/blog" },
  openGraph: {
    title: "Writing｜VJVAN · 唯捷允雷",
    description: "AI 商業系統、LINE 生態與自動化架構的實戰書寫。",
    url: "https://www.vjvan.com/blog",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Writing｜VJVAN · 唯捷允雷" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "Writing", item: "https://www.vjvan.com/blog" },
  ],
};

const featuredSlug = "line-order-to-erp-integration";

const editorPickSlugs = [
  "case-b2b-fulfillment-3hr-to-30min",
  "case-auto-beauty-phase1-launch",
  "opinion-one-person-company-tsmc",
];

const readingPaths = [
  {
    label: "路線 01",
    title: "第一次理解 AI 商業系統",
    description: "先建立共同語言：中小企業需要的不是更多帳號，而是一套能承接資料與判斷的系統。",
    slugs: ["hello-world", "opinion-ai-business-system-architect", "line-liff-vs-app"],
  },
  {
    label: "路線 02",
    title: "看真實案例怎麼落地",
    description: "從食品通路、汽車美容到後台改版，看流程如何從人工轉抄變成可追蹤系統。",
    slugs: ["case-frozen-food-b2b-system", "case-b2b-fulfillment-3hr-to-30min", "case-auto-beauty-phase1-launch"],
  },
  {
    label: "路線 03",
    title: "一人公司與知識資產",
    description: "如果你在經營個人品牌、顧問服務或內容資產，這條路線會比較接近允雷自己的營運方式。",
    slugs: ["opinion-one-person-company-tsmc", "opinion-ai-native-solo-founder-2026", "opinion-intelligence-in-the-system"],
  },
];

const topicIndex = [
  ["LINE / LIFF", "把客戶入口放在使用者每天打開的地方。"],
  ["ERP-Lite", "從資料表、後台與前線流程開始長出自家系統。"],
  ["AI Business System", "把 AI 工具變成公司可驗收的營運能力。"],
  ["One-person Company", "把內容、SOP、案例與系統變成一人公司的槓桿。"],
];

function findPost(posts: PostMeta[], slug: string) {
  return posts.find((post) => post.slug === slug);
}

function compactPosts(posts: PostMeta[], slugs: string[]) {
  return slugs.map((slug) => findPost(posts, slug)).filter((post): post is PostMeta => Boolean(post));
}

function formatTag(tag: string) {
  return `#${tag.toUpperCase()}`;
}

function Tags({ post }: { post: PostMeta }) {
  const tags = post.tags.slice(0, 3);
  if (tags.length === 0) return null;

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-1">
      {tags.map((tag, index) => (
        <span key={`${tag}-${index}`} className="inline-flex items-baseline gap-x-2">
          {index > 0 && <span style={{ color: "var(--rule)" }}>·</span>}
          <span
            style={{
              fontFamily: "var(--f-zh-body), sans-serif",
              fontSize: 12,
              lineHeight: 1.45,
              letterSpacing: "0.04em",
              color: "var(--ink-muted)",
            }}
          >
            {formatTag(tag)}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = findPost(posts, featuredSlug) || posts[0];
  const editorPicks = compactPosts(posts, editorPickSlugs);
  const routes = readingPaths.map((route) => ({ ...route, posts: compactPosts(posts, route.slugs) }));

  const blogCollectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "VJVAN Writing 觀點筆記",
    url: "https://www.vjvan.com/blog",
    description: metadata.description,
    hasPart: posts.slice(0, 12).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `https://www.vjvan.com/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: "允雷",
        alternateName: "VJVAN",
      },
    })),
  };

  return (
    <>
      <JsonLd id="json-ld-blog-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-blog-collection" data={blogCollectionJsonLd} />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          <div
            className="pb-12 mb-4"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            <div
              className="mb-6 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              觀點資料庫 / 給企業主看的系統筆記
            </div>
            <div className="grid gap-9 md:grid-cols-[1.3fr_0.7fr] md:items-end">
              <div>
                <h1
                  className="m-0 mb-8"
                  style={{
                    fontFamily: "var(--f-zh-display), serif",
                    fontWeight: 400,
                    fontSize: "clamp(44px, 6.5vw, 88px)",
                    lineHeight: 1.05,
                    letterSpacing: "0.01em",
                  }}
                >
                  不是寫文章，
                  <br />
                  是把案子的理解留下來。
                </h1>
                <p
                  className="m-0 max-w-[680px]"
                  style={{
                    fontFamily: "var(--f-zh-body), sans-serif",
                    fontSize: 18,
                    lineHeight: 1.8,
                    color: "var(--ink-muted)",
                  }}
                >
                  這裡整理我在 AI 導入、自動化與系統規劃上，對企業真正有用的觀察與拆解。你可以照時間讀，也可以依照下方閱讀路線進入。
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
                {[
                  [String(posts.length).padStart(2, "0"), "篇觀點筆記"],
                  ["03", "條閱讀路線"],
                  ["04", "個核心主題"],
                ].map(([value, label]) => (
                  <div key={label} className="pt-4" style={{ borderTop: "2px solid var(--signal)" }}>
                    <div
                      className="mb-2"
                      style={{
                        fontFamily: "var(--f-display), serif",
                        fontStyle: "italic",
                        fontSize: "clamp(26px, 3.4vw, 42px)",
                        lineHeight: 1,
                        color: "var(--ink)",
                      }}
                    >
                      {value}
                    </div>
                    <div
                      className="text-[10px] tracking-[0.12em] uppercase"
                      style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {posts.length === 0 || !featured ? (
            <p
              className="py-12 m-0"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                color: "var(--ink-muted)",
              }}
            >
              觀點準備中。
            </p>
          ) : (
            <>
              <section
                className="py-10 md:py-14"
                style={{ borderBottom: "1px solid var(--rule)" }}
                aria-label="精選文章"
              >
                <div className="grid gap-8 md:gap-14 md:grid-cols-[1.25fr_0.75fr]">
                  <article>
                    <div
                      className="mb-5 text-[11px] tracking-[0.16em] uppercase"
                      style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                    >
                      推薦先讀 · 從這篇開始
                    </div>
                    <h2
                      className="m-0 mb-5 max-w-[760px]"
                      style={{
                        fontFamily: "var(--f-zh-display), serif",
                        fontSize: "clamp(32px, 4.6vw, 60px)",
                        lineHeight: 1.12,
                        fontWeight: 400,
                        letterSpacing: "0.01em",
                      }}
                    >
                      <Link href={`/blog/${featured.slug}`} className="pb-[3px]" style={{ borderBottom: "2px solid var(--signal)" }}>
                        {featured.title}
                      </Link>
                    </h2>
                    <p
                      className="m-0 mb-6 max-w-[680px]"
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 17,
                        lineHeight: 1.8,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {featured.description}
                    </p>
                    <div
                      className="text-[12px] tracking-[0.08em] flex flex-wrap items-baseline gap-x-4 gap-y-2"
                      style={{ fontFamily: "var(--f-zh-body), sans-serif", color: "var(--ink-muted)" }}
                    >
                      <span>{featured.date}</span>
                      <span>{featured.readingTime}</span>
                      <Tags post={featured} />
                    </div>
                  </article>

                  {editorPicks.length > 0 && (
                    <aside className="grid gap-4">
                      <div
                        className="text-[11px] tracking-[0.16em] uppercase"
                        style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                      >
                        允雷精選文章
                      </div>
                      {editorPicks.map((post, index) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="block p-5"
                          style={{ border: "1px solid var(--rule)", background: "color-mix(in srgb, var(--paper) 96%, var(--ink) 4%)" }}
                        >
                          <div
                            className="mb-4 text-[10px] tracking-[0.16em] uppercase"
                            style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                          >
                            精選 {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3
                            className="m-0 mb-3"
                            style={{
                              fontFamily: "var(--f-zh-display), serif",
                              fontSize: 22,
                              lineHeight: 1.3,
                              fontWeight: 400,
                            }}
                          >
                            {post.title}
                          </h3>
                          <div
                            className="text-[12px] tracking-[0.08em]"
                            style={{ fontFamily: "var(--f-zh-body), sans-serif", color: "var(--ink-muted)" }}
                          >
                            {post.readingTime}
                          </div>
                        </Link>
                      ))}
                    </aside>
                  )}
                </div>
              </section>

              <section
                className="py-10 md:py-14"
                style={{ borderBottom: "1px solid var(--rule)" }}
                aria-label="閱讀路線"
              >
                <div className="grid gap-8 md:gap-20 md:grid-cols-[1fr_2fr]">
                  <div
                    className="text-[11px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    閱讀路線 →
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {routes.map((route) => (
                      <article key={route.label} className="p-5" style={{ border: "1px solid var(--rule)" }}>
                        <div
                          className="mb-5 text-[10px] tracking-[0.16em] uppercase"
                          style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                        >
                          {route.label}
                        </div>
                        <h2
                          className="m-0 mb-4"
                          style={{
                            fontFamily: "var(--f-zh-display), serif",
                            fontSize: 24,
                            lineHeight: 1.25,
                            fontWeight: 400,
                          }}
                        >
                          {route.title}
                        </h2>
                        <p
                          className="m-0 mb-6"
                          style={{
                            fontFamily: "var(--f-zh-body), sans-serif",
                            fontSize: 14,
                            lineHeight: 1.7,
                            color: "var(--ink-muted)",
                          }}
                        >
                          {route.description}
                        </p>
                        <ol className="m-0 grid gap-3 pl-0" style={{ listStyle: "none" }}>
                          {route.posts.map((post, index) => (
                            <li key={post.slug}>
                              <Link
                                href={`/blog/${post.slug}`}
                                className="grid gap-1"
                                style={{ fontFamily: "var(--f-zh-body), sans-serif" }}
                              >
                                <span
                                  className="text-[10px] tracking-[0.16em] uppercase"
                                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                                >
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                                <span style={{ fontSize: 14, lineHeight: 1.5, borderBottom: "1px solid var(--rule)", paddingBottom: 4 }}>
                                  {post.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section
                className="py-10 md:py-14"
                style={{ borderBottom: "1px solid var(--rule)" }}
                aria-label="核心主題"
              >
                <div className="grid gap-8 md:gap-20 md:grid-cols-[1fr_2fr]">
                  <div
                    className="text-[11px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    主題索引 →
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {topicIndex.map(([title, description]) => (
                      <div key={title} className="py-4" style={{ borderTop: "1px solid var(--rule)" }}>
                        <h2
                          className="m-0 mb-2"
                          style={{
                            fontFamily: "var(--f-zh-display), serif",
                            fontSize: 24,
                            lineHeight: 1.25,
                            fontWeight: 400,
                          }}
                        >
                          {title}
                        </h2>
                        <p
                          className="m-0"
                          style={{
                            fontFamily: "var(--f-zh-body), sans-serif",
                            fontSize: 14,
                            lineHeight: 1.65,
                            color: "var(--ink-muted)",
                          }}
                        >
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="pt-10 md:pt-14" aria-label="所有文章">
                <div className="grid gap-8 md:gap-20 md:grid-cols-[1fr_2fr]">
                  <div
                    className="text-[11px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    所有文章 →
                  </div>
                  <div>
                    {posts.map((post, index) => (
                      <article
                        key={post.slug}
                        className="grid gap-4 md:gap-12 md:grid-cols-[140px_1fr] py-8 items-baseline"
                        style={{ borderTop: index === 0 ? "none" : "1px solid var(--rule)" }}
                      >
                        <div
                          className="text-[11px] tracking-[0.14em] uppercase"
                          style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                        >
                          <span style={{ color: "var(--signal)" }}>
                            N° {String(posts.length - index).padStart(3, "0")}
                          </span>
                          <br />
                          {post.date}
                        </div>
                        <div>
                          <h2
                            className="m-0 mb-3"
                            style={{
                              fontFamily: "var(--f-zh-display), serif",
                              fontSize: 28,
                              lineHeight: 1.3,
                              fontWeight: 400,
                              letterSpacing: "0.01em",
                            }}
                          >
                            <Link href={`/blog/${post.slug}`} className="pb-[2px]" style={{ borderBottom: "1px solid var(--rule)" }}>
                              {post.title}
                            </Link>
                          </h2>
                          <p
                            className="m-0 mb-4 max-w-[640px]"
                            style={{
                              fontFamily: "var(--f-zh-body), sans-serif",
                              fontSize: 16,
                              lineHeight: 1.7,
                              color: "var(--ink-muted)",
                            }}
                          >
                            {post.description}
                          </p>
                          <div
                            className="text-[12px] tracking-[0.08em] flex flex-wrap items-baseline gap-x-4 gap-y-2"
                            style={{ fontFamily: "var(--f-zh-body), sans-serif", color: "var(--ink-muted)" }}
                          >
                            <span>{post.readingTime}</span>
                            <Tags post={post} />
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
}
