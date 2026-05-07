import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum und rechtliche Angaben zu Yoga mit Bea und Psychotherapie mit Bea.',
  openGraph: {
    title: 'Impressum | Yoga & Psychotherapie mit Bea',
    description:
      'Impressum und gesetzliche Anbieterkennzeichnung gemäß TMG.',
  },
}

export default function ImpressumPage() {
  return (
    <section className='bg-warm-white pt-28 pb-20 min-h-[60vh]'>
      <div className='container mx-auto px-6 max-w-3xl'>
        <p className='text-primary-dark font-body text-sm tracking-widest uppercase mb-4'>
          Rechtliches
        </p>
        <h1 className='font-display text-4xl md:text-5xl font-light text-charcoal mb-10'>
          Impressum
        </h1>

        <div className='space-y-10 text-charcoal-light leading-relaxed'>
          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Beate Ilg-Wohnhaas
              <br />
              Wacholderweg 10
              <br />
              73326 Deggingen
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              Kontakt
            </h2>
            <p>
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
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              DE299582018
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              Angaben zur Berufshaftpflichtversicherung
            </h2>
            <h3 className='font-medium text-charcoal text-base mb-2'>
              Name und Sitz des Versicherers
            </h3>
            <p>
              AMEXPool AG
              <br />
              Im Mittelfeld 19
              <br />
              79426 Buggingen
            </p>
            <h3 className='font-medium text-charcoal text-base mt-4 mb-2'>
              Geltungsraum der Versicherung
            </h3>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
              oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
              permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className='font-display text-xl font-medium text-charcoal mb-3'>
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
              Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
              eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
              wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
