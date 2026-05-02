/**
 * Consult API · 諮詢預約寫進統一 contacts 系統
 *
 * Plan: ~/.claude/plans/resend-synthetic-treasure.md
 *
 * 雙寫策略 (R2D 過渡期):
 * 1. Primary: Supabase contacts + contact_sources (新)
 * 2. Backup: Google Sheets (沿用既有 NEXT_PUBLIC_GOOGLE_SCRIPT_URL)
 *
 * 兩週後驗證 Supabase 穩定，再 deprecate Sheets 寫入。
 *
 * Email: 寄 consultWelcome 給訂閱者 + notifyConsult 給允雷
 * Post-submit: 回傳 { ok, redirect: LINE_URL } 讓 client 跳 LINE OA
 */

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";
import { fireSendBackground, sendRaw, sendTemplated, type ContactRow } from "@/lib/email/send";
import { consultWelcomeTemplate } from "@/lib/email/templates/consultWelcome";
import { notifyConsult } from "@/lib/email/templates/notifyAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_TOPICS = new Set([
  "LINE LIFF 系統建置",
  "CRM 管理後台",
  "自動化流程",
  "AI 導入策略",
  "多平台整合",
  "其他",
]);

const LINE_URL = "https://lin.ee/XjnkG91";
const NOTIFY_ADDRESS = process.env.WAITLIST_NOTIFY_ADDRESS || "vjvan.n@gmail.com";

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

/** Dual-write to Google Sheets (server-side, fire-and-forget) */
async function writeSheetsBackup(payload: {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  description: string;
  submitted_at: string;
}) {
  const url = process.env.CONSULT_GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[consult] sheets backup failed", err);
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 80) : "";
  const company = typeof body.company === "string" ? body.company.trim().slice(0, 120) : "";
  const emailRaw = typeof body.email === "string" ? body.email.trim() : "";
  const email = emailRaw.toLowerCase();
  const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : "";
  const topic = typeof body.topic === "string" ? body.topic.trim() : "";
  const description = typeof body.description === "string" ? body.description.trim().slice(0, 2000) : "";
  const honeypot = typeof body.website === "string" ? body.website : "";

  // Honeypot bot trap → return success but no-op
  if (honeypot) {
    return NextResponse.json({ ok: true, redirect: LINE_URL }, { status: 200 });
  }
  if (!name || !company || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (topic && !ALLOWED_TOPICS.has(topic)) {
    return NextResponse.json({ error: "Invalid topic" }, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent")?.slice(0, 500) ?? null;
  const referrer = req.headers.get("referer")?.slice(0, 500) ?? null;
  const forwardedFor = req.headers.get("x-forwarded-for") ?? "";
  const ip = forwardedFor.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "";
  const salt = process.env.WAITLIST_IP_SALT || "vjvan-waitlist";
  const ipHash = ip ? hashIp(ip, salt) : null;

  try {
    const supabase = getClient();

    // 1. Upsert contacts (帶 display_name)
    const { data: contact, error: upsertErr } = await supabase
      .from("contacts")
      .upsert(
        {
          email_lower: email,
          email: emailRaw,
          display_name: name,
          locale: "zh-TW",
          ip_hash: ipHash,
          user_agent: userAgent,
          last_seen_at: new Date().toISOString(),
        },
        { onConflict: "email_lower", ignoreDuplicates: false }
      )
      .select("id, email, email_lower, locale, unsubscribed_at, unsubscribed_scopes, unsubscribe_token")
      .single();

    if (upsertErr || !contact) {
      console.error("[consult] contacts upsert error", upsertErr);
      return NextResponse.json({ error: "Storage error" }, { status: 500 });
    }

    // 2. Insert contact_sources (consult)
    const { error: srcErr } = await supabase.from("contact_sources").insert({
      contact_id: contact.id,
      source: "consult",
      source_detail: {
        name,
        company,
        phone,
        topic: topic || null,
        description: description || null,
      },
      referrer,
    });
    if (srcErr) {
      console.error("[consult] contact_sources insert error", srcErr);
    }

    // 3. Dual-write to Google Sheets (背景，過渡期保留)
    fireSendBackground(
      writeSheetsBackup({
        name,
        company,
        email: emailRaw,
        phone,
        topic,
        description,
        submitted_at: new Date().toISOString(),
      }).then(() => ({ ok: true as const, messageId: null }))
    );

    // 4. 寄 consultWelcome (transactional) + notifyConsult (admin)
    const contactRow: ContactRow = {
      id: contact.id,
      email: contact.email,
      email_lower: contact.email_lower,
      locale: contact.locale,
      unsubscribed_at: contact.unsubscribed_at,
      unsubscribed_scopes: contact.unsubscribed_scopes,
      unsubscribe_token: contact.unsubscribe_token,
    };

    fireSendBackground(
      sendTemplated({
        supabase,
        contact: contactRow,
        template: consultWelcomeTemplate({
          locale: "zh",
          unsubscribeToken: contact.unsubscribe_token,
          name,
          topic: topic || null,
        }),
        scope: "transactional",
      })
    );

    const notify = notifyConsult({
      name,
      company,
      email: emailRaw,
      phone,
      topic: topic || null,
      description: description || null,
      referrer,
      userAgent,
    });
    fireSendBackground(
      sendRaw({ to: NOTIFY_ADDRESS, subject: notify.subject, html: notify.html })
    );

    return NextResponse.json({ ok: true, redirect: LINE_URL }, { status: 200 });
  } catch (err) {
    console.error("[consult] unexpected", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
