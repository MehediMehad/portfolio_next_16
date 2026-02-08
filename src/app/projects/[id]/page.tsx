import ProjectDetail from "@/components/ui/modules/Projects/ProjectDetail/ProjectDetail";
import { getProjectDetailsByIdAction } from "@/services";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectDetailsByIdAction(id);

  return <ProjectDetail project={project} />;
}
