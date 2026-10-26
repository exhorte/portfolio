export type ProjectStatus = "development" | "prototype" | "demo" | "completed" | "experimental";

export const statusLabel: Record<ProjectStatus, string> = {
  development: "In Development",
  prototype: "Working Prototype",
  demo: "Available Demo",
  completed: "Completed Project",
  experimental: "Experimental",
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: ProjectStatus;
  tier: 1 | 2 | 3;
  problem?: string;
  solution?: string;
  /** What the work covered, and what it builds on. */
  contribution?: string;
  /** Technologies that explain the architecture come first (the first four appear on cards). */
  stack: string[];
  /** Implemented capabilities only. */
  highlights?: string[];
  architecture?: string[];
  decisions?: string[];
  validation?: string[];
  limitations?: string[];
  /** Only verified links are listed. */
  github?: string;
  demo?: string;
  website?: string;
  hasDetailPage: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-software-architect",
    title: "AI Software Architect",
    tagline: "Multi-agent platform designed to turn a product idea into structured engineering deliverables.",
    category: "AI / Multi-agent",
    status: "development",
    tier: 1,
    problem:
      "Turning a plain-language product idea into requirements, architecture and a backlog is slow and inconsistent, and it is hard to trace a user story to the component that implements it.",
    solution:
      "A Coordinator is designed to route work across four specialized agent teams — Business, Architecture, Engineering and Documentation — that exchange only schema-validated JSON through a shared memory, so every artifact stays traceable to its source requirement. The orchestration runtime and the first team (Business, including a human clarification step) are implemented; the other three teams are specified but not built yet.",
    contribution:
      "Personal project. The work covers the agent-system specification (coordinator workflow, 18 agent contracts, JSON schemas), the shared-memory runtime, the orchestration engine and the Business Team pipeline with its interface. The collaborative canvas, authentication and project management come from an existing foundation the platform is built on.",
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
    highlights: [
      "Shared memory validated with JSON Schema (Ajv): updates are checked on a draft copy and committed atomically",
      "Orchestration engine behind AgentInvoker and RunRecorder ports; the Trigger.dev tasks are thin wrappers around it",
      "Business Team pipeline with a human clarification step: the run suspends on a Trigger.dev waitpoint, resumes when the user answers, and unanswered questions become recorded assumptions",
      "Consistency checks between generated artifacts; a failed LLM call blocks its own section instead of aborting the whole run",
      "Pipeline and Memory viewer tabs that update live through Liveblocks events",
      "Selectable LLM provider (Gemini by default, DeepSeek) with per-model capability flags",
    ],
    architecture: [
      "Run API (POST /api/ai/run)",
      "Orchestration engine and planner",
      "Business Team agents (Trigger.dev)",
      "Schema-validated shared memory",
      "Consistency checks",
      "Realtime events to Pipeline and Memory tabs",
    ],
    decisions: [
      "Agent definition files are the source of truth for runtime prompts, so design documents and runtime behaviour cannot drift apart.",
      "Agents exchange schema-validated JSON only, never free-form chat.",
      "Engine logic lives in plain TypeScript modules behind ports, so it can be unit-tested without the task runner.",
    ],
    validation: [
      "Vitest unit tests for the memory layer, orchestrator engine, planner, consistency rules, API routes and realtime broadcasting.",
      "A real suspend, answer and resume cycle was exercised against Trigger.dev cloud.",
    ],
    limitations: [
      "Only the Business Team is implemented; the Architecture, Engineering and Documentation teams are specified but not built.",
      "No public demo: the hosted deployment needs its external services (authentication, canvas, task runner, storage, LLM) configured.",
      "The diagram-generating design agent produces nodes but no edges yet (documented known issue).",
    ],
    github: "https://github.com/exhorte/ai-software-architect",
    hasDetailPage: true,
  },
  {
    slug: "hr-agent-assistant",
    title: "HRagentAssistant",
    tagline: "HR assistant that answers from company documents, cites its sources and abstains when evidence is insufficient.",
    category: "Applied AI / RAG",
    status: "prototype",
    tier: 1,
    problem:
      "Employees ask HR the same policy questions repeatedly, while a generic chatbot can invent answers, ignore document versions or expose restricted documents.",
    solution:
      "A document-grounded assistant: it retrieves passages from the HR documents actually loaded, answers with verified citations, abstains when the evidence is not enough, reports conflicts between document versions and enforces role-based document access in the backend. It also guides a leave request (summary, explicit confirmation, HR decision) and lets an employee forward an unanswered question to HR.",
    contribution:
      "Personal project built as a local prototype on synthetic data: retrieval pipeline, guardrails, authorization model, workflows, Streamlit interface, test suite and documentation (architecture, security, roadmap).",
    stack: ["Python", "Streamlit", "Qdrant", "LangChain", "SQLite", "Groq", "Jina embeddings", "pytest"],
    highlights: [
      "Answers carry citations that are checked against the retrieved passages; the assistant abstains instead of guessing",
      "Detects conflicting active versions of the same document and reports the conflict",
      "Role-based access (employee, HR manager) enforced in the retrieval filter and the backend, not in the prompt",
      "Document content is treated as untrusted: prompt-injection attempts are neutralised",
      "Works fully offline by default (extractive answers, local embeddings, embedded Qdrant); an LLM and semantic embeddings are optional",
      "Leave-request workflow with explicit confirmation and HR approval, and escalation of questions to HR (no notification is sent)",
    ],
    architecture: [
      "Streamlit interface",
      "HR assistant pipeline",
      "Authentication and roles",
      "Answer engine and guardrails",
      "Qdrant index with access filter",
      "SQLite (users, documents, requests)",
    ],
    decisions: [
      "Abstain rather than answer: a lexical coverage gate refuses questions the documents do not cover.",
      "Access control is applied at retrieval time through a Qdrant filter, so restricted passages are never retrieved for the wrong role.",
      "No document text or question is written to the logs; all data stays local under data/runtime.",
    ],
    validation: [
      "Offline pytest suite split into unit, integration and security tests (access control, prompt injection and data leakage, workflow authorization).",
      "Two small business evaluation sets (36 and 15 cases). The repository itself notes these results are not a quality measure because the corpus is synthetic.",
    ],
    limitations: [
      "Prototype on synthetic data only: not suitable for real HR data until the points listed in docs/SECURITY.md are addressed.",
      "The abstention gate is lexical, so distant paraphrases (for example « travail à distance » for « télétravail ») are refused: safe, but sometimes unhelpful. Making it semantic is the first roadmap item.",
      "No SSO, notifications, OCR for scanned PDFs or leave-balance integration; authentication is local only.",
    ],
    github: "https://github.com/exhorte/HRagentAssistant",
    hasDetailPage: true,
  },
  {
    slug: "tontyn",
    title: "Tontyn",
    tagline: "Secure web and mobile platform for managing community savings circles (tontines).",
    category: "Full-stack / Mobile",
    status: "demo",
    tier: 1,
    problem:
      "Community savings circles (tontines) are often run on paper or messaging threads, with no shared record of who contributed, whose turn it is or who is late.",
    solution:
      "A three-tier platform (React web app, Flutter mobile app, Spring Boot API, PostgreSQL) covering the tontine lifecycle: groups and members, contribution cycles and beneficiaries, recorded payments with automatic receipts, scheduled reminders, a payment-reliability score per member, and an assistant that answers member questions.",
    contribution:
      "Final-year project of my Licence at ISI, covering the Spring Boot API, the React web interface and the Flutter mobile application.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "Flutter", "JWT", "Docker", "DeepSeek API"],
    highlights: [
      "REST API covering authentication, tontines, members, cycles, contributions, payments, receipts and notifications",
      "PIN login with a one-time-code second factor, JWT sessions, hashed credentials and per-tontine roles (manager, member)",
      "Progressive identity-verification levels",
      "Daily scheduled job that follows up on late contributions",
      "Payment-reliability score per member and automatic receipts",
      "AI assistant (DeepSeek API) that answers member questions, with a degraded mode when the provider is unavailable",
    ],
    architecture: [
      "React web and Flutter mobile clients",
      "Spring Boot REST API (JWT)",
      "Services: cycles, payments, reminders, assistant",
      "PostgreSQL",
    ],
    decisions: [
      "Three-tier separation, with a single API shared by the web and mobile clients.",
      "Spring method security with group-level authorization checks in the service layer.",
      "Docker image for the API and Docker Compose for the local PostgreSQL database.",
    ],
    validation: [
      "JUnit tests cover the AI assistant module (service logic, context building and an integration test).",
    ],
    limitations: [
      "Automated tests currently cover the AI assistant module only; the rest of the API, the web app and the mobile app are not covered.",
      "Payments are recorded per method (Orange Money, Wave); no payment-provider API is integrated.",
    ],
    github: "https://github.com/exhorte/TontyneApp",
    demo: "https://tontyn-frontend.vercel.app",
    hasDetailPage: true,
  },
  {
    slug: "vozel",
    title: "Vozel",
    tagline: "Windows dictation app that transcribes on-device and inserts text into the application you are using.",
    category: "Desktop / Local AI",
    status: "prototype",
    tier: 1,
    problem:
      "Many dictation tools send audio to a cloud service or only work inside their own editor, which is a poor fit for private text and for writing directly in other applications.",
    solution:
      "Hold Ctrl+Win to dictate: audio is captured and transcribed locally with a Parakeet-TDT speech model running on ONNX Runtime, optionally cleaned up by a small on-device language model, then inserted into the active application. Cloud transcription (Groq, OpenAI or Deepgram) is an explicit opt-in.",
    contribution:
      "Personal product developed under ExponentValue: the Rust backend (audio capture, speech recognition, text insertion, storage), the React interface and the design decisions documented in the repository.",
    stack: [
      "Rust",
      "Tauri 2",
      "ONNX Runtime",
      "React",
      "TypeScript",
      "SQLite",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    highlights: [
      "Global push-to-talk (Ctrl+Win) implemented with a Windows low-level keyboard hook",
      "Local speech recognition with Parakeet-TDT (INT8) on ONNX Runtime, chosen after a benchmark against whisper.cpp on French audio",
      "Optional on-device text cleanup with a quantised (int4) language model in the same runtime",
      "Cloud transcription behind a common provider interface (Groq, OpenAI, Deepgram), disabled by default, with API keys masked in logs",
      "Text insertion into the focused application with a clipboard fallback",
      "Local dictation history and personal dictionary stored in SQLite",
    ],
    architecture: [
      "Microphone capture and voice-activity detection (Rust)",
      "Local speech recognition (Parakeet-TDT, ONNX Runtime)",
      "Optional cloud transcription",
      "Optional on-device cleanup model",
      "Text insertion into the active application",
      "SQLite: dictionary, history, settings",
    ],
    decisions: [
      "Privacy by default: cloud transcription and model-based cleanup are opt-in settings.",
      "All database access lives on the Rust side (sqlx); the React interface calls Tauri commands.",
      "For the cleanup model, llama.cpp was dropped for ONNX Runtime because of build-dependency problems, and int8 quantisation was abandoned for int4 after quality testing.",
    ],
    validation: [
      "58 Rust tests cover storage, cloud-provider response parsing, keyboard-combination logic and text cleanup; 8 of them need the model files or a real target application and are skipped by default.",
      "Real microphone dictation into other applications was validated manually.",
    ],
    limitations: [
      "Windows only for now: the macOS and Linux text-insertion adapters are placeholders.",
      "The speech model (about 670 MB) is not bundled in the repository and must be installed separately.",
      "The on-device cleanup model (1.5 billion parameters, int4) gives uneven rewrite quality, which is why cleanup is optional.",
      "The interface has no automated tests yet. The source is public for review under an all-rights-reserved licence.",
    ],
    github: "https://github.com/exhorte/vozel",
    website: "https://vozelwebsite.vercel.app",
    hasDetailPage: true,
  },
  {
    slug: "fryle",
    title: "Fryle",
    tagline: "Electronics store with a PostgreSQL-backed catalog and orders, and Stripe Checkout payments.",
    category: "Full-stack / E-commerce",
    status: "prototype",
    tier: 2,
    problem:
      "An online store needs the catalog, stock and orders to live in its own database while the payment provider only handles the payment itself.",
    solution:
      "A Next.js store where the catalog, stock and orders live in PostgreSQL and Stripe Checkout handles payment, with guest checkout or optional Google and GitHub sign-in, and Stripe webhooks confirming orders.",
    stack: ["Next.js", "React 19", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS", "Vitest"],
    highlights: [
      "Catalog, stock and orders stored in PostgreSQL through Prisma",
      "Stripe Checkout payments confirmed by webhooks",
      "Guest checkout or optional Google and GitHub sign-in",
      "Integration tests for accounts, checkout, payment confirmation, refunds and rate limiting",
    ],
    github: "https://github.com/exhorte/Fryle",
    hasDetailPage: false,
  },
  {
    slug: "medical-agent",
    title: "medicalAgent",
    tagline: "RAG assistant that answers only from uploaded medical PDFs, with a FastAPI backend and a static web client.",
    category: "Applied AI / RAG",
    status: "prototype",
    tier: 2,
    problem: "Answers about a set of documents should come from those documents, not from the model's general knowledge.",
    solution:
      "A FastAPI service that indexes uploaded PDFs in a Pinecone vector index with Gemini embeddings and answers questions with a Groq-hosted model, plus a static web client and a Streamlit client for local development.",
    stack: ["Python", "FastAPI", "LangChain", "Pinecone", "Groq", "Gemini embeddings"],
    highlights: [
      "PDF upload, chunking and indexing in a vector database",
      "Answers restricted to the uploaded documents, returned with their sources",
      "FastAPI backend deployed on Render and a static client on Vercel",
    ],
    github: "https://github.com/exhorte/medicalAgent",
    hasDetailPage: false,
  },
  {
    slug: "fluent",
    title: "Fluent",
    tagline: "Local-first French dictation and AI rewriting for Windows",
    category: "Desktop / Local AI",
    status: "experimental",
    tier: 1,
    problem:
      "Dictating and cleaning up text on Windows means bouncing between a recorder, a notes app, and manual editing — with no privacy guarantee once a cloud dictation tool is in the loop.",
    solution:
      "A WPF desktop app that captures speech from a global hotkey, transcribes it locally with Whisper, rewrites it through a selected profile, and inserts it directly into whatever field was focused — with cloud rewriting (Gemini or DeepSeek) as an explicit opt-in, never the default.",
    stack: ["C#", ".NET", "WPF", "Whisper", "Gemini API", "DeepSeek API", "Supabase", "SQLite"],
    highlights: [
      "Local Whisper transcription — audio never leaves the machine unless Cloud rewrite is explicitly enabled",
      "Global hotkey and active-field detection to capture and reinsert text into the app you were using",
      "Provider architecture: LocalRewriteProvider vs. CloudRewriteProvider (Gemini / DeepSeek), selected per rewrite profile",
      "Insertion policy that blocks automatic writes into password fields",
      "Supabase-backed PKCE OAuth for the optional cloud tier",
    ],
    architecture: [
      "Microphone capture",
      "Local Whisper transcription",
      "Rewrite orchestrator (profile + provider selection)",
      "Local or Cloud rewrite provider",
      "Secure insertion into the active field",
    ],
    limitations: [
      "Cloud rewriting is optional and unavailable without a deployed backend.",
      "The manual checks for session restore, offline use and sign-out (phase 07B) were still open in the last repository update.",
    ],
    github: "https://github.com/exhorte/Fluent",
    hasDetailPage: true,
  },
  {
    slug: "finway",
    title: "Finway",
    tagline: "Banking dashboard built with Next.js, Appwrite, Plaid and Dwolla (sandbox environments).",
    category: "Full-stack / Fintech",
    status: "experimental",
    tier: 2,
    problem:
      "Personal finances are scattered across separate banking apps, with no single place to see balances across institutions or move money between them.",
    solution:
      "A Next.js App Router dashboard that links bank accounts through Plaid, aggregates balances and transaction history in one view, and moves money between accounts over ACH via Dwolla. Plaid and Dwolla run in their sandbox environments; Appwrite handles authentication and persistence, and forms are validated with Zod.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Appwrite", "Plaid", "Dwolla", "Tailwind CSS"],
    highlights: [
      "Bank-account linking and transaction history through Plaid (sandbox)",
      "ACH transfers between accounts through Dwolla (sandbox)",
      "Appwrite authentication and data persistence",
      "react-hook-form and Zod validation across forms",
    ],
    github: "https://github.com/exhorte/finway",
    hasDetailPage: false,
  },
  {
    slug: "trading-operating-system",
    title: "Trading Operating System",
    tagline: "Modular algorithmic trading infrastructure with ICT/SMC analysis and prop-firm risk rules",
    category: "Systems / Fintech",
    status: "experimental",
    tier: 1,
    problem:
      "Most retail algo-trading setups hardcode a single strategy directly against a broker API, with no separation between signal generation, risk validation, and execution — which makes the system impossible to test, extend, or reason about safely.",
    solution:
      "A modular cockpit and backend: a TypeScript ICT/SMC engine generates signals, a dedicated risk engine evaluates them against prop-firm-style rules before anything is allowed through, and a C# gateway translates approved decisions into an MT5 wire protocol — each stage documented with its own architecture decision record and covered by tests.",
    stack: ["TypeScript", "Next.js", "C#", "Python", "TimescaleDB", "MT5"],
    highlights: [
      "ICT/SMC signal-generation engine, documented in its own ADR",
      "Standalone risk engine enforcing prop-firm-style drawdown and exposure rules",
      "Execution bridge translating approved signals into MT5 commands via a C# gateway",
      "TimescaleDB persistence for market data and audit trail",
      "Cockpit UI: signals, positions, risk, backtests, replay, journal — one view per concern",
    ],
    architecture: [
      "Market data (MT5 observer)",
      "ICT/SMC strategy engine",
      "Risk engine (prop-firm rules)",
      "Execution bridge → MT5 gateway",
      "TimescaleDB persistence + cockpit UI",
    ],
    hasDetailPage: true,
  },
  {
    slug: "finflow",
    title: "FinFlow",
    tagline: "Microfinance management system for loan lifecycle and portfolio tracking",
    category: "Full-Stack / Fintech",
    status: "development",
    tier: 2,
    problem:
      "Small microfinance institutions manage loans, repayment schedules, and portfolio risk with spreadsheets, with no automated way to flag late payments or measure portfolio-at-risk.",
    solution:
      "A Laravel platform covering the loan lifecycle end to end — request to payoff — with automatic amortization schedules, PAR-30/60/90 risk calculation, multi-role dashboards, and a multi-step approval workflow.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Chart.js"],
    highlights: [
      "Automatic amortization schedule generation (linear and declining balance)",
      "PAR-30/60/90 portfolio-at-risk calculation with automatic late-payment detection",
      "Three-role access model (Admin / Agent / Member) with a multi-step approval workflow",
      "Real-time dashboards per role",
    ],
    github: "https://github.com/exhorte/FinFlow",
    hasDetailPage: false,
  },
  {
    slug: "habit-tracker",
    title: "HabitTracker",
    tagline: "Cross-platform habit tracker with real-time sync and optimistic UI",
    category: "Mobile",
    status: "development",
    tier: 2,
    problem:
      "Habit trackers that only update after a round-trip to the server feel sluggish, and most don't sync instantly across devices.",
    solution:
      "A React Native / Expo app backed by Appwrite: creating, completing, or deleting a habit updates the UI instantly and rolls back gracefully if the request fails, with WebSocket-driven real-time sync across devices and streak/leaderboard tracking.",
    stack: ["React Native", "Expo", "TypeScript", "Appwrite"],
    highlights: [
      "Optimistic UI updates with graceful rollback on failure",
      "Real-time sync across devices via Appwrite WebSockets",
      "Streak and leaderboard calculation",
      "Gesture-driven swipe-to-complete / swipe-to-delete",
    ],
    github: "https://github.com/exhorte/habit-tracker-app",
    hasDetailPage: false,
  },
  {
    slug: "react-chatbot",
    title: "React AI Chatbot",
    tagline: "Multi-LLM chat client with real-time streaming",
    category: "AI / Frontend",
    status: "experimental",
    tier: 2,
    problem: "Comparing how different LLMs respond to the same prompt usually means juggling separate playgrounds for each provider.",
    solution:
      "A React + Vite chat client that switches between Gemini, GPT-4o, Claude, DeepSeek and Grok in the same interface, with streaming responses, multi-conversation management, and markdown rendering. Client-side only for now — API keys aren't proxied through a backend, so it's an experimentation surface rather than a production deployment.",
    stack: ["React", "Vite", "Gemini API", "OpenAI API", "Anthropic API", "DeepSeek API"],
    highlights: [
      "Switches between 5 providers (Gemini, OpenAI, Anthropic, DeepSeek, xAI) in one UI",
      "Real-time streaming responses",
      "Multi-conversation sidebar with auto-generated titles",
    ],
    github: "https://github.com/exhorte/react-chatbot",
    hasDetailPage: false,
  },
  {
    slug: "laravel-product-crud",
    title: "Laravel Product CRUD",
    tagline: "Full CRUD for a product catalog with Laravel 12 and Eloquent",
    category: "Backend",
    status: "completed",
    tier: 3,
    stack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/exhorte/crud_laravel",
    hasDetailPage: false,
  },
  {
    slug: "jee-to-spring-boot",
    title: "JEE → Spring Boot Progression",
    tagline: "The same reservation system rebuilt across JEE/EJB, Spring MVC, and Spring Boot + React",
    category: "Backend",
    status: "completed",
    tier: 3,
    stack: ["Java", "JEE", "Spring Boot", "React"],
    github: "https://github.com/exhorte/JEE_EJB_spring_MVC_spring_boot",
    hasDetailPage: false,
  },
  {
    slug: "spring-thymeleaf-crud",
    title: "Spring Boot + Thymeleaf CRUD",
    tagline: "Product management CRUD with Spring Boot, Spring MVC, Thymeleaf and MySQL",
    category: "Backend",
    status: "completed",
    tier: 3,
    stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/exhorte/Application-CRUD-Spring-Boot-Spring-MVC-Thymeleaf-et-MySQL",
    hasDetailPage: false,
  },
  {
    slug: "django-auth",
    title: "Django Auth Flow",
    tagline: "Custom registration, login, and protected-route flow on Django's auth system",
    category: "Backend",
    status: "completed",
    tier: 3,
    stack: ["Python", "Django"],
    github: "https://github.com/exhorte/authen-django",
    hasDetailPage: false,
  },
  {
    slug: "reservio",
    title: "Reservio",
    tagline: "Meeting-room booking system with conflict detection",
    category: "Full-Stack",
    status: "completed",
    tier: 3,
    stack: ["PHP", "MySQL"],
    github: "https://github.com/exhorte/Reservio.github.io",
    hasDetailPage: false,
  },
  {
    slug: "meteoworld",
    title: "MeteoWorld",
    tagline: "Flutter weather app with live data for 5 cities and an animated loading sequence",
    category: "Mobile",
    status: "completed",
    tier: 3,
    stack: ["Flutter", "Dart"],
    github: "https://github.com/exhorte/MeteoWorld",
    hasDetailPage: false,
  },
  {
    slug: "movieflix",
    title: "MovieFlix",
    tagline: "Expo movie-discovery app on the TMDB API — home feed is live, search/saved/profile are scaffolded",
    category: "Mobile",
    status: "experimental",
    tier: 3,
    stack: ["React Native", "Expo"],
    github: "https://github.com/exhorte/MovieFlix",
    hasDetailPage: false,
  },
];

// Featured on the home page, in display order.
export const featuredSlugs = ["ai-software-architect", "hr-agent-assistant", "tontyn", "vozel"] as const;

// Shown as a compact "More projects" list under the featured projects.
export const secondarySlugs = ["fryle", "medical-agent", "fluent", "finway"] as const;

function pick(slugs: readonly string[]): Project[] {
  return slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
}

export const featuredProjects: Project[] = pick(featuredSlugs);
export const secondaryProjects: Project[] = pick(secondarySlugs);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Listed projects (featured, then secondary) that have a detail page, used for "more projects" navigation. */
export const detailProjects: Project[] = [...featuredProjects, ...secondaryProjects].filter((p) => p.hasDetailPage);

export function getNextProjects(slug: string, count = 2): Project[] {
  const others = detailProjects.filter((p) => p.slug !== slug);
  if (others.length === 0) return [];
  const index = detailProjects.findIndex((p) => p.slug === slug);
  const start = index === -1 ? 0 : index % others.length;
  return [...others.slice(start), ...others.slice(0, start)].slice(0, count);
}
