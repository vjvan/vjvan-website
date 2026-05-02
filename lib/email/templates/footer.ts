/**
 * 共用 email footer · 含退訂連結
 * 個資法 / 未來 GDPR 合規必要
 */

const SITE_URL = "https://www.vjvan.com";

export function unsubscribeFooter(args: {
  unsubscribeToken: string;
  locale: "zh" | "en";
  scopeAll?: string;       // 全退訂的 label，預設「退訂所有 email」
  scopeDrip?: string;      // 部分退訂的 label，預設「只退訂課程通知」
}) {
  const { unsubscribeToken, locale } = args;
  const allLink = `${SITE_URL}/api/unsubscribe?token=${unsubscribeToken}&scope=all`;
  const dripLink = `${SITE_URL}/api/unsubscribe?token=${unsubscribeToken}&scope=drip`;

  if (locale === "en") {
    return `
      <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #E5E2DD; font-family: -apple-system, sans-serif; font-size: 12px; color: #5F5B57; line-height: 1.6;">
        <p style="margin: 0;">
          You're receiving this because you joined the list at vjvan.com.<br>
          <a href="${dripLink}" style="color: #5F5B57; text-decoration: underline;">Unsubscribe from course updates only</a>
          &nbsp;·&nbsp;
          <a href="${allLink}" style="color: #5F5B57; text-decoration: underline;">Unsubscribe from all emails</a>
        </p>
        <p style="margin: 8px 0 0;">
          VJVAN · 唯捷允雷有限公司 · Pingtung, Taiwan
        </p>
      </div>
    `;
  }
  return `
    <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #E5E2DD; font-family: -apple-system, 'Noto Sans TC', sans-serif; font-size: 12px; color: #5F5B57; line-height: 1.6;">
      <p style="margin: 0;">
        你收到這封信是因為在 vjvan.com 加入了相關名單。<br>
        <a href="${dripLink}" style="color: #5F5B57; text-decoration: underline;">只退訂課程通知</a>
        &nbsp;·&nbsp;
        <a href="${allLink}" style="color: #5F5B57; text-decoration: underline;">退訂所有 email</a>
      </p>
      <p style="margin: 8px 0 0;">
        VJVAN · 唯捷允雷有限公司 · 屏東 Pingtung, Taiwan
      </p>
    </div>
  `;
}
