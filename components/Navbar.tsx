"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Trayectoria", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        const targetId = item.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(targetId);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsOpen(false);
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-border-brand/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="group flex items-center gap-1.5"
        >
          <span className="text-xl font-bold tracking-tight shimmer-text">
            ASillero
          </span>
          <span className="text-muted-brand font-mono text-base font-normal opacity-60 group-hover:opacity-100 transition-opacity">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary-brand bg-accent-brand"
                      : "text-muted-brand hover:text-foreground hover:bg-accent-brand"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-brand" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn ml-3 relative p-2.5 rounded-xl border border-border-brand/50 glass text-muted-brand hover:text-foreground hover:border-primary-brand/40 transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            title={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
          >
            <div className="relative w-[18px] h-[18px]">
              <Sun
                size={18}
                className={`absolute inset-0 transition-all duration-300 ${
                  theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
                }`}
              />
              <Moon
                size={18}
                className={`absolute inset-0 transition-all duration-300 ${
                  theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile: Theme + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn p-2.5 rounded-xl border border-border-brand/50 glass text-muted-brand hover:text-foreground transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            <div className="relative w-[18px] h-[18px]">
              <Sun
                size={18}
                className={`absolute inset-0 transition-all duration-300 ${
                  theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              />
              <Moon
                size={18}
                className={`absolute inset-0 transition-all duration-300 ${
                  theme === "light" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl border border-border-brand/50 glass text-muted-brand hover:text-foreground transition-all cursor-pointer"
            aria-label="Menu"
          >
            <div className="relative w-[24px] h-[24px]">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass border-t border-border-brand/30 px-6 py-5">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.href.substring(1)
                      ? "text-primary-brand bg-accent-brand"
                      : "text-muted-brand hover:text-foreground hover:bg-accent-brand"
                  }`}
                >
                  {activeSection === item.href.substring(1) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-brand flex-shrink-0" />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
