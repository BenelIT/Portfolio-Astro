import type { Locale } from "@/i18n/types";

interface FloatingLanguageSwitcherProps {
  locale: Locale;
  switchToPath: string;
}

export const FloatingLanguageSwitcher = ({
  locale,
  switchToPath,
}: FloatingLanguageSwitcherProps) => {
  const nextLocale = locale === "es" ? "en" : "es";

  const labels = {
    es: {
      current: "ES",
      next: "EN",
      aria: "Cambiar idioma a inglés",
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
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/35 px-4 py-3 text-xs font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-white/55 hover:scale-110 shadow-lg hover:shadow-xl md:bottom-8 md:right-8"
    >
      <span className="opacity-60">{labels[locale].current}</span>
      <span className="opacity-40">/</span>
      <span>{labels[locale].next}</span>
    </a>
  );
};
