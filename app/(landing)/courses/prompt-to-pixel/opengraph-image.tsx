import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "P2P AI Lab | Prompt to Pixel — 一人公司的 AI 影片產線";
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
          <span>ISSUE № 01 · P2P AI LAB · FOUNDING PRESS RUN</span>
          <span style={{ color: "#1F51FF" }}>VJVAN · 唯捷允雷</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5F5B57",
              fontFamily: "monospace",
              marginBottom: 28,
            }}
          >
            Prompt → Pixel
          </div>
          <h1
            style={{
              fontSize: 112,
              fontWeight: 400,
              color: "#0A0A0A",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>一個人也能跑完</span>
            <span>
              <span style={{ fontStyle: "italic", color: "#1F51FF", fontFamily: "serif" }}>
                整條 AI
              </span>
              <span>影片產線</span>
            </span>
          </h1>
          <p
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#0A0A0A",
              lineHeight: 1.35,
              margin: "28px 0 0 0",
              fontFamily: "serif",
              letterSpacing: "0.02em",
            }}
          >
            P2P AI Lab — 從文字到影像，一人公司的 AI 影片產線
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
          <span>FOUNDING MEMBER · US$49 / MO · FIRST 100</span>
          <span>vjvan.com / courses / prompt-to-pixel</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
