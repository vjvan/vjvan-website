import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ROLES = new Set([
  "founder",
  "creator",
  "agency",
  "consultant",
  "marketer",
  "freelancer",
  "other",
]);

const ROLE_LABELS_ZH: Record<string, string> = {
  founder: "一人公司老闆",
  creator: "個人品牌 / 創作者",
  agency: "行銷代理 / 影片工作室",
  consultant: "AI / 自動化顧問",
  marketer: "行銷人員",
  freelancer: "Freelancer / 接案",
  other: "其他",
};

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const FROM_ADDRESS = process.env.WAITLIST_FROM_ADDRESS || "Van <hello@vjvan.com>";
const NOTIFY_ADDRESS = process.env.WAITLIST_NOTIFY_ADDRESS || "vjvan.n@gmail.com";

async function sendWelcome(toEmail: string, locale: "zh" | "en") {
  const resend = getResend();
  if (!resend) return;
  const subject =
    locale === "zh"
      ? "歡迎加入 P2P AI Lab Waitlist · Founding Member 連結將在開站首日寄出"
      : "Welcome to the P2P AI Lab Waitlist";
  const html =
    locale === "zh"
      ? `
        <div style="font-family: -apple-system, 'Noto Sans TC', sans-serif; line-height: 1.7; color: #0A0A0A; max-width: 560px;">
          <p>嗨,</p>
          <p>感謝加入 <strong>P2P AI Lab</strong> Waitlist。</p>
          <p>這不是電子報,是讓你能在開站第一天拿到 Founding Member 連結的名單。</p>
          <p>P2P AI Lab 是為一人公司、行銷代理、AI 顧問與個人品牌設計的 AI 影片商業技術學院。允雷親自交付一整條可商用、可接案、可變現的 Prompt to Pixel 產線。</p>
          <p><strong>接下來會發生什麼:</strong></p>
          <ul>
            <li>Module 0 三個單元拍好後,會直接寄試看連結到這個信箱</li>
            <li>開站首日 (Q3 2026),Founding Member 註冊連結直接寄到你信箱,前 100 位終身鎖 US$49 / 月</li>
            <li>中間如果有重大進展 (例如新 Module 或工具示範) 會發少量 update,不會疲勞轟炸</li>
          </ul>
          <p>如果這封信進垃圾信匣,麻煩標為「不是垃圾信」確保開站連結能順利收到。</p>
          <p>有任何問題直接回覆這封信,我看得到。</p>
          <p>— 允雷 (Van)<br>vjvan.com · AI 商業系統架構師</p>
        </div>
      `
      : `
        <div style="font-family: -apple-system, sans-serif; line-height: 1.7; color: #0A0A0A; max-width: 560px;">
          <p>Hi,</p>
          <p>Thanks for joining the <strong>P2P AI Lab</strong> Waitlist.</p>
          <p>This is not a newsletter — it's the list that gets the Founding Member link the day P2P AI Lab opens.</p>
          <p>P2P AI Lab is a business technology academy for one-person companies, agencies, AI consultants and personal brands. YunLei (Van) personally delivers a commercial-grade Prompt to Pixel pipeline you can use to take on client work, build recurring revenue, and turn AI video into a real business asset.</p>
          <p><strong>What happens next:</strong></p>
          <ul>
            <li>When Module 0 (3 free preview units) is filmed, the preview link arrives in this inbox</li>
            <li>On launch day (Q3 2026), the Founding Member signup link goes straight to you. First 100 lock in US$49 / month, forever</li>
            <li>If there is a major milestone (new Module or tool demo), you get a brief update — no spam</li>
          </ul>
          <p>If this email landed in spam, please mark it as "Not spam" so the launch link reaches you.</p>
          <p>Reply to this email if you have any question, I read every reply.</p>
          <p>— YunLei (Van)<br>vjvan.com · AI Business Systems Architect</p>
        </div>
      `;
  try {
    await resend.emails.send({ from: FROM_ADDRESS, to: toEmail, subject, html });
  } catch (err) {
    console.error("[waitlist] welcome email failed", err);
  }
}

async function sendNotify(payload: {
  email: string;
  role: string | null;
  goal: string | null;
  locale: "zh" | "en";
  referrer: string | null;
  userAgent: string | null;
}) {
  const resend = getResend();
  if (!resend) return;
  const roleLabel = payload.role ? ROLE_LABELS_ZH[payload.role] || payload.role : "(未填)";
  const subject = `[P2P Waitlist] ${payload.email} · ${roleLabel}`;
  const html = `
    <div style="font-family: -apple-system, monospace; line-height: 1.7; color: #0A0A0A;">
      <p><strong>新 Waitlist 加入</strong></p>
      <table style="border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 4px 12px 4px 0; color: #5F5B57;">EMAIL</td><td><strong>${payload.email}</strong></td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #5F5B57;">ROLE</td><td>${roleLabel}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #5F5B57;">GOAL</td><td>${payload.goal || "(未填)"}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #5F5B57;">LOCALE</td><td>${payload.locale}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #5F5B57;">REFERRER</td><td>${payload.referrer || "(none)"}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #5F5B57;">UA</td><td style="font-size: 11px; color: #5F5B57;">${payload.userAgent || "(none)"}</td></tr>
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #5F5B57;">Supabase: <a href="https://supabase.com/dashboard/project/zemxfcszotndlxxyjpjm/editor/17377">p2p_waitlist table</a></p>
    </div>
  `;
  try {
    await resend.emails.send({ from: FROM_ADDRESS, to: NOTIFY_ADDRESS, subject, html });
  } catch (err) {
    console.error("[waitlist] notify email failed", err);
  }
}

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error("Missing Supabase env vars");
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function hashIp(ip: string, salt: string) {
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const role = typeof body.role === "string" ? body.role.trim() : "";
  const goal = typeof body.goal === "string" ? body.goal.trim().slice(0, 160) : "";
  const locale = body.locale === "en" ? "en" : "zh";
  const honeypot = typeof body.company_website === "string" ? body.company_website : "";

  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (role && !ALLOWED_ROLES.has(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent")?.slice(0, 500) ?? null;
  const referrer = req.headers.get("referer")?.slice(0, 500) ?? null;
  const forwardedFor = req.headers.get("x-forwarded-for") ?? "";
  const ip = forwardedFor.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "";
  const salt = process.env.WAITLIST_IP_SALT || "vjvan-waitlist";
  const ipHash = ip ? hashIp(ip, salt) : null;

  try {
    const supabase = getClient();
    const { error } = await supabase.from("p2p_waitlist").insert({
      email,
      role: role || null,
      goal: goal || null,
      locale,
      user_agent: userAgent,
      referrer,
      ip_hash: ipHash,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, duplicate: true }, { status: 200 });
      }
      console.error("[waitlist] insert error", error);
      return NextResponse.json({ error: "Storage error" }, { status: 500 });
    }

    // 並行寄信（不 block API 回應；失敗只 log 不影響使用者體驗）
    void Promise.all([
      sendWelcome(email, locale),
      sendNotify({ email, role: role || null, goal: goal || null, locale, referrer, userAgent }),
    ]);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[waitlist] unexpected", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
