"use client";

import { useEffect, useState } from "react";
import { Mail, Calendar } from "lucide-react";
import Link from "next/link";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import StaggerAnimation from "@/components/ui/shared/Animation/StaggerAnimation";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js", "Prisma", "Mongoose"],
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Firebase"],
    },
    { category: "DevOps", technologies: ["Docker", "AWS S3", "Git", "GitHub"] },
  ];

  const experience = [
    {
      year: "2024 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      description:
        "Leading development of scalable web applications and mentoring junior developers.",
    },
    {
      year: "2022 - 2024",
      title: "Full Stack Developer",
      company: "Digital Agency",
      description:
        "Built and maintained multiple client projects using modern web technologies.",
    },
    {
      year: "2020 - 2022",
      title: "Junior Developer",
      company: "Startup",
      description:
        "Started my career building web applications and learning best practices.",
    },
  ];

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="glow-text">Me</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              I'm a passionate Full Stack Developer with a deep love for
              creating beautiful, performant web applications. With expertise in
              modern technologies like React, Next.js, and Node.js, I build
              scalable solutions that solve real-world problems.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              My journey in web development started with a curiosity about how
              things work on the internet. Over the years, I've honed my skills
              across the entire stack, from crafting intuitive user interfaces
              to architecting robust backend systems.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          </FadeInUp>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <StaggerAnimation key={index} delay={index * 100}>
                <div className="hover-lift p-6 rounded-lg border border-primary/20 bg-linear-to-br from-primary/5 to-secondary/5">
                  <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <h2 className="text-3xl font-bold mb-12">Experience</h2>
          </FadeInUp>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <StaggerAnimation key={index} delay={index * 150}>
                <div className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary transition-colors hover-lift rounded-lg p-4">
                  <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background pulse-glow"></div>
                  <div className="space-y-2">
                    <p className="text-primary text-sm font-semibold">
                      {exp.year}
                    </p>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-foreground/60 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </StaggerAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-linear-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl font-bold mb-4">
              Have an Opportunity for Me?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              If you have a project or opportunity that aligns with my skills,
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-meeting"
                className="glow-button px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 hover-lift"
              >
                Schedule a Meeting <Calendar size={20} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Me <Mail size={20} />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
