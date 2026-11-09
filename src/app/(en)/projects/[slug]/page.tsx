import type { Metadata, ResolvingMetadata } from "next";
import { ProjectPage } from "@/components/pages/ProjectPage";
import { detailSlugs } from "@/lib/projects";
import { projectMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return detailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;
  return projectMetadata("en", slug, parent);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectPage locale="en" slug={slug} />;
}
