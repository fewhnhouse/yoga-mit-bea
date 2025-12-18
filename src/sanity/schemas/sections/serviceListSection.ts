import { defineType, defineField } from "sanity";

/**
 * ServiceListSection - Auto-fetches and renders all services for the current site
 * Uses ServiceSection.tsx component for rendering each service
 */
export default defineType({
  name: "serviceListSection",
  title: "Service List Section",
  type: "object",
  fields: [
    defineField({
      name: "showServicesFrom",
      title: "Show Services From",
      type: "string",
      options: {
        list: [
          { title: "Current site (automatic)", value: "current" },
          { title: "Yoga only", value: "yoga" },
          { title: "Therapie only", value: "therapie" },
        ],
      },
      initialValue: "current",
      description: "Which services to display",
    }),
    defineField({
      name: "alternateBackgrounds",
      title: "Alternate Backgrounds",
      type: "boolean",
      description: "Alternate between light and cream backgrounds for each service",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      showServicesFrom: "showServicesFrom",
    },
    prepare({ showServicesFrom }) {
      const labels: Record<string, string> = {
        current: "from current site",
        yoga: "Yoga services only",
        therapie: "Therapie services only",
      };
      return {
        title: "Service List",
        subtitle: `Auto-fetches services ${labels[showServicesFrom] || ""}`,
      };
    },
  },
});

