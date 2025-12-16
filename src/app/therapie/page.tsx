import Link from "next/link";
import LotusIcon from "@/components/icons/LotusIcon";

// Placeholder data - will be replaced with Sanity data
const therapies = [
  {
    id: "1",
    title: "Therapeutische Massage",
    shortDescription:
      "Löse Verspannungen und fördere dein körperliches Wohlbefinden durch professionelle Massagetechniken.",
    benefits: [
      "Lösung von Muskelverspannungen",
      "Verbesserung der Durchblutung",
      "Stressabbau",
      "Schmerzlinderung",
    ],
    suitableFor: [
      "Rückenschmerzen",
      "Nackenverspannungen",
      "Stress",
      "Kopfschmerzen",
    ],
    price: "75€",
    duration: "60 Minuten",
  },
  {
    id: "2",
    title: "Atemtherapie",
    shortDescription:
      "Entdecke die heilende Kraft des Atems. Lerne Techniken für mehr Energie, Entspannung und innere Ruhe.",
    benefits: [
      "Stressreduktion",
      "Verbesserte Lungenkapazität",
      "Emotionale Balance",
      "Besserer Schlaf",
    ],
    suitableFor: [
      "Angstzustände",
      "Schlafprobleme",
      "Erschöpfung",
      "Emotionale Blockaden",
    ],
    price: "65€",
    duration: "45 Minuten",
  },
  {
    id: "3",
    title: "Klangschalentherapie",
    shortDescription:
      "Tauche ein in die wohltuenden Schwingungen tibetischer Klangschalen und finde tiefe Entspannung.",
    benefits: [
      "Tiefe Entspannung",
      "Harmonisierung der Chakren",
      "Stressabbau",
      "Meditative Zustände",
    ],
    suitableFor: [
      "Nervosität",
      "Innere Unruhe",
      "Burnout-Prävention",
      "Meditation vertiefen",
    ],
    price: "70€",
    duration: "50 Minuten",
  },
  {
    id: "4",
    title: "Yoga-Einzelunterricht",
    shortDescription:
      "Individuell auf dich abgestimmte Yoga-Praxis. Perfekt für spezifische Bedürfnisse oder zur Vertiefung.",
    benefits: [
      "Persönliche Betreuung",
      "Individuelle Anpassungen",
      "Schnellerer Fortschritt",
      "Flexible Termingestaltung",
    ],
    suitableFor: [
      "Spezifische Beschwerden",
      "Fortgeschrittene Praxis",
      "Rehabilitation",
      "Private Atmosphäre",
    ],
    price: "85€",
    duration: "60 Minuten",
  },
];

export default function TherapiePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blush/30 via-warm-white to-terracotta/10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta/5 organic-blob-2 animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-sage/10 organic-blob animate-breathe" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-terracotta font-body text-sm tracking-widest uppercase mb-4 block">
              Therapeutische Behandlungen
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mb-6">
              Heilung für
              <span className="block text-soft-brown">Körper & Seele</span>
            </h1>
            <div className="decorative-line mb-6" />
            <p className="text-charcoal-light text-lg leading-relaxed">
              Ergänzend zu Yoga biete ich verschiedene therapeutische
              Behandlungen an, die dein Wohlbefinden ganzheitlich unterstützen.
              Jede Behandlung wird individuell auf dich abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Therapies Grid */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {therapies.map((therapy) => (
              <div
                key={therapy.id}
                className="bg-cream rounded-2xl overflow-hidden card-hover"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-terracotta/20 to-sage/10 flex items-center justify-center">
                  <LotusIcon className="w-20 h-20 text-terracotta/30" />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="font-display text-2xl font-semibold text-charcoal">
                      {therapy.title}
                    </h2>
                    <div className="text-right">
                      <p className="text-sage-dark font-semibold">
                        {therapy.price}
                      </p>
                      <p className="text-sm text-charcoal-light">
                        {therapy.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-charcoal-light mb-6">
                    {therapy.shortDescription}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-sage-dark uppercase tracking-wide mb-2">
                      Wirkung
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {therapy.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="bg-sage/10 text-sage-dark text-xs px-3 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-soft-brown uppercase tracking-wide mb-2">
                      Geeignet bei
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {therapy.suitableFor.map((condition, i) => (
                        <span
                          key={i}
                          className="bg-terracotta/10 text-soft-brown text-xs px-3 py-1 rounded-full"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/kontakt" className="btn-primary w-full text-center">
                    Termin buchen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sage-dark"
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
              <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                Flexible Termine
              </h3>
              <p className="text-charcoal-light text-sm">
                Termine nach individueller Vereinbarung, auch abends und am
                Wochenende möglich.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sage-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                Erstgespräch kostenfrei
              </h3>
              <p className="text-charcoal-light text-sm">
                In einem kurzen Vorgespräch klären wir deine Bedürfnisse und
                finden die passende Behandlung.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sage-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                Individuelle Betreuung
              </h3>
              <p className="text-charcoal-light text-sm">
                Jede Behandlung wird auf deine persönlichen Bedürfnisse
                abgestimmt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-terracotta/80 to-soft-brown">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
            Bereit für deine Behandlung?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Nimm Kontakt auf und wir finden gemeinsam die passende Therapie für
            dich.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-soft-brown px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Jetzt Termin anfragen
          </Link>
        </div>
      </section>
    </>
  );
}

