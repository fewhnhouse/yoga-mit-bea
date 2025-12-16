import { Metadata } from "next";
import ZumMituebenContent from "./ZumMituebenContent";

export const metadata: Metadata = {
  title: "Yoga Online | Zum Mitüben",
  description:
    "Online Yoga mit Bea – jeden Montag von 18:30 bis 19:45 Uhr. Praktiziere Yoga bequem von zu Hause aus per Google Meet.",
  openGraph: {
    title: "Yoga Online | Yoga mit Bea",
    description:
      "Online Yoga mit Bea – jeden Montag Abend. Praktiziere Yoga bequem von zu Hause aus.",
  },
  keywords: [
    "Online Yoga",
    "Yoga von zu Hause",
    "Yoga Live",
    "Yoga Montag",
    "Yoga mit Bea online",
  ],
};

export default function ZumMituebenPage() {
  return <ZumMituebenContent />;
}

