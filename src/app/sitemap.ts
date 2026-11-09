import type { MetadataRoute } from "next";
import { locales, localePath } from "@/lib/i18n/config";
import { listedDetailSlugs } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only projects that are listed on the home page are advertised to search engines.
  const pages = ["/", ...listedDetailSlugs.map((slug) => `/projects/${slug}`)];
  const lastModified = new Date();

  // One entry per language and page; each entry points at its translations.
  return pages.flatMap((path) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(localePath(locale, path))]));
    return locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      lastModified,
      alternates: { languages },
    }));
  });
}
