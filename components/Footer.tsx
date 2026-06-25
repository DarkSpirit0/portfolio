"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-border-brand/40 bg-background py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo/Name */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="text-xl font-bold tracking-tight text-foreground"
          >
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              FCar
            </span>
            <span className="text-muted-brand font-mono text-sm font-normal">.dev</span>
          </a>
          <p className="text-xs text-muted-brand mt-1.5">
            Diseñando y construyendo el futuro de la web.
          </p>
        </div>

        {/* Quick links */}
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "about")}
            className="text-muted-brand hover:text-foreground transition-colors"
          >
            Sobre mí
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="text-muted-brand hover:text-foreground transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#experience"
            onClick={(e) => handleScrollTo(e, "experience")}
            className="text-muted-brand hover:text-foreground transition-colors"
          >
            Trayectoria
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="text-muted-brand hover:text-foreground transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-brand hover:text-foreground hover:scale-105 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-brand hover:text-foreground hover:scale-105 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:francisco@example.com"
              className="text-muted-brand hover:text-foreground hover:scale-105 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <p className="text-[10px] sm:text-xs text-muted-brand">
            &copy; {currentYear} Francisco Carvajal. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
