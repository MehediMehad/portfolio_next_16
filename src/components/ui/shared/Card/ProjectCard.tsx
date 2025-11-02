import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    images: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      key={project.id}
      className="group relative rounded-xl border border-primary/20 bg-linear-to-br from-primary/5 to-secondary/5 backdrop-blur-sm overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer hover-lift"
    >
      <div className="aspect-video bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="text-center h-72 w-full">
          {/* Images */}
          <Image
            src={project.images[0]}
            alt={project.title}
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/60 mb-4">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs bg-primary/10 border border-primary/30 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
