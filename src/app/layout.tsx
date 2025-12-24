import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { getSiteId, getSingletonIds } from "@/lib/getSiteId";
import { sites } from "@/config/sites";
import { sanityFetch } from "@/sanity/lib/live";
import { siteSettingsQuery } from "@/sanity/lib/queries";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yogamitbea.de";

export async function generateMetadata(): Promise<Metadata> {
  const siteId = await getSiteId();
  const { siteSettingsId } = getSingletonIds(siteId);
  const currentSite = sites[siteId];
  const siteName = currentSite.name;

  // Fetch site settings from Sanity for description
  const { data: settings } = await sanityFetch({
    query: siteSettingsQuery,
    params: { siteSettingsId },
  });

  // Use description from Sanity, or undefined to let pages set their own
  const siteDescription = settings?.seoDescription || undefined;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteName,
      template: `${siteName} | %s`,
    },
    description: siteDescription,
    keywords: [
      "Yoga",
      "Yoga Lonetal",
      "Yoga Bernstadt",
      "Yogakurse",
      "Yoga Individuell",
      "Therapie",
      "Therapeutische Massage",
      "Atemtherapie",
      "Klangschalentherapie",
      "Yoga mit Bea",
      "Therapie mit Bea",
    ],
    authors: [{ name: "Beate Ilg-Wohnhaas" }],
    creator: "Beate Ilg-Wohnhaas",
    publisher: siteName,
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: siteUrl,
      siteName: siteName,
      title: siteName,
      description: siteDescription,
      images: [
        {
          url: "/images/background.jpg",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description: siteDescription,
      images: ["/images/background.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add these when you have them:
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="de" className={`${cormorant.variable} ${lora.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <SanityLive />
        {isDraftMode && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
