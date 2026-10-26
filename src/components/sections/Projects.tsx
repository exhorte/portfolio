"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { featuredProjects, secondaryProjects, type Project } from "@/lib/projects";

const GITHUB_URL = "https://github.com/exhorte";

const primaryLink =
  "inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:opacity-80";
const secondaryLink =
  "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground hover:border-foreground";

function ExternalLinks({ project }: { project: Project }) {
  return (
    <>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={secondaryLink}>
          <FaGithub size={14} aria-hidden="true" /> Source code
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={secondaryLink}>
          <ArrowUpRight size={13} aria-hidden="true" /> Live demo
        </a>
      )}
      {project.website && (
        <a href={project.website} target="_blank" rel="noopener noreferrer" className={secondaryLink}>
          <ArrowUpRight size={13} aria-hidden="true" /> Website
        </a>
      )}
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-background py-28" aria-label="Projects">
      <Container>
        <SectionHeader
          tag="Selected work"
          title="Featured"
          gradient="Projects"
          subtitle="Four projects that show how I work, from AI systems to full-stack and desktop applications. Each one states its status and limits."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            >
              <Card className="h-full p-0">
                <div className="flex items-center justify-between gap-3 p-7 pb-0">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    {project.hasDetailPage && (
                      <Link href={`/projects/${project.slug}`} className={primaryLink}>
                        View project <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    )}
                    <ExternalLinks project={project} />
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">More projects</h3>
          <Card className="mt-6 gap-0 p-0">
            <ul className="divide-y divide-border">
              {secondaryProjects.map((project) => (
                <li
                  key={project.slug}
                  className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-base font-semibold text-foreground">{project.title}</h4>
                      <StatusBadge status={project.status} />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
                    <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                      {project.stack.slice(0, 4).join(" · ")}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    {project.hasDetailPage && (
                      <Link href={`/projects/${project.slug}`} className={secondaryLink}>
                        Details <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    )}
                    <ExternalLinks project={project} />
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <FaGithub size={16} aria-hidden="true" /> See all projects on GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
