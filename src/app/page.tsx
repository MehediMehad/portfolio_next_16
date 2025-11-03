import HeroSectionClient from "@/components/ui/modules/Home/HeroSection/HeroSectionClient";
import ProjectsSection from "@/components/ui/modules/Home/Projects/ProjectsSection";
import RecentBlogs from "@/components/ui/modules/Home/RecentBlogs/RecentBlogs";

const HomePage = () => {
  return (
    <main>
      <HeroSectionClient />
      <ProjectsSection />
      <RecentBlogs />
    </main>
  );
};

export default HomePage;
