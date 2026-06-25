"use client";

import { useState } from "react";
import { Mail, Send, MapPin, CheckCircle, AlertCircle, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Por favor, rellena todos los campos obligatorios.");
      return;
    }
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Hubo un error al enviar tu mensaje. Inténtalo de nuevo.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "sillerortizantonio@gmail.com",
      href: "mailto:sillerortizantonio@gmail.com",
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      icon: <Phone size={18} />,
      label: "Teléfono",
      value: "622 431 975",
      href: "tel:622431975",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: <MapPin size={18} />,
      label: "Ubicación",
      value: "Montalbán de Córdoba, España",
      href: undefined,
      color: "text-fuchsia-600 dark:text-fuchsia-400",
      bg: "bg-fuchsia-500/10",
    },
  ];

  return (
    <section id="contact" className="py-28 bg-background-alt relative overflow-hidden">

      <div className="absolute inset-0 bg-dots-pattern opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-brand border border-border-brand/50 text-xs font-semibold text-primary-brand mb-4">
            <Mail size={12} />
            Contacto
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Hablemos
          </h2>
          <p className="text-muted-brand max-w-md mx-auto text-sm sm:text-base mt-3">
            ¿Tienes una propuesta o quieres colaborar? Escríbeme y te responderé lo antes posible.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-card rounded-2xl border border-border-brand/40 p-8 shadow-sm dark:shadow-black/20 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground">Información de contacto</h3>
                <p className="text-sm text-muted-brand mt-2 leading-relaxed">
                  Estoy abierto a nuevas oportunidades laborales, proyectos interesantes y colaboraciones.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-brand">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={`text-sm font-semibold ${item.color} hover:underline transition-colors`}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability tag */}
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                  Disponibilidad inmediata para incorporación
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border-brand/40 rounded-2xl p-8 shadow-sm dark:shadow-black/20 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-foreground/80 uppercase tracking-wide">
                    Nombre <span className="text-red-500 normal-case">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="h-11 px-4 rounded-xl border border-border-brand/60 bg-background text-sm text-foreground placeholder:text-muted-brand/50 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand/30 focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-foreground/80 uppercase tracking-wide">
                    Email <span className="text-red-500 normal-case">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@correo.com"
                    className="h-11 px-4 rounded-xl border border-border-brand/60 bg-background text-sm text-foreground placeholder:text-muted-brand/50 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand/30 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-foreground/80 uppercase tracking-wide">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto del mensaje"
                  className="h-11 px-4 rounded-xl border border-border-brand/60 bg-background text-sm text-foreground placeholder:text-muted-brand/50 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand/30 focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-foreground/80 uppercase tracking-wide">
                  Mensaje <span className="text-red-500 normal-case">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  className="p-4 rounded-xl border border-border-brand/60 bg-background text-sm text-foreground placeholder:text-muted-brand/50 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand/30 focus:outline-none transition-all resize-none"
                />
              </div>

              <div className="flex flex-col gap-3 mt-1">
                {status === "success" && (
                  <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-semibold">
                    <CheckCircle size={18} className="flex-shrink-0" />
                    ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-semibold">
                    <AlertCircle size={18} className="flex-shrink-0" />
                    {errorMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 h-12 w-full sm:w-auto sm:px-8 self-end rounded-xl bg-primary-brand text-white font-semibold text-sm shadow-lg shadow-primary-brand/20 hover:shadow-primary-brand/40 hover:scale-[1.02] disabled:opacity-50 transition-all duration-300 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
