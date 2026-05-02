-- =====================================================================
-- vjvan.com Unified Contacts schema (R2A · 2026-05-02)
-- =====================================================================
-- 取代既有 p2p_waitlist 的單一 source 設計，改成 1-to-many sources 架構，
-- 讓 waitlist + consult + 未來 newsletter signup 都進同一張 contacts 表，
-- 同一 email 多次填表會在 contact_sources 留多筆紀錄不覆蓋。
--
-- 完整 plan: ~/.claude/plans/resend-synthetic-treasure.md
-- 對應 commit: feat(email): unified contacts + Resend pipeline
--
-- 跨機器執行: 直接 paste 全文進 Supabase SQL editor 跑
-- 或用 supabase CLI: supabase db push
-- =====================================================================

-- ─────────────────────────────────────────────────────────────────────
-- 1. contacts: 一個 email 一筆，去重後的「人」維度
-- ─────────────────────────────────────────────────────────────────────
create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  email_lower text not null unique,                   -- 去重 key (lower(email))
  email text not null,                                -- 原始大小寫，顯示用
  display_name text,                                  -- consult 帶名字進來填這
  locale text default 'zh-TW',
  tags text[] not null default '{}',                  -- 分群 ['founder', 'p2p', 'tw']
  consent_marketing boolean not null default true,    -- 行銷信 opt-in flag
  unsubscribed_at timestamptz,                        -- 全域退訂 (kills all marketing)
  unsubscribed_scopes text[] not null default '{}',   -- 部分退訂 ['drip', 'newsletter']
  unsubscribe_token text not null default encode(gen_random_bytes(24), 'hex'),
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),    -- 每次填表更新
  ip_hash text,                                       -- SHA256(ip + salt) 隱私處理
  user_agent text,
  notes text                                          -- 手動標註用
);
create index contacts_email_lower_idx on public.contacts (email_lower);
create index contacts_tags_gin on public.contacts using gin (tags);
create index contacts_unsubbed_idx on public.contacts (unsubscribed_at)
  where unsubscribed_at is null;
create unique index contacts_unsub_token_idx on public.contacts (unsubscribe_token);

-- 啟用 RLS (依 .claude/rules/supabase-rls.md)
-- 無 policy = 預設拒絕 anon，只允 service_role bypass = API route 才能讀寫
alter table public.contacts enable row level security;

-- ─────────────────────────────────────────────────────────────────────
-- 2. contact_sources: 1-to-many，每次填表是一筆
-- ─────────────────────────────────────────────────────────────────────
create table public.contact_sources (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.contacts(id) on delete cascade,
  source text not null check (source in (
    'waitlist',     -- P2P AI Lab 課程 waitlist
    'consult',      -- /consult 諮詢預約
    'newsletter',   -- 未來 newsletter signup
    'manual',       -- 手動加 (例如 LINE 認識的人)
    'import'        -- 一次性遷移 (如 Google Sheets 歷史)
  )),
  source_detail jsonb not null default '{}'::jsonb,   -- waitlist: {role, goal} / consult: {company, phone, topic, description}
  referrer text,                                       -- HTTP referer
  created_at timestamptz not null default now()
);
create index contact_sources_contact_idx on public.contact_sources (contact_id);
create index contact_sources_source_idx on public.contact_sources (source, created_at desc);
alter table public.contact_sources enable row level security;

-- ─────────────────────────────────────────────────────────────────────
-- 3. email_log: 寄信紀錄 (避免 drip 重複 + 未來分析)
-- ─────────────────────────────────────────────────────────────────────
create table public.email_log (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.contacts(id) on delete cascade,
  template_key text not null,                         -- 'waitlist_welcome' / 'consult_welcome' / 'drip_d7_p2p'
  resend_message_id text,                             -- Resend API 回的 ID
  status text not null default 'sent',                -- sent / bounced / complained / failed
  scope text not null default 'transactional',        -- transactional / drip / newsletter / broadcast
  sent_at timestamptz not null default now(),
  meta jsonb not null default '{}'::jsonb
);
-- partial unique index: drip / newsletter / broadcast 不重複，transactional 可重發
create unique index email_log_dedupe on public.email_log (contact_id, template_key)
  where scope <> 'transactional';
create index email_log_contact_idx on public.email_log (contact_id, sent_at desc);
create index email_log_template_idx on public.email_log (template_key, sent_at desc);
alter table public.email_log enable row level security;

-- =====================================================================
-- 4. 一次性遷移 p2p_waitlist 既有資料 → contacts (R2F)
-- =====================================================================
-- 把 p2p_waitlist 裡 1 筆 (vjvan.n@gmail.com) 搬進 contacts
-- 若 email 已存在 (ON CONFLICT)，跳過
insert into public.contacts (email_lower, email, locale, ip_hash, user_agent, first_seen_at, last_seen_at)
select lower(email), email, locale, ip_hash, user_agent, created_at, created_at
from public.p2p_waitlist
on conflict (email_lower) do nothing;

-- 對應每筆 p2p_waitlist row，在 contact_sources 寫一筆 source='waitlist'
insert into public.contact_sources (contact_id, source, source_detail, referrer, created_at)
select c.id,
       'waitlist',
       jsonb_build_object('role', w.role, 'goal', w.goal),
       w.referrer,
       w.created_at
from public.p2p_waitlist w
join public.contacts c on c.email_lower = lower(w.email)
where not exists (
  select 1 from public.contact_sources s
  where s.contact_id = c.id and s.source = 'waitlist' and s.created_at = w.created_at
);

-- =====================================================================
-- 5. p2p_waitlist 留 30 天 backup，2026-06-15 後可手動 drop
-- =====================================================================
-- 不在這份 migration 內 drop，避免回滾不便。30 天後手動：
-- drop table public.p2p_waitlist;
