interface Item {
  label: string;
  value: string;
  detail?: string;
}

interface InfoCardProps {
  data: string;
  variant?: "dark" | "light" | "accent";
}

export default function InfoCard({ data }: InfoCardProps) {
  const items: Item[] = JSON.parse(data);
  return (
    <div
      className="my-10 max-w-[720px]"
      style={{
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          className="grid gap-4 items-baseline py-5 md:grid-cols-[90px_1fr_2fr]"
          style={{
            borderTop: i === 0 ? "none" : "1px solid var(--rule)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--f-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--signal)",
            }}
          >
            N° {String(i + 1).padStart(2, "0")}
          </div>
          <div
            style={{
              fontFamily: "var(--f-display), serif",
              fontSize: 36,
              lineHeight: 1,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            {item.value}
          </div>
          <div>
            <p
              className="m-0"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--ink)",
              }}
            >
              {item.label}
            </p>
            {item.detail && (
              <p
                className="m-0 mt-1"
                style={{
                  fontFamily: "var(--f-zh-body), sans-serif",
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "var(--ink-muted)",
                }}
              >
                {item.detail}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
