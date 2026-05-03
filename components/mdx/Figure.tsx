import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  variant?: "default" | "wide" | "compact";
}

export default function Figure({
  src,
  alt,
  caption,
  width = 2160,
  height = 1215,
  priority = false,
  variant = "default",
}: FigureProps) {
  const maxWidth =
    variant === "wide" ? "100%" : variant === "compact" ? "720px" : "960px";

  return (
    <figure
      className="my-10 mx-auto"
      style={{ maxWidth }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          border: "1px solid var(--rule)",
          borderRadius: 6,
          background: "var(--bg-soft, #fafafa)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 960px"
          className="w-full h-auto block"
        />
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-center"
          style={{
            fontFamily: "var(--f-mono), monospace",
            fontSize: 12,
            letterSpacing: "0.05em",
            color: "var(--ink-soft, #666)",
            lineHeight: 1.5,
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
