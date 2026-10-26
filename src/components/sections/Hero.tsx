"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Rocket } from "lucide-react";
import { hero, nav, socials } from "@/lib/data";
import { useTypewriter } from "@/lib/hooks/useTypewriter";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const typed = useTypewriter(hero.titles);

  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-36 pb-20" aria-label="Introduction">
      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-highlight" />
            {hero.badge}
          </div>

          <p className="mt-8 font-mono text-sm text-muted-foreground">{hero.greeting}</p>

          <h1 className="mt-3 text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[5.25rem]">
            {hero.firstName}
            <br />
            {hero.lastName}
          </h1>

          {/* The animated line is decorative; the full title is exposed once to assistive technology. */}
          <p className="sr-only">{hero.title}</p>
          <div
            className="mt-6 flex h-10 items-center font-mono text-lg text-muted-foreground sm:text-xl"
            aria-hidden="true"
          >
            <span className="text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-foreground" />
          </div>

          <p className="mt-6 max-w-xl text-xl font-medium leading-snug text-foreground">{hero.headline}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{hero.summary}</p>

          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} aria-hidden="true" />
            {hero.location}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              <Rocket size={16} aria-hidden="true" /> Explore my work
            </a>
            <a
              href={nav.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail size={16} aria-hidden="true" /> Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted sm:aspect-square lg:aspect-[4/5]">
            <Image
              src="/assets/photo_exhorte.jpg"
              alt={`${hero.firstName} ${hero.lastName}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
            <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2">
              {hero.floatCards.map((card) => (
                <span
                  key={card.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                >
                  <card.icon size={13} /> {card.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
