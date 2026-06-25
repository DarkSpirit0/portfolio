"use client";

import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Glowing Blurs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-brand/40 glass text-xs font-semibold text-primary-brand shadow-sm animate-pulse">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Disponible para nuevos proyectos
        </div>

        {/* Hero Title */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Francisco Carvajal
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground/80 font-sans mt-2">
            Desarrollador Full Stack & Diseñador UI/UX
          </p>
        </div>

        {/* Hero Description */}
        <p className="max-w-2xl text-base sm:text-lg text-muted-brand leading-relaxed">
          Diseño y construyo aplicaciones web robustas, interactivas y elegantes. Especializado en ecosistemas basados en React, Next.js, Laravel y tecnologías en la nube para ofrecer un rendimiento óptimo y una experiencia de usuario sobresaliente.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="flex items-center justify-center h-12 px-8 rounded-xl bg-primary-brand text-primary-foreground font-semibold shadow-lg hover:shadow-indigo-500/20 hover:opacity-90 hover:scale-[1.02] transition-all"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="flex items-center justify-center h-12 px-8 rounded-xl border border-border-brand/60 glass text-foreground font-semibold hover:bg-secondary-brand hover:scale-[1.02] transition-all"
          >
            Contactar
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:scale-110 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:francisco@example.com"
            className="p-2.5 rounded-full border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:scale-110 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={(e) => handleScrollTo(e, "about")}
            className="flex flex-col items-center gap-2 text-muted-brand hover:text-foreground transition-all duration-300 animate-bounce"
            aria-label="Desplazar abajo"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Desplazar</span>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
