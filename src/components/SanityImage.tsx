import { urlFor } from '@/sanity/image'
import type { SanityImageSource } from '@sanity/image-url'

/**
 * A Sanity image object as projected from GROQ. Crucially this is the *image*
 * object (with `asset` ref, `crop` and `hotspot`) — NOT `image.asset->url`.
 * The crop/hotspot data is what makes focal-point cropping possible, and it
 * only lives on this object.
 */
export interface SanityImageValue {
  asset?: { _ref?: string; _type?: string }
  hotspot?: { x?: number; y?: number }
  crop?: unknown
  lqip?: string | null
  dimensions?: { width?: number; height?: number; aspectRatio?: number } | null
}

export interface ArtDirectedCrop {
  /** CSS media query, e.g. '(min-width: 1024px)'. List most specific first. */
  media: string
  width: number
  height: number
}

interface SanityImageProps {
  image: SanityImageValue
  alt: string
  /** Fallback crop used by the <img> (smallest / default viewport). */
  width: number
  height: number
  /** Per-viewport crops rendered as <picture><source> — the art-direction list. */
  sources?: ArtDirectedCrop[]
  className?: string
  priority?: boolean
}

/**
 * Renders a Sanity image as a <picture> with viewport-dependent, hotspot-aware
 * crops. Each `sources` entry and the base width/height produce a different
 * aspect ratio, and because we pass the full image object through `urlFor()`
 * with `.fit('crop')`, every crop pivots around the editor's focal point.
 *
 * Resizing/format negotiation is done by the Sanity image CDN (`auto('format')`
 * → WebP/AVIF), so this deliberately bypasses next/image.
 */
export default function SanityImage({
  image,
  alt,
  width,
  height,
  sources = [],
  className,
  priority = false,
}: SanityImageProps) {
  if (!image?.asset?._ref) return null

  // Passing the full image object (not asset->url) is what lets the builder
  // honor crop + hotspot. fit('crop') + explicit w/h crops to that aspect
  // ratio centered on the focal point.
  const url = (w: number, h: number) =>
    urlFor(image as SanityImageSource)
      .width(w)
      .height(h)
      .fit('crop')
      .auto('format')
      .url()

  // 1x/2x density descriptors keep fixed-size crops sharp on retina.
  const srcSet = (w: number, h: number) => `${url(w, h)} 1x, ${url(w * 2, h * 2)} 2x`

  return (
    <picture>
      {sources.map((s) => (
        <source key={s.media} media={s.media} srcSet={srcSet(s.width, s.height)} />
      ))}
      <img
        src={url(width, height)}
        srcSet={srcSet(width, height)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding='async'
        className={className}
        // lqip = tiny base64 placeholder from Sanity metadata; shows while loading.
        style={
          image.lqip
            ? {
                backgroundImage: `url(${image.lqip})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : undefined
        }
      />
    </picture>
  )
}
