"use client";

import { Download, User, Coffee, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-y border-border-brand/40 bg-card/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 inline-flex items-center gap-3">
            <User className="text-primary-brand" size={28} />
            Sobre Mí
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Card (Left) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl group">
              {/* Glowing Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating elements inside card */}
              <div className="absolute inset-[3px] bg-card rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                {/* Simulated profile graphic */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-700 flex items-center justify-center text-white text-4xl font-extrabold mb-4 shadow-lg animate-float">
                  FC
                </div>
                
                <h3 className="text-xl font-bold text-foreground">Francisco Carvajal</h3>
                <p className="text-sm text-primary-brand font-medium mb-4">Desarrollador Full Stack</p>
                
                <div className="w-full h-[1px] bg-border-brand/60 my-4" />
                
                <p className="text-xs text-muted-brand leading-relaxed max-w-[200px]">
                  &ldquo;Me apasiona transformar problemas complejos en soluciones digitales simples y elegantes.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Profile Details (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground">
              Desarrollador dedicado afincado en Málaga, España
            </h3>
            
            <p className="text-muted-brand leading-relaxed">
              Hola, soy Francisco. Mi interés por el desarrollo de software comenzó al ver el poder que tiene la programación para crear herramientas útiles y automatizar flujos de trabajo. Con el tiempo, he perfeccionado mis habilidades tanto en el frontend como en el backend, adaptándome a las mejores prácticas de la industria.
            </p>
            
            <p className="text-muted-brand leading-relaxed">
              Disfruto colaborando en proyectos multidisciplinares y estoy en constante evolución, aprendiendo nuevas tecnologías y arquitecturas para optimizar la seguridad, escalabilidad y accesibilidad de mis desarrollos.
            </p>

            {/* Core Values / Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-border-brand/40 glass">
                <ShieldCheck className="text-indigo-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Calidad de Código</h4>
                  <p className="text-xs text-muted-brand">Escribo código limpio, legible y modular.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-border-brand/40 glass">
                <Coffee className="text-purple-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Diseño UI/UX Limpio</h4>
                  <p className="text-xs text-muted-brand">Experiencias visuales fluidas y responsivas.</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-border-brand/40 pt-6 mt-4">
              <div className="text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary-brand">+3</span>
                <span className="text-xs text-muted-brand">Años de Exp.</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary-brand">+15</span>
                <span className="text-xs text-muted-brand">Proyectos</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary-brand">100%</span>
                <span className="text-xs text-muted-brand">Compromiso</span>
              </div>
            </div>

            {/* CV Download CTA */}
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-secondary-brand text-foreground border border-border-brand/60 font-semibold shadow-sm hover:bg-border-brand/40 hover:scale-[1.02] transition-all"
              >
                <Download size={18} />
                Descargar CV (PDF)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
