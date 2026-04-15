interface StatItem {
  label: string;
  value: string;
  percent: number;
  color?: "amber" | "teal" | "stone" | "red";
}

interface StatBarProps {
  data: string;
  title?: string;
}

export default function StatBar({ data, title }: StatBarProps) {
  const items: StatItem[] = JSON.parse(data);

  return (
    <div
      className="my-10 max-w-[640px]"
      style={{
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
        padding: "1.75rem 0",
      }}
    >
      {title && (
        <p
          className="mb-6"
          style={{
            fontFamily: "var(--f-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--signal)",
            fontWeight: 500,
          }}
        >
          {title}
        </p>
      )}
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex items-baseline justify-between gap-4">
              <p
                className="m-0"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 14,
                  color: "var(--ink-muted)",
                }}
              >
                {item.label}
              </p>
              <p
                className="m-0 tabular-nums"
                style={{
                  fontFamily: "var(--f-display), serif",
                  fontSize: 28,
                  lineHeight: 1,
                  color: "var(--ink)",
                  fontWeight: 400,
                }}
              >
                {item.value}
              </p>
            </div>
            <div
              className="mt-2 h-px w-full overflow-hidden"
              style={{ background: "var(--rule)" }}
            >
              <div
                className="h-full"
                style={{
                  width: `${Math.min(item.percent, 100)}%`,
                  background: "var(--signal)",
                  height: 2,
                  marginTop: -0.5,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
