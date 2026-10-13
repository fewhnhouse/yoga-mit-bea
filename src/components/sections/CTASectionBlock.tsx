import CTASection from '@/components/CTASection'

interface CTAButton {
  text?: string | null
  href?: string | null
}

interface CTASectionBlockProps {
  title: string
  description: string
  ctas?: CTAButton[]
  variant?: 'solid' | 'light'
  isQuote?: boolean
  decorative?: boolean
  padding?: 'default' | 'large'
}

export default function CTASectionBlock({
  title,
  description,
  ctas = [],
  variant = 'solid',
  isQuote = false,
  decorative = false,
  padding = 'default',
}: CTASectionBlockProps) {
  // Ensure ctas is properly formatted
  const formattedCtas = ctas
    .filter((cta): cta is { text: string; href: string } => Boolean(cta.text && cta.href))
    .map((cta) => ({
      text: cta.text,
      href: cta.href,
      variant: 'primary' as const,
    }))

  // If no CTAs, provide a default empty array (component handles this)
  const ctasProp = formattedCtas.length > 0 ? formattedCtas : [{ text: '', href: '', variant: 'primary' as const }]

  return (
    <CTASection
      title={title}
      description={description}
      cta={ctasProp}
      variant={variant}
      isQuote={isQuote}
      decorative={decorative}
      padding={padding}
    />
  )
}

