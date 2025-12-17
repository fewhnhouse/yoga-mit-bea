"use client";

import Link from "next/link";
import Image from "next/image";
import LotusIcon from "@/components/icons/LotusIcon";
import IconCard from "@/components/IconCard";
import SectionHeader from "@/components/SectionHeader";
import { useSite } from "@/context/SiteContext";
import type { AboutPageData } from "@/sanity/types";

interface UeberMichContentProps {
  initialData: AboutPageData | null;
}

export default function UeberMichContent({ initialData }: UeberMichContentProps) {
  const { currentSite, isYoga } = useSite();
  
  // Get data from Sanity
  const about = initialData?.about;
  const siteContent = isYoga 
    ? about?.yogaContent
    : about?.therapieContent;
  
  const name = about?.name || "";
  const photoUrl = about?.photoUrl || "";
  
  const intro = siteContent?.intro || "";
  const philosophyHeading = siteContent?.philosophyHeading || "";
  const philosophy = typeof siteContent?.philosophy === 'string' ? siteContent.philosophy : "";
  const approach = typeof siteContent?.approach === 'string' ? siteContent.approach : "";
  
  // Styling classes based on site
  const primaryColorClass = isYoga ? "text-sage-dark" : "text-terracotta";
  const primaryBgClass = isYoga ? "bg-sage" : "bg-terracotta";
  const buttonClass = isYoga 
    ? "bg-sage text-white hover:bg-sage-dark" 
    : "bg-terracotta text-white hover:bg-soft-brown";
  const gradientClass = isYoga
    ? "from-cream via-warm-white to-blush/20"
    : "from-blush/30 via-warm-white to-terracotta/10";

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
                  src={photoUrl}
                  alt={`${name} - Yoga und Therapie`}
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
              <SectionHeader
                label="Über Mich"
                title={name}
                theme={isYoga ? "yoga" : "therapie"}
                as="h1"
              />
              <p className={`font-display text-xl ${primaryColorClass} italic mb-6`}>
                &bdquo;{currentSite.tagline}&ldquo;
              </p>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>{intro}</p>
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
              {philosophyHeading}
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto mb-8" />
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              {philosophy}
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              {approach}
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
            <div className="mb-16">
              <SectionHeader
                label="Meine Arbeitsweise"
                title="Was dich bei mir erwartet"
                theme={isYoga ? "yoga" : "therapie"}
                align="center"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <IconCard
                icon={
                  <svg className={`w-8 h-8 ${primaryColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
                title="Achtsame Begleitung"
                description="Ich nehme mir Zeit für dich und gehe individuell auf deine Bedürfnisse ein."
                theme={isYoga ? "yoga" : "therapie"}
                variant="flat"
              />

              <IconCard
                icon={
                  <svg className={`w-8 h-8 ${primaryColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Raum und Zeit"
                description={isYoga 
                  ? "In meinen Stunden herrscht kein Druck – du darfst sein, wie du bist."
                  : "Jede Behandlung bekommt die Zeit, die sie braucht – ohne Hektik."
                }
                theme={isYoga ? "yoga" : "therapie"}
                variant="flat"
              />

              <IconCard
                icon={<LotusIcon className={`w-8 h-8 ${primaryColorClass}`} />}
                title="Ganzheitlicher Ansatz"
                description={isYoga
                  ? "Yoga als Verbindung von Körper, Geist und Atem – nicht nur Übungen."
                  : "Körper, Geist und Seele als Einheit betrachten und behandeln."
                }
                theme={isYoga ? "yoga" : "therapie"}
                variant="flat"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Overview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <SectionHeader
              label="Meine Angebote"
              title={isYoga ? "So kannst du mit mir üben" : "Meine Behandlungen"}
              theme={isYoga ? "yoga" : "therapie"}
              align="center"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isYoga ? (
              <>
                <IconCard
                  icon={<LotusIcon className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`} />}
                  title="Yoga Individuell"
                  description="Einzelstunden für dich"
                  href="/yoga#individuell"
                  theme="yoga"
                  size="compact"
                />
                <IconCard
                  icon={
                    <svg className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  }
                  title="Yogakurse"
                  description="Im Schloss & Wacholder"
                  href="/yoga#kurse"
                  theme="yoga"
                  size="compact"
                />
                <IconCard
                  icon={
                    <svg className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Yoga aktuell"
                  description="Yogatag & Wochenende"
                  href="/yoga#aktuell"
                  theme="yoga"
                  size="compact"
                />
                <IconCard
                  icon={
                    <svg className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  }
                  title="Yoga Weg"
                  description="Im Lonetal"
                  href="/yoga#weg"
                  theme="yoga"
                  size="compact"
                />
              </>
            ) : (
              <>
                <IconCard
                  icon={
                    <svg className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  }
                  title="Massage"
                  description="Therapeutische Behandlung"
                  href="/therapie#massage"
                  theme="therapie"
                  size="compact"
                />
                <IconCard
                  icon={
                    <svg className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
                    </svg>
                  }
                  title="Atemtherapie"
                  description="Die Kraft des Atems"
                  href="/therapie#atemtherapie"
                  theme="therapie"
                  size="compact"
                />
                <IconCard
                  icon={
                    <svg className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  }
                  title="Klangschalen"
                  description="Heilende Schwingungen"
                  href="/therapie#klangschalen"
                  theme="therapie"
                  size="compact"
                />
                <IconCard
                  icon={<LotusIcon className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`} />}
                  title="Einzelsitzung"
                  description="Ganzheitliche Begleitung"
                  href="/therapie#einzelsitzung"
                  theme="therapie"
                  size="compact"
                />
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
