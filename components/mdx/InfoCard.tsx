interface Item {
  label: string;
  value: string;
  detail?: string;
}

interface InfoCardProps {
  data: string;
  variant?: "dark" | "light" | "accent";
}

const variants = {
  dark: "bg-stone-950 text-white border-stone-800",
  light: "bg-stone-50 text-stone-950 border-stone-200",
  accent: "bg-amber-50 text-stone-950 border-amber-200",
};

const valueColors = {
  dark: "text-amber-300",
  light: "text-stone-950",
  accent: "text-amber-700",
};

const detailColors = {
  dark: "text-stone-400",
  light: "text-stone-500",
  accent: "text-stone-600",
};

export default function InfoCard({ data, variant = "dark" }: InfoCardProps) {
  const items: Item[] = JSON.parse(data);
  const cols = items.length <= 3 ? `sm:grid-cols-${items.length}` : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`my-8 grid gap-3 ${cols}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-2xl border p-5 ${variants[variant]}`}
        >
          <p className={`text-2xl font-semibold ${valueColors[variant]}`}>
            {item.value}
          </p>
          <p className="mt-1.5 text-sm font-medium">{item.label}</p>
          {item.detail && (
            <p className={`mt-2 text-xs leading-5 ${detailColors[variant]}`}>
              {item.detail}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
