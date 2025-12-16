import Link from "next/link";
import LotusIcon from "@/components/icons/LotusIcon";

// Placeholder data - will be replaced with Sanity data later
const services = [
  {
    id: "1",
    title: "Hatha Yoga",
    description:
      "Klassisches Yoga für Körper und Geist. Finde Harmonie durch sanfte Bewegungen und bewusstes Atmen.",
    icon: "lotus",
  },
  {
    id: "2",
    title: "Yin Yoga",
    description:
      "Tiefe Entspannung durch lange gehaltene Positionen. Lasse los und komme zur Ruhe.",
    icon: "moon",
  },
  {
    id: "3",
    title: "Therapeutische Massage",
    description:
      "Lindere Verspannungen und fördere dein Wohlbefinden durch professionelle Behandlungen.",
    icon: "hands",
  },
  {
    id: "4",
    title: "Atemtherapie",
    description:
      "Entdecke die Kraft deines Atems. Lerne Techniken für mehr Energie und innere Ruhe.",
    icon: "wind",
  },
];

const testimonials = [
  {
    id: "1",
    name: "Maria S.",
    quote:
      "Durch Beas Yoga-Kurse habe ich gelernt, im Alltag zur Ruhe zu kommen. Die Atmosphäre ist wunderbar entspannend.",
    service: "Hatha Yoga",
  },
  {
    id: "2",
    name: "Thomas K.",
    quote:
      "Die therapeutischen Behandlungen haben mir sehr bei meinen Rückenproblemen geholfen. Sehr einfühlsam und professionell!",
    service: "Therapeutische Massage",
  },
  {
    id: "3",
    name: "Sabine M.",
    quote:
      "Yin Yoga mit Bea ist wie eine Meditation. Ich gehe jedes Mal völlig entspannt und geerdet nach Hause.",
    service: "Yin Yoga",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-sand/30" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage/5 organic-blob animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-terracotta/5 organic-blob-2 animate-float delay-300" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blush/20 rounded-full animate-breathe" />
        
        {/* Content */}
        <div className="relative container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Lotus Icon */}
            <div className="flex justify-center mb-8">
              <LotusIcon className="w-16 h-16 text-sage lotus-animate" />
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-charcoal mb-6 animate-fade-in-up">
              Yoga & Therapie
              <span className="block text-sage-dark">mit Bea</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              Finde deine innere Balance durch achtsame Bewegung, heilende
              Berührung und die Kraft des bewussten Atmens. Willkommen auf
              deiner Reise zu mehr Wohlbefinden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Link href="/yoga" className="btn-primary">
                Yoga entdecken
              </Link>
              <Link href="/kontakt" className="btn-secondary">
                Termin vereinbaren
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-sage-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-warm-white section-pattern">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-sage/20 to-terracotta/20 shadow-2xl">
                {/* Placeholder for image - will be replaced with Sanity image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage/10 to-blush/20">
                  <LotusIcon className="w-32 h-32 text-sage/30" />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracotta/10 organic-blob -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-sage/10 organic-blob-2 -z-10" />
            </div>

            {/* Text Side */}
            <div>
              <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
                Über Mich
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
                Herzlich Willkommen
              </h2>
              <div className="decorative-line mb-8" />
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Mein Name ist Bea, und ich freue mich, dich auf deinem Weg zu
                  mehr Wohlbefinden begleiten zu dürfen. Seit über 15 Jahren
                  widme ich mich der Lehre des Yoga und verschiedener
                  therapeutischer Methoden.
                </p>
                <p>
                  In meiner Arbeit verbinde ich traditionelles Wissen mit
                  modernen Ansätzen, um dir eine ganzheitliche Erfahrung zu
                  bieten. Jeder Mensch ist einzigartig – und so gestalte ich
                  auch meine Kurse und Behandlungen individuell.
                </p>
              </div>
              <Link
                href="/ueber-mich"
                className="inline-flex items-center gap-2 mt-8 text-sage-dark font-medium hover:text-terracotta transition-colors group"
              >
                Mehr erfahren
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
              Angebote
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              Für Körper, Geist & Seele
            </h2>
            <div className="decorative-line mx-auto mb-6" />
            <p className="text-charcoal-light">
              Entdecke mein vielfältiges Angebot an Yoga-Kursen und
              therapeutischen Behandlungen. Finde das Richtige für dich.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-warm-white rounded-2xl p-8 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mb-6">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/yoga`}
                  className="text-sage-dark text-sm font-medium hover:text-terracotta transition-colors inline-flex items-center gap-1 group"
                >
                  Mehr erfahren
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Philosophy Section */}
      <section className="py-32 bg-sage relative overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <LotusIcon className="w-12 h-12 mx-auto mb-8 opacity-60" />
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-8">
              &ldquo;Yoga ist nicht das Berühren der Zehen, sondern was du auf
              dem Weg dorthin lernst.&rdquo;
            </blockquote>
            <cite className="text-white/80 text-lg font-body">
              — Jigar Gor
            </cite>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-warm-white section-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
              Kundenstimmen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              Was andere sagen
            </h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-cream rounded-2xl p-8 relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Quote mark */}
                <svg
                  className="w-10 h-10 text-sage/20 absolute top-6 right-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-charcoal-light leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                    <span className="text-sage-dark font-display font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-sage-dark">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sand/50 via-cream to-blush/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              Bereit für deine Reise?
            </h2>
            <p className="text-charcoal-light text-lg mb-10">
              Vereinbare jetzt einen Termin für ein unverbindliches
              Erstgespräch. Ich freue mich darauf, dich kennenzulernen und
              gemeinsam den passenden Weg für dich zu finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary">
                Kontakt aufnehmen
              </Link>
              <Link href="/yoga" className="btn-secondary">
                Kursplan ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper component for service icons
function ServiceIcon({ icon }: { icon: string }) {
  const iconClass = "w-7 h-7 text-sage-dark";

  switch (icon) {
    case "lotus":
      return <LotusIcon className={iconClass} />;
    case "moon":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    case "hands":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
      );
    case "wind":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"
          />
        </svg>
      );
    default:
      return <LotusIcon className={iconClass} />;
  }
}
