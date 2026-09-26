import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import ProjectDetail from "./ProjectClient";

export function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/projects/${project.id}`,
      images: [{ url: "/og-image.png" }],
    },
  };
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <ProjectDetail params={params} />;
}
