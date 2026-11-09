import type { MetadataRoute } from "next";
import { detailProjects } from "@/lib/projects";

const siteUrl = "https://exhorte.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only projects that are listed on the home page are advertised to search engines.
  const projectRoutes = detailProjects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteUrl, lastModified: new Date() },
    ...projectRoutes,
  ];
}
