import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

export type SectionDescriptionValue =
  | PortableTextBlock[]
  | string[]
  | string
  | null
  | undefined

interface SectionDescriptionProps {
  value: SectionDescriptionValue
  tone?: 'default' | 'light'
  className?: string
}

const HEX_COLOR_REGEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

function getValidHexColor(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  return HEX_COLOR_REGEX.test(value) ? value : undefined
}

function createComponents(tone: 'default' | 'light'): PortableTextComponents {
  const textColorClass = tone === 'light' ? 'text-white/90' : 'text-charcoal-light'
  const linkColorClass = tone === 'light'
    ? 'text-white hover:text-white/80'
    : 'text-primary-dark hover:text-primary'
  const strongColorClass = tone === 'light' ? 'text-white' : ''

  return {
    block: {
      normal: ({ children }) => (
        <p className={`${textColorClass} text-lg leading-relaxed mb-4 last:mb-0`}>
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className={`list-disc list-inside ${textColorClass} text-lg leading-relaxed mb-4 space-y-2`}>
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className={`list-decimal list-inside ${textColorClass} text-lg leading-relaxed mb-4 space-y-2`}>
          {children}
        </ol>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className={`font-semibold ${strongColorClass}`}>{children}</strong>,
      em: ({ children }) => <em className='italic'>{children}</em>,
      textColor: ({ children, value }) => {
        const hex = getValidHexColor(value?.hex || value?.color)

        return (
          <span style={hex ? { color: hex } : undefined}>
            {children}
          </span>
        )
      },
      link: ({ children, value }) => {
        const href = value?.href || ''
        const isExternal = href.startsWith('http')

        return (
          <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={`${linkColorClass} underline underline-offset-2 transition-colors`}
          >
            {children}
          </a>
        )
      },
    },
  }
}

function isPortableTextArray(value: SectionDescriptionValue): value is PortableTextBlock[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === 'object' &&
    value[0] !== null &&
    '_type' in value[0]
  )
}

function normalizeTextParagraphs(value: SectionDescriptionValue): string[] {
  if (typeof value === 'string') {
    return value.trim() ? [value] : []
  }

  if (!Array.isArray(value)) {
    return []
  }

  return value.filter(
    (paragraph): paragraph is string =>
      typeof paragraph === 'string' && paragraph.trim().length > 0
  )
}

export default function SectionDescription({
  value,
  tone = 'default',
  className = '',
}: SectionDescriptionProps) {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return null
  }

  const textColorClass = tone === 'light' ? 'text-white/90' : 'text-charcoal-light'
  const components = createComponents(tone)

  if (isPortableTextArray(value)) {
    return (
      <div className={className}>
        <PortableText
          value={value}
          components={components}
        />
      </div>
    )
  }

  const paragraphs = normalizeTextParagraphs(value)
  if (paragraphs.length === 0) {
    return null
  }

  return (
    <div className={className}>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 50)}
          className={`${textColorClass} text-lg leading-relaxed mb-4 last:mb-0`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}
