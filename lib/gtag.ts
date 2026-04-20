export const GA_ID = "G-EEYXKB6DKF";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function isEnabled() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host !== "localhost" && host !== "127.0.0.1";
}

export function gaEvent(name: string, params?: GtagParams) {
  if (!isEnabled()) return;
  window.gtag?.("event", name, params);
}
