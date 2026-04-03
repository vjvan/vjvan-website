import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "允雷 - AI 商業系統架構師";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
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
            AI Business Systems
          </span>
        </div>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#fafaf9",
            lineHeight: 1.2,
            margin: 0,
            maxWidth: "900px",
          }}
        >
          允雷
        </h1>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#a8a29e",
            lineHeight: 1.3,
            margin: "16px 0 0 0",
            maxWidth: "900px",
          }}
        >
          AI 商業系統架構師
        </h2>
        <p
          style={{
            fontSize: "22px",
            color: "#78716c",
            lineHeight: 1.6,
            margin: "24px 0 0 0",
            maxWidth: "800px",
          }}
        >
          LINE LIFF + CRM + n8n 自動化營運系統
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["LINE LIFF", "CRM", "n8n", "Supabase", "Next.js"].map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "14px",
                color: "#a8a29e",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "9999px",
                padding: "8px 16px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "18px",
            color: "#57534e",
          }}
        >
          vjvan.com
        </div>
      </div>
    ),
    { ...size }
  );
}
