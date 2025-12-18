import { defineType, defineField } from "sanity";

/**
 * CardsGridSection - Grid of IconCards
 * Cards can reference services OR define custom content
 * Uses IconCard.tsx component for rendering each card
 */
export default defineType({
  name: "cardsGridSection",
  title: "Cards Grid Section",
  type: "object",
  fields: [
    // Section header
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "Small uppercase text above the title",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Optional description text below the title",
    }),

    // Grid configuration
    defineField({
      name: "columns",
      title: "Columns",
      type: "number",
      options: {
        list: [
          { title: "2 columns", value: 2 },
          { title: "3 columns", value: 3 },
          { title: "4 columns", value: 4 },
        ],
      },
      description: "Number of columns on large screens (auto-adjusts on mobile)",
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Light (warm-white)", value: "light" },
          { title: "Cream", value: "cream" },
        ],
        layout: "radio",
      },
      initialValue: "cream",
    }),

    // Card styling (applies to all cards)
    defineField({
      name: "cardVariant",
      title: "Card Style",
      type: "string",
      options: {
        list: [
          { title: "Card (with background)", value: "card" },
          { title: "Flat (no background)", value: "flat" },
        ],
        layout: "radio",
      },
      initialValue: "card",
    }),
    defineField({
      name: "cardSize",
      title: "Card Size",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Compact", value: "compact" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
    defineField({
      name: "cardAlign",
      title: "Card Alignment",
      type: "string",
      options: {
        list: [
          { title: "Center", value: "center" },
          { title: "Left", value: "left" },
        ],
        layout: "radio",
      },
      initialValue: "center",
    }),

    // Cards array
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "card",
          fields: [
            // Option 1: Reference a service
            defineField({
              name: "serviceRef",
              title: "Link to Service",
              type: "reference",
              to: [{ type: "service" }],
              description: "If set, pulls icon, title, and description from this service",
            }),
            // Option 2: Custom card content
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Lotus", value: "lotus" },
                  { title: "Group", value: "group" },
                  { title: "Calendar", value: "calendar" },
                  { title: "Path", value: "path" },
                  { title: "Hands", value: "hands" },
                  { title: "Wind", value: "wind" },
                  { title: "Sound", value: "sound" },
                  { title: "Video", value: "video" },
                  { title: "Heart", value: "heart" },
                  { title: "Clock", value: "clock" },
                  { title: "Check", value: "check" },
                  { title: "Home", value: "home" },
                ],
              },
              hidden: ({ parent }) => !!parent?.serviceRef,
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              hidden: ({ parent }) => !!parent?.serviceRef,
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
              hidden: ({ parent }) => !!parent?.serviceRef,
            }),
            defineField({
              name: "href",
              title: "Link URL",
              type: "string",
              description: "Optional link for the card",
            }),
            defineField({
              name: "ctaText",
              title: "CTA Text",
              type: "string",
              description: "Optional call-to-action text (e.g., 'Mehr erfahren')",
            }),
          ],
          preview: {
            select: {
              customTitle: "title",
              serviceTitle: "serviceRef.title",
              icon: "icon",
            },
            prepare({ customTitle, serviceTitle, icon }) {
              const title = serviceTitle || customTitle || "Card";
              return {
                title: serviceTitle ? `📌 ${title}` : title,
                subtitle: serviceTitle ? "Linked to service" : icon || "Custom card",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      cards: "cards",
    },
    prepare({ title, cards }) {
      const cardCount = cards?.length || 0;
      return {
        title: title || "Cards Grid",
        subtitle: `${cardCount} card${cardCount !== 1 ? "s" : ""}`,
      };
    },
  },
});

