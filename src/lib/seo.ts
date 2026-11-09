import type { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale, localeInfo, localePath, locales, type Locale } from "@/lib/i18n/config";
import { getProject } from "@/lib/projects";

export const siteUrl = "https://exhorte.dev";

const shareImage = {
  url: "/assets/photo_exhorte.jpg",
  width: 400,
  height: 400,
  alt: "Exhorte Mboumba",
};

export const absoluteUrl = (path: string) => (path === "/" ? siteUrl : `${siteUrl}${path}`);

/** hreflang alternates of a page ("/" or "/projects/<slug>"), including the x-default one. */
export function languageAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) alternates[locale] = localePath(locale, path);
  alternates["x-default"] = localePath(defaultLocale, path);
  return alternates;
}

const alternateOgLocales = (locale: Locale) =>
  locales.filter((l) => l !== locale).map((l) => localeInfo[l].ogLocale);

/** Metadata shared by every page of a language (the home page's own title and canonical). */
export function homeMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  const path = localePath(locale, "/");

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: path, languages: languageAlternates("/") },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: absoluteUrl(path),
      siteName: meta.siteName,
      locale: localeInfo[locale].ogLocale,
      alternateLocale: alternateOgLocales(locale),
      images: [shareImage],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images: [shareImage.url],
    },
    other: { "theme-color": "#dddddd" },
  };
}

export async function projectMetadata(
  locale: Locale,
  slug: string,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const project = getProject(locale, slug);
  if (!project) return {};

  const title = `${project.title} — Exhorte Mboumba`;
  const description = project.tagline;
  const pagePath = `/projects/${project.slug}`;
  const path = localePath(locale, pagePath);
  // Metadata is merged shallowly: set the canonical per page and carry over the shared image.
  const images = (await parent).openGraph?.images ?? [];

  return {
    title,
    description,
    alternates: { canonical: path, languages: languageAlternates(pagePath) },
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(path),
      siteName: "Exhorte Mboumba",
      locale: localeInfo[locale].ogLocale,
      alternateLocale: alternateOgLocales(locale),
      images,
    },
    twitter: { card: "summary", title, description },
  };
}

export function jsonLd(locale: Locale) {
  const { meta } = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Exhorte Mboumba",
        url: siteUrl,
        jobTitle: meta.jobTitle,
        address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
        sameAs: ["https://github.com/exhorte", "https://www.linkedin.com/in/exhorte-baboka-boumba"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Exhorte Mboumba — Portfolio",
        inLanguage: [...locales],
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
}
