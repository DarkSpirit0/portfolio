"use client";

import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background orbs */}
      <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-violet-500/12 dark:bg-violet-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 dark:bg-fuchsia-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-8">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-brand/20 text-xs font-semibold text-primary-brand shadow-sm animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Disponible para nuevas oportunidades
          <Sparkles size={12} />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3 animate-slide-up">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Hola, soy{" "}
            <span className="shimmer-text">
              Antonio Sillero
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-muted-brand mt-1">
            Técnico Superior en{" "}
            <span className="text-foreground">Desarrollo de Aplicaciones Web</span>
          </p>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-base sm:text-lg text-muted-brand leading-relaxed animate-fade-in">
          Especializado en desarrollo full-stack con sólidos conocimientos en PHP, Laravel, APIs REST, Laravel Sanctum y SQL para crear aplicaciones web eficientes, robustas y de alto rendimiento.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2 animate-slide-up">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="group relative inline-flex items-center justify-center h-12 px-8 rounded-xl font-semibold text-sm overflow-hidden bg-primary-brand text-white shadow-lg shadow-primary-brand/25 hover:shadow-primary-brand/40 hover:scale-[1.02] transition-all duration-300"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl border border-border-brand/60 glass text-foreground font-semibold text-sm hover:border-primary-brand/50 hover:bg-accent-brand hover:scale-[1.02] transition-all duration-300"
          >
            Contactar
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-2">
          <a
            href="https://github.com/AntonioSillero"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:border-primary-brand/40 hover:scale-110 hover:shadow-lg hover:shadow-primary-brand/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/antonio-sillero"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:border-primary-brand/40 hover:scale-110 hover:shadow-lg hover:shadow-primary-brand/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:sillerortizantonio@gmail.com"
            className="group p-3 rounded-xl border border-border-brand/40 glass text-muted-brand hover:text-foreground hover:border-primary-brand/40 hover:scale-110 hover:shadow-lg hover:shadow-primary-brand/10 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5">
          <button
            onClick={(e) => handleScrollTo(e, "about")}
            className="flex flex-col items-center gap-2 text-muted-brand/60 hover:text-primary-brand transition-all duration-300 cursor-pointer"
            aria-label="Desplazar abajo"
          >
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-muted-brand/30 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-muted-brand/60 animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
