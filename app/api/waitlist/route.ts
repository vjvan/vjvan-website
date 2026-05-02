/**
 * Waitlist API · 寫進統一 contacts 系統
 *
 * Plan: ~/.claude/plans/resend-synthetic-treasure.md
 * 取代既有 p2p_waitlist 單表設計，改寫 contacts + contact_sources。
 * Email 走 lib/email/send.ts 統一 chokepoint (含退訂 gate + email_log)。
 */

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";
import { fireSendBackground, sendRaw, sendTemplated, type ContactRow } from "@/lib/email/send";
import { waitlistWelcomeTemplate } from "@/lib/email/templates/waitlistWelcome";
import { notifyWaitlist } from "@/lib/email/templates/notifyAdmin";

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

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const emailRaw = typeof body.email === "string" ? body.email.trim() : "";
  const email = emailRaw.toLowerCase();
  const role = typeof body.role === "string" ? body.role.trim() : "";
  const goal = typeof body.goal === "string" ? body.goal.trim().slice(0, 160) : "";
  const locale: "zh" | "en" = body.locale === "en" ? "en" : "zh";
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

    // 1. Upsert contacts (一個 email 一筆，重填只更新 last_seen_at)
    const { data: contact, error: upsertErr } = await supabase
      .from("contacts")
      .upsert(
        {
          email_lower: email,
          email: emailRaw,
          locale: locale === "en" ? "en" : "zh-TW",
          ip_hash: ipHash,
          user_agent: userAgent,
          last_seen_at: new Date().toISOString(),
        },
        { onConflict: "email_lower", ignoreDuplicates: false }
      )
      .select("id, email, email_lower, locale, unsubscribed_at, unsubscribed_scopes, unsubscribe_token")
      .single();

    if (upsertErr || !contact) {
      console.error("[waitlist] contacts upsert error", upsertErr);
      return NextResponse.json({ error: "Storage error" }, { status: 500 });
    }

    // 2. Insert contact_sources (1-to-many，每次填表 1 row)
    const { error: srcErr } = await supabase.from("contact_sources").insert({
      contact_id: contact.id,
      source: "waitlist",
      source_detail: { role: role || null, goal: goal || null },
      referrer,
    });
    if (srcErr) {
      console.error("[waitlist] contact_sources insert error", srcErr);
      // 不 fail API,contacts 已寫入,寄信還是繼續
    }

    // 3. 並行寄歡迎信 + 通知信 (fire-and-forget)
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
        template: waitlistWelcomeTemplate({
          locale,
          unsubscribeToken: contact.unsubscribe_token,
        }),
        scope: "transactional",
      })
    );

    const notify = notifyWaitlist({
      email: contact.email,
      role: role || null,
      goal: goal || null,
      locale,
      referrer,
      userAgent,
    });
    fireSendBackground(
      sendRaw({ to: NOTIFY_ADDRESS, subject: notify.subject, html: notify.html })
    );

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[waitlist] unexpected", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
