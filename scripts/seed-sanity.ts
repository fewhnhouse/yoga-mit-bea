/**
 * Sanity Seed Script
 * 
 * This script creates initial content in Sanity CMS.
 * Run with: npx tsx scripts/seed-sanity.ts
 * 
 * Prerequisites:
 * 1. Set SANITY_API_TOKEN environment variable (create at sanity.io/manage)
 * 2. Set NEXT_PUBLIC_SANITY_PROJECT_ID environment variable
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing environment variables:");
  console.error("  NEXT_PUBLIC_SANITY_PROJECT_ID:", projectId ? "✓" : "✗");
  console.error("  SANITY_API_TOKEN:", token ? "✓" : "✗");
  console.error("\nCreate a token at: https://sanity.io/manage");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ============================================
// SITE SETTINGS
// ============================================

const siteSettings = [
  {
    _id: "siteSettings-yoga",
    _type: "siteSettings",
    siteId: "yoga",
    name: "Yoga mit Bea",
    tagline: "Durch Yoga gehst du nur auf dich selbst zu",
    domain: "yogamitbea.de",
    primaryColor: "sage",
    seoDescription: "Yoga mit Bea - Yogakurse, Einzelstunden und besondere Veranstaltungen in Bernstadt und Deggingen. Entdecke Yoga als Weg zu dir selbst.",
    contactEmail: "bea@yogamitbea.de",
  },
  {
    _id: "siteSettings-therapie",
    _type: "siteSettings",
    siteId: "therapie",
    name: "Psychotherapie mit Bea",
    tagline: "Heilung für Körper und Seele",
    domain: "therapiemitbea.de",
    primaryColor: "terracotta",
    seoDescription: "Psychotherapie mit Bea - Therapeutische Massage, Atemtherapie und Klangschalentherapie. Ganzheitliche Behandlungen für Körper und Seele.",
    contactEmail: "bea@therapiemitbea.de",
  },
];

// ============================================
// ABOUT BEA
// ============================================

const aboutBea = {
  _id: "aboutBea",
  _type: "aboutBea",
  name: "Bea",
  photoAlt: "Bea - Yoga und Psychotherapie",
  yogaContent: {
    intro: "Yoga begleitet mich seit vielen Jahren und ist zu einem wesentlichen Teil meines Lebens geworden. Was als persönliche Praxis begann, hat sich zu meiner Berufung entwickelt: Menschen auf ihrem eigenen Yoga-Weg zu begleiten.",
    philosophyHeading: "Mein Verständnis von Yoga",
    philosophy: [
      {
        _type: "block",
        _key: "yoga-phil-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "yoga-phil-1-span",
            text: "Yoga ist für mich weit mehr als körperliche Übungen. Es ist ein Weg der Selbsterfahrung, ein Prozess des Zu-sich-selbst-Kommens. In der Stille der Praxis können wir uns begegnen – mit allem, was uns ausmacht.",
          },
        ],
      },
      {
        _type: "block",
        _key: "yoga-phil-2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "yoga-phil-2-span",
            text: "Mein Ansatz ist sanft und achtsam. Ich möchte einen Raum schaffen, in dem du dich sicher fühlst, zu erforschen und zu wachsen. Dabei geht es nicht um Perfektion oder Leistung, sondern um das bewusste Erleben des Augenblicks.",
          },
        ],
      },
    ],
  },
  therapieContent: {
    intro: "Die Arbeit mit Menschen und ihrem Wohlbefinden ist meine Berufung. Mit verschiedenen therapeutischen Methoden begleite ich dich dabei, körperliche Verspannungen zu lösen und emotionale Balance zu finden.",
    philosophyHeading: "Mein therapeutischer Ansatz",
    philosophy: [
      {
        _type: "block",
        _key: "ther-phil-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "ther-phil-1-span",
            text: "Heilung ist für mich ein ganzheitlicher Prozess. Körper, Geist und Seele sind untrennbar miteinander verbunden. In meinen Behandlungen schaffe ich einen sicheren Raum, in dem du dich entspannen und regenerieren kannst.",
          },
        ],
      },
      {
        _type: "block",
        _key: "ther-phil-2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "ther-phil-2-span",
            text: "Mit verschiedenen Methoden – von Massage über Atemtherapie bis zur Klangschalentherapie – unterstütze ich dich dabei, Blockaden zu lösen und neue Energie zu finden.",
          },
        ],
      },
    ],
  },
  coreValues: [
    {
      _key: "value-1",
      title: "Achtsame Begleitung",
      yogaDescription: "Ich nehme mir Zeit für dich und gehe individuell auf deine Bedürfnisse ein.",
      therapieDescription: "Ich nehme mir Zeit für dich und gehe individuell auf deine Bedürfnisse ein.",
      icon: "heart",
    },
    {
      _key: "value-2",
      title: "Raum und Zeit",
      yogaDescription: "In meinen Stunden herrscht kein Druck – du darfst sein, wie du bist.",
      therapieDescription: "Jede Behandlung bekommt die Zeit, die sie braucht – ohne Hektik.",
      icon: "clock",
    },
    {
      _key: "value-3",
      title: "Ganzheitlicher Ansatz",
      yogaDescription: "Yoga als Verbindung von Körper, Geist und Atem – nicht nur Übungen.",
      therapieDescription: "Körper, Geist und Seele als Einheit betrachten und behandeln.",
      icon: "lotus",
    },
  ],
};

// ============================================
// LOCATIONS
// ============================================

const locations = [
  {
    _id: "location-schloss",
    _type: "location",
    name: "Yoga mit Bea im Schloss",
    shortName: "Schloss",
    slug: { _type: "slug", current: "schloss" },
    description: "Yogakurse in historischem Ambiente im Schloss Bernstadt.",
    address: "Schmiedgasse 5, 89182 Bernstadt",
    googleMapsUrl: "https://maps.google.com/?q=Schmiedgasse+5,+89182+Bernstadt",
    schedule: [
      { _key: "sch-1", day: "Dienstag", times: "17:30–18:30 & 18:45–20:00" },
      { _key: "sch-2", day: "Mittwoch", times: "17:30–18:30 & 18:45–20:00" },
    ],
    pricing: "8er Karte: 110€/120€ · 5er Flex: 80€/90€",
    usedBy: "yoga",
    order: 1,
  },
  {
    _id: "location-wacholder",
    _type: "location",
    name: "Yoga mit Bea im Wacholder",
    shortName: "Wacholder",
    slug: { _type: "slug", current: "wacholder" },
    description: "Kleine Gruppe (max. 8 Teilnehmer) im schönen Yogaraum im Holzhaus.",
    address: "Wacholderweg 10, 73326 Deggingen",
    googleMapsUrl: "https://maps.google.com/?q=Wacholderweg+10,+73326+Deggingen",
    schedule: [
      { _key: "wach-1", day: "Montag", times: "17:00–18:15 & 18:30–19:45" },
    ],
    pricing: "8er Karte: 120€ · 5er Flex: 90€ (75 min)",
    maxParticipants: 8,
    usedBy: "yoga",
    order: 2,
  },
] as const;

// ============================================
// YOGA SERVICES
// ============================================

const yogaServices = [
  {
    _id: "service-yoga-individuell",
    _type: "service",
    site: "yoga",
    title: "Yoga Individuell",
    slug: { _type: "slug", current: "yoga-individuell" },
    subtitle: "Yoga für dich",
    shortDescription: "Yoga für dich – individuell abgestimmte Einzelstunden, die ganz auf deine Bedürfnisse eingehen.",
    icon: "lotus",
    features: [
      "Persönliche Betreuung",
      "Flexible Termingestaltung",
      "Angepasste Übungen",
      "Raum für deine Fragen",
    ],
    duration: "Termine nach Vereinbarung",
    ctaText: "Anfragen",
    ctaLink: "/kontakt",
    order: 1,
  },
  {
    _id: "service-yoga-kurse",
    _type: "service",
    site: "yoga",
    title: "Yogakurse",
    slug: { _type: "slug", current: "yogakurse" },
    subtitle: "Yoga mit Bea im Schloss & im Wacholder",
    shortDescription: "Yoga mit Bea im Schloss und im Wacholder – regelmäßige Kurse in entspannter Atmosphäre.",
    icon: "group",
    locations: [
      { _type: "reference", _ref: "location-schloss" },
      { _type: "reference", _ref: "location-wacholder" },
    ],
    ctaText: "Kurs anfragen",
    ctaLink: "/kontakt",
    order: 2,
  },
  {
    _id: "service-yoga-aktuell",
    _type: "service",
    site: "yoga",
    title: "Yoga aktuell",
    slug: { _type: "slug", current: "yoga-aktuell" },
    subtitle: "Yogatag & Yogawochenende",
    shortDescription: "Yogatag und Yogawochenende – besondere Veranstaltungen für intensives Eintauchen.",
    icon: "calendar",
    ctaText: "Termine erfragen",
    ctaLink: "/kontakt",
    order: 3,
  },
  {
    _id: "service-yoga-weg",
    _type: "service",
    site: "yoga",
    title: "Yoga Weg",
    slug: { _type: "slug", current: "yoga-weg" },
    subtitle: "im Lonetal",
    shortDescription: "Yoga im Lonetal – Yoga in der Natur erleben, verbunden mit Wandern und Achtsamkeit.",
    icon: "path",
    features: [
      "Yoga in der Natur",
      "Achtsames Wandern",
      "Besondere Kraftorte",
      "Verbindung von Bewegung und Stille",
    ],
    ctaText: "Mehr erfahren",
    ctaLink: "/kontakt",
    order: 4,
  },
  {
    _id: "service-yoga-online",
    _type: "service",
    site: "yoga",
    title: "Yoga Online",
    slug: { _type: "slug", current: "yoga-online" },
    subtitle: "Zum Mitüben",
    shortDescription: "Praktiziere Yoga bequem von zu Hause aus – Online-Stunden über Google Meet.",
    icon: "video",
    features: [
      "Von zu Hause üben",
      "Gemeinsam üben",
      "Persönliche Anleitung",
    ],
    duration: "Montag 18:30–19:45 Uhr",
    ctaText: "Mehr erfahren",
    ctaLink: "/zum-mitueben",
    order: 5,
  },
];

// ============================================
// THERAPIE SERVICES
// ============================================

const therapieServices = [
  {
    _id: "service-therapie-massage",
    _type: "service",
    site: "therapie",
    title: "Therapeutische Massage",
    slug: { _type: "slug", current: "therapeutische-massage" },
    subtitle: "Körperliche Entspannung",
    shortDescription: "Löse Verspannungen und fördere dein Wohlbefinden durch achtsame Massagetechniken.",
    icon: "hands",
    benefits: [
      "Lösung von Muskelverspannungen",
      "Verbesserung der Durchblutung",
      "Stressabbau",
      "Tiefe Entspannung",
    ],
    duration: "60 Minuten",
    ctaText: "Termin anfragen",
    ctaLink: "/kontakt",
    order: 1,
  },
  {
    _id: "service-therapie-atemtherapie",
    _type: "service",
    site: "therapie",
    title: "Atemtherapie",
    slug: { _type: "slug", current: "atemtherapie" },
    subtitle: "Die Kraft des Atems",
    shortDescription: "Entdecke die heilende Kraft deines Atems für mehr Energie und innere Ruhe.",
    icon: "wind",
    benefits: [
      "Stressreduktion",
      "Verbesserte Lungenkapazität",
      "Emotionale Balance",
      "Mehr Energie",
    ],
    duration: "45 Minuten",
    ctaText: "Termin anfragen",
    ctaLink: "/kontakt",
    order: 2,
  },
  {
    _id: "service-therapie-klangschalen",
    _type: "service",
    site: "therapie",
    title: "Klangschalentherapie",
    slug: { _type: "slug", current: "klangschalentherapie" },
    subtitle: "Heilende Schwingungen",
    shortDescription: "Tauche ein in die wohltuenden Schwingungen tibetischer Klangschalen.",
    icon: "sound",
    benefits: [
      "Tiefe Entspannung",
      "Harmonisierung",
      "Stressabbau",
      "Meditative Zustände",
    ],
    duration: "50 Minuten",
    ctaText: "Termin anfragen",
    ctaLink: "/kontakt",
    order: 3,
  },
  {
    _id: "service-therapie-einzelsitzung",
    _type: "service",
    site: "therapie",
    title: "Therapeutische Einzelsitzung",
    slug: { _type: "slug", current: "therapeutische-einzelsitzung" },
    subtitle: "Ganzheitliche Begleitung",
    shortDescription: "Ganzheitliche Begleitung für deine persönlichen Themen und Anliegen.",
    icon: "lotus",
    benefits: [
      "Persönliche Betreuung",
      "Ganzheitlicher Ansatz",
      "Individuelle Methoden",
      "Nachhaltige Wirkung",
    ],
    duration: "60-90 Minuten",
    ctaText: "Termin anfragen",
    ctaLink: "/kontakt",
    order: 4,
  },
];

// ============================================
// YOGA TESTIMONIALS
// ============================================

const yogaTestimonials = [
  {
    _id: "testimonial-yoga-1",
    _type: "testimonial",
    site: "yoga",
    name: "Ursula",
    quote: "An Deinen Yogastunden gefällt mir die Ruhe, mit der Du die Stunden gestaltest. Mir hilft auch sehr, dass Du die Übungen immer lange ansagst, bevor wir alleine üben können. Somit kann man immer wieder einsteigen, wenn man einmal mit den Gedanken abgewandert ist. Sehr gut ist auch, dass Du immer wieder sagst 'jeder übt so gut er kann', es gibt keinen Leistungsdruck.",
    featured: true,
    order: 1,
  },
  {
    _id: "testimonial-yoga-2",
    _type: "testimonial",
    site: "yoga",
    name: "Annette",
    quote: "Ich genieße Bea live in der Gruppe im Bernstadter Schloss schon viele, viele Jahre! Selbst mit größeren Verletzungen und körperlichen Einschränkungen hast du mich liebe Bea durch die Yogastunden geführt und ich konnte schnelle Genesung erleben! ALI - atmen lächeln innehalten - ist für mich zum liebevollen Alltagsbegleiter geworden. Von ganzem Herzen DANKESCHÖN liebe Bea für die wundervollen Yogaeinheiten!",
    featured: true,
    order: 2,
  },
  {
    _id: "testimonial-yoga-3",
    _type: "testimonial",
    site: "yoga",
    name: "Brigitte",
    quote: "Yoga mit Bea macht glücklich.",
    featured: true,
    order: 3,
  },
  {
    _id: "testimonial-yoga-4",
    _type: "testimonial",
    site: "yoga",
    name: "Dagmar",
    quote: "Bea deine Yogastunden sind phantastisch! Durch deine empathische, empfindsame, ruhige, besonnene, herzliche Art fühle ich mich nach deinen Yogastunden immer mit mir in einem Gleichgewicht! Durch deine Yogastunden hat sich meine Sensibilität für meinen Körper, meinen Atem, meine Gedanken im Kopf und auch für den Umgang mit meinen Mitmenschen unsagbar positiv erweitert!",
    featured: true,
    order: 4,
  },
  {
    _id: "testimonial-yoga-5",
    _type: "testimonial",
    site: "yoga",
    name: "Heidrun",
    quote: "Für mich hat diese späte Yoga Stunde eine ganz eigene Qualität, da ich meinen Tag damit abschließe, entschleunige, zur Ruhe komme, mich intensiv auf meinen Atem, meine Bewegungen auf mich selber, meinen Körper konzentriere. Das Ambiente in dem schönen Schlosszimmer, gibt mir das Gefühl, in einem ganz besonders geschützten Raum zu sein.",
    featured: true,
    order: 5,
  },
  {
    _id: "testimonial-yoga-6",
    _type: "testimonial",
    site: "yoga",
    name: "Annika",
    quote: "Jeden Dienstag gehe ich komplett anders aus der Stunde hinaus als ich hereingekommen bin. Als kritischer Mensch hinein. Als selbstliebender hinaus. Dafür danke ich dir sehr!! Diese innere Stimme ist dann noch eine Weile bei mir. Und ab und zu höre ich sie auch im Alltag.",
    featured: true,
    order: 6,
  },
  {
    _id: "testimonial-yoga-7",
    _type: "testimonial",
    site: "yoga",
    name: "Cornelia",
    quote: "Beate hat in ihrer Art die Yogaübungen anzuleiten spürbar diesen Hintergrund. Die Asanas sind wichtig. Beate leitet sie verständlich und korrekt an und gleichzeitig vermittelt sie durch ihre wertfreie Einfühlsamkeit, dass jeder individuelle Weg die Asanas zu üben immer bestmöglich für die betreffende Person ist.",
    featured: true,
    order: 7,
  },
  {
    _id: "testimonial-yoga-8",
    _type: "testimonial",
    site: "yoga",
    name: "Caro",
    quote: "Wir hören Deine Stimme und geben ab, was unsere Seele an Ballast hat. Sobald wir unsere Augen schließen, atmen, dehnen, strecken, fließen, sind wir auf einmal ganz achtsam im Hier. So finden wir das kleine Glück, immer leichter, Stück für Stück. Dafür danken wir Dir! ♡",
    featured: true,
    order: 8,
  },
  {
    _id: "testimonial-yoga-9",
    _type: "testimonial",
    site: "yoga",
    name: "Karin",
    quote: "Yoga mit Bea: Beruhigend, Entspannend, Ausgleichend.",
    featured: true,
    order: 9,
  },
];

// ============================================
// THERAPIE TESTIMONIALS (Separate set)
// ============================================

const therapieTestimonials = [
  {
    _id: "testimonial-therapie-1",
    _type: "testimonial",
    site: "therapie",
    name: "Maria",
    quote: "Nach der Massage bei Bea fühle ich mich wie neugeboren. Ihre einfühlsame Art und die achtsame Berührung lösen nicht nur körperliche Verspannungen, sondern bringen auch meine Seele wieder ins Gleichgewicht.",
    featured: true,
    order: 1,
  },
  {
    _id: "testimonial-therapie-2",
    _type: "testimonial",
    site: "therapie",
    name: "Thomas",
    quote: "Die Klangschalentherapie war eine völlig neue Erfahrung für mich. Die tiefen Schwingungen haben mich in einen Zustand tiefer Entspannung versetzt, den ich so noch nie erlebt habe. Absolut empfehlenswert!",
    featured: true,
    order: 2,
  },
  {
    _id: "testimonial-therapie-3",
    _type: "testimonial",
    site: "therapie",
    name: "Sabine",
    quote: "Durch die Atemtherapie bei Bea habe ich gelernt, bewusster zu atmen und dadurch mehr Ruhe in meinen Alltag zu bringen. Die Wirkung hält lange an und ich fühle mich insgesamt ausgeglichener.",
    featured: true,
    order: 3,
  },
  {
    _id: "testimonial-therapie-4",
    _type: "testimonial",
    site: "therapie",
    name: "Elisabeth",
    quote: "Bea schafft einen Raum, in dem man sich vollkommen sicher und geborgen fühlt. Ihre therapeutische Arbeit geht weit über das Körperliche hinaus – sie berührt die Seele.",
    featured: true,
    order: 4,
  },
  {
    _id: "testimonial-therapie-5",
    _type: "testimonial",
    site: "therapie",
    name: "Heinrich",
    quote: "Nach jahrelangen Rückenschmerzen hat mir die therapeutische Massage bei Bea endlich Linderung gebracht. Ihre Hände wissen genau, wo sie ansetzen müssen.",
    featured: true,
    order: 5,
  },
];

// ============================================
// HOMEPAGE CONTENT
// ============================================

const homepageContent = [
  {
    _id: "homepage-yoga",
    _type: "homepageContent",
    siteId: "yoga",
    heroSection: {
      subtitle: "Entdecke Yoga als Weg zu dir selbst. In meinen Kursen, Einzelstunden und besonderen Veranstaltungen begleite ich dich achtsam auf deiner Reise.",
      primaryCtaText: "Yoga entdecken",
      primaryCtaLink: "/yoga",
      secondaryCtaText: "Kontakt aufnehmen",
      secondaryCtaLink: "/kontakt",
    },
    aboutPreview: {
      paragraph1: "Yoga ist für mich ein Weg der Selbsterfahrung und inneren Einkehr. In meiner langjährigen Praxis habe ich erfahren, wie Yoga uns helfen kann, zu uns selbst zu finden und innere Ruhe zu kultivieren.",
      paragraph2: "Mein Verständnis von Yoga geht über die körperliche Praxis hinaus – es ist eine Einladung, sich selbst achtsam zu begegnen.",
    },
    quoteSection: {
      heading: "Mein Verständnis von Yoga",
      quote: "Yoga ist nicht nur Bewegung – es ist eine Reise nach innen, ein Weg der Achtsamkeit und Selbsterkenntnis.",
      ctaText: "Mehr über Yoga",
      ctaLink: "/yoga",
    },
    servicesSection: {
      heading: "Yoga mit Bea",
      description: "Ob Einzelstunde, Kurs oder besondere Veranstaltung – finde das Angebot, das zu dir passt.",
    },
    ctaSection: {
      heading: "Beginne deine Yoga-Reise",
      text: "Nimm Kontakt auf und finde heraus, welches Angebot am besten zu dir passt. Ich freue mich darauf, dich auf deinem Weg zu begleiten.",
      primaryCtaText: "Kontakt aufnehmen",
      primaryCtaLink: "/kontakt",
      secondaryCtaText: "Angebote ansehen",
      secondaryCtaLink: "/yoga",
    },
  },
  {
    _id: "homepage-therapie",
    _type: "homepageContent",
    siteId: "therapie",
    heroSection: {
      subtitle: "Heilung geschieht auf vielen Ebenen. Meine therapeutischen Angebote unterstützen dich dabei, körperliche und emotionale Balance zu finden.",
      primaryCtaText: "Angebote entdecken",
      primaryCtaLink: "/therapie",
      secondaryCtaText: "Kontakt aufnehmen",
      secondaryCtaLink: "/kontakt",
    },
    aboutPreview: {
      paragraph1: "Heilung ist für mich ein ganzheitlicher Prozess. Mit verschiedenen therapeutischen Methoden begleite ich Menschen dabei, körperliche Verspannungen zu lösen und emotionale Balance zu finden.",
      paragraph2: "Jede Behandlung ist ein Raum für dich – achtsam, individuell und heilsam. Ich freue mich, dich auf deinem Weg zu begleiten.",
    },
    quoteSection: {
      heading: "Mein Ansatz",
      quote: "Heilung beginnt dort, wo wir uns erlauben, ganz bei uns selbst anzukommen.",
      ctaText: "Mehr über Psychotherapie",
      ctaLink: "/therapie",
    },
    servicesSection: {
      heading: "Psychotherapie mit Bea",
      description: "Finde die therapeutische Behandlung, die dich auf deinem Weg unterstützt.",
    },
    ctaSection: {
      heading: "Beginne deinen Weg zur Heilung",
      text: "Nimm Kontakt auf und finde heraus, welche Behandlung dich am besten unterstützt. Ich freue mich auf deine Nachricht.",
      primaryCtaText: "Kontakt aufnehmen",
      primaryCtaLink: "/kontakt",
      secondaryCtaText: "Angebote ansehen",
      secondaryCtaLink: "/therapie",
    },
  },
];

// ============================================
// SEED FUNCTION
// ============================================

async function seed() {
  console.log("🌱 Starting Sanity seed...\n");

  const transaction = client.transaction();

  // Site Settings
  console.log("📝 Creating site settings...");
  for (const settings of siteSettings) {
    transaction.createOrReplace(settings);
  }

  // About Bea
  console.log("👤 Creating about Bea...");
  transaction.createOrReplace(aboutBea);

  // Locations
  console.log("📍 Creating locations...");
  for (const location of locations) {
    transaction.createOrReplace(location);
  }

  // Yoga Services
  console.log("🧘 Creating yoga services...");
  for (const service of yogaServices) {
    transaction.createOrReplace(service);
  }

  // Psychotherapie Services
  console.log("💆 Creating psychotherapie services...");
  for (const service of therapieServices) {
    transaction.createOrReplace(service);
  }

  // Yoga Testimonials
  console.log("💬 Creating yoga testimonials...");
  for (const testimonial of yogaTestimonials) {
    transaction.createOrReplace(testimonial);
  }

  // Psychotherapie Testimonials
  console.log("💬 Creating psychotherapie testimonials...");
  for (const testimonial of therapieTestimonials) {
    transaction.createOrReplace(testimonial);
  }

  // Homepage Content
  console.log("🏠 Creating homepage content...");
  for (const content of homepageContent) {
    transaction.createOrReplace(content);
  }

  // Commit
  console.log("\n⏳ Committing transaction...");
  try {
    await transaction.commit();
    console.log("\n✅ Seed completed successfully!");
    console.log("\n📋 Created:");
    console.log(`   - ${siteSettings.length} site settings`);
    console.log(`   - 1 about Bea document`);
    console.log(`   - ${locations.length} locations`);
    console.log(`   - ${yogaServices.length} yoga services`);
    console.log(`   - ${therapieServices.length} therapie services`);
    console.log(`   - ${yogaTestimonials.length} yoga testimonials`);
    console.log(`   - ${therapieTestimonials.length} therapie testimonials`);
    console.log(`   - ${homepageContent.length} homepage content documents`);
    console.log("\n🖼️  Remember to add images manually in Sanity Studio at /studio");
  } catch (error) {
    console.error("\n❌ Error during seed:", error);
    process.exit(1);
  }
}

seed();

