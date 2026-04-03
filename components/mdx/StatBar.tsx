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

const barColors = {
  amber: "bg-amber-500",
  teal: "bg-teal-500",
  stone: "bg-stone-400",
  red: "bg-red-400",
};

const valueTextColors = {
  amber: "text-amber-700",
  teal: "text-teal-700",
  stone: "text-stone-600",
  red: "text-red-600",
};

export default function StatBar({ data, title }: StatBarProps) {
  const items: StatItem[] = JSON.parse(data);

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      {title && (
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
          {title}
        </p>
      )}
      <div className="space-y-5">
        {items.map((item) => {
          const color = item.color || "amber";
          return (
            <div key={item.label}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-medium text-stone-800">{item.label}</p>
                <p className={`text-lg font-bold tabular-nums ${valueTextColors[color]}`}>
                  {item.value}
                </p>
              </div>
              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-stone-100">
                <div
                  className={`h-full rounded-full transition-all ${barColors[color]}`}
                  style={{ width: `${Math.min(item.percent, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
