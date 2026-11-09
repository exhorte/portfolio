/**
 * Languages of the site. English lives at the root (`/`, `/projects/<slug>`), every other
 * language under its own prefix (`/fr`, `/fr/projects/<slug>`), so the original URLs never change.
 *
 * This module is imported by client components: keep it free of any dictionary import.
 */
export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Cookie remembering the language explicitly chosen with the selector (read by `detect.ts`). */
export const localeCookie = "lang";
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

export const localeInfo: Record<Locale, { short: string; name: string; ogLocale: string }> = {
  en: { short: "EN", name: "English", ogLocale: "en_US" },
  fr: { short: "FR", name: "Français", ogLocale: "fr_FR" },
};

/** URL path of a page ("/" or "/projects/<slug>") in the given language. */
export function localePath(locale: Locale, path = "/"): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Splits a pathname into its language and the language-independent page path. */
export function parsePathname(pathname: string): { locale: Locale; path: string } {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return { locale, path: "/" };
    if (pathname.startsWith(`/${locale}/`)) return { locale, path: pathname.slice(locale.length + 1) };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

/** Labels defined in `data.ts` (technology names, …) can be overridden per language by their English text. */
export function translateLabel(labels: Record<string, string>, text: string): string {
  return labels[text] ?? text;
}
