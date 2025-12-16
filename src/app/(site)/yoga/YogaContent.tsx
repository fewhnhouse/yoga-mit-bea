import Link from "next/link";import Image from "next/image";
import LotusIcon from "@/components/icons/LotusIcon";

// Content based on yogamitbea.de offerings
const yogaOfferings = [
  {
    id: "individuell",
    title: "Yoga Individuell",
    subtitle: "Yoga für dich",
    description:
      "In Einzelstunden gehe ich ganz auf deine persönlichen Bedürfnisse ein. Ob du Yoga neu entdecken möchtest, an bestimmten Themen arbeiten willst oder einfach Zeit für dich brauchst – hier steht dein individueller Weg im Mittelpunkt.",
    schedule: "Termine nach Vereinbarung",
    features: [
      "Persönliche Betreuung",
      "Flexible Termingestaltung",
      "Angepasste Übungen",
      "Raum für deine Fragen",
    ],
  },
  {
    id: "kurse",
    title: "Yogakurse",
    subtitle: "Yoga mit Bea im Schloss & im Wacholder",
    description:
      "In meinen regelmäßigen Kursen praktizieren wir gemeinsam in einer kleinen Gruppe. Die besondere Atmosphäre lädt ein, zur Ruhe zu kommen und Yoga in seiner Tiefe zu erfahren.",
    locations: [
      {
        name: "Yoga mit Bea im Schloss",
        description: "Yogakurse in historischem Ambiente im Schloss Bernstadt.",
        address: "Schmiedgasse 5, 89182 Bernstadt",
        mapsUrl: "https://maps.google.com/?q=Schmiedgasse+5,+89182+Bernstadt",
        schedule: [
          { day: "Dienstag", times: "17:30–18:30 & 18:45–20:00" },
          { day: "Mittwoch", times: "17:30–18:30 & 18:45–20:00" },
        ],
        pricing: "8er Karte: 110€/120€ · 5er Flex: 80€/90€",
      },
      {
        name: "Yoga mit Bea im Wacholder",
        description: "Kleine Gruppe (max. 8 Teilnehmer) im schönen Yogaraum im Holzhaus.",
        address: "Wacholderweg 10, 73326 Deggingen",
        mapsUrl: "https://maps.google.com/?q=Wacholderweg+10,+73326+Deggingen",
        schedule: [
          { day: "Montag", times: "17:00–18:15 & 18:30–19:45" },
        ],
        pricing: "8er Karte: 120€ · 5er Flex: 90€ (75 min)",
      },
    ],
  },
  {
    id: "aktuell",
    title: "Yoga aktuell",
    subtitle: "Yogatag & Yogawochenende",
    description:
      "Bei besonderen Veranstaltungen hast du die Möglichkeit, tiefer in die Yoga-Praxis einzutauchen. Ein Yogatag oder ein ganzes Wochenende bieten Raum für intensive Erfahrung und innere Einkehr.",
    events: [
      {
        name: "Yogatag",
        description: "Ein Tag ganz im Zeichen von Yoga und Achtsamkeit",
      },
      {
        name: "Yogawochenende",
        description: "Intensives Eintauchen in die Yoga-Praxis über mehrere Tage",
      },
    ],
  },
  {
    id: "weg",
    title: "Yoga Weg",
    subtitle: "im Lonetal",
    description:
      "Der Yoga Weg im Lonetal verbindet Yoga mit der Kraft der Natur. Beim achtsamen Wandern durch diese einzigartige Landschaft praktizieren wir Yoga an besonderen Kraftorten und lassen uns von der Schönheit der Natur inspirieren.",
    features: [
      "Yoga in der Natur",
      "Achtsames Wandern",
      "Besondere Kraftorte",
      "Verbindung von Bewegung und Stille",
    ],
  },
];

export default function YogaContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-sage/10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/5 organic-blob animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blush/10 organic-blob-2 animate-breathe" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
              Angebote
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mb-6">
              Yoga mit Bea
            </h1>
            <div className="decorative-line mb-6" />
            <p className="text-charcoal-light text-lg leading-relaxed mb-4">
              Mein Verständnis von Yoga geht über die körperliche Praxis hinaus. 
              Yoga ist für mich ein Weg der Selbsterfahrung – durch Yoga gehst du 
              nur auf dich selbst zu.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Entdecke meine verschiedenen Angebote und finde den Weg, der zu dir passt.
            </p>
          </div>
        </div>
      </section>

      {/* Yoga Individuell */}
      <section id="individuell" className="py-24 bg-warm-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/images/morgengruss.jpg"
                  alt="Yoga Individuell - Einzelstunden"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute top-4 left-4 bg-sage text-white px-4 py-2 rounded-full text-sm font-medium">
                Einzelstunden
              </div>
            </div>
            <div>
              <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-2 block">
                {yogaOfferings[0].subtitle}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                {yogaOfferings[0].title}
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                {yogaOfferings[0].description}
              </p>
              
              {/* Schedule Badge */}
              <div className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {yogaOfferings[0].schedule}
              </div>
              
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {yogaOfferings[0].features?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-charcoal-light">
                    <svg className="w-4 h-4 text-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary">
                Anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yogakurse */}
      <section id="kurse" className="py-24 bg-cream scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-2 block">
              Gruppenkurse
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              {yogaOfferings[1].title}
            </h2>
            <p className="text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              {yogaOfferings[1].description}
            </p>
          </div>

          {/* Two Location Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {yogaOfferings[1].locations?.map((location, i) => (
              <div key={i} className="bg-warm-white rounded-2xl overflow-hidden shadow-lg">
                {/* Image Area */}
                <div className="aspect-[16/9] relative">
                  <Image
                    src={i === 0 ? "/images/schloss.jpg" : "/images/wacholder.jpg"}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    {location.name}
                  </h3>
                  <p className="text-charcoal-light text-sm mb-4">
                    {location.description}
                  </p>

                  {/* Info Grid */}
                  <div className="space-y-3 mb-4">
                    {/* Location */}
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <a 
                        href={location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-charcoal-light hover:text-sage-dark underline underline-offset-2 transition-colors"
                      >
                        {location.address}
                      </a>
                    </div>

                    {/* Schedule */}
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm">
                        {location.schedule?.map((slot, j) => (
                          <p key={j} className="text-charcoal">
                            <span className="font-medium">{slot.day}:</span>{" "}
                            <span className="text-charcoal-light">{slot.times}</span>
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-charcoal-light">{location.pricing}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/kontakt" className="btn-primary">
              Kurs anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Yoga aktuell */}
      <section id="aktuell" className="py-24 bg-warm-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/images/gruppe.jpg"
                  alt="Yoga aktuell - Yogatag und Yogawochenende"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute top-4 left-4 bg-soft-brown text-white px-4 py-2 rounded-full text-sm font-medium">
                Veranstaltungen
              </div>
            </div>
            <div>
              <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-2 block">
                {yogaOfferings[2].subtitle}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                {yogaOfferings[2].title}
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                {yogaOfferings[2].description}
              </p>
              <div className="space-y-4 mb-8">
                {yogaOfferings[2].events?.map((event, i) => (
                  <div key={i} className="bg-cream rounded-xl p-5">
                    <h3 className="font-display text-lg font-semibold text-sage-dark mb-1">
                      {event.name}
                    </h3>
                    <p className="text-charcoal-light text-sm">{event.description}</p>
                  </div>
                ))}
              </div>
              <Link href="/kontakt" className="btn-primary">
                Termine erfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Weg */}
      <section id="weg" className="py-24 bg-cream scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-2 block">
                {yogaOfferings[3].subtitle}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                {yogaOfferings[3].title}
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                {yogaOfferings[3].description}
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {yogaOfferings[3].features?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-charcoal-light">
                    <svg className="w-4 h-4 text-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary">
                Mehr erfahren
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/images/weg.jpeg"
                  alt="Yoga Weg im Lonetal"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute top-4 right-4 bg-sage text-white px-4 py-2 rounded-full text-sm font-medium">
                Lonetal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
            Finde deinen Yoga-Weg
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Hast du Fragen zu meinen Angeboten? Möchtest du herausfinden, welches 
            Format am besten zu dir passt? Ich freue mich auf deine Nachricht.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-sage-dark px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
