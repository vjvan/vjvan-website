import { NextRequest, NextResponse } from "next/server";

const LOCALE_COOKIE = "vjvan_locale";
const ZH_PATH = "/courses/prompt-to-pixel";
const EN_PATH = "/en/courses/prompt-to-pixel";

function prefersEnglish(acceptLanguage: string | null): boolean {
  if (!acceptLanguage) return false;
  const ranges = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";");
      const q = qPart?.startsWith("q=") ? parseFloat(qPart.slice(2)) : 1;
      return { tag: tag.toLowerCase(), q: Number.isNaN(q) ? 1 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranges) {
    if (tag.startsWith("zh")) return false;
    if (tag.startsWith("en")) return true;
  }
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (pathname === ZH_PATH) {
    if (cookieLocale === "en") {
      return NextResponse.redirect(new URL(EN_PATH, request.url), 307);
    }
    if (!cookieLocale && prefersEnglish(request.headers.get("accept-language"))) {
      return NextResponse.redirect(new URL(EN_PATH, request.url), 307);
    }
  }

  if (pathname === EN_PATH) {
    if (cookieLocale === "zh") {
      return NextResponse.redirect(new URL(ZH_PATH, request.url), 307);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/courses/prompt-to-pixel", "/en/courses/prompt-to-pixel"],
};
