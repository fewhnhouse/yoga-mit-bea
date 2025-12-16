"use client";

import Link from "next/link";
import Image from "next/image";
import LotusIcon from "@/components/icons/LotusIcon";
import { useSite } from "@/context/SiteContext";

export default function UeberMichContent() {
  const { currentSite, isYoga } = useSite();
  
  const primaryColorClass = isYoga ? "text-sage-dark" : "text-terracotta";
  const primaryBgClass = isYoga ? "bg-sage" : "bg-terracotta";
  const primaryBgLightClass = isYoga ? "bg-sage/10" : "bg-terracotta/10";
  const buttonClass = isYoga 
    ? "bg-sage text-white hover:bg-sage-dark" 
    : "bg-terracotta text-white hover:bg-soft-brown";
  const gradientClass = isYoga
    ? "from-cream via-warm-white to-blush/20"
    : "from-blush/30 via-warm-white to-terracotta/10";
  const iconColorClass = isYoga ? "text-sage/30" : "text-terracotta/30";

  return (
    <>
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${gradientClass} overflow-hidden`}>
        <div className={`absolute top-20 right-10 w-64 h-64 ${isYoga ? "bg-sage/5" : "bg-terracotta/5"} organic-blob animate-float`} />
        <div className={`absolute bottom-10 left-10 w-48 h-48 ${isYoga ? "bg-terracotta/5" : "bg-sage/5"} organic-blob-2 animate-breathe`} />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/bea.jpg"
                  alt="Bea - Yoga und Therapie"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className={`absolute -bottom-6 -left-6 w-48 h-48 ${isYoga ? "bg-sage/10" : "bg-terracotta/10"} organic-blob -z-10`} />
              <div className={`absolute -top-6 -right-6 w-32 h-32 ${isYoga ? "bg-terracotta/10" : "bg-sage/10"} organic-blob-2 -z-10`} />
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <span className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-4 block`}>
                Über Mich
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mb-6">
                Bea
              </h1>
              <div className={`w-20 h-0.5 ${primaryBgClass} mb-6`} />
              <p className={`font-display text-xl ${primaryColorClass} italic mb-6`}>
                &bdquo;{currentSite.tagline}&ldquo;
              </p>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  {isYoga
                    ? "Yoga begleitet mich seit vielen Jahren und ist zu einem wesentlichen Teil meines Lebens geworden. Was als persönliche Praxis begann, hat sich zu meiner Berufung entwickelt: Menschen auf ihrem eigenen Yoga-Weg zu begleiten."
                    : "Die Arbeit mit Menschen und ihrem Wohlbefinden ist meine Berufung. Mit verschiedenen therapeutischen Methoden begleite ich dich dabei, körperliche Verspannungen zu lösen und emotionale Balance zu finden."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`py-24 ${primaryBgClass}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              {isYoga ? "Mein Verständnis von Yoga" : "Mein therapeutischer Ansatz"}
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto mb-8" />
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              {isYoga
                ? "Yoga ist für mich weit mehr als körperliche Übungen. Es ist ein Weg der Selbsterfahrung, ein Prozess des Zu-sich-selbst-Kommens. In der Stille der Praxis können wir uns begegnen – mit allem, was uns ausmacht."
                : "Heilung ist für mich ein ganzheitlicher Prozess. Körper, Geist und Seele sind untrennbar miteinander verbunden. In meinen Behandlungen schaffe ich einen sicheren Raum, in dem du dich entspannen und regenerieren kannst."
              }
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              {isYoga
                ? "Mein Ansatz ist sanft und achtsam. Ich möchte einen Raum schaffen, in dem du dich sicher fühlst, zu erforschen und zu wachsen. Dabei geht es nicht um Perfektion oder Leistung, sondern um das bewusste Erleben des Augenblicks."
                : "Mit verschiedenen Methoden – von Massage über Atemtherapie bis zur Klangschalentherapie – unterstütze ich dich dabei, Blockaden zu lösen und neue Energie zu finden."
              }
            </p>
            <p className="text-white/80 leading-relaxed">
              Jeder Mensch ist einzigartig, und so ist auch jeder Weg individuell. 
              Ich begleite dich gerne auf deinem persönlichen Pfad.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-4 block`}>
                Meine Arbeitsweise
              </span>
              <h2 className="font-display text-4xl font-semibold text-charcoal mb-6">
                Was dich bei mir erwartet
              </h2>
              <div className={`w-20 h-0.5 ${primaryBgClass} mx-auto`} />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full ${primaryBgLightClass} flex items-center justify-center mx-auto mb-4`}>
                  <svg className={`w-8 h-8 ${primaryColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  Achtsame Begleitung
                </h3>
                <p className="text-charcoal-light text-sm">
                  Ich nehme mir Zeit für dich und gehe individuell auf deine Bedürfnisse ein.
                </p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 rounded-full ${primaryBgLightClass} flex items-center justify-center mx-auto mb-4`}>
                  <svg className={`w-8 h-8 ${primaryColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  Raum und Zeit
                </h3>
                <p className="text-charcoal-light text-sm">
                  {isYoga 
                    ? "In meinen Stunden herrscht kein Druck – du darfst sein, wie du bist."
                    : "Jede Behandlung bekommt die Zeit, die sie braucht – ohne Hektik."
                  }
                </p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 rounded-full ${primaryBgLightClass} flex items-center justify-center mx-auto mb-4`}>
                  <LotusIcon className={`w-8 h-8 ${primaryColorClass}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  Ganzheitlicher Ansatz
                </h3>
                <p className="text-charcoal-light text-sm">
                  {isYoga
                    ? "Yoga als Verbindung von Körper, Geist und Atem – nicht nur Übungen."
                    : "Körper, Geist und Seele als Einheit betrachten und behandeln."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Overview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-4 block`}>
              Meine Angebote
            </span>
            <h2 className="font-display text-4xl font-semibold text-charcoal mb-6">
              {isYoga ? "So kannst du mit mir üben" : "Meine Behandlungen"}
            </h2>
            <div className={`w-20 h-0.5 ${primaryBgClass} mx-auto`} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isYoga ? (
              <>
                <Link href="/yoga#individuell" className="bg-warm-white rounded-xl p-6 card-hover text-center group">
                  <LotusIcon className={`w-10 h-10 ${primaryColorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Yoga Individuell</h3>
                  <p className="text-charcoal-light text-sm">Einzelstunden für dich</p>
                </Link>
                <Link href="/yoga#kurse" className="bg-warm-white rounded-xl p-6 card-hover text-center group">
                  <svg className={`w-10 h-10 ${primaryColorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Yogakurse</h3>
                  <p className="text-charcoal-light text-sm">Im Schloss & Wacholder</p>
                </Link>
                <Link href="/yoga#aktuell" className="bg-warm-white rounded-xl p-6 card-hover text-center group">
                  <svg className={`w-10 h-10 ${primaryColorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Yoga aktuell</h3>
                  <p className="text-charcoal-light text-sm">Yogatag & Wochenende</p>
                </Link>
                <Link href="/yoga#weg" className="bg-warm-white rounded-xl p-6 card-hover text-center group">
                  <svg className={`w-10 h-10 ${primaryColorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Yoga Weg</h3>
                  <p className="text-charcoal-light text-sm">Im Lonetal</p>
                </Link>
              </>
            ) : (
              <>
                <Link href="/therapie#massage" className="bg-warm-white rounded-xl p-6 card-hover text-center group">
                  <svg className={`w-10 h-10 ${primaryColorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Massage</h3>
                  <p className="text-charcoal-light text-sm">Therapeutische Behandlung</p>
                </Link>
                <Link href="/therapie#atemtherapie" className="bg-warm-white rounded-xl p-6 card-hover text-center group">
                  <svg className={`w-10 h-10 ${primaryColorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
                  </svg>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Atemtherapie</h3>
                  <p className="text-charcoal-light text-sm">Die Kraft des Atems</p>
                </Link>
                <Link href="/therapie#klangschalen" className="bg-warm-white rounded-xl p-6 card-hover text-center group">
                  <svg className={`w-10 h-10 ${primaryColorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Klangschalen</h3>
                  <p className="text-charcoal-light text-sm">Heilende Schwingungen</p>
                </Link>
                <Link href="/therapie#einzelsitzung" className="bg-warm-white rounded-xl p-6 card-hover text-center group">
                  <LotusIcon className={`w-10 h-10 ${primaryColorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Einzelsitzung</h3>
                  <p className="text-charcoal-light text-sm">Ganzheitliche Begleitung</p>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${isYoga ? "from-blush/30 via-cream to-sage/10" : "from-terracotta/10 via-cream to-blush/30"}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-6">
            Lass uns kennenlernen
          </h2>
          <p className="text-charcoal-light text-lg mb-8 max-w-2xl mx-auto">
            Hast du Fragen oder möchtest du mehr über meine Angebote erfahren? 
            Ich freue mich auf deine Nachricht.
          </p>
          <Link href="/kontakt" className={`${buttonClass} px-8 py-4 rounded-full font-medium transition-colors inline-block`}>
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
