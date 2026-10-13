import { defineMigration, delete_ } from "sanity/migrate";

/**
 * Run after `simplify-content`, which removes the `service.events` references
 * that would otherwise block deleting the events.
 */
export default defineMigration({
  title: "Delete events and the leftover aboutBea / homepageContent documents",
  documentTypes: ["event", "aboutBea", "homepageContent"],
  migrate: {
    document(doc) {
      return delete_(doc._id);
    },
  },
});
