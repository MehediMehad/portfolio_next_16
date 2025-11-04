import { Zap } from "lucide-react";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";

const OverviewSection = ({ project }: { project: any }) => {
  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-primary" size={32} />
                Overview
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <p className="text-foreground/70">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default OverviewSection;
