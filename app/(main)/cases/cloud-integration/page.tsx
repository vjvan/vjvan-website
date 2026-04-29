import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Cloud Integration · 雲端整合實戰",
  description:
    "VJVAN 唯捷允雷的雲端整合實戰 portfolio,涵蓋 GCP 公司級組織建構、跨雲 production 系統整合、OAuth 自動化 pipeline、Service Account Impersonation 多租戶架構等實戰案例。",
  alternates: {
    canonical: "https://www.vjvan.com/cases/cloud-integration",
    languages: {
      "zh-TW": "https://www.vjvan.com/cases/cloud-integration",
      en: "https://www.vjvan.com/en/cases/cloud-integration",
      "x-default": "https://www.vjvan.com/cases/cloud-integration",
    },
  },
  openGraph: {
    title: "Cloud Integration｜VJVAN · 唯捷允雷",
    description: "把散在多個雲端平台的服務，整理成能跨平台運作的 AI 應用與任務流程。",
    url: "https://www.vjvan.com/cases/cloud-integration",
    type: "website",
    locale: "zh_TW",
    alternateLocale: ["en_US"],
  },
};

type Highlight = { value: string; label: string; detail: string };

type CloudCase = {
  id: string;
  num: string;
  scenario: string;
  titleZh: string;
  titleEn?: string;
  subtitle: string;
  description: string;
  highlights: Highlight[];
  platforms: string[];
  before: string[];
  after: string[];
};

const cases: CloudCase[] = [
  {
    id: "company-org-bootstrap",
    num: "N° 01",
    scenario: "公司級雲端架構",
    titleZh: "Cloud Identity 與組織骨架建構",
    titleEn: "organization",
    subtitle: "從零建構公司級雲端組織與身份管理系統，為多客戶資源隔離鋪基礎。",
    description:
      "顧問公司同時服務多個客戶時,雲端資源若全部混在一個 project 下,IAM 失控、誤刪風險、稽核困難三件事會同時發生。導入公司級 Organization 配 4 層 folder 架構（個人專案 / 客戶案 / 歸檔 / 沙盒）,讓每個客戶的雲端資源都能透過 folder 層 IAM 繼承一次設定,新客戶上手時間從幾小時壓到幾分鐘。",
    highlights: [
      { value: "4 層", label: "Folder 階層架構", detail: "個人 / 客戶 / 歸檔 / 沙盒分區" },
      { value: "50", label: "Cloud Identity 授權", detail: "Free Edition，未來可平滑升級" },
      { value: "繼承", label: "IAM 一次設定", detail: "新客戶 project 自動套組織策略" },
      { value: "0", label: "誤刪事故", detail: "建立刪除前依賴檢查 SOP" },
    ],
    platforms: ["GCP Cloud Identity", "GCP Organization", "IAM", "Resource Manager"],
    before: [
      "雲端資源全部散在個人帳號下，沒有公司層級結構",
      "新客戶要設權限就重新點一次 IAM，容易漏設",
      "舊 project 不知道誰在用，怕刪錯所以全留，越來越亂",
      "稽核時沒辦法說「哪些資源是哪個客戶的」",
      "OAuth client 跟 Service Account 散在各處，rotation 不可行",
    ],
    after: [
      "公司級 Organization 啟用，所有資源納入統一管理",
      "4 層 folder 架構支援多客戶隔離，IAM 在 folder 層繼承",
      "新客戶 project 進對應 folder 即套用組織策略",
      "刪除 project 前必跑 Service Account Dependency Check",
      "Cloud Identity Free 50 授權，後續可平滑升級到付費版",
    ],
  },
  {
    id: "multi-cloud-production",
    num: "N° 02",
    scenario: "Production 跨雲整合",
    titleZh: "五雲整合的 B2B 補貨系統",
    titleEn: "production",
    subtitle: "把 LIFF 前端、雲端後端、自動化、試算表、邊緣 Tunnel 五個雲端服務串成一條穩定 pipeline。",
    description:
      "傳統食品批發業者要從電話接單升級到 LINE 自助下單,單靠一家雲端服務做不到。客戶端要用 LINE LIFF（部署在 Vercel）、後端 API 用 Supabase Edge Function、自動化補單跑在 n8n（透過 Cloudflare Tunnel 從本地暴露上雲）、訂單同步寫進 Google Sheets、推播走 LINE Cloud。設計 outbox pattern + 排程 cron,讓任一雲端服務瞬時故障時訂單都能補回來。",
    highlights: [
      { value: "5 雲", label: "平台同時整合", detail: "Vercel / Supabase / n8n / GCP / Cloudflare" },
      { value: "穩定", label: "日訂單運行中", detail: "outbox pattern 跨雲補單機制" },
      { value: "< 80 分", label: "事故 MTTR 上限", detail: "三層保險：webhook + 10min cron + 整點 cron" },
      { value: "0", label: "客戶端訂單遺失", detail: "後端故障由系統自動補送" },
    ],
    platforms: ["Vercel", "Supabase Edge Functions", "n8n on Docker", "Cloudflare Tunnel", "Google Sheets API", "LINE Cloud"],
    before: [
      "單機 n8n 無備援，服務一斷整條 pipeline 中斷",
      "webhook 失敗就靜默掉單，業主完全不知道",
      "本地 Docker 服務沒辦法給雲端 API 呼叫",
      "Google Sheet 寫入失敗訂單就此消失",
      "事故發生時沒有可追蹤的 retry 紀錄",
    ],
    after: [
      "五雲整合架構，每層失敗都有 fallback 補單路徑",
      "outbox pattern 讓所有訂單都進 retry queue 可追蹤",
      "Cloudflare Tunnel 把本地服務安全暴露到雲端",
      "三層 cron 排程，任一層失靈另兩層接住",
      "Error Workflow 自動 LINE 警報並回寫補單佇列",
    ],
  },
  {
    id: "seo-automation-pipeline",
    num: "N° 03",
    scenario: "OAuth 跨雲自動化",
    titleZh: "SEO 自動化 pipeline",
    titleEn: "automation",
    subtitle: "三個雲端平台、一支 Python 腳本、30 秒完成原本 30 分鐘的人工流程。",
    description:
      "把網域加進 Google Search Console 並完成驗證,標準流程要點 GSC、改 DNS、等驗證、回頭按驗證、設 redirect 共 5 個步驟,30 分鐘起跳。設計一支 Python 腳本串接 GCP Search Console API + 邊緣 DNS API + 雲端託管平台 redirect 設定,OAuth refresh token 安全存進系統 Keychain,從此一條指令 30 秒跑完整條 pipeline。",
    highlights: [
      { value: "60×", label: "速度提升", detail: "從 30 分鐘人工到 30 秒自動" },
      { value: "3 平台", label: "API 鏈式調用", detail: "GCP / 邊緣 DNS / 託管平台" },
      { value: "Keychain", label: "Secret 零外洩", detail: "refresh token 存系統金鑰圈" },
      { value: "可重用", label: "客戶案複用", detail: "未來每個客戶網站都能跑同一套" },
    ],
    platforms: ["GCP Search Console API", "GCP Site Verification API", "OAuth 2.0", "Cloudflare DNS API", "Vercel API", "macOS Keychain"],
    before: [
      "每次新網域要手動點 GSC 介面 5 個畫面才驗證完",
      "TXT 紀錄要去 DNS 後台手動貼，容易少字符",
      "DNS propagation 不知道好了沒，只能瞎等再按驗證",
      "redirect 規則要分別在 DNS 跟託管平台兩邊設",
      "客戶案要重做時又要從頭點一次，沒辦法複用",
    ],
    after: [
      "一支 Python 腳本接管整條 pipeline",
      "OAuth refresh token 存 Keychain，AI agent 可代為操作",
      "DNS poll 自動偵測 propagation 完成才往下一步",
      "30 秒一鍵完成驗證 + redirect 配置",
      "未來每個客戶網站都能套同一套腳本",
    ],
  },
  {
    id: "inbox-automation",
    num: "N° 04",
    scenario: "API + OAuth 應用",
    titleZh: "收件匣自動分類系統",
    titleEn: "inbox",
    subtitle: "4500+ 封混亂收件匣壓縮到 5 個重點工作區，每天省下 30 分鐘 inbox 整理時間。",
    description:
      "顧問業者每天 inbox 70% 是 newsletter、SaaS notification、銀行帳務通知等噪音,真正重要的客戶 cold outreach、production 警報常被埋沒。透過 Gmail API + OAuth 2.0 設計企業級 inbox 自動分類系統,寫 4 支 idempotent Python 腳本,從建 label、設 filter、掃 sender 到 backfill 既有信件,全部可重跑零副作用。",
    highlights: [
      { value: "4500+", label: "原本混亂收件匣", detail: "70% 為 newsletter / 通知噪音" },
      { value: "11 條", label: "Filter 自動分類規則", detail: "客戶警報 / cold outreach / 帳務 / 招募" },
      { value: "5144", label: "信件回填重新分類", detail: "可重跑 backfill 腳本零副作用" },
      { value: "30 分", label: "每日節省時間", detail: "重點訊息直接浮出，不用掃整個 inbox" },
    ],
    platforms: ["GCP Gmail API", "OAuth 2.0", "macOS Keychain", "Python idempotent scripts", "Gmail Multiple Inboxes"],
    before: [
      "Inbox 4500+ 封信件混雜，每天花 30 分鐘掃一遍",
      "重要 cold outreach 跟 production 警報常被埋沒",
      "newsletter / SaaS notification 跟客戶信混在同一條 timeline",
      "想分類就手動拖，每天重複勞動",
      "API key 寫在腳本裡，git 風險高",
    ],
    after: [
      "11 條 filter 規則自動分類進 7 個語意 label",
      "5 個 Multiple Inboxes 區段，重點訊息直接浮出",
      "4 支 Python 腳本可重跑 N 次零副作用",
      "OAuth scope 最小化，只給必要權限",
      "Refresh token 存 Keychain，secret 不進 git",
    ],
  },
  {
    id: "sa-impersonation",
    num: "N° 05",
    scenario: "多客戶身份隔離",
    titleZh: "Service Account Impersonation 架構",
    titleEn: "identity",
    subtitle: "讓個人帳號取得短期 token 操作客戶資源，避免長期 SA key 散落多處的安全風險。",
    description:
      "顧問公司同時服務多個客戶時,常見做法是把 Service Account JSON key 下載到本地腳本裡,長期 key 一旦外洩等同永久失守。改採 SA Impersonation 模式：個人帳號透過 IAM Token Creator 角色,可以代表 SA 取得短期 access token 操作客戶資源,token 過期自動失效,且每次調用都有 audit log。客戶不需把 Sheet 公開,只要授權 SA email 即可。",
    highlights: [
      { value: "5 客戶", label: "已套用案件數", detail: "多客戶共用同一套架構" },
      { value: "0", label: "長期 SA key 落地", detail: "短期 token 過期自動失效" },
      { value: "可審計", label: "每次操作有 log", detail: "Cloud Audit Logs 完整紀錄" },
      { value: "可撤回", label: "權限隨時收回", detail: "撤回 IAM 角色即時失效" },
    ],
    platforms: ["GCP IAM", "Service Account Impersonation", "IAM Token Creator", "Cloud Audit Logs", "Google Sheets API"],
    before: [
      "下載 SA JSON key 存本地，散落多台機器",
      "Key 一旦外洩等同永久失守，rotation 困難",
      "客戶 Sheet 要分享給 SA email 等於半公開",
      "操作紀錄分散在各客戶 Workspace 裡，難稽核",
      "離開合作關係時不知道哪些 key 還能用",
    ],
    after: [
      "個人帳號 impersonate SA 取得 1 小時短期 token",
      "Token 過期自動失效，無需手動 rotation",
      "每次 API 調用都進 Cloud Audit Logs 可追蹤",
      "撤回 IAM Token Creator 角色即時收回所有權限",
      "已套用於 5 個客戶案的 Sheet 自動化整合",
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "Cases", item: "https://www.vjvan.com/cases" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cloud Integration",
      item: "https://www.vjvan.com/cases/cloud-integration",
    },
  ],
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VJVAN 雲端整合實戰 portfolio",
  description: "GCP / Cloudflare / Vercel / Supabase 多雲整合實戰案例",
  itemListElement: cases.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Article",
      headline: `${c.scenario}｜${c.titleZh}`,
      description: c.description,
      author: {
        "@type": "Person",
        name: "允雷",
        alternateName: ["VJVAN", "唯捷允雷"],
        url: "https://www.vjvan.com",
      },
      publisher: {
        "@type": "Organization",
        name: "唯捷允雷有限公司",
        alternateName: "VJVAN",
        url: "https://www.vjvan.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.vjvan.com/cases/cloud-integration#${c.id}`,
      },
      inLanguage: "zh-TW",
    },
  })),
};

export default function CloudIntegrationPage() {
  return (
    <>
      <JsonLd id="json-ld-cloud-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-cloud-portfolio" data={portfolioJsonLd} />

      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1120px] py-14 md:py-24">
          {/* Hero */}
          <div
            className="pb-12 mb-4"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            <div
              className="mb-6 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              <span style={{ color: "var(--signal)" }}>Cloud Integration</span>
              <span>·</span>
              <span>Portfolio / 2026</span>
              <span>·</span>
              <a
                href="/en/cases/cloud-integration"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                English
              </a>
            </div>
            <h1
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 6.5vw, 88px)",
                lineHeight: 1.05,
                letterSpacing: "0.01em",
                textWrap: "balance",
              }}
            >
              把散在多個雲端的服務，
              <br />
              變成會自己跑的 pipeline。
            </h1>
            <p
              className="m-0 mb-6 max-w-[720px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              這頁收錄五個雲端整合實戰案例。從公司級組織骨架的建構、五雲混合架構的 production 系統、OAuth 跨平台自動化 pipeline、API 應用整合，到多客戶身份隔離的 Service Account 架構，全部都是已上線可運行的設計。
            </p>
            <p
              className="m-0 max-w-[720px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              客戶名以情境類別代稱，平台名稱保留以呈現整合範圍。技術細節可在諮詢時逐步展開。
            </p>
          </div>

          {/* Cases */}
          {cases.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="py-16 scroll-mt-24"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <div className="grid gap-6 md:gap-12 md:grid-cols-[80px_1fr] mb-10">
                <div
                  className="text-[12px] tracking-[0.18em]"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--signal)" }}
                >
                  {c.num}
                </div>
                <div>
                  <div
                    className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[11px] tracking-[0.14em] uppercase"
                    style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    <span style={{ color: "var(--signal)" }}>{c.scenario}</span>
                  </div>
                  <h2
                    className="m-0 mb-4"
                    style={{
                      fontFamily: "var(--f-zh-display), serif",
                      fontSize: "clamp(32px, 4.5vw, 56px)",
                      lineHeight: 1.15,
                      letterSpacing: "0.01em",
                      fontWeight: 400,
                    }}
                  >
                    {c.titleZh}
                    {c.titleEn && (
                      <>
                        {" "}
                        <em
                          style={{
                            fontFamily: "var(--f-display), serif",
                            fontStyle: "italic",
                            color: "var(--signal)",
                          }}
                        >
                          {c.titleEn}
                        </em>
                      </>
                    )}
                  </h2>
                  <p
                    className="m-0 mb-3 max-w-[720px]"
                    style={{
                      fontFamily: "var(--f-zh-body), sans-serif",
                      fontSize: 20,
                      lineHeight: 1.6,
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    {c.subtitle}
                  </p>
                  <p
                    className="m-0 max-w-[720px]"
                    style={{
                      fontFamily: "var(--f-zh-body), sans-serif",
                      fontSize: 16,
                      lineHeight: 1.8,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {c.description}
                  </p>
                </div>
              </div>

              {/* Highlights strip */}
              <div
                className="grid gap-x-8 gap-y-8 md:grid-cols-4 mb-12 py-8"
                style={{
                  borderTop: "1px solid var(--rule)",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                {c.highlights.map((m) => (
                  <div key={m.label}>
                    <div
                      className="mb-2"
                      style={{
                        fontFamily: "var(--f-display), serif",
                        fontSize: 48,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        color: "var(--ink)",
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      className="mb-1"
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--ink)",
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Platforms */}
              <div className="mb-12 max-w-[920px]">
                <div
                  className="mb-4 pb-2 text-[11px] tracking-[0.18em] uppercase"
                  style={{
                    fontFamily: "var(--f-mono), monospace",
                    color: "var(--ink-muted)",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  Platforms / Stack
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {c.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-[13px] tracking-[0.04em]"
                      style={{
                        fontFamily: "var(--f-mono), monospace",
                        color: "var(--ink)",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Before / After */}
              <div className="grid gap-10 md:gap-16 md:grid-cols-2 max-w-[920px]">
                <div>
                  <div
                    className="mb-5 pb-2 text-[11px] tracking-[0.18em] uppercase"
                    style={{
                      fontFamily: "var(--f-mono), monospace",
                      color: "var(--ink-muted)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    Before
                  </div>
                  <ul className="m-0 p-0 list-none flex flex-col gap-3">
                    {c.before.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: "var(--ink-muted)",
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.7em",
                            width: 8,
                            height: 1,
                            background: "var(--ink-muted)",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div
                    className="mb-5 pb-2 text-[11px] tracking-[0.18em] uppercase"
                    style={{
                      fontFamily: "var(--f-mono), monospace",
                      color: "var(--signal)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    After
                  </div>
                  <ul className="m-0 p-0 list-none flex flex-col gap-3">
                    {c.after.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontFamily: "var(--f-zh-body), sans-serif",
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: "var(--ink)",
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.7em",
                            width: 8,
                            height: 1,
                            background: "var(--signal)",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          {/* Capability summary */}
          <section
            className="py-16"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            <div
              className="mb-5 text-[11px] tracking-[0.18em] uppercase"
              style={{
                fontFamily: "var(--f-mono), monospace",
                color: "var(--signal)",
                fontWeight: 500,
              }}
            >
              Capability Summary
            </div>
            <h2
              className="m-0 mb-8"
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                fontWeight: 400,
              }}
            >
              跨平台 AI 應用與任務流程整合能力盤點
            </h2>
            <div className="grid gap-10 md:grid-cols-2 max-w-[920px]">
              <div>
                <div
                  className="mb-3 text-[11px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  Cloud Platforms
                </div>
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {[
                    "GCP（Cloud Identity / Organization / IAM / Cloud Run / Workspace API）",
                    "Cloudflare（Tunnel / DNS API / Workers / R2）",
                    "Vercel（Next.js 部署 / Cron / Edge Functions）",
                    "Supabase（PostgreSQL / Edge Functions / RLS / Auth）",
                    "LINE Cloud（Messaging API / LIFF）",
                  ].map((s) => (
                    <li
                      key={s}
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--ink)",
                      }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  className="mb-3 text-[11px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)" }}
                >
                  Integration Patterns
                </div>
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {[
                    "OAuth 2.0 三方授權與 refresh token 安全儲存",
                    "Service Account Impersonation 多租戶身份隔離",
                    "Outbox pattern 跨雲事件補單機制",
                    "Webhook + 排程 cron 雙層保險架構",
                    "API 鏈式調用與 idempotent 腳本設計",
                  ].map((s) => (
                    <li
                      key={s}
                      style={{
                        fontFamily: "var(--f-zh-body), sans-serif",
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--ink)",
                      }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div
            className="mt-16 flex flex-wrap gap-8 items-center text-[12px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace" }}
          >
            <CtaLink href="/consult" variant="primary">
              預約諮詢
            </CtaLink>
            <CtaLink href="/cases" arrow="left">
              回案例首頁
            </CtaLink>
            <CtaLink href="/services" arrow="none">
              看服務
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
