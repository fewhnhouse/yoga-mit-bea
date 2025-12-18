'use client'

import { PortableText, type PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/image'

interface RichTextSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[]
  background?: 'light' | 'cream' | 'transparent'
  maxWidth?: 'narrow' | 'medium' | 'wide'
}

// Custom components for PortableText rendering
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      const imageUrl = urlFor(value)?.url()
      if (!imageUrl) return null

      return (
        <figure className='my-8'>
          <div className='relative aspect-video rounded-lg overflow-hidden'>
            <Image
              src={imageUrl}
              alt={value.alt || ''}
              fill
              className='object-cover'
            />
          </div>
          {value.caption && (
            <figcaption className='text-center text-sm text-charcoal-light mt-2'>
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className='font-display text-4xl md:text-5xl font-semibold text-charcoal mt-12 mb-6'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='font-display text-3xl md:text-4xl font-semibold text-charcoal mt-10 mb-4'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='font-display text-2xl md:text-3xl font-semibold text-charcoal mt-8 mb-3'>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className='font-display text-xl font-semibold text-charcoal mt-6 mb-2'>
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className='text-charcoal-light leading-relaxed mb-4'>{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-sage pl-6 my-6 italic text-charcoal-light'>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className='list-disc list-inside space-y-2 mb-4 text-charcoal-light'>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className='list-decimal list-inside space-y-2 mb-4 text-charcoal-light'>
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className='font-semibold'>{children}</strong>,
    em: ({ children }) => <em className='italic'>{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className='text-sage-dark hover:text-sage underline underline-offset-2 transition-colors'
      >
        {children}
      </a>
    ),
  },
}

export default function RichTextSection({
  content = [],
  background = 'light',
  maxWidth = 'narrow',
}: RichTextSectionProps) {
  // Background classes
  const bgClasses: Record<string, string> = {
    light: 'bg-warm-white',
    cream: 'bg-cream',
    transparent: '',
  }

  // Max width classes
  const maxWidthClasses: Record<string, string> = {
    narrow: 'max-w-prose',
    medium: 'max-w-3xl',
    wide: 'max-w-5xl',
  }

  if (!content || content.length === 0) {
    return null
  }

  return (
    <section className={`py-24 ${bgClasses[background]}`}>
      <div className='container mx-auto px-6'>
        <div className={`${maxWidthClasses[maxWidth]} mx-auto prose prose-lg`}>
          <PortableText value={content} components={components} />
        </div>
      </div>
    </section>
  )
}

