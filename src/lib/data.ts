import type { ComponentType } from "react";
import { Server, ShieldCheck, Bot, Layers3, FileText, Globe } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiDjango,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiDotnet,
  SiGooglegemini,
  SiPrisma,
  SiExpo,
  SiSqlite,
  SiSupabase,
  SiRust,
  SiTauri,
  SiFastapi,
  SiVercel,
  SiRender,
  SiQdrant,
  SiLangchain,
  SiScikitlearn,
  SiVitest,
} from "react-icons/si";

// Structure, links and icons only. Every visible sentence lives in the language dictionaries
// (`src/lib/i18n/dictionaries`); a label below can be overridden there through `labels`.

export type Icon = ComponentType<{ className?: string; size?: number }>;

export type NavId = "about" | "skills" | "projects" | "contact";

export const nav = {
  brand: "EM",
  // Empty = no "Download CV" button. Set to the PDF path once an up-to-date CV is published in /public.
  cvUrl: "",
  links: [{ id: "about" }, { id: "skills" }, { id: "projects" }, { id: "contact" }] as { id: NavId }[],
};

export const profile = {
  firstName: "Exhorte",
  lastName: "Mboumba",
};

export const socials = [
  { icon: FaEnvelope, label: "Email", href: "mailto:exhortemboumbaba@gmail.com", handle: "exhortemboumbaba@gmail.com" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/exhorte", handle: "github.com/exhorte" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/exhorte-baboka-boumba", handle: "linkedin.com/in/exhorte-baboka-boumba" },
  { icon: Globe, label: "ExponentValue", href: "https://exponentvalue.com", handle: "exponentvalue.com" },
];

export const heroCards = [
  { icon: SiReact, label: "React" },
  { icon: SiSpringboot, label: "Spring Boot" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiGooglegemini, label: "AI Agents" },
];

export type SkillCategoryId = "software" | "ai" | "application" | "data";

export const skillCategories: { id: SkillCategoryId; items: { name: string; icon: Icon }[] }[] = [
  {
    id: "software",
    items: [
      { name: "Java", icon: SiOpenjdk },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "REST APIs", icon: Server },
      { name: "Software Architecture", icon: Layers3 },
      { name: "Testing (JUnit, pytest, Vitest)", icon: SiVitest },
    ],
  },
  {
    id: "ai",
    items: [
      { name: "LLM Integration", icon: SiGooglegemini },
      { name: "Retrieval-Augmented Generation", icon: Layers3 },
      { name: "AI Agent Orchestration", icon: Bot },
      { name: "Structured Outputs & Validation", icon: ShieldCheck },
      { name: "LangChain", icon: SiLangchain },
      { name: "Machine Learning (scikit-learn, XGBoost)", icon: SiScikitlearn },
      { name: "Document Processing", icon: FileText },
    ],
  },
  {
    id: "application",
    items: [
      { name: "Python / FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "Laravel", icon: SiLaravel },
      { name: "Flutter", icon: SiFlutter },
      { name: "React Native / Expo", icon: SiExpo },
      { name: "Rust / Tauri", icon: SiTauri },
      { name: ".NET / WPF", icon: SiDotnet },
    ],
  },
  {
    id: "data",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Qdrant", icon: SiQdrant },
      { name: "Supabase", icon: SiSupabase },
      { name: "Docker", icon: SiDocker },
      { name: "Git / GitHub", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];

// Compact stack used by the ambient logo strip under the hero
export const stackPrimary = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Java", icon: SiOpenjdk },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Python", icon: SiPython },
  { name: "Rust", icon: SiRust },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
];
