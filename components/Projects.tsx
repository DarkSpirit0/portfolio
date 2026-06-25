"use client";

import { FolderGit2, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  accent: string;
  iconGradient: string;
  icon: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "Plataforma de Historias Web",
    subtitle: "Trabajo de Fin de Grado (TFG)",
    description: [
      "Desarrollo de una plataforma de publicación de historias similar a Wattpad.",
      "Implementación de autenticación mediante tokens con Laravel Sanctum.",
      "Creación de API REST para gestión de usuarios, historias y capítulos.",
      "Desarrollo de interfaz SPA con Vue.js para una experiencia dinámica.",
    ],
    tags: ["Laravel", "Vue.js", "SQLite", "Sanctum", "REST API"],
    githubUrl: "https://github.com/AntonioSillero",
    liveUrl: undefined,
    accent: "from-violet-500 to-purple-600",
    iconGradient: "from-violet-500 to-purple-700",
    icon: "</>",
  },
  {
    title: "Aplicación de Gestión de Clientes",
    subtitle: "Proyecto de Desarrollo Web",
    description: [
      "Sistema CRUD para la gestión de clientes y servicios.",
      "Diseño de base de datos relacional y optimización de consultas.",
      "Validaciones en backend y frontend.",
      "Control de acceso y roles de usuario.",
    ],
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/AntonioSillero",
    liveUrl: undefined,
    accent: "from-fuchsia-500 to-pink-600",
    iconGradient: "from-fuchsia-500 to-pink-700",
    icon: "👤",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-brand border border-border-brand/50 text-xs font-semibold text-primary-brand mb-4">
            <FolderGit2 size={12} />
            Proyectos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Proyectos Destacados
          </h2>
          <p className="text-muted-brand max-w-xl mx-auto text-sm sm:text-base mt-3">
            Proyectos desarrollados durante mi formación que demuestran mis capacidades técnicas y mi enfoque en soluciones reales.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Projects — stacked cards layout */}
        <div className="flex flex-col gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <article
              key={index}
              className="card-hover group grid grid-cols-1 md:grid-cols-12 gap-0 rounded-2xl border border-border-brand/40 overflow-hidden bg-card dark:bg-card shadow-sm dark:shadow-black/20"
            >
              {/* Left Accent Panel */}
              <div className={`md:col-span-3 relative bg-gradient-to-br ${project.accent} flex flex-col items-center justify-center p-8 gap-4 min-h-[140px] md:min-h-0`}>
                {/* Big number watermark */}
                <span className="absolute bottom-2 right-3 text-white/10 font-extrabold text-7xl select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon circle */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl shadow-lg">
                  {project.icon}
                </div>

                {/* Tags column for mobile */}
                <div className="relative z-10 flex flex-wrap justify-center gap-1.5 md:hidden">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/15 text-white border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Content Panel */}
              <div className="md:col-span-9 p-7 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary-brand transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-muted-brand mt-0.5 font-medium">{project.subtitle}</p>
                    )}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border border-border-brand/60 text-muted-brand hover:text-foreground hover:border-primary-brand/50 hover:bg-accent-brand transition-all"
                  >
                    <GithubIcon size={14} />
                    Ver código
                  </a>
                </div>

                {/* Tags — desktop */}
                <div className="hidden md:flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-brand text-muted-foreground border border-border-brand/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description bullets */}
                <ul className="flex flex-col gap-2.5">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-brand leading-relaxed">
                      <CheckCircle2 size={15} className="flex-shrink-0 text-primary-brand mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Live link (optional) */}
                {project.liveUrl && (
                  <div className="pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-brand hover:underline"
                    >
                      Ver demo en vivo
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
