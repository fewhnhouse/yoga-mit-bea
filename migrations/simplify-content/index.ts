import { at, defineMigration, set, unset } from "sanity/migrate";
import type { MigrationContext, NodePatch } from "sanity/migrate";

const CODE_ROUTES = new Set(["kontakt", "impressum", "datenschutz"]);

const DOCUMENT_FIELDS_TO_DROP: Record<string, string[]> = {
  page: ["order"],
  siteSettings: ["tagline"],
  service: [
    "fullDescription",
    "features",
    "duration",
    "pricing",
    "events",
    "imagePosition",
    "sectionBackground",
    "badge",
    "ctaText",
    "ctaLink",
  ],
  location: ["shortName", "slug", "maxParticipants", "address"],
  testimonial: ["service"],
};

const SECTION_FIELDS_TO_DROP: Record<string, string[]> = {
  textSection: ["label"],
  imageTextSection: ["label", "tagline", "headingLevel"],
  ctaSection: ["icon", "showIcon"],
  testimonialsSection: ["label", "showTestimonialsFrom", "featuredOnly"],
  serviceSection: ["imagePosition", "badge", "customId"],
};

type LegacyLink = { _type?: string; text?: string; href?: string };
type Section = { _type: string; _key: string; [field: string]: unknown };

let pageIdsBySlug: Promise<Map<string, string>> | undefined;

function loadPageIds(client: MigrationContext["client"]) {
  pageIdsBySlug ??= client
    .fetch<{ _id: string; slug: string }[]>(
      `*[_type == "page" && !(_id in path("drafts.**"))]{ _id, "slug": slug.current }`
    )
    .then((pages) => new Map(pages.map((p) => [p.slug, p._id])));
  return pageIdsBySlug;
}

function toLink(
  legacy: LegacyLink | undefined,
  pageIds: Map<string, string>,
  key?: string
) {
  if (!legacy) return undefined;
  if (legacy._type === "link") return legacy;
  if (!legacy.href) return undefined;

  const path = legacy.href.replace(/^https?:\/\/[^/]+/, "").replace(/^\/|\/$/g, "");
  const base = { ...(key && { _key: key }), _type: "link", text: legacy.text };
  if (CODE_ROUTES.has(path)) return { ...base, route: path };

  const pageId = pageIds.get(path);
  if (!pageId) throw new Error(`No page found for link "${legacy.href}"`);
  return { ...base, page: { _type: "reference", _ref: pageId } };
}

function migrateSection(section: Section, pageIds: Map<string, string>): Section {
  const next: Section = { ...section };
  for (const field of SECTION_FIELDS_TO_DROP[section._type] ?? []) delete next[field];

  if (section._type === "textSection" || section._type === "imageTextSection") {
    const cta = toLink(section.cta as LegacyLink | undefined, pageIds);
    if (cta) next.cta = cta;
    else delete next.cta;
  }
  if (section._type === "ctaSection" && Array.isArray(section.ctas)) {
    next.ctas = (section.ctas as (LegacyLink & { _key: string })[])
      .map((item) => toLink(item, pageIds, item._key))
      .filter(Boolean);
  }
  if (section._type === "cardsGridSection" && Array.isArray(section.cards)) {
    next.cards = (section.cards as Record<string, unknown>[]).map(
      ({ href: _href, ...card }) => card
    );
  }
  return next;
}

export default defineMigration({
  title: "Remove unused fields and turn free-text CTA links into page references",
  documentTypes: Object.keys(DOCUMENT_FIELDS_TO_DROP),
  migrate: {
    async document(doc, context) {
      const pageIds = await loadPageIds(context.client);
      const patches: NodePatch[] = DOCUMENT_FIELDS_TO_DROP[doc._type]
        .filter((field) => field in doc)
        .map((field) => at(field, unset()));

      if (doc._type === "service" && typeof doc.ctaLink === "string") {
        patches.push(
          at("cta", set(toLink({ text: doc.ctaText as string, href: doc.ctaLink }, pageIds)))
        );
      }
      if (doc._type === "page" && Array.isArray(doc.sections)) {
        const sections = (doc.sections as Section[]).map((s) => migrateSection(s, pageIds));
        if (JSON.stringify(sections) !== JSON.stringify(doc.sections)) {
          patches.push(at("sections", set(sections)));
        }
      }
      return patches;
    },
  },
});
