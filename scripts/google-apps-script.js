/**
 * Google Apps Script - 諮詢表單後端
 *
 * 設定步驟:
 * 1. 開一個新的 Google Sheets，第一列寫上欄位標題:
 *    送出時間 | 姓名 | 公司 | Email | 電話 | 諮詢方向 | 需求描述
 *
 * 2. 在 Google Sheets 選 Extensions > Apps Script
 *
 * 3. 把這段程式碼貼上去，取代原本的 Code.gs 內容
 *
 * 4. 點 Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *
 * 5. 複製 deployment URL，貼到 .env.local 的 NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 *
 * 6. 重新啟動 Next.js dev server (或重新部署)
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submitted_at || new Date().toISOString(),
    data.name || "",
    data.company || "",
    data.email || "",
    data.phone || "",
    data.topic || "",
    data.description || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok" })
  ).setMimeType(ContentService.MimeType.JSON);
}
