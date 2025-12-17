import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteId",
      title: "Site ID",
      type: "string",
      options: {
        list: [
          { title: "Yoga mit Bea", value: "yoga" },
          { title: "Therapie mit Bea", value: "therapie" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Yoga mit Bea" or "Therapie mit Bea"',
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "The main tagline shown in quotes on the homepage",
    }),
    defineField({
      name: "domain",
      title: "Domain",
      type: "string",
      description: 'e.g., "yogamitbea.de"',
    }),
    defineField({
      name: "primaryColor",
      title: "Primary Color",
      type: "string",
      options: {
        list: [
          { title: "Sage (Green)", value: "sage" },
          { title: "Terracotta (Brown/Orange)", value: "terracotta" },
        ],
      },
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description: "Image shown when sharing links on social media (1200x630px recommended)",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Default meta description for the site",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "domain",
      media: "logo",
    },
  },
});
