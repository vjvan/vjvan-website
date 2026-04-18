import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";

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

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[waitlist] unexpected", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
