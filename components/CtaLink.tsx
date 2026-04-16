import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "default";
type Arrow = "right" | "left" | "none";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  arrow?: Arrow;
  className?: string;
};

type InternalProps = BaseProps & {
  href: ComponentProps<typeof Link>["href"];
  external?: false;
};

type ExternalProps = BaseProps & {
  href: string;
  external: true;
};

type CtaLinkProps = InternalProps | ExternalProps;

const arrowChar = { right: "→", left: "←", none: "" } as const;

function Inner({ children, arrow = "right" }: Pick<BaseProps, "children" | "arrow">) {
  if (arrow === "left") {
    return (
      <>
        <span aria-hidden="true" style={{ marginRight: 4 }}>
          {arrowChar.left}
        </span>
        <span
          style={{
            borderBottom: "1px solid currentColor",
            paddingBottom: 2,
          }}
        >
          {children}
        </span>
      </>
    );
  }
  return (
    <>
      <span
        style={{
          borderBottom: "1px solid currentColor",
          paddingBottom: 2,
        }}
      >
        {children}
      </span>
      {arrow === "right" && (
        <span aria-hidden="true" style={{ marginLeft: 6 }}>
          {arrowChar.right}
        </span>
      )}
    </>
  );
}

export default function CtaLink(props: CtaLinkProps) {
  const { children, variant = "default", arrow = "right", className = "" } = props;
  const color = variant === "primary" ? "var(--signal)" : "var(--ink)";

  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "baseline",
    color,
    fontFamily: "inherit",
  };

  if ("external" in props && props.external) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={className}
        style={style}
      >
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    );
  }

  return (
    <Link href={props.href} className={className} style={style}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}
