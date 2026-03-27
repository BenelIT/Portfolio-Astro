import type { Locale } from "./types";

export const DEFAULT_LOCALE: Locale = "en";

export function normalizeLocale(value: unknown): Locale {
  return value === "es" ? "es" : DEFAULT_LOCALE;
}

export function getAlternatePath(pathname: string, locale: Locale): string {
  if (locale === "en") {
    // From English to Spanish: /projects/123 → /es/projects/123
    return pathname === "/" ? "/es" : `/es${pathname}`;
  }

  // From Spanish to English: /es/projects/123 → /projects/123
  if (pathname === "/es") {
    return "/";
  }

  return pathname.replace(/^\/es/, "") || "/";
}
