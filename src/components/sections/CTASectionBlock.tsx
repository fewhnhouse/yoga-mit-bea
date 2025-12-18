'use client'

import CTASection from '@/components/CTASection'
import ServiceIcon from '@/components/ServiceIcon'
import { useSite } from '@/context/SiteContext'

interface CTAButton {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
}

interface CTASectionBlockProps {
  title: string
  description: string
  ctas?: CTAButton[]
  variant?: 'solid' | 'light'
  isQuote?: boolean
  icon?: string
  decorative?: boolean
  padding?: 'default' | 'large'
}

export default function CTASectionBlock({
  title,
  description,
  ctas = [],
  variant = 'solid',
  isQuote = false,
  icon,
  decorative = false,
  padding = 'default',
}: CTASectionBlockProps) {
  const { isYoga } = useSite()

  // Ensure ctas is properly formatted
  const formattedCtas = ctas
    .filter((cta) => cta.text && cta.href)
    .map((cta) => ({
      text: cta.text,
      href: cta.href,
      variant: cta.variant || 'primary',
    }))

  // If no CTAs, provide a default empty array (component handles this)
  const ctasProp = formattedCtas.length > 0 ? formattedCtas : [{ text: '', href: '', variant: 'primary' as const }]

  return (
    <CTASection
      title={title}
      description={description}
      cta={ctasProp}
      theme={isYoga ? 'yoga' : 'therapie'}
      variant={variant}
      isQuote={isQuote}
      decorative={decorative}
      padding={padding}
      icon={icon ? <ServiceIcon icon={icon} className='w-12 h-12 text-white' /> : undefined}
    />
  )
}

