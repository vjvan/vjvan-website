import type { Metadata } from "next";
import LandingMasthead from "@/components/landing/LandingMasthead";
import LandingColophon from "@/components/landing/LandingColophon";
import WaitlistForm from "@/components/landing/WaitlistForm";

const SITE_URL = "https://www.vjvan.com";
const PATH = "/courses/prompt-to-pixel";

export const metadata: Metadata = {
  title: "P2P AI Lab | Prompt to Pixel — 一人公司的 AI 影片產線",
  description:
    "P2P AI Lab 是一人公司的 AI 影片產線學院。Claude Code + Weavy.ai + fal.ai + Veo 3.1 + Remotion，一條可直接變現的商業資產。允雷親授，前 100 位 Founding Member 終身鎖 US$49 / 月。",
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
    languages: {
      "zh-TW": `${SITE_URL}${PATH}`,
      en: `${SITE_URL}/en${PATH}`,
      "x-default": `${SITE_URL}${PATH}`,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: `${SITE_URL}${PATH}`,
    siteName: "vjvan.com",
    title: "P2P AI Lab | Prompt to Pixel — 一人公司的 AI 影片產線",
    description:
      "Claude Code + Weavy.ai + fal.ai + Veo 3.1 + Remotion 的完整 AI 影片產線，一條可直接變現的商業資產。允雷親授，前 100 位 Founding Member 終身鎖 US$49 / 月。",
  },
  twitter: {
    card: "summary_large_image",
    title: "P2P AI Lab | Prompt to Pixel",
    description:
      "從 Prompt 到 Pixel，一人公司的 AI 影片產線。前 100 位 Founding Member 終身 US$49 / 月。",
  },
};

const waitlistCopy = {
  emailLabel: "Email Address",
  emailLabelZh: "電子信箱",
  emailPlaceholder: "you@domain.com",
  roleLabel: "Role",
  roleLabelZh: "身分",
  roleOptions: [
    { value: "agency", label: "行銷代理 / 影片工作室" },
    { value: "creator", label: "個人品牌 / 創作者" },
    { value: "consultant", label: "AI / 自動化顧問" },
    { value: "freelancer", label: "Freelancer / 接案" },
    { value: "founder", label: "一人公司老闆" },
    { value: "other", label: "其他" },
  ],
  goalLabel: "What would you build first?",
  goalLabelZh: "第一個想做的產出",
  goalPlaceholder: "例：一週 5 支健身教練 AI 影片",
  goalOptional: "選填",
  submit: "Join P2P AI Lab Waitlist",
  fine: "不會寄垃圾信 · 隨時退訂 · 開站首日寄出 Founding Member 連結",
  successTitle: "收到了。你會在開站第一時間收到 Founding Member 的註冊連結。",
  successStamp: "Filed — on the Waitlist",
  errorFallback: "送出失敗，請稍後再試，或直接寫信到 vjvan.n@gmail.com。",
};

export default function PromptToPixelZhPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_ZH.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "P2P AI Lab — Prompt to Pixel, 一人公司的 AI 影片產線",
    description:
      "P2P AI Lab 是為專業創作者、行銷代理、個人品牌與顧問打造的 AI 影片商業技術學院。11 個模組、49 單元，涵蓋 Claude Code、Weavy.ai、fal.ai、Veo 3.1、Remotion 的完整產線。",
    inLanguage: ["zh-TW", "en"],
    provider: {
      "@type": "Organization",
      name: "唯捷允雷有限公司",
      sameAs: "https://www.vjvan.com",
    },
    instructor: {
      "@type": "Person",
      name: "允雷",
      alternateName: ["VJVAN", "YunLei"],
      url: "https://www.vjvan.com",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Founding Member (first 100)",
        price: "49",
        priceCurrency: "USD",
        availability: "https://schema.org/LimitedAvailability",
        url: `${SITE_URL}${PATH}`,
      },
      {
        "@type": "Offer",
        name: "Standard",
        price: "99",
        priceCurrency: "USD",
        url: `${SITE_URL}${PATH}`,
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
                一個人<br />
                也能跑完<br />
                <em>整條 AI</em><br />
                影片產線
              </h1>

              <p className="hero-sub-zh">
                Prompt to Pixel — 從文字到影像，一人公司的 AI 影片產線
              </p>

              <p className="lede hero-lede">
                P2P AI Lab 是為專業創作者、行銷代理、個人品牌與顧問打造的 AI
                影片商業技術學院。允雷親自交付一整條可商用、可接案、可變現的 Prompt to Pixel
                產線。
              </p>

              <div className="hero-ctas">
                <a href="#waitlist" className="cta accent">
                  加入 Waitlist
                  <span className="arrow">→</span>
                </a>
                <a href="#curriculum" className="cta">
                  查看 11 個模組
                  <span className="arrow">↓</span>
                </a>
              </div>
            </div>

            <aside className="hero-meta" aria-label="期刊資訊">
              <div className="meta-title">§ Masthead · Issue 01</div>
              <dl>
                <dt>Editor</dt>
                <dd>
                  允雷 (Van)
                  <small>AI 商業系統架構師</small>
                </dd>
                <dt>Format</dt>
                <dd>
                  Skool ongoing
                  <small>49 單元 · 11 modules · 每週更新</small>
                </dd>
                <dt>Price</dt>
                <dd>
                  US$49 / month
                  <small>Founding Member · 終身鎖 · 前 100 位</small>
                </dd>
                <dt>Standard</dt>
                <dd>
                  US$99 / month
                  <small>100 位滿後標準價</small>
                </dd>
                <dt>Edition</dt>
                <dd>
                  Bilingual
                  <small>繁體中文 · English</small>
                </dd>
              </dl>
            </aside>
          </div>
        </section>

        {/* ---------- Stat bar / trust ---------- */}
        <div className="statbar">
          <div className="wrap">
            <span className="label">By the editor</span>
            <span className="body-line">
              背後是食品批發 B2B、汽車美容預約、電商多平台整合等真實產業付費客戶案。
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
                  What is <em>Prompt to Pixel</em>
                </h2>
              </div>
              <p className="sub tc-serif">
                P2P 不只是縮寫。它代表 AI 影片生產的完整鏈路，也是 P2P AI Lab 的教學主軸。
              </p>
            </header>

            <article className="chapter">
              <aside className="chapter-num" aria-hidden>
                <span className="glyph">Stage</span>
                <span className="n">01</span>
                <span>Prompt</span>
              </aside>
              <div className="chapter-body">
                <div className="eyebrow">從一句話開始</div>
                <h3>Prompt</h3>
                <p className="zh-title">一切從文字開始。</p>
                <p className="body tc">
                  一句描述、一段腳本、一個故事概念。你不需要攝影器材，也不需要剪片技巧。
                  你只需要會講清楚你想做什麼。
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
                <div className="eyebrow">角色一致性的第一道產線</div>
                <h3>
                  Image <em>— Weavy.ai workflow</em>
                </h3>
                <p className="zh-title">把 Prompt 變成角色一致、風格一致的素材。</p>
                <p className="body tc">
                  Weavy.ai 的節點式工作流把 prompt 變成角色一致、風格一致的 AI 影像素材。
                  這是 Veo 單獨用解不了的痛點，也是整條產線的第一道差異化。
                </p>
                <p className="body tc">
                  你會學到用一個工作流一次產出 10 到 20 張同角色不同姿勢的成套素材。
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
                <div className="eyebrow">把靜態動起來</div>
                <h3>
                  Video <em>— fal.ai · Veo 3.1 · Remotion · auto-edit</em>
                </h3>
                <p className="zh-title">用 code 跑，不是用滑鼠拖。</p>
                <p className="body tc">
                  用 fal.ai 串 Veo 3.1 把靜態影像動起來，用 Remotion 程式化疊層字卡與轉場，
                  用自動化流程剪接口播內容。每一環節都有 code 可跑、有 workflow 可複製。
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
                <div className="eyebrow">發佈到每一個像素</div>
                <h3>
                  Pixel <em>— IG · TikTok · Shorts</em>
                </h3>
                <p className="zh-title">一個人、一週、3 到 5 支。</p>
                <p className="body tc">
                  最終發佈到 IG Reels、TikTok、YouTube Shorts 的每一個像素，都是這條產線的結晶。
                  從文字出發，以像素結束。
                </p>
              </div>
            </article>

            <blockquote className="pullquote">
              <p>
                你不是在看教學。你是在學會跑一條屬於你自己的 AI 影片產線，並把它變成能幫你賺錢的商業資產。
              </p>
              <div className="attribution">— 允雷 · P2P AI Lab, Editor</div>
            </blockquote>
          </div>
        </section>

        {/* ---------- § 02 Core Commitment ---------- */}
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
                  為什麼 P2P AI Lab <em>值得 US$99</em>
                </h2>
              </div>
              <p className="sub tc-serif">
                三項交付承諾：我們不只教，我們確保你會、你擁有、你能賺到。
              </p>
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
                  <p className="clause-zh">交付保證 — 我們不只教，我們確保你會。</p>
                  <p className="clause-body zh-only">
                    P2P AI Lab 不接受「我看完了但還不會」這種結果。每個模組都有實戰作業，
                    每個作業都有允雷親自 review 加社群 peer review。
                  </p>
                  <p className="clause-body zh-only">
                    不是看完影片就算學會，是你真的做出一條可跑的產線、剪出一支可發佈的影片、
                    輸出一份可交付客戶的作品，才算通過。
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
                  <p className="clause-zh">商業技術 — 一套可以直接變現的資產。</p>
                  <p className="clause-body zh-only">
                    你學到的不是 demo 玩具，也不是理論概念。每一條 workflow、每一段 code、
                    每一個 skill，都是允雷自己在服務付費客戶時正在用的真實資產。
                  </p>
                  <p className="clause-body zh-only">
                    食品批發 B2B、汽車美容預約、電商多平台整合背後的技術,都是這條產線的一部分。
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
                  <p className="clause-zh">接案能力 — 從學會到賺錢的完整路徑。</p>
                  <p className="clause-body zh-only">
                    Module 10 商業化選修會給你具體的接案 SOP、報價表範本、提案簡報範本、
                    客戶溝通話術、驗收交付流程。
                  </p>
                  <p className="clause-body zh-only">
                    社群內有接案案源討論區、學員作品集展示、客戶轉介機會。
                    你不是一個人單打獨鬥，你進入的是一個正在接案賺錢的同行網絡。
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
                  你是不是也 <em>卡在這裡</em>
                </h2>
              </div>
              <p className="sub tc-serif">
                如果你正在想「我到底要不要放棄做內容算了」，P2P AI Lab 就是為你設計的那條產線。
              </p>
            </header>
            <ul className="bullets">
              <li>AI 工具一堆但串不起來，每次做影片都在換工具</li>
              <li>CapCut 剪一支口播要一小時，根本跟不上內容頻率</li>
              <li>Veo / Runway 單獨用品質不穩，角色換張圖就變人</li>
              <li>不懂程式覺得 Remotion / Claude Code 門檻太高</li>
              <li>想把內容規模化，但一個人做真的做不動</li>
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
                  這條產線 <em>是我自己每天在用的</em>
                </h2>
              </div>
              <p className="sub tc-serif">
                不是把公開資訊整理一下的通用 AI 課,是 vjvan.com 與顧問業務背後那條實際在跑的產線。
              </p>
            </header>
            <p className="body tc" style={{ maxWidth: "64ch" }}>
              我花了六個月，把 Claude Code、Weavy.ai、fal.ai、Veo 3.1、Remotion 整合在一起，
              做出一條 Prompt 進去、Pixel 出來的自動化產線。
            </p>
            <p className="body tc" style={{ maxWidth: "64ch" }}>
              現在我把整條產線打開給你看。不是理論，是真實可跑的 code、真實可複製的 workflow、真實已經發佈的成品。
            </p>
          </div>
        </section>

        {/* ---------- § 05 What you'll build ---------- */}
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
                  課程結束時 <em>你會擁有什麼</em>
                </h2>
              </div>
              <p className="sub tc-serif">不是看完，是手上真的有這些產出。</p>
            </header>
            <ul className="bullets">
              <li>一個可跑通的 AI 影片工作環境（Claude Code、ffmpeg、fal.ai、Notion DB）</li>
              <li>一套口播自動剪接流程，讓長口播秒變成品</li>
              <li>自動中英字幕工作流，含專有名詞修正</li>
              <li>AI 貼紙 B-roll 疊圖工作流，讓口播影片自帶視覺裝飾</li>
              <li>Weavy.ai 節點式角色一致性工作流，一次產 10 到 20 張成套素材</li>
              <li>Veo 3.1 image to video 的 prompt 系統</li>
              <li>Remotion 程式化品牌開場動畫模組，可重複使用</li>
              <li>從 Notion 新增一列到 Telegram 收到成片的全自動 pipeline</li>
              <li>一份可執行的週發佈計畫</li>
              <li>接案、產品化、教學三條商業化路線</li>
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
                  11 個模組 <em>· 49 單元 · 從零到產線</em>
                </h2>
              </div>
              <p className="sub tc-serif">
                所有課程分階段上架，P2P AI Lab Founding Member 可第一時間看到新內容。
              </p>
            </header>
            <div className="list-grid">
              {MODULES_ZH.map((m) => (
                <article className="list-card" key={m.code}>
                  <div className="k">
                    {m.code} · {m.units}
                  </div>
                  <div className="t">{m.title}</div>
                  <div className="d">產出：{m.output}</div>
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
                  這是我 <em>自己做出來的</em>
                </h2>
              </div>
              <p className="sub tc-serif">四個真實案例，不是 demo，也不是想像。</p>
            </header>
            <div className="list-grid">
              <article className="list-card">
                <div className="k">Case 01 · Skill</div>
                <div className="t">口播自動剪接流程</div>
                <div className="d">
                  自動剪除靜音、修正字幕專有名詞、字幕燒錄、AI 貼紙 B-roll 的端到端流程。
                </div>
              </article>
              <article className="list-card">
                <div className="k">Case 02 · Client</div>
                <div className="t">B2B 補貨系統(食品批發)</div>
                <div className="d">
                  LINE 內自助下單 + 管理後台 + 自動化通知,含補貨建議模組。
                  客戶實機測試中。
                </div>
              </article>
              <article className="list-card">
                <div className="k">Case 03 · Brand</div>
                <div className="t">vjvan.com 個人品牌站</div>
                <div className="d">
                  Next.js 16 + Tailwind 4 + MDX，已上線。完成品牌重塑與 SEO/AEO 大改造。
                </div>
              </article>
              <article className="list-card">
                <div className="k">Case 04 · Pipeline</div>
                <div className="t">AI Video Studio</div>
                <div className="d">
                  fal.ai + Remotion + Claude Code 的自動化影片產線技術示範專案。
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- § 08 Who it's for ---------- */}
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
                  這門課 <em>適合誰</em>
                </h2>
              </div>
              <p className="sub tc-serif">Premium 定位：把 AI 影片產線變成商業資產的專業人士。</p>
            </header>
            <div className="list-grid">
              <article className="list-card">
                <div className="k">適合</div>
                <div className="t">行銷代理 / 影片工作室老闆</div>
                <div className="d">用一條產線服務多個客戶，拉開跟同業的效率差。</div>
              </article>
              <article className="list-card">
                <div className="k">適合</div>
                <div className="t">個人品牌經營者</div>
                <div className="d">已在變現內容，每月製作預算 US$500 以上。</div>
              </article>
              <article className="list-card">
                <div className="k">適合</div>
                <div className="t">AI / 自動化顧問</div>
                <div className="d">需要產出客戶 demo 與提案影片素材。</div>
              </article>
              <article className="list-card">
                <div className="k">適合</div>
                <div className="t">Freelancer（US$50+ / 小時）</div>
                <div className="d">想要效率槓桿，讓接案時間貢獻更多營收。</div>
              </article>
              <article className="list-card">
                <div className="k">適合</div>
                <div className="t">一人公司老闆</div>
                <div className="d">願意投資「系統」而不只是「工具」。</div>
              </article>
              <article className="list-card">
                <div className="k">適合</div>
                <div className="t">中英雙語創作者</div>
                <div className="d">台灣、馬新港、海外華人與英語使用者皆可。</div>
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
                前 100 位 <em>Founding Member</em> 終身鎖價
              </h2>
            </header>

            <div className="terms-grid">
              <div className="offer-col">
                <div className="kicker">Founding Member · Monthly</div>
                <div className="price-line">
                  <span className="dollar">US$</span>49<span className="per">/ month</span>
                </div>
                <div className="crossed">
                  <s>US$99 / month</s> · 50% off · 終身鎖 · 前 100 位限定
                </div>
                <p className="body tc">
                  年費方案 US$490 / year（等於 10 個月，終身鎖）。Skool 平台固定 USD，Stripe 金流，
                  會員刷卡由銀行自動換匯。
                </p>
                <p className="body tc">
                  一個客戶案的收入（US$500 到 US$2,000）就能回本 5 到 20 個月。
                  你投入的不是訂閱費，是一項能產生複利的商業技能。
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
                    <dd>
                      Founding Member (first 100)
                      <span className="zh">前 100 位會員</span>
                    </dd>
                  </div>
                  <div>
                    <dt>02 · Monthly</dt>
                    <dd>
                      <code>US$49 / month</code>
                      <span className="zh">約 NT$1,570 / 月</span>
                    </dd>
                  </div>
                  <div>
                    <dt>03 · Annual</dt>
                    <dd>
                      <code>US$490 / year</code>
                      <span className="zh">約 NT$15,700 / 年 · 等於 10 個月</span>
                    </dd>
                  </div>
                  <div>
                    <dt>04 · Standard</dt>
                    <dd>
                      After 100 seats: US$99 / US$990
                      <span className="zh">100 位滿後升為標準價</span>
                    </dd>
                  </div>
                  <div>
                    <dt>05 · Access</dt>
                    <dd>
                      Skool community + Van Q&amp;A
                      <span className="zh">Skool 社群 + 允雷專屬問答</span>
                    </dd>
                  </div>
                  <div>
                    <dt>06 · Refund</dt>
                    <dd>
                      7-day no-questions refund
                      <span className="zh">7 天內無條件退費</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="terms-foot">
              <div className="signature">
                允雷 · vjvan.com
                <small>Editor · AI Business Systems Architect</small>
              </div>
              <a className="cta accent" href="#waitlist">
                Reserve your Founding seat <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- § 10 Enrolment (Waitlist) ---------- */}
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
                <p className="sub-zh">
                  加入 Waitlist，拿到 Module 0 免費試看與開站第一波 Founding Member 連結。
                </p>
                <WaitlistForm locale="zh" copy={waitlistCopy} />
              </div>

              <aside className="enrol-side" aria-label="Shipping schedule">
                <dl>
                  <div>
                    <dt>Launch</dt>
                    <dd>
                      Q3 2026
                      <span className="zh">開站時間</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Free preview</dt>
                    <dd>
                      Module 0 — 3 units
                      <span className="zh">加入 Waitlist 即寄出</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="count">Seats left</dt>
                    <dd className="count">
                      <b>83</b> / 100
                      <span className="zh">Founding Member 名額</span>
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
                  常見 <em>問題</em>
                </h2>
              </div>
              <p className="sub tc-serif">先看這裡，剩下的歡迎寫信到 vjvan.n@gmail.com。</p>
            </header>

            <div className="faq-list">
              {FAQS_ZH.map((f, i) => (
                <article className="faq-item" key={i}>
                  <div className="q-num">
                    Q<b>{String(i + 1).padStart(2, "0")}</b>
                  </div>
                  <div>
                    <h3 className="q-title">{f.q}</h3>
                    <p className="q-body">{f.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Final CTA band ---------- */}
        <section className="final-band">
          <div className="wrap">
            <h2>
              準備好跑你的 <em>Prompt to Pixel</em> 產線了嗎
            </h2>
            <p className="sub-zh">Founding Member 只有 100 位。加入 Waitlist，開站第一時間通知你。</p>
            <a className="cta accent" href="#waitlist">
              加入 P2P AI Lab Waitlist <span className="arrow">→</span>
            </a>
          </div>
        </section>
      </main>

      <LandingColophon
        leftLines={[
          "P2P AI Lab · Issue 01 · Founding Press Run",
          "Edited and engineered by 允雷 (Van) at vjvan.com.",
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

const MODULES_ZH: { code: string; title: string; units: string; output: string }[] = [
  { code: "Module 0", units: "3 單元", title: "環境建置（免費試看）", output: "可跑通的工作環境" },
  { code: "Module 1", units: "4 單元", title: "AI 影片產線全景", output: "個人內容產線規劃圖" },
  { code: "Module 2", units: "5 單元", title: "口播自動剪接", output: "自動剪接口播成品" },
  { code: "Module 3", units: "5 單元", title: "字幕自動化", output: "帶中文字幕的口播影片" },
  { code: "Module 4", units: "4 單元", title: "AI 貼紙 B-roll", output: "帶 AI 貼紙的短片" },
  {
    code: "Module 5",
    units: "6 單元",
    title: "Weavy.ai 節點式影像工作流",
    output: "一次產 10 到 20 張角色一致素材",
  },
  {
    code: "Module 6",
    units: "5 單元",
    title: "Veo 3.1 生成式影片",
    output: "3 支一致主角 Veo 生成短片",
  },
  { code: "Module 7", units: "5 單元", title: "Remotion 程式化影片", output: "品牌開場動畫模組" },
  { code: "Module 8", units: "4 單元", title: "Pipeline 自動化", output: "Notion → 成片全自動" },
  {
    code: "Module 9",
    units: "4 單元",
    title: "內容策略與發佈",
    output: "一週發佈計畫 + 實戰發文",
  },
  {
    code: "Module 10",
    units: "4 單元",
    title: "商業化選修",
    output: "接案 / 產品化 / 教學三條路",
  },
];

const FAQS_ZH: { q: string; a: string }[] = [
  {
    q: "我完全沒寫過 code 可以嗎",
    a: "可以。Module 0 手把手帶你裝好工具。這門課用 Claude Code 當作你的程式助理，你不需要自己寫 code，只要會跟 AI 對話就能跑通產線。",
  },
  {
    q: "這門課需要哪些付費工具",
    a: "fal.ai（依使用量計費，一般學員每月 5 到 20 美元）、Claude 訂閱、Weavy.ai 訂閱、Notion（免費版夠用）、ffmpeg（免費）、Remotion（免費版夠用）。P2P AI Lab 的會員費不含在這些工具之內。",
  },
  {
    q: "課程會一次全部上架嗎",
    a: "不會。分階段上架，每週 1 到 2 支新影片，同時維持直播答疑。這是為了確保每個模組都有最新工具版本跟實戰案例。",
  },
  {
    q: "我已經會用 CapCut 了還需要這門課嗎",
    a: "CapCut 解決的是單支影片，P2P AI Lab 解決的是整條產線。一週只做一支 CapCut 夠用；想一週做 3 到 5 支而且不想被剪接綁住，這條產線就是為你設計的。",
  },
  {
    q: "我可以用 Windows 嗎",
    a: "可以，但主要示範環境是 macOS。Claude Code、ffmpeg、Python 在 Windows WSL 都能跑，你需要自己處理少量環境差異。",
  },
  {
    q: "退費政策",
    a: "7 天無條件退費。如果你在 7 天內發現這不是你要的，直接私訊我，全額退款，不需要理由。",
  },
  {
    q: "課程會更新嗎",
    a: "會。AI 工具每 3 到 6 個月就會有重大改版，Bonus 模組會持續追加新工具與新技巧。Founding Member 終身享有新增內容。",
  },
  {
    q: "我可以先看一集試看嗎",
    a: "可以。Module 0 三個單元完全免費試看，加入 Waitlist 後會收到免費試看連結。",
  },
  {
    q: "我在馬新港 / 海外可以加入嗎",
    a: "當然可以。P2P AI Lab 本來就是為國際華語圈 + 全球英語使用者設計。所有教學內容中英雙語支援，Skool 社群也有中英雙語討論區。定價以 USD 為主，方便國際刷卡。",
  },
  {
    q: "我學完真的能接到案嗎",
    a: "Module 10 會給你具體的接案 SOP、報價表範本、提案簡報範本、溝通話術、驗收流程。社群內有接案案源討論區與學員作品集。最終成交要靠你自己去談，我的承諾是：我會把你交付教會，並給你所有能用的工具與路徑。",
  },
  {
    q: "我可以用這條產線服務客戶嗎，授權怎麼算",
    a: "可以，而且鼓勵。所有 workflow、code、prompt 系統都可以直接用在你自己的接案業務上，無需額外授權費。唯一限制是不得將課程內容本身（影片、文件、社群討論）轉售或公開分享。",
  },
  {
    q: "跟一般 US$10 到 US$30 的課程有什麼不同",
    a: "三個差別：交付模式不同（有 Van + peer review，不是看完就算）、技術內容不同（來自正在服務的付費客戶真實案例）、商業配套不同（Module 10 + 社群幫你把學會變成收入）。",
  },
];
