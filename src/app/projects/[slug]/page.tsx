import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import { projects, getProjectBySlug, getNextProjects } from "@/lib/projects";

const siteUrl = "https://exhorte.dev";

export function generateStaticParams() {
  return projects.filter((p) => p.hasDetailPage).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} — Exhorte Mboumba`;
  const description = project.tagline;
  const path = `/projects/${project.slug}`;
  // Metadata is merged shallowly: set the canonical per page and carry over the shared image.
  const images = (await parent).openGraph?.images ?? [];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, type: "article", url: `${siteUrl}${path}`, siteName: "Exhorte Mboumba", images },
    twitter: { card: "summary", title, description },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project || !project.hasDetailPage) notFound();

  const linkPrimary =
    "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-80";
  const linkSecondary =
    "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground";
  const more = getNextProjects(project.slug, 2);

  return (
    <article className="bg-background py-32">
      <Container className="max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Back to projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.stack.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary" className="font-mono text-[11px]">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>

        {(project.github || project.demo || project.website) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkPrimary}>
                <FaGithub size={15} aria-hidden="true" /> Source code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkSecondary}>
                <ArrowUpRight size={15} aria-hidden="true" /> Live demo
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" className={linkSecondary}>
                <ArrowUpRight size={15} aria-hidden="true" /> Website
              </a>
            )}
          </div>
        )}

        {project.problem && (
          <Section title="Problem">
            <p className="text-lg leading-relaxed text-foreground">{project.problem}</p>
          </Section>
        )}

        {project.solution && (
          <Section title="Solution">
            <p className="text-lg leading-relaxed text-foreground">{project.solution}</p>
          </Section>
        )}

        {project.contribution && (
          <Section title="My contribution">
            <p className="text-lg leading-relaxed text-foreground">{project.contribution}</p>
          </Section>
        )}

        {project.highlights && (
          <Section title="Key features">
            <BulletList items={project.highlights} />
          </Section>
        )}

        {project.architecture && (
          <Section title="Architecture">
            <div className="mt-2">
              <ArchitectureFlow steps={project.architecture} />
            </div>
          </Section>
        )}

        {project.decisions && (
          <Section title="Engineering decisions">
            <BulletList items={project.decisions} />
          </Section>
        )}

        {project.validation && (
          <Section title="Validation and tests">
            <BulletList items={project.validation} />
          </Section>
        )}

        {project.limitations && (
          <Section title="Status and limitations">
            <BulletList items={project.limitations} />
          </Section>
        )}

        {more.length > 0 && (
          <Section title="More projects">
            <ul className="grid gap-4 sm:grid-cols-2">
              {more.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/projects/${other.slug}`}
                    className="flex h-full flex-col gap-2 rounded-xl border border-border p-5 transition-colors hover:border-foreground"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-semibold text-foreground">{other.title}</span>
                      <ArrowRight size={14} className="shrink-0 text-muted-foreground" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{other.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </Container>
    </article>
  );
}
