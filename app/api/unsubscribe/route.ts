/**
 * Unsubscribe API · 個資法 / GDPR 合規
 *
 * GET /api/unsubscribe?token=<unsubscribe_token>&scope=all|drip|newsletter
 *
 * - scope=all (預設)：set unsubscribed_at = now()，全域退訂所有 marketing
 * - scope=drip / newsletter / broadcast：append 進 unsubscribed_scopes
 *
 * 寄信端 (lib/email/send.ts) 會檢查這兩個欄位 gate 不該寄的信。
 * Transactional (歡迎信、訂單確認) 不受影響，仍會寄。
 *
 * 寫完後 redirect 到 /unsubscribed 確認頁面。
 */

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VALID_SCOPES = new Set(["all", "drip", "newsletter", "broadcast"]);

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

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || "";
  const scope = (url.searchParams.get("scope") || "all").toLowerCase();

  if (!token || !VALID_SCOPES.has(scope)) {
    return NextResponse.redirect(new URL("/unsubscribed?status=invalid", req.url));
  }

  try {
    const supabase = getClient();
    const { data: contact, error: findErr } = await supabase
      .from("contacts")
      .select("id, email, unsubscribed_at, unsubscribed_scopes")
      .eq("unsubscribe_token", token)
      .maybeSingle();

    if (findErr) {
      console.error("[unsubscribe] lookup error", findErr);
      return NextResponse.redirect(new URL("/unsubscribed?status=error", req.url));
    }
    if (!contact) {
      return NextResponse.redirect(new URL("/unsubscribed?status=invalid", req.url));
    }

    if (scope === "all") {
      const { error } = await supabase
        .from("contacts")
        .update({
          unsubscribed_at: new Date().toISOString(),
          consent_marketing: false,
        })
        .eq("id", contact.id);
      if (error) {
        console.error("[unsubscribe] update all error", error);
        return NextResponse.redirect(new URL("/unsubscribed?status=error", req.url));
      }
    } else {
      const existing = contact.unsubscribed_scopes ?? [];
      if (!existing.includes(scope)) {
        const { error } = await supabase
          .from("contacts")
          .update({ unsubscribed_scopes: [...existing, scope] })
          .eq("id", contact.id);
        if (error) {
          console.error("[unsubscribe] update scope error", error);
          return NextResponse.redirect(new URL("/unsubscribed?status=error", req.url));
        }
      }
    }

    return NextResponse.redirect(new URL(`/unsubscribed?scope=${scope}`, req.url));
  } catch (err) {
    console.error("[unsubscribe] unexpected", err);
    return NextResponse.redirect(new URL("/unsubscribed?status=error", req.url));
  }
}
