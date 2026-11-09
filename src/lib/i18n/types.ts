import type { NavId, SkillCategoryId } from "@/lib/data";
import type { ProjectSlug } from "@/lib/projects";

/** Translatable part of a project; the structural part (stack, links…) lives in `projects.ts`. */
export type ProjectText = {
  category: string;
  tagline: string;
  problem?: string;
  solution?: string;
  /** What the work covered, and what it builds on. */
  contribution?: string;
  /** Implemented capabilities only. */
  highlights?: string[];
  architecture?: string[];
  decisions?: string[];
  validation?: string[];
  limitations?: string[];
};

/** Every visible text of the site. `en.ts` and `fr.ts` must both satisfy it. */
export type Dictionary = {
  meta: {
    siteName: string;
    title: string;
    description: string;
    keywords: string[];
    jobTitle: string;
  };
  nav: {
    links: Record<NavId, string>;
    menu: string;
    close: string;
    downloadCv: string;
    /** Accessible name of the language selector. */
    language: string;
    backToTop: string;
    backToTopTitle: string;
  };
  hero: {
    /** Accessible name of the introduction section. */
    sectionLabel: string;
    badge: string;
    greeting: string;
    /** Full title (exposed to assistive technology); the animated line cycles through `titles`. */
    title: string;
    titles: string[];
    headline: string;
    summary: string;
    location: string;
    exploreWork: string;
    getInTouch: string;
  };
  /** Overrides, keyed by their English text, for the labels defined in `data.ts` (skills, hero cards…). */
  labels: Record<string, string>;
  logoStrip: { label: string };
  about: {
    tag: string;
    title: string;
    paragraphs: string[];
    interests: string;
    principlesTitle: string;
    principles: string[];
    areasTitle: string;
    areas: { title: string; desc: string; examples: string }[];
  };
  skills: {
    tag: string;
    title: string;
    subtitle: string;
    categories: Record<SkillCategoryId, string>;
  };
  projects: {
    tag: string;
    title: string;
    gradient: string;
    subtitle: string;
    moreTitle: string;
    viewProject: string;
    details: string;
    sourceCode: string;
    liveDemo: string;
    website: string;
    seeAllOnGithub: string;
  };
  projectPage: {
    back: string;
    stackLabel: string;
    sections: {
      problem: string;
      solution: string;
      contribution: string;
      highlights: string;
      architecture: string;
      decisions: string;
      validation: string;
      limitations: string;
      more: string;
    };
  };
  contact: {
    tag: string;
    heading: string;
    text: string;
    cta: string;
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
  footer: {
    tagline: string;
    role: string;
    siteTitle: string;
    contactTitle: string;
  };
  projectTexts: Record<ProjectSlug, ProjectText>;
};
