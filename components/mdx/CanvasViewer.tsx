"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

interface CanvasNode {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  text?: string;
  label?: string;
}

interface CanvasEdge {
  id: string;
  fromNode: string;
  toNode: string;
  fromSide?: "top" | "bottom" | "left" | "right";
  toSide?: "top" | "bottom" | "left" | "right";
  fromEnd?: string | null;
  toEnd?: string | null;
  color?: string | null;
  label?: string;
}

interface CanvasData {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
}

interface CanvasViewerProps {
  src: string;
  caption?: string;
  height?: number;
  initialFit?: boolean;
}

const COLOR_MAP: Record<string, { fill: string; stroke: string; ink: string }> = {
  "1": { fill: "#F4DDDB", stroke: "#B8504A", ink: "#5C2622" },
  "2": { fill: "#F5E5D6", stroke: "#B86F38", ink: "#5C3614" },
  "3": { fill: "#F5EFD2", stroke: "#9F8A2E", ink: "#4D421A" },
  "4": { fill: "#DCE9DD", stroke: "#5D8B6E", ink: "#1F4A2E" },
  "5": { fill: "#D6E4EB", stroke: "#3F7A95", ink: "#1B3D4E" },
  "6": { fill: "#E2DAEB", stroke: "#695285", ink: "#2D2542" },
  default: { fill: "#FAFAF7", stroke: "#5F5B57", ink: "#0A0A0A" },
};

function getColor(c?: string | null) {
  if (c && COLOR_MAP[c]) return COLOR_MAP[c];
  return COLOR_MAP.default;
}

function anchorPoint(node: CanvasNode, side?: string) {
  const cx = node.x + node.width / 2;
  const cy = node.y + node.height / 2;
  switch (side) {
    case "top":
      return { x: cx, y: node.y };
    case "bottom":
      return { x: cx, y: node.y + node.height };
    case "left":
      return { x: node.x, y: cy };
    case "right":
      return { x: node.x + node.width, y: cy };
    default:
      return { x: cx, y: cy };
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInline(text: string) {
  let s = escapeHtml(text);
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/==([^=]+)==/g, '<mark class="cv-mark">$1</mark>');
  s = s.replace(/~~([^~]+)~~/g, "<s>$1</s>");
  return s;
}

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const html: string[] = [];
  let inList = false;
  for (const line of lines) {
    if (/^# /.test(line)) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h4 class="cv-h1">${renderInline(line.slice(2))}</h4>`);
    } else if (/^## /.test(line)) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h5 class="cv-h2">${renderInline(line.slice(3))}</h5>`);
    } else if (/^### /.test(line)) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h6 class="cv-h3">${renderInline(line.slice(4))}</h6>`);
    } else if (/^[-*] /.test(line)) {
      if (!inList) {
        html.push('<ul class="cv-ul">');
        inList = true;
      }
      html.push(`<li>${renderInline(line.slice(2))}</li>`);
    } else if (/^> /.test(line)) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<blockquote class="cv-quote">${renderInline(line.slice(2))}</blockquote>`);
    } else if (line.trim() === "") {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push('<div class="cv-br" />');
    } else {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<p class="cv-p">${renderInline(line)}</p>`);
    }
  }
  if (inList) html.push("</ul>");
  return html.join("");
}

export default function CanvasViewer({
  src,
  caption,
  height = 560,
  initialFit = true,
}: CanvasViewerProps) {
  const [data, setData] = useState<CanvasData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [activeNode, setActiveNode] = useState<CanvasNode | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const frame = window.requestAnimationFrame(() => {
      if (cancelled) return;
      setError(null);
      setData(null);

      fetch(src, { cache: "force-cache" })
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        })
        .then((json) => {
          if (cancelled) return;
          setData(json);
        })
        .catch((e) => {
          if (cancelled) return;
          setError(String(e));
        });
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [src]);

  const bounds = useMemo(() => {
    if (!data) return { x: 0, y: 0, w: 1000, h: 600 };
    const PAD = 80;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const n of data.nodes) {
      minX = Math.min(minX, n.x);
      minY = Math.min(minY, n.y);
      maxX = Math.max(maxX, n.x + n.width);
      maxY = Math.max(maxY, n.y + n.height);
    }
    return {
      x: minX - PAD,
      y: minY - PAD,
      w: maxX - minX + PAD * 2,
      h: maxY - minY + PAD * 2,
    };
  }, [data]);

  const fit = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  useEffect(() => {
    if (!initialFit) return;
    const frame = window.requestAnimationFrame(() => fit());
    return () => window.cancelAnimationFrame(frame);
  }, [data, initialFit, fit]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen]);

  const nodeMap = useMemo(() => {
    const m = new Map<string, CanvasNode>();
    if (data) for (const n of data.nodes) m.set(n.id, n);
    return m;
  }, [data]);

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    const delta = -e.deltaY * 0.001;
    setScale((s) => Math.max(0.2, Math.min(4, s * (1 + delta))));
  }

  function onMouseDown(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest("[data-node]")) return;
    dragState.current = { x: e.clientX, y: e.clientY, tx, ty };
    setIsDragging(true);
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.x;
    const dy = e.clientY - dragState.current.y;
    setTx(dragState.current.tx + dx);
    setTy(dragState.current.ty + dy);
  }

  function onMouseUp() {
    dragState.current = null;
    setIsDragging(false);
  }

  const containerStyle: CSSProperties = isFullscreen
    ? {
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "var(--paper, #FAFAF7)",
      }
    : { height: `${height}px`, position: "relative" };

  return (
    <figure className="canvas-viewer my-10 not-prose">
      <div
        ref={containerRef}
        className="cv-frame"
        style={containerStyle}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onWheel={onWheel}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`${bounds.x} ${bounds.y} ${bounds.w} ${bounds.h}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ display: "block", cursor: isDragging ? "grabbing" : "grab" }}
        >
          <defs>
            {Object.entries(COLOR_MAP).map(([key, c]) => (
              <marker
                key={`arrow-${key}`}
                id={`cv-arrow-${key}`}
                viewBox="0 -4 10 8"
                refX="9"
                refY="0"
                markerWidth="9"
                markerHeight="9"
                orient="auto"
              >
                <path d="M0,-4 L10,0 L0,4 Z" fill={c.stroke} />
              </marker>
            ))}
          </defs>
          <g transform={`translate(${tx} ${ty}) scale(${scale})`}>
            {data?.edges.map((e) => {
              const a = nodeMap.get(e.fromNode);
              const b = nodeMap.get(e.toNode);
              if (!a || !b) return null;
              const p1 = anchorPoint(a, e.fromSide);
              const p2 = anchorPoint(b, e.toSide);
              const colorKey = e.color && COLOR_MAP[e.color] ? e.color : "default";
              const c = getColor(colorKey);
              const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
              return (
                <g key={e.id}>
                  <line
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke={c.stroke}
                    strokeWidth={2}
                    markerEnd={e.toEnd === "arrow" ? `url(#cv-arrow-${colorKey})` : undefined}
                  />
                  {e.label ? (
                    <foreignObject
                      x={mid.x - 100}
                      y={mid.y - 18}
                      width={200}
                      height={36}
                      style={{ pointerEvents: "none" }}
                    >
                      <div className="cv-edge-label" style={{ color: c.ink }}>
                        {e.label}
                      </div>
                    </foreignObject>
                  ) : null}
                </g>
              );
            })}
            {data?.nodes.map((n) => {
              const c = getColor(n.color);
              const isActive = activeNode?.id === n.id;
              return (
                <g
                  key={n.id}
                  data-node="1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveNode(n)}
                >
                  <rect
                    x={n.x}
                    y={n.y}
                    width={n.width}
                    height={n.height}
                    fill={c.fill}
                    stroke={isActive ? "#1F51FF" : c.stroke}
                    strokeWidth={isActive ? 3 : 1.5}
                    rx={2}
                  />
                  <foreignObject x={n.x} y={n.y} width={n.width} height={n.height}>
                    <div
                      className="cv-node-body"
                      style={{ color: c.ink }}
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(n.text || n.label || "") }}
                    />
                  </foreignObject>
                </g>
              );
            })}
          </g>
        </svg>

        {error ? (
          <div className="cv-error">無法載入 canvas: {error}</div>
        ) : !data ? (
          <div className="cv-loading">載入中…</div>
        ) : null}

        <div className="cv-toolbar">
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(4, s * 1.25))}
            aria-label="放大"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(0.2, s / 1.25))}
            aria-label="縮小"
          >
            −
          </button>
          <button type="button" onClick={fit} aria-label="重置">
            FIT
          </button>
          <button
            type="button"
            onClick={() => setIsFullscreen((v) => !v)}
            aria-label={isFullscreen ? "退出全螢幕" : "全螢幕"}
          >
            {isFullscreen ? "EXIT" : "FULL"}
          </button>
          <a
            className="cv-toolbar-link"
            href={src}
            download
            aria-label="下載 canvas JSON"
          >
            JSON
          </a>
        </div>

        {activeNode ? (
          <aside
            className="cv-panel"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cv-panel-close"
              onClick={() => setActiveNode(null)}
              aria-label="關閉節點詳情"
            >
              ×
            </button>
            <div
              className="cv-panel-body"
              style={{ color: getColor(activeNode.color).ink }}
              dangerouslySetInnerHTML={{
                __html: renderMarkdown(activeNode.text || activeNode.label || ""),
              }}
            />
          </aside>
        ) : null}
      </div>
      {caption ? <figcaption className="cv-caption">{caption}</figcaption> : null}

      <style jsx>{`
        .canvas-viewer {
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
        }
        .cv-frame {
          border: 1px solid var(--rule, #e5e2dd);
          background: var(--paper, #fafaf7);
          overflow: hidden;
          user-select: none;
        }
        .cv-toolbar {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          gap: 6px;
          background: var(--paper, #fafaf7);
          border: 1px solid var(--rule, #e5e2dd);
          padding: 4px;
        }
        .cv-toolbar :global(button),
        .cv-toolbar :global(.cv-toolbar-link) {
          font-family: var(--f-mono, monospace);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink, #0a0a0a);
          background: transparent;
          border: none;
          padding: 4px 8px;
          cursor: pointer;
          text-decoration: none;
        }
        .cv-toolbar :global(button:hover),
        .cv-toolbar :global(.cv-toolbar-link:hover) {
          color: var(--signal, #1f51ff);
        }
        .cv-loading,
        .cv-error {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--f-mono, monospace);
          font-size: 12px;
          color: var(--ink-muted, #5f5b57);
        }
        .cv-panel {
          position: absolute;
          top: 12px;
          left: 12px;
          width: min(360px, 60%);
          max-height: calc(100% - 24px);
          overflow: auto;
          background: var(--paper, #fafaf7);
          border: 1px solid var(--rule, #e5e2dd);
          padding: 16px 20px 20px;
          font-family: var(--f-zh-body, sans-serif);
          font-size: 14px;
          line-height: 1.7;
        }
        .cv-panel-close {
          position: absolute;
          top: 8px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: var(--ink-muted, #5f5b57);
          padding: 0;
          width: 24px;
          height: 24px;
          line-height: 1;
        }
        .cv-panel-close:hover {
          color: var(--signal, #1f51ff);
        }
        .cv-caption {
          font-family: var(--f-mono, monospace);
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--ink-muted, #5f5b57);
          margin-top: 8px;
          text-align: center;
        }
      `}</style>
      <style jsx global>{`
        .cv-node-body {
          padding: 14px 16px;
          font-family: var(--f-zh-body, "Noto Sans TC", sans-serif);
          font-size: 13px;
          line-height: 1.55;
          height: 100%;
          overflow: hidden;
        }
        .cv-node-body .cv-h1 {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 4px;
        }
        .cv-node-body .cv-h2 {
          font-size: 14px;
          font-weight: 600;
          margin: 4px 0;
        }
        .cv-node-body .cv-h3 {
          font-size: 13px;
          font-weight: 600;
          margin: 4px 0;
        }
        .cv-node-body .cv-p,
        .cv-panel-body .cv-p {
          margin: 4px 0;
        }
        .cv-node-body .cv-ul,
        .cv-panel-body .cv-ul {
          padding-left: 16px;
          margin: 4px 0;
        }
        .cv-node-body .cv-quote,
        .cv-panel-body .cv-quote {
          border-left: 2px solid currentColor;
          opacity: 0.7;
          padding-left: 8px;
          margin: 4px 0;
        }
        .cv-node-body .cv-mark,
        .cv-panel-body .cv-mark {
          background: rgba(31, 81, 255, 0.12);
          padding: 0 2px;
        }
        .cv-edge-label {
          font-family: var(--f-mono, monospace);
          font-size: 10px;
          letter-spacing: 0.04em;
          text-align: center;
          background: var(--paper, #fafaf7);
          padding: 2px 6px;
          display: inline-block;
          border: 1px solid var(--rule, #e5e2dd);
        }
        .cv-panel-body {
          font-family: var(--f-zh-body, "Noto Sans TC", sans-serif);
        }
        .cv-panel-body .cv-h1 {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 8px;
        }
        .cv-panel-body .cv-h2 {
          font-size: 16px;
          font-weight: 600;
          margin: 8px 0 4px;
        }
        .cv-panel-body .cv-h3 {
          font-size: 14px;
          font-weight: 600;
          margin: 6px 0 4px;
        }
      `}</style>
    </figure>
  );
}
