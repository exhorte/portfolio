import type { ComponentType } from "react";
import { Server, ShieldCheck, Bot, Layers3, FileText, Globe } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
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

export type Icon = ComponentType<{ className?: string; size?: number }>;

export const nav = {
  brand: "EM",
  // Empty = no "Download CV" button. Set to the PDF path once an up-to-date CV is published in /public.
  cvUrl: "",
  links: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

export const socials = [
  { icon: FaEnvelope, label: "Email", href: "mailto:exhortemboumbaba@gmail.com", handle: "exhortemboumbaba@gmail.com" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/exhorte", handle: "github.com/exhorte" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/exhorte-baboka-boumba", handle: "linkedin.com/in/exhorte-baboka-boumba" },
  { icon: Globe, label: "ExponentValue", href: "https://exponentvalue.com", handle: "exponentvalue.com" },
  { icon: FaXTwitter, label: "X", href: "https://x.com/exhorte1741", handle: "x.com/exhorte1741" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/exhortemboumba/", handle: "instagram.com/exhortemboumba" },
];

export const hero = {
  badge: "Open to Software & AI Engineering opportunities",
  greeting: "Hi, I'm",
  firstName: "Exhorte",
  lastName: "Mboumba",
  // Full professional title (exposed to assistive technology); the animated line cycles through `titles`.
  title: "Software Engineer · AI Engineer",
  titles: ["Software Engineer · AI Engineer", "Intelligent Systems & Automation"],
  headline: "Engineering software and intelligent systems that solve real-world problems.",
  summary:
    "I design and build full-stack applications, backend systems, AI-powered tools, and automated workflows. My focus is turning complex requirements into practical, reliable, and maintainable software.",
  location: "Based in Dakar, Senegal",
  floatCards: [
    { icon: SiReact, label: "React" },
    { icon: SiSpringboot, label: "Spring Boot" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiGooglegemini, label: "AI Agents" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a software engineer focused on building practical software products and intelligent systems.",
    "My work spans full-stack development, backend engineering, software architecture, and AI-powered applications. I enjoy solving problems that require more than a user interface: designing reliable APIs, structuring data, integrating AI capabilities, automating workflows, and ensuring that individual components work together as a coherent system.",
    "I approach engineering with an emphasis on clear architecture, maintainability, security, and testing. Whether I'm building a multi-agent platform, a document-grounded AI assistant, or a cross-platform application, my objective is the same: deliver software that addresses a real need and can evolve beyond its initial implementation.",
  ],
  interests:
    "My current interests include AI agent orchestration, retrieval-augmented generation, knowledge-intensive applications, and intelligent business automation.",
  degree: {
    title: "Licence in Software Engineering",
    place: "Institut Supérieur d'Informatique (ISI), Dakar",
    year: "2026",
  },
  principles: ["Clear architecture", "Maintainability", "Security", "Testing"],
  areasTitle: "Areas of work",
  areas: [
    {
      title: "Full-stack & backend",
      desc: "Spring Boot and Next.js applications with REST APIs, authentication and relational data.",
      examples: "Tontyn, Fryle",
    },
    {
      title: "Applied AI",
      desc: "Document-grounded RAG with cited sources, and multi-agent orchestration with schema-validated state.",
      examples: "HRagentAssistant, AI Software Architect",
    },
    {
      title: "Desktop & local inference",
      desc: "A Windows dictation app in Rust and Tauri with on-device speech recognition.",
      examples: "Vozel",
    },
  ],
};

export const skills = {
  tag: "Toolbox",
  title: "Skills",
  subtitle: "Technologies I have used in the projects below, grouped by area.",
};

export const skillCategories: { title: string; items: { name: string; icon: Icon }[] }[] = [
  {
    title: "Software Engineering",
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
    title: "AI Engineering",
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
    title: "Application Development",
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
    title: "Data & Infrastructure",
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

export const contact = {
  tag: "Let's connect",
  heading: "Have a project, product or technical challenge in mind?",
  text: "Open to relevant Software Engineering and AI Engineering opportunities, technical collaborations, and selected freelance projects.",
  cta: "Send me an email",
};

export const footer = {
  tagline: "Software and intelligent systems that solve real-world problems.",
  role: "Software Engineer · AI Engineer · Dakar, Senegal",
  copyright: "Exhorte Mboumba.",
};
