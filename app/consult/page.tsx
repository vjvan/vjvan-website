"use client";

import { useState } from "react";

const TOPICS = [
  "LINE LIFF 系統建置",
  "CRM 管理後台",
  "n8n 自動化流程",
  "AI 導入策略",
  "多平台整合",
  "其他",
];

const LINE_URL = "https://lin.ee/XjnkG91";

export default function ConsultPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            ...form,
            submitted_at: new Date().toISOString(),
          }),
        });
      } catch {
        // Still redirect even if save fails
      }
    }

    window.location.href = LINE_URL;
  };

  const inputClass =
    "w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-action focus:outline-none focus:ring-1 focus:ring-action transition-colors";
  const labelClass = "block text-sm font-medium text-stone-700 mb-2";

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(214,145,88,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(120,83,57,0.12),transparent_30%)]" />

      <section className="mx-auto max-w-xl px-6 pt-16 pb-20 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
          預約諮詢
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
          預約 30 分鐘免費諮詢
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-600">
          填寫以下資訊，我會在一個工作天內透過 LINE 與你聯繫，安排諮詢時段。
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className={labelClass}>
              姓名
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="你的姓名"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              公司 / 品牌名稱
            </label>
            <input
              id="company"
              type="text"
              required
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              placeholder="公司或品牌名稱"
              className={inputClass}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                電話
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="0912-345-678"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic" className={labelClass}>
              想諮詢的方向
            </label>
            <select
              id="topic"
              required
              value={form.topic}
              onChange={(e) => update("topic", e.target.value)}
              className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2378716c%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
            >
              <option value="" disabled>
                請選擇
              </option>
              {TOPICS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className={labelClass}>
              簡述你的需求{" "}
              <span className="font-normal text-stone-400">(選填)</span>
            </label>
            <textarea
              id="description"
              rows={4}
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              placeholder="目前遇到什麼問題？希望系統幫你解決什麼？"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-action px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-action/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-action-hover disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {submitting ? "送出中..." : "送出並加入 LINE 諮詢"}
          </button>

          <p className="text-center text-xs leading-5 text-stone-500">
            送出後會自動跳轉到 LINE，我會在一個工作天內回覆你。
          </p>
        </form>
      </section>
    </div>
  );
}
