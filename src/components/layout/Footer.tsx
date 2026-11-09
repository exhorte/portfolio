import { Container } from "@/components/ui/Container";
import { nav, profile, socials } from "@/lib/data";
import { getDictionary } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/i18n/config";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const home = localePath(locale, "/");

  return (
    <footer className="border-t border-ink-border bg-ink py-16 text-ink-foreground">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-foreground font-mono text-sm text-ink">
              {nav.brand}
            </span>
            <p className="mt-4 text-sm text-ink-muted">{dict.footer.role}</p>
            <p className="mt-1 text-sm text-ink-muted">{dict.footer.tagline}</p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-muted">{dict.footer.siteTitle}</h4>
              <ul className="mt-4 space-y-2">
                {nav.links.map((link) => (
                  <li key={link.id}>
                    <a href={`${home}#${link.id}`} className="text-sm text-ink-muted hover:text-ink-foreground">
                      {dict.nav.links[link.id]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-muted">{dict.footer.contactTitle}</h4>
              <ul className="mt-4 space-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink-foreground"
                    >
                      <s.icon size={14} /> {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-border pt-8 text-sm text-ink-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.firstName} {profile.lastName}.
          </p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-border hover:border-ink-foreground hover:text-ink-foreground"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
