import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "site",
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
      name: "title",
      title: "Title",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "page",
      title: "Service Page",
      type: "reference",
      to: [{ type: "page" }],
      description:
        "Page used for navigation links (e.g. footer service links).",
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Brief description shown in cards/previews",
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
          { title: "Shell", value: "shell" },
          { title: "Sun-Moon", value: "sun-moon" },
        ],
      },
      description: "Icon shown in service cards",
    }),
    defineField({
      name: "locations",
      title: "Available Locations",
      type: "array",
      of: [{ type: "reference", to: [{ type: "location" }] }],
      description: "Where this service is offered",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 100,
      validation: (Rule) => Rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
    {
      title: "Display Order (High to Low)",
      name: "orderDesc",
      by: [
        { field: "order", direction: "desc" },
        { field: "title", direction: "asc" },
      ],
    },
    {
      title: "Title (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "site",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const siteLabels: Record<string, string> = {
        yoga: "🧘 Yoga",
        therapie: "💆 Psychotherapie",
        both: "🔄 Both",
      };
      const siteLabel = subtitle ? siteLabels[subtitle] || subtitle : "";
      
      return {
        title: title || "Untitled Service",
        subtitle: siteLabel,
        media,
      };
    },
  },
});
