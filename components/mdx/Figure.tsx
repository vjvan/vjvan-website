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
  const variantStyles: Record<NonNullable<FigureProps["variant"]>, {
    maxWidth: string;
    sizes: string;
  }> = {
    default: {
      maxWidth: "960px",
      sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 960px",
    },
    wide: {
      maxWidth: "100%",
      sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px",
    },
    compact: {
      maxWidth: "720px",
      sizes: "(max-width: 768px) 100vw, 720px",
    },
  };

  const { maxWidth, sizes } = variantStyles[variant];

  return (
    <figure
      className="figure-mdx my-10 mx-auto"
      style={{ maxWidth, marginLeft: "auto", marginRight: "auto" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="w-full h-auto block"
        style={{ borderRadius: 6 }}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
