import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Yoga & Therapie mit Bea | Startseite",
  description:
    "Willkommen bei Yoga & Therapie mit Bea. Entdecke Yoga Individuell, Yogakurse im Schloss Bernstadt und Wacholder, sowie therapeutische Behandlungen im Lonetal.",
  openGraph: {
    title: "Yoga & Therapie mit Bea",
    description:
      "Willkommen bei Yoga & Therapie mit Bea. Yoga Individuell, Yogakurse und therapeutische Behandlungen im Lonetal.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}

