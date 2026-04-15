interface CompareItem {
  name: string;
  detail: string;
}

interface CompareCardProps {
  data: string;
}

interface CompareData {
  recommended: { title: string; items: CompareItem[] };
  notRecommended: { title: string; items: CompareItem[] };
}

function Column({
  title,
  items,
  kicker,
  kickerColor,
}: {
  title: string;
  items: CompareItem[];
  kicker: string;
  kickerColor: string;
}) {
  return (
    <div>
      <div
        className="mb-5 pb-2"
        style={{
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <p
          className="m-0 mb-1"
          style={{
            fontFamily: "var(--f-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: kickerColor,
          }}
        >
          {kicker}
        </p>
        <p
          className="m-0"
          style={{
            fontFamily: "var(--f-zh-display), serif",
            fontSize: 20,
            fontWeight: 600,
            color: "var(--ink)",
          }}
        >
          {title}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.name}>
            <p
              className="m-0"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "var(--ink)",
              }}
            >
              {item.name}
            </p>
            <p
              className="m-0 mt-1"
              style={{
                fontFamily: "var(--f-zh-body), sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
              }}
            >
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompareCard({ data }: CompareCardProps) {
  const { recommended, notRecommended }: CompareData = JSON.parse(data);

  return (
    <div className="my-10 grid gap-8 md:gap-12 md:grid-cols-2 max-w-[720px]">
      <Column
        title={recommended.title}
        items={recommended.items}
        kicker="RECOMMENDED"
        kickerColor="var(--signal)"
      />
      <Column
        title={notRecommended.title}
        items={notRecommended.items}
        kicker="AVOID"
        kickerColor="var(--ink-muted)"
      />
    </div>
  );
}
