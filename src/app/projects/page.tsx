import FilterButtons from "@/components/ui/modules/Projects/FilterButtons";
import Header from "@/components/ui/modules/Projects/Header";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <FilterButtons />
    </main>
  );
};

export default ProjectsPage;
