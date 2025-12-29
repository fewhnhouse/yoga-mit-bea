'use client'

import { useState, useEffect } from 'react'
import SectionHeader from '@/components/SectionHeader'

interface Testimonial {
  _id: string
  name: string
  quote: string
}

interface TestimonialsSectionProps {
  label?: string
  title?: string
  // Testimonials are passed in from the page query
  testimonials?: Testimonial[]
}

export default function TestimonialsSection({
  label = 'Teilnehmerstimmen',
  title = 'Was andere sagen',
  testimonials = [],
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (isPaused || testimonials.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isPaused, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  const goTo = (index: number) => setCurrentIndex(index)
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)

  const current = testimonials[currentIndex]

  return (
    <section
      className='py-24 bg-warm-white section-pattern'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className='container mx-auto px-6'>
        <div className='max-w-2xl mx-auto mb-12'>
          <SectionHeader
            label={label}
            title={title}
            align='center'
          />
        </div>

        {/* Testimonial Card */}
        <div className='max-w-3xl mx-auto'>
          <div className='bg-cream rounded-3xl p-8 md:p-12 relative h-[340px] md:h-[300px] flex flex-col justify-between overflow-hidden'>
            {/* Quote Icon */}
            <svg
              className='w-16 h-16 text-primary/10 absolute top-8 left-8'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
            </svg>

            {/* Quote Text */}
            <blockquote className='text-charcoal-light text-base md:text-lg leading-relaxed italic text-center relative z-10 flex-1 flex items-center justify-center'>
              <span className='line-clamp-6'>&bdquo;{current.quote}&ldquo;</span>
            </blockquote>

            {/* Author */}
            <div className='flex items-center justify-center gap-3 pt-4'>
              <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
                <span className='text-primary-dark font-display font-semibold'>
                  {current.name.charAt(0)}
                </span>
              </div>
              <p className='font-display font-semibold text-charcoal'>
                {current.name}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className='flex items-center justify-center gap-4 mt-8'>
            {/* Prev Button */}
            <button
              onClick={goPrev}
              className='w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white transition-colors'
              aria-label='Vorherige Bewertung'
              type='button'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {/* Dots */}
            <div className='flex gap-2'>
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial._id}
                  onClick={() => goTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Bewertung ${index + 1}`}
                  type='button'
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goNext}
              className='w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white transition-colors'
              aria-label='Nächste Bewertung'
              type='button'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

