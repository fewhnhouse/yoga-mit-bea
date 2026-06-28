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
      name: "usedBy",
      title: "Belongs to Site",
      type: "string",
      options: {
        list: [
          { title: "Yoga only", value: "yoga" },
          { title: "Psychotherapie only", value: "therapie" },
          { title: "Both sites", value: "both" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "yoga",
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
      name: "streetAddress",
      title: "Straße und Hausnummer",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "postalCode",
      title: "PLZ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "addressLocality",
      title: "Ort",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "addressRegion",
      title: "Bundesland",
      type: "string",
      description: "Optional, z. B. Baden-Württemberg",
    }),
    defineField({
      name: "addressCountry",
      title: "Land (ISO 3166-1 alpha-2)",
      type: "string",
      initialValue: "DE",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "latitude",
      title: "Breitengrad",
      type: "number",
      description: "Optional — für Karten und strukturierte Daten",
    }),
    defineField({
      name: "longitude",
      title: "Längengrad",
      type: "number",
      description: "Optional — für Karten und strukturierte Daten",
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
      title: "Pricing Entries",
      type: "array",
      of: [
        defineField({
          name: "pricingEntry",
          title: "Pricing Entry",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: 'e.g., "8x Üben in 10 Wochen"',
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
              description: 'e.g., "8er Karte: 110€ / 120€ (60/90 Min.)" — line breaks are preserved',
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
            prepare({ title, subtitle }) {
              return {
                title: title || "Preis",
                subtitle,
              }
            },
          },
        }),
      ],
      description: "Add one or more pricing rows for this location",
    }),
    defineField({
      name: "maxParticipants",
      title: "Max Participants",
      type: "number",
      description: "Maximum number of participants (if applicable)",
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
      usedBy: "usedBy",
      streetAddress: "streetAddress",
      postalCode: "postalCode",
      addressLocality: "addressLocality",
      media: "image",
    },
    prepare({ title, usedBy, streetAddress, postalCode, addressLocality, media }) {
      const siteLabels: Record<string, string> = {
        yoga: "Yoga",
        therapie: "Psychotherapie",
        both: "Both sites",
      };
      const siteLabel = usedBy ? siteLabels[usedBy] ?? usedBy : "";
      const addressLine = [streetAddress, postalCode, addressLocality]
        .filter(Boolean)
        .join(", ");
      const subtitle = [siteLabel, addressLine].filter(Boolean).join(" · ");
      return {
        title: title || "Standort",
        subtitle: subtitle || undefined,
        media,
      };
    },
  },
});

