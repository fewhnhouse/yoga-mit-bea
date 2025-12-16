import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ctaText",
      title: "Call to Action Text",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "Call to Action Link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "backgroundImage",
    },
  },
});

