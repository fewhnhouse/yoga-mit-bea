import { Metadata } from "next";
import TherapieContent from "./TherapieContent";

export const metadata: Metadata = {
  title: "Therapie Angebote",
  description:
    "Therapeutische Behandlungen mit Bea: Therapeutische Massage, Atemtherapie, Klangschalentherapie und individuelle Einzelsitzungen für Körper und Seele.",
  openGraph: {
    title: "Therapie Angebote | Therapie mit Bea",
    description:
      "Therapeutische Massage, Atemtherapie, Klangschalentherapie und Einzelsitzungen. Finde Balance für Körper und Seele.",
  },
  keywords: [
    "Therapeutische Massage",
    "Atemtherapie",
    "Klangschalentherapie",
    "Therapie",
    "Entspannung",
    "Körpertherapie",
    "Einzelsitzungen",
  ],
};

export default function TherapiePage() {
  return <TherapieContent />;
}

