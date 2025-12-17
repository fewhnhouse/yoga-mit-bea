import { defineType, defineField } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
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
      initialValue: "both",
    }),
    defineField({
      name: "title",
      title: "Page Title",
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
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
    }),

    // SEO Fields
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Override the page title for search engines",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Description shown in search results",
    }),
    defineField({
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description: "Image shown when sharing on social media",
    }),
    defineField({
      name: "noIndex",
      title: "Hide from Search Engines",
      type: "boolean",
      description: "Prevent this page from being indexed by search engines",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      site: "site",
    },
    prepare(selection) {
      const { title, slug, site } = selection;
      const siteEmojis: Record<string, string> = {
        yoga: "🧘",
        therapie: "💆",
        both: "🔄",
      };
      const siteEmoji = site ? siteEmojis[site] || "" : "";
      
      return {
        title: `${siteEmoji} ${title || "Untitled"}`,
        subtitle: `/${slug || ""}`,
      };
    },
  },
});

