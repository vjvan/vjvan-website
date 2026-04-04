/**
 * Google Apps Script - 諮詢表單 + 電子報訂閱
 *
 * 同一個 Script 處理兩種表單:
 * - type 未指定 → 諮詢表單，寫入第一個工作表
 * - type = "newsletter" → 電子報訂閱，寫入「電子報訂閱」工作表
 *
 * 更新步驟:
 * 1. 在 Google Sheets 新增一個工作表，命名為「電子報訂閱」
 * 2. 第一列填: 訂閱時間 | Email
 * 3. 回到 Apps Script，用這段程式碼取代原本的 Code.gs
 * 4. Deploy > Manage deployments > 編輯 > 選新版本 > Deploy
 */

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);

  if (data.type === "newsletter") {
    var nlSheet = ss.getSheetByName("電子報訂閱");
    if (!nlSheet) {
      nlSheet = ss.insertSheet("電子報訂閱");
      nlSheet.appendRow(["訂閱時間", "稱呼", "Email"]);
    }

    nlSheet.appendRow([
      data.submitted_at || new Date().toISOString(),
      data.name || "",
      data.email || "",
    ]);
  } else {
    var sheet = ss.getSheets()[0];
    sheet.appendRow([
      data.submitted_at || new Date().toISOString(),
      data.name || "",
      data.company || "",
      data.email || "",
      data.phone || "",
      data.topic || "",
      data.description || "",
    ]);
  }

  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok" })
  ).setMimeType(ContentService.MimeType.JSON);
}
