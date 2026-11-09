import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { skills, skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="bg-ink py-28 text-ink-foreground" aria-label="Skills">
      <Container>
        <SectionHeader tag={skills.tag} title={skills.title} gradient="" subtitle={skills.subtitle} tone="dark" />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-ink-border bg-ink-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">{category.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink-border bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-foreground"
                    >
                      <item.icon size={13} aria-hidden="true" /> {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
