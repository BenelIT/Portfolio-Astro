import type { Locale } from "./types";

export const DEFAULT_LOCALE: Locale = "es";

export function normalizeLocale(value: unknown): Locale {
  return value === "en" ? "en" : DEFAULT_LOCALE;
}

export function getAlternatePath(pathname: string, locale: Locale): string {
  if (locale === "es") {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }

  if (pathname === "/en") {
    return "/";
  }

  return pathname.replace(/^\/en/, "") || "/";
}
