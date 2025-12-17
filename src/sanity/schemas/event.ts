import { defineType, defineField } from "sanity";

export default defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "site",
      title: "Belongs to Site",
      type: "string",
      options: {
        list: [
          { title: "Yoga only", value: "yoga" },
          { title: "Therapie only", value: "therapie" },
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
    }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Yogatag", value: "yogatag" },
          { title: "Yogawochenende", value: "yogawochenende" },
          { title: "Workshop", value: "workshop" },
          { title: "Retreat", value: "retreat" },
          { title: "Special", value: "special" },
        ],
      },
    }),
    defineField({
      name: "description",
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
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "startDate",
      title: "Start Date & Time",
      type: "datetime",
    }),
    defineField({
      name: "endDate",
      title: "End Date & Time",
      type: "datetime",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
    }),
    defineField({
      name: "customLocation",
      title: "Custom Location (if not in locations list)",
      type: "string",
      description: "Use this if the event is at a location not in the system",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "maxParticipants",
      title: "Maximum Participants",
      type: "number",
    }),
    defineField({
      name: "registrationOpen",
      title: "Registration Open",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
      description: "External registration link (if applicable)",
    }),
    defineField({
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      description: "Show this event prominently on the homepage",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Date (Upcoming First)",
      name: "dateAsc",
      by: [{ field: "startDate", direction: "asc" }],
    },
    {
      title: "Date (Recent First)",
      name: "dateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "startDate",
      eventType: "eventType",
      media: "image",
    },
    prepare({ title, date, eventType, media }) {
      const dateStr = date
        ? new Date(date).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
        : "No date";
      
      return {
        title,
        subtitle: `${eventType || "Event"} · ${dateStr}`,
        media,
      };
    },
  },
});

