"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/about", zh: "關於", en: "About" },
  { href: "/blog", zh: "文章", en: "Writing" },
  { href: "/services", zh: "服務", en: "Services" },
  { href: "/contact", zh: "聯絡", en: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40"
      style={{
        background: "var(--paper)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <nav className="mx-auto flex max-w-[1120px] items-baseline justify-between px-5 py-6 md:px-10">
        <Link
          href="/"
          className="text-[26px] leading-none tracking-[-0.01em]"
          style={{ fontFamily: "var(--f-display), serif" }}
        >
          <span>VJ</span>
          <em
            className="not-italic"
            style={{ fontStyle: "italic", color: "var(--signal)" }}
          >
            VAN
          </em>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-baseline gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative inline-flex flex-col gap-[3px] pb-[2px]"
              >
                <span
                  className="text-[15px] leading-none tracking-[0.04em]"
                  style={{ fontFamily: "var(--f-zh-body), sans-serif", fontWeight: 500 }}
                >
                  {link.zh}
                </span>
                <span
                  className="text-[10px] leading-none tracking-[0.14em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  {link.en}
                </span>
                <span
                  className="pointer-events-none absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"
                  style={{ background: "var(--ink)" }}
                />
              </Link>
            </li>
          ))}
          <li className="ml-4 pl-4" style={{ borderLeft: "1px solid var(--rule)" }}>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[11px] tracking-[0.14em] uppercase"
          style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink)" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {isOpen && (
        <div
          className="md:hidden"
          style={{ borderTop: "1px solid var(--rule)", background: "var(--paper)" }}
        >
          <div className="mx-auto max-w-[1120px] px-5 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline justify-between"
              >
                <span
                  className="text-[18px]"
                  style={{ fontFamily: "var(--f-zh-body), sans-serif", fontWeight: 500 }}
                >
                  {link.zh}
                </span>
                <span
                  className="text-[10px] tracking-[0.14em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  {link.en}
                </span>
              </Link>
            ))}
            <div
              className="pt-4 mt-2"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
