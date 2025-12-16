import { Metadata } from "next";
import UeberMichContent from "./UeberMichContent";

export const metadata: Metadata = {
  title: "Über Bea",
  description:
    "Lerne Bea kennen – Yogalehrerin und Therapeutin aus dem Lonetal. Erfahre mehr über meinen Weg zum Yoga und meine Philosophie.",
  openGraph: {
    title: "Über Bea | Yoga & Therapie mit Bea",
    description:
      "Lerne Bea kennen – Yogalehrerin und Therapeutin. Mein Weg zum Yoga und meine Philosophie.",
  },
};

export default function UeberMichPage() {
  return <UeberMichContent />;
}

