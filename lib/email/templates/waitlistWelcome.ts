/**
 * P2P AI Lab Waitlist 歡迎信 template
 * 從 commit 469f8a8 抽出，加共用 footer
 */

import type { EmailTemplate } from "../send";
import { unsubscribeFooter } from "./footer";

export function waitlistWelcomeTemplate(args: {
  locale: "zh" | "en";
  unsubscribeToken: string;
}): EmailTemplate {
  const { locale, unsubscribeToken } = args;
  const footer = unsubscribeFooter({ unsubscribeToken, locale });

  if (locale === "en") {
    return {
      templateKey: "waitlist_welcome_en",
      subject: "Welcome to the P2P AI Lab Waitlist",
      html: `
        <div style="font-family: -apple-system, sans-serif; line-height: 1.7; color: #0A0A0A; max-width: 560px; padding: 24px;">
          <p>Hi,</p>
          <p>Thanks for joining the <strong>P2P AI Lab</strong> Waitlist.</p>
          <p>This is not a newsletter — it's the list that gets the Founding Member link the day P2P AI Lab opens.</p>
          <p>P2P AI Lab is a business technology academy for one-person companies, agencies, AI consultants and personal brands. YunLei (Van) personally delivers a commercial-grade Prompt to Pixel pipeline you can use to take on client work, build recurring revenue, and turn AI video into a real business asset.</p>
          <p><strong>What happens next:</strong></p>
          <ul>
            <li>When Module 0 (3 free preview units) is filmed, the preview link arrives in this inbox</li>
            <li>On launch day (Q3 2026), the Founding Member signup link goes straight to you. First 100 lock in US$49 / month, forever</li>
            <li>If there is a major milestone (new Module or tool demo), you get a brief update — no spam</li>
          </ul>
          <p>If this email landed in spam, please mark it as "Not spam" so the launch link reaches you.</p>
          <p>Reply to this email if you have any question — I read every reply.</p>
          <p>— YunLei (Van)<br>vjvan.com · AI Business Systems Architect</p>
          ${footer}
        </div>
      `,
    };
  }
  return {
    templateKey: "waitlist_welcome_zh",
    subject: "歡迎加入 P2P AI Lab Waitlist · Founding Member 連結將在開站首日寄出",
    html: `
      <div style="font-family: -apple-system, 'Noto Sans TC', sans-serif; line-height: 1.7; color: #0A0A0A; max-width: 560px; padding: 24px;">
        <p>嗨,</p>
        <p>感謝加入 <strong>P2P AI Lab</strong> Waitlist。</p>
        <p>這不是電子報，是讓你能在開站第一天拿到 Founding Member 連結的名單。</p>
        <p>P2P AI Lab 是為一人公司、行銷代理、AI 顧問與個人品牌設計的 AI 影片商業技術學院。允雷親自交付一整條可商用、可接案、可變現的 Prompt to Pixel 產線。</p>
        <p><strong>接下來會發生什麼:</strong></p>
        <ul>
          <li>Module 0 三個單元拍好後，會直接寄試看連結到這個信箱</li>
          <li>開站首日 (Q3 2026)，Founding Member 註冊連結直接寄到你信箱，前 100 位終身鎖 US$49 / 月</li>
          <li>中間如果有重大進展 (例如新 Module 或工具示範) 會發少量 update，不會疲勞轟炸</li>
        </ul>
        <p>如果這封信進垃圾信匣，麻煩標為「不是垃圾信」確保開站連結能順利收到。</p>
        <p>有任何問題直接回覆這封信，我看得到。</p>
        <p>— 允雷 (Van)<br>vjvan.com · AI 商業系統架構師</p>
        ${footer}
      </div>
    `,
  };
}
