import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import type { Service, Location, Event } from '@/sanity/types'

interface ServiceSectionProps {
  service: Service
  /** Locations to display for this service (e.g., for group courses) */
  locations?: Location[]
  /** Theme color */
  theme?: 'yoga' | 'therapie'
  /** Background style - alternates between sections */
  background?: 'light' | 'cream'
  /** Image position */
  imagePosition?: 'left' | 'right'
  /** Badge text to show on the image */
  badge?: string
  /** Section ID for anchor links */
  id?: string
  /** Fallback icon to show when no image is available */
  fallbackIcon?: ReactNode
}

export default function ServiceSection({
  service,
  locations,
  theme = 'yoga',
  background = 'light',
  imagePosition = 'left',
  badge,
  id,
  fallbackIcon,
}: ServiceSectionProps) {
  const isYoga = theme === 'yoga'
  const bgClass = background === 'light' ? 'bg-warm-white' : 'bg-cream'
  const primaryColorClass = isYoga ? 'text-sage-dark' : 'text-terracotta'
  const badgeBgClass = isYoga ? 'bg-sage' : 'bg-terracotta'
  const checkmarkColorClass = isYoga ? 'text-sage' : 'text-terracotta'

  // Determine if we should show locations (for group courses)
  const hasLocations = locations && locations.length > 0
  // Determine if we should show events
  const hasEvents = service.events && service.events.length > 0

  return (
    <section
      id={id || service.slug}
      className={`py-24 ${bgClass} scroll-mt-24`}
    >
      <div className='container mx-auto px-6'>
        {hasEvents && service.events ? (
          // Layout with events (for Yoga aktuell)
          <EventsLayout
            service={service}
            events={service.events}
            theme={theme}
            background={background}
          />
        ) : hasLocations ? (
          // Layout with locations (for group courses)
          <LocationsLayout
            service={service}
            locations={locations}
            theme={theme}
          />
        ) : (
          // Standard two-column layout
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Image */}
            <div
              className={`relative ${
                imagePosition === 'right' ? 'order-2 lg:order-1' : ''
              }`}
            >
              {service.imageUrl ? (
                <div className='aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative'>
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className='object-cover rounded-2xl'
                  />
                </div>
              ) : fallbackIcon ? (
                <div className={`aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative ${
                  isYoga 
                    ? 'bg-gradient-to-br from-sage/20 to-cream' 
                    : 'bg-gradient-to-br from-terracotta/20 to-blush/20'
                }`}>
                  <div className='w-full h-full flex items-center justify-center'>
                    {fallbackIcon}
                  </div>
                </div>
              ) : null}
              {badge && (
                <div
                  className={`absolute top-4 ${
                    imagePosition === 'right' ? 'right-4' : 'left-4'
                  } ${badgeBgClass} text-white px-4 py-2 rounded-full text-sm font-medium`}
                >
                  {badge}
                </div>
              )}
            </div>

            {/* Content */}
            <div
              className={
                imagePosition === 'right' ? 'order-1 lg:order-2' : ''
              }
            >
              {service.subtitle && (
                <span
                  className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-2 block`}
                >
                  {service.subtitle}
                </span>
              )}
              <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4'>
                {service.title}
              </h2>
              {service.shortDescription && (
                <p className='text-charcoal-light leading-relaxed mb-4'>
                  {service.shortDescription}
                </p>
              )}

              {/* Duration Badge */}
              {service.duration && (
                <div
                  className={`inline-flex items-center gap-2 ${
                    isYoga ? 'bg-sage/10 text-sage-dark' : 'bg-terracotta/10 text-terracotta'
                  } px-4 py-2 rounded-full text-sm font-medium`}
                >
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
                  {service.duration}
                </div>
              )}

              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <ul className='grid grid-cols-2 gap-3 mt-6'>
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className='flex items-center gap-2 text-sm text-charcoal-light'
                    >
                      <svg
                        className={`w-4 h-4 ${checkmarkColorClass} shrink-0`}
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

              {/* CTA */}
              <div className='mt-8'>
                <Link
                  href={service.ctaLink || '/kontakt'}
                  className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg ${
                    isYoga 
                      ? 'bg-sage hover:bg-sage-dark' 
                      : 'bg-terracotta hover:bg-terracotta/90'
                  }`}
                >
                  {service.ctaText || 'Anfragen'}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Sub-component for services with events (like Yoga aktuell)
function EventsLayout({
  service,
  events,
  theme = 'yoga',
  background = 'light',
}: {
  service: Service
  events: Pick<Event, "_id" | "title" | "description">[]
  theme?: 'yoga' | 'therapie'
  background?: 'light' | 'cream'
}) {
  const isYoga = theme === 'yoga'
  const primaryColorClass = isYoga ? 'text-sage-dark' : 'text-terracotta'
  // Use contrasting background for cards
  const cardBgClass = background === 'light' ? 'bg-cream' : 'bg-warm-white'

  return (
    <>
      {/* Header */}
      <div className='max-w-3xl'>
        <span
          className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-2 block`}
        >
          {service.subtitle}
        </span>
        <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4'>
          {service.title}
        </h2>
        {service.shortDescription && (
          <p className='text-charcoal-light leading-relaxed mb-8'>
            {service.shortDescription}
          </p>
        )}
      </div>

      {/* Event Cards */}
      <div className='space-y-4 mb-8'>
        {events.map((event) => (
          <div
            key={event._id}
            className={`${cardBgClass} rounded-2xl p-6`}
          >
            <h3 className={`font-display text-xl font-semibold ${primaryColorClass} mb-2`}>
              {event.title}
            </h3>
            {event.description && (
              <p className='text-charcoal-light'>
                {event.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link 
        href={service.ctaLink || '/kontakt'} 
        className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg ${
          isYoga 
            ? 'bg-sage hover:bg-sage-dark' 
            : 'bg-terracotta hover:bg-terracotta/90'
        }`}
      >
        {service.ctaText || 'Termine erfragen'}
      </Link>
    </>
  )
}

// Sub-component for services with locations (like group courses)
function LocationsLayout({
  service,
  locations,
  theme = 'yoga',
}: {
  service: Service
  locations: Location[]
  theme?: 'yoga' | 'therapie'
}) {
  const isYoga = theme === 'yoga'
  const primaryColorClass = isYoga ? 'text-sage-dark' : 'text-terracotta'
  const iconColorClass = isYoga ? 'text-sage' : 'text-terracotta'

  return (
    <>
      {/* Header */}
      <div className='text-center mb-12'>
        <span
          className={`${primaryColorClass} font-body text-sm tracking-widest uppercase mb-2 block`}
        >
          {service.subtitle || 'Gruppenkurse'}
        </span>
        <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4'>
          {service.title}
        </h2>
        {service.shortDescription && (
          <p className='text-charcoal-light leading-relaxed max-w-2xl mx-auto'>
            {service.shortDescription}
          </p>
        )}
      </div>

      {/* Location Cards */}
      <div className='grid lg:grid-cols-2 gap-8'>
        {locations.map((location) => (
          <div
            key={location._id}
            className='bg-warm-white rounded-2xl overflow-hidden shadow-lg'
          >
            {/* Image Area */}
            {location.imageUrl && (
              <div className='aspect-video relative'>
                <Image
                  src={location.imageUrl}
                  alt={location.name}
                  fill
                  className='object-cover'
                />
              </div>
            )}

            {/* Content */}
            <div className='p-6'>
              <h3 className='font-display text-xl font-semibold text-charcoal mb-2'>
                {location.name}
              </h3>
              {location.description && (
                <p className='text-charcoal-light text-sm mb-4'>
                  {location.description}
                </p>
              )}

              {/* Info Grid */}
              <div className='space-y-3 mb-4'>
                {/* Address */}
                <div className='flex items-start gap-2'>
                  <svg
                    className={`w-4 h-4 ${iconColorClass} mt-0.5 shrink-0`}
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
                  {location.googleMapsUrl ? (
                    <a
                      href={location.googleMapsUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-charcoal-light hover:text-sage-dark underline underline-offset-2 transition-colors'
                    >
                      {location.address}
                    </a>
                  ) : (
                    <span className='text-sm text-charcoal-light'>
                      {location.address}
                    </span>
                  )}
                </div>

                {/* Schedule */}
                {location.schedule && location.schedule.length > 0 && (
                  <div className='flex items-start gap-2'>
                    <svg
                      className={`w-4 h-4 ${iconColorClass} mt-0.5 shrink-0`}
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
                        <p key={`${slot.day}-${slot.times}`} className='text-charcoal'>
                          <span className='font-medium'>{slot.day}:</span>{' '}
                          <span className='text-charcoal-light'>{slot.times}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing */}
                {location.pricing && (
                  <div className='flex items-start gap-2'>
                    <svg
                      className={`w-4 h-4 ${iconColorClass} mt-0.5 shrink-0`}
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
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className='text-center mt-10'>
        <Link 
          href={service.ctaLink || '/kontakt'} 
          className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg ${
            isYoga 
              ? 'bg-sage hover:bg-sage-dark' 
              : 'bg-terracotta hover:bg-terracotta/90'
          }`}
        >
          {service.ctaText || 'Kurs anfragen'}
        </Link>
      </div>
    </>
  )
}

