import Link from "next/link";
import LotusIcon from "@/components/icons/LotusIcon";

export default function ZumMituebenContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-sage/10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/5 organic-blob animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blush/10 organic-blob-2 animate-breathe" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
              Online
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mb-6">
              Yoga Online
            </h1>
            <div className="decorative-line mb-6" />
            <p className="text-charcoal-light text-lg leading-relaxed mb-4">
              Praktiziere Yoga bequem von zu Hause aus. In den Online-Stunden 
              verbinden wir uns über Video und üben gemeinsam – egal wo du gerade bist.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sage/10 to-cream rounded-3xl p-10 md:p-16 text-center shadow-xl">
              <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                Ab jetzt immer Montag
              </h2>
              <p className="font-display text-2xl md:text-3xl text-sage-dark mb-8">
                von 18:30 – 19:45 Uhr
              </p>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 mb-10 text-left max-w-2xl mx-auto">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  So nimmst du teil:
                </h3>
                <ol className="space-y-4 text-charcoal-light">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">1</span>
                    <span>Klicke auf den Button unten, um dem Online-Raum beizutreten</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">2</span>
                    <span>Melde dich mit deinem Google-Konto an, oder trete als Gast bei</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">3</span>
                    <span>Bereite deine Yogamatte vor und mach es dir gemütlich</span>
                  </li>
                </ol>
              </div>

              <a
                href="https://meet.google.com/kpw-hmqx-evc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-sage hover:bg-sage-dark text-white px-10 py-5 rounded-full font-medium text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Yoga mit Bea Üben online beitreten
              </a>

              <p className="text-charcoal-light text-sm mt-6">
                Der Link führt zu Google Meet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sage-dark font-body text-sm tracking-widest uppercase mb-4 block">
              Vorteile
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Yoga Online mit Bea
            </h2>
            <div className="w-20 h-0.5 bg-sage mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-warm-white rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                Von zu Hause
              </h3>
              <p className="text-charcoal-light text-sm">
                Übe bequem in deiner vertrauten Umgebung, ohne Anfahrtswege.
              </p>
            </div>

            <div className="bg-warm-white rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                Gemeinsam üben
              </h3>
              <p className="text-charcoal-light text-sm">
                Verbinde dich mit anderen und erlebe die Energie der Gruppe.
              </p>
            </div>

            <div className="bg-warm-white rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
                <LotusIcon className="w-8 h-8 text-sage-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                Persönliche Anleitung
              </h3>
              <p className="text-charcoal-light text-sm">
                Auch online begleite ich dich achtsam durch die Praxis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
            Fragen zu Yoga Online?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Du hast Fragen zur Teilnahme oder möchtest mehr über die Online-Stunden erfahren? 
            Ich freue mich auf deine Nachricht.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-sage-dark px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}

