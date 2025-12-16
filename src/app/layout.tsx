import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yoga-mit-bea.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yoga & Therapie mit Bea",
    template: "%s | Yoga & Therapie mit Bea",
  },
  description:
    "Yoga und Therapie mit Bea. Yoga Individuell, Yogakurse im Schloss Bernstadt und Wacholder, therapeutische Massage, Atemtherapie und mehr.",
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
  publisher: "Yoga & Therapie mit Bea",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Yoga & Therapie mit Bea",
    title: "Yoga & Therapie mit Bea",
    description:
      "Yoga und Therapie mit Bea. Yoga Individuell, Yogakurse, therapeutische Behandlungen und mehr.",
    images: [
      {
        url: "/images/background.jpg",
        width: 1200,
        height: 630,
        alt: "Yoga & Therapie mit Bea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga & Therapie mit Bea",
    description:
      "Yoga und Therapie mit Bea im Lonetal. Yoga Individuell, Yogakurse, therapeutische Behandlungen und mehr.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${lora.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
