"use client";

import { Cpu, Layout, Database, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: "Avanzado" | "Intermedio" | "Básico";
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layout className="text-indigo-500" size={20} />,
    skills: [
      { name: "React", level: "Avanzado" },
      { name: "Next.js", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Avanzado" },
      { name: "JavaScript (ES6+)", level: "Avanzado" },
      { name: "HTML5 & CSS3", level: "Avanzado" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="text-purple-500" size={20} />,
    skills: [
      { name: "Laravel (PHP)", level: "Avanzado" },
      { name: "Node.js", level: "Intermedio" },
      { name: "Express.js", level: "Intermedio" },
      { name: "MySQL / MariaDB", level: "Avanzado" },
      { name: "PostgreSQL", level: "Intermedio" },
      { name: "MongoDB", level: "Intermedio" },
    ],
  },
  {
    title: "Herramientas & DevOps",
    icon: <Wrench className="text-pink-500" size={20} />,
    skills: [
      { name: "Git / GitHub", level: "Avanzado" },
      { name: "Docker", level: "Intermedio" },
      { name: "REST APIs", level: "Avanzado" },
      { name: "Postman", level: "Avanzado" },
      { name: "Linux / Bash", level: "Intermedio" },
      { name: "Figma (UI Design)", level: "Intermedio" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 inline-flex items-center gap-3">
            <Cpu className="text-primary-brand" size={28} />
            Habilidades Técnicas
          </h2>
          <p className="text-muted-brand max-w-xl mx-auto text-sm sm:text-base mt-2">
            Las tecnologías, lenguajes y herramientas que utilizo diariamente para dar vida a los proyectos.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border-brand/40 bg-card hover:border-primary-brand/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-brand/40">
                {category.icon}
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <ul className="flex flex-col gap-4 flex-1">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm font-semibold text-foreground/90 group-hover:text-primary-brand transition-colors">
                      {skill.name}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                        skill.level === "Avanzado"
                          ? "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
                          : skill.level === "Intermedio"
                          ? "bg-purple-500/10 text-purple-500 border-purple-500/20"
                          : "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
