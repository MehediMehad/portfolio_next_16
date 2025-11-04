import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";

const Technologies = ({ project }: { project: any }) => {
  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 hover:border-primary transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Technologies;
