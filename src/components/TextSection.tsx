import Link from 'next/link'
import SectionHeader from './SectionHeader'

export interface TextSectionProps {
  /** Small uppercase label above the title */
  label: string
  /** Main heading */
  title: string
  /** Description text - can be a single string or array of paragraphs */
  description: string | string[]
  /** Optional CTA button */
  cta?: {
    text: string
    href: string
  }
  /** Text alignment - defaults to 'left' */
  align?: 'left' | 'center'
  /** Maximum width class - defaults to 'max-w-3xl' */
  maxWidth?: string
  /** Additional className for the container */
  className?: string
}

export default function TextSection({
  label,
  title,
  description,
  cta,
  align = 'left',
  maxWidth = 'max-w-3xl',
  className = '',
}: TextSectionProps) {

  // Alignment classes
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  // Normalize description to array
  const paragraphs = Array.isArray(description) ? description : [description]

  return (
    <div className={`${maxWidth} ${alignClass} ${className}`}>
      <SectionHeader
        label={label}
        title={title}
        align={align}
      />
      <div className='space-y-4'>
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 50)}
            className='text-charcoal-light text-lg leading-relaxed'
          >
            {paragraph}
          </p>
        ))}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className='inline-flex items-center gap-2 mt-8 text-primary-dark hover:text-primary font-medium transition-colors group'
        >
          {cta.text}
          <svg
            className='w-5 h-5 transform group-hover:translate-x-1 transition-transform'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </Link>
      )}
    </div>
  )
}
