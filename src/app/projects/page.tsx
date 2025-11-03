import FilterButtons from "@/components/ui/modules/Projects/FilterButtons";
import Header from "@/components/ui/modules/Projects/Header";
import Opportunity from "@/components/ui/modules/Projects/Opportunity";
import ProjectsGrid from "@/components/ui/modules/Projects/ProjectsGrid";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <FilterButtons />
      <ProjectsGrid />
      <Opportunity />
    </main>
  );
};

export default ProjectsPage;
