import Link from "next/link";
import LotusIcon from "@/components/icons/LotusIcon";

// Placeholder data - will be replaced with Sanity data
const qualifications = [
  "Zertifizierte Yogalehrerin (500h RYT)",
  "Ausbildung in Yin Yoga",
  "Therapeutische Massagetherapeutin",
  "Atemtherapie-Zertifizierung",
  "Klangschalentherapie",
  "Fortbildung in Yoga für Senioren",
];

const timeline = [
  {
    year: "2008",
    title: "Erste Begegnung mit Yoga",
    description:
      "Meine Reise begann mit einer Yoga-Stunde, die mein Leben veränderte.",
  },
  {
    year: "2012",
    title: "Erste Ausbildung",
    description:
      "Abschluss meiner 200-Stunden Yogalehrer-Ausbildung in Indien.",
  },
  {
    year: "2015",
    title: "Therapeutische Weiterbildung",
    description:
      "Erweiterung meines Wissens um therapeutische Massage und Atemtherapie.",
  },
  {
    year: "2018",
    title: "Eröffnung eigenes Studio",
    description:
      "Verwirklichung meines Traums mit eigenem Yoga- und Therapie-Raum.",
  },
  {
    year: "Heute",
    title: "Begleitung auf deinem Weg",
    description:
      "Täglich darf ich Menschen auf ihrem Weg zu mehr Wohlbefinden begleiten.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-blush/20 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/5 organic-blob animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-terracotta/5 organic-blob-2 animate-breathe" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-sage/20 to-blush/20 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <LotusIcon className="w-32 h-32 text-sage/30" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-sage/10 organic-blob -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-terracotta/10 organic-blob-2 -z-10" />
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
                Über Mich
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mb-6">
                Hallo, ich bin
                <span className="block text-sage-dark">Bea</span>
              </h1>
              <div className="decorative-line mb-6" />
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Yoga und Therapie sind nicht nur mein Beruf – sie sind meine
                  Berufung. Seit über 15 Jahren begleite ich Menschen auf ihrem
                  Weg zu mehr Wohlbefinden, innerer Ruhe und körperlicher
                  Balance.
                </p>
                <p>
                  Meine Reise begann mit meiner eigenen Suche nach Ausgleich in
                  einer hektischen Welt. Was ich dabei gefunden habe, möchte ich
                  heute mit dir teilen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-sage">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Meine Philosophie
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto mb-8" />
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Ich glaube daran, dass jeder Mensch die Fähigkeit zur
              Selbstheilung in sich trägt. Meine Aufgabe ist es, dir Werkzeuge
              an die Hand zu geben und einen sicheren Raum zu schaffen, in dem
              du diese Kraft entdecken und entfalten kannst.
            </p>
            <p className="text-white/80 leading-relaxed">
              Ob im Yoga-Kurs oder in der Einzelbehandlung – mir ist wichtig,
              dass du dich gesehen und verstanden fühlst. Jeder Körper ist
              einzigartig, jeder Weg ist individuell.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
                Qualifikationen
              </span>
              <h2 className="font-display text-4xl font-semibold text-charcoal mb-6">
                Ausbildungen & Zertifikate
              </h2>
              <div className="decorative-line mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-cream rounded-xl p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-sage-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-charcoal">{qualification}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
              Mein Weg
            </span>
            <h2 className="font-display text-4xl font-semibold text-charcoal mb-6">
              Die Reise bisher
            </h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sage/30 md:left-1/2 md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 w-4 h-4 rounded-full bg-sage border-4 border-cream md:left-1/2 md:-translate-x-1/2" />

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    }`}
                  >
                    <span className="text-sage-dark font-display text-2xl font-semibold">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-charcoal mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blush/30 via-cream to-sage/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-6">
            Lass uns kennenlernen
          </h2>
          <p className="text-charcoal-light text-lg mb-8 max-w-2xl mx-auto">
            Ich freue mich darauf, dich persönlich zu treffen und gemeinsam zu
            entdecken, wie ich dich auf deinem Weg unterstützen kann.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}

