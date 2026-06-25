"use client";

import Image from "next/image";
import { FolderGit2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "E-Commerce de Cerámica de Autor",
    description: "Una tienda online premium para venta de cerámica artesanal de alta gama, con panel de administración completo, carrito interactivo, pasarela de pago Stripe e integración de inventario en tiempo real.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Dashboard SaaS Analítico",
    description: "Panel de control analítico en tiempo real que procesa métricas financieras y operativas de usuarios en formato gráfico interactivo, exportación de reportes PDF/CSV y sistema de alertas personalizables.",
    image: "/projects/dashboard.png",
    tags: ["React", "Laravel API", "Recharts", "MySQL", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "HabitFlow - Habit Tracker App",
    description: "Aplicación móvil multiplataforma para el seguimiento diario de hábitos, rutinas y objetivos con recordatorios automáticos por notificaciones push, estadísticas semanales e insignias de gamificación.",
    image: "/projects/mobile_app.png",
    tags: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 inline-flex items-center gap-3">
            <FolderGit2 className="text-primary-brand" size={28} />
            Mis Proyectos
          </h2>
          <p className="text-muted-brand max-w-xl mx-auto text-sm sm:text-base mt-2">
            Una selección de los trabajos más recientes que demuestran mi capacidad para resolver problemas reales con tecnologías modernas.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-2xl border border-border-brand/40 overflow-hidden bg-card hover:border-primary-brand/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-muted-brand/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
                
                {/* Hover overlay link option */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-md"
                    title="Código en GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary-brand text-primary-foreground hover:scale-110 transition-transform shadow-md"
                    title="Demo en Vivo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-brand transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-brand leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-brand text-muted-foreground border border-border-brand/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-border-brand/40 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-muted-brand hover:text-foreground transition-colors"
                  >
                    <GithubIcon size={16} />
                    Código
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary-brand hover:underline"
                  >
                    Demo En Vivo
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
