import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getFeaturedProjects, getSecondaryProjects, toCard } from "@/lib/projects";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Hero copy={dict.hero} labels={dict.labels} downloadCv={dict.nav.downloadCv} />
      <LogoStrip label={dict.logoStrip.label} />
      <About locale={locale} />
      <Skills locale={locale} />
      <Projects
        locale={locale}
        copy={dict.projects}
        sectionLabel={dict.nav.links.projects}
        featured={getFeaturedProjects(locale).map(toCard)}
        secondary={getSecondaryProjects(locale).map(toCard)}
      />
      <Contact locale={locale} />
    </>
  );
}
