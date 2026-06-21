"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/about", label: "關於" },
  { href: "/blog", label: "觀點" },
  { href: "/services", label: "服務" },
  { href: "/courses/prompt-to-pixel", label: "課程" },
  { href: "/cases", label: "案例" },
  { href: "/labs/canvas", label: "實驗室" },
  { href: "/consult", label: "諮詢" },
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
      <nav className="mx-auto flex max-w-[1120px] items-baseline justify-between px-5 py-5 md:px-10">
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
                className="group relative inline-flex pb-[3px]"
              >
                <span
                  className="text-[16px] leading-none tracking-[0.08em]"
                  style={{ fontFamily: "var(--f-zh-body), sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                </span>
                <span
                  className="pointer-events-none absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"
                  style={{ background: "var(--ink)" }}
                />
              </Link>
            </li>
          ))}
          <li className="ml-3 pl-5" style={{ borderLeft: "1px solid var(--rule)" }}>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[13px] tracking-[0.12em]"
          style={{ fontFamily: "var(--f-zh-body), sans-serif", color: "var(--ink)", fontWeight: 500 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "關閉選單" : "開啟選單"}
        >
          {isOpen ? "關閉" : "選單"}
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
                  className="text-[18px] tracking-[0.08em]"
                  style={{ fontFamily: "var(--f-zh-body), sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[14px]"
                  style={{ color: "var(--ink-muted)" }}
                >
                  →
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
