import type { Metadata } from "next";
import CanvasViewer from "@/components/mdx/CanvasViewer";

export const metadata: Metadata = {
  title: "Canvas Lab · 互動知識視覺化",
  description:
    "允雷用 KnowledgeOS Canvas v2 系統把客戶案事故、戰略地圖、流程圖即時轉成互動式知識圖。每一張 canvas 同時是 Obsidian 原生格式、可被搜尋引擎索引的結構化文件、與可分享的 hard-to-copy 個人品牌資產。",
  alternates: { canonical: "https://www.vjvan.com/labs/canvas" },
  robots: { index: true, follow: true },
};

interface CanvasItem {
  src: string;
  title: string;
  layout: string;
  caption: string;
  source: string;
}

const CANVASES: CanvasItem[] = [
  {
    src: "/canvases/2026-05-06-solo-company-strategy-public.canvas",
    title: "一人公司 5 大戰略目標 + 4 階段 Roadmap",
    layout: "center_radial",
    caption:
      "用 AI 擴大一人公司編制的 5 個戰略目標,搭配「越做越輕鬆」4 階段 roadmap。中心放射 layout 把核心原則放最中,5 個目標環繞。",
    source: "個人戰略文件 (對外脫敏版,客戶案具體價碼模糊化)",
  },
  {
    src: "/canvases/2026-05-05-client-website-8-steps-flowchart.canvas",
    title: "客戶案建站 8 步驟工作流",
    layout: "flowchart",
    caption:
      "從需求驗證到最終交付的 8 步驟硬規則,每一步跳過都會在後段付出代價。flowchart layout 含分支決策節點。",
    source: "個人客戶案標準流程",
  },
  {
    src: "/canvases/2026-05-06-knowledgeos-4-phase-public.canvas",
    title: "KnowledgeOS 4 階段演進",
    layout: "timeline",
    caption:
      "個人知識作業系統從現在到 1 年後的 4 階段演進 — SOP 累積 / 客戶案模組化 / 訂閱制教學 / 三軌商業模式並行。timeline layout。",
    source: "個人 KnowledgeOS 系統 (對外脫敏版,客戶名匿名 + 價碼模糊)",
  },
];

export default function CanvasLabPage() {
  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto max-w-[1120px] py-14 md:py-24">
        <header
          className="pb-12 mb-12"
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          <p
            className="font-mono uppercase tracking-[0.18em] text-[11px] mb-4"
            style={{ color: "var(--ink-muted)" }}
          >
            LABS · KnowledgeOS Canvas v2
          </p>
          <h1
            className="text-[clamp(44px,5.5vw,72px)] leading-[1.1] mb-6"
            style={{ fontFamily: "var(--f-zh-display)", textWrap: "balance" }}
          >
            互動知識視覺化
          </h1>
          <p
            className="text-[18px] leading-[1.7] max-w-[640px]"
            style={{ color: "var(--ink-muted)" }}
          >
            允雷用 5 個月把客戶案事故、戰略地圖、流程圖即時轉成可被搜尋引擎索引的互動 canvas。
            每一張同時是 Obsidian 原生 JSON 格式、Mermaid 雙語 SEO 對偶、與 hard-to-copy 的個人品牌資產。
            點擊節點查看完整內容,捲動滾輪縮放,拖曳平移。
          </p>
        </header>

        <section className="space-y-20">
          {CANVASES.map((c) => (
            <article key={c.src}>
              <header className="mb-4">
                <p
                  className="font-mono uppercase tracking-[0.16em] text-[11px] mb-2"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {c.layout}
                </p>
                <h2
                  className="text-[24px] md:text-[28px] mb-3"
                  style={{
                    fontFamily: "var(--f-zh-display)",
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h2>
                <p
                  className="text-[14px] leading-[1.7] max-w-[720px]"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {c.caption}
                </p>
                <p
                  className="font-mono text-[11px] tracking-[0.04em] mt-2"
                  style={{ color: "var(--ink-muted)" }}
                >
                  Source: {c.source}
                </p>
              </header>
              <CanvasViewer src={c.src} height={620} />
            </article>
          ))}
        </section>

        <footer
          className="mt-24 pt-12"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          <p
            className="font-mono uppercase tracking-[0.12em] text-[11px] mb-3"
            style={{ color: "var(--ink-muted)" }}
          >
            About this system
          </p>
          <p
            className="text-[16px] leading-[1.8] max-w-[640px]"
            style={{ color: "var(--ink)" }}
          >
            這套 KnowledgeOS Canvas 系統由 允雷 設計,
            sop-extractor skill 自動從 SOP markdown 萃取結構,5 種 layout pattern (story_narrative /
            center_radial / comparison / flowchart / timeline) 涵蓋大部分知識視覺化場景。
            Pre-commit linter 強制配色語意一致 (綠安全 / 紅危險 / 黃警告 / 青結論 / 紫進階),
            Mermaid 對偶輸出讓 Blog 同時兼具人類視覺與 SEO 索引雙軌。
          </p>
        </footer>
      </div>
    </div>
  );
}
