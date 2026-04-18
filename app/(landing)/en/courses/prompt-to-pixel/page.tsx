import type { Metadata } from "next";
import LandingMasthead from "@/components/landing/LandingMasthead";
import LandingColophon from "@/components/landing/LandingColophon";
import WaitlistForm from "@/components/landing/WaitlistForm";

const SITE_URL = "https://www.vjvan.com";
const PATH = "/courses/prompt-to-pixel";

export const metadata: Metadata = {
  title: "P2P AI Lab · Prompt to Pixel — One-Person AI Pipeline",
  description:
    "A premium business technology academy for turning AI video into a real commercial asset. Claude Code + Weavy.ai + fal.ai + Veo 3.1 + Remotion. Founding Member US$49/mo, locked for life. Taught by YunLei, AI Business Systems Architect.",
  alternates: {
    canonical: `${SITE_URL}/en${PATH}`,
    languages: {
      "zh-TW": `${SITE_URL}${PATH}`,
      en: `${SITE_URL}/en${PATH}`,
      "x-default": `${SITE_URL}${PATH}`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en${PATH}`,
    siteName: "vjvan.com",
    title: "P2P AI Lab · Prompt to Pixel — One-Person AI Pipeline",
    description:
      "A premium academy for turning AI video into a commercial asset. Claude Code + Weavy.ai + fal.ai + Veo 3.1 + Remotion. Founding Member US$49/mo, locked for life.",
  },
  twitter: {
    card: "summary_large_image",
    title: "P2P AI Lab — Prompt to Pixel",
    description:
      "The One-Person AI Video Pipeline. Founding Member US$49/mo. Locked for life.",
  },
};

const waitlistCopy = {
  emailLabel: "Email Address",
  emailPlaceholder: "you@domain.com",
  roleLabel: "Role",
  roleOptions: [
    { value: "agency", label: "Agency / video studio owner" },
    { value: "creator", label: "Creator / personal brand" },
    { value: "consultant", label: "AI / automation consultant" },
    { value: "freelancer", label: "Freelancer" },
    { value: "founder", label: "Solo founder" },
    { value: "other", label: "Other" },
  ],
  goalLabel: "What would you build first?",
  goalPlaceholder: "e.g. 5 fitness-coach AI shorts per week",
  goalOptional: "Optional",
  submit: "Join P2P AI Lab Waitlist",
  fine: "No spam · unsubscribe anytime · Founding Member link on launch day",
  successTitle: "Got it. You will receive the Founding Member link on launch day.",
  successStamp: "Filed — on the Waitlist",
  errorFallback: "Could not submit — please try again, or email vjvan.n@gmail.com.",
};

export default function PromptToPixelEnPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_EN.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "P2P AI Lab — Prompt to Pixel, the One-Person AI Video Pipeline",
    description:
      "A premium business technology academy for professional creators, agency owners, consultants and indie founders. 11 modules, 49 units, covering the full Claude Code + Weavy.ai + fal.ai + Veo 3.1 + Remotion pipeline.",
    inLanguage: ["en", "zh-TW"],
    provider: {
      "@type": "Organization",
      name: "VJVAN Co., Ltd.",
      sameAs: "https://www.vjvan.com",
    },
    instructor: {
      "@type": "Person",
      name: "YunLei (Van)",
      alternateName: ["VJVAN", "允雷"],
      url: "https://www.vjvan.com",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Founding Member (first 100)",
        price: "49",
        priceCurrency: "USD",
        availability: "https://schema.org/LimitedAvailability",
        url: `${SITE_URL}/en${PATH}`,
      },
      {
        "@type": "Offer",
        name: "Standard",
        price: "99",
        priceCurrency: "USD",
        url: `${SITE_URL}/en${PATH}`,
      },
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT5H",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <LandingMasthead issueLabel="Issue 01" pressNote="P2P AI Lab · Founding Press Run" />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-main">
              <div className="hero-kicker">
                <span className="eyebrow">VJVAN.COM · Issue 01</span>
                <span className="tick" aria-hidden />
                <span className="eyebrow">Prompt → Pixel</span>
              </div>

              <h1 className="display">
                One person. <em>One pipeline.</em> Every video on autopilot.
              </h1>

              <p className="lede hero-lede">
                P2P AI Lab is a business technology academy for professional creators, agency owners,
                consultants and indie founders. YunLei personally delivers a commercial-grade Prompt
                to Pixel pipeline you can use to take on client work, build recurring revenue, and
                turn AI video into a real business asset.
              </p>

              <div className="hero-ctas">
                <a href="#waitlist" className="cta accent">
                  Join the Waitlist
                  <span className="arrow">→</span>
                </a>
                <a href="#curriculum" className="cta">
                  See 11 modules
                  <span className="arrow">↓</span>
                </a>
              </div>
            </div>

            <aside className="hero-meta" aria-label="Masthead details">
              <div className="meta-title">§ Masthead · Issue 01</div>
              <dl>
                <dt>Editor</dt>
                <dd>
                  YunLei (Van)
                  <small>AI Business Systems Architect</small>
                </dd>
                <dt>Format</dt>
                <dd>
                  Skool ongoing
                  <small>49 units · 11 modules · weekly drops</small>
                </dd>
                <dt>Price</dt>
                <dd>
                  US$49 / month
                  <small>Founding · locked for life · first 100</small>
                </dd>
                <dt>Standard</dt>
                <dd>
                  US$99 / month
                  <small>After first 100 seats</small>
                </dd>
                <dt>Edition</dt>
                <dd>
                  Bilingual
                  <small>English · 繁體中文</small>
                </dd>
              </dl>
            </aside>
          </div>
        </section>

        {/* ---------- Stat bar ---------- */}
        <div className="statbar">
          <div className="wrap">
            <span className="label">By the editor</span>
            <span className="body-line">
              The same pipeline behind 988 Kitchen B2B, Laikijing Auto Detailing and multi-platform
              e-commerce — all live, paying engagements.
            </span>
            <span className="byline">Built by vjvan.com</span>
          </div>
        </div>

        {/* ---------- § 01 Story ---------- */}
        <section className="story">
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>01</span>
                <span>— Story</span>
              </div>
              <div>
                <h2 className="display">
                  What does <em>Prompt to Pixel</em> mean
                </h2>
              </div>
              <p className="sub">
                P2P is not just an abbreviation. It is the full production chain of AI video — and the
                spine of this curriculum.
              </p>
            </header>

            <article className="chapter">
              <aside className="chapter-num" aria-hidden>
                <span className="glyph">Stage</span>
                <span className="n">01</span>
                <span>Prompt</span>
              </aside>
              <div className="chapter-body">
                <div className="eyebrow">Starts with a sentence</div>
                <h3>Prompt</h3>
                <p className="body">
                  Everything starts with text. A description, a script, a story concept. No camera rig.
                  No editing skills. You only need to be able to say what you want.
                </p>
              </div>
            </article>

            <article className="chapter">
              <aside className="chapter-num" aria-hidden>
                <span className="glyph">Stage</span>
                <span className="n">02</span>
                <span>Image</span>
              </aside>
              <div className="chapter-body">
                <div className="eyebrow">Character consistency, solved</div>
                <h3>
                  Image <em>— Weavy.ai workflow</em>
                </h3>
                <p className="body">
                  Weavy.ai node-based workflows turn your prompt into character-consistent,
                  style-consistent image assets. This is exactly the pain point Veo cannot solve
                  alone — and the first real advantage of the pipeline.
                </p>
                <p className="body">
                  You will build a reusable workflow that produces 10 to 20 consistent images per run.
                </p>
              </div>
            </article>

            <article className="chapter">
              <aside className="chapter-num" aria-hidden>
                <span className="glyph">Stage</span>
                <span className="n">03</span>
                <span>Video</span>
              </aside>
              <div className="chapter-body">
                <div className="eyebrow">Animate, edit, overlay — in code</div>
                <h3>
                  Video <em>— fal.ai · Veo 3.1 · Remotion · video-cut</em>
                </h3>
                <p className="body">
                  fal.ai brings Veo 3.1 to life by animating your Weavy assets. Remotion handles
                  programmatic titles, transitions and brand overlays. The custom video-cut skill
                  auto-edits your voice-over. Every step is runnable code. Every workflow is copyable.
                </p>
              </div>
            </article>

            <article className="chapter">
              <aside className="chapter-num" aria-hidden>
                <span className="glyph">Stage</span>
                <span className="n">04</span>
                <span>Pixel</span>
              </aside>
              <div className="chapter-body">
                <div className="eyebrow">Ship to the feed</div>
                <h3>
                  Pixel <em>— IG · TikTok · Shorts</em>
                </h3>
                <p className="body">
                  The final output lands on IG Reels, TikTok and YouTube Shorts. Every pixel is the
                  product of the same pipeline. One person. One week. Three to five publishable videos
                  — consistently.
                </p>
              </div>
            </article>

            <blockquote className="pullquote">
              <p>
                You are not watching tutorials. You are learning how to run an AI video production line
                you can turn into a business.
              </p>
              <div className="attribution">— YunLei · Editor, P2P AI Lab</div>
            </blockquote>
          </div>
        </section>

        {/* ---------- § 02 Commitment ---------- */}
        <section>
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>02</span>
                <span>— Commitment</span>
              </div>
              <div>
                <h2 className="display">
                  Why P2P AI Lab is <em>worth US$99</em>
                </h2>
              </div>
              <p className="sub">Three delivery promises: we teach it, we make sure you own it, you can sell it.</p>
            </header>

            <div className="clauses">
              <article className="clause">
                <div className="article">
                  Clause
                  <b>i.</b>
                </div>
                <div>
                  <h3 className="clause-title">
                    Delivery <em>guarantee</em>
                  </h3>
                  <p className="clause-body">
                    We do not accept &ldquo;I watched it but I don&rsquo;t really get it&rdquo; as an
                    outcome. Every module ships with a hands-on assignment, reviewed by YunLei
                    personally plus the community peer layer.
                  </p>
                  <p className="clause-body">
                    You do not pass a module by watching videos. You pass it by building a runnable
                    pipeline, editing a publishable video, and producing a client-ready asset.
                  </p>
                </div>
                <div className="terms">
                  <div className="row">
                    <span className="k">Review</span>
                    <span className="v">Van + Peer</span>
                  </div>
                  <div className="row">
                    <span className="k">Output</span>
                    <span className="v">Publish-ready</span>
                  </div>
                </div>
              </article>

              <article className="clause">
                <div className="article">
                  Clause
                  <b>ii.</b>
                </div>
                <div>
                  <h3 className="clause-title">
                    Commercial <em>technology</em>
                  </h3>
                  <p className="clause-body">
                    What you learn is not demo-ware. Every workflow, every code sample, every skill in
                    this curriculum comes straight from the same tools YunLei uses every day to serve
                    paying clients.
                  </p>
                  <p className="clause-body">
                    988 Kitchen, Laikijing Auto Detailing, multi-platform e-commerce — real engagements.
                    The pipeline you learn is the same pipeline powering them.
                  </p>
                </div>
                <div className="terms">
                  <div className="row">
                    <span className="k">Source</span>
                    <span className="v">Live client work</span>
                  </div>
                  <div className="row">
                    <span className="k">License</span>
                    <span className="v">Use in your own business</span>
                  </div>
                </div>
              </article>

              <article className="clause">
                <div className="article">
                  Clause
                  <b>iii.</b>
                </div>
                <div>
                  <h3 className="clause-title">
                    Earning <em>path</em>
                  </h3>
                  <p className="clause-body">
                    Module 10 delivers the exact SOPs: a client pricing sheet, a proposal deck template,
                    a discovery call script, a delivery &amp; acceptance workflow.
                  </p>
                  <p className="clause-body">
                    Inside the community: a lead-sharing board, a student portfolio wall, a referral
                    channel. You are entering a working network of people already billing for AI video.
                  </p>
                </div>
                <div className="terms">
                  <div className="row">
                    <span className="k">Module 10</span>
                    <span className="v">Pricing · Proposal · Delivery</span>
                  </div>
                  <div className="row">
                    <span className="k">Community</span>
                    <span className="v">Leads · Referrals · Peers</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- § 03 Problem ---------- */}
        <section>
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>03</span>
                <span>— Problem</span>
              </div>
              <div>
                <h2 className="display">
                  Sound <em>familiar</em>
                </h2>
              </div>
              <p className="sub">
                If you have thought about quitting content because the toolchain feels broken — P2P AI
                Lab is built for you.
              </p>
            </header>
            <ul className="bullets">
              <li className="en">A dozen AI tools open, nothing connected. Every video starts from scratch.</li>
              <li className="en">CapCut takes an hour per voice-over — you can&rsquo;t keep up with your own cadence.</li>
              <li className="en">Veo / Runway give inconsistent characters. Your hero looks different every take.</li>
              <li className="en">Remotion and Claude Code feel impossible without a coding background.</li>
              <li className="en">You want to scale output — and solo it feels physically impossible.</li>
            </ul>
          </div>
        </section>

        {/* ---------- § 04 Solution ---------- */}
        <section>
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>04</span>
                <span>— Solution</span>
              </div>
              <div>
                <h2 className="display">
                  The pipeline I <em>use every day</em>
                </h2>
              </div>
              <p className="sub">
                Not a course stitched from public blog posts — the actual video production line behind
                vjvan.com, 988 Kitchen and my consulting work.
              </p>
            </header>
            <p className="body" style={{ maxWidth: "64ch" }}>
              I spent six months integrating Claude Code, Weavy.ai, fal.ai, Veo 3.1, Remotion and a
              custom-built video-cut skill into a single automated pipeline. Raw prompt goes in. A
              publishable short video comes out.
            </p>
            <p className="body" style={{ maxWidth: "64ch" }}>
              Now I am opening the entire pipeline to you inside P2P AI Lab. Not theory — real code,
              real workflows, real published output.
            </p>
          </div>
        </section>

        {/* ---------- § 05 Outputs ---------- */}
        <section>
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>05</span>
                <span>— Outputs</span>
              </div>
              <div>
                <h2 className="display">
                  What you <em>walk away with</em>
                </h2>
              </div>
              <p className="sub">Not completion badges — actual assets you can use tomorrow.</p>
            </header>
            <ul className="bullets">
              <li className="en">A fully working AI video environment with Claude Code, ffmpeg, fal.ai, Notion DB.</li>
              <li className="en">A video-cut flow that turns a 78s voice-over into a 51s polished cut in under 20s.</li>
              <li className="en">An automatic bilingual subtitle pipeline with dictionary correction and hard-burn.</li>
              <li className="en">An AI sticker B-roll workflow that auto-generates visual overlays from your script.</li>
              <li className="en">A Weavy.ai node workflow producing 10–20 reference images per run.</li>
              <li className="en">A Veo 3.1 image-to-video prompt system that animates Weavy assets.</li>
              <li className="en">A reusable Remotion module for programmatic brand intros and transitions.</li>
              <li className="en">A Notion → Telegram automation pipeline orchestrated by Claude Code.</li>
              <li className="en">A weekly publishing plan — 3 to 5 publishable shorts per week.</li>
              <li className="en">Three monetization paths: client services, productization, teaching.</li>
            </ul>
          </div>
        </section>

        {/* ---------- § 06 Curriculum ---------- */}
        <section id="curriculum">
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>06</span>
                <span>— Curriculum</span>
              </div>
              <div>
                <h2 className="display">
                  11 modules <em>· 49 units · zero to production</em>
                </h2>
              </div>
              <p className="sub">
                Modules ship progressively. Founding Members get every new module the moment it lands.
              </p>
            </header>
            <div className="list-grid">
              {MODULES_EN.map((m) => (
                <article className="list-card" key={m.code}>
                  <div className="k">
                    {m.code} · {m.units}
                  </div>
                  <div className="t en">{m.title}</div>
                  <div className="d en">Outcome: {m.output}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- § 07 Proof ---------- */}
        <section>
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>07</span>
                <span>— Proof</span>
              </div>
              <div>
                <h2 className="display">
                  What I have <em>actually built</em>
                </h2>
              </div>
              <p className="sub">Four real case studies — not demos, not theory.</p>
            </header>
            <div className="list-grid">
              <article className="list-card">
                <div className="k">Case 01 · Skill</div>
                <div className="t en">video-cut skill</div>
                <div className="d en">
                  Custom voice-over auto-editing skill. Live test: 78s → 51s (34.8% reduction). ffmpeg
                  silence detection + SRT gap union, dictionary correction, libass hard-burn, AI
                  sticker B-roll — all shipped and in daily use.
                </div>
              </article>
              <article className="list-card">
                <div className="k">Case 02 · Client</div>
                <div className="t en">988 Kitchen B2B Restock</div>
                <div className="d en">
                  LINE LIFF + Supabase + Edge Function + n8n. Admin dashboard, recommendation engine,
                  AI restocking intelligence. Currently in live client testing.
                </div>
              </article>
              <article className="list-card">
                <div className="k">Case 03 · Brand</div>
                <div className="t en">vjvan.com</div>
                <div className="d en">
                  Personal brand site on Next.js 16, Tailwind 4, MDX. Shipped with full brand redesign
                  and SEO/AEO optimization.
                </div>
              </article>
              <article className="list-card">
                <div className="k">Case 04 · Pipeline</div>
                <div className="t en">AI Video Studio</div>
                <div className="d en">
                  Technical showcase integrating fal.ai, Remotion and Claude Code into one automation
                  pipeline.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- § 08 Audience ---------- */}
        <section>
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>08</span>
                <span>— Audience</span>
              </div>
              <div>
                <h2 className="display">
                  Who this <em>is for</em>
                </h2>
              </div>
              <p className="sub">Premium — for people turning AI video into a business asset.</p>
            </header>
            <div className="list-grid">
              <article className="list-card">
                <div className="k">Right fit</div>
                <div className="t en">Agency / studio owners</div>
                <div className="d en">Scale client delivery with one pipeline across many engagements.</div>
              </article>
              <article className="list-card">
                <div className="k">Right fit</div>
                <div className="t en">Personal brand operators</div>
                <div className="d en">Already monetizing content, monthly content budget US$500+.</div>
              </article>
              <article className="list-card">
                <div className="k">Right fit</div>
                <div className="t en">AI / automation consultants</div>
                <div className="d en">Need video assets to demo work and pitch proposals.</div>
              </article>
              <article className="list-card">
                <div className="k">Right fit</div>
                <div className="t en">Freelancers (US$50+/hour)</div>
                <div className="d en">Buying efficiency leverage so each billed hour delivers more.</div>
              </article>
              <article className="list-card">
                <div className="k">Right fit</div>
                <div className="t en">Solo operators</div>
                <div className="d en">Willing to invest in a system, not just another tool.</div>
              </article>
              <article className="list-card">
                <div className="k">Right fit</div>
                <div className="t en">APAC + global bilingual</div>
                <div className="d en">Taiwan, Malaysia, Singapore, HK, global English speakers.</div>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- § 09 Founding Offer ---------- */}
        <section className="terms-block" id="founding">
          <div className="wrap">
            <header className="terms-head">
              <span className="eyebrow">§ 09 — Founding Offer</span>
              <h2 className="display">
                First 100 <em>Founding Members</em>, locked for life
              </h2>
            </header>

            <div className="terms-grid">
              <div className="offer-col">
                <div className="kicker">Founding Member · Monthly</div>
                <div className="price-line">
                  <span className="dollar">US$</span>49<span className="per">/ month</span>
                </div>
                <div className="crossed">
                  <s>US$99 / month</s> · 50% off · locked for life · first 100 only
                </div>
                <p className="body">
                  Annual option: US$490 / year (10 months equivalent, locked for life). Skool processes
                  all payments in USD via Stripe; your bank handles the local conversion automatically.
                </p>
                <p className="body">
                  One client engagement (US$500–US$2,000) pays for 5 to 20 months of membership. You are
                  not buying a course — you are investing in a skill that compounds into revenue.
                </p>

                <div className="seats" aria-label="Founding seats">
                  <span>Seats</span>
                  <span className="bar" aria-hidden />
                  <span className="count">83 / 100 left</span>
                </div>
              </div>

              <div className="contract-col">
                <dl>
                  <div>
                    <dt>01 · Plan</dt>
                    <dd>Founding Member (first 100)</dd>
                  </div>
                  <div>
                    <dt>02 · Monthly</dt>
                    <dd>
                      <code>US$49 / month</code>
                    </dd>
                  </div>
                  <div>
                    <dt>03 · Annual</dt>
                    <dd>
                      <code>US$490 / year</code>
                    </dd>
                  </div>
                  <div>
                    <dt>04 · Standard</dt>
                    <dd>After 100 seats: US$99 / US$990</dd>
                  </div>
                  <div>
                    <dt>05 · Access</dt>
                    <dd>Skool community + Van Q&amp;A</dd>
                  </div>
                  <div>
                    <dt>06 · Refund</dt>
                    <dd>7-day no-questions refund</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="terms-foot">
              <div className="signature">
                YunLei · vjvan.com
                <small>Editor · AI Business Systems Architect</small>
              </div>
              <a className="cta accent" href="#waitlist">
                Reserve your Founding seat <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- § 10 Enrolment ---------- */}
        <section id="waitlist">
          <div className="wrap">
            <div className="enrol">
              <div className="sec-label">
                § 10
                <br />
                <span>Enrolment</span>
              </div>

              <div className="enrol-main">
                <h2>
                  Join the <em>Waitlist</em>
                </h2>
                <p className="sub-zh" style={{ fontFamily: "var(--f-display)", fontStyle: "italic", color: "var(--ink-soft)" }}>
                  Get the free Module 0 preview and first access when doors open.
                </p>
                <WaitlistForm locale="en" copy={waitlistCopy} />
              </div>

              <aside className="enrol-side" aria-label="Shipping schedule">
                <dl>
                  <div>
                    <dt>Launch</dt>
                    <dd>Q3 2026</dd>
                  </div>
                  <div>
                    <dt>Free preview</dt>
                    <dd>Module 0 — 3 units on waitlist join</dd>
                  </div>
                  <div>
                    <dt className="count">Seats left</dt>
                    <dd className="count">
                      <b>83</b> / 100
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* ---------- § 11 FAQ ---------- */}
        <section>
          <div className="wrap">
            <header className="section-head">
              <div className="num">
                <span>§</span>
                <span>11</span>
                <span>— FAQ</span>
              </div>
              <div>
                <h2 className="display">
                  Common <em>questions</em>
                </h2>
              </div>
              <p className="sub">Anything not here? Email vjvan.n@gmail.com.</p>
            </header>

            <div className="faq-list">
              {FAQS_EN.map((f, i) => (
                <article className="faq-item" key={i}>
                  <div className="q-num">
                    Q<b>{String(i + 1).padStart(2, "0")}</b>
                  </div>
                  <div>
                    <h3 className="q-title en">{f.q}</h3>
                    <p className="q-body en">{f.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="final-band">
          <div className="wrap">
            <h2>
              Ready to run your <em>Prompt to Pixel</em> pipeline
            </h2>
            <p className="sub-zh" style={{ fontFamily: "var(--f-display)", fontStyle: "italic" }}>
              Only 100 Founding seats. Join the waitlist — you&rsquo;ll be first in line on launch day.
            </p>
            <a className="cta accent" href="#waitlist">
              Join P2P AI Lab Waitlist <span className="arrow">→</span>
            </a>
          </div>
        </section>
      </main>

      <LandingColophon
        leftLines={[
          "P2P AI Lab · Issue 01 · Founding Press Run",
          "Edited and engineered by YunLei (Van) at vjvan.com.",
          "Typeset in Instrument Serif, Noto Serif TC, Inter Tight and JetBrains Mono.",
        ]}
        rightLinks={[
          { label: "vjvan.com", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Consult", href: "/consult" },
        ]}
      />
    </>
  );
}

const MODULES_EN: { code: string; title: string; units: string; output: string }[] = [
  { code: "Module 0", units: "3 units", title: "Environment Setup (free preview)", output: "A working AI video environment" },
  { code: "Module 1", units: "4 units", title: "The AI Video Pipeline Landscape", output: "Your personal pipeline blueprint" },
  { code: "Module 2", units: "5 units", title: "Automated Voice-Over Editing", output: "First auto-edited voice-over video" },
  { code: "Module 3", units: "5 units", title: "Subtitle Automation", output: "Subtitled voice-over with dictionary correction" },
  { code: "Module 4", units: "4 units", title: "AI Sticker B-Roll", output: "Voice-over with AI overlays" },
  { code: "Module 5", units: "6 units", title: "Weavy.ai Node-Based Image Workflows", output: "10–20 consistent assets per run" },
  { code: "Module 6", units: "5 units", title: "Veo 3.1 Generative Video", output: "3 generative shorts with a consistent hero" },
  { code: "Module 7", units: "5 units", title: "Remotion Programmatic Video", output: "Reusable brand intro module" },
  { code: "Module 8", units: "4 units", title: "Pipeline Automation", output: "Notion to delivery automation flow" },
  { code: "Module 9", units: "4 units", title: "Content Strategy & Distribution", output: "Weekly plan + first batch of real posts" },
  { code: "Module 10", units: "4 units", title: "Monetization (advanced elective)", output: "Pricing / product / teaching plan" },
];

const FAQS_EN: { q: string; a: string }[] = [
  {
    q: "I have never written code. Can I still follow this course?",
    a: "Yes. Module 0 walks you through the entire setup. The course uses Claude Code as your AI programming assistant, so you don’t write code yourself — you only need to hold a conversation in plain English or Mandarin.",
  },
  {
    q: "What paid tools do I need outside the course?",
    a: "fal.ai usage (typically US$5–$20/mo), a Claude subscription, Weavy.ai, Notion free tier, ffmpeg (free), Remotion free tier. P2P AI Lab membership is separate from tool subscriptions.",
  },
  {
    q: "Will the whole course be released at once?",
    a: "No. Modules release progressively, roughly 1–2 new episodes per week, plus live Q&A. Intentional — so every module reflects the latest tool versions and real production experience.",
  },
  {
    q: "I already know CapCut. Do I need this?",
    a: "CapCut solves single-video editing. P2P AI Lab solves the entire production pipeline. One video per week? CapCut is probably enough. Three to five without being bottlenecked? This pipeline is for you.",
  },
  {
    q: "Can I use Windows?",
    a: "Yes. Demos use macOS, but Claude Code, ffmpeg and Python all run on Windows via WSL. You may need to handle small environment differences yourself.",
  },
  {
    q: "Refund policy?",
    a: "Seven-day no-questions-asked refund. DM me within seven days — full refund, no reason needed.",
  },
  {
    q: "Will the course be updated?",
    a: "Yes. AI tools release major updates every 3–6 months. Bonus modules are added continuously. Founding Members retain access to all new content for life.",
  },
  {
    q: "Can I try one lesson before joining?",
    a: "Yes. Module 0 (three units) is free. Join the waitlist and you’ll receive the preview link.",
  },
  {
    q: "I am based outside Taiwan. Can I join?",
    a: "Absolutely. P2P AI Lab is bilingual by design — English + Mandarin discussion channels and dual-language content. Pricing is USD-based for easy international checkout.",
  },
  {
    q: "Can I realistically land client work after this?",
    a: "Module 10 gives you the SOPs: pricing sheet, proposal deck, discovery call script, delivery workflow. The community has a lead-sharing board and student portfolio wall. Whether you close deals depends on your execution — my commitment is to teach the technology properly and give you every tool and path you need.",
  },
  {
    q: "Can I use this pipeline to serve my own clients? What about licensing?",
    a: "Yes, encouraged. Every workflow, code sample and prompt system can be used in your own client work — no additional licensing fee. The only restriction: you cannot resell or publicly share the course content itself (videos, documents, community discussions).",
  },
  {
    q: "How is this different from a US$10–$30 AI video course?",
    a: "Three differences. Delivery model: personal + peer assignment review, not passive consumption. Technology content: a full commercial pipeline from live paying clients, not surface-level overviews. Business support: Module 10 + community teaches you how to turn the skill into client revenue. US$99 is not a content fee — it’s a commercial-grade technology + delivery guarantee + monetization community, bundled.",
  },
];
