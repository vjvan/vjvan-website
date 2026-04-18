import "./landing.css";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="landing-root">{children}</div>;
}
