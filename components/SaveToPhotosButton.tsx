"use client";

import { useState } from "react";

const IMG = "/vjvan-namecard.png";
const FILE = "vjvan-namecard.png";

// 網頁無權限直接寫入相簿（瀏覽器沙盒限制）。能進相簿的兩條路：
// (1) Web Share API 帶檔 → 系統分享面板 → iOS/Android「儲存影像」進相簿
// (2) 長按頁面上的圖片 → 加入照片（最可靠，圖片區另有提示）
// 不支援 share 的環境（多數桌機）退回一般下載。
export default function SaveToPhotosButton() {
  const [hint, setHint] = useState("");

  async function handleSave() {
    try {
      const res = await fetch(IMG);
      const blob = await res.blob();
      const file = new File([blob], FILE, { type: "image/png" });
      const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean };
      if (nav.canShare && nav.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "允雷 · VJVAN 數位名片" });
        return;
      }
    } catch (err) {
      if ((err as Error)?.name === "AbortError") return; // 使用者在分享面板取消
    }
    // fallback：一般下載
    const a = document.createElement("a");
    a.href = IMG;
    a.download = FILE;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setHint("已下載到裝置。在 iPhone 請改用下方「長按圖片 → 加入照片」直接存進相簿。");
  }

  return (
    <>
      <button
        type="button"
        onClick={handleSave}
        className="editorial-card editorial-card--interactive flex items-center justify-between gap-4 px-5 py-4"
        style={{ width: "100%", textAlign: "left", cursor: "pointer", font: "inherit", color: "var(--ink)" }}
      >
        <span className="flex flex-col gap-1">
          <span className="eyebrow" style={{ color: "var(--signal)" }}>
            存成圖片
          </span>
          <span
            style={{ fontFamily: "var(--f-zh-body), sans-serif", fontSize: 16, lineHeight: 1.5, color: "var(--ink)" }}
          >
            存進手機相簿，或分享給別人
          </span>
        </span>
        <span
          aria-hidden="true"
          style={{ fontFamily: "var(--f-mono), monospace", fontSize: 18, color: "var(--ink-muted)" }}
        >
          ↓
        </span>
      </button>
      {hint && (
        <p
          style={{
            fontFamily: "var(--f-zh-body), sans-serif",
            fontSize: 12,
            lineHeight: 1.6,
            color: "var(--ink-muted)",
            marginTop: 6,
          }}
        >
          {hint}
        </p>
      )}
    </>
  );
}
