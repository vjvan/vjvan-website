import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";

export const alt = "允雷 觀點筆記";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.meta.title || slug;
  const tags = post?.meta.tags || [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#d97706",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: "#d4a574",
              }}
            >
              Insight Note
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#fafaf9",
              lineHeight: 1.3,
              margin: 0,
              maxWidth: "1000px",
            }}
          >
            {title}
          </h1>

          {tags.length > 0 && (
            <div style={{ display: "flex", gap: "10px", marginTop: "32px" }}>
              {tags.slice(0, 4).map((tag: string) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "14px",
                    color: "#a8a29e",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "9999px",
                    padding: "6px 14px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "18px", fontWeight: 600, color: "#a8a29e" }}>
              允雷
            </span>
            <span style={{ fontSize: "14px", color: "#57534e" }}>
              AI 商業系統架構師
            </span>
          </div>
          <span style={{ fontSize: "16px", color: "#57534e" }}>vjvan.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
