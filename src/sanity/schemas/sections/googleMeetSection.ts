import { defineType, defineField } from 'sanity'

/**
 * GoogleMeetSection - Section with Google Meet join link and instructions
 */
export default defineType({
  name: 'googleMeetSection',
  title: 'Google Meet Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: "Main heading (e.g., 'Ab jetzt immer Montag')",
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'string',
      description: "Time/schedule text (e.g., 'von 18:30 – 19:45 Uhr')",
    }),
    defineField({
      name: 'instructionsTitle',
      title: 'Instructions Title',
      type: 'string',
      initialValue: 'So nimmst du teil:',
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Step-by-step instructions for joining',
    }),
    defineField({
      name: 'meetLink',
      title: 'Google Meet Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Jetzt beitreten',
    }),
    defineField({
      name: 'footnote',
      title: 'Footnote',
      type: 'string',
      description: 'Small text below the button',
      initialValue: 'Der Link führt zu Google Meet',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
      options: {
        list: [
          { title: 'Light (warm-white)', value: 'light' },
          { title: 'Cream', value: 'cream' },
        ],
      },
      initialValue: 'light',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      schedule: 'schedule',
    },
    prepare({ title, schedule }) {
      return {
        title: title || 'Google Meet Section',
        subtitle: schedule || 'Video meeting join section',
      }
    },
  },
})
