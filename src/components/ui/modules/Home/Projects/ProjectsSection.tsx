"use client";

import ProjectCard from "@/components/ui/shared/Card/ProjectCard";
import { featuredProjects } from "@/lib/fakedata";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const ProjectsSection = () => {
  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-primary hover:text-accent transition-colors flex items-center gap-2"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
