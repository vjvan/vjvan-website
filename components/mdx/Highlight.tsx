interface HighlightProps {
  text: string;
  sub?: string;
  variant?: "warm" | "dark" | "teal";
}

export default function Highlight({ text, sub }: HighlightProps) {
  return (
    <div
      className="my-10 max-w-[640px]"
      style={{
        borderLeft: "2px solid var(--signal)",
        paddingLeft: "1.5rem",
      }}
    >
      <p
        className="m-0"
        style={{
          fontFamily: "var(--f-zh-display), serif",
          fontSize: 24,
          lineHeight: 1.45,
          fontWeight: 400,
          color: "var(--ink)",
          letterSpacing: "0.01em",
        }}
      >
        {text}
      </p>
      {sub && (
        <p
          className="mt-3 m-0"
          style={{
            fontFamily: "var(--f-zh-body), sans-serif",
            fontSize: 15,
            lineHeight: 1.75,
            color: "var(--ink-muted)",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
