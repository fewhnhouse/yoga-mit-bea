import { defineType, defineField } from "sanity";

export default defineType({
  name: "location",
  title: "Locations",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Yoga mit Bea im Schloss"',
    }),
    defineField({
      name: "shortName",
      title: "Short Name",
      type: "string",
      description: 'e.g., "Schloss" or "Wacholder"',
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "shortName",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief description of the location",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Google Maps URL",
      type: "url",
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "day",
              title: "Day",
              type: "string",
              options: {
                list: [
                  { title: "Montag", value: "Montag" },
                  { title: "Dienstag", value: "Dienstag" },
                  { title: "Mittwoch", value: "Mittwoch" },
                  { title: "Donnerstag", value: "Donnerstag" },
                  { title: "Freitag", value: "Freitag" },
                  { title: "Samstag", value: "Samstag" },
                  { title: "Sonntag", value: "Sonntag" },
                ],
              },
            }),
            defineField({
              name: "times",
              title: "Times",
              type: "string",
              description: 'e.g., "17:30–18:30 & 18:45–20:00"',
            }),
          ],
          preview: {
            select: {
              title: "day",
              subtitle: "times",
            },
          },
        },
      ],
    }),
    defineField({
      name: "pricing",
      title: "Pricing Info",
      type: "string",
      description: 'e.g., "8er Karte: 110€/120€ · 5er Flex: 80€/90€"',
    }),
    defineField({
      name: "maxParticipants",
      title: "Max Participants",
      type: "number",
      description: "Maximum number of participants (if applicable)",
    }),
    defineField({
      name: "usedBy",
      title: "Used By",
      type: "string",
      options: {
        list: [
          { title: "Yoga only", value: "yoga" },
          { title: "Therapie only", value: "therapie" },
          { title: "Both", value: "both" },
        ],
      },
      initialValue: "yoga",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "address",
      media: "image",
    },
  },
});

