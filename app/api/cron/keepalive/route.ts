/**
 * Supabase Keepalive Cron · 每日 00:00 UTC (台北 08:00) 跑一次 SELECT 保活
 *
 * 為什麼存在:
 *   Supabase free tier 7 天無 API/DB 活動會自動 pause project。
 *   2026-05-15 收到 pause warning,根因排查發現 drip cron 因 DRIP_PLAN 為空 early return
 *   完全沒 query Supabase,即使 cron 有跑 Supabase 端仍 0 活動。
 *   本 endpoint 每天跑一次最小 SELECT 確保活動計數不歸零。
 *
 * Vercel Cron 設定: vercel.json crons.[1].schedule = "0 0 * * *" (00:00 UTC = 08:00 TPE)
 *   排在 drip cron (01:00 UTC) 之前,兩個都會獨立觸發保活。
 *
 * Auth: Bearer ${CRON_SECRET} (同 drip cron 共用)
 *
 * 邏輯極簡:
 *   SELECT count FROM unified_contacts (head:true 不傳 row 只算總數,最低成本)
 *   回 200 + count + duration_ms 方便日後 audit。
 */

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const expected = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const startedAt = Date.now();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return NextResponse.json(
      { error: "Missing Supabase env vars" },
      { status: 500 }
    );
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { count, error } = await supabase
    .from("unified_contacts")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("[keepalive] query error", error);
    return NextResponse.json(
      { error: "Supabase query failed", detail: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    contacts_count: count ?? 0,
    duration_ms: Date.now() - startedAt,
    ran_at: new Date().toISOString(),
  });
}
