import { type SchemaTypeDefinition } from "sanity";
import hero from "./hero";
import about from "./about";
import service from "./service";
import testimonial from "./testimonial";
import siteSettings from "./siteSettings";
import yoga from "./yoga";
import therapy from "./therapy";
import contact from "./contact";

export const schemaTypes: SchemaTypeDefinition[] = [
  hero,
  about,
  service,
  testimonial,
  siteSettings,
  yoga,
  therapy,
  contact,
];

