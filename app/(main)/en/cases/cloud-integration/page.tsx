import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Cloud Integration Portfolio · VJVAN",
  description:
    "Multi-cloud integration portfolio by VJVAN: GCP organization bootstrap, five-cloud B2B production system, OAuth automation pipelines, Gmail API inbox classification, and Service Account Impersonation architecture.",
  alternates: {
    canonical: "https://www.vjvan.com/en/cases/cloud-integration",
    languages: {
      "zh-TW": "https://www.vjvan.com/cases/cloud-integration",
      en: "https://www.vjvan.com/en/cases/cloud-integration",
      "x-default": "https://www.vjvan.com/cases/cloud-integration",
    },
  },
  openGraph: {
    title: "Cloud Integration Portfolio｜VJVAN",
    description:
      "Five real-world cloud integration cases across GCP, Cloudflare, Vercel, Supabase, and LINE Cloud.",
    url: "https://www.vjvan.com/en/cases/cloud-integration",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_TW"],
  },
};

type Highlight = { value: string; label: string; detail: string };

type CloudCase = {
  id: string;
  num: string;
  scenario: string;
  title: string;
  titleAccent?: string;
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
    scenario: "Company-Level Cloud Architecture",
    title: "Cloud Identity & Organization Bootstrap",
    titleAccent: "organization",
    subtitle: "Building a company-level cloud organization and identity layer to enable multi-client resource isolation.",
    description:
      "When a one-person consultancy serves multiple clients, mixing all cloud resources under a single project leads to IAM sprawl, accidental deletions, and audit blind spots. Bootstrapped a company-level Organization with a 4-tier folder hierarchy (personal / clients / archive / sandbox) so every client's cloud resources inherit IAM policies once at the folder level. New client onboarding time drops from hours to minutes.",
    highlights: [
      { value: "4 tiers", label: "Folder Hierarchy", detail: "Personal / Clients / Archive / Sandbox" },
      { value: "50", label: "Cloud Identity Seats", detail: "Free Edition, smooth upgrade path" },
      { value: "Inherited", label: "IAM Set Once", detail: "New client projects inherit org policy" },
      { value: "0", label: "Accidental Deletions", detail: "Pre-delete dependency check SOP enforced" },
    ],
    platforms: ["GCP Cloud Identity", "GCP Organization", "IAM", "Resource Manager"],
    before: [
      "All cloud resources scattered under personal account, no company-level structure",
      "Setting up IAM for new clients meant clicking through the same screens every time",
      "Old projects piled up because no one knew what was still in use",
      "Audits couldn't answer 'which resources belong to which client'",
      "OAuth clients and Service Accounts spread everywhere, rotation infeasible",
    ],
    after: [
      "Company-level Organization activated, all resources under unified management",
      "4-tier folder structure isolates clients, IAM inherits at folder level",
      "New client projects automatically inherit org policy when placed in folder",
      "Service Account Dependency Check SOP enforced before any project deletion",
      "Cloud Identity Free with 50 seats, smooth path to paid edition",
    ],
  },
  {
    id: "multi-cloud-production",
    num: "N° 02",
    scenario: "Production Multi-Cloud System",
    title: "Five-Cloud B2B Replenishment System",
    titleAccent: "production",
    subtitle: "Stitching five cloud services together into a stable production pipeline.",
    description:
      "Upgrading a traditional food wholesaler from phone-based ordering to LINE-native self-service requires more than one cloud vendor. Customer-facing UI runs on LINE LIFF (deployed to Vercel), API on Supabase Edge Functions, automation on n8n (exposed via Cloudflare Tunnel from local Docker), order sync to Google Sheets, push notifications via LINE Cloud. An outbox pattern plus scheduled cron ensures any cloud-side hiccup is automatically recovered.",
    highlights: [
      { value: "5 clouds", label: "Concurrent Integration", detail: "Vercel / Supabase / n8n / GCP / Cloudflare" },
      { value: "Stable", label: "Daily Order Volume", detail: "Outbox-pattern cross-cloud retry" },
      { value: "< 80 min", label: "Incident MTTR Cap", detail: "Three-layer redundancy: webhook + 10min + hourly cron" },
      { value: "0", label: "Lost Customer Orders", detail: "Backend failures auto-recovered by retry queue" },
    ],
    platforms: ["Vercel", "Supabase Edge Functions", "n8n on Docker", "Cloudflare Tunnel", "Google Sheets API", "LINE Cloud"],
    before: [
      "Single-host n8n with no failover, one outage took the whole pipeline down",
      "Failed webhooks silently dropped orders without business owner awareness",
      "Local Docker services had no way to receive cloud API calls",
      "Failed Google Sheets writes meant orders were lost forever",
      "No traceable retry log when incidents occurred",
    ],
    after: [
      "Five-cloud architecture with fallback at every layer",
      "Outbox pattern routes every order through a tracked retry queue",
      "Cloudflare Tunnel safely exposes local services to the cloud",
      "Three-layer cron schedule, any tier failing is caught by the other two",
      "Error Workflow auto-alerts via LINE and rewrites orders into the retry queue",
    ],
  },
  {
    id: "seo-automation-pipeline",
    num: "N° 03",
    scenario: "OAuth-Driven Cross-Cloud Automation",
    title: "SEO Automation Pipeline",
    titleAccent: "automation",
    subtitle: "Three cloud platforms, one Python script, 30 seconds to replace a 30-minute manual process.",
    description:
      "Adding a domain to Google Search Console with full verification, DNS validation, propagation polling, and redirect setup typically takes 30+ minutes of manual clicking across five UIs. A single Python script chains GCP Search Console API, edge-platform DNS API, and managed-platform redirect config. OAuth refresh tokens live in the OS Keychain, and the entire pipeline finishes in 30 seconds.",
    highlights: [
      { value: "60×", label: "Speed Improvement", detail: "From 30 minutes manual to 30 seconds automated" },
      { value: "3 platforms", label: "Chained API Calls", detail: "GCP / Edge DNS / Managed Hosting" },
      { value: "Keychain", label: "Zero Secret Leakage", detail: "Refresh tokens stored in OS keyring" },
      { value: "Reusable", label: "Client Deployments", detail: "Same script runs for every client website" },
    ],
    platforms: ["GCP Search Console API", "GCP Site Verification API", "OAuth 2.0", "Cloudflare DNS API", "Vercel API", "macOS Keychain"],
    before: [
      "Every new domain required clicking through 5 GSC screens manually",
      "TXT records had to be pasted into DNS console by hand, easy to mistype",
      "No way to know if DNS propagated, just guess and retry the verification button",
      "Redirect rules had to be configured separately on DNS and hosting platform",
      "Re-running the process for new client sites meant doing everything from scratch",
    ],
    after: [
      "A single Python script owns the entire pipeline end to end",
      "OAuth refresh token stored in Keychain, AI agents can act on user's behalf",
      "DNS polling auto-detects propagation completion before continuing",
      "30 seconds to complete verification + redirect config in one shot",
      "Same script applies to every client domain in the future",
    ],
  },
  {
    id: "inbox-automation",
    num: "N° 04",
    scenario: "API + OAuth Application Stack",
    title: "Automated Inbox Classification System",
    titleAccent: "inbox",
    subtitle: "Compressing 4,500+ chaotic emails into 5 focused work zones, saving 30 minutes of inbox triage daily.",
    description:
      "70% of a typical consultant's inbox is newsletter, SaaS notification, and banking noise. Cold outreach and production alerts get buried in the flood. Designed an enterprise-grade classification system on top of Gmail API + OAuth 2.0 with four idempotent Python scripts covering label creation, filter rules, sender scanning, and historical email backfill, all safe to re-run.",
    highlights: [
      { value: "4,500+", label: "Original Inbox Chaos", detail: "70% newsletter / notification noise" },
      { value: "11 rules", label: "Filter Classifications", detail: "Client alerts / cold outreach / billing / recruiter" },
      { value: "5,144", label: "Emails Backfilled", detail: "Idempotent script with zero side effects" },
      { value: "30 min", label: "Daily Time Saved", detail: "Important messages float automatically to top" },
    ],
    platforms: ["GCP Gmail API", "OAuth 2.0", "macOS Keychain", "Python idempotent scripts", "Gmail Multiple Inboxes"],
    before: [
      "4,500+ emails mixed together, 30 minutes daily just scanning",
      "Important cold outreach and production alerts buried in noise",
      "Newsletters and SaaS notifications mixed in the same timeline as client emails",
      "Manual sorting required daily repetitive labor",
      "API keys hard-coded in scripts, high git leak risk",
    ],
    after: [
      "11 filter rules auto-classify into 7 semantic labels",
      "5 Multiple Inboxes panes surface high-priority messages instantly",
      "4 Python scripts safe to re-run N times with zero side effects",
      "OAuth scope minimization, only essential permissions granted",
      "Refresh token stored in Keychain, secrets never enter git history",
    ],
  },
  {
    id: "sa-impersonation",
    num: "N° 05",
    scenario: "Multi-Client Identity Isolation",
    title: "Service Account Impersonation Architecture",
    titleAccent: "identity",
    subtitle: "Personal accounts borrow short-lived tokens to operate client resources, eliminating long-lived SA key sprawl.",
    description:
      "The naive way for a consultant to automate work across multiple clients is downloading Service Account JSON keys and storing them locally. One leak compromises everything permanently. Adopted Service Account Impersonation: the personal account uses the IAM Token Creator role to mint short-lived access tokens, every API call is audit-logged, and tokens auto-expire. Clients only need to grant the SA email read access to their Sheets, no public sharing required.",
    highlights: [
      { value: "5 clients", label: "Active Deployments", detail: "Multi-client shared architecture" },
      { value: "0", label: "Long-Lived Keys", detail: "Short tokens auto-expire" },
      { value: "Audited", label: "Per-Call Logging", detail: "Full trail in Cloud Audit Logs" },
      { value: "Revocable", label: "Permission Pull", detail: "IAM role removal takes effect immediately" },
    ],
    platforms: ["GCP IAM", "Service Account Impersonation", "IAM Token Creator", "Cloud Audit Logs", "Google Sheets API"],
    before: [
      "Service Account JSON keys downloaded locally, scattered across multiple machines",
      "Any leaked key meant permanent compromise, rotation impractical",
      "Sharing client Sheets with SA email effectively semi-publicized them",
      "Operation logs scattered across each client's Workspace, hard to audit",
      "End of engagement left unclear which keys were still active",
    ],
    after: [
      "Personal account impersonates SA to mint 1-hour short-lived tokens",
      "Tokens auto-expire, no manual rotation needed",
      "Every API call captured in Cloud Audit Logs, fully traceable",
      "Revoking IAM Token Creator role pulls all permissions instantly",
      "Architecture deployed across 5 client Sheets automation cases",
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "Cases", item: "https://www.vjvan.com/cases" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cloud Integration",
      item: "https://www.vjvan.com/en/cases/cloud-integration",
    },
  ],
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VJVAN Cloud Integration Portfolio",
  description: "Multi-cloud integration cases across GCP, Cloudflare, Vercel, Supabase, and LINE Cloud",
  inLanguage: "en",
  itemListElement: cases.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Article",
      headline: `${c.scenario}｜${c.title}`,
      description: c.description,
      author: {
        "@type": "Person",
        name: "Yunlei Lin",
        alternateName: ["VJVAN", "Van"],
        url: "https://www.vjvan.com",
      },
      publisher: {
        "@type": "Organization",
        name: "VJVAN Co., Ltd.",
        alternateName: "唯捷允雷有限公司",
        url: "https://www.vjvan.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.vjvan.com/en/cases/cloud-integration#${c.id}`,
      },
      inLanguage: "en",
    },
  })),
};

export default function CloudIntegrationEnPage() {
  return (
    <>
      <JsonLd id="json-ld-cloud-en-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="json-ld-cloud-en-portfolio" data={portfolioJsonLd} />

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
                href="/cases/cloud-integration"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                繁體中文
              </a>
            </div>
            <h1
              className="m-0 mb-10"
              style={{
                fontFamily: "var(--f-display), serif",
                fontWeight: 400,
                fontSize: "clamp(56px, 8vw, 120px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Stitching scattered clouds{" "}
              <em
                style={{
                  fontFamily: "var(--f-display), serif",
                  fontStyle: "italic",
                  color: "var(--signal)",
                }}
              >
                into pipelines that run themselves.
              </em>
            </h1>
            <p
              className="m-0 mb-6 max-w-[720px]"
              style={{
                fontFamily: "var(--f-body), sans-serif",
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
              }}
            >
              Five real-world cloud integration cases. From bootstrapping a company-level Organization, to running production B2B systems across five clouds, to OAuth-driven cross-platform automation, API-powered application stacks, and Service Account Impersonation for multi-tenant identity isolation. Every architecture below is shipped and running.
            </p>
            <p
              className="m-0 max-w-[720px]"
              style={{
                fontFamily: "var(--f-body), sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
              }}
            >
              Client identities are abstracted into scenario categories. Platform names are kept to convey the integration scope. Technical details unfold case by case in consultations.
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
                      fontFamily: "var(--f-display), serif",
                      fontSize: "clamp(36px, 5vw, 64px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                      fontWeight: 400,
                      textWrap: "balance",
                    }}
                  >
                    {c.title}
                    {c.titleAccent && (
                      <>
                        {" "}
                        <em
                          style={{
                            fontFamily: "var(--f-display), serif",
                            fontStyle: "italic",
                            color: "var(--signal)",
                          }}
                        >
                          {c.titleAccent}
                        </em>
                      </>
                    )}
                  </h2>
                  <p
                    className="m-0 mb-3 max-w-[720px]"
                    style={{
                      fontFamily: "var(--f-body), sans-serif",
                      fontSize: 20,
                      lineHeight: 1.5,
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    {c.subtitle}
                  </p>
                  <p
                    className="m-0 max-w-[720px]"
                    style={{
                      fontFamily: "var(--f-body), sans-serif",
                      fontSize: 16,
                      lineHeight: 1.7,
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
                        fontFamily: "var(--f-body), sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--ink)",
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--f-body), sans-serif",
                        fontSize: 13,
                        lineHeight: 1.55,
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
                          fontFamily: "var(--f-body), sans-serif",
                          fontSize: 15,
                          lineHeight: 1.6,
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
                          fontFamily: "var(--f-body), sans-serif",
                          fontSize: 15,
                          lineHeight: 1.6,
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
                fontFamily: "var(--f-display), serif",
                fontSize: "clamp(32px, 4.5vw, 52px)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                fontWeight: 400,
              }}
            >
              Cross-platform AI applications and task flow integration
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
                    "GCP (Cloud Identity / Organization / IAM / Cloud Run / Workspace APIs)",
                    "Cloudflare (Tunnel / DNS API / Workers / R2)",
                    "Vercel (Next.js deployment / Cron / Edge Functions)",
                    "Supabase (PostgreSQL / Edge Functions / RLS / Auth)",
                    "LINE Cloud (Messaging API / LIFF)",
                  ].map((s) => (
                    <li
                      key={s}
                      style={{
                        fontFamily: "var(--f-body), sans-serif",
                        fontSize: 15,
                        lineHeight: 1.6,
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
                    "OAuth 2.0 with secure refresh token storage",
                    "Service Account Impersonation for multi-tenant identity isolation",
                    "Outbox pattern for cross-cloud event recovery",
                    "Webhook + scheduled cron dual redundancy",
                    "Idempotent script design with chained API calls",
                  ].map((s) => (
                    <li
                      key={s}
                      style={{
                        fontFamily: "var(--f-body), sans-serif",
                        fontSize: 15,
                        lineHeight: 1.6,
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
              Book a Consultation
            </CtaLink>
            <CtaLink href="/cases/cloud-integration" arrow="none">
              繁體中文版
            </CtaLink>
            <CtaLink href="/cases" arrow="left">
              Back to Cases
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
