import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/card";
import { about } from "@/lib/data";

export function About() {
  const [lead, ...rest] = about.paragraphs;

  return (
    <section id="about" className="bg-background py-28" aria-label="About">
      <Container>
        <SectionHeader tag="Who I am" title="About" gradient="" />

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <Reveal direction="right">
            <p className="text-xl leading-relaxed text-foreground">{lead}</p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>{about.interests}</p>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">How I work</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {about.principles.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <Card className="p-8">
              <h3 className="font-semibold text-foreground">{about.areasTitle}</h3>
              <ul className="mt-6 space-y-6">
                {about.areas.map((area) => (
                  <li key={area.title}>
                    <strong className="block text-sm font-semibold text-foreground">{area.title}</strong>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{area.desc}</span>
                    <span className="mt-1 block font-mono text-xs text-muted-foreground">{area.examples}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
