import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      description: 'Toggle to show/hide this page on the website',
      initialValue: true,
    }),
    defineField({
      name: 'site',
      title: 'Belongs to Site',
      type: 'string',
      options: {
        list: [
          { title: 'Yoga only', value: 'yoga' },
          { title: 'Psychotherapie only', value: 'therapie' },
          { title: 'Both sites', value: 'both' },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'both',
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Navigation Order',
      type: 'number',
      description:
        'Order in which this page appears in the navigation (lower numbers first)',
      initialValue: 100,
    }),

    // Sections array - composable page content
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'textSection' },
        { type: 'ctaSection' },
        { type: 'imageTextSection' },
        { type: 'cardsGridSection' },
        { type: 'serviceSection' },
        { type: 'testimonialsSection' },
        { type: 'richTextSection' },
        { type: 'googleMeetSection' },
      ],
    }),

    // SEO Fields
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Override the page title for search engines',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Description shown in search results',
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords/tags for search engines (e.g., "Yoga", "Meditation", "Entspannung")',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image shown when sharing on social media',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'Prevent this page from being indexed by search engines',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      site: 'site',
      sections: 'sections',
      enabled: 'enabled',
    },
    prepare(selection) {
      const { title, slug, site, sections, enabled } = selection
      const siteEmojis: Record<string, string> = {
        yoga: '🧘',
        therapie: '💆',
        both: '🔄',
      }
      const siteEmoji = site ? siteEmojis[site] || '' : ''
      const sectionCount = sections?.length || 0
      const disabledTag = enabled === false ? ' [DISABLED]' : ''

      return {
        title: `${siteEmoji} ${title || 'Untitled'}${disabledTag}`,
        subtitle: `/${slug || ''} • ${sectionCount} section${sectionCount !== 1 ? 's' : ''}`,
      }
    },
  },
})
