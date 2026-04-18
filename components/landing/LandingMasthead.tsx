import Link from "next/link";
import LangSwitcher from "./LangSwitcher";

type Props = {
  issueLabel: string;
  pressNote: string;
};

export default function LandingMasthead({ issueLabel, pressNote }: Props) {
  return (
    <header className="border-b border-[color:var(--rule)]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[1.4fr_1fr_0.8fr] items-center gap-6 px-8 py-[22px] font-mono text-[11px] uppercase tracking-[0.14em]">
        <Link
          href="/"
          aria-label="Back to vjvan.com"
          className="font-[family-name:var(--f-display)] text-[22px] tracking-[-0.01em] normal-case leading-none text-[color:var(--ink)] hover:text-[color:var(--signal)]"
        >
          VJVAN
          <em className="ml-[6px] text-[16px] italic text-[color:var(--ink-muted)]">.COM</em>
        </Link>
        <div className="text-[color:var(--ink-muted)]">
          <b className="font-medium text-[color:var(--ink)]">{issueLabel}</b>
          <span className="mx-2">·</span>
          <span>{pressNote}</span>
        </div>
        <div className="flex justify-end">
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}
