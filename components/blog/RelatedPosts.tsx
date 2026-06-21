import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

interface Props {
  currentSlug: string;
  currentTags: string[];
  allPosts: PostMeta[];
}

function getRelated(
  currentSlug: string,
  currentTags: string[],
  allPosts: PostMeta[],
  limit = 3,
): PostMeta[] {
  return allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => currentTags.includes(t)).length,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .filter((x) => x.score > 0)
    .slice(0, limit)
    .map((x) => x.post);
}

function getAdjacent(currentSlug: string, allPosts: PostMeta[]) {
  // allPosts 是 getAllPosts() 已按 date desc 排
  const idx = allPosts.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return { newer: null, older: null };
  const newer = idx > 0 ? allPosts[idx - 1] : null;
  const older = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  return { newer, older };
}

export default function RelatedPosts({ currentSlug, currentTags, allPosts }: Props) {
  const related = getRelated(currentSlug, currentTags, allPosts);
  const { newer, older } = getAdjacent(currentSlug, allPosts);

  return (
    <>
      {related.length > 0 && (
        <section
          style={{
            marginTop: 80,
            paddingTop: 40,
            borderTop: "1px solid var(--rule)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--f-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: 28,
            }}
          >
            延伸閱讀
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 32,
            }}
          >
            {related.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit", padding: 18 }}
                className="editorial-card related-card"
              >
                <div
                  style={{
                    paddingTop: 18,
                    borderTop: "1px solid var(--rule)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--f-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      color: "var(--ink-muted)",
                      marginBottom: 12,
                    }}
                  >
                    {post.date.replace(/-/g, ".")}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--f-zh-display), serif",
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: 1.45,
                      margin: 0,
                      color: "var(--ink)",
                    }}
                  >
                    {post.title}
                  </h3>
                  {post.description ? (
                    <p
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: "var(--ink-muted)",
                        marginTop: 12,
                        marginBottom: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.description}
                    </p>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {(newer || older) && (
        <section
          style={{
            marginTop: 56,
            paddingTop: 32,
            borderTop: "1px solid var(--rule)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="adjacent-link"
            >
              <div
                style={{
                  fontFamily: "var(--f-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  marginBottom: 10,
                }}
              >
                ← 較早一篇
              </div>
              <div
                style={{
                  fontFamily: "var(--f-zh-display), serif",
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                }}
              >
                {older.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {newer ? (
            <Link
              href={`/blog/${newer.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "right",
              }}
              className="adjacent-link"
            >
              <div
                style={{
                  fontFamily: "var(--f-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  marginBottom: 10,
                }}
              >
                較新一篇 →
              </div>
              <div
                style={{
                  fontFamily: "var(--f-zh-display), serif",
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                }}
              >
                {newer.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </section>
      )}
    </>
  );
}
