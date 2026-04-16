"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

/**
 * Lenis smooth scroll provider.
 *
 * root=true 會把 lenis 綁到 <html>，整站的捲動都走 lenis。
 * prefers-reduced-motion 由 globals.css 處理（Lenis 會讀 user agent 的
 * scroll-behavior 但這裡我們維持純動畫，user 有需要可關閉）。
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
