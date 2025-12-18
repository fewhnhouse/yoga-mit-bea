'use client'

import { useSite } from '@/context/SiteContext'

interface GoogleMeetSectionProps {
  title: string
  schedule?: string
  instructionsTitle?: string
  instructions?: string[]
  meetLink: string
  buttonText?: string
  footnote?: string
  background?: 'light' | 'cream'
}

export default function GoogleMeetSection({
  title,
  schedule,
  instructionsTitle = 'So nimmst du teil:',
  instructions = [],
  meetLink,
  buttonText = 'Jetzt beitreten',
  footnote = 'Der Link führt zu Google Meet',
  background = 'light',
}: GoogleMeetSectionProps) {
  const { isYoga } = useSite()

  const bgClass = background === 'cream' ? 'bg-cream' : 'bg-warm-white'
  
  // Use explicit classes for Tailwind's static analysis
  const cardGradientClass = isYoga
    ? 'bg-gradient-to-br from-sage/10 to-cream'
    : 'bg-gradient-to-br from-terracotta/10 to-cream'
  
  const iconBgClass = isYoga ? 'bg-sage/20' : 'bg-terracotta/20'
  const iconTextClass = isYoga ? 'text-sage-dark' : 'text-soft-brown'
  const scheduleTextClass = isYoga ? 'text-sage-dark' : 'text-soft-brown'
  const stepBgClass = isYoga ? 'bg-sage' : 'bg-terracotta'
  const buttonClass = isYoga
    ? 'bg-sage hover:bg-sage-dark'
    : 'bg-terracotta hover:bg-soft-brown'

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <div
            className={`${cardGradientClass} rounded-3xl p-10 md:p-16 text-center shadow-xl`}
          >
            {/* Video Icon */}
            <div
              className={`w-20 h-20 rounded-full ${iconBgClass} flex items-center justify-center mx-auto mb-8`}
            >
              <svg
                className={`w-10 h-10 ${iconTextClass}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4'>
              {title}
            </h2>

            {/* Schedule */}
            {schedule && (
              <p className={`font-display text-2xl md:text-3xl ${scheduleTextClass} mb-8`}>
                {schedule}
              </p>
            )}

            {/* Instructions */}
            {instructions.length > 0 && (
              <div className='bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 mb-10 text-left max-w-2xl mx-auto'>
                <h3 className='font-display text-xl font-semibold text-charcoal mb-4'>
                  {instructionsTitle}
                </h3>
                <ol className='space-y-4 text-charcoal-light'>
                  {instructions.map((instruction, index) => (
                    <li key={index} className='flex gap-4'>
                      <span
                        className={`w-8 h-8 rounded-full ${stepBgClass} text-white flex items-center justify-center flex-shrink-0 text-sm font-medium`}
                      >
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Join Button */}
            <a
              href={meetLink}
              target='_blank'
              rel='noopener noreferrer'
              className={`inline-flex items-center gap-3 ${buttonClass} text-white px-10 py-5 rounded-full font-medium text-lg transition-colors shadow-lg hover:shadow-xl`}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                />
              </svg>
              {buttonText}
            </a>

            {/* Footnote */}
            {footnote && (
              <p className='text-charcoal-light text-sm mt-6'>{footnote}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

