"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ReactNode } from "react";

type BlurTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  /**
   * 每個字元 stagger 延遲 (秒)
   * @default 0.035
   */
  delay?: number;
  /**
   * 每段進場的整體延遲 (秒)
   * @default 0
   */
  startDelay?: number;
  /**
   * 切字粒度：char 逐字、word 逐詞。
   * 中文內容建議用 char，英文混排 char 也可以。
   * @default "char"
   */
  splitBy?: "char" | "word";
  children?: ReactNode;
};

const container: Variants = {
  hidden: {},
  visible: (startDelay: number = 0) => ({
    transition: {
      delayChildren: startDelay,
      staggerChildren: 0.035,
    },
  }),
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6,
    },
  },
};

/**
 * BlurText：文字逐字（或逐詞）做 blur + translate 淡入。
 *
 * 效果參考 react-bits/BlurText，但用 motion 從頭手寫，不依賴 copy-paste。
 * - 尊重 prefers-reduced-motion：直接顯示完整文字、略過動畫
 * - 預設中文友善，用 char 切字
 */
export default function BlurText({
  text,
  as: Tag = "span",
  className,
  delay = 0.035,
  startDelay = 0,
  splitBy = "char",
}: BlurTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = Tag as React.ElementType;
    return <Component className={className}>{text}</Component>;
  }

  const units =
    splitBy === "word"
      ? text.split(/(\s+)/)
      : Array.from(text);

  // motion 的 Tag 對應
  const MotionTag = motion[Tag] as React.ComponentType<{
    className?: string;
    variants?: Variants;
    initial?: string;
    animate?: string;
    custom?: number;
    "aria-label"?: string;
    children?: ReactNode;
  }>;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: container.hidden!,
        visible: () => ({
          transition: {
            delayChildren: startDelay,
            staggerChildren: delay,
          },
        }),
      }}
      initial="hidden"
      animate="visible"
      custom={startDelay}
      aria-label={text}
    >
      {units.map((unit, i) => {
        // 空白保留佈局但不做動畫
        if (/^\s+$/.test(unit)) {
          return (
            <span key={`sp-${i}`} aria-hidden>
              {unit}
            </span>
          );
        }
        return (
          <motion.span
            key={`${unit}-${i}`}
            variants={item}
            style={{ display: "inline-block", willChange: "transform, filter, opacity" }}
            aria-hidden
          >
            {unit}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}
