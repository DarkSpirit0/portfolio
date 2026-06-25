"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  const links = [
    { label: "Sobre mí", id: "about" },
    { label: "Proyectos", id: "projects" },
    { label: "Trayectoria", id: "experience" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <footer className="border-t border-border-brand/30 bg-background py-12 relative overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-brand/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="inline-flex items-center gap-1"
            >
              <span className="text-xl font-bold shimmer-text">ASillero</span>
              <span className="text-muted-brand font-mono text-sm opacity-60">.dev</span>
            </a>
            <p className="text-xs text-muted-brand mt-1.5 max-w-[200px]">
              Técnico Superior en Desarrollo de Aplicaciones Web.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-1 flex-wrap justify-center">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="px-3.5 py-1.5 rounded-lg text-sm text-muted-brand hover:text-foreground hover:bg-accent-brand transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AntonioSillero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:border-primary-brand/40 hover:scale-105 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/in/antonio-sillero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:border-primary-brand/40 hover:scale-105 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:sillerortizantonio@gmail.com"
                className="p-2.5 rounded-xl border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:border-primary-brand/40 hover:scale-105 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="text-[11px] text-muted-brand">
              &copy; {currentYear} Antonio Sillero Ortiz. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
