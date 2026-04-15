type DateRailProps = {
  date: string;
  readingTime: string;
  tags: string[];
};

export default function DateRail({ date, readingTime, tags }: DateRailProps) {
  const d = new Date(date);
  const year = d.getFullYear();
  const monthShort = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = String(d.getDate()).padStart(2, "0");

  return (
    <aside
      className="font-mono text-[11px] tracking-[0.12em] uppercase text-[color:var(--ink-muted)] leading-[1.8] md:sticky md:top-20 self-start"
      style={{ fontFamily: "var(--f-mono), monospace" }}
    >
      <strong
        className="block font-medium mb-2"
        style={{ color: "var(--signal)" }}
      >
        {year}
      </strong>
      {monthShort} · {day}
      <br />
      FIELD NOTES
      <br />
      {readingTime.replace("分鐘閱讀", "MIN").replace(" ", "")}
      <br />
      <br />
      {tags.slice(0, 4).map((tag) => (
        <span key={tag} className="block">
          #{tag.toUpperCase()}
        </span>
      ))}
    </aside>
  );
}
