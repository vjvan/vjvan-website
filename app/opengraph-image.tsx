import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VJVAN 唯捷允雷 — AI 商業系統架構師";
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
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FAFAF7",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#5F5B57",
            fontFamily: "monospace",
          }}
        >
          <span>ISSUE № 01 · EST. 2026 · PINGTUNG</span>
          <span style={{ color: "#1F51FF" }}>VJVAN · 唯捷允雷</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: 128,
              fontWeight: 400,
              color: "#0A0A0A",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>唯捷允雷</span>
            <span
              style={{
                fontStyle: "italic",
                color: "#1F51FF",
                fontFamily: "serif",
              }}
            >
              VJVAN
            </span>
          </h1>
          <p
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: "#0A0A0A",
              lineHeight: 1.35,
              margin: "28px 0 0 0",
              fontFamily: "serif",
              letterSpacing: "0.02em",
            }}
          >
            AI 商業系統架構師
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderTop: "1px solid #E5E2DD",
            paddingTop: 24,
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5F5B57",
            fontFamily: "monospace",
          }}
        >
          <span>LINE LIFF · SUPABASE · N8N · NEXT.JS</span>
          <span>www.vjvan.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
