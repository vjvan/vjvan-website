/**
 * Consult 諮詢預約歡迎信 template
 * 跟 waitlist 不同：這是 high-intent transactional，
 * 主要功能是「已收到預約 + 我會 24h 內人工回」+ LINE OA 跳轉備援
 */

import type { EmailTemplate } from "../send";
import { unsubscribeFooter } from "./footer";

export function consultWelcomeTemplate(args: {
  locale: "zh" | "en";
  unsubscribeToken: string;
  name?: string | null;
  topic?: string | null;
}): EmailTemplate {
  const { locale, unsubscribeToken, name, topic } = args;
  const footer = unsubscribeFooter({ unsubscribeToken, locale });
  const greeting = name ? (locale === "en" ? `Hi ${name},` : `${name} 您好，`) : (locale === "en" ? "Hi," : "您好，");
  const topicLine = topic
    ? (locale === "en"
        ? `<p>I noted your topic interest: <strong>${topic}</strong>. I'll come prepared with relevant cases when we connect.</p>`
        : `<p>我看到你想聊的方向是：<strong>${topic}</strong>。我會帶相關案例跟你聊。</p>`)
    : "";

  if (locale === "en") {
    return {
      templateKey: "consult_welcome_en",
      subject: "Consult request received · YunLei (Van) will reply within 24h",
      html: `
        <div style="font-family: -apple-system, sans-serif; line-height: 1.7; color: #0A0A0A; max-width: 560px; padding: 24px;">
          <p>${greeting}</p>
          <p>Thanks for reaching out via vjvan.com. I've received your consult request.</p>
          ${topicLine}
          <p><strong>What happens next:</strong></p>
          <ul>
            <li>I'll personally reply via LINE OA (or this email) within 24 hours</li>
            <li>If urgent, ping me directly on LINE: <a href="https://lin.ee/XjnkG91">@vjvan_n</a></li>
            <li>30-min discovery call once we align on time</li>
          </ul>
          <p>I work on 3-4 projects at a time, so we'll cover real fit before any proposal.</p>
          <p>— YunLei (Van)<br>vjvan.com · AI Business Systems Architect</p>
          ${footer}
        </div>
      `,
    };
  }
  return {
    templateKey: "consult_welcome_zh",
    subject: "已收到您的諮詢預約 · 24 小時內允雷會親自回覆",
    html: `
      <div style="font-family: -apple-system, 'Noto Sans TC', sans-serif; line-height: 1.7; color: #0A0A0A; max-width: 560px; padding: 24px;">
        <p>${greeting}</p>
        <p>謝謝你透過 vjvan.com 聯絡我，諮詢預約已收到。</p>
        ${topicLine}
        <p><strong>接下來會發生什麼:</strong></p>
        <ul>
          <li>我會在 24 小時內透過 LINE OA (或這封信) 親自回覆</li>
          <li>如果比較急，可直接在 LINE 找我：<a href="https://lin.ee/XjnkG91">@vjvan_n</a></li>
          <li>對齊時間後安排 30 分鐘線上諮詢</li>
        </ul>
        <p>我同時只接 3-4 個專案，所以諮詢時會先確認契合度，不會直接推方案。</p>
        <p>— 允雷 (Van)<br>vjvan.com · AI 商業系統架構師</p>
        ${footer}
      </div>
    `,
  };
}
