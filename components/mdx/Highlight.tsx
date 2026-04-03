interface HighlightProps {
  text: string;
  sub?: string;
  variant?: "warm" | "dark" | "teal";
}

const variants = {
  warm: "border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900",
  dark: "border-stone-800 bg-stone-950 text-white",
  teal: "border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-900",
};

const subColors = {
  warm: "text-amber-700",
  dark: "text-stone-400",
  teal: "text-teal-700",
};

export default function Highlight({ text, sub, variant = "warm" }: HighlightProps) {
  return (
    <div className={`my-8 rounded-2xl border-2 px-8 py-7 ${variants[variant]}`}>
      <p className="text-xl font-semibold leading-relaxed sm:text-2xl">{text}</p>
      {sub && (
        <p className={`mt-3 text-sm leading-7 ${subColors[variant]}`}>{sub}</p>
      )}
    </div>
  );
}
