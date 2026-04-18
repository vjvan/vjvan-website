"use client";

import { useState } from "react";

type Copy = {
  emailLabel: string;
  emailLabelZh?: string;
  emailPlaceholder: string;
  roleLabel: string;
  roleLabelZh?: string;
  roleOptions: { value: string; label: string }[];
  goalLabel: string;
  goalLabelZh?: string;
  goalPlaceholder: string;
  goalOptional: string;
  submit: string;
  fine: string;
  successTitle: string;
  successStamp: string;
  errorFallback: string;
};

type Props = { locale: "zh" | "en"; copy: Copy };

export default function WaitlistForm({ locale, copy }: Props) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") || "").trim(),
      role: String(data.get("role") || "").trim() || null,
      goal: String(data.get("goal") || "").trim() || null,
      company_website: String(data.get("company_website") || ""),
      locale,
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || copy.errorFallback);
      }
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : copy.errorFallback);
    }
  }

  if (state === "success") {
    return (
      <div className="enrol-success" role="status" aria-live="polite">
        <p>{copy.successTitle}</p>
        <div className="stamp">
          <span className="tick" aria-hidden />
          <span>{copy.successStamp}</span>
        </div>
      </div>
    );
  }

  return (
    <form className="enrol-form" onSubmit={onSubmit} noValidate>
      <div className="field full">
        <label htmlFor="wl-email">
          {copy.emailLabel}
          {copy.emailLabelZh ? <span className="zh">/ {copy.emailLabelZh}</span> : null}
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="input"
          placeholder={copy.emailPlaceholder}
        />
      </div>

      <div className="field">
        <label htmlFor="wl-role">
          {copy.roleLabel}
          {copy.roleLabelZh ? <span className="zh">/ {copy.roleLabelZh}</span> : null}
          <span className="opt">Optional</span>
        </label>
        <select id="wl-role" name="role" defaultValue="" className="input">
          <option value="" disabled>
            {locale === "zh" ? "選一個最接近的 …" : "Pick one …"}
          </option>
          {copy.roleOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="wl-goal">
          {copy.goalLabel}
          {copy.goalLabelZh ? <span className="zh">/ {copy.goalLabelZh}</span> : null}
          <span className="opt">{copy.goalOptional}</span>
        </label>
        <input
          id="wl-goal"
          name="goal"
          type="text"
          maxLength={160}
          className="input"
          placeholder={copy.goalPlaceholder}
        />
      </div>

      {/* honeypot */}
      <div className="full" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }} aria-hidden>
        <label>
          Do not fill
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="enrol-submit full">
        <button type="submit" className="cta" disabled={state === "loading"}>
          {state === "loading" ? (locale === "zh" ? "送出中 …" : "Submitting …") : copy.submit}
          <span className="arrow">→</span>
        </button>
        <span className="fine">{copy.fine}</span>
      </div>

      {state === "error" && errorMessage ? (
        <div className="enrol-error full" role="alert">
          {errorMessage}
        </div>
      ) : null}
    </form>
  );
}
