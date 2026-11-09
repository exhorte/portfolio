import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    siteName: "Exhorte Mboumba",
    title: "Exhorte Mboumba — Software Engineer | AI Engineer",
    description:
      "Portfolio of Exhorte Mboumba, a software engineer and AI engineer building full-stack applications, backend systems, AI-powered tools and automated workflows.",
    keywords: [
      "Exhorte Mboumba",
      "Software Engineer",
      "AI Engineer",
      "Full-Stack Developer",
      "Software Architecture",
      "RAG",
      "AI Agents",
      "Spring Boot",
      "Next.js",
      "Portfolio",
      "Dakar",
      "Senegal",
    ],
    jobTitle: "Software Engineer",
  },

  nav: {
    links: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    menu: "Menu",
    close: "Close",
    downloadCv: "Download CV",
    language: "Language",
    backToTop: "Back to the top of the page",
    backToTopTitle: "Back to top",
  },

  hero: {
    sectionLabel: "Introduction",
    badge: "Open to Software & AI Engineering opportunities",
    greeting: "Hi, I'm",
    title: "Software Engineer · AI Engineer",
    titles: ["Software Engineer · AI Engineer", "Intelligent Systems & Automation"],
    headline: "Engineering software and intelligent systems that solve real-world problems.",
    summary:
      "I design and build full-stack applications, backend systems, AI-powered tools, and automated workflows. My focus is turning complex requirements into practical, reliable, and maintainable software.",
    location: "Based in Dakar, Senegal",
    exploreWork: "Explore my work",
    getInTouch: "Get in touch",
  },

  labels: {},

  logoStrip: { label: "Core stack" },

  about: {
    tag: "Who I am",
    title: "About",
    paragraphs: [
      "I'm a software engineer focused on building practical software products and intelligent systems.",
      "My work spans full-stack development, backend engineering, software architecture, and AI-powered applications. I enjoy solving problems that require more than a user interface: designing reliable APIs, structuring data, integrating AI capabilities, automating workflows, and ensuring that individual components work together as a coherent system.",
      "I approach engineering with an emphasis on clear architecture, maintainability, security, and testing. Whether I'm building a multi-agent platform, a document-grounded AI assistant, or a cross-platform application, my objective is the same: deliver software that addresses a real need and can evolve beyond its initial implementation.",
    ],
    interests:
      "My current interests include AI agent orchestration, retrieval-augmented generation, knowledge-intensive applications, and intelligent business automation.",
    principlesTitle: "How I work",
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
  },

  skills: {
    tag: "Toolbox",
    title: "Skills",
    subtitle: "Technologies I have used in the projects below, grouped by area.",
    categories: {
      software: "Software Engineering",
      ai: "AI Engineering",
      application: "Application Development",
      data: "Data & Infrastructure",
    },
  },

  projects: {
    tag: "Selected work",
    title: "Featured",
    gradient: "Projects",
    subtitle:
      "Four projects that show how I work, from AI systems to full-stack and desktop applications. Each one states its limits.",
    moreTitle: "More projects",
    viewProject: "View project",
    details: "Details",
    sourceCode: "Source code",
    liveDemo: "Live demo",
    website: "Website",
    seeAllOnGithub: "See all projects on GitHub",
  },

  projectPage: {
    back: "Back to projects",
    stackLabel: "Technology stack",
    sections: {
      problem: "Problem",
      solution: "Solution",
      contribution: "My contribution",
      highlights: "Key features",
      architecture: "Architecture",
      decisions: "Engineering decisions",
      validation: "Validation and tests",
      limitations: "Limitations",
      more: "More projects",
    },
  },

  contact: {
    tag: "Let's connect",
    heading: "Have a project, product or technical challenge in mind?",
    text: "Open to relevant Software Engineering and AI Engineering opportunities, technical collaborations, and selected freelance projects.",
    cta: "Send me an email",
  },

  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has moved.",
    back: "Back to the home page",
  },

  footer: {
    tagline: "Software and intelligent systems that solve real-world problems.",
    role: "Software Engineer · AI Engineer · Dakar, Senegal",
    siteTitle: "Site",
    contactTitle: "Contact",
  },

  projectTexts: {
    "ai-software-architect": {
      category: "AI / Multi-agent",
      tagline: "Multi-agent platform designed to turn a product idea into structured engineering deliverables.",
      problem:
        "Turning a plain-language product idea into requirements, architecture and a backlog is slow and inconsistent, and it is hard to trace a user story to the component that implements it.",
      solution:
        "A Coordinator is designed to route work across four specialized agent teams — Business, Architecture, Engineering and Documentation — that exchange only schema-validated JSON through a shared memory, so every artifact stays traceable to its source requirement. The orchestration runtime and the first team (Business, including a human clarification step) are implemented; the other three teams are specified but not built yet.",
      contribution:
        "Personal project. The work covers the agent-system specification (coordinator workflow, 18 agent contracts, JSON schemas), the shared-memory runtime, the orchestration engine and the Business Team pipeline with its interface. The collaborative canvas, authentication and project management come from an existing foundation the platform is built on.",
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
    },

    "hr-agent-assistant": {
      category: "Applied AI / RAG",
      tagline:
        "HR assistant that answers from company documents, cites its sources and abstains when evidence is insufficient.",
      problem:
        "Employees ask HR the same policy questions repeatedly, while a generic chatbot can invent answers, ignore document versions or expose restricted documents.",
      solution:
        "A document-grounded assistant: it retrieves passages from the HR documents actually loaded, answers with verified citations, abstains when the evidence is not enough, reports conflicts between document versions and enforces role-based document access in the backend. It also guides a leave request (summary, explicit confirmation, HR decision) and lets an employee forward an unanswered question to HR.",
      contribution:
        "Personal project built as a local prototype on synthetic data: retrieval pipeline, guardrails, authorization model, workflows, Streamlit interface, test suite and documentation (architecture, security, roadmap).",
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
    },

    tontyn: {
      category: "Full-stack / Mobile",
      tagline: "Secure web and mobile platform for managing community savings circles (tontines).",
      problem:
        "Community savings circles (tontines) are often run on paper or messaging threads, with no shared record of who contributed, whose turn it is or who is late.",
      solution:
        "A three-tier platform (React web app, Flutter mobile app, Spring Boot API, PostgreSQL) covering the tontine lifecycle: groups and members, contribution cycles and beneficiaries, recorded payments with automatic receipts, scheduled reminders, a payment-reliability score per member, and an assistant that answers member questions.",
      contribution: "Covers the Spring Boot API, the React web interface and the Flutter mobile application.",
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
    },

    vozel: {
      category: "Desktop / Local AI",
      tagline: "Windows dictation app that transcribes on-device and inserts text into the application you are using.",
      problem:
        "Many dictation tools send audio to a cloud service or only work inside their own editor, which is a poor fit for private text and for writing directly in other applications.",
      solution:
        "Hold Ctrl+Win to dictate: audio is captured and transcribed locally with a Parakeet-TDT speech model running on ONNX Runtime, optionally cleaned up by a small on-device language model, then inserted into the active application. Cloud transcription (Groq, OpenAI or Deepgram) is an explicit opt-in.",
      contribution:
        "Personal product developed under ExponentValue: the Rust backend (audio capture, speech recognition, text insertion, storage), the React interface and the design decisions documented in the repository.",
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
    },

    fryle: {
      category: "Full-stack / E-commerce",
      tagline: "Electronics store with a PostgreSQL-backed catalog and orders, and Stripe Checkout payments.",
      problem:
        "An online store needs the catalog, stock and orders to live in its own database while the payment provider only handles the payment itself.",
      solution:
        "A Next.js store where the catalog, stock and orders live in PostgreSQL and Stripe Checkout handles payment, with guest checkout or optional Google and GitHub sign-in, and Stripe webhooks confirming orders.",
      highlights: [
        "Catalog, stock and orders stored in PostgreSQL through Prisma",
        "Stripe Checkout payments confirmed by webhooks",
        "Guest checkout or optional Google and GitHub sign-in",
        "Integration tests for accounts, checkout, payment confirmation, refunds and rate limiting",
      ],
    },

    "medical-agent": {
      category: "Applied AI / RAG",
      tagline: "RAG assistant that answers only from uploaded medical PDFs, with a FastAPI backend and a static web client.",
      problem: "Answers about a set of documents should come from those documents, not from the model's general knowledge.",
      solution:
        "A FastAPI service that indexes uploaded PDFs in a Pinecone vector index with Gemini embeddings and answers questions with a Groq-hosted model, plus a static web client and a Streamlit client for local development.",
      highlights: [
        "PDF upload, chunking and indexing in a vector database",
        "Answers restricted to the uploaded documents, returned with their sources",
        "FastAPI backend deployed on Render and a static client on Vercel",
      ],
    },

    fluent: {
      category: "Desktop / Local AI",
      tagline: "Local-first French dictation and AI rewriting for Windows",
      problem:
        "Dictating and cleaning up text on Windows means bouncing between a recorder, a notes app, and manual editing — with no privacy guarantee once a cloud dictation tool is in the loop.",
      solution:
        "A WPF desktop app that captures speech from a global hotkey, transcribes it locally with Whisper, rewrites it through a selected profile, and inserts it directly into whatever field was focused — with cloud rewriting (Gemini or DeepSeek) as an explicit opt-in, never the default.",
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
    },

    finway: {
      category: "Full-stack / Fintech",
      tagline: "Banking dashboard built with Next.js, Appwrite, Plaid and Dwolla (sandbox environments).",
      problem:
        "Personal finances are scattered across separate banking apps, with no single place to see balances across institutions or move money between them.",
      solution:
        "A Next.js App Router dashboard that links bank accounts through Plaid, aggregates balances and transaction history in one view, and moves money between accounts over ACH via Dwolla. Plaid and Dwolla run in their sandbox environments; Appwrite handles authentication and persistence, and forms are validated with Zod.",
      highlights: [
        "Bank-account linking and transaction history through Plaid (sandbox)",
        "ACH transfers between accounts through Dwolla (sandbox)",
        "Appwrite authentication and data persistence",
        "react-hook-form and Zod validation across forms",
      ],
    },

    "trading-operating-system": {
      category: "Systems / Fintech",
      tagline: "Modular algorithmic trading infrastructure with ICT/SMC analysis and prop-firm risk rules",
      problem:
        "Most retail algo-trading setups hardcode a single strategy directly against a broker API, with no separation between signal generation, risk validation, and execution — which makes the system impossible to test, extend, or reason about safely.",
      solution:
        "A modular cockpit and backend: a TypeScript ICT/SMC engine generates signals, a dedicated risk engine evaluates them against prop-firm-style rules before anything is allowed through, and a C# gateway translates approved decisions into an MT5 wire protocol — each stage documented with its own architecture decision record and covered by tests.",
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
    },

    finflow: {
      category: "Full-Stack / Fintech",
      tagline: "Microfinance management system for loan lifecycle and portfolio tracking",
      problem:
        "Small microfinance institutions manage loans, repayment schedules, and portfolio risk with spreadsheets, with no automated way to flag late payments or measure portfolio-at-risk.",
      solution:
        "A Laravel platform covering the loan lifecycle end to end — request to payoff — with automatic amortization schedules, PAR-30/60/90 risk calculation, multi-role dashboards, and a multi-step approval workflow.",
      highlights: [
        "Automatic amortization schedule generation (linear and declining balance)",
        "PAR-30/60/90 portfolio-at-risk calculation with automatic late-payment detection",
        "Three-role access model (Admin / Agent / Member) with a multi-step approval workflow",
        "Real-time dashboards per role",
      ],
    },

    "habit-tracker": {
      category: "Mobile",
      tagline: "Cross-platform habit tracker with real-time sync and optimistic UI",
      problem:
        "Habit trackers that only update after a round-trip to the server feel sluggish, and most don't sync instantly across devices.",
      solution:
        "A React Native / Expo app backed by Appwrite: creating, completing, or deleting a habit updates the UI instantly and rolls back gracefully if the request fails, with WebSocket-driven real-time sync across devices and streak/leaderboard tracking.",
      highlights: [
        "Optimistic UI updates with graceful rollback on failure",
        "Real-time sync across devices via Appwrite WebSockets",
        "Streak and leaderboard calculation",
        "Gesture-driven swipe-to-complete / swipe-to-delete",
      ],
    },

    "react-chatbot": {
      category: "AI / Frontend",
      tagline: "Multi-LLM chat client with real-time streaming",
      problem: "Comparing how different LLMs respond to the same prompt usually means juggling separate playgrounds for each provider.",
      solution:
        "A React + Vite chat client that switches between Gemini, GPT-4o, Claude, DeepSeek and Grok in the same interface, with streaming responses, multi-conversation management, and markdown rendering. Client-side only for now — API keys aren't proxied through a backend, so it's an experimentation surface rather than a production deployment.",
      highlights: [
        "Switches between 5 providers (Gemini, OpenAI, Anthropic, DeepSeek, xAI) in one UI",
        "Real-time streaming responses",
        "Multi-conversation sidebar with auto-generated titles",
      ],
    },

    "laravel-product-crud": {
      category: "Backend",
      tagline: "Full CRUD for a product catalog with Laravel 12 and Eloquent",
    },

    "jee-to-spring-boot": {
      category: "Backend",
      tagline: "The same reservation system rebuilt across JEE/EJB, Spring MVC, and Spring Boot + React",
    },

    "spring-thymeleaf-crud": {
      category: "Backend",
      tagline: "Product management CRUD with Spring Boot, Spring MVC, Thymeleaf and MySQL",
    },

    "django-auth": {
      category: "Backend",
      tagline: "Custom registration, login, and protected-route flow on Django's auth system",
    },

    reservio: {
      category: "Full-Stack",
      tagline: "Meeting-room booking system with conflict detection",
    },

    meteoworld: {
      category: "Mobile",
      tagline: "Flutter weather app with live data for 5 cities and an animated loading sequence",
    },

    movieflix: {
      category: "Mobile",
      tagline: "Expo movie-discovery app on the TMDB API — home feed is live, search/saved/profile are scaffolded",
    },

    fraudlens: {
      category: "Machine Learning / Data",
      tagline:
        "Educational project: credit-card fraud detection under extreme class imbalance, with leak-free evaluation, threshold and cost analysis, and probability calibration.",
      highlights: [
        "Compares Logistic Regression, Random Forest and XGBoost with no rebalancing, class weights and SMOTE on shared stratified folds; SMOTE sits inside the pipeline so it only touches training rows",
        "Test set kept sealed until the model, strategy and thresholds are fixed; selection by Average Precision rather than accuracy",
        "Threshold and hypothetical cost analysis, calibration study and a temporal stress test",
        "Streamlit app with validated CSV scoring; 152 tests on synthetic data",
      ],
    },

    churnlens: {
      category: "Machine Learning / Data",
      tagline:
        "Educational project: reproducible customer-churn workflow with a nine-section Streamlit app, a FastAPI scoring service and an assumption-driven retention simulator.",
      highlights: [
        "Five classifiers compared on shared stratified folds; threshold chosen on out-of-fold predictions, never on the held-out test set",
        "Error analysis and model explanations, described as associations rather than causes",
        "Retention simulator that treats campaign success rate and costs as user-supplied assumptions, not predictions",
        "FastAPI endpoints for single and batch scoring that share the saved model with the app",
      ],
    },
  },
};
