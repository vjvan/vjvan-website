#!/usr/bin/env tsx
/**
 * R3 · 一次性 import: Google Sheets consult lead CSV → Supabase contacts + contact_sources
 *
 * Plan: ~/.claude/plans/resend-synthetic-treasure.md
 *
 * 使用方式:
 *   1. 從 Google Sheets export CSV → 放在 scripts/imports/consult-history.csv
 *   2. 確認 .env.local 有 NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
 *   3. cd ~/vjvan-website && npx tsx scripts/import-consult-csv.ts
 *      或 dry run: npx tsx scripts/import-consult-csv.ts --dry-run
 *
 * 設計:
 * - **Idempotent**: 用 contacts.email_lower upsert + contact_sources 加 source_detail.import_row 標識,
 *   重跑不會重複插入 contact_sources (透過 NOT EXISTS check)
 * - **欄位自動偵測**: CSV header 用模糊比對 (email/Email/E-mail 都認),
 *   缺欄位以 null 填,不會 crash
 * - **dry run mode**: --dry-run 印 preview 不寫 DB
 * - **錯誤容忍**: 單筆 fail 不中斷,跑完報告 summary
 *
 * CSV 預期欄位 (大小寫不敏感):
 *   - email (必填,缺者跳過)
 *   - name / 姓名
 *   - company / 公司 / 品牌
 *   - phone / 電話
 *   - topic / 諮詢方向
 *   - description / 需求描述 / message
 *   - submitted_at / created_at / 時間 (ISO 8601 或 'YYYY-MM-DD HH:MM:SS' 都認)
 *   - 其他欄位會被收進 source_detail JSONB (raw)
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "csv-parse/sync";
import { createClient } from "@supabase/supabase-js";

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
      // file 不存在跳過
    }
  }
}
loadEnv();

const DRY_RUN = process.argv.includes("--dry-run");
const CSV_PATH = process.argv.find((a) => a.endsWith(".csv")) || "scripts/imports/consult-history.csv";

// 模糊欄位比對：把 header 標準化成 key
const FIELD_ALIASES: Record<string, string[]> = {
  email: ["email", "Email", "E-mail", "電子郵件", "信箱"],
  name: ["name", "Name", "姓名", "Name · 姓名"],
  company: ["company", "Company", "公司", "品牌", "Company · 公司 / 品牌", "公司/品牌"],
  phone: ["phone", "Phone", "電話", "Phone · 電話", "聯絡電話"],
  topic: ["topic", "Topic", "諮詢方向", "Topic · 想諮詢的方向", "諮詢類型"],
  description: ["description", "Description", "需求描述", "需求", "message", "Message", "Description · 簡述你的需求", "簡述你的需求"],
  submitted_at: ["submitted_at", "submittedAt", "created_at", "createdAt", "Timestamp", "時間", "提交時間"],
};

function normalizeRow(row: Record<string, string>): {
  email: string;
  name: string;
  company: string;
  phone: string;
  topic: string;
  description: string;
  submitted_at: string;
  raw: Record<string, string>;
} {
  const result: Record<string, string> = {};
  const matched = new Set<string>();
  for (const [key, aliases] of Object.entries(FIELD_ALIASES)) {
    for (const alias of aliases) {
      const found = Object.keys(row).find((k) => k.trim().toLowerCase() === alias.trim().toLowerCase());
      if (found && row[found]) {
        result[key] = row[found].trim();
        matched.add(found);
        break;
      }
    }
  }
  // 其餘欄位收 raw
  const raw: Record<string, string> = {};
  for (const [k, v] of Object.entries(row)) {
    if (!matched.has(k) && v && String(v).trim()) raw[k.trim()] = String(v).trim();
  }
  return {
    email: result.email || "",
    name: result.name || "",
    company: result.company || "",
    phone: result.phone || "",
    topic: result.topic || "",
    description: result.description || "",
    submitted_at: result.submitted_at || "",
    raw,
  };
}

function parseTimestamp(s: string): string | null {
  if (!s) return null;
  const t = new Date(s);
  if (Number.isNaN(t.getTime())) return null;
  return t.toISOString();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function main() {
  console.log(`R3 · Consult CSV → Supabase contacts import`);
  console.log(`  CSV path: ${CSV_PATH}`);
  console.log(`  Dry run:  ${DRY_RUN}`);
  console.log("");

  // 讀 CSV
  let csvRaw: string;
  try {
    csvRaw = readFileSync(resolve(process.cwd(), CSV_PATH), "utf-8");
  } catch (err) {
    console.error(`❌ 找不到 CSV: ${CSV_PATH}`);
    console.error(`   請從 Google Sheets export CSV 放在這個位置 (相對 ~/vjvan-website)`);
    process.exit(1);
  }

  const rows = parse(csvRaw, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Record<string, string>[];

  console.log(`✓ Parsed ${rows.length} rows from CSV`);
  console.log(`  Columns detected: ${Object.keys(rows[0] || {}).join(", ")}`);
  console.log("");

  // Supabase client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
    process.exit(1);
  }
  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  let stats = { ok: 0, skipped_invalid_email: 0, skipped_existing_source: 0, errors: 0 };

  for (let i = 0; i < rows.length; i++) {
    const norm = normalizeRow(rows[i]);
    const lineNum = i + 2; // CSV row N (header row = 1)
    const email = norm.email.trim().toLowerCase();
    const submittedAt = parseTimestamp(norm.submitted_at);

    if (!EMAIL_RE.test(email)) {
      stats.skipped_invalid_email++;
      console.log(`  [${lineNum}] SKIP (invalid email "${norm.email}")`);
      continue;
    }

    if (DRY_RUN) {
      console.log(`  [${lineNum}] DRY RUN → contact: ${email}, name: ${norm.name}, topic: ${norm.topic}, at: ${submittedAt || "(no time)"}`);
      stats.ok++;
      continue;
    }

    try {
      // 1. Upsert contact (帶 display_name)
      const { data: contact, error: upsertErr } = await supabase
        .from("contacts")
        .upsert(
          {
            email_lower: email,
            email: norm.email,
            display_name: norm.name || null,
            locale: "zh-TW",
            first_seen_at: submittedAt || new Date().toISOString(),
            last_seen_at: submittedAt || new Date().toISOString(),
          },
          { onConflict: "email_lower", ignoreDuplicates: false }
        )
        .select("id")
        .single();

      if (upsertErr || !contact) {
        console.log(`  [${lineNum}] ❌ contacts upsert error: ${upsertErr?.message}`);
        stats.errors++;
        continue;
      }

      // 2. Idempotent check: 看是否已 import 過 (用 source='import' + import_row 標識)
      const importRowKey = `${CSV_PATH}:${lineNum}`;
      const { data: existing } = await supabase
        .from("contact_sources")
        .select("id")
        .eq("contact_id", contact.id)
        .eq("source", "import")
        .contains("source_detail", { import_row_key: importRowKey })
        .maybeSingle();

      if (existing) {
        stats.skipped_existing_source++;
        console.log(`  [${lineNum}] SKIP (already imported)`);
        continue;
      }

      // 3. Insert contact_sources
      const sourceDetail: Record<string, unknown> = {
        name: norm.name || null,
        company: norm.company || null,
        phone: norm.phone || null,
        topic: norm.topic || null,
        description: norm.description || null,
        import_row_key: importRowKey,
        original_submitted_at: norm.submitted_at || null,
      };
      // 把未識別的 raw 欄位也收進來 (留作未來 query)
      if (Object.keys(norm.raw).length > 0) {
        sourceDetail.raw = norm.raw;
      }

      const { error: srcErr } = await supabase.from("contact_sources").insert({
        contact_id: contact.id,
        source: "import",
        source_detail: sourceDetail,
        created_at: submittedAt || new Date().toISOString(),
      });

      if (srcErr) {
        console.log(`  [${lineNum}] ❌ contact_sources insert error: ${srcErr.message}`);
        stats.errors++;
        continue;
      }

      stats.ok++;
      console.log(`  [${lineNum}] ✓ ${email} (${norm.topic || "no topic"})`);
    } catch (err) {
      stats.errors++;
      console.log(`  [${lineNum}] ❌ unexpected: ${err instanceof Error ? err.message : err}`);
    }
  }

  console.log("");
  console.log("─────────────────────────────────────────");
  console.log(`Summary:`);
  console.log(`  ✓ Imported / OK:           ${stats.ok}`);
  console.log(`  - Skipped invalid email:   ${stats.skipped_invalid_email}`);
  console.log(`  - Skipped already imported: ${stats.skipped_existing_source}`);
  console.log(`  ❌ Errors:                 ${stats.errors}`);
  console.log("");
  if (DRY_RUN) {
    console.log("這是 DRY RUN，沒寫進 DB。確認看起來 OK 後拿掉 --dry-run 再跑一次。");
  } else {
    console.log("驗證: 開 https://supabase.com/dashboard/project/zemxfcszotndlxxyjpjm/editor");
    console.log("       看 contacts table 應有相應筆數 (去重後 unique email)");
    console.log("       看 contact_sources table 應有 source='import' 的對應 row");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
