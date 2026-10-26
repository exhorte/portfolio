import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contact, socials } from "@/lib/data";

export function Contact() {
  const email = socials.find((s) => s.label === "Email");

  return (
    <section id="contact" className="bg-ink py-28 text-ink-foreground" aria-label="Contact">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            {contact.tag}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{contact.heading}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">{contact.text}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {email && (
              <a
                href={email.href}
                className="inline-flex items-center gap-2 rounded-full bg-ink-foreground px-7 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-80"
              >
                {contact.cta} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full border border-ink-border bg-ink-card px-4 py-2.5 text-sm transition-colors hover:bg-white/10"
              >
                <s.icon size={15} aria-hidden="true" />
                <span className="font-medium">{s.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
