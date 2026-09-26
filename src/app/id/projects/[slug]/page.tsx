import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPage from "@/components/ProjectPage";
import { getProject, projects } from "@/data/projects";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? pageMeta("id", `/projects/${project.slug}`, project.tagline.id, project.title) : {};
}

export default async function Page({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <ProjectPage project={project} locale="id" />;
}
