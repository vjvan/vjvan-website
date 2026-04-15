"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
    setMounted(true);
  }, []);

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
      className="font-mono text-[10px] tracking-[0.14em] uppercase text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors"
      style={{ fontFamily: "var(--f-mono), monospace" }}
      suppressHydrationWarning
    >
      {mounted ? (theme === "light" ? "DARK MODE →" : "LIGHT MODE →") : "DARK MODE →"}
    </button>
  );
}
