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

export default function CompareCard({ data }: CompareCardProps) {
  const { recommended, notRecommended }: CompareData = JSON.parse(data);

  return (
    <div className="my-8 grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border-2 border-teal-200 bg-teal-50/50 p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
            O
          </span>
          <p className="text-base font-semibold text-teal-900">
            {recommended.title}
          </p>
        </div>
        <div className="space-y-3">
          {recommended.items.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-teal-200 bg-white p-4"
            >
              <p className="text-sm font-semibold text-stone-900">
                {item.name}
              </p>
              <p className="mt-1.5 text-xs leading-5 text-stone-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border-2 border-stone-200 bg-stone-50/50 p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-400 text-xs font-bold text-white">
            X
          </span>
          <p className="text-base font-semibold text-stone-700">
            {notRecommended.title}
          </p>
        </div>
        <div className="space-y-3">
          {notRecommended.items.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-stone-200 bg-white p-4"
            >
              <p className="text-sm font-semibold text-stone-700">
                {item.name}
              </p>
              <p className="mt-1.5 text-xs leading-5 text-stone-500">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
