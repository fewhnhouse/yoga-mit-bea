import { defineType, defineField } from "sanity";

export default defineType({
  name: "yoga",
  title: "Yoga Classes",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Class Title",
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
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "level",
      title: "Difficulty Level",
      type: "string",
      options: {
        list: [
          { title: "Anfänger", value: "anfaenger" },
          { title: "Mittelstufe", value: "mittelstufe" },
          { title: "Fortgeschritten", value: "fortgeschritten" },
          { title: "Alle Level", value: "alle" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Class Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Day", type: "string" },
            { name: "time", title: "Time", type: "string" },
            { name: "location", title: "Location", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
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
      subtitle: "level",
      media: "image",
    },
  },
});

