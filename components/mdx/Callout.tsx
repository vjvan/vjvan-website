import type { ReactNode } from "react";

interface CalloutProps {
  type?: "tip" | "warning" | "info";
  title?: string;
  children: ReactNode;
}

const defaultTitles: Record<NonNullable<CalloutProps["type"]>, string> = {
  tip: "Tip",
  warning: "注意",
  info: "補充",
};

export default function Callout({
  type = "tip",
  title,
  children,
}: CalloutProps) {
  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-title">{title || defaultTitles[type]}</div>
      <div>{children}</div>
    </div>
  );
}
