"use client";

import { useState } from "react";
import { gaEvent } from "@/lib/gtag";

const TOPICS = [
  "LINE LIFF 系統建置",
  "CRM 管理後台",
  "自動化流程",
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
    website: "", // honeypot
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // honeypot: bot 會填這個隱藏欄位，真人不會
    if (form.website) {
      window.location.href = LINE_URL;
      return;
    }

    let redirectUrl: string = LINE_URL;
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));
      if (json && typeof json === "object" && typeof (json as { redirect?: unknown }).redirect === "string") {
        redirectUrl = (json as { redirect: string }).redirect;
      }
    } catch {
      // 即使 API 失敗也跳 LINE，user 還能聯絡
    }

    gaEvent("consult_form_submit", { topic: form.topic });
    window.location.href = redirectUrl;
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 8,
    fontFamily: "var(--f-mono), monospace",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--ink-muted)",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 0 10px 0",
    background: "transparent",
    border: "0",
    borderBottom: "1px solid var(--rule)",
    color: "var(--ink)",
    fontFamily: "var(--f-zh-body), sans-serif",
    fontSize: 17,
    lineHeight: 1.5,
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto max-w-[1120px] py-14 md:py-24">
        <div className="grid gap-10 md:gap-[72px] md:grid-cols-[0.7fr_2fr]">
          <aside>
            <div
              className="mb-8 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              Consult / Intake
            </div>
            <dl className="m-0 flex flex-col gap-6">
              <div>
                <dt
                  className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  Session
                </dt>
                <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16 }}>
                  30 分鐘免費視訊
                </dd>
              </div>
              <div>
                <dt
                  className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  Response
                </dt>
                <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16 }}>
                  一個工作天內 LINE 回覆
                </dd>
              </div>
              <div>
                <dt
                  className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  Based in
                </dt>
                <dd className="m-0" style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16 }}>
                  屏東 / Pingtung, Taiwan
                </dd>
              </div>
              <div>
                <dt
                  className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  Direct
                </dt>
                <dd className="m-0" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 16 }}>
                  <a
                    href="mailto:vjvan.n@gmail.com"
                    className="pb-[1px]"
                    style={{ borderBottom: "1px solid var(--signal)" }}
                  >
                    vjvan.n@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt
                  className="mb-[6px] text-[10px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  Prefer LINE
                </dt>
                <dd className="m-0" style={{ fontFamily: "var(--f-body), sans-serif", fontSize: 16 }}>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="pb-[1px]"
                    style={{ borderBottom: "1px solid var(--rule)" }}
                  >
                    加 LINE 官方帳號
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <div>
            <h1
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(40px, 5.2vw, 72px)",
                lineHeight: 1.12,
                letterSpacing: "0.01em",
              }}
            >
              告訴我你的
              <br />
              營運卡在哪裡
            </h1>
            <p
              className="m-0 mb-6 max-w-[640px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 19,
                lineHeight: 1.85,
                color: "var(--ink)",
              }}
            >
              填完下面，一個工作天內我會從 LINE 主動聯繫你，約 30 分鐘線上諮詢。不收費，也不綁單。
            </p>
            <p
              className="m-0 mb-12 max-w-[640px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 19,
                lineHeight: 1.85,
                color: "var(--ink-muted)",
              }}
            >
              如果你還沒想清楚，在「簡述你的需求」直接寫「我們是做什麼的、一天幾筆訂單、誰在處理」也可以。
            </p>

            <form onSubmit={handleSubmit} className="max-w-[640px]">
              {/* honeypot field */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                />
              </div>

              <div className="mb-7">
                <label htmlFor="name" style={labelStyle}>
                  Name · 姓名
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div className="mb-7">
                <label htmlFor="company" style={labelStyle}>
                  Company · 公司 / 品牌
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div className="grid gap-7 md:grid-cols-2 mb-7">
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>
                    Phone · 電話
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="mb-7">
                <label htmlFor="topic" style={labelStyle}>
                  Topic · 想諮詢的方向
                </label>
                <select
                  id="topic"
                  required
                  value={form.topic}
                  onChange={(e) => update("topic", e.target.value)}
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    backgroundImage:
                      "url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235F5B57%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 4px center",
                    backgroundSize: "16px",
                    paddingRight: 28,
                  }}
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

              <div className="mb-10">
                <label htmlFor="description" style={labelStyle}>
                  Description · 簡述你的需求（選填）
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="目前遇到什麼問題？希望系統幫你解決什麼？"
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    padding: "10px 0",
                    fontFamily: "var(--f-zh-body), sans-serif",
                  }}
                />
              </div>

              <div
                className="flex flex-wrap gap-8 items-center text-[12px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--f-mono), monospace" }}
              >
                <button
                  type="submit"
                  disabled={submitting}
                  className="disabled:opacity-50"
                  style={{
                    background: "transparent",
                    border: "0",
                    color: "var(--signal)",
                    padding: 0,
                    cursor: submitting ? "not-allowed" : "pointer",
                    fontFamily: "var(--f-mono), monospace",
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "1px solid currentColor",
                      paddingBottom: 2,
                    }}
                  >
                    {submitting ? "送出中..." : "送出並加入 LINE"}
                  </span>
                  {!submitting && (
                    <span aria-hidden="true" style={{ marginLeft: 6 }}>
                      →
                    </span>
                  )}
                </button>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--ink)",
                    display: "inline-flex",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "1px solid currentColor",
                      paddingBottom: 2,
                    }}
                  >
                    直接加 LINE
                  </span>
                </a>
              </div>

              <p
                className="mt-8 text-[13px]"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  color: "var(--ink-muted)",
                  lineHeight: 1.7,
                }}
              >
                送出後會自動跳轉到 LINE。一個工作天內我會主動聯絡你。
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
