"use client";

import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  type: "job" | "education";
}

const EXPERIENCE_DATA: TimelineItem[] = [
  {
    year: "Oct 2025 – Dic 2025",
    role: "Prácticas de Formación Profesional (Desarrollo Web)",
    company: "EYM Hermanos S.L. · Montalbán de Córdoba",
    description: "Colaboración activa en el desarrollo, depuración y mantenimiento de portales y aplicaciones web para clientes locales y corporativos.",
    type: "job",
  },
  {
    year: "2023 – 2026",
    role: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
    company: "I.E.S. Francisco de los Ríos · Fernán Núñez",
    description: "Formación integral en tecnologías de desarrollo web frontend y backend, bases de datos SQL, metodologías de control de versiones y despliegue de aplicaciones.",
    type: "education",
  },
  {
    year: "Mar 2023 – Jun 2023",
    role: "Prácticas de Formación Profesional (Sistemas y Redes)",
    company: "EYM Hermanos S.L. · Montalbán de Córdoba",
    description: "Labores de ensamblado de hardware, diagnóstico de fallos, configuración de redes de datos y mantenimiento preventivo de equipos informáticos.",
    type: "job",
  },
  {
    year: "2021 – 2023",
    role: "Técnico en Sistemas Microinformáticos y Redes",
    company: "I.E.S. Profesor Tierno Galván · La Rambla",
    description: "Estudios orientados al soporte técnico de hardware y software, administración de sistemas operativos y despliegue de redes locales.",
    type: "education",
  },
];

const typeConfig = {
  job: {
    icon: <Briefcase size={14} />,
    badge: "Experiencia",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10 dark:bg-violet-500/15",
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-500/20",
  },
  education: {
    icon: <GraduationCap size={14} />,
    badge: "Formación",
    color: "from-fuchsia-500 to-pink-600",
    bg: "bg-fuchsia-500/10 dark:bg-fuchsia-500/15",
    text: "text-fuchsia-600 dark:text-fuchsia-400",
    border: "border-fuchsia-500/20",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-background-alt relative overflow-hidden">

      <div className="absolute inset-0 bg-dots-pattern opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-brand border border-border-brand/50 text-xs font-semibold text-primary-brand mb-4">
            <Briefcase size={12} />
            Trayectoria
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Mi Trayectoria
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-purple-500/40 to-transparent" />

          <div className="flex flex-col gap-10">
            {EXPERIENCE_DATA.map((item, index) => {
              const conf = typeConfig[item.type];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`md:absolute md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${conf.color} flex items-center justify-center text-white shadow-md z-10 mt-1`}>
                    {conf.icon}
                  </div>

                  {/* Card */}
                  <div className={`card-hover flex-1 md:w-[calc(50%-3rem)] ${isEven ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"} md:max-w-none max-w-full pl-0 md:pl-0`}>
                    <div className="bg-card border border-border-brand/40 rounded-2xl p-6 shadow-sm dark:shadow-black/20">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${conf.bg} ${conf.text} ${conf.border} border`}>
                          {conf.icon}
                          {conf.badge}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-brand font-medium">
                          <Calendar size={11} />
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-foreground leading-snug">{item.role}</h3>
                      <p className={`text-sm font-semibold ${conf.text} mt-1 mb-3`}>{item.company}</p>
                      <p className="text-sm text-muted-brand leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
