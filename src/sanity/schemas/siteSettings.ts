import { defineType, defineField } from "sanity";

const pageReferenceFilter =
  '_type == "page" && site in ["yoga", "therapie", "both"] && defined(slug.current) && enabled != false';

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
          { title: "Psychotherapie mit Bea", value: "therapie" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Yoga mit Bea" or "Psychotherapie mit Bea"',
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

    defineField({
      name: "businessLocation",
      title: "Standort & lokales SEO",
      type: "object",
      description:
        "Strukturierte Adresse für Google (Rich Results). Namen, Telefon und Adresse sollten mit dem Google-Unternehmensprofil übereinstimmen.",
      fields: [
        defineField({
          name: "schemaOrgType",
          title: "Art des Betriebs (Schema.org)",
          type: "string",
          options: {
            list: [
              { title: "YogaStudio", value: "YogaStudio" },
              { title: "ProfessionalService (z. B. Therapie)", value: "ProfessionalService" },
              { title: "LocalBusiness (allgemein)", value: "LocalBusiness" },
            ],
            layout: "radio",
          },
          initialValue: "YogaStudio",
        }),
        defineField({
          name: "streetAddress",
          title: "Straße und Hausnummer",
          type: "string",
        }),
        defineField({
          name: "addressLocality",
          title: "Ort",
          type: "string",
        }),
        defineField({
          name: "postalCode",
          title: "PLZ",
          type: "string",
        }),
        defineField({
          name: "addressRegion",
          title: "Bundesland",
          type: "string",
          description: "z. B. Baden-Württemberg",
        }),
        defineField({
          name: "addressCountry",
          title: "Land (ISO 3166-1)",
          type: "string",
          initialValue: "DE",
        }),
        defineField({
          name: "latitude",
          title: "Breitengrad (optional)",
          type: "number",
          description: "Für Geo-Koordinaten in den strukturierten Daten",
        }),
        defineField({
          name: "longitude",
          title: "Längengrad (optional)",
          type: "number",
        }),
        defineField({
          name: "serviceAreaDescription",
          title: "Einzugsgebiet / Region",
          type: "text",
          rows: 2,
          description:
            "Kurz, z. B. „Yoga und Kurse im Lonetal, Deggingen und Umgebung.“ Wird als areaServed ausgegeben.",
        }),
        defineField({
          name: "sameAs",
          title: "Öffentliche Profile (sameAs)",
          type: "array",
          of: [{ type: "url" }],
          description:
            "Links zu Instagram, Facebook, Google-Maps-Eintrag usw. — hilft Google, Entitäten zu verknüpfen.",
        }),
      ],
    }),

    defineField({
      name: "homepage",
      title: "Homepage",
      type: "reference",
      to: [{ type: "page" }],
      description: "Select which page to use as the homepage for this site",
      options: {
        filter: pageReferenceFilter,
      },
    }),
    defineField({
      name: "headerNavigation",
      title: "Header Navigation",
      type: "array",
      description:
        "Choose exactly which links should appear in the header. Each item can be a direct link or a submenu.",
      of: [
        {
          type: "object",
          name: "headerNavigationItem",
          title: "Navigation Item",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
              description:
                'Top-level menu label (e.g. "Angebote", "Über mich").',
            }),
            defineField({
              name: "page",
              title: "Direct Link Page",
              type: "reference",
              to: [{ type: "page" }],
              description: "Use this for a simple top-level link.",
              options: {
                filter: pageReferenceFilter,
              },
            }),
            defineField({
              name: "children",
              title: "Submenu Items",
              type: "array",
              description:
                'Use this for dropdown menus (e.g. top-level "Angebote" with multiple submenu links).',
              of: [
                {
                  type: "object",
                  name: "headerNavigationSubItem",
                  title: "Submenu Item",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label Override",
                      type: "string",
                      description:
                        "Optional. If empty, the referenced page title is used.",
                    }),
                    defineField({
                      name: "page",
                      title: "Page",
                      type: "reference",
                      to: [{ type: "page" }],
                      options: {
                        filter: pageReferenceFilter,
                      },
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      label: "label",
                      pageTitle: "page.title",
                    },
                    prepare(selection) {
                      const title = selection.label || selection.pageTitle || "Untitled item";
                      return {
                        title,
                        subtitle: "Submenu item",
                      };
                    },
                  },
                },
              ],
            }),
          ],
          validation: (Rule) =>
            Rule.custom(
              (
                value:
                  | {
                      page?: { _ref?: string };
                      children?: Array<{ page?: { _ref?: string } }>;
                    }
                  | undefined
              ) => {
                const hasPage = Boolean(value?.page?._ref);
                const hasChildren = Array.isArray(value?.children) && value.children.length > 0;

                if (!hasPage && !hasChildren) {
                  return "Add either a direct link page or at least one submenu item.";
                }
                if (hasPage && hasChildren) {
                  return "Use either a direct link page or submenu items, not both.";
                }
                return true;
              }
            ),
          preview: {
            select: {
              label: "label",
              pageTitle: "page.title",
              childCount: "children.length",
            },
            prepare(selection) {
              const title = selection.label || selection.pageTitle || "Untitled navigation item";
              const childCount = typeof selection.childCount === "number" ? selection.childCount : 0;

              if (childCount > 0) {
                return {
                  title,
                  subtitle: `${childCount} submenu item${childCount !== 1 ? "s" : ""}`,
                };
              }

              return {
                title,
                subtitle: "Direct header link",
              };
            },
          },
        },
      ],
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
