#!/usr/bin/env tsx
/**
 * R5 · Broadcast 寄信 script · 一次性大量寄送 (P2P 開站 / 新案例 / 重大公告)
 *
 * Plan: ~/.claude/plans/resend-synthetic-treasure.md
 *
 * 跟 R4 (Drip) 不同:
 * - Drip = 時間觸發,自動定期跑
 * - Broadcast = 事件觸發,人工指定當下寄給特定 segment
 *
 * 使用方式:
 *   1. 編輯 BROADCAST 常數 (subject / html / segment query / scope)
 *   2. 確認 .env.local 有 NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY + RESEND_API_KEY
 *   3. (建議) 先 dry run: npx tsx scripts/send-broadcast.ts --dry-run
 *   4. 確認 OK 拿掉 --dry-run 跑正式
 *
 * 安全機制:
 * - 預設 dry-run: 必須加 --send 才實際寄
 * - email_log 內建 partial unique index dedupe (broadcast scope 不重複寄)
 * - 內建 rate limit: 每秒最多寄 N 封 (避免 Resend 100/day free tier 爆)
 * - 退訂 gate: sendTemplated 內檢查 unsubscribed_at + unsubscribed_scopes
 *
 * 範例使用情境:
 * - P2P 開站日: scope='broadcast', template_key='launch_day_invite'
 * - 新案例上: scope='newsletter', template_key='case_xxx_published'
 * - 重大 announcement: scope='broadcast', template_key='announcement_yyymmdd'
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { sendTemplated, type ContactRow, type EmailScope } from "../lib/email/send";

// 從 .env / .env.local 讀
function loadEnv() {
  for (const file of [".env.local", ".env"]) {
    try {
      const content = readFileSync(resolve(process.cwd(), file), "utf-8");
      for (const line of content.split("\n")) {
        const m = line.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.+?)\s*$/);
        if (m && !process.env[m[1]]) {
          process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
        }
      }
    } catch {
      // ignore
    }
  }
}
loadEnv();

const SEND_MODE = process.argv.includes("--send"); // 預設 dry-run,加 --send 才寄
const RATE_LIMIT_PER_SECOND = 2; // 每秒最多 2 封,留 buffer 給 Resend free tier

/**
 * ⚠️ 編輯這個常數定義要寄的 broadcast
 *
 * 範本 1: P2P 開站日 founder member 連結
 * 範本 2: 新案例上線通知
 * 範本 3: 一般 announcement
 */
const BROADCAST = {
  // === EDIT BELOW ===
  templateKey: "broadcast_placeholder_yyyymmdd", // 改成 e.g. 'launch_p2p_2026q3'
  scope: "broadcast" as EmailScope, // 'broadcast' | 'newsletter'
  subject: "[範本] 重大公告主旨",
  // 寄給誰 - segment query (可多條 OR)
  segment: {
    sources: ["waitlist"] as Array<"waitlist" | "consult" | "newsletter" | "manual" | "import">,
    // 額外條件可加 tags, role, locale 等
  },
  // HTML 內容 (footer 自動加退訂 link)
  buildHtml: (contact: ContactRow) => `
    <div style="font-family: -apple-system, 'Noto Sans TC', sans-serif; line-height: 1.7; color: #0A0A0A; max-width: 560px; padding: 24px;">
      <p>嗨,</p>
      <p>(範本內容,實際使用前必改)</p>
      <p>— 允雷 (Van)<br>vjvan.com</p>
    </div>
  `,
  // === EDIT ABOVE ===
};

async function findRecipients(
  supabase: ReturnType<typeof createClient>
): Promise<ContactRow[]> {
  const { data, error } = await supabase
    .from("contact_sources")
    .select(`
      contacts!inner (
        id, email, email_lower, locale,
        unsubscribed_at, unsubscribed_scopes, unsubscribe_token
      )
    `)
    .in("source", BROADCAST.segment.sources);

  if (error) {
    console.error("Query error:", error);
    return [];
  }

  // Dedupe by contact.id (一個 contact 可能在多個 source)
  const map = new Map<string, ContactRow>();
  for (const row of data || []) {
    const c = (row as unknown as { contacts: ContactRow | ContactRow[] }).contacts;
    const contact = Array.isArray(c) ? c[0] : c;
    if (!contact) continue;
    if (contact.unsubscribed_at) continue;
    if (contact.unsubscribed_scopes?.includes(BROADCAST.scope)) continue;
    map.set(contact.id, contact);
  }
  return Array.from(map.values());
}

function buildTemplate(contact: ContactRow) {
  const html = BROADCAST.buildHtml(contact);
  // 注意: 實作 footer 加上 unsubscribe link
  // 真實使用時應該用 lib/email/templates/ 內模板系統,這裡為簡化先 inline
  const footerHtml = `
    <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #E5E2DD; font-family: -apple-system, sans-serif; font-size: 12px; color: #5F5B57; line-height: 1.6;">
      <p style="margin: 0;">
        你收到這封信是因為在 vjvan.com 加入了相關名單。<br>
        <a href="https://www.vjvan.com/api/unsubscribe?token=${contact.unsubscribe_token}&scope=${BROADCAST.scope}" style="color: #5F5B57;">退訂 ${BROADCAST.scope}</a>
        ·
        <a href="https://www.vjvan.com/api/unsubscribe?token=${contact.unsubscribe_token}&scope=all" style="color: #5F5B57;">全部退訂</a>
      </p>
      <p style="margin: 8px 0 0;">VJVAN · 唯捷允雷有限公司</p>
    </div>
  `;
  return {
    templateKey: BROADCAST.templateKey,
    subject: BROADCAST.subject,
    html: html + footerHtml,
  };
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log("R5 · Broadcast Script");
  console.log(`  Template key: ${BROADCAST.templateKey}`);
  console.log(`  Scope:        ${BROADCAST.scope}`);
  console.log(`  Subject:      ${BROADCAST.subject}`);
  console.log(`  Segment:      sources=[${BROADCAST.segment.sources.join(",")}]`);
  console.log(`  Mode:         ${SEND_MODE ? "🚀 LIVE SEND" : "📋 DRY RUN (加 --send 才實際寄)"}`);
  console.log("");

  if (BROADCAST.templateKey === "broadcast_placeholder_yyyymmdd") {
    console.error("❌ 你忘了改 BROADCAST 常數! 編輯 scripts/send-broadcast.ts 內 BROADCAST 區塊。");
    process.exit(1);
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("❌ Missing Supabase env vars (.env.local)");
    process.exit(1);
  }
  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const recipients = await findRecipients(supabase);
  console.log(`✓ Found ${recipients.length} active recipients (after unsub filter)`);
  console.log("");

  if (recipients.length === 0) {
    console.log("沒有 recipient,結束。");
    return;
  }

  if (!SEND_MODE) {
    console.log("Sample recipients (前 5 筆):");
    for (const r of recipients.slice(0, 5)) {
      console.log(`  - ${r.email} (locale=${r.locale})`);
    }
    if (recipients.length > 5) console.log(`  ... 還有 ${recipients.length - 5} 位`);
    console.log("");
    console.log(`📋 DRY RUN 結束。確認看起來 OK 後加 --send 才實際寄出。`);
    return;
  }

  // LIVE SEND
  let sent = 0,
    failed = 0,
    skipped = 0;
  const interval = Math.ceil(1000 / RATE_LIMIT_PER_SECOND);

  for (let i = 0; i < recipients.length; i++) {
    const contact = recipients[i];
    const result = await sendTemplated({
      supabase,
      contact,
      template: buildTemplate(contact),
      scope: BROADCAST.scope,
    });

    if (result.ok && !("skipped" in result && result.skipped)) {
      sent++;
      process.stdout.write(`✓`);
    } else if (result.ok && "skipped" in result && result.skipped) {
      skipped++;
      process.stdout.write(`-`);
    } else {
      failed++;
      process.stdout.write(`✗`);
    }
    if ((i + 1) % 50 === 0) console.log(` [${i + 1}/${recipients.length}]`);

    if (i < recipients.length - 1) await sleep(interval);
  }

  console.log("");
  console.log("");
  console.log("─────────────────────────────────────────");
  console.log(`Summary:`);
  console.log(`  ✓ Sent:    ${sent}`);
  console.log(`  - Skipped: ${skipped} (已寄過 / 已退訂)`);
  console.log(`  ✗ Failed:  ${failed}`);
  console.log("");
  console.log("驗證: https://resend.com/emails 看 outgoing log");
  console.log("       https://supabase.com/dashboard/project/zemxfcszotndlxxyjpjm/editor 看 email_log table");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
