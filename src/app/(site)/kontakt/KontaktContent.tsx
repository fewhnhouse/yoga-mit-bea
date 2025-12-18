'use client'

import { useState } from 'react'
import LotusIcon from '@/components/icons/LotusIcon'
import { useSite } from '@/context/SiteContext'

export default function KontaktContent() {
  const { currentSite, isYoga, siteId, footerServiceLinks } = useSite()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const primaryColorClass = isYoga ? 'text-sage-dark' : 'text-terracotta'
  const primaryBgClass = isYoga ? 'bg-sage' : 'bg-terracotta'
  const primaryBgLightClass = isYoga ? 'bg-sage/10' : 'bg-terracotta/10'
  const buttonClass = isYoga
    ? 'bg-sage text-white hover:bg-sage-dark'
    : 'bg-terracotta text-white hover:bg-soft-brown'
  const focusClass = isYoga
    ? 'focus:border-sage focus:ring-sage/20'
    : 'focus:border-terracotta focus:ring-terracotta/20'
  const gradientClass = isYoga
    ? 'from-cream via-warm-white to-terracotta/10'
    : 'from-blush/30 via-warm-white to-terracotta/10'
  const iconColor = isYoga ? 'text-sage' : 'text-terracotta'

  const subjectOptions = isYoga
    ? [
        { value: 'individuell', label: 'Yoga Individuell' },
        { value: 'kurse', label: 'Yogakurse' },
        { value: 'aktuell', label: 'Yoga aktuell (Yogatag/Wochenende)' },
        { value: 'weg', label: 'Yoga Weg im Lonetal' },
        { value: 'frage', label: 'Allgemeine Frage' },
        { value: 'sonstiges', label: 'Sonstiges' },
      ]
    : [
        { value: 'massage', label: 'Therapeutische Massage' },
        { value: 'atemtherapie', label: 'Atemtherapie' },
        { value: 'klangschalen', label: 'Klangschalentherapie' },
        { value: 'einzelsitzung', label: 'Therapeutische Einzelsitzung' },
        { value: 'frage', label: 'Allgemeine Frage' },
        { value: 'sonstiges', label: 'Sonstiges' },
      ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          site: siteId,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Senden der Nachricht.')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className={`relative pt-32 pb-20 bg-gradient-to-br ${gradientClass} overflow-hidden`}
      >
        <div
          className={`absolute top-20 right-10 w-64 h-64 ${isYoga ? 'bg-sage/5' : 'bg-terracotta/5'} organic-blob animate-float`}
        />
        <div className='absolute bottom-10 left-10 w-48 h-48 bg-blush/10 organic-blob-2 animate-breathe' />

        <div className='container mx-auto px-6 relative'>
          <div className='max-w-3xl'>
            <span
              className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-4 block`}
            >
              Kontakt
            </span>
            <h1 className='font-display text-5xl md:text-6xl font-semibold text-charcoal mb-6'>
              Ich freue mich
              <span className={`block ${primaryColorClass}`}>auf dich</span>
            </h1>
            <div className={`w-20 h-0.5 ${primaryBgClass} mb-6`} />
            <p className='text-charcoal-light text-lg leading-relaxed'>
              {isYoga
                ? 'Hast du Fragen zu meinen Yoga-Angeboten? Möchtest du einen Termin vereinbaren oder einfach mehr erfahren? Schreib mir – ich melde mich so schnell wie möglich bei dir.'
                : 'Hast du Fragen zu meinen therapeutischen Angeboten? Möchtest du einen Termin für eine Behandlung vereinbaren? Ich freue mich auf deine Nachricht.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-24 bg-warm-white'>
        <div className='container mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Contact Form */}
            <div>
              <h2 className='font-display text-3xl font-semibold text-charcoal mb-8'>
                Nachricht senden
              </h2>

              {submitted ? (
                <div
                  className={`${primaryBgLightClass} rounded-2xl p-8 text-center`}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${primaryBgLightClass} flex items-center justify-center mx-auto mb-4`}
                  >
                    <svg
                      className={`w-8 h-8 ${primaryColorClass}`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <h3 className='font-display text-xl font-semibold text-charcoal mb-2'>
                    Vielen Dank!
                  </h3>
                  <p className='text-charcoal-light'>
                    Deine Nachricht wurde gesendet. Ich melde mich so schnell
                    wie möglich bei dir.
                  </p>
                  <button
                    type='button'
                    onClick={() => {
                      setSubmitted(false)
                      setError(null)
                    }}
                    className={`mt-6 ${primaryColorClass} font-medium hover:opacity-80 transition-opacity`}
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-charcoal mb-2'
                      >
                        Name *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none ${focusClass} focus:ring-2 transition-all`}
                        placeholder='Dein Name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-charcoal mb-2'
                      >
                        E-Mail *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none ${focusClass} focus:ring-2 transition-all`}
                        placeholder='deine@email.de'
                      />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-charcoal mb-2'
                      >
                        Telefon
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none ${focusClass} focus:ring-2 transition-all`}
                        placeholder='Optional'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-charcoal mb-2'
                      >
                        Betreff *
                      </label>
                      <select
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none ${focusClass} focus:ring-2 transition-all`}
                      >
                        <option value=''>Bitte wählen</option>
                        {subjectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-charcoal mb-2'
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none ${focusClass} focus:ring-2 transition-all resize-none`}
                      placeholder='Deine Nachricht...'
                    />
                  </div>

                  {error && (
                    <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl'>
                      {error}
                    </div>
                  )}

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={`${buttonClass} w-full px-6 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className='animate-spin w-5 h-5'
                          fill='none'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          />
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      'Nachricht senden'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className='font-display text-3xl font-semibold text-charcoal mb-8'>
                So erreichst du mich
              </h2>

              <div className='space-y-8'>
                <div className='flex gap-4'>
                  <div
                    className={`w-12 h-12 rounded-full ${primaryBgLightClass} flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className={`w-6 h-6 ${primaryColorClass}`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-display text-lg font-semibold text-charcoal mb-1'>
                      E-Mail
                    </h3>
                    <a
                      href={`mailto:info@${currentSite.domain}`}
                      className={`${primaryColorClass} hover:opacity-80 transition-opacity`}
                    >
                      info@{currentSite.domain}
                    </a>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div
                    className={`w-12 h-12 rounded-full ${primaryBgLightClass} flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className={`w-6 h-6 ${primaryColorClass}`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-display text-lg font-semibold text-charcoal mb-1'>
                      Website
                    </h3>
                    <a
                      href={`https://${currentSite.domain}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`${primaryColorClass} hover:opacity-80 transition-opacity`}
                    >
                      {currentSite.domain}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className='mt-12 bg-cream rounded-2xl p-8'>
                <LotusIcon className={`w-10 h-10 ${iconColor}/40 mb-4`} />
                <p className='font-display text-xl text-charcoal italic leading-relaxed'>
                  &bdquo;{currentSite.tagline}&ldquo;
                </p>
                <p className={`${primaryColorClass} mt-4 font-medium`}>– Bea</p>
              </div>

              {/* Offerings Quick Links */}
              <div className='mt-8'>
                <h3 className='font-display text-lg font-semibold text-charcoal mb-4'>
                  Meine Angebote
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {footerServiceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`${primaryBgLightClass} ${primaryColorClass} text-sm px-4 py-2 rounded-full hover:opacity-80 transition-opacity`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
