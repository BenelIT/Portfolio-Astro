import { cn } from "@/lib/utils";
import { scrollToSection } from "@/utils/scrollToSection";
import { useScrolled } from "@/hooks/useScrolled";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const isScrolled = useScrolled(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 500);
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "py-2 sm:py-3 mx-2 sm:mx-4 lg:mx-10 mt-2 sm:mt-4 rounded-full backdrop-blur-lg shadow-lg transition-all duration-500 supports-backdrop-filter:bg-white/30 glass shadow-glass"
            : "py-4 sm:py-6 bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className={cn(
              "font-display font-bold transition-all duration-500",
              isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl",
            )}
          >
            <span className="text-gradient">Cristóbal Chambé</span>
          </a>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "relative px-3 lg:px-5 py-2.5 rounded-full font-medium",
                    "duration-500 text-slate-800/90 ease-out",
                    "backdrop-blur-sm border border-transparent",

                    "hover:backdrop-blur-md hover:border-white/40",
                    "hover:shadow-glass-hover hover:scale-[1.02]",

                    isScrolled
                      ? [
                          "text-xs lg:text-sm",
                          "bg-white/15",
                          "hover:bg-white/55 hover:scale-[1.02]",
                          "shadow-sm shadow-black/5",
                        ]
                      : [
                          "text-sm lg:text-base",
                          "bg-white/10 hover:bg-white/20",
                          "shadow-lg shadow-black/10",
                        ],
                  )}
                >
                  {link.label}

                  <span
                    className={cn(
                      "absolute inset-0 rounded-full -z-10 transition-opacity duration-500",
                      "bg-linear-to-br from-white/20 to-transparent",
                      "opacity-20 hover:opacity-100",
                    )}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Download Button */}
          <button
            className={cn(
              "cursor-pointer hidden md:block font-medium rounded-xl backdrop-blur-md transition-all duration-500 hover:shadow-glass-hover hover:scale-105",
              isScrolled
                ? "bg-transparent text-slate-700 border border-slate-500 px-3 lg:px-4 py-2 text-xs lg:text-sm hover:bg-white/20"
                : "bg-white/30 text-slate-800 border border-white/50 px-4 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base hover:bg-white/40",
            )}
            onClick={() => handleNavClick("#contact")}
          >
            <span className="hidden lg:inline">Download resume</span>
            <span className="lg:hidden">Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
            }
            className="md:hidden p-2 rounded-lg backdrop-blur-md transition-all duration-500 relative z-60"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-800" />
            ) : (
              <Menu className="w-5 h-5 text-slate-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 top-20">
          {/* Backdrop */}
          <div
            className={cn(
              "absolute inset-0 backdrop-blur-sm transition-opacity duration-500",
              isClosing ? "opacity-0" : "opacity-100",
            )}
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div
            className={cn(
              "absolute top-4 left-4 right-4 backdrop-blur-3xl bg-linear-to-br from-white/80 to-white/60",
              "border border-white/50 rounded-3xl p-6 shadow-2xl transition-all duration-500",
              isClosing
                ? "animate-out slide-out-to-top opacity-0 scale-95"
                : "animate-in slide-in-from-top opacity-100 scale-100",
            )}
          >
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block px-4 py-3 rounded-xl font-medium text-slate-800 transition-all duration-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-6 py-3 bg-white/60 text-slate-800 border border-white rounded-2xl transition-all duration-500"
              >
                Download resume
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
