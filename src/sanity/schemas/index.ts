import { type SchemaTypeDefinition } from "sanity";

// Singleton documents
import siteSettings from "./siteSettings";

// Collection documents
import service from "./service";
import location from "./location";
import testimonial from "./testimonial";
import page from "./page";
import link from "./link";

// Section schemas (object types for page builder)
import { sectionSchemas } from "./sections";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singletons
  siteSettings,
  
  // Collections
  service,
  location,
  testimonial,
  page,

  // Shared object types
  link,
  
  // Section types (object schemas used in page.sections)
  ...sectionSchemas,
];
