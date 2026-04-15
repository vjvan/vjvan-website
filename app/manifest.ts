import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VJVAN · 唯捷允雷",
    short_name: "VJVAN",
    description:
      "VJVAN 唯捷允雷有限公司 — AI 商業系統設計、LINE LIFF、SEO/GEO/AEO 顧問。",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#0A0A0A",
    lang: "zh-Hant",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
