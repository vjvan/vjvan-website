import { NextResponse } from "next/server";

export const dynamic = "force-static";

// vCard 3.0：相容性最廣（iOS 通訊錄 / Android / Outlook 都能讀）。
// 行尾必須是 CRLF，非 ASCII 走 UTF-8（由 Content-Type charset 宣告）。
// 電話尚未放入：允雷確認要公開手機後，補一行 TEL;TYPE=CELL:+886...
const VCARD_LINES = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:;允雷;;;",
  "FN:允雷",
  "ORG:唯捷允雷有限公司",
  "TITLE:AI 商業系統架構師",
  "EMAIL;TYPE=INTERNET,PREF:vjvan.n@gmail.com",
  "URL:https://www.vjvan.com",
  "ADR;TYPE=WORK:;;;屏東;;;台灣",
  "NOTE:幫企業把散在 LINE、Excel、ERP 的營運流程，整理成能長期自動運行的系統。掃自 vjvan.com/card",
  "PHOTO;MEDIATYPE=image/png;VALUE=URI:https://www.vjvan.com/portrait.png",
  "X-SOCIALPROFILE;TYPE=threads:https://www.threads.net/@vjvan_n",
  "X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/vjvan",
  "REV:2026-06-24T00:00:00Z",
  "END:VCARD",
  "",
];

export function GET() {
  const body = VCARD_LINES.join("\r\n");

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="vjvan.vcf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
