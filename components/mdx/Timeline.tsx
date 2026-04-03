interface TimelineStep {
  label: string;
  title: string;
  detail: string;
  color?: "amber" | "teal" | "stone";
}

interface TimelineProps {
  data: string;
  title?: string;
}

const dotColors = {
  amber: "bg-amber-500 ring-amber-100",
  teal: "bg-teal-500 ring-teal-100",
  stone: "bg-stone-400 ring-stone-100",
};

const labelColors = {
  amber: "text-amber-700 bg-amber-50 border-amber-200",
  teal: "text-teal-700 bg-teal-50 border-teal-200",
  stone: "text-stone-600 bg-stone-50 border-stone-200",
};

export default function Timeline({ data, title }: TimelineProps) {
  const steps: TimelineStep[] = JSON.parse(data);

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      {title && (
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
          {title}
        </p>
      )}
      <div className="relative space-y-0">
        {steps.map((step, i) => {
          const color = step.color || "amber";
          const isLast = i === steps.length - 1;
          return (
            <div key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className={`z-10 h-4 w-4 rounded-full ring-4 ${dotColors[color]}`} />
                {!isLast && <div className="h-full w-px bg-stone-200" />}
              </div>
              <div className="flex-1 -mt-0.5">
                <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-medium ${labelColors[color]}`}>
                  {step.label}
                </span>
                <p className="mt-2 text-base font-semibold text-stone-900">{step.title}</p>
                <p className="mt-1.5 text-sm leading-7 text-stone-600">{step.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
