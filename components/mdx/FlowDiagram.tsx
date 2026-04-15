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

function Node({ node, isRoot }: { node: FlowNode; isRoot?: boolean }) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <div
        className="px-4 py-2 text-center"
        style={{
          border: "1px solid var(--rule)",
          background: isRoot ? "var(--ink)" : "var(--paper)",
          color: isRoot ? "var(--paper)" : "var(--ink)",
          minWidth: isRoot ? 160 : 120,
        }}
      >
        <p
          className="m-0"
          style={{
            fontFamily: "var(--f-zh-body), sans-serif",
            fontSize: isRoot ? 15 : 13,
            fontWeight: 500,
          }}
        >
          {node.label}
        </p>
        {node.sub && (
          <p
            className="m-0 mt-1"
            style={{
              fontFamily: "var(--f-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            {node.sub}
          </p>
        )}
      </div>

      {hasChildren && (
        <>
          <div className="h-6 w-px" style={{ background: "var(--rule)" }} />
          <div className="relative flex items-start gap-4 sm:gap-6">
            {node.children!.length > 1 && (
              <div
                className="absolute top-0 h-px"
                style={{
                  background: "var(--rule)",
                  left: `${100 / (2 * node.children!.length)}%`,
                  right: `${100 / (2 * node.children!.length)}%`,
                }}
              />
            )}
            {node.children!.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-6 w-px" style={{ background: "var(--rule)" }} />
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
    <div
      className="my-10 overflow-x-auto py-8"
      style={{
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
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
      <div className="flex justify-center">
        <Node node={tree} isRoot />
      </div>
    </div>
  );
}
