import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/lib/data";
import { getDictionary } from "@/lib/i18n";
import { translateLabel, type Locale } from "@/lib/i18n/config";

export function Skills({ locale }: { locale: Locale }) {
  const { skills, labels } = getDictionary(locale);

  return (
    <section id="skills" className="bg-ink py-28 text-ink-foreground" aria-label={skills.title}>
      <Container>
        <SectionHeader tag={skills.tag} title={skills.title} gradient="" subtitle={skills.subtitle} tone="dark" />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-ink-border bg-ink-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                  {skills.categories[category.id]}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink-border bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-foreground"
                    >
                      <item.icon size={13} aria-hidden="true" /> {translateLabel(labels, item.name)}
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
