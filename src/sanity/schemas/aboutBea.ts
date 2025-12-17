import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutBea",
  title: "About Bea",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "Bea",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photoAlt",
      title: "Photo Alt Text",
      type: "string",
      initialValue: "Bea - Yoga und Therapie",
    }),

    // Yoga-specific content
    defineField({
      name: "yogaContent",
      title: "Yoga Content",
      type: "object",
      fields: [
        defineField({
          name: "intro",
          title: "Introduction",
          type: "text",
          rows: 4,
          description: "Short intro text for the hero section on the Yoga site",
        }),
        defineField({
          name: "philosophyHeading",
          title: "Philosophy Heading",
          type: "string",
          initialValue: "Mein Verständnis von Yoga",
        }),
        defineField({
          name: "philosophy",
          title: "Philosophy Text",
          type: "array",
          of: [{ type: "block" }],
          description: "Main philosophy section content",
        }),
        defineField({
          name: "approach",
          title: "Approach Text",
          type: "array",
          of: [{ type: "block" }],
          description: "How you work with yoga students",
        }),
      ],
    }),

    // Therapie-specific content
    defineField({
      name: "therapieContent",
      title: "Therapie Content",
      type: "object",
      fields: [
        defineField({
          name: "intro",
          title: "Introduction",
          type: "text",
          rows: 4,
          description: "Short intro text for the hero section on the Therapie site",
        }),
        defineField({
          name: "philosophyHeading",
          title: "Philosophy Heading",
          type: "string",
          initialValue: "Mein therapeutischer Ansatz",
        }),
        defineField({
          name: "philosophy",
          title: "Philosophy Text",
          type: "array",
          of: [{ type: "block" }],
          description: "Main philosophy section content",
        }),
        defineField({
          name: "approach",
          title: "Approach Text",
          type: "array",
          of: [{ type: "block" }],
          description: "How you work with therapy clients",
        }),
      ],
    }),

    // Shared values that apply to both
    defineField({
      name: "coreValues",
      title: "Core Values",
      type: "array",
      description: "Values shown in the 'What to expect' section (applies to both sites)",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "yogaDescription",
              title: "Yoga Description",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "therapieDescription",
              title: "Therapie Description",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Heart", value: "heart" },
                  { title: "Clock", value: "clock" },
                  { title: "Lotus", value: "lotus" },
                  { title: "Hands", value: "hands" },
                  { title: "Path", value: "path" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "icon",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "photo",
    },
  },
});

