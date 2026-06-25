"use client";

import { Download, User, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 bg-background-alt relative overflow-hidden">

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-brand border border-border-brand/50 text-xs font-semibold text-primary-brand mb-4">
            <User size={12} />
            Sobre mí
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            ¿Quién soy?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative w-72 rounded-2xl overflow-hidden border border-border-brand/50 bg-card shadow-xl dark:shadow-black/40 transition-transform duration-500 group-hover:-translate-y-1">
                {/* Top gradient bar */}
                <div className="h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" />

                <div className="p-8 flex flex-col items-center text-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shadow-violet-500/30 animate-float">
                      AS
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-card flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground">Antonio Sillero Ortiz</h3>
                    <p className="text-sm text-primary-brand font-medium mt-0.5">Técnico Superior en DAW</p>
                  </div>

                  <div className="w-full h-px bg-border-brand/50" />

                  {/* Location tag */}
                  <div className="flex items-center gap-2 text-xs text-muted-brand">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Montalbán de Córdoba, España
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xs text-muted-brand leading-relaxed italic border-l-2 border-primary-brand/40 pl-3 text-left">
                    &ldquo;Me considero proactivo, responsable y con gran capacidad de aprendizaje. Disfruto trabajando en equipo y afrontando retos que me permitan crecer profesionalmente.&rdquo;
                  </blockquote>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                    {["PHP", "Laravel", "SQL"].map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-accent-brand text-primary-brand border border-border-brand/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <div>
              <h3 className="text-2xl font-bold text-foreground leading-snug">
                Desarrollador Full-Stack enfocado en{" "}
                <span className="shimmer-text">soluciones reales</span>
              </h3>
            </div>

            <p className="text-muted-brand leading-relaxed">
              Hola, soy Antonio. Soy Técnico Superior en Desarrollo de Aplicaciones Web con sólidos conocimientos en desarrollo full-stack. Cuento con experiencia práctica en la creación de aplicaciones web dinámicas y estructuradas, con un fuerte enfoque en el backend mediante PHP y Laravel.
            </p>

            <p className="text-muted-brand leading-relaxed">
              Me apasiona la programación y la resolución de problemas lógicos. Estoy en constante formación y búsqueda de nuevas metodologías que optimicen el desarrollo de software y aporten valor a los equipos en los que colaboro.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="card-hover flex items-start gap-3.5 p-4 rounded-xl border border-border-brand/40 bg-card">
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex-shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Código de Calidad</h4>
                  <p className="text-xs text-muted-brand mt-0.5">Estructurado, modular y fácil de mantener.</p>
                </div>
              </div>
              <div className="card-hover flex items-start gap-3.5 p-4 rounded-xl border border-border-brand/40 bg-card">
                <div className="p-2.5 rounded-lg bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex-shrink-0">
                  <Zap size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Arquitectura Backend</h4>
                  <p className="text-xs text-muted-brand mt-0.5">Diseño de APIs REST seguras y escalables.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-brand/40">
              {[
                { value: "2", label: "Títulos Académicos" },
                { value: "4", label: "Cursos Certificados" },
                { value: "100%", label: "Disponibilidad" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold shimmer-text">{stat.value}</span>
                  <span className="text-xs text-muted-brand mt-1 block">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="/cv-antonio-sillero.pdf"
                download="CV_Antonio_Sillero_Ortiz.pdf"
                className="inline-flex items-center gap-2.5 px-6 h-11 rounded-xl bg-accent-brand text-foreground border border-border-brand/60 font-semibold text-sm hover:border-primary-brand/50 hover:bg-secondary-brand hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                <Download size={16} />
                Descargar CV (PDF)
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
