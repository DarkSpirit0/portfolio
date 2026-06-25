"use client";

import { useState } from "react";
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Por favor, rellena todos los campos obligatorios.");
      return;
    }

    setStatus("loading");

    // Simulate API request delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Hubo un error al enviar tu mensaje. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-border-brand/40 bg-card/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 inline-flex items-center gap-3">
            <Mail className="text-primary-brand" size={28} />
            Contacto
          </h2>
          <p className="text-muted-brand max-w-xl mx-auto text-sm sm:text-base mt-2">
            ¿Tienes alguna propuesta de proyecto, vacante laboral o alguna duda? Escríbeme y te responderé lo antes posible.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Card (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">¡Hablemos de tu idea!</h3>
            <p className="text-muted-brand leading-relaxed">
              Estoy siempre interesado en nuevos desafíos, proyectos innovadores y oportunidades de crecimiento mutuo. Siéntete libre de conectar.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              {/* Email item */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border-brand/40 glass">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-muted-brand tracking-wider">Email</h4>
                  <a
                    href="mailto:francisco@example.com"
                    className="text-sm font-semibold text-foreground hover:underline"
                  >
                    francisco@example.com
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border-brand/40 glass">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-muted-brand tracking-wider">Ubicación</h4>
                  <span className="text-sm font-semibold text-foreground">
                    Málaga, España
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-border-brand/40 bg-card/60 shadow-sm flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-foreground/80">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="h-11 px-4 rounded-xl border border-border-brand/65 bg-background text-sm text-foreground focus:border-primary-brand focus:outline-none transition-all"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-foreground/80">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@correo.com"
                    className="h-11 px-4 rounded-xl border border-border-brand/65 bg-background text-sm text-foreground focus:border-primary-brand focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-foreground/80">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto del mensaje"
                  className="h-11 px-4 rounded-xl border border-border-brand/65 bg-background text-sm text-foreground focus:border-primary-brand focus:outline-none transition-all"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-foreground/80">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Escribe tu mensaje aquí..."
                  className="p-4 rounded-xl border border-border-brand/65 bg-background text-sm text-foreground focus:border-primary-brand focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit / Status Alert */}
              <div className="flex flex-col gap-4 mt-2">
                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 text-sm font-semibold">
                    <CheckCircle size={18} className="shrink-0" />
                    ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-semibold">
                    <AlertCircle size={18} className="shrink-0" />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 h-12 w-full sm:w-auto sm:px-8 self-end rounded-xl bg-primary-brand text-primary-foreground font-semibold shadow-lg hover:shadow-indigo-500/15 hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
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
