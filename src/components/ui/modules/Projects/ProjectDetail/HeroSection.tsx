import { Github, ArrowLeft, Eye, Zap, Users, Code } from "lucide-react";
import Link from "next/link";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import Image from "next/image";

const HeroSection = ({ project }: { project: any }) => {
  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <FadeInUp>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
                {project.title}
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-foreground/60 mb-1 uppercase tracking-wide">
                    Type
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {project.type}
                  </p>
                </div>
                <div className="bg-card border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-foreground/60 mb-1 uppercase tracking-wide">
                    Status
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {project.projectStatus}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold"
                >
                  <Eye size={18} />
                  View Live
                </a>
                <a
                  href={project.backendGithubUrl}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-primary/30 text-primary hover:border-primary transition-all font-semibold"
                >
                  <Github size={18} />
                  Backend Code
                </a>
                <a
                  href={project.frontendGithubUrl}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-primary/30 text-primary hover:border-primary transition-all font-semibold"
                >
                  <Code size={18} />
                  Frontend Code
                </a>
              </div>
            </div>
          </FadeInUp>

          {/* Right Side - Project Preview */}
          <FadeInUp>
            <div className="aspect-square bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-xl border border-primary/20 flex items-center justify-center overflow-hidden group hover:border-primary/50 transition-all">
              <div className="text-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
