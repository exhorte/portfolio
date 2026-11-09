import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import type { ProjectText } from "@/lib/i18n/types";

// Structure only: slug, title, stack and links. Category, tagline and every case-study text
// live in the language dictionaries (`src/lib/i18n/dictionaries`), keyed by slug.

export type ProjectSlug =
  | "ai-software-architect"
  | "hr-agent-assistant"
  | "tontyn"
  | "vozel"
  | "fryle"
  | "medical-agent"
  | "fluent"
  | "finway"
  | "trading-operating-system"
  | "finflow"
  | "habit-tracker"
  | "react-chatbot"
  | "laravel-product-crud"
  | "jee-to-spring-boot"
  | "spring-thymeleaf-crud"
  | "django-auth"
  | "reservio"
  | "meteoworld"
  | "movieflix"
  | "fraudlens"
  | "churnlens";

export type ProjectBase = {
  slug: ProjectSlug;
  title: string;
  tier: 1 | 2 | 3;
  /** Technologies that explain the architecture come first (the first four appear on cards). */
  stack: string[];
  /** Only verified links are listed. */
  github?: string;
  demo?: string;
  website?: string;
  hasDetailPage: boolean;
};

export type Project = ProjectBase & ProjectText;

/** What the cards of the home page need (kept small: it is sent to the browser). */
export type ProjectCard = Pick<
  Project,
  "slug" | "title" | "tagline" | "category" | "github" | "demo" | "website" | "hasDetailPage"
> & { stack: string[] };

const baseProjects: ProjectBase[] = [
  {
    slug: "ai-software-architect",
    title: "AI Software Architect",
    tier: 1,
    stack: [
      "TypeScript",
      "Next.js 16",
      "Trigger.dev",
      "Vercel AI SDK",
      "Prisma",
      "PostgreSQL",
      "Liveblocks",
      "React Flow",
      "Gemini",
      "DeepSeek",
      "Vitest",
    ],
    github: "https://github.com/exhorte/ai-software-architect",
    hasDetailPage: true,
  },
  {
    slug: "hr-agent-assistant",
    title: "HRagentAssistant",
    tier: 1,
    stack: ["Python", "Streamlit", "Qdrant", "LangChain", "SQLite", "Groq", "Jina embeddings", "pytest"],
    github: "https://github.com/exhorte/HRagentAssistant",
    hasDetailPage: true,
  },
  {
    slug: "tontyn",
    title: "Tontyn",
    tier: 1,
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "Flutter", "JWT", "Docker", "DeepSeek API"],
    github: "https://github.com/exhorte/TontyneApp",
    demo: "https://tontyn-frontend.vercel.app",
    hasDetailPage: true,
  },
  {
    slug: "vozel",
    title: "Vozel",
    tier: 1,
    stack: ["Rust", "Tauri 2", "ONNX Runtime", "React", "TypeScript", "SQLite", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/exhorte/vozel",
    website: "https://vozelwebsite.vercel.app",
    hasDetailPage: true,
  },
  {
    slug: "fryle",
    title: "Fryle",
    tier: 2,
    stack: ["Next.js", "React 19", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS", "Vitest"],
    github: "https://github.com/exhorte/Fryle",
    hasDetailPage: false,
  },
  {
    slug: "medical-agent",
    title: "medicalAgent",
    tier: 2,
    stack: ["Python", "FastAPI", "LangChain", "Pinecone", "Groq", "Gemini embeddings"],
    github: "https://github.com/exhorte/medicalAgent",
    hasDetailPage: false,
  },
  {
    slug: "fluent",
    title: "Fluent",
    tier: 1,
    stack: ["C#", ".NET", "WPF", "Whisper", "Gemini API", "DeepSeek API", "Supabase", "SQLite"],
    github: "https://github.com/exhorte/Fluent",
    hasDetailPage: true,
  },
  {
    slug: "finway",
    title: "Finway",
    tier: 2,
    stack: ["Next.js 16", "React 19", "TypeScript", "Appwrite", "Plaid", "Dwolla", "Tailwind CSS"],
    github: "https://github.com/exhorte/finway",
    hasDetailPage: false,
  },
  {
    slug: "trading-operating-system",
    title: "Trading Operating System",
    tier: 1,
    stack: ["TypeScript", "Next.js", "C#", "Python", "TimescaleDB", "MT5"],
    hasDetailPage: true,
  },
  {
    slug: "finflow",
    title: "FinFlow",
    tier: 2,
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Chart.js"],
    github: "https://github.com/exhorte/FinFlow",
    hasDetailPage: false,
  },
  {
    slug: "habit-tracker",
    title: "HabitTracker",
    tier: 2,
    stack: ["React Native", "Expo", "TypeScript", "Appwrite"],
    github: "https://github.com/exhorte/habit-tracker-app",
    hasDetailPage: false,
  },
  {
    slug: "react-chatbot",
    title: "React AI Chatbot",
    tier: 2,
    stack: ["React", "Vite", "Gemini API", "OpenAI API", "Anthropic API", "DeepSeek API"],
    github: "https://github.com/exhorte/react-chatbot",
    hasDetailPage: false,
  },
  {
    slug: "laravel-product-crud",
    title: "Laravel Product CRUD",
    tier: 3,
    stack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/exhorte/crud_laravel",
    hasDetailPage: false,
  },
  {
    slug: "jee-to-spring-boot",
    title: "JEE → Spring Boot Progression",
    tier: 3,
    stack: ["Java", "JEE", "Spring Boot", "React"],
    github: "https://github.com/exhorte/JEE_EJB_spring_MVC_spring_boot",
    hasDetailPage: false,
  },
  {
    slug: "spring-thymeleaf-crud",
    title: "Spring Boot + Thymeleaf CRUD",
    tier: 3,
    stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/exhorte/Application-CRUD-Spring-Boot-Spring-MVC-Thymeleaf-et-MySQL",
    hasDetailPage: false,
  },
  {
    slug: "django-auth",
    title: "Django Auth Flow",
    tier: 3,
    stack: ["Python", "Django"],
    github: "https://github.com/exhorte/authen-django",
    hasDetailPage: false,
  },
  {
    slug: "reservio",
    title: "Reservio",
    tier: 3,
    stack: ["PHP", "MySQL"],
    github: "https://github.com/exhorte/Reservio.github.io",
    hasDetailPage: false,
  },
  {
    slug: "meteoworld",
    title: "MeteoWorld",
    tier: 3,
    stack: ["Flutter", "Dart"],
    github: "https://github.com/exhorte/MeteoWorld",
    hasDetailPage: false,
  },
  {
    slug: "movieflix",
    title: "MovieFlix",
    tier: 3,
    stack: ["React Native", "Expo"],
    github: "https://github.com/exhorte/MovieFlix",
    hasDetailPage: false,
  },
  {
    slug: "fraudlens",
    title: "FraudLens",
    tier: 2,
    stack: ["Python", "scikit-learn", "XGBoost", "imbalanced-learn", "Streamlit", "pytest"],
    github: "https://github.com/exhorte/FraudLens",
    hasDetailPage: false,
  },
  {
    slug: "churnlens",
    title: "ChurnLens",
    tier: 2,
    stack: ["Python", "scikit-learn", "Streamlit", "FastAPI", "pytest", "Docker"],
    github: "https://github.com/exhorte/ChurnLens",
    hasDetailPage: false,
  },
];

// Featured on the home page, in display order.
const featuredSlugs: ProjectSlug[] = ["ai-software-architect", "hr-agent-assistant", "tontyn", "vozel"];

// Shown as a compact "More projects" list under the featured projects.
const secondarySlugs: ProjectSlug[] = ["fryle", "medical-agent", "fraudlens", "churnlens", "fluent", "finway"];

function localize(base: ProjectBase, locale: Locale): Project {
  return { ...base, ...getDictionary(locale).projectTexts[base.slug] };
}

function pick(slugs: readonly ProjectSlug[]): ProjectBase[] {
  return slugs
    .map((slug) => baseProjects.find((p) => p.slug === slug))
    .filter((p): p is ProjectBase => Boolean(p));
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  const base = baseProjects.find((p) => p.slug === slug);
  return base && localize(base, locale);
}

export function toCard(project: Project): ProjectCard {
  const { slug, title, tagline, category, github, demo, website, hasDetailPage } = project;
  return { slug, title, tagline, category, github, demo, website, hasDetailPage, stack: project.stack.slice(0, 4) };
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return pick(featuredSlugs).map((p) => localize(p, locale));
}

export function getSecondaryProjects(locale: Locale): Project[] {
  return pick(secondarySlugs).map((p) => localize(p, locale));
}

/** Every project with a detail page, used to prerender `/projects/<slug>`. */
export const detailSlugs: ProjectSlug[] = baseProjects.filter((p) => p.hasDetailPage).map((p) => p.slug);

/** Listed projects (featured, then secondary) that have a detail page: advertised in the sitemap and in "more projects". */
const listedDetailBases = [...pick(featuredSlugs), ...pick(secondarySlugs)].filter((p) => p.hasDetailPage);
export const listedDetailSlugs: ProjectSlug[] = listedDetailBases.map((p) => p.slug);

export function getNextProjects(locale: Locale, slug: string, count = 2): Project[] {
  const others = listedDetailBases.filter((p) => p.slug !== slug);
  if (others.length === 0) return [];
  const index = listedDetailBases.findIndex((p) => p.slug === slug);
  const start = index === -1 ? 0 : index % others.length;
  return [...others.slice(start), ...others.slice(0, start)].slice(0, count).map((p) => localize(p, locale));
}
