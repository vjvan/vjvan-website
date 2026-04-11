"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import BlurText from "@/components/bits/BlurText";

const heroStats = [
  {
    value: "4-7 週",
    label: "核心系統交付",
    description: "依需求範圍規劃 MVP 到完整版本，從需求確認後啟動。",
  },
  {
    value: "24 / 7",
    label: "自動化持續運作",
    description: "讓預約、提醒、推播與報表流程不再依賴人工補位。",
  },
  {
    value: "LIFF + CRM + n8n",
    label: "核心交付主軸",
    description: "把前台體驗、後台管理與自動化流程串成同一套營運系統。",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // H1 blur 動畫跑完後才進場的時機點
  // 中文主標 ~20 字 × 0.035 = 0.7 秒 + 一點緩衝
  const afterTitleDelay = shouldReduceMotion ? 0 : 1.0;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(214,145,88,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(120,83,57,0.12),transparent_30%)]" />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-3 rounded-full border border-whisper bg-white px-4 py-2 text-xs font-medium tracking-[0.24em] text-stone-600 uppercase shadow-notion"
            >
              <span className="h-2 w-2 rounded-full bg-amber-600" />
              AI Business Systems
            </motion.div>

            <h1
              className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-stone-950 md:text-6xl"
              style={{ textWrap: "balance" }}
            >
              <BlurText
                text="把 LINE、CRM 與 n8n"
                as="span"
                className="block"
                startDelay={0.15}
              />
              <BlurText
                text="串成真正能運轉的營運系統"
                as="span"
                className="block text-stone-700"
                startDelay={0.55}
              />
            </h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={afterTitleDelay}
              className="mt-6 max-w-2xl text-lg leading-8 text-stone-700"
            >
              我做的不是單點 AI 工具導入，而是把詢價、預約、回購、客服、報表和內部流程整理成一套可持續維運的系統。
              適合想提升效率、但不想讓團隊被更多零散工具綁住的中小企業。
            </motion.p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={afterTitleDelay + 0.12}
              >
                <Link
                  href="/consult"
                  className="inline-flex items-center justify-center rounded-full bg-action px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-action/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-action-hover"
                >
                  預約 30 分鐘諮詢
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={afterTitleDelay + 0.22}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-whisper bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-50"
                >
                  查看服務與交付範圍
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={afterTitleDelay + 0.32}
              className="mt-10 flex flex-wrap gap-3 text-sm text-stone-600"
            >
              <span className="rounded-full border border-whisper bg-white px-4 py-2">
                高雄 / 遠端服務全台
              </span>
              <span className="rounded-full border border-whisper bg-white px-4 py-2">
                LIFF 先行，保留 App Ready 架構
              </span>
              <span className="rounded-full border border-whisper bg-white px-4 py-2">
                流程診斷 → 建置整合 → 上線維運
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.3,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -left-6 top-10 h-36 w-36 rounded-full bg-amber-200/50 blur-3xl" />
            <div className="absolute -right-2 bottom-10 h-32 w-32 rounded-full bg-stone-300/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-whisper bg-gradient-to-br from-[#1a120e] via-[#241710] to-[#3a2418] p-7 text-white shadow-notion-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
                    營運系統藍圖
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-snug">
                    讓前台體驗、後台數據與自動化流程接在同一條線上
                  </h2>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-amber-100">
                  App Ready
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "LINE 前台入口",
                    description: "預約、下單、查詢、會員互動集中在熟悉的使用情境。",
                  },
                  {
                    title: "CRM 管理後台",
                    description: "把訂單、客戶、門市與經營數據整理成可決策的畫面。",
                  },
                  {
                    title: "n8n 自動化流程",
                    description: "提醒、推播、分眾喚回與報表生成交給系統持續運轉。",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-medium text-white">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-stone-300">
                          {item.description}
                        </p>
                      </div>
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { value: "4-5 週", label: "核心版本" },
                  { value: "40%+", label: "訊息費優化空間" },
                  { value: "0 重寫", label: "未來轉 App 後端" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-5"
                  >
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-xs tracking-[0.18em] text-stone-400 uppercase">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[1.75rem] border border-whisper bg-white p-6 shadow-notion"
            >
              <p className="text-3xl font-semibold tracking-tight text-stone-950">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-stone-800">{stat.label}</p>
              <p className="mt-3 text-sm leading-6 text-stone-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
