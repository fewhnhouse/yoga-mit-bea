import Link from 'next/link'
import type { ReactNode } from 'react'

interface CTAButton {
  text: string
  href: string
  /** 'primary' = filled, 'secondary' = border only */
  variant?: 'primary' | 'secondary'
}

export interface CTASectionProps {
  /** Main heading */
  title: string
  /** Description or quote text */
  description: string
  /** Single CTA or array of CTAs */
  cta: CTAButton | CTAButton[]
  /** Background variant - 'solid' has colored bg, 'light' has gradient */
  variant?: 'solid' | 'light'
  /** Optional icon to display above title */
  icon?: ReactNode
  /** Show decorative circle elements */
  decorative?: boolean
  /** Style as a quote (larger italic text) */
  isQuote?: boolean
  /** Vertical padding - defaults to 'default' */
  padding?: 'default' | 'large'
  /** Additional className */
  className?: string
}

export default function CTASection({
  title,
  description,
  cta,
  variant = 'solid',
  icon,
  decorative = false,
  isQuote = false,
  padding = 'default',
  className = '',
}: CTASectionProps) {
  const isSolid = variant === 'solid'
  const ctaArray = Array.isArray(cta) ? cta : [cta]

  // Background classes - uses CSS custom property
  const bgClass = isSolid
    ? 'bg-primary'
    : 'bg-gradient-to-br from-sand/50 via-cream to-primary/10'

  // Text classes based on variant
  const titleClass = isSolid
    ? 'text-white'
    : 'text-charcoal'
  
  const descriptionClass = isSolid
    ? 'text-white/80'
    : 'text-charcoal-light'

  // Button classes - uses CSS custom properties
  const getButtonClass = (buttonVariant: 'primary' | 'secondary' = 'primary') => {
    if (isSolid) {
      // On solid background, primary = white filled, secondary = white border
      if (buttonVariant === 'primary') {
        return 'bg-white text-primary-dark hover:bg-cream'
      }
      return 'border-2 border-white/50 text-white hover:bg-white/10'
    }
    // On light background
    if (buttonVariant === 'primary') {
      return 'bg-primary text-white hover:bg-primary-dark'
    }
    return 'border-2 border-primary text-primary-dark hover:bg-primary hover:text-white'
  }

  // Padding classes
  const paddingClass = padding === 'large' ? 'py-32' : 'py-20'

  return (
    <section className={`${paddingClass} ${bgClass} relative overflow-hidden ${className}`}>
      {/* Decorative circles */}
      {decorative && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        </div>
      )}

      <div className="container mx-auto px-6 relative">
        <div className={`${isQuote ? 'max-w-4xl' : 'max-w-3xl'} mx-auto text-center`}>
          {/* Optional Icon */}
          {icon && (
            <div className={`${isSolid ? 'opacity-60' : ''} mb-8 flex justify-center`}>
              {icon}
            </div>
          )}

          {/* Title */}
          {isQuote ? (
            <h3 className={`font-display text-2xl font-semibold mb-6 ${titleClass} ${isSolid ? 'opacity-90' : ''}`}>
              {title}
            </h3>
          ) : (
            <h2 className={`font-display text-3xl md:text-4xl font-semibold mb-6 ${titleClass}`}>
              {title}
            </h2>
          )}

          {/* Description / Quote */}
          {isQuote ? (
            <blockquote className={`font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 ${descriptionClass}`}>
              {description}
            </blockquote>
          ) : (
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${descriptionClass}`}>
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${ctaArray.length === 1 ? '' : ''}`}>
            {ctaArray.map((button, index) => (
              <Link
                key={button.href}
                href={button.href}
                className={`${getButtonClass(button.variant || (index === 0 ? 'primary' : 'secondary'))} px-8 py-4 rounded-full font-medium transition-colors inline-block`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

