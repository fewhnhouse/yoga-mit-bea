import { groq } from "next-sanity";

export const heroQuery = groq`*[_type == "hero"][0]{
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink
}`;

export const aboutQuery = groq`*[_type == "about"][0]{
  title,
  description,
  image,
  qualifications
}`;

export const servicesQuery = groq`*[_type == "service"] | order(order asc){
  _id,
  title,
  slug,
  shortDescription,
  fullDescription,
  icon,
  image,
  price,
  duration
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  title,
  slug,
  shortDescription,
  fullDescription,
  icon,
  image,
  price,
  duration
}`;

export const yogaClassesQuery = groq`*[_type == "yoga"] | order(order asc){
  _id,
  title,
  slug,
  description,
  level,
  image,
  schedule,
  benefits
}`;

export const therapyServicesQuery = groq`*[_type == "therapy"] | order(order asc){
  _id,
  title,
  slug,
  shortDescription,
  fullDescription,
  image,
  benefits,
  suitableFor,
  price,
  duration
}`;

export const testimonialsQuery = groq`*[_type == "testimonial" && featured == true]{
  _id,
  name,
  quote,
  service->{title},
  image
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteName,
  siteDescription,
  logo,
  email,
  phone,
  address,
  socialLinks,
  openingHours
}`;

export const contactQuery = groq`*[_type == "contact"][0]{
  title,
  subtitle,
  mapEmbed,
  image
}`;

