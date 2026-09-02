// TypeScript Type Definitions for Portfolio Redesign

export type ProjectCategory = 'web-app' | 'html-css-js' | 'wordpress' | 'branding' | 'graphic-design';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  date: string;
  stack: string[];
  description: string;
  keyFeatures: string[];
  image: string;
  liveDemoUrl?: string;
  codeUrl?: string;
  pdfUrl?: string;
  isSubProject?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  date: string;
  description: string;
}

export interface Employment {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  company?: string; // Honeypot anti-spam field
}
