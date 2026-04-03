interface FlowNode {
  label: string;
  sub?: string;
  color?: "dark" | "amber" | "teal" | "stone";
  children?: FlowNode[];
}

interface FlowDiagramProps {
  title?: string;
  data: string;
}

const nodeColors = {
  dark: "bg-stone-950 text-white border-stone-700",
  amber: "bg-amber-50 text-amber-900 border-amber-300",
  teal: "bg-teal-50 text-teal-900 border-teal-300",
  stone: "bg-stone-100 text-stone-800 border-stone-300",
};

function Node({ node, isRoot }: { node: FlowNode; isRoot?: boolean }) {
  const color = node.color || (isRoot ? "dark" : "stone");
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-xl border-2 px-5 py-3 text-center shadow-sm ${nodeColors[color]}`}
      >
        <p className={`font-semibold ${isRoot ? "text-base" : "text-sm"}`}>
          {node.label}
        </p>
        {node.sub && (
          <p className="mt-0.5 text-xs opacity-70">{node.sub}</p>
        )}
      </div>

      {hasChildren && (
        <>
          <div className="h-6 w-px bg-stone-300" />
          <div className="relative flex items-start gap-4 sm:gap-6">
            {node.children!.length > 1 && (
              <div
                className="absolute top-0 h-px bg-stone-300"
                style={{
                  left: `${100 / (2 * node.children!.length)}%`,
                  right: `${100 / (2 * node.children!.length)}%`,
                }}
              />
            )}
            {node.children!.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-6 w-px bg-stone-300" />
                <Node node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function FlowDiagram({ title, data }: FlowDiagramProps) {
  const tree: FlowNode = JSON.parse(data);
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      {title && (
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
          {title}
        </p>
      )}
      <div className="flex justify-center">
        <Node node={tree} isRoot />
      </div>
    </div>
  );
}
