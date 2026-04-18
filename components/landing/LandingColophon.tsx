import Link from "next/link";

type Props = {
  leftLines: string[];
  rightLinks?: { label: string; href: string }[];
};

export default function LandingColophon({ leftLines, rightLinks = [] }: Props) {
  return (
    <footer className="border-t border-[color:var(--rule)] py-[36px_0_48px] font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--ink-muted)]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[1.6fr_1fr] items-start gap-12 px-8">
        <div className="leading-[1.8]">
          {leftLines.map((line, i) => (
            <p key={i} className={i === 0 ? "text-[color:var(--ink)] font-medium" : ""}>
              {line}
            </p>
          ))}
        </div>
        <div className="flex justify-end gap-6">
          {rightLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="hover:text-[color:var(--ink)]">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
