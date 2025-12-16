"use client";

import Link from "next/link";
import LotusIcon from "@/components/icons/LotusIcon";
import { useSite } from "@/context/SiteContext";

// Yoga services
const yogaServices = [
  {
    id: "1",
    title: "Yoga Individuell",
    description: "Yoga für dich – individuell abgestimmte Einzelstunden, die ganz auf deine Bedürfnisse eingehen.",
    icon: "lotus",
    href: "/yoga#individuell",
  },
  {
    id: "2",
    title: "Yogakurse",
    description: "Yoga mit Bea im Schloss und im Wacholder – regelmäßige Kurse in entspannter Atmosphäre.",
    icon: "group",
    href: "/yoga#kurse",
  },
  {
    id: "3",
    title: "Yoga aktuell",
    description: "Yogatag und Yogawochenende – besondere Veranstaltungen für intensives Eintauchen.",
    icon: "calendar",
    href: "/yoga#aktuell",
  },
  {
    id: "4",
    title: "Yoga Weg",
    description: "Yoga im Lonetal – Yoga in der Natur erleben, verbunden mit Wandern und Achtsamkeit.",
    icon: "path",
    href: "/yoga#weg",
  },
];

// Therapy services
const therapyServices = [
  {
    id: "1",
    title: "Therapeutische Massage",
    description: "Löse Verspannungen und fördere dein Wohlbefinden durch achtsame Massagetechniken.",
    icon: "hands",
    href: "/therapie#massage",
  },
  {
    id: "2",
    title: "Atemtherapie",
    description: "Entdecke die heilende Kraft deines Atems für mehr Energie und innere Ruhe.",
    icon: "wind",
    href: "/therapie#atemtherapie",
  },
  {
    id: "3",
    title: "Klangschalentherapie",
    description: "Tauche ein in die wohltuenden Schwingungen tibetischer Klangschalen.",
    icon: "sound",
    href: "/therapie#klangschalen",
  },
  {
    id: "4",
    title: "Einzelsitzungen",
    description: "Ganzheitliche Begleitung für deine persönlichen Themen und Anliegen.",
    icon: "lotus",
    href: "/therapie#einzelsitzung",
  },
];

const testimonials = [
  {
    id: "1",
    name: "Teilnehmerin",
    quote: "Beas Yogastunden sind eine wunderbare Auszeit vom Alltag. Sie geht individuell auf jeden ein.",
    service: "Yogakurs",
  },
  {
    id: "2",
    name: "Teilnehmer",
    quote: "Das Yogawochenende war eine bereichernde Erfahrung. Ich habe viel über mich selbst gelernt.",
    service: "Yoga aktuell",
  },
  {
    id: "3",
    name: "Teilnehmerin",
    quote: "Yoga im Lonetal zu praktizieren war magisch. Die Verbindung von Natur und Yoga ist einzigartig.",
    service: "Yoga Weg",
  },
];

export default function Home() {
  const { currentSite, isYoga, isTherapie } = useSite();
  
  const services = isYoga ? yogaServices : therapyServices;
  const primaryColorClass = isYoga ? "text-sage-dark" : "text-terracotta";
  const primaryBgClass = isYoga ? "bg-sage" : "bg-terracotta";
  const primaryBgLightClass = isYoga ? "bg-sage/10" : "bg-terracotta/10";
  const buttonClass = isYoga 
    ? "bg-sage text-white hover:bg-sage-dark" 
    : "bg-terracotta text-white hover:bg-soft-brown";
  const buttonSecondaryClass = isYoga
    ? "border-sage text-sage-dark hover:bg-sage hover:text-white"
    : "border-terracotta text-terracotta hover:bg-terracotta hover:text-white";
  const decorativeBlobClass = isYoga ? "bg-sage/5" : "bg-terracotta/5";
  const gradientClass = isYoga
    ? "from-cream via-warm-white to-sage/10"
    : "from-blush/30 via-warm-white to-terracotta/10";

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
        
        {/* Decorative Elements */}
        <div className={`absolute top-20 left-10 w-64 h-64 ${decorativeBlobClass} organic-blob animate-float`} />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-terracotta/5 organic-blob-2 animate-float delay-300" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blush/20 rounded-full animate-breathe" />
        
        {/* Content */}
        <div className="relative container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <LotusIcon className={`w-16 h-16 ${primaryColorClass} lotus-animate`} />
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-charcoal mb-6 animate-fade-in-up">
              {currentSite.name}
            </h1>

            <p className={`font-display text-xl md:text-2xl ${primaryColorClass} italic max-w-2xl mx-auto mb-6 animate-fade-in-up delay-100`}>
              &bdquo;{currentSite.tagline}&ldquo;
            </p>

            <p className="font-body text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              {isYoga 
                ? "Entdecke Yoga als Weg zu dir selbst. In meinen Kursen, Einzelstunden und besonderen Veranstaltungen begleite ich dich achtsam auf deiner Reise."
                : "Heilung geschieht auf vielen Ebenen. Meine therapeutischen Angebote unterstützen dich dabei, körperliche und emotionale Balance zu finden."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Link 
                href={isYoga ? "/yoga" : "/therapie"} 
                className={`${buttonClass} px-8 py-4 rounded-full font-medium transition-colors`}
              >
                {isYoga ? "Yoga entdecken" : "Angebote entdecken"}
              </Link>
              <Link 
                href="/kontakt" 
                className={`border-2 ${buttonSecondaryClass} px-8 py-4 rounded-full font-medium transition-colors`}
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className={`w-6 h-6 ${primaryColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-warm-white section-pattern">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className={`aspect-[4/5] rounded-2xl overflow-hidden ${isYoga ? "bg-gradient-to-br from-sage/20 to-terracotta/20" : "bg-gradient-to-br from-terracotta/20 to-blush/30"} shadow-2xl`}>
                <div className="w-full h-full flex items-center justify-center">
                  <LotusIcon className={`w-32 h-32 ${isYoga ? "text-sage/30" : "text-terracotta/30"}`} />
                </div>
              </div>
              <div className={`absolute -bottom-6 -right-6 w-48 h-48 ${isYoga ? "bg-terracotta/10" : "bg-sage/10"} organic-blob -z-10`} />
              <div className={`absolute -top-6 -left-6 w-32 h-32 ${isYoga ? "bg-sage/10" : "bg-terracotta/10"} organic-blob-2 -z-10`} />
            </div>

            <div>
              <span className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-4 block`}>
                Über Mich
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
                Bea
              </h2>
              <div className={`w-20 h-0.5 ${primaryBgClass} mb-8`} />
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  {isYoga 
                    ? "Yoga ist für mich ein Weg der Selbsterfahrung und inneren Einkehr. In meiner langjährigen Praxis habe ich erfahren, wie Yoga uns helfen kann, zu uns selbst zu finden und innere Ruhe zu kultivieren."
                    : "Heilung ist für mich ein ganzheitlicher Prozess. Mit verschiedenen therapeutischen Methoden begleite ich Menschen dabei, körperliche Verspannungen zu lösen und emotionale Balance zu finden."
                  }
                </p>
                <p>
                  {isYoga
                    ? "Mein Verständnis von Yoga geht über die körperliche Praxis hinaus – es ist eine Einladung, sich selbst achtsam zu begegnen."
                    : "Jede Behandlung ist ein Raum für dich – achtsam, individuell und heilsam. Ich freue mich, dich auf deinem Weg zu begleiten."
                  }
                </p>
              </div>
              <Link
                href="/ueber-mich"
                className={`inline-flex items-center gap-2 mt-8 ${primaryColorClass} font-medium hover:opacity-80 transition-opacity group`}
              >
                Mehr erfahren
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-4 block`}>
              Angebote
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              {currentSite.name}
            </h2>
            <div className={`w-20 h-0.5 ${primaryBgClass} mx-auto mb-6`} />
            <p className="text-charcoal-light">
              {isYoga 
                ? "Ob Einzelstunde, Kurs oder besondere Veranstaltung – finde das Angebot, das zu dir passt."
                : "Finde die therapeutische Behandlung, die dich auf deinem Weg unterstützt."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-warm-white rounded-2xl p-8 card-hover block group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-full ${primaryBgLightClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <ServiceIcon icon={service.icon} isYoga={isYoga} />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className={`${primaryColorClass} text-sm font-medium inline-flex items-center gap-1`}>
                  Mehr erfahren
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={`py-32 ${primaryBgClass} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <LotusIcon className="w-12 h-12 mx-auto mb-8 opacity-60" />
            <h3 className="font-display text-2xl font-semibold mb-6 opacity-90">
              {isYoga ? "Mein Verständnis von Yoga" : "Mein Ansatz"}
            </h3>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8">
              {isYoga 
                ? "Yoga ist nicht nur Bewegung – es ist eine Reise nach innen, ein Weg der Achtsamkeit und Selbsterkenntnis."
                : "Heilung beginnt dort, wo wir uns erlauben, ganz bei uns selbst anzukommen."
              }
            </blockquote>
            <Link
              href={isYoga ? "/yoga" : "/therapie"}
              className="inline-block border-2 border-white/50 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              {isYoga ? "Mehr über Yoga" : "Mehr über Therapie"}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Only for Yoga */}
      {isYoga && (
        <section className="py-24 bg-warm-white section-pattern">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
                Teilnehmerstimmen
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
                Was andere sagen
              </h2>
              <div className="w-20 h-0.5 bg-sage mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-cream rounded-2xl p-8 relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <svg className="w-10 h-10 text-sage/20 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-charcoal-light leading-relaxed mb-6 italic">
                    &bdquo;{testimonial.quote}&ldquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                      <span className="text-sage-dark font-display font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">{testimonial.name}</p>
                      <p className="text-sm text-sage-dark">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`py-24 bg-gradient-to-br ${isYoga ? "from-sand/50 via-cream to-blush/30" : "from-blush/30 via-cream to-terracotta/10"}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              {isYoga ? "Beginne deine Yoga-Reise" : "Beginne deinen Weg zur Heilung"}
            </h2>
            <p className="text-charcoal-light text-lg mb-10">
              {isYoga 
                ? "Nimm Kontakt auf und finde heraus, welches Angebot am besten zu dir passt. Ich freue mich darauf, dich auf deinem Weg zu begleiten."
                : "Nimm Kontakt auf und finde heraus, welche Behandlung dich am besten unterstützt. Ich freue mich auf deine Nachricht."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className={`${buttonClass} px-8 py-4 rounded-full font-medium transition-colors`}>
                Kontakt aufnehmen
              </Link>
              <Link href={isYoga ? "/yoga" : "/therapie"} className={`border-2 ${buttonSecondaryClass} px-8 py-4 rounded-full font-medium transition-colors`}>
                Angebote ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper component for service icons
function ServiceIcon({ icon, isYoga }: { icon: string; isYoga: boolean }) {
  const colorClass = isYoga ? "text-sage-dark" : "text-terracotta";
  const iconClass = `w-7 h-7 ${colorClass}`;

  switch (icon) {
    case "lotus":
      return <LotusIcon className={iconClass} />;
    case "group":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "path":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case "hands":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      );
    case "wind":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
        </svg>
      );
    case "sound":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      );
    default:
      return <LotusIcon className={iconClass} />;
  }
}
