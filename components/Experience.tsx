"use client";

import { Briefcase, Calendar, GraduationCap } from "lucide-react";

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  type: "job" | "education";
}

const EXPERIENCE_DATA: TimelineItem[] = [
  {
    year: "2025 - Presente",
    role: "Desarrollador Full-Stack Freelance",
    company: "Proyectos Independientes",
    description: "Diseño y construcción de aplicaciones y sitios web a medida para clientes locales e internacionales. Enfoque prioritario en rendimiento (SEO), accesibilidad (A11y), y flujos de integración continua (CI/CD).",
    type: "job",
  },
  {
    year: "2024 - 2025",
    role: "Desarrollador Web (Prácticas FP Dual)",
    company: "Empresa de Base Tecnológica",
    description: "Participación en el desarrollo del backend modular utilizando Laravel, optimización de consultas SQL en base de datos, y creación de paneles interactivos de administración en el frontend con React y Sass.",
    type: "job",
  },
  {
    year: "2023 - 2025",
    role: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
    company: "I.E.S. Formación Profesional",
    description: "Estudios especializados en tecnologías web: HTML5, CSS3, JavaScript, PHP, Java, diseño de bases de datos relacionales y no relacionales, despliegues en servidores web, y control de versiones con Git.",
    type: "education",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-y border-border-brand/40 bg-card/10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 inline-flex items-center gap-3">
            <Briefcase className="text-primary-brand" size={28} />
            Mi Trayectoria
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-border-brand/60 ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-12">
          
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Icon dot */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full border-2 border-primary-brand bg-background flex items-center justify-center text-primary-brand shadow-sm z-10">
                {item.type === "job" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
              </div>

              {/* Grid block for desktop offset */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
                
                {/* Year Label (Absolute Left on Desktop) */}
                <div className="md:col-span-3 md:absolute md:right-[calc(100%+48px)] md:top-2 md:text-right w-full">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-brand border border-border-brand/40 text-xs font-semibold text-muted-foreground">
                    <Calendar size={12} />
                    {item.year}
                  </span>
                </div>

                {/* Content Card (Right of timeline line) */}
                <div className="md:col-span-9 p-6 rounded-2xl border border-border-brand/40 bg-card/60 shadow-sm hover:border-primary-brand/30 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
                  <p className="text-sm font-semibold text-primary-brand mt-1">{item.company}</p>
                  <p className="text-sm text-muted-brand leading-relaxed mt-4">{item.description}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
