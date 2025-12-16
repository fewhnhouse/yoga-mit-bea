import { Metadata } from "next";
import YogaContent from "./YogaContent";

export const metadata: Metadata = {
  title: "Yoga Angebote",
  description:
    "Yoga mit Bea: Yoga Individuell für persönliche Einzelstunden, Yogakurse im Schloss Bernstadt und Wacholder, Yogatage, Yogawochenenden und Yoga Weg im Lonetal.",
  openGraph: {
    title: "Yoga Angebote | Yoga mit Bea",
    description:
      "Yoga Individuell, Yogakurse, Yogatage und Yoga Weg im Lonetal. Finde deinen Yoga-Weg mit Bea.",
  },
  keywords: [
    "Yoga Individuell",
    "Yogakurse",
    "Yoga Bernstadt",
    "Yoga Schloss",
    "Yoga Wacholder",
    "Yogatag",
    "Yogawochenende",
    "Yoga Lonetal",
    "Yoga Weg",
  ],
};

export default function YogaPage() {
  return <YogaContent />;
}

