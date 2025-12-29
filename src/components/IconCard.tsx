import Link from 'next/link'
import type { ReactNode } from 'react'

export interface IconCardProps {
  /** The icon to display - pass an SVG element or icon component */
  icon: ReactNode
  /** Card title */
  title: string
  /** Card description */
  description: string
  /** Optional link - if provided with ctaText, shows a CTA; otherwise makes card clickable */
  href?: string
  /** CTA text - if provided with href, shows as a link instead of making whole card clickable */
  ctaText?: string
  /** Size variant - 'default' has more padding, 'compact' has less */
  size?: 'default' | 'compact'
  /** Visual variant - 'card' has background/shadow, 'flat' has no background */
  variant?: 'card' | 'flat'
  /** Text alignment - defaults to 'center' */
  align?: 'center' | 'left'
  /** Additional className */
  className?: string
}

export default function IconCard({
  icon,
  title,
  description,
  href,
  ctaText,
  size = 'default',
  variant = 'card',
  align = 'center',
  className = '',
}: IconCardProps) {
  const isFlat = variant === 'flat'

  // Size-based classes
  const sizeClasses = isFlat
    ? '' // No padding for flat variant
    : size === 'default'
      ? 'rounded-2xl p-8'
      : 'rounded-xl p-6'

  const iconContainerSize = size === 'default' ? 'w-16 h-16' : 'w-14 h-14'
  const iconMargin = isFlat ? 'mb-4' : size === 'default' ? 'mb-6' : 'mb-4'

  const titleClasses = size === 'default'
    ? 'font-display text-xl font-semibold text-charcoal mb-3'
    : 'font-display text-lg font-semibold text-charcoal mb-2'

  // Flat variant uses smaller margin
  const titleClassesWithVariant = isFlat
    ? 'font-display text-xl font-semibold text-charcoal mb-2'
    : titleClasses

  const descriptionClasses = size === 'default'
    ? 'text-charcoal-light text-sm leading-relaxed'
    : 'text-charcoal-light text-sm'

  // Theme-based classes - uses CSS custom properties
  const iconBgClass = 'bg-primary/10'
  const ctaColorClass = 'text-primary-dark'

  // Alignment classes
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const iconAlignClass = align === 'center' ? 'mx-auto' : ''

  // Background classes
  const bgClasses = isFlat ? '' : 'bg-warm-white'
  const hoverClasses = isFlat ? '' : 'card-hover'

  // Common wrapper classes
  const baseClasses = `${bgClasses} ${sizeClasses} ${alignClass} ${hoverClasses} group ${className}`.trim()

  // Content
  const content = (
    <>
      <div
        className={`${iconContainerSize} rounded-full ${iconBgClass} flex items-center justify-center ${iconMargin} ${iconAlignClass} ${isFlat ? '' : 'group-hover:scale-110'} transition-transform`}
      >
        {icon}
      </div>
      <h3 className={titleClassesWithVariant}>{title}</h3>
      <p className={`${descriptionClasses} ${ctaText ? 'mb-4' : ''}`}>{description}</p>
      {ctaText && href && (
        <span className={`${ctaColorClass} text-sm font-medium inline-flex items-center gap-1`}>
          {ctaText}
          <svg
            className='w-4 h-4 transform group-hover:translate-x-1 transition-transform'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} block`}>
        {content}
      </Link>
    )
  }

  return <div className={baseClasses}>{content}</div>
}
