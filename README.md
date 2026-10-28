# Portfolio — Exhorte Mboumba

> **Software Engineer · AI Engineer** — Dakar, Sénégal
> Site : [exhorte.dev](https://exhorte.dev)

Portfolio construit avec **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui (Base UI) + Framer Motion**, dans un style monochrome noir/blanc/gris.

L'ancien site statique (HTML/CSS/JS) reste disponible dans [`legacy-static/`](legacy-static/) à titre de référence.

## Structure

```
src/
  app/
    page.tsx               # page d'accueil (Hero, About, Skills, Projects, Contact)
    projects/[slug]/       # pages détail projet (gabarit commun)
    layout.tsx             # métadonnées SEO, JSON-LD, polices
    globals.css            # design tokens (couleurs, thème)
    sitemap.ts · robots.ts
  components/
    layout/                # Navbar (+ menu mobile), Footer, ScrollProgress, BackToTop
    sections/              # Hero, LogoStrip, About, Skills, Projects, Contact
    ui/                    # composants shadcn/ui + SectionHeader, Container, Reveal, StatusBadge…
  lib/
    data.ts                # contenu : navigation, liens, Hero, About, compétences, contact, footer
    projects.ts            # tous les projets, statuts, projets mis en avant et secondaires
    hooks/                 # useTypewriter, useScrollSpy
public/
  assets/                  # photo (le CV PDF est retiré tant qu'il n'est pas à jour)
docs/
  PORTFOLIO_AUDIT.md       # audit, décisions et checklist
```

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint
npm run build    # build de production
```

## Modifier le contenu

- **Textes du Hero, About, compétences, contact, footer** → `src/lib/data.ts`
- **Projets** → `src/lib/projects.ts`
  - `featuredSlugs` : les quatre projets de la page d'accueil, dans l'ordre d'affichage.
  - `secondarySlugs` : la liste « More projects ».
  - Un projet avec `hasDetailPage: true` obtient une page `/projects/<slug>` (problème, solution, contribution, fonctionnalités, architecture, décisions, validation, limites).
- **Statuts autorisés** : *In Development*, *Working Prototype*, *Available Demo*, *Completed Project*, *Experimental*.
- **CV** → le bouton « Download CV » est masqué tant que `nav.cvUrl` est vide (`src/lib/data.ts`). Pour le réactiver : placer le CV à jour dans `public/` et renseigner `nav.cvUrl` (ex. `"/cv-exhorte-mboumba.pdf"`).

### Règles de contenu

- N'afficher que des liens vérifiés (dépôt, démo, site) ; omettre une action plutôt que de pointer vers une page cassée.
- Ne décrire comme réalisé que ce qui est implémenté ; ce qui est prévu va dans les limites du projet.
- Pas de chiffres sans source (utilisateurs, performances, résultats).

## Déploiement

Le site est hébergé chez Hostinger (Node.js 20, application Next.js), déployé par archive zip. Une fusion sur GitHub ne met donc pas le site en ligne : il faut refaire un déploiement.
