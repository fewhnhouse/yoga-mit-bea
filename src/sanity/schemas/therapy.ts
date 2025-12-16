import { defineType, defineField } from "sanity";

export default defineType({
  name: "therapy",
  title: "Therapy Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Therapy Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Therapy Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "suitableFor",
      title: "Suitable For",
      type: "array",
      of: [{ type: "string" }],
      description: "List of conditions or situations this therapy helps with",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "duration",
      title: "Session Duration",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});

