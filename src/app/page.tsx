import HeroSectionClient from "@/components/ui/modules/Home/HeroSection/HeroSectionClient";
import ProjectsSection from "@/components/ui/modules/Home/Projects/ProjectsSection";
import RecentBlogs from "@/components/ui/modules/Home/RecentBlogs/RecentBlogs";
import ScheduleMeeting from "@/components/ui/modules/Home/ScheduleMeeting/ScheduleMeeting";
import { getFeaturedProjectsAction } from "@/services";

const HomePage = async () => {
  const featuredProjects = await getFeaturedProjectsAction();
  return (
    <main>
      <HeroSectionClient />
      <ProjectsSection featuredProjects={featuredProjects} />
      <RecentBlogs />
      <ScheduleMeeting />
    </main>
  );
};

export default HomePage;
