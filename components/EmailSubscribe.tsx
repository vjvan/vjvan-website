"use client";

import { type FormEvent, useState } from "react";

export default function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-action-surface bg-action-surface/30 p-6 text-center">
        <p className="text-lg font-semibold text-stone-900">訂閱成功</p>
        <p className="mt-2 text-sm text-stone-600">
          感謝你的訂閱,我會不定期分享 AI 自動化與系統建置的實戰觀點。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="輸入你的 Email"
        required
        className="flex-1 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-action focus:outline-none focus:ring-2 focus:ring-action/20"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover disabled:opacity-60"
      >
        {status === "loading" ? "送出中..." : "免費訂閱"}
      </button>
    </form>
  );
}
