"use client";

import { Cpu, BookOpen, Brain, Globe, CheckCircle2 } from "lucide-react";

interface SkillItem {
  name: string;
  detail?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  accent: string;
  iconBg: string;
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Backend",
    icon: <Cpu size={18} />,
    accent: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    skills: [
      { name: "PHP", detail: "Principal" },
      { name: "Laravel", detail: "Framework" },
      { name: "APIs REST", detail: "Integración" },
      { name: "Laravel Sanctum", detail: "Autenticación" },
    ],
  },
  {
    title: "Frontend",
    icon: <Globe size={18} />,
    accent: "from-purple-500 to-fuchsia-600",
    iconBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    skills: [
      { name: "HTML5", detail: "Estructura" },
      { name: "CSS3", detail: "Estilos" },
      { name: "JavaScript (ES6+)", detail: "Lógica" },
      { name: "Vue.js (Vue 3)", detail: "Framework" },
    ],
  },
  {
    title: "Bases de Datos",
    icon: <BookOpen size={18} />,
    accent: "from-fuchsia-500 to-pink-600",
    iconBg: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
    skills: [
      { name: "MySQL", detail: "Relacional" },
      { name: "SQLite", detail: "Ligera" },
    ],
  },
  {
    title: "Herramientas",
    icon: <Brain size={18} />,
    accent: "from-pink-500 to-rose-600",
    iconBg: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    skills: [
      { name: "Git / GitHub", detail: "Control de versiones" },
      { name: "Visual Studio Code", detail: "IDE" },
      { name: "Postman", detail: "APIs" },
      { name: "Bootstrap / Tailwind CSS", detail: "CSS Framework" },
    ],
  },
];

const SOFT_SKILLS = [
  "Resolución de problemas",
  "Trabajo en equipo",
  "Aprendizaje rápido",
  "Orientación a resultados",
  "Comunicación efectiva",
];

const LANGUAGES = [
  { name: "Español", level: "Nativo", pct: 100 },
  { name: "Inglés", level: "B1 (Intermedio)", pct: 50 },
];

const OTHER_INFO = [
  "Carnet de conducir B y vehículo propio",
  "Disponibilidad para incorporación inmediata",
  "Interés en seguir formándome y adquirir nuevos conocimientos",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-background relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-brand border border-border-brand/50 text-xs font-semibold text-primary-brand mb-4">
            <Cpu size={12} />
            Habilidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Habilidades y Aptitudes
          </h2>
          <p className="text-muted-brand max-w-lg mx-auto text-sm sm:text-base mt-3">
            Tecnologías, competencias, idiomas y datos clave de mi perfil profesional.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Technologies Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {SKILLS_DATA.map((category, index) => (
            <div
              key={index}
              className="card-hover group relative bg-card border border-border-brand/40 rounded-2xl overflow-hidden"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${category.accent}`} />
              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`p-2 rounded-lg ${category.iconBg}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{category.title}</h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-2 group/item">
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle2
                          size={13}
                          className={`flex-shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity ${category.iconBg.split(" ")[1]}`}
                        />
                        <span className="text-xs font-medium text-foreground/80 group-hover/item:text-foreground transition-colors truncate">
                          {skill.name}
                        </span>
                      </div>
                      {skill.detail && (
                        <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full font-semibold bg-accent-brand text-muted-foreground border border-border-brand/40 whitespace-nowrap">
                          {skill.detail}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: Soft Skills + Languages + Other */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Soft Skills */}
          <div className="card-hover bg-card border border-border-brand/40 rounded-2xl overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-purple-600" />
            <div className="p-5">
              <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Brain size={15} />
                </span>
                Competencias
              </h3>
              <ul className="flex flex-col gap-2.5">
                {SOFT_SKILLS.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                    <CheckCircle2 size={13} className="flex-shrink-0 text-violet-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div className="card-hover bg-card border border-border-brand/40 rounded-2xl overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500 to-pink-600" />
            <div className="p-5">
              <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400">
                  <Globe size={15} />
                </span>
                Idiomas
              </h3>
              <div className="flex flex-col gap-5">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-foreground">{lang.name}</span>
                      <span className="text-[11px] font-medium text-muted-brand">{lang.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-border-brand/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full transition-all duration-700"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other info */}
          <div className="card-hover bg-card border border-border-brand/40 rounded-2xl overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-rose-600" />
            <div className="p-5">
              <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400">
                  <BookOpen size={15} />
                </span>
                Otros Datos
              </h3>
              <ul className="flex flex-col gap-2.5">
                {OTHER_INFO.map((info) => (
                  <li key={info} className="flex items-start gap-2 text-xs font-medium text-foreground/80 leading-relaxed">
                    <CheckCircle2 size={13} className="flex-shrink-0 text-pink-500 mt-0.5" />
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
