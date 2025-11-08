import HeroSectionClient from "@/components/ui/modules/Home/HeroSection/HeroSectionClient";
import ProjectsSection from "@/components/ui/modules/Home/Projects/ProjectsSection";
import RecentBlogs from "@/components/ui/modules/Home/RecentBlogs/RecentBlogs";
import ScheduleMeeting from "@/components/ui/modules/Home/ScheduleMeeting/ScheduleMeeting";
import AuthButtons from "@/components/ui/shared/AuthButtons/AuthButtons";
import { getEnvVar } from "@/lib/env";

const HomePage = () => {
  return (
    <main>
      <HeroSectionClient />
      <ProjectsSection />
      <RecentBlogs />
      <AuthButtons />
      <ScheduleMeeting />
    </main>
  );
};

export default HomePage;
