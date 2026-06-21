"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  });

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="切換主題"
      className="text-[12px] tracking-[0.08em] text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors"
      style={{ fontFamily: "var(--f-zh-body), sans-serif" }}
      suppressHydrationWarning
    >
      {theme === "light" ? "深色模式 →" : "淺色模式 →"}
    </button>
  );
}
