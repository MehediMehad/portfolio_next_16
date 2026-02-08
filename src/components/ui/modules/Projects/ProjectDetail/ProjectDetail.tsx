"use client";

import {
  Github,
  ArrowLeft,
  Eye,
  Code,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import CTASection from "./CTASection";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import Image from "next/image";
import { TProject } from "@/types";

function getTechIcon(tech: string): string {
  const icons: Record<string, string> = {
    React: "⚛️",
    "Next.js": "▲",
    Stripe: "🔐",
    PostgreSQL: "🗄️",
    "Tailwind CSS": "🎨",
    TypeScript: "📘",
    Node: "⬢",
    Express: "⚡",
    MongoDB: "🍃",
    Firebase: "🔥",
    Docker: "🐳",
    Kubernetes: "☸️",
  };
  return icons[tech] || "💻";
}

export default function ProjectDetail({ project }: { project: TProject }) {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group text-sm font-medium"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side */}
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-primary">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight text-balance">
                  {project.title}
                </h1>
                <p className="text-xl text-foreground/60 mb-2 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-card border border-border rounded-lg p-5 hover-lift">
                    <p className="text-sm text-foreground/60 font-semibold uppercase tracking-wider mb-1">
                      Project Type
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {project.type}
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-5 hover-lift">
                    <p className="text-sm text-foreground/60 font-semibold uppercase tracking-wider mb-1">
                      Status
                    </p>
                    <p className="text-lg font-bold text-accent">
                      {project.status}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold hover:-translate-y-0.5"
                  >
                    <Eye size={18} />
                    View Live Demo
                  </a>
                  <div className="flex gap-3">
                    <a
                      href={project.backendGitHubUrl}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-all font-semibold"
                      title="Backend Source Code"
                    >
                      <Github size={18} />
                      <span className="hidden sm:inline">Backend</span>
                    </a>
                    <a
                      href={project.frontendGitHubUrl}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-all font-semibold"
                      title="Frontend Source Code"
                    >
                      <Code size={18} />
                      <span className="hidden sm:inline">Frontend</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Preview */}
              <FadeInUp>
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-accent/20 to-secondary/30 rounded-2xl blur-3xl opacity-50"></div>
                  <div className="relative aspect-square bg-linear-to-br from-primary/10 via-card to-accent/10 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden group hover:border-primary/50 transition-all">
                    <div className="text-center">
                      <div className="">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={900}
                          height={900}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20 bg-primary/3 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover-lift group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Overview & Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-foreground/70 max-w-2xl">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  Key Features
                </h3>
                <div className="space-y-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                      <CheckCircle2
                        size={20}
                        className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform"
                      />
                      <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Roles */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-accent rounded-full"></div>
                  User Capabilities
                </h3>
                <div className="space-y-6">
                  {project.rolesFeatures.map((userRole, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary/50 pl-6 hover:border-primary transition-colors"
                    >
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {userRole.role}
                      </h4>
                      <ul className="space-y-2">
                        {userRole.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex gap-3 items-start text-sm text-foreground/70 hover:text-foreground transition-colors"
                          >
                            <ArrowRight
                              size={14}
                              className="mt-1 shrink-0 text-accent"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="pb-24 bg-linear-to-b from-transparent via-primary/3 to-transparent ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
              <p className="text-lg text-foreground/60">
                Built with industry-leading technologies for performance,
                scalability, and maintainability
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-linear-to-br from-background to-card border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-32 hover:border-primary/50 transition-all duration-300 hover-lift">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {getTechIcon(tech)}
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      {tech}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
