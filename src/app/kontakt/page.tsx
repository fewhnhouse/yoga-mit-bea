"use client";

import { useState } from "react";
import LotusIcon from "@/components/icons/LotusIcon";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-terracotta/10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/5 organic-blob animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blush/10 organic-blob-2 animate-breathe" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
              Kontakt
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mb-6">
              Ich freue mich
              <span className="block text-sage-dark">auf dich</span>
            </h1>
            <div className="decorative-line mb-6" />
            <p className="text-charcoal-light text-lg leading-relaxed">
              Hast du Fragen zu meinen Kursen oder Behandlungen? Möchtest du
              einen Termin vereinbaren? Schreib mir – ich melde mich so schnell
              wie möglich bei dir.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-semibold text-charcoal mb-8">
                Nachricht senden
              </h2>

              {submitted ? (
                <div className="bg-sage/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    Vielen Dank!
                  </h3>
                  <p className="text-charcoal-light">
                    Deine Nachricht wurde gesendet. Ich melde mich so schnell
                    wie möglich bei dir.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sage-dark font-medium hover:text-terracotta transition-colors"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                        placeholder="Dein Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                        placeholder="deine@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                        placeholder="+49 123 456 78"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Betreff *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="yoga">Yoga-Kurs buchen</option>
                        <option value="therapie">Therapie-Termin</option>
                        <option value="schnupperkurs">Schnupperkurs</option>
                        <option value="frage">Allgemeine Frage</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all resize-none"
                      placeholder="Deine Nachricht an mich..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      "Nachricht senden"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-semibold text-charcoal mb-8">
                Kontaktdaten
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-1">
                      Adresse
                    </h3>
                    <p className="text-charcoal-light">
                      Musterstraße 123
                      <br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-1">
                      E-Mail
                    </h3>
                    <a
                      href="mailto:kontakt@yoga-mit-bea.de"
                      className="text-sage-dark hover:text-terracotta transition-colors"
                    >
                      kontakt@yoga-mit-bea.de
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+4912345678"
                      className="text-sage-dark hover:text-terracotta transition-colors"
                    >
                      +49 123 456 78
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-1">
                      Öffnungszeiten
                    </h3>
                    <div className="text-charcoal-light space-y-1 text-sm">
                      <p>Mo - Fr: 09:00 - 20:00</p>
                      <p>Sa: 09:00 - 14:00</p>
                      <p>So: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-sage/10 to-terracotta/10 flex items-center justify-center">
                <div className="text-center">
                  <LotusIcon className="w-16 h-16 text-sage/30 mx-auto mb-4" />
                  <p className="text-charcoal-light text-sm">
                    Google Maps Einbettung
                    <br />
                    (wird über Sanity konfiguriert)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

