"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "服務項目" },
  { href: "/cases", label: "案例" },
  { href: "/about", label: "關於允雷" },
  { href: "/blog", label: "觀點" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[rgba(247,241,232,0.86)] backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/vjvan-portrait.jpg"
            alt="允雷"
            className="h-11 w-11 rounded-full object-cover object-[center_30%] shadow-sm"
          />
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-stone-500">
              AI Systems
            </p>
            <p className="text-base font-semibold tracking-tight text-stone-950">
              允雷
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-950"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/consult"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-action px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
          >
            預約諮詢
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-full border border-stone-200 bg-white/70 p-2 text-stone-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-stone-200 bg-[rgba(247,241,232,0.94)] md:hidden">
          <div className="space-y-3 px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-stone-700 hover:text-stone-950"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consult"
              className="inline-flex w-full items-center justify-center rounded-full bg-action px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
              onClick={() => setIsOpen(false)}
            >
              預約諮詢
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
