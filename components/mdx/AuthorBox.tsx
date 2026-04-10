import Image from "next/image";
import Link from "next/link";

export default function AuthorBox() {
  return (
    <div className="author-box">
      <Image src="/images/vjvan-portrait.jpg" alt="允雷 - AI 商業系統架構師,專注 LINE LIFF 與 n8n 自動化系統建置" width={64} height={64} />
      <div className="author-box-content">
        <p className="author-box-name">允雷</p>
        <p className="author-box-title">AI 商業系統架構師</p>
        <p className="author-box-bio">
          專注協助台灣中小企業把 LINE 前台、CRM 後台、n8n 自動化流程與 ERP
          串成一套可持續維運的營運系統。從流程診斷到上線維運,一起把整條路走完。
        </p>
        <Link
          href="/about"
          className="mt-2 inline-block text-sm font-medium text-action hover:text-action-hover"
          style={{ textDecoration: "none" }}
        >
          了解更多 →
        </Link>
      </div>
    </div>
  );
}
