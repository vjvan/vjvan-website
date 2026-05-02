/**
 * Email send chokepoint · vjvan.com
 *
 * 所有對外寄信都走這個 helper，集中處理：
 * 1. 退訂 gate (檢查 contacts.unsubscribed_at + unsubscribed_scopes)
 * 2. 重複寄信防護 (透過 email_log partial unique index)
 * 3. Resend API 呼叫
 * 4. 寫 email_log 留紀錄
 *
 * Plan: ~/.claude/plans/resend-synthetic-treasure.md
 */

import { Resend } from "resend";
import type { SupabaseClient } from "@supabase/supabase-js";

export type EmailScope = "transactional" | "drip" | "newsletter" | "broadcast";

export type ContactRow = {
  id: string;
  email: string;
  email_lower: string;
  locale: string | null;
  unsubscribed_at: string | null;
  unsubscribed_scopes: string[] | null;
  unsubscribe_token: string;
};

export type EmailTemplate = {
  templateKey: string;
  subject: string;
  html: string;
  text?: string;
};

export type SendResult =
  | { ok: true; messageId: string | null; skipped?: false }
  | { ok: true; skipped: true; reason: string }
  | { ok: false; error: string };

const FROM_ADDRESS = process.env.WAITLIST_FROM_ADDRESS || "Van <hello@vjvan.com>";
const REPLY_TO = process.env.WAITLIST_REPLY_TO || "vjvan.n@gmail.com";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

/**
 * 寄 templated email + 處理 unsub gate + 寫 email_log
 *
 * Transactional: 不檢查 unsub (歡迎信、訂單確認等服務必要溝通)，可重發
 * Drip / Newsletter / Broadcast: 檢查 unsub + 該 template 不重發 (partial unique)
 */
export async function sendTemplated(args: {
  supabase: SupabaseClient;
  contact: ContactRow;
  template: EmailTemplate;
  scope: EmailScope;
  meta?: Record<string, unknown>;
}): Promise<SendResult> {
  const { supabase, contact, template, scope, meta = {} } = args;

  // Gate 1: 退訂檢查 (transactional 不 gate)
  if (scope !== "transactional") {
    if (contact.unsubscribed_at) {
      return { ok: true, skipped: true, reason: "unsubscribed_all" };
    }
    if (contact.unsubscribed_scopes?.includes(scope)) {
      return { ok: true, skipped: true, reason: `unsubscribed_${scope}` };
    }
  }

  // Gate 2: 重複寄信檢查 (drip / newsletter / broadcast 才查)
  if (scope !== "transactional") {
    const { data: existing } = await supabase
      .from("email_log")
      .select("id")
      .eq("contact_id", contact.id)
      .eq("template_key", template.templateKey)
      .neq("scope", "transactional")
      .limit(1)
      .maybeSingle();
    if (existing) {
      return { ok: true, skipped: true, reason: "already_sent" };
    }
  }

  // 寄信
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY 未設定，跳過實際寄信", {
      to: contact.email,
      template: template.templateKey,
    });
    return { ok: true, skipped: true, reason: "resend_not_configured" };
  }

  let messageId: string | null = null;
  let status = "sent";
  let errorMsg: string | null = null;
  try {
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: contact.email,
      replyTo: REPLY_TO,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });
    if (result.error) {
      status = "failed";
      errorMsg = result.error.message || JSON.stringify(result.error);
    } else {
      messageId = result.data?.id ?? null;
    }
  } catch (err) {
    status = "failed";
    errorMsg = err instanceof Error ? err.message : String(err);
  }

  // 寫 email_log (partial unique index 保證 non-transactional 不重複)
  try {
    await supabase.from("email_log").insert({
      contact_id: contact.id,
      template_key: template.templateKey,
      resend_message_id: messageId,
      status,
      scope,
      meta: { ...meta, ...(errorMsg ? { error: errorMsg } : {}) },
    });
  } catch (err) {
    console.error("[email] log insert failed", err);
  }

  if (status === "failed") {
    return { ok: false, error: errorMsg || "unknown error" };
  }
  return { ok: true, messageId };
}

/**
 * 不經 contact / log 系統的低階 helper - 給 admin notification 用
 * (寄給允雷自己，不需 contact row、不需 unsub gate、不需重複防護)
 */
export async function sendRaw(args: {
  to: string;
  subject: string;
  html: string;
}): Promise<SendResult> {
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY 未設定，跳過 raw 寄信", { to: args.to });
    return { ok: true, skipped: true, reason: "resend_not_configured" };
  }
  try {
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: args.to,
      subject: args.subject,
      html: args.html,
    });
    if (result.error) {
      return { ok: false, error: result.error.message || JSON.stringify(result.error) };
    }
    return { ok: true, messageId: result.data?.id ?? null };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * 寄歡迎信 + 通知信並行 (fire-and-forget)，不 block API response
 * 用 void Promise.all() 包，失敗只 log 不影響使用者體驗
 */
export function fireSendBackground(promise: Promise<SendResult>) {
  void promise.then((result) => {
    if (!result.ok) {
      console.error("[email] background send failed", result.error);
    }
  });
}
