import { type SchemaTypeDefinition } from "sanity";

// Singleton documents
import siteSettings from "./siteSettings";
import aboutBea from "./aboutBea";
import homepageContent from "./homepageContent";

// Collection documents
import service from "./service";
import location from "./location";
import event from "./event";
import testimonial from "./testimonial";
import page from "./page";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singletons
  siteSettings,
  aboutBea,
  homepageContent,
  
  // Collections
  service,
  location,
  event,
  testimonial,
  page,
];
