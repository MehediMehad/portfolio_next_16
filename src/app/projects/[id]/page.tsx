import ProjectDetail from "@/components/ui/modules/Projects/ProjectDetail/ProjectDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetail id={id} />;
}
