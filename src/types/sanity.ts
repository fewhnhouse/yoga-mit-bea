import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Hero {
  title: string;
  subtitle?: string;
  backgroundImage?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
}

export interface About {
  title: string;
  description?: PortableTextBlock[];
  image?: SanityImage;
  qualifications?: string[];
}

export interface Service {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  shortDescription?: string;
  fullDescription?: PortableTextBlock[];
  icon?: string;
  image?: SanityImage;
  price?: string;
  duration?: string;
}

export interface YogaClass {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  description?: PortableTextBlock[];
  level?: "anfaenger" | "mittelstufe" | "fortgeschritten" | "alle";
  image?: SanityImage;
  schedule?: {
    day: string;
    time: string;
    location: string;
  }[];
  features?: string[];
}

export interface Therapy {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  shortDescription?: string;
  fullDescription?: PortableTextBlock[];
  image?: SanityImage;
  features?: string[];
  suitableFor?: string[];
  price?: string;
  duration?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  quote: string;
  service?: {
    title: string;
  };
  image?: SanityImage;
}

export interface SiteSettings {
  siteName: string;
  siteDescription?: string;
  logo?: SanityImage;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  openingHours?: {
    day: string;
    hours: string;
  }[];
}

export interface Contact {
  title: string;
  subtitle?: string;
  mapEmbed?: string;
  image?: SanityImage;
}

