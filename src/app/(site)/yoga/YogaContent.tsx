import Link from 'next/link'
import Image from 'next/image'
import TextSection from '@/components/TextSection'
import type { YogaPageData } from '@/sanity/types'

interface YogaContentProps {
  initialData: YogaPageData
}

export default function YogaContent({ initialData }: YogaContentProps) {
  // Use Sanity data
  const { services, locations } = initialData

  // Helper to find a service by slug
  const individuell = services.find((s) => s.slug === 'yoga-individuell')
  const kurse = services.find((s) => s.slug === 'yogakurse')
  const aktuell = services.find((s) => s.slug === 'yoga-aktuell')
  const weg = services.find((s) => s.slug === 'yoga-weg')

  // Location data from Sanity
  const displayLocations = locations.map((loc) => ({
    name: loc.name,
    description: loc.description || '',
    address: loc.address,
    googleMapsUrl: loc.googleMapsUrl || '',
    schedule: loc.schedule || [],
    pricing: loc.pricing || '',
    imageUrl: loc.imageUrl || '',
  }))

  return (
    <>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-sage/10 overflow-hidden'>
        <div className='absolute top-20 right-10 w-64 h-64 bg-sage/5 organic-blob animate-float' />
        <div className='absolute bottom-10 left-10 w-48 h-48 bg-blush/10 organic-blob-2 animate-breathe' />

        <div className='container mx-auto px-6 relative'>
          <TextSection
            label="Angebote"
            title="Yoga mit Bea"
            description={[
              "Mein Verständnis von Yoga geht über die körperliche Praxis hinaus. Yoga ist für mich ein Weg der Selbsterfahrung – durch Yoga gehst du nur auf dich selbst zu.",
              "Entdecke meine verschiedenen Angebote und finde den Weg, der zu dir passt."
            ]}
            theme="yoga"
          />
        </div>
      </section>

      {/* Yoga Individuell */}
      <section id='individuell' className='py-24 bg-warm-white scroll-mt-24'>
        <div className='container mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='relative'>
              <div className='aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative'>
                <Image
                  src={individuell?.imageUrl || ''}
                  alt='Yoga Individuell - Einzelstunden'
                  fill
                  className='object-cover rounded-2xl'
                />
              </div>
              <div className='absolute top-4 left-4 bg-sage text-white px-4 py-2 rounded-full text-sm font-medium'>
                Einzelstunden
              </div>
            </div>
            <div>
              <span className='text-sage-dark font-body text-sm tracking-widest uppercase mb-2 block'>
                {individuell?.subtitle || ''}
              </span>
              <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4'>
                {individuell?.title || ''}
              </h2>
              <p className='text-charcoal-light leading-relaxed mb-4'>
                {individuell?.shortDescription || ''}
              </p>

              {/* Schedule Badge */}
              {individuell?.duration && (
                <div className='inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-2 rounded-full text-sm font-medium mb-6'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  {individuell.duration}
                </div>
              )}

              {individuell?.features && individuell.features.length > 0 && (
                <ul className='grid grid-cols-2 gap-3 mb-8'>
                  {individuell.features.map((feature, i) => (
                    <li
                      key={feature}
                      className='flex items-center gap-2 text-sm text-charcoal-light'
                    >
                      <svg
                        className='w-4 h-4 text-sage flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href={individuell?.ctaLink || '/kontakt'}
                className='btn-primary'
              >
                {individuell?.ctaText || 'Anfragen'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yogakurse */}
      <section id='kurse' className='py-24 bg-cream scroll-mt-24'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12'>
            <span className='text-sage-dark font-body text-sm tracking-widest uppercase mb-2 block'>
              Gruppenkurse
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4'>
              {kurse?.title || ''}
            </h2>
            <p className='text-charcoal-light leading-relaxed max-w-2xl mx-auto'>
              {kurse?.shortDescription || ''}
            </p>
          </div>

          {/* Location Cards */}
          <div className='grid lg:grid-cols-2 gap-8'>
            {displayLocations.map((location, i) => (
              <div
                key={location.name}
                className='bg-warm-white rounded-2xl overflow-hidden shadow-lg'
              >
                {/* Image Area */}
                <div className='aspect-[16/9] relative'>
                  <Image
                    src={location.imageUrl}
                    alt={location.name}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='font-display text-xl font-semibold text-charcoal mb-2'>
                    {location.name}
                  </h3>
                  <p className='text-charcoal-light text-sm mb-4'>
                    {location.description}
                  </p>

                  {/* Info Grid */}
                  <div className='space-y-3 mb-4'>
                    {/* Location */}
                    <div className='flex items-start gap-2'>
                      <svg
                        className='w-4 h-4 text-sage mt-0.5 flex-shrink-0'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                      <a
                        href={location.googleMapsUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-sm text-charcoal-light hover:text-sage-dark underline underline-offset-2 transition-colors'
                      >
                        {location.address}
                      </a>
                    </div>

                    {/* Schedule */}
                    <div className='flex items-start gap-2'>
                      <svg
                        className='w-4 h-4 text-sage mt-0.5 flex-shrink-0'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <div className='text-sm'>
                        {location.schedule.map((slot) => (
                          <p key={slot.times} className='text-charcoal'>
                            <span className='font-medium'>{slot.day}:</span>{' '}
                            <span className='text-charcoal-light'>
                              {slot.times}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className='flex items-start gap-2'>
                      <svg
                        className='w-4 h-4 text-sage mt-0.5 flex-shrink-0'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <p className='text-sm text-charcoal-light'>
                        {location.pricing}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-10'>
            <Link href={kurse?.ctaLink || '/kontakt'} className='btn-primary'>
              {kurse?.ctaText || 'Kurs anfragen'}
            </Link>
          </div>
        </div>
      </section>

      {/* Yoga aktuell */}
      <section id='aktuell' className='py-24 bg-warm-white scroll-mt-24'>
        <div className='container mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='relative'>
              <div className='aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative'>
                <Image
                  src={aktuell?.imageUrl || '/images/gruppe.jpg'}
                  alt='Yoga aktuell - Yogatag und Yogawochenende'
                  fill
                  className='object-cover rounded-2xl'
                />
              </div>
              <div className='absolute top-4 left-4 bg-soft-brown text-white px-4 py-2 rounded-full text-sm font-medium'>
                Veranstaltungen
              </div>
            </div>
            <div>
              <span className='text-sage-dark font-body text-sm tracking-widest uppercase mb-2 block'>
                {aktuell?.subtitle || ''}
              </span>
              <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4'>
                {aktuell?.title || ''}
              </h2>
              <p className='text-charcoal-light leading-relaxed mb-6'>
                {aktuell?.shortDescription || ''}
              </p>
              {/* {aktuell?.events && aktuell.events.length > 0 && (
                <div className='space-y-4 mb-8'>
                  {aktuell.events.map((event, i) => (
                    <div key={i} className='bg-cream rounded-xl p-5'>
                      <h3 className='font-display text-lg font-semibold text-sage-dark mb-1'>
                        {event.name}
                      </h3>
                      <p className='text-charcoal-light text-sm'>
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              )} */}
              <Link
                href={aktuell?.ctaLink || '/kontakt'}
                className='btn-primary'
              >
                {aktuell?.ctaText || 'Termine erfragen'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Weg */}
      <section id='weg' className='py-24 bg-cream scroll-mt-24'>
        <div className='container mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='order-2 lg:order-1'>
              <span className='text-sage-dark font-body text-sm tracking-widest uppercase mb-2 block'>
                {weg?.subtitle || ''}
              </span>
              <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4'>
                {weg?.title || ''}
              </h2>
              <p className='text-charcoal-light leading-relaxed mb-6'>
                {weg?.shortDescription || ''}
              </p>
              {weg?.features && weg.features.length > 0 && (
                <ul className='grid grid-cols-2 gap-3 mb-8'>
                  {weg.features.map((feature) => (
                    <li
                      key={feature}
                      className='flex items-center gap-2 text-sm text-charcoal-light'
                    >
                      <svg
                        className='w-4 h-4 text-sage flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <Link href={weg?.ctaLink || '/kontakt'} className='btn-primary'>
                {weg?.ctaText || 'Mehr erfahren'}
              </Link>
            </div>
            <div className='relative order-1 lg:order-2'>
              <div className='aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative'>
                <Image
                  src={weg?.imageUrl || '/images/weg.jpeg'}
                  alt='Yoga Weg im Lonetal'
                  fill
                  className='object-cover rounded-2xl'
                />
              </div>
              <div className='absolute top-4 right-4 bg-sage text-white px-4 py-2 rounded-full text-sm font-medium'>
                Lonetal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-sage'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='font-display text-3xl md:text-4xl font-semibold text-white mb-6'>
            Finde deinen Yoga-Weg
          </h2>
          <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
            Hast du Fragen zu meinen Angeboten? Möchtest du herausfinden,
            welches Format am besten zu dir passt? Ich freue mich auf deine
            Nachricht.
          </p>
          <Link
            href='/kontakt'
            className='inline-block bg-white text-sage-dark px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors'
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
