import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "標題";
  const pointsRaw = searchParams.get("points") || "";
  const tagsRaw = searchParams.get("tags") || "";
  const footer = searchParams.get("footer") || "vjvan.com";

  const points = pointsRaw ? pointsRaw.split("|") : [];
  const tags = tagsRaw ? tagsRaw.split("|") : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(160deg, #0f1412 0%, #0d1b18 35%, #111a17 65%, #0f1412 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: eyebrow + title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#0d9488",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                letterSpacing: "0.28em",
                textTransform: "uppercase" as const,
                color: "#5eead4",
              }}
            >
              Insight
            </span>
          </div>

          <h1
            style={{
              fontSize: title.length > 25 ? "42px" : "48px",
              fontWeight: 700,
              color: "#f0fdf4",
              lineHeight: 1.35,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Middle: points */}
        {points.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            {points.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0d9488",
                    minWidth: "28px",
                    marginTop: "2px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: "22px",
                    color: "#d6d3d1",
                    lineHeight: 1.5,
                  }}
                >
                  {point.trim()}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom: tags + author */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "14px",
                    color: "#5eead4",
                    border: "1px solid rgba(94,234,212,0.25)",
                    borderRadius: "9999px",
                    padding: "5px 14px",
                  }}
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{ fontSize: "18px", fontWeight: 600, color: "#a8a29e" }}
              >
                允雷
              </span>
              <span style={{ fontSize: "14px", color: "#57534e" }}>
                AI 商業系統架構師
              </span>
            </div>
            <span style={{ fontSize: "15px", color: "#57534e" }}>
              {footer}
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1080, height: 1080 }
  );
}
