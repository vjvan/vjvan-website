type DateRailProps = {
  date: string;
  readingTime: string;
  tags: string[];
};

function formatTag(tag: string) {
  return `#${tag.toUpperCase()}`;
}

export default function DateRail({ date, readingTime, tags }: DateRailProps) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = String(d.getDate()).padStart(2, "0");

  return (
    <aside
      className="text-[12px] tracking-[0.08em] text-[color:var(--ink-muted)] leading-[1.8] md:sticky md:top-20 self-start"
      style={{ fontFamily: "var(--f-zh-body), sans-serif" }}
    >
      <strong
        className="block font-medium mb-2"
        style={{ color: "var(--signal)" }}
      >
        {year}
      </strong>
      {month} 月 · {day} 日
      <br />
      觀點筆記
      <br />
      {readingTime}
      <br />
      <br />
      <div className="grid gap-1">
        {tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="block"
            style={{ fontSize: 12, lineHeight: 1.5, letterSpacing: "0.04em" }}
          >
            {formatTag(tag)}
          </span>
        ))}
      </div>
    </aside>
  );
}
