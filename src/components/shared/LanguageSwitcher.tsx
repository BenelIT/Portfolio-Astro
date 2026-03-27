import type { Locale } from "@/i18n/types";

interface LanguageSwitcherProps {
  locale: Locale;
  switchToPath: string;
  className?: string;
}

export const LanguageSwitcher = ({
  locale,
  switchToPath,
  className,
}: LanguageSwitcherProps) => {
  const nextLocale = locale === "es" ? "en" : "es";

  const labels = {
    es: {
      current: "ES",
      next: "EN",
      aria: "Cambiar idioma a ingles",
    },
    en: {
      current: "EN",
      next: "ES",
      aria: "Switch language to Spanish",
    },
  } as const;

  const onSwitch = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferred-language", nextLocale);
    }
  };

  return (
    <a
      href={switchToPath}
      onClick={onSwitch}
      aria-label={labels[locale].aria}
      className={
        className ??
        "inline-flex items-center gap-2 rounded-xl border border-white/50 bg-white/35 px-3 py-2 text-xs font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-white/55"
      }
    >
      <span className="opacity-60">{labels[locale].current}</span>
      <span className="opacity-40">/</span>
      <span>{labels[locale].next}</span>
    </a>
  );
};
