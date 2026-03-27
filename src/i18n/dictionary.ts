import type { Locale } from "./types";

const dictionary = {
  seo: {
    title: {
      es: "Cristobal Chambe - Desarrollador de software centrado en la claridad y la arquitectura",
      en: "Cristobal Chambe - Software developer focused on clarity and architecture",
    },
    description: {
      es: "Construyo sistemas mantenibles, con arquitectura limpia y enfoque a largo plazo.",
      en: "I build maintainable systems with clean architecture and a long-term mindset.",
    },
  },
  navbar: {
    links: {
      es: [
        { label: "Inicio", href: "#hero" },
        { label: "Sobre mi", href: "#about" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
      ],
      en: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
    downloadCvLong: {
      es: "Descargar Currículum",
      en: "Download Resume",
    },
    downloadCvShort: {
      es: "currículum",
      en: "resume",
    },
    toggleMenuAria: {
      es: "Alternar menu",
      en: "Toggle menu",
    },
  },
  footer: {
    copyrightName: "Cristobal De Jesus Coronel Chambe",
  },
} as const;

export function getDictionary(locale: Locale) {
  return {
    seo: {
      title: dictionary.seo.title[locale],
      description: dictionary.seo.description[locale],
    },
    navbar: {
      links: dictionary.navbar.links[locale],
      downloadCvLong: dictionary.navbar.downloadCvLong[locale],
      downloadCvShort: dictionary.navbar.downloadCvShort[locale],
      toggleMenuAria: dictionary.navbar.toggleMenuAria[locale],
    },
    footer: dictionary.footer,
  };
}
