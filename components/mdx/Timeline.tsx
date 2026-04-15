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

export default function Timeline({ data, title }: TimelineProps) {
  const steps: TimelineStep[] = JSON.parse(data);

  return (
    <div className="my-10 max-w-[640px]">
      {title && (
        <p
          className="m-0 mb-6"
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
      <div className="relative">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <div key={step.title} className="relative flex gap-6 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div
                  className="z-10"
                  style={{
                    width: 8,
                    height: 8,
                    background: "var(--signal)",
                  }}
                />
                {!isLast && (
                  <div
                    className="h-full w-px mt-1"
                    style={{ background: "var(--rule)" }}
                  />
                )}
              </div>
              <div className="flex-1 -mt-1">
                <div
                  style={{
                    fontFamily: "var(--f-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}
                >
                  {step.label}
                </div>
                <p
                  className="m-0 mt-2"
                  style={{
                    fontFamily: "var(--f-zh-display), serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  {step.title}
                </p>
                <p
                  className="m-0 mt-2"
                  style={{
                    fontFamily: "var(--f-zh-body), sans-serif",
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "var(--ink-muted)",
                  }}
                >
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
