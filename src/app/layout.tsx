import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/context/SiteContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Yoga & Therapie mit Bea",
  description:
    "Yoga und Therapie mit Bea. Entdecke Yoga Individuell, Yogakurse, therapeutische Behandlungen und mehr.",
  keywords: [
    "Yoga",
    "Therapie",
    "Yoga mit Bea",
    "Therapie mit Bea",
    "Yogakurse",
    "Massage",
    "Atemtherapie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${lora.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <SiteProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
