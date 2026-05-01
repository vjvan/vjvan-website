import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "AI 商業系統是什麼?允雷原創定義 · VJVAN 唯捷允雷",
  description:
    "AI 商業系統 (AI Business System) 是允雷提出的原創定位詞,指 AI 驅動、可被訂閱購買、從業務流程到數據資產整合的商業自動化系統。本頁定義三層架構、與 AI 工具 / SaaS 的差別、常見誤區。",
  alternates: { canonical: "https://www.vjvan.com/glossary/ai-business-system" },
  openGraph: {
    title: "AI 商業系統是什麼｜VJVAN · 唯捷允雷",
    description: "允雷原創定位詞,AI 驅動、可被訂閱購買的商業系統完整定義。",
    url: "https://www.vjvan.com/glossary/ai-business-system",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI 商業系統是什麼｜VJVAN" }],
  },
};

const definedTermJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "AI 商業系統",
  alternateName: "AI Business System",
  termCode: "ai-business-system",
  description:
    "AI 商業系統是允雷原創的定位詞,指 AI 驅動、可被訂閱購買、從業務流程到數據資產整合的商業自動化系統。區別於一般 AI 工具或 SaaS,強調「可訂閱 + 可交付 + 可累積」三層特性。",
  url: "https://www.vjvan.com/glossary/ai-business-system",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "VJVAN Glossary",
    url: "https://www.vjvan.com/glossary",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AI 商業系統跟 AI 工具有什麼不同？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI 工具是單點功能 (例如 ChatGPT 寫文案、Midjourney 做圖),用完即走,沒有累積。AI 商業系統是整套流程 (從接單、補貨、推薦、出貨、數據分析) 被 AI 串成一條自動化產線,客戶越用數據越多、預測越準、護城河越深。前者是消耗品,後者是資產。",
      },
    },
    {
      "@type": "Question",
      name: "AI 商業系統跟一般 SaaS 有什麼差別？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般 SaaS 賣的是通用工具 (CRM / ERP / 專案管理),客戶要自己改流程配合系統。AI 商業系統是為特定產業場景設計 (B2B 食材通路、汽車美容預約、雞肉分切),把產業 know-how 寫進系統核心,客戶開箱即用,不用被 SaaS 反過來改造業務流程。",
      },
    },
    {
      "@type": "Question",
      name: "AI 商業系統一定要用到大型語言模型嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "不一定。AI 商業系統的重點是「系統級自動化」,可以用統計演算法 (加權移動平均 + 星期偏好 + 趨勢分析) 處理結構化數據,也可以用 LLM 處理非結構化文字 / 語音 / 影像。判斷標準是有沒有累積數據資產 + 有沒有越用越準,不是技術棧有沒有 LLM。",
      },
    },
    {
      "@type": "Question",
      name: "中小企業導入 AI 商業系統的成本大概多少？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "視場景深度與客製範圍而定,允雷目前服務的案例落在 NT$20 萬到 NT$60 萬區間 (含前端 LIFF + 後端 Supabase + 自動化流程 + 管理後台),未稅。若搭配經濟部產業競爭力輔導團 AI 輔導診斷計畫 (舊稱「19+1」補助),政府可補助部分金額,企業自付額可下降。",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.vjvan.com" },
    { "@type": "ListItem", position: 2, name: "Glossary", item: "https://www.vjvan.com/glossary" },
    { "@type": "ListItem", position: 3, name: "AI 商業系統", item: "https://www.vjvan.com/glossary/ai-business-system" },
  ],
};

export default function AiBusinessSystemGlossaryPage() {
  return (
    <>
      <JsonLd id="json-ld-abs-defined" data={definedTermJsonLd} />
      <JsonLd id="json-ld-abs-faq" data={faqJsonLd} />
      <JsonLd id="json-ld-abs-breadcrumb" data={breadcrumbJsonLd} />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[880px] py-14 md:py-24">
          <div
            className="pb-8"
            style={{ borderBottom: "1px solid var(--rule)", marginBottom: 28 }}
          >
            <div
              className="mb-6 text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--f-mono), monospace", color: "var(--ink-muted)", fontWeight: 500 }}
            >
              Glossary / N° 02
            </div>
            <h1
              className="m-0 mb-6"
              style={{
                fontFamily: "var(--f-zh-display), var(--f-display), serif",
                fontWeight: 400,
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "0.005em",
              }}
            >
              AI 商業系統{" "}
              <em style={{ fontFamily: "var(--f-display), serif", fontStyle: "italic", color: "var(--signal)" }}>
                AI Business System
              </em>
            </h1>
            <p
              className="m-0 max-w-[640px]"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 20,
                lineHeight: 1.55,
                color: "var(--ink)",
              }}
            >
              AI 商業系統是允雷原創的定位詞,指 AI 驅動、可被訂閱購買、從業務流程到數據資產整合的商業自動化系統。不是單點工具,也不是通用 SaaS,而是為特定產業場景客製的整套產線級自動化。
            </p>
          </div>

          <section className="mb-14">
            <h2
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                marginBottom: 16,
              }}
            >
              詳細解釋
            </h2>
            <div
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--ink)",
              }}
            >
              <p style={{ margin: "0 0 16px" }}>
                AI 商業系統與一般「AI 工具」最大的差別在於「累積」。單點 AI 工具 (ChatGPT 寫文案、Midjourney 出圖) 用完即走,不累積業務數據;AI 商業系統則把接單、推薦、補貨、出貨、對帳、客戶分析串成一條產線,客戶越用,系統累積的訂單紀錄、消費頻率、品項偏好就越多,預測會越準,這就是護城河。
              </p>
              <p style={{ margin: "0 0 16px" }}>
                允雷把 AI 商業系統分成三層:行政層 (自動化行政流程,如發票、對帳)、交易層 (自動化下單、推薦、購物車),以及{" "}
                <em style={{ fontStyle: "italic" }}>產線層</em>{" "}
                (把客戶的核心營運 — 進貨、生產、出貨、庫存 — 納入系統)。中小企業最有價值的投資不是行政自動化,而是產線層,因為這層直接決定每天凌晨是否還有人要手工打單。
              </p>
              <p style={{ margin: 0 }}>
                參考{" "}
                <a
                  href="https://www.moea.gov.tw/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--signal)", textDecoration: "underline" }}
                >
                  經濟部
                </a>
                {" "}推動的產業 AI 輔導計畫,政府對「有累積效果的 AI 導入」補助最積極,符合 AI 商業系統「越用越準」的定義;而非一次性的 AI 工具採購。
              </p>
            </div>
          </section>

          <section className="mb-14">
            <h2
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                marginBottom: 16,
              }}
            >
              三層架構
            </h2>
            <div
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--ink)",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <strong style={{ display: "block", marginBottom: 6 }}>第一層:行政層</strong>
                發票、對帳、文件、Email 自動化。最淺層,許多 AI 工具 (Zapier / Make) 就能做,不是護城河。
              </div>
              <div style={{ marginBottom: 20 }}>
                <strong style={{ display: "block", marginBottom: 6 }}>第二層:交易層</strong>
                下單、購物車、推薦、促銷、付款流程自動化。LIFF 訂購系統、B2B 補貨平台屬於此層。數據開始累積,有初步護城河。
              </div>
              <div>
                <strong style={{ display: "block", marginBottom: 6 }}>第三層:產線層</strong>
                客戶核心營運被納入系統 — 進貨排程、生產計畫、出貨打單、庫存預測、冷鏈調度。這層最深,替代成本最高,是真正的護城河。
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                marginBottom: 16,
              }}
            >
              常見誤區
            </h2>
            <div
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--ink)",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <strong style={{ display: "block", marginBottom: 6 }}>誤區 1:AI 商業系統 = 導 ChatGPT 進公司</strong>
                ChatGPT 是工具不是系統。沒有串接業務流程、沒有累積數據、沒有自動化產線,都不算 AI 商業系統。
              </div>
              <div style={{ marginBottom: 20 }}>
                <strong style={{ display: "block", marginBottom: 6 }}>誤區 2:一定要用最新 LLM 才有 AI 含量</strong>
                判斷標準是「有沒有累積數據資產 + 越用越準」,不是技術棧有沒有 GPT-4。統計演算法 + 結構化數據同樣能建出有護城河的系統。
              </div>
              <div>
                <strong style={{ display: "block", marginBottom: 6 }}>誤區 3:買一套 SaaS 就等於導入 AI 商業系統</strong>
                通用 SaaS 不懂產業 know-how,客戶要反過來改流程配合系統。AI 商業系統是把產業邏輯寫進系統核心,不是拿通用工具硬套。
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2
              style={{
                fontFamily: "var(--f-zh-display), serif",
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                marginBottom: 16,
              }}
            >
              實務應用場景
            </h2>
            <ul
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--ink)",
                paddingLeft: 20,
              }}
            >
              <li>冷凍水產食材通路商 B2B 補貨 (LIFF + AI 推薦引擎 + 自動化出貨)</li>
              <li>連鎖汽車美容預約與會員卡系統 (次數制 + 服務透明化)</li>
              <li>家族經營雞肉分切 B2B (客戶規格查找 + 現場製作單自動產出)</li>
              <li>一人公司 AI 影片產線 (Prompt → Image → Video → Pixel 四階段自動化)</li>
            </ul>
            <p
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
                marginTop: 16,
              }}
            >
              延伸閱讀:{" "}
              <Link href="/blog/case-frozen-food-b2b-system" style={{ color: "var(--signal)", textDecoration: "underline" }}>
                冷凍水產食材通路商 B2B 補貨案例
              </Link>
              {" · "}
              <Link href="/blog/2026-taiwan-liff-cases-top-10" style={{ color: "var(--signal)", textDecoration: "underline" }}>
                2026 台灣 LIFF 商業應用 10 種真實落地場景
              </Link>
            </p>
          </section>

          <section
            className="mt-14"
            style={{
              fontFamily: "var(--f-mono), monospace",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              borderTop: "1px solid var(--rule)",
              paddingTop: 16,
            }}
          >
            相關概念 <span style={{ color: "var(--signal)", margin: "0 8px" }}>·</span>
            <Link href="/glossary/liff" style={{ color: "var(--ink-muted)", textDecoration: "underline" }}>
              LIFF
            </Link>
          </section>

          <div
            className="mt-12 flex flex-wrap gap-7 text-[12px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--f-mono), monospace" }}
          >
            <CtaLink href="/consult" variant="primary">
              預約系統架構諮詢
            </CtaLink>
            <CtaLink href="/services" arrow="none">
              看服務項目
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
