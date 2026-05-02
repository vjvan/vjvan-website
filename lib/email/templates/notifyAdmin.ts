/**
 * 通知允雷自己的 admin notification template
 * 寄到 vjvan.n@gmail.com (透過 sendRaw，不走 contacts 系統)
 *
 * 兩種類型:
 * - notifyWaitlist: 新 P2P AI Lab waitlist 加入
 * - notifyConsult: 新諮詢預約
 */

const ROLE_LABELS_ZH: Record<string, string> = {
  founder: "一人公司老闆",
  creator: "個人品牌 / 創作者",
  agency: "行銷代理 / 影片工作室",
  consultant: "AI / 自動化顧問",
  marketer: "行銷人員",
  freelancer: "Freelancer / 接案",
  other: "其他",
};

const SUPABASE_DASHBOARD_URL =
  "https://supabase.com/dashboard/project/zemxfcszotndlxxyjpjm/editor";

function metaTable(rows: Array<[label: string, value: string | null]>) {
  return `
    <table style="border-collapse: collapse; font-size: 14px;">
      ${rows
        .map(
          ([label, value]) => `
            <tr>
              <td style="padding: 4px 12px 4px 0; color: #5F5B57; vertical-align: top;">${label}</td>
              <td style="padding: 4px 0;">${value || "(未填)"}</td>
            </tr>
          `
        )
        .join("")}
    </table>
  `;
}

export function notifyWaitlist(payload: {
  email: string;
  role: string | null;
  goal: string | null;
  locale: "zh" | "en";
  referrer: string | null;
  userAgent: string | null;
}): { subject: string; html: string } {
  const roleLabel = payload.role ? ROLE_LABELS_ZH[payload.role] || payload.role : "(未填)";
  const subject = `[P2P Waitlist] ${payload.email} · ${roleLabel}`;
  const html = `
    <div style="font-family: -apple-system, monospace; line-height: 1.7; color: #0A0A0A;">
      <p><strong>新 P2P AI Lab Waitlist 加入</strong></p>
      ${metaTable([
        ["EMAIL", `<strong>${payload.email}</strong>`],
        ["ROLE", roleLabel],
        ["GOAL", payload.goal],
        ["LOCALE", payload.locale],
        ["REFERRER", payload.referrer],
        ["UA", payload.userAgent ? `<span style="font-size: 11px;">${payload.userAgent}</span>` : null],
      ])}
      <p style="margin-top: 24px; font-size: 12px; color: #5F5B57;">
        Supabase: <a href="${SUPABASE_DASHBOARD_URL}">contacts table</a>
      </p>
    </div>
  `;
  return { subject, html };
}

export function notifyConsult(payload: {
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  topic: string | null;
  description: string | null;
  referrer: string | null;
  userAgent: string | null;
}): { subject: string; html: string } {
  const subject = `[Consult] ${payload.name} · ${payload.topic || "未指定"} · ${payload.company || ""}`;
  const html = `
    <div style="font-family: -apple-system, monospace; line-height: 1.7; color: #0A0A0A;">
      <p><strong>新諮詢預約 · 24h 內回覆</strong></p>
      ${metaTable([
        ["NAME", `<strong>${payload.name}</strong>`],
        ["COMPANY", payload.company],
        ["EMAIL", payload.email],
        ["PHONE", payload.phone],
        ["TOPIC", payload.topic],
        ["DESCRIPTION", payload.description ? `<div style="white-space: pre-wrap;">${payload.description}</div>` : null],
        ["REFERRER", payload.referrer],
        ["UA", payload.userAgent ? `<span style="font-size: 11px;">${payload.userAgent}</span>` : null],
      ])}
      <p style="margin-top: 24px; font-size: 12px; color: #5F5B57;">
        Supabase: <a href="${SUPABASE_DASHBOARD_URL}">contacts table</a>
      </p>
      <p style="margin-top: 8px; font-size: 12px; color: #B22B2B;">
        <strong>ACTION:</strong> 24h 內透過 LINE OA 親自回覆
      </p>
    </div>
  `;
  return { subject, html };
}
