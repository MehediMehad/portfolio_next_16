"use client";

import { useState } from "react";
import { Github, ExternalLink, Calendar, Mail } from "lucide-react";
import StaggerAnimation from "../../shared/Animation/StaggerAnimation";
import { projects } from "@/lib/fakedata";

const ProjectsGrid = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section className="py-0 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <StaggerAnimation key={project.id} delay={index * 100}>
              <div
                className="group relative rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col hover-lift cursor-pointer"
                onClick={() =>
                  (window.location.href = `/projects/${project.id}`)
                }
              >
                {/* Project Image */}
                <div className="aspect-video bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden relative">
                  <div className="text-center">
                    <div className="text-4xl font-bold glow-text mb-2">
                      {project.image}
                    </div>
                    <p className="text-foreground/60 text-sm">
                      {project.category.replace("-", " ")}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 mb-4 grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-primary/10 border border-primary/30 text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-primary/20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                      className="flex-1 text-center py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 text-sm font-medium hover-lift"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                      className="flex-1 text-center py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 text-sm font-medium hover-lift"
                    >
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </StaggerAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
