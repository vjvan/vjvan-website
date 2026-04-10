import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "允雷 | AI商業系統架構師",
    short_name: "允雷",
    description:
      "幫台灣中小企業把 LINE、CRM 與 n8n 串成真正能運轉的 AI 自動化營運系統。",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e8",
    theme_color: "#b45309",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
