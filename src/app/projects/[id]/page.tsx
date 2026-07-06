import { projectsData } from "@/data/projects";
import ProjectDetail from "./ProjectClient";

export function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <ProjectDetail params={params} />;
}
