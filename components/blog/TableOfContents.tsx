"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string };

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\u3000]+/g, "-")
    .replace(/[^\w\u4e00-\u9fa5-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(".article-content h2")
    );
    const items = nodes.map((node) => {
      if (!node.id) node.id = slugify(node.textContent || "");
      return { id: node.id, text: node.textContent || "" };
    });
    setHeadings(items);

    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside
      className="md:sticky md:top-20 self-start text-[11px] tracking-[0.08em] uppercase border-l border-[color:var(--rule)] pl-5"
      style={{ fontFamily: "var(--f-mono), monospace" }}
      aria-label="文章目錄"
    >
      <div className="mb-4 tracking-[0.18em]" style={{ color: "var(--ink-muted)" }}>
        IN THIS ESSAY
      </div>
      <ol className="list-none p-0 m-0 flex flex-col gap-[10px]">
        {headings.map((h, i) => {
          const isActive = activeId === h.id;
          const num = String(i + 1).padStart(2, "0");
          return (
            <li
              key={h.id}
              className="leading-[1.5] transition-colors"
              style={{ color: isActive ? "var(--ink)" : "var(--ink-muted)" }}
            >
              <a href={`#${h.id}`} className="flex gap-2">
                <span className="shrink-0" style={{ color: "var(--signal)" }}>
                  {num}
                </span>
                <span>{h.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
