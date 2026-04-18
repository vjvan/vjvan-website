"use client";

import { usePathname, useRouter } from "next/navigation";

const ZH_PATH = "/courses/prompt-to-pixel";
const EN_PATH = "/en/courses/prompt-to-pixel";
const COOKIE = "vjvan_locale";

function setLocaleCookie(locale: "zh" | "en") {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE}=${locale}; path=/; max-age=${oneYear}; samesite=lax`;
}

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const isEn = pathname?.startsWith("/en/");

  function go(locale: "zh" | "en") {
    setLocaleCookie(locale);
    router.push(locale === "en" ? EN_PATH : ZH_PATH);
  }

  return (
    <nav className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em]">
      <button
        type="button"
        onClick={() => go("zh")}
        aria-pressed={!isEn}
        className={
          !isEn
            ? "text-[color:var(--ink)] underline underline-offset-[6px] decoration-[color:var(--ink)]"
            : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
        }
      >
        ZH
      </button>
      <span aria-hidden className="text-[color:var(--ink-muted)]">·</span>
      <button
        type="button"
        onClick={() => go("en")}
        aria-pressed={!!isEn}
        className={
          isEn
            ? "text-[color:var(--ink)] underline underline-offset-[6px] decoration-[color:var(--ink)]"
            : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
        }
      >
        EN
      </button>
    </nav>
  );
}
