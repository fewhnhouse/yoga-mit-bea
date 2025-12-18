/**
 * Create Section-Based Pages Script
 * 
 * This script creates example pages using the new section-based system.
 * Run with: npx tsx scripts/create-section-pages.ts
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
// YOGA HOMEPAGE (Section-based)
// ============================================

const yogaHomepage = {
  _id: "page-yoga-home",
  _type: "page",
  site: "yoga",
  title: "Yoga mit Bea - Startseite",
  slug: { _type: "slug", current: "home" },
  sections: [
    // Hero Section
    {
      _key: "hero-1",
      _type: "heroSection",
      title: "Yoga und Therapie mit Bea",
      tagline: "Dein Raum für Bewegung, Stille und Heilung",
      subtitle: "Entdecke Yoga als Weg zu dir selbst. In meinen Kursen, Einzelstunden und besonderen Veranstaltungen begleite ich dich achtsam auf deiner Reise.",
      primaryCta: {
        text: "Yoga entdecken",
        href: "/yoga",
      },
      secondaryCta: {
        text: "Kontakt aufnehmen",
        href: "/kontakt",
      },
    },
    // About Preview (Image + Text)
    {
      _key: "about-preview-1",
      _type: "imageTextSection",
      label: "Über Mich",
      title: "Bea",
      description: [
        "Yoga ist für mich ein Weg der Selbsterfahrung und inneren Einkehr. In meiner langjährigen Praxis habe ich erfahren, wie Yoga uns helfen kann, zu uns selbst zu finden und innere Ruhe zu kultivieren.",
        "Mein Verständnis von Yoga geht über die körperliche Praxis hinaus – es ist eine Einladung, sich selbst achtsam zu begegnen.",
      ],
      cta: {
        text: "Mehr erfahren",
        href: "/ueber-mich",
      },
      imagePosition: "left",
      aspectRatio: "4/5",
      background: "pattern",
      decorativeBlobs: true,
      padding: "section",
    },
    // Services Grid
    {
      _key: "services-grid-1",
      _type: "cardsGridSection",
      label: "Angebote",
      title: "Yoga mit Bea",
      description: "Ob Einzelstunde, Kurs oder besondere Veranstaltung – finde das Angebot, das zu dir passt.",
      columns: 4,
      background: "cream",
      cardVariant: "card",
      cardAlign: "left",
      cards: [
        {
          _key: "card-1",
          serviceRef: { _type: "reference", _ref: "service-yoga-individuell" },
          ctaText: "Mehr erfahren",
        },
        {
          _key: "card-2",
          serviceRef: { _type: "reference", _ref: "service-yoga-kurse" },
          ctaText: "Mehr erfahren",
        },
        {
          _key: "card-3",
          serviceRef: { _type: "reference", _ref: "service-yoga-aktuell" },
          ctaText: "Mehr erfahren",
        },
        {
          _key: "card-4",
          serviceRef: { _type: "reference", _ref: "service-yoga-weg" },
          ctaText: "Mehr erfahren",
        },
      ],
    },
    // Quote Section
    {
      _key: "quote-1",
      _type: "ctaSection",
      title: "Mein Verständnis von Yoga",
      description: "Yoga ist nicht nur Bewegung – es ist eine Reise nach innen, ein Weg der Achtsamkeit und Selbsterkenntnis.",
      ctas: [
        {
          _key: "cta-1",
          text: "Mehr über Yoga",
          href: "/yoga",
          variant: "secondary",
        },
      ],
      variant: "solid",
      isQuote: true,
      decorative: true,
      padding: "large",
    },
    // Testimonials
    {
      _key: "testimonials-1",
      _type: "testimonialsSection",
      label: "Teilnehmerstimmen",
      title: "Was andere sagen",
      showTestimonialsFrom: "yoga",
      featuredOnly: true,
    },
    // CTA Section
    {
      _key: "cta-final-1",
      _type: "ctaSection",
      title: "Beginne deine Yoga-Reise",
      description: "Nimm Kontakt auf und finde heraus, welches Angebot am besten zu dir passt. Ich freue mich darauf, dich auf deinem Weg zu begleiten.",
      ctas: [
        {
          _key: "cta-1",
          text: "Kontakt aufnehmen",
          href: "/kontakt",
          variant: "primary",
        },
        {
          _key: "cta-2",
          text: "Angebote ansehen",
          href: "/yoga",
          variant: "secondary",
        },
      ],
      variant: "light",
      padding: "default",
    },
  ],
  seoTitle: "Yoga mit Bea - Yoga Kurse, Einzelstunden & Veranstaltungen",
  seoDescription: "Entdecke Yoga als Weg zu dir selbst. Yogakurse im Schloss Bernstadt und Wacholder, Einzelstunden, Yogatage und mehr mit Bea.",
};

// ============================================
// THERAPIE HOMEPAGE (Section-based)
// ============================================

const therapieHomepage = {
  _id: "page-therapie-home",
  _type: "page",
  site: "therapie",
  title: "Therapie mit Bea - Startseite",
  slug: { _type: "slug", current: "home" },
  sections: [
    // Hero Section
    {
      _key: "hero-1",
      _type: "heroSection",
      title: "Therapie mit Bea",
      tagline: "Heilung auf körperlicher und emotionaler Ebene",
      subtitle: "Heilung geschieht auf vielen Ebenen. Meine therapeutischen Angebote unterstützen dich dabei, körperliche und emotionale Balance zu finden.",
      primaryCta: {
        text: "Angebote entdecken",
        href: "/therapie",
      },
      secondaryCta: {
        text: "Kontakt aufnehmen",
        href: "/kontakt",
      },
    },
    // About Preview (Image + Text)
    {
      _key: "about-preview-1",
      _type: "imageTextSection",
      label: "Über Mich",
      title: "Bea",
      description: [
        "Heilung ist für mich ein ganzheitlicher Prozess. Mit verschiedenen therapeutischen Methoden begleite ich Menschen dabei, körperliche Verspannungen zu lösen und emotionale Balance zu finden.",
        "Jede Behandlung ist ein Raum für dich – achtsam, individuell und heilsam. Ich freue mich, dich auf deinem Weg zu begleiten.",
      ],
      cta: {
        text: "Mehr erfahren",
        href: "/ueber-mich",
      },
      imagePosition: "left",
      aspectRatio: "4/5",
      background: "pattern",
      decorativeBlobs: true,
      padding: "section",
    },
    // Services Grid
    {
      _key: "services-grid-1",
      _type: "cardsGridSection",
      label: "Angebote",
      title: "Therapie mit Bea",
      description: "Finde die therapeutische Behandlung, die dich auf deinem Weg unterstützt.",
      columns: 4,
      background: "cream",
      cardVariant: "card",
      cardAlign: "left",
      cards: [
        {
          _key: "card-1",
          serviceRef: { _type: "reference", _ref: "service-therapie-massage" },
          ctaText: "Mehr erfahren",
        },
        {
          _key: "card-2",
          serviceRef: { _type: "reference", _ref: "service-therapie-atemtherapie" },
          ctaText: "Mehr erfahren",
        },
        {
          _key: "card-3",
          serviceRef: { _type: "reference", _ref: "service-therapie-klangschalen" },
          ctaText: "Mehr erfahren",
        },
        {
          _key: "card-4",
          serviceRef: { _type: "reference", _ref: "service-therapie-einzelsitzung" },
          ctaText: "Mehr erfahren",
        },
      ],
    },
    // Quote Section
    {
      _key: "quote-1",
      _type: "ctaSection",
      title: "Mein Ansatz",
      description: "Heilung beginnt dort, wo wir uns erlauben, ganz bei uns selbst anzukommen.",
      ctas: [
        {
          _key: "cta-1",
          text: "Mehr über Therapie",
          href: "/therapie",
          variant: "secondary",
        },
      ],
      variant: "solid",
      isQuote: true,
      decorative: true,
      padding: "large",
    },
    // CTA Section
    {
      _key: "cta-final-1",
      _type: "ctaSection",
      title: "Beginne deinen Weg zur Heilung",
      description: "Nimm Kontakt auf und finde heraus, welche Behandlung dich am besten unterstützt. Ich freue mich auf deine Nachricht.",
      ctas: [
        {
          _key: "cta-1",
          text: "Kontakt aufnehmen",
          href: "/kontakt",
          variant: "primary",
        },
        {
          _key: "cta-2",
          text: "Angebote ansehen",
          href: "/therapie",
          variant: "secondary",
        },
      ],
      variant: "light",
      padding: "default",
    },
  ],
  seoTitle: "Therapie mit Bea - Therapeutische Behandlungen",
  seoDescription: "Ganzheitliche therapeutische Angebote: Massage, Atemtherapie und Klangschalentherapie. Finde körperliche und emotionale Balance mit Bea.",
};

// ============================================
// SEED FUNCTION
// ============================================

async function createSectionPages() {
  console.log("🌱 Creating section-based pages...\n");

  const transaction = client.transaction();

  // Create Yoga Homepage
  console.log("📄 Creating Yoga homepage (section-based)...");
  transaction.createOrReplace(yogaHomepage);

  // Create Therapie Homepage
  console.log("📄 Creating Therapie homepage (section-based)...");
  transaction.createOrReplace(therapieHomepage);

  // Commit
  console.log("\n⏳ Committing transaction...");
  try {
    await transaction.commit();
    console.log("\n✅ Section-based pages created successfully!");
    console.log("\n📋 Created:");
    console.log("   - page-yoga-home (Yoga homepage with sections)");
    console.log("   - page-therapie-home (Therapie homepage with sections)");
    console.log("\n🔗 Next steps:");
    console.log("   1. Go to Sanity Studio (/studio)");
    console.log("   2. Navigate to Site Settings for each site");
    console.log("   3. Set the 'Homepage' field to the corresponding page");
    console.log("   4. Add images to the ImageTextSection sections");
    console.log("\n📝 Note: The legacy homepage content is still available as fallback.");
  } catch (error) {
    console.error("\n❌ Error creating pages:", error);
    process.exit(1);
  }
}

createSectionPages();

