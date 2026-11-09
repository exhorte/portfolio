# Audit et plan d'implémentation du portfolio

_Audit réalisé le 2026-10-25 sur la branche `portfolio/professional-content`. Les affirmations sur les projets ont été vérifiées dans le code et les README des dépôts GitHub correspondants, pas dans le texte du site._

## 1. Architecture actuelle

- Next.js 16.3 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, composants shadcn/ui (Base UI), Framer Motion.
- Page d'accueil unique (`src/app/page.tsx`) composée de sections, plus une route dynamique `/projects/[slug]` générée statiquement.
- Déploiement Hostinger par archive zip (Node 20) ; aucun pipeline Git → production.
- `legacy-static/` : ancien site HTML archivé, non servi.

## 2. Sources de contenu

| Fichier | Contenu |
|---|---|
| `src/lib/data.ts` | navigation, liens sociaux, Hero, About, compétences, expérience, footer |
| `src/lib/projects.ts` | tous les projets (champs, statuts, projets mis en avant) |
| `src/app/layout.tsx` | métadonnées SEO, JSON-LD |
| `public/cv-exhorte-mboumba.pdf` | CV (daté du 17 août 2026) |

Design tokens (couleurs, polices) : `src/app/globals.css`, `next/font` (Inter, JetBrains Mono). **Ils ne sont pas modifiés.**

## 3. Structure actuelle de la page

Hero → bandeau « Core stack » → About (avec 3 compteurs et carte Education) → Skills → Featured Projects (4) → Currently exploring → Experience → Contact → Footer.

## 4. Problèmes identifiés

**Contenu inexact ou invérifiable**
1. Compteurs « 7+ projets livrés / 3 systèmes en développement / 20+ technologies » : valeurs codées en dur, sans source.
2. AI Software Architect : le site décrit le pipeline complet (4 équipes d'agents, diagrammes UML/C4/ERD) comme réalisé. Le dépôt indique que seuls le runtime de mémoire partagée, le moteur d'orchestration et la première équipe (Business) existent ; les trois autres équipes sont seulement spécifiées. Le canevas collaboratif vient d'une base préexistante, pas du travail propre.
3. Finway : décrit comme « liaison de vrais comptes bancaires » alors que Plaid et Dwolla sont configurés en `sandbox`. La formule « conçus et construits de bout en bout » ne peut pas être justifiée pour ce projet (le CV l'appelle « Horizon »).
4. Tontyn : « 56 endpoints » (chiffre non retrouvé, 67 mappings comptés dont des endpoints de développement), « Email + OTP » (le code actuel utilise téléphone + PIN + code à usage unique), « tests d'intégration » (seul le module assistant est testé).
5. Trading Operating System : le dépôt n'est pas accessible anonymement (privé ou renommé) ; le lien GitHub du site mène probablement à une 404.
6. Formation indiquée « 2023 – 2026 · In progress » et « student » alors que le diplôme est terminé.
7. « Performance-minded », « Mobile-first », « Clean code » : slogans sans preuve.

**Positionnement**
8. Titre « Software Developer / Full-Stack Engineer » incohérent avec le positionnement visé (Software Engineer · AI Engineer) et avec le README GitHub.
9. Les projets vedettes du site (Tontyn, Trading OS, Finway) diffèrent de ceux du profil GitHub (HRagentAssistant, Vozel) : deux profils pour un même recruteur.
10. Compétences dispersées (Laravel, Django, C# au premier plan) ; LangGraph est listé alors qu'aucun dépôt ne l'utilise.

**Technique**
11. Les pages projet héritent du canonical `/` défini dans le layout (conflit SEO).
12. Aucune image Open Graph ; `twitter:card = summary` sans image.
13. Le texte animé du Hero est lu lettre par lettre par les lecteurs d'écran.
14. Le CV est valide mais en retard : titre « Full-Stack Developer », ni HRagentAssistant ni Vozel.
15. README du dépôt obsolète (« Junior Full-Stack Developer », Next.js 14, composants inexistants).

Lint et build : **passent** avant modification (`npm run lint` → 0, `npm run build` → 0).

## 5. Changements recommandés (checklist)

**Contenu**
- [x] Hero : titre, accroche, paragraphe, disponibilité, 3 actions (Explore My Work, Download CV, Get in Touch).
- [x] About : texte réécrit, diplôme terminé mentionné en une ligne, compteurs et carte Education supprimés.
- [x] Compétences regroupées en 4 catégories, limitées aux technologies réellement utilisées.
- [x] Contact : texte concis, lien ExponentValue ajouté.
- [x] Footer et métadonnées alignés sur le nouveau positionnement.

**Structure**
- [x] Projets vedettes : AI Software Architect, HRagentAssistant, Tontyn, Vozel (ordre du brief conservé).
- [x] Liste secondaire compacte : Fryle, medicalAgent, Fluent, Finway.
- [x] Statuts alignés sur les libellés du brief.
- [x] Sections « Currently exploring » et « Experience » retirées (annotations du PDF), lien de navigation retiré.

**Pages projet**
- [x] Gabarit commun : problème, solution, contribution, fonctionnalités, architecture, décisions, validation, limites, liens, navigation vers les autres projets.
- [x] Pages créées pour HRagentAssistant, Tontyn, Vozel ; pages existantes conservées (`ai-software-architect`, `fluent`, `trading-operating-system`).

**Technique**
- [x] Canonical et métadonnées propres à chaque page projet.
- [x] Image Open Graph (photo existante), JSON-LD mis à jour.
- [x] Texte animé masqué aux lecteurs d'écran, titre complet exposé.
- [x] README du dépôt mis à jour.

**Optionnel (non fait ici)**
- Mettre à jour le CV PDF, captures d'écran des projets, README de Vozel.

## 6. Fichiers à modifier

`src/lib/data.ts`, `src/lib/projects.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/projects/[slug]/page.tsx`, `src/components/sections/{Hero,About,Skills,Projects,Contact}.tsx`, `src/components/layout/Navbar.tsx` (via `nav`), `src/components/ui/StatusBadge.tsx`, `README.md`. Suppressions : `CurrentlyExploring.tsx`, `Experience.tsx`, `StatCounter.tsx`, `useCountUp.ts`.

## 7. Risques et dépendances

- Les annotations du PDF (Experience et Education barrées) prévalent sur le brief écrit ; les données supprimées restent dans l'historique Git.
- Liens non vérifiables depuis cet environnement : `vozelwebsite.vercel.app`, `exponentvalue.com`, API Tontyn sur Render.
- Le dépôt `trading-operating-system` semble privé : sa page projet est conservée, sans lien GitHub.
- Aucune nouvelle dépendance n'est ajoutée.
- Le site se déploie par zip : une fusion sur GitHub ne met pas le site en ligne.

## 8. Stratégie de validation

`npm run lint`, `npm run build`, contrôle du HTML généré (titres, canonical, Open Graph, JSON-LD), rendu desktop et mobile dans un navigateur, recherche de liens internes cassés et de débordements. Aucun test automatisé n'existe dans le dépôt.
