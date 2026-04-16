import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Writing · 文章",
  description:
    "VJVAN 唯捷允雷的觀點筆記。關於 AI 商業系統、LINE LIFF、SEO/GEO/AEO、自動化與系統架構的實戰書寫。",
  alternates: { canonical: "https://www.vjvan.com/blog" },
  openGraph: {
    title: "Writing｜VJVAN · 唯捷允雷",
    description: "AI 商業系統、LINE LIFF、自動化與系統架構的實戰書寫。",
    url: "https://www.vjvan.com/blog",
    type: "website",
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

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd id="json-ld-blog-breadcrumb" data={breadcrumbJsonLd} />
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
              Writing / Issue 01
            </div>
            <h1
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 6.5vw, 88px)",
                lineHeight: 1.05,
                letterSpacing: "0.01em",
              }}
            >
              文章
            </h1>
            <p
              className="m-0 max-w-[640px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              不追求高頻更新，比較像精選發布。只整理我在 AI 導入、自動化與系統規劃上，對企業真正有用的觀察與拆解。
            </p>
          </div>

          {posts.length === 0 ? (
            <p
              className="py-12 m-0"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                color: "var(--ink-muted)",
              }}
            >
              文章準備中。
            </p>
          ) : (
            <div>
              {posts.map((post, i) => (
                <article
                  key={post.slug}
                  className="grid gap-4 md:gap-12 md:grid-cols-[140px_1fr] py-9 items-baseline"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  <div
                    className="text-[11px] tracking-[0.14em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    <span style={{ color: "var(--signal)" }}>
                      N° {String(posts.length - i).padStart(3, "0")}
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
                      <Link
                        href={`/blog/${post.slug}`}
                        className="pb-[2px] hover:[border-bottom:2px_solid_var(--signal)]"
                      >
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
                      className="text-[11px] tracking-[0.12em] uppercase flex flex-wrap gap-4"
                      style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                    >
                      <span>{post.readingTime.replace("分鐘閱讀", "MIN READ")}</span>
                      {post.tags.length > 0 && (
                        <span>
                          {post.tags
                            .slice(0, 3)
                            .map((tag) => `#${tag.toUpperCase()}`)
                            .join(" · ")}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
