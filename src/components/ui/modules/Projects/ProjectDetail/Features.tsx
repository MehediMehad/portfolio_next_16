import { Users } from "lucide-react";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";

const Features = ({ project }: { project: any }) => {
  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Users size={32} className="text-primary" />
            User Roles & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.userRoles.map((userRole: any, index: number) => (
              <div
                key={index}
                className="bg-linear-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-8 hover-lift"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {userRole.role}
                  </h3>
                </div>
                <div className="space-y-3">
                  {userRole.features.map(
                    (feature: string, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex gap-3 items-start"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        </div>
                        <p className="text-foreground/70">{feature}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Features;
