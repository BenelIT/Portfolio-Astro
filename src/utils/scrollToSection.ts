export const scrollToSection = (selector: string) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const navbar = document.querySelector("nav");
  const navbarHeight = navbar?.offsetHeight ?? 0;
  const offset = 30;

  const elementTop = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementTop - navbarHeight - offset,
    behavior: "smooth",
  });
};
