import type { Dictionary } from "../types";

// Les formulations évitent volontairement les accords de genre à la première personne
// (« Disponible pour… », « Ingénierie logicielle » plutôt que « ingénieur / ingénieure »).
export const fr: Dictionary = {
  meta: {
    siteName: "Exhorte Mboumba",
    title: "Exhorte Mboumba — Ingénierie logicielle | Ingénierie IA",
    description:
      "Portfolio d’Exhorte Mboumba — ingénierie logicielle et ingénierie IA\u00a0: applications full-stack, systèmes backend, outils propulsés par l’IA et workflows automatisés.",
    keywords: [
      "Exhorte Mboumba",
      "Software Engineer",
      "AI Engineer",
      "Ingénierie logicielle",
      "Ingénierie IA",
      "Développement full-stack",
      "Architecture logicielle",
      "RAG",
      "Agents IA",
      "Spring Boot",
      "Next.js",
      "Portfolio",
      "Dakar",
      "Sénégal",
    ],
    jobTitle: "Software Engineer",
  },

  nav: {
    links: { about: "À propos", skills: "Compétences", projects: "Projets", contact: "Contact" },
    menu: "Menu",
    close: "Fermer",
    downloadCv: "Télécharger le CV",
    language: "Langue",
    backToTop: "Retour en haut de la page",
    backToTopTitle: "Retour en haut",
  },

  hero: {
    sectionLabel: "Introduction",
    badge: "Disponible pour des opportunités en génie logiciel et en ingénierie IA",
    greeting: "Bonjour, je suis",
    title: "Ingénierie logicielle · Ingénierie IA",
    titles: ["Ingénierie logicielle · Ingénierie IA", "Systèmes intelligents et automatisation"],
    headline: "Je conçois des logiciels et des systèmes intelligents qui résolvent de vrais problèmes.",
    summary:
      "Je conçois et développe des applications full-stack, des systèmes backend, des outils propulsés par l’IA et des workflows automatisés. Mon objectif\u00a0: transformer des besoins complexes en logiciels pratiques, fiables et maintenables.",
    location: "À Dakar, au Sénégal",
    exploreWork: "Découvrir mes projets",
    getInTouch: "Me contacter",
  },

  labels: {
    "AI Agents": "Agents IA",
    "REST APIs": "API REST",
    "Software Architecture": "Architecture logicielle",
    "Testing (JUnit, pytest, Vitest)": "Tests (JUnit, pytest, Vitest)",
    "LLM Integration": "Intégration de LLM",
    "Retrieval-Augmented Generation": "Génération augmentée par récupération (RAG)",
    "AI Agent Orchestration": "Orchestration d’agents IA",
    "Structured Outputs & Validation": "Sorties structurées et validation",
    "Machine Learning (scikit-learn, XGBoost)": "Machine learning (scikit-learn, XGBoost)",
    "Document Processing": "Traitement de documents",
  },

  logoStrip: { label: "Stack principale" },

  about: {
    tag: "Qui je suis",
    title: "À propos",
    paragraphs: [
      "Je conçois et développe des produits logiciels concrets et des systèmes intelligents.",
      "Mon travail couvre le développement full-stack, l’ingénierie backend, l’architecture logicielle et les applications propulsées par l’IA. J’aime résoudre des problèmes qui demandent plus qu’une interface\u00a0: concevoir des API fiables, structurer les données, intégrer des capacités d’IA, automatiser des workflows et faire en sorte que chaque composant fonctionne avec les autres comme un système cohérent.",
      "J’aborde l’ingénierie en privilégiant une architecture claire, la maintenabilité, la sécurité et les tests. Qu’il s’agisse d’une plateforme multi-agents, d’un assistant IA appuyé sur des documents ou d’une application multiplateforme, mon objectif reste le même\u00a0: livrer un logiciel qui répond à un besoin réel et qui peut évoluer au-delà de sa première version.",
    ],
    interests:
      "Mes centres d’intérêt actuels comprennent l’orchestration d’agents IA, la génération augmentée par récupération (RAG), les applications à forte intensité de connaissances et l’automatisation intelligente des processus métier.",
    principlesTitle: "Ma façon de travailler",
    principles: ["Architecture claire", "Maintenabilité", "Sécurité", "Tests"],
    areasTitle: "Domaines d’intervention",
    areas: [
      {
        title: "Full-stack et backend",
        desc: "Applications Spring Boot et Next.js avec API REST, authentification et données relationnelles.",
        examples: "Tontyn, Fryle",
      },
      {
        title: "IA appliquée",
        desc: "RAG appuyé sur des documents avec sources citées, et orchestration multi-agents à l’état validé par schéma.",
        examples: "HRagentAssistant, AI Software Architect",
      },
      {
        title: "Bureau et inférence locale",
        desc: "Une application de dictée Windows en Rust et Tauri, avec reconnaissance vocale sur l’appareil.",
        examples: "Vozel",
      },
    ],
  },

  skills: {
    tag: "Boîte à outils",
    title: "Compétences",
    subtitle: "Technologies que j’ai utilisées dans les projets ci-dessous, regroupées par domaine.",
    categories: {
      software: "Génie logiciel",
      ai: "Ingénierie IA",
      application: "Développement d’applications",
      data: "Données et infrastructure",
    },
  },

  projects: {
    tag: "Travaux sélectionnés",
    title: "Projets",
    gradient: "en vedette",
    subtitle:
      "Quatre projets qui montrent ma façon de travailler, des systèmes d’IA aux applications full-stack et de bureau. Chacun indique ses limites.",
    moreTitle: "Autres projets",
    viewProject: "Voir le projet",
    details: "Détails",
    sourceCode: "Code source",
    liveDemo: "Démo en ligne",
    website: "Site web",
    seeAllOnGithub: "Voir tous les projets sur GitHub",
  },

  projectPage: {
    back: "Retour aux projets",
    stackLabel: "Stack technique",
    sections: {
      problem: "Problème",
      solution: "Solution",
      contribution: "Ma contribution",
      highlights: "Fonctionnalités clés",
      architecture: "Architecture",
      decisions: "Décisions d’ingénierie",
      validation: "Validation et tests",
      limitations: "Limites",
      more: "Autres projets",
    },
  },

  contact: {
    tag: "Restons en contact",
    heading: "Un projet, un produit ou un défi technique en tête\u00a0?",
    text: "Disponible pour des opportunités pertinentes en génie logiciel et en ingénierie IA, des collaborations techniques et une sélection de missions freelance.",
    cta: "Envoyez-moi un e-mail",
  },

  notFound: {
    title: "Page introuvable",
    text: "La page que vous cherchez n’existe pas ou a été déplacée.",
    back: "Retour à l’accueil",
  },

  footer: {
    tagline: "Des logiciels et des systèmes intelligents qui résolvent de vrais problèmes.",
    role: "Ingénierie logicielle · Ingénierie IA · Dakar, Sénégal",
    siteTitle: "Site",
    contactTitle: "Contact",
  },

  projectTexts: {
    "ai-software-architect": {
      category: "IA / Multi-agents",
      tagline: "Plateforme multi-agents conçue pour transformer une idée de produit en livrables d’ingénierie structurés.",
      problem:
        "Transformer une idée de produit exprimée en langage courant en exigences, en architecture et en backlog est lent et irrégulier, et il est difficile de relier une user story au composant qui l’implémente.",
      solution:
        "Un Coordinateur est conçu pour répartir le travail entre quatre équipes d’agents spécialisées — Business, Architecture, Ingénierie et Documentation — qui n’échangent que du JSON validé par schéma via une mémoire partagée, de sorte que chaque artefact reste traçable jusqu’à l’exigence d’origine. Le moteur d’orchestration et la première équipe (Business, avec une étape de clarification humaine) sont implémentés\u00a0; les trois autres équipes sont spécifiées mais pas encore développées.",
      contribution:
        "Projet personnel. Le travail couvre la spécification du système d’agents (workflow du coordinateur, 18 contrats d’agents, schémas JSON), le runtime de mémoire partagée, le moteur d’orchestration et le pipeline de l’équipe Business avec son interface. Le canevas collaboratif, l’authentification et la gestion de projets proviennent d’une base existante sur laquelle la plateforme est construite.",
      highlights: [
        "Mémoire partagée validée avec JSON Schema (Ajv)\u00a0: les mises à jour sont vérifiées sur une copie de travail puis validées de façon atomique",
        "Moteur d’orchestration derrière les ports AgentInvoker et RunRecorder\u00a0; les tâches Trigger.dev n’en sont que de fines enveloppes",
        "Pipeline de l’équipe Business avec une étape de clarification humaine\u00a0: l’exécution se suspend sur un waitpoint Trigger.dev, reprend quand l’utilisateur répond, et les questions sans réponse deviennent des hypothèses enregistrées",
        "Vérifications de cohérence entre les artefacts générés\u00a0; un appel LLM en échec bloque sa propre section au lieu d’interrompre toute l’exécution",
        "Onglets Pipeline et visualiseur de Mémoire mis à jour en direct via les événements Liveblocks",
        "Fournisseur LLM sélectionnable (Gemini par défaut, DeepSeek) avec des indicateurs de capacités par modèle",
      ],
      architecture: [
        "API d’exécution (POST /api/ai/run)",
        "Moteur d’orchestration et planificateur",
        "Agents de l’équipe Business (Trigger.dev)",
        "Mémoire partagée validée par schéma",
        "Vérifications de cohérence",
        "Événements temps réel vers les onglets Pipeline et Mémoire",
      ],
      decisions: [
        "Les fichiers de définition des agents sont la source de vérité des prompts d’exécution\u00a0: les documents de conception et le comportement à l’exécution ne peuvent donc pas diverger.",
        "Les agents n’échangent que du JSON validé par schéma, jamais de discussion libre.",
        "La logique du moteur vit dans de simples modules TypeScript derrière des ports, ce qui permet de la tester unitairement sans l’exécuteur de tâches.",
      ],
      validation: [
        "Tests unitaires Vitest pour la couche mémoire, le moteur d’orchestration, le planificateur, les règles de cohérence, les routes d’API et la diffusion temps réel.",
        "Un vrai cycle suspension, réponse et reprise a été exécuté sur Trigger.dev cloud.",
      ],
      limitations: [
        "Seule l’équipe Business est implémentée\u00a0; les équipes Architecture, Ingénierie et Documentation sont spécifiées mais pas développées.",
        "Pas de démo publique\u00a0: le déploiement hébergé nécessite la configuration de ses services externes (authentification, canevas, exécuteur de tâches, stockage, LLM).",
        "L’agent de conception qui génère les diagrammes produit des nœuds mais pas encore d’arêtes (problème connu et documenté).",
      ],
    },

    "hr-agent-assistant": {
      category: "IA appliquée / RAG",
      tagline:
        "Assistant RH qui répond à partir des documents de l’entreprise, cite ses sources et s’abstient lorsque les éléments sont insuffisants.",
      problem:
        "Les employés posent sans cesse aux RH les mêmes questions sur les règles internes, alors qu’un chatbot générique peut inventer des réponses, ignorer les versions des documents ou exposer des documents à accès restreint.",
      solution:
        "Un assistant appuyé sur les documents\u00a0: il récupère des passages dans les documents RH réellement chargés, répond avec des citations vérifiées, s’abstient lorsque les éléments ne suffisent pas, signale les conflits entre versions de documents et applique dans le backend un accès aux documents selon les rôles. Il guide aussi une demande de congé (récapitulatif, confirmation explicite, décision RH) et permet à un employé de transmettre aux RH une question restée sans réponse.",
      contribution:
        "Projet personnel construit comme prototype local sur des données synthétiques\u00a0: pipeline de récupération, garde-fous, modèle d’autorisation, workflows, interface Streamlit, suite de tests et documentation (architecture, sécurité, feuille de route).",
      highlights: [
        "Les réponses portent des citations vérifiées par rapport aux passages récupérés\u00a0; l’assistant s’abstient plutôt que de deviner",
        "Détecte les versions actives contradictoires d’un même document et signale le conflit",
        "Accès selon les rôles (employé, responsable RH) appliqué dans le filtre de récupération et dans le backend, pas dans le prompt",
        "Le contenu des documents est traité comme non fiable\u00a0: les tentatives d’injection de prompt sont neutralisées",
        "Fonctionne entièrement hors ligne par défaut (réponses extractives, embeddings locaux, Qdrant embarqué)\u00a0; un LLM et des embeddings sémantiques sont optionnels",
        "Workflow de demande de congé avec confirmation explicite et validation RH, et escalade des questions vers les RH (aucune notification n’est envoyée)",
      ],
      architecture: [
        "Interface Streamlit",
        "Pipeline de l’assistant RH",
        "Authentification et rôles",
        "Moteur de réponse et garde-fous",
        "Index Qdrant avec filtre d’accès",
        "SQLite (utilisateurs, documents, demandes)",
      ],
      decisions: [
        "S’abstenir plutôt que répondre\u00a0: un filtre de couverture lexicale refuse les questions que les documents ne couvrent pas.",
        "Le contrôle d’accès s’applique au moment de la récupération via un filtre Qdrant\u00a0: les passages restreints ne sont donc jamais récupérés pour un mauvais rôle.",
        "Aucun texte de document ni aucune question n’est écrit dans les logs\u00a0; toutes les données restent en local dans data/runtime.",
      ],
      validation: [
        "Suite pytest hors ligne répartie en tests unitaires, d’intégration et de sécurité (contrôle d’accès, injection de prompt et fuite de données, autorisation des workflows).",
        "Deux petits jeux d’évaluation métier (36 et 15 cas). Le dépôt précise lui-même que ces résultats ne mesurent pas la qualité, le corpus étant synthétique.",
      ],
      limitations: [
        "Prototype sur données synthétiques uniquement\u00a0: inadapté à des données RH réelles tant que les points listés dans docs/SECURITY.md ne sont pas traités.",
        "Le filtre d’abstention est lexical\u00a0: les paraphrases éloignées (par exemple «\u00a0travail à distance\u00a0» pour «\u00a0télétravail\u00a0») sont donc refusées — c’est sûr, mais parfois peu utile. Le rendre sémantique est le premier point de la feuille de route.",
        "Pas de SSO, de notifications, d’OCR pour les PDF numérisés ni d’intégration du solde de congés\u00a0; l’authentification est uniquement locale.",
      ],
    },

    tontyn: {
      category: "Full-stack / Mobile",
      tagline: "Plateforme web et mobile sécurisée pour gérer les cercles d’épargne communautaires (tontines).",
      problem:
        "Les cercles d’épargne communautaires (tontines) sont souvent gérés sur papier ou dans des fils de messagerie, sans registre partagé indiquant qui a cotisé, à qui est le tour ou qui est en retard.",
      solution:
        "Une plateforme en trois couches (application web React, application mobile Flutter, API Spring Boot, PostgreSQL) couvrant tout le cycle de vie d’une tontine\u00a0: groupes et membres, cycles de cotisation et bénéficiaires, paiements enregistrés avec reçus automatiques, rappels programmés, un score de fiabilité de paiement par membre, et un assistant qui répond aux questions des membres.",
      contribution: "Couvre l’API Spring Boot, l’interface web React et l’application mobile Flutter.",
      highlights: [
        "API REST couvrant l’authentification, les tontines, les membres, les cycles, les cotisations, les paiements, les reçus et les notifications",
        "Connexion par code PIN avec un second facteur à code à usage unique, sessions JWT, identifiants hachés et rôles par tontine (gestionnaire, membre)",
        "Niveaux de vérification d’identité progressifs",
        "Tâche planifiée quotidienne qui relance les cotisations en retard",
        "Score de fiabilité de paiement par membre et reçus automatiques",
        "Assistant IA (API DeepSeek) qui répond aux questions des membres, avec un mode dégradé lorsque le fournisseur est indisponible",
      ],
      architecture: [
        "Clients web React et mobile Flutter",
        "API REST Spring Boot (JWT)",
        "Services\u00a0: cycles, paiements, rappels, assistant",
        "PostgreSQL",
      ],
      decisions: [
        "Séparation en trois couches, avec une seule API partagée par les clients web et mobile.",
        "Sécurité par méthode Spring avec des contrôles d’autorisation au niveau du groupe dans la couche service.",
        "Image Docker pour l’API et Docker Compose pour la base PostgreSQL locale.",
      ],
      validation: [
        "Des tests JUnit couvrent le module de l’assistant IA (logique de service, construction du contexte et un test d’intégration).",
      ],
      limitations: [
        "Les tests automatisés ne couvrent actuellement que le module de l’assistant IA\u00a0; le reste de l’API, l’application web et l’application mobile ne sont pas couverts.",
        "Les paiements sont enregistrés par moyen de paiement (Orange Money, Wave)\u00a0; aucune API de fournisseur de paiement n’est intégrée.",
      ],
    },

    vozel: {
      category: "Bureau / IA locale",
      tagline:
        "Application de dictée Windows qui transcrit sur l’appareil et insère le texte dans l’application que vous utilisez.",
      problem:
        "De nombreux outils de dictée envoient l’audio vers un service cloud ou ne fonctionnent que dans leur propre éditeur, ce qui convient mal aux textes privés et à l’écriture directe dans d’autres applications.",
      solution:
        "Maintenez Ctrl+Win pour dicter\u00a0: l’audio est capturé et transcrit localement par un modèle vocal Parakeet-TDT exécuté sur ONNX Runtime, éventuellement nettoyé par un petit modèle de langage sur l’appareil, puis inséré dans l’application active. La transcription cloud (Groq, OpenAI ou Deepgram) est une option à activer explicitement.",
      contribution:
        "Produit personnel développé sous ExponentValue\u00a0: le backend Rust (capture audio, reconnaissance vocale, insertion de texte, stockage), l’interface React et les décisions de conception documentées dans le dépôt.",
      highlights: [
        "Push-to-talk global (Ctrl+Win) implémenté avec un hook clavier Windows de bas niveau",
        "Reconnaissance vocale locale avec Parakeet-TDT (INT8) sur ONNX Runtime, choisie après un benchmark face à whisper.cpp sur de l’audio en français",
        "Nettoyage de texte optionnel sur l’appareil avec un modèle de langage quantifié (int4) dans le même runtime",
        "Transcription cloud derrière une interface de fournisseur commune (Groq, OpenAI, Deepgram), désactivée par défaut, avec des clés d’API masquées dans les logs",
        "Insertion du texte dans l’application au premier plan, avec repli sur le presse-papiers",
        "Historique de dictée local et dictionnaire personnel stockés dans SQLite",
      ],
      architecture: [
        "Capture du microphone et détection d’activité vocale (Rust)",
        "Reconnaissance vocale locale (Parakeet-TDT, ONNX Runtime)",
        "Transcription cloud optionnelle",
        "Modèle de nettoyage optionnel sur l’appareil",
        "Insertion du texte dans l’application active",
        "SQLite\u00a0: dictionnaire, historique, paramètres",
      ],
      decisions: [
        "Confidentialité par défaut\u00a0: la transcription cloud et le nettoyage par modèle sont des paramètres à activer.",
        "Tout l’accès à la base de données se trouve côté Rust (sqlx)\u00a0; l’interface React appelle des commandes Tauri.",
        "Pour le modèle de nettoyage, llama.cpp a été abandonné au profit d’ONNX Runtime à cause de problèmes de dépendances de compilation, et la quantification int8 a été remplacée par l’int4 après des tests de qualité.",
      ],
      validation: [
        "58 tests Rust couvrent le stockage, l’analyse des réponses des fournisseurs cloud, la logique des combinaisons de touches et le nettoyage de texte\u00a0; 8 d’entre eux nécessitent les fichiers de modèle ou une vraie application cible et sont ignorés par défaut.",
        "La dictée réelle au microphone dans d’autres applications a été validée manuellement.",
      ],
      limitations: [
        "Windows uniquement pour l’instant\u00a0: les adaptateurs d’insertion de texte pour macOS et Linux sont des ébauches.",
        "Le modèle vocal (environ 670 Mo) n’est pas inclus dans le dépôt et doit être installé séparément.",
        "Le modèle de nettoyage sur l’appareil (1,5 milliard de paramètres, int4) donne une qualité de réécriture inégale, ce qui explique pourquoi le nettoyage est optionnel.",
        "L’interface n’a pas encore de tests automatisés. Le code source est public pour consultation, sous une licence tous droits réservés.",
      ],
    },

    fryle: {
      category: "Full-stack / E-commerce",
      tagline: "Boutique d’électronique avec catalogue et commandes stockés dans PostgreSQL, et paiements via Stripe Checkout.",
      problem:
        "Une boutique en ligne a besoin que le catalogue, le stock et les commandes vivent dans sa propre base de données, tandis que le fournisseur de paiement ne gère que le paiement lui-même.",
      solution:
        "Une boutique Next.js où le catalogue, le stock et les commandes vivent dans PostgreSQL et où Stripe Checkout gère le paiement, avec un achat sans compte ou une connexion Google et GitHub optionnelle, et des webhooks Stripe qui confirment les commandes.",
      highlights: [
        "Catalogue, stock et commandes stockés dans PostgreSQL via Prisma",
        "Paiements Stripe Checkout confirmés par webhooks",
        "Achat sans compte ou connexion Google et GitHub optionnelle",
        "Tests d’intégration pour les comptes, le paiement, la confirmation de paiement, les remboursements et la limitation de débit",
      ],
    },

    "medical-agent": {
      category: "IA appliquée / RAG",
      tagline:
        "Assistant RAG qui répond uniquement à partir de PDF médicaux téléversés, avec un backend FastAPI et un client web statique.",
      problem:
        "Les réponses portant sur un ensemble de documents doivent provenir de ces documents, et non des connaissances générales du modèle.",
      solution:
        "Un service FastAPI qui indexe les PDF téléversés dans un index vectoriel Pinecone avec des embeddings Gemini et répond aux questions grâce à un modèle hébergé par Groq, avec en plus un client web statique et un client Streamlit pour le développement local.",
      highlights: [
        "Téléversement de PDF, découpage en segments et indexation dans une base vectorielle",
        "Réponses limitées aux documents téléversés, renvoyées avec leurs sources",
        "Backend FastAPI déployé sur Render et client statique sur Vercel",
      ],
    },

    fluent: {
      category: "Bureau / IA locale",
      tagline: "Dictée en français et réécriture par IA, local d’abord, pour Windows",
      problem:
        "Dicter et nettoyer du texte sous Windows oblige à jongler entre un enregistreur, une application de notes et une édition manuelle — sans garantie de confidentialité dès qu’un outil de dictée cloud entre en jeu.",
      solution:
        "Une application de bureau WPF qui capte la parole via un raccourci clavier global, la transcrit localement avec Whisper, la réécrit selon un profil choisi et l’insère directement dans le champ qui avait le focus — la réécriture cloud (Gemini ou DeepSeek) étant une option à activer explicitement, jamais le comportement par défaut.",
      highlights: [
        "Transcription locale avec Whisper — l’audio ne quitte jamais la machine sauf si la réécriture cloud est explicitement activée",
        "Raccourci global et détection du champ actif pour capter et réinsérer le texte dans l’application que vous utilisiez",
        "Architecture à fournisseurs\u00a0: LocalRewriteProvider ou CloudRewriteProvider (Gemini / DeepSeek), choisi par profil de réécriture",
        "Politique d’insertion qui bloque l’écriture automatique dans les champs de mot de passe",
        "OAuth PKCE appuyé sur Supabase pour la couche cloud optionnelle",
      ],
      architecture: [
        "Capture du microphone",
        "Transcription locale Whisper",
        "Orchestrateur de réécriture (profil + choix du fournisseur)",
        "Fournisseur de réécriture local ou cloud",
        "Insertion sécurisée dans le champ actif",
      ],
      limitations: [
        "La réécriture cloud est optionnelle et indisponible sans backend déployé.",
        "Les vérifications manuelles de la restauration de session, de l’usage hors ligne et de la déconnexion (phase 07B) étaient encore ouvertes lors de la dernière mise à jour du dépôt.",
      ],
    },

    finway: {
      category: "Full-stack / Fintech",
      tagline: "Tableau de bord bancaire construit avec Next.js, Appwrite, Plaid et Dwolla (environnements sandbox).",
      problem:
        "Les finances personnelles sont dispersées entre plusieurs applications bancaires, sans endroit unique pour voir les soldes de tous les établissements ni pour déplacer de l’argent entre eux.",
      solution:
        "Un tableau de bord Next.js (App Router) qui relie des comptes bancaires via Plaid, regroupe soldes et historique des transactions dans une vue unique, et transfère de l’argent entre comptes par ACH via Dwolla. Plaid et Dwolla tournent dans leurs environnements sandbox\u00a0; Appwrite gère l’authentification et la persistance, et les formulaires sont validés avec Zod.",
      highlights: [
        "Liaison de comptes bancaires et historique des transactions via Plaid (sandbox)",
        "Virements ACH entre comptes via Dwolla (sandbox)",
        "Authentification et persistance des données avec Appwrite",
        "Validation avec react-hook-form et Zod sur l’ensemble des formulaires",
      ],
    },

    "trading-operating-system": {
      category: "Systèmes / Fintech",
      tagline:
        "Infrastructure de trading algorithmique modulaire avec analyse ICT/SMC et règles de risque de prop firm",
      problem:
        "La plupart des installations de trading algorithmique pour particuliers codent une stratégie unique en dur directement contre l’API d’un courtier, sans séparation entre génération de signaux, validation du risque et exécution — ce qui rend le système impossible à tester, à étendre ou à raisonner en toute sécurité.",
      solution:
        "Un cockpit et un backend modulaires\u00a0: un moteur ICT/SMC en TypeScript génère les signaux, un moteur de risque dédié les évalue selon des règles de type prop firm avant que quoi que ce soit ne passe, et une passerelle C# traduit les décisions approuvées en protocole MT5 — chaque étape étant documentée par son propre registre de décision d’architecture et couverte par des tests.",
      highlights: [
        "Moteur de génération de signaux ICT/SMC, documenté dans son propre ADR",
        "Moteur de risque autonome appliquant des règles de drawdown et d’exposition de type prop firm",
        "Pont d’exécution traduisant les signaux approuvés en commandes MT5 via une passerelle C#",
        "Persistance TimescaleDB pour les données de marché et la piste d’audit",
        "Interface cockpit\u00a0: signaux, positions, risque, backtests, replay, journal — une vue par sujet",
      ],
      architecture: [
        "Données de marché (observateur MT5)",
        "Moteur de stratégie ICT/SMC",
        "Moteur de risque (règles de prop firm)",
        "Pont d’exécution → passerelle MT5",
        "Persistance TimescaleDB + interface cockpit",
      ],
    },

    finflow: {
      category: "Full-stack / Fintech",
      tagline: "Système de gestion de microfinance pour le cycle de vie des prêts et le suivi du portefeuille",
      problem:
        "Les petites institutions de microfinance gèrent prêts, échéanciers de remboursement et risque de portefeuille avec des tableurs, sans moyen automatisé de signaler les retards de paiement ni de mesurer le portefeuille à risque.",
      solution:
        "Une plateforme Laravel couvrant le cycle de vie du prêt de bout en bout — de la demande au solde — avec des tableaux d’amortissement automatiques, le calcul du risque PAR-30/60/90, des tableaux de bord multi-rôles et un workflow d’approbation en plusieurs étapes.",
      highlights: [
        "Génération automatique du tableau d’amortissement (linéaire et à solde dégressif)",
        "Calcul du portefeuille à risque PAR-30/60/90 avec détection automatique des retards de paiement",
        "Modèle d’accès à trois rôles (Admin / Agent / Membre) avec workflow d’approbation en plusieurs étapes",
        "Tableaux de bord en temps réel par rôle",
      ],
    },

    "habit-tracker": {
      category: "Mobile",
      tagline: "Suivi d’habitudes multiplateforme avec synchronisation en temps réel et interface optimiste",
      problem:
        "Les applications de suivi d’habitudes qui ne se mettent à jour qu’après un aller-retour avec le serveur paraissent lentes, et la plupart ne se synchronisent pas instantanément entre appareils.",
      solution:
        "Une application React Native / Expo adossée à Appwrite\u00a0: créer, valider ou supprimer une habitude met l’interface à jour instantanément et revient proprement en arrière si la requête échoue, avec une synchronisation en temps réel entre appareils via WebSocket et un suivi des séries et du classement.",
      highlights: [
        "Mises à jour optimistes de l’interface avec annulation propre en cas d’échec",
        "Synchronisation en temps réel entre appareils via les WebSockets d’Appwrite",
        "Calcul des séries et du classement",
        "Glisser pour valider ou pour supprimer, piloté par les gestes",
      ],
    },

    "react-chatbot": {
      category: "IA / Frontend",
      tagline: "Client de chat multi-LLM avec streaming en temps réel",
      problem:
        "Comparer la façon dont différents LLM répondent au même prompt oblige généralement à jongler entre des playgrounds distincts pour chaque fournisseur.",
      solution:
        "Un client de chat React + Vite qui permet de passer de Gemini à GPT-4o, Claude, DeepSeek et Grok dans la même interface, avec réponses en streaming, gestion de plusieurs conversations et rendu markdown. Uniquement côté client pour l’instant — les clés d’API ne passent pas par un backend, c’est donc un terrain d’expérimentation plutôt qu’un déploiement de production.",
      highlights: [
        "Bascule entre 5 fournisseurs (Gemini, OpenAI, Anthropic, DeepSeek, xAI) dans une seule interface",
        "Réponses en streaming en temps réel",
        "Barre latérale multi-conversations avec titres générés automatiquement",
      ],
    },

    "laravel-product-crud": {
      category: "Backend",
      tagline: "CRUD complet pour un catalogue de produits avec Laravel 12 et Eloquent",
    },

    "jee-to-spring-boot": {
      category: "Backend",
      tagline: "Le même système de réservation reconstruit successivement en JEE/EJB, Spring MVC, puis Spring Boot + React",
    },

    "spring-thymeleaf-crud": {
      category: "Backend",
      tagline: "CRUD de gestion de produits avec Spring Boot, Spring MVC, Thymeleaf et MySQL",
    },

    "django-auth": {
      category: "Backend",
      tagline:
        "Parcours personnalisé d’inscription, de connexion et de routes protégées sur le système d’authentification de Django",
    },

    reservio: {
      category: "Full-stack",
      tagline: "Système de réservation de salles de réunion avec détection des conflits",
    },

    meteoworld: {
      category: "Mobile",
      tagline: "Application météo Flutter avec données en direct pour 5 villes et une séquence de chargement animée",
    },

    movieflix: {
      category: "Mobile",
      tagline:
        "Application Expo de découverte de films sur l’API TMDB — le fil d’accueil est fonctionnel, la recherche, les favoris et le profil sont en structure de base",
    },

    fraudlens: {
      category: "Machine learning / Data",
      tagline:
        "Projet pédagogique\u00a0: détection de fraude par carte bancaire sous déséquilibre extrême des classes, avec évaluation sans fuite de données, analyse des seuils et des coûts, et calibration des probabilités.",
      highlights: [
        "Compare la régression logistique, la forêt aléatoire et XGBoost sans rééquilibrage, avec pondération des classes et avec SMOTE, sur des plis stratifiés partagés\u00a0; SMOTE est placé dans le pipeline pour ne toucher que les lignes d’entraînement",
        "Jeu de test gardé scellé jusqu’à ce que le modèle, la stratégie et les seuils soient figés\u00a0; sélection selon l’Average Precision plutôt que l’exactitude",
        "Analyse des seuils et des coûts hypothétiques, étude de calibration et test de résistance temporel",
        "Application Streamlit avec scoring de fichiers CSV validés\u00a0; 152 tests sur données synthétiques",
      ],
    },

    churnlens: {
      category: "Machine learning / Data",
      tagline:
        "Projet pédagogique\u00a0: workflow reproductible de prédiction du churn client, avec une application Streamlit en neuf sections, un service de scoring FastAPI et un simulateur de rétention piloté par des hypothèses.",
      highlights: [
        "Cinq classifieurs comparés sur des plis stratifiés partagés\u00a0; seuil choisi sur des prédictions hors pli, jamais sur le jeu de test mis de côté",
        "Analyse des erreurs et explications du modèle, présentées comme des associations plutôt que des causes",
        "Simulateur de rétention qui traite le taux de réussite et les coûts des campagnes comme des hypothèses fournies par l’utilisateur, et non comme des prédictions",
        "Endpoints FastAPI de scoring unitaire et par lots qui partagent le modèle sauvegardé avec l’application",
      ],
    },
  },
};
