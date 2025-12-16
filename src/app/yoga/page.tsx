import Link from "next/link";
import LotusIcon from "@/components/icons/LotusIcon";

// Placeholder data - will be replaced with Sanity data
const yogaClasses = [
  {
    id: "1",
    title: "Hatha Yoga",
    level: "Alle Level",
    description:
      "Klassisches Yoga, das Körperhaltungen (Asanas), Atemübungen (Pranayama) und Meditation vereint. Ideal für Einsteiger und alle, die eine solide Grundlage suchen.",
    benefits: [
      "Verbesserte Flexibilität",
      "Stärkung der Muskulatur",
      "Stressabbau",
      "Bessere Körperhaltung",
    ],
    schedule: [
      { day: "Montag", time: "09:00 - 10:30", location: "Studio" },
      { day: "Mittwoch", time: "18:00 - 19:30", location: "Studio" },
    ],
  },
  {
    id: "2",
    title: "Yin Yoga",
    level: "Alle Level",
    description:
      "Ein langsamer, meditativer Stil, bei dem Positionen für mehrere Minuten gehalten werden. Fokus auf tiefe Entspannung und Dehnung des Bindegewebes.",
    benefits: [
      "Tiefe Entspannung",
      "Verbesserte Gelenkflexibilität",
      "Stressreduktion",
      "Besserer Schlaf",
    ],
    schedule: [
      { day: "Dienstag", time: "19:00 - 20:30", location: "Studio" },
      { day: "Freitag", time: "17:00 - 18:30", location: "Studio" },
    ],
  },
  {
    id: "3",
    title: "Yoga für Senioren",
    level: "Anfänger",
    description:
      "Sanftes Yoga speziell angepasst für ältere Menschen. Mit Hilfsmitteln und Variationen für jeden Körper. Fokus auf Beweglichkeit und Gleichgewicht.",
    benefits: [
      "Erhalt der Beweglichkeit",
      "Sturzprävention",
      "Soziale Interaktion",
      "Sanfte Stärkung",
    ],
    schedule: [
      { day: "Donnerstag", time: "10:00 - 11:00", location: "Studio" },
    ],
  },
  {
    id: "4",
    title: "Vinyasa Flow",
    level: "Mittelstufe",
    description:
      "Dynamischer Yoga-Stil, bei dem Bewegung und Atmung fließend verbunden werden. Kreative Sequenzen für mehr Kraft und Ausdauer.",
    benefits: [
      "Kardiovaskuläre Fitness",
      "Muskelaufbau",
      "Mentaler Fokus",
      "Energiesteigerung",
    ],
    schedule: [{ day: "Samstag", time: "09:00 - 10:30", location: "Studio" }],
  },
];

export default function YogaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-sage/10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/5 organic-blob animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blush/10 organic-blob-2 animate-breathe" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
              Yoga Kurse
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mb-6">
              Finde deinen
              <span className="block text-sage-dark">Yoga-Weg</span>
            </h1>
            <div className="decorative-line mb-6" />
            <p className="text-charcoal-light text-lg leading-relaxed">
              Von sanften, entspannenden Stilen bis hin zu dynamischen Flows –
              entdecke das Yoga, das zu dir passt. Jeder Kurs wird mit Liebe und
              Achtsamkeit geleitet.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {yogaClasses.map((yogaClass, index) => (
              <div
                key={yogaClass.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image/Visual Side */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sage/20 to-terracotta/10 shadow-xl">
                    <div className="w-full h-full flex items-center justify-center">
                      <LotusIcon className="w-24 h-24 text-sage/30" />
                    </div>
                  </div>
                  {/* Level Badge */}
                  <div className="absolute top-4 left-4 bg-sage text-white px-4 py-2 rounded-full text-sm font-medium">
                    {yogaClass.level}
                  </div>
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                    {yogaClass.title}
                  </h2>
                  <p className="text-charcoal-light leading-relaxed mb-6">
                    {yogaClass.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="font-display text-lg font-semibold text-sage-dark mb-3">
                      Vorteile
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {yogaClass.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-charcoal-light"
                        >
                          <svg
                            className="w-4 h-4 text-sage flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  <div className="bg-cream rounded-xl p-6 mb-6">
                    <h3 className="font-display text-lg font-semibold text-sage-dark mb-3">
                      Kurszeiten
                    </h3>
                    <div className="space-y-2">
                      {yogaClass.schedule.map((slot, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-charcoal font-medium">
                            {slot.day}
                          </span>
                          <span className="text-charcoal-light">
                            {slot.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/kontakt" className="btn-primary">
                    Kurs buchen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
            Dein erster Kurs ist Schnupperkurs
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Du bist unsicher, welcher Kurs der richtige für dich ist? Probiere
            es einfach aus! Der erste Kurs ist zum Kennenlernen kostenlos.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-sage-dark px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Schnupperkurs buchen
          </Link>
        </div>
      </section>
    </>
  );
}

