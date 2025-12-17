import type { Metadata } from 'next'
import KontaktContent from './KontaktContent'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktiere Bea für Yoga und Therapie. Vereinbare einen Termin für Yoga Individuell, Yogakurse oder therapeutische Behandlungen.',
  openGraph: {
    title: 'Kontakt | Yoga & Therapie mit Bea',
    description:
      'Kontaktiere Bea für Yoga und Therapie. Vereinbare deinen persönlichen Termin.',
  },
}

export default function KontaktPage() {
  return <KontaktContent />
}
