export interface SectionHeaderProps {
  /** Small uppercase label above the title */
  label: string
  /** Main heading */
  title: string
  /** Theme color - defaults to 'yoga'. Use 'light' for white text on colored backgrounds */
  theme?: 'yoga' | 'therapie' | 'light'
  /** Text alignment - defaults to 'left' */
  align?: 'left' | 'center'
  /** Heading level - defaults to 'h2' */
  as?: 'h1' | 'h2' | 'h3'
  /** Additional className for the container */
  className?: string
}

export default function SectionHeader({
  label,
  title,
  theme = 'yoga',
  align = 'left',
  as: Tag = 'h2',
  className = '',
}: SectionHeaderProps) {
  const isLight = theme === 'light'
  const isYoga = theme === 'yoga'

  // Theme-based classes
  const labelClass = isLight ? 'text-white/80' : isYoga ? 'text-sage-dark' : 'text-terracotta'
  const titleClass = isLight ? 'text-white' : 'text-charcoal'
  const lineColor = isLight ? 'rgba(255,255,255,0.5)' : isYoga ? 'var(--sage)' : 'var(--terracotta)'

  // Alignment classes
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const lineAlignClass = align === 'center' ? 'mx-auto' : ''

  // Line gradient - fade both sides when centered, fade right only when left-aligned
  const lineGradient =
    align === 'center'
      ? `linear-gradient(90deg, transparent, ${lineColor}, transparent)`
      : `linear-gradient(90deg, ${lineColor}, transparent)`

  return (
    <div className={`${alignClass} ${className}`}>
      <span
        className={`${labelClass} font-body text-sm tracking-widest uppercase mb-4 block`}
      >
        {label}
      </span>
      <Tag className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold ${titleClass} mb-6`}>
        {title}
      </Tag>
      <div
        className={`w-20 h-0.5 mb-6 ${lineAlignClass}`}
        style={{ background: lineGradient }}
      />
    </div>
  )
}

