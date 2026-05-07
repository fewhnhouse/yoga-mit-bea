import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description:
    'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
  openGraph: {
    title: 'Datenschutz | Yoga & Psychotherapie mit Bea',
    description:
      'Datenschutzerklärung gemäß DSGVO für yogamitbea.de.',
  },
}

export default function DatenschutzPage() {
  return (
    <section className='bg-warm-white pt-28 pb-20 min-h-[60vh]'>
      <div className='container mx-auto px-6 max-w-3xl'>
        <p className='text-primary-dark font-body text-sm tracking-widest uppercase mb-4'>
          Rechtliches
        </p>
        <h1 className='font-display text-4xl md:text-5xl font-light text-charcoal mb-10'>
          Datenschutzerklärung
        </h1>

        <div className='space-y-10 text-charcoal-light leading-relaxed'>
          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className='mt-3'>
              Beate Ilg-Wohnhaas
              <br />
              Wacholderweg 10
              <br />
              73326 Deggingen
              <br />
              Telefon:{' '}
              <a
                href='tel:+491601578254'
                className='text-primary-dark hover:opacity-80 transition-opacity'
              >
                +49 160 1578254
              </a>
              <br />
              E-Mail:{' '}
              <a
                href='mailto:info@yogamitbea.de'
                className='text-primary-dark hover:opacity-80 transition-opacity'
              >
                info@yogamitbea.de
              </a>
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte
              und Leistungen erforderlich ist. Die Verarbeitung erfolgt regelmäßig
              nur nach Einwilligung oder wenn eine gesetzliche Grundlage dies
              erlaubt.
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. (USA / EU-Standorte nach Angebot)
              gehostet. Beim Aufruf der Seiten werden durch den Hosting-Anbieter
              technisch notwendige Daten verarbeitet (z.&nbsp;B. IP-Adresse,
              Zeitpunkt des Zugriffs), um die Auslieferung der Website zu
              ermöglichen und die Stabilität sowie Sicherheit zu gewährleisten.
              Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO
              (berechtigtes Interesse an einem sicheren und zuverlässigen Betrieb).
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              Vercel:{' '}
              <a
                href='https://vercel.com/legal/privacy-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary-dark hover:opacity-80 transition-opacity'
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              4. Kontaktaufnahme und Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per E-Mail oder über das Kontaktformular auf dieser
              Website erreichen, werden die von Ihnen mitgeteilten Daten
              (z.&nbsp;B. Name, E-Mail-Adresse, Nachricht) ausschließlich zur
              Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <p className='mt-4'>
              Der Versand von Formularnachrichten erfolgt über den Dienst Resend.
              Dabei werden die Daten zur Zustellung der E-Mail verarbeitet.
              Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO
              (Vertragsanbahnung bzw. vorvertragliche Maßnahmen) oder Art.&nbsp;6
              Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an der Beantwortung
              von Anfragen).
            </p>
            <p className='mt-4'>
              Hinweise zu Resend:{' '}
              <a
                href='https://resend.com/legal/privacy-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary-dark hover:opacity-80 transition-opacity'
              >
                resend.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              5. Speicherdauer
            </h2>
            <p>
              Wir löschen personenbezogene Daten, sobald der Zweck der Speicherung
              entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              Anfragen aus dem Kontaktformular oder per E-Mail werden nach
              Erledigung gelöscht, sofern keine Aufbewahrungspflicht besteht.
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              6. Ihre Rechte
            </h2>
            <p>Sie haben nach der DSGVO insbesondere das Recht auf:</p>
            <ul className='list-disc pl-6 mt-3 space-y-2'>
              <li>Auskunft über die gespeicherten Daten (Art.&nbsp;15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art.&nbsp;16 DSGVO)</li>
              <li>Löschung („Recht auf Vergessenwerden“, Art.&nbsp;17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art.&nbsp;21 DSGVO)</li>
            </ul>
            <p className='mt-4'>
              Zur Ausübung Ihrer Rechte genügt eine Nachricht an die oben genannte
              Verantwortliche Stelle.
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              7. Beschwerderecht
            </h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
              die Verarbeitung personenbezogener Daten durch uns zu beschweren.
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              8. Änderungen
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich
              die Website oder die Rechtslage ändern. Es gilt jeweils die auf dieser
              Seite veröffentlichte Fassung.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
