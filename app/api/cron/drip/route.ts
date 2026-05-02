/**
 * R4 · Drip Campaign Cron · 每日 09:00 TPE 寄出 nurture email
 *
 * Plan: ~/.claude/plans/resend-synthetic-treasure.md
 *
 * Vercel Cron 設定: vercel.json crons.[0].schedule = "0 1 * * *"
 *   (01:00 UTC = 09:00 TPE 每日)
 *
 * Auth: 必須帶 `Authorization: Bearer ${CRON_SECRET}` header
 *   - Vercel Cron 自動帶這個 header (從 CRON_SECRET env 取)
 *   - 手動測試: curl -H "Authorization: Bearer $CRON_SECRET" https://www.vjvan.com/api/cron/drip
 *
 * 邏輯:
 * 1. 對 DRIP_PLAN 內每個 step,query 符合「source 為 X 且 created_at 為 today - N days
 *    且 email_log 未寄過此 template」的 contacts
 * 2. 對每個 match 走 sendTemplated (scope='drip')
 * 3. email_log partial unique index (contact_id, template_key) where scope <> 'transactional'
 *    是 dedupe 安全網,cron 跑兩次第二次會 fail 不會重寄
 *
 * 內容: DRIP_PLAN 暫空陣列,等 Module 0 拍好 + drip 信內容寫好再填。
 *       即使空陣列 cron 仍會跑,只是 0 寄信 (verify infra OK)。
 */

import { NextResponse } from "next/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { sendTemplated, type ContactRow, type EmailScope } from "@/lib/email/send";
import type { EmailTemplate } from "@/lib/email/send";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type DripStep = {
  source: "waitlist" | "consult" | "newsletter";
  dayOffset: number;
  templateKey: string;
  scope: EmailScope;
  buildTemplate: (contact: ContactRow) => EmailTemplate;
};

/**
 * Drip 計畫 · 暫時為空,等 Module 0 拍好 + 信件內容寫好再填
 *
 * 範例 (未來填):
 *   {
 *     source: 'waitlist',
 *     dayOffset: 7,
 *     templateKey: 'wl_d7_module0_progress',
 *     scope: 'drip',
 *     buildTemplate: (contact) => ({
 *       templateKey: 'wl_d7_module0_progress',
 *       subject: 'Module 0 拍攝進度 + 一篇值得看的 blog',
 *       html: `...`,  // 從 lib/email/templates/drip-d7.ts import
 *     }),
 *   },
 */
const DRIP_PLAN: DripStep[] = [];

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) throw new Error("Missing Supabase env vars");
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/**
 * 找符合條件的 contacts:
 *   contact_sources.source = step.source
 *   AND DATE(created_at TPE) = today_tpe - day_offset
 *   AND contacts.unsubscribed_at IS NULL
 *   AND email_log 沒有 (contact_id, template_key) 紀錄
 */
async function findCandidates(
  supabase: SupabaseClient,
  step: DripStep
): Promise<ContactRow[]> {
  // Calculate target date in TPE (UTC+8). day_offset=7 means 7 days ago in TPE.
  // 用 date_trunc('day') 比對天數,不比對時分秒
  const now = new Date();
  const targetDate = new Date(now);
  targetDate.setUTCHours(targetDate.getUTCHours() + 8); // shift to TPE
  targetDate.setUTCDate(targetDate.getUTCDate() - step.dayOffset);
  const targetDateStr = targetDate.toISOString().slice(0, 10); // YYYY-MM-DD

  // Subquery: contacts.id WHERE 該 contact 已收過此 template_key
  // 用 RPC 或多次 query 都行,這裡用兩段查詢
  const { data: rawContacts, error } = await supabase
    .from("contact_sources")
    .select(`
      contacts!inner (
        id, email, email_lower, locale,
        unsubscribed_at, unsubscribed_scopes, unsubscribe_token
      )
    `)
    .eq("source", step.source)
    .gte("created_at", `${targetDateStr}T00:00:00+08:00`)
    .lt("created_at", `${targetDateStr}T23:59:59+08:00`);

  if (error) {
    console.error(`[drip] query error for step ${step.templateKey}`, error);
    return [];
  }

  // 過濾掉已退訂 + 已寄過此 template
  const contacts: ContactRow[] = [];
  for (const row of rawContacts || []) {
    const c = (row as unknown as { contacts: ContactRow | ContactRow[] }).contacts;
    const contact = Array.isArray(c) ? c[0] : c;
    if (!contact) continue;
    if (contact.unsubscribed_at) continue;
    if (contact.unsubscribed_scopes?.includes(step.scope)) continue;

    // 已寄過此 template 直接跳 (sendTemplated 內部也會 dedupe,這裡先過濾省 RPC)
    const { data: sent } = await supabase
      .from("email_log")
      .select("id")
      .eq("contact_id", contact.id)
      .eq("template_key", step.templateKey)
      .neq("scope", "transactional")
      .limit(1)
      .maybeSingle();
    if (sent) continue;

    contacts.push(contact);
  }
  return contacts;
}

export async function GET(req: Request) {
  // Auth gate: Bearer CRON_SECRET (Vercel Cron 自動帶)
  const auth = req.headers.get("authorization") || "";
  const expected = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const startedAt = Date.now();
  const summary: Array<{
    templateKey: string;
    source: string;
    dayOffset: number;
    candidates: number;
    sent: number;
    failed: number;
    skipped: number;
  }> = [];

  if (DRIP_PLAN.length === 0) {
    return NextResponse.json({
      ok: true,
      message: "DRIP_PLAN is empty (no drip content yet). Cron infra verified.",
      summary,
      duration_ms: Date.now() - startedAt,
    });
  }

  try {
    const supabase = getClient();

    for (const step of DRIP_PLAN) {
      const candidates = await findCandidates(supabase, step);
      let sent = 0;
      let failed = 0;
      let skipped = 0;

      for (const contact of candidates) {
        const result = await sendTemplated({
          supabase,
          contact,
          template: step.buildTemplate(contact),
          scope: step.scope,
        });
        if (result.ok && !("skipped" in result && result.skipped)) sent++;
        else if (result.ok && "skipped" in result && result.skipped) skipped++;
        else failed++;
      }

      summary.push({
        templateKey: step.templateKey,
        source: step.source,
        dayOffset: step.dayOffset,
        candidates: candidates.length,
        sent,
        failed,
        skipped,
      });
    }

    return NextResponse.json({
      ok: true,
      summary,
      duration_ms: Date.now() - startedAt,
    });
  } catch (err) {
    console.error("[drip] unexpected", err);
    return NextResponse.json(
      { error: "Server error", detail: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
