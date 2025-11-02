"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import profileImage from "@/assets/profile.jpeg";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div>
                <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
                  Welcome to my portfolio
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="glow-text">Full Stack</span>
                  <br />
                  <span className="text-foreground">Developer</span>
                </h1>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                Building scalable and interactive web applications with modern
                technologies. Passionate about creating beautiful, performant
                digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/projects"
                  className="glow-button px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group"
                >
                  View Projects
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-lg font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card border border-primary/30 flex items-center justify-center text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card border border-primary/30 flex items-center justify-center text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card border border-primary/30 flex items-center justify-center text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Image */}
            <div className="relative h-96 md:h-full min-h-96">
              <Image
                src={profileImage}
                width={500}
                height={500}
                alt="Mehedi Mehad"
                // className="inset-0 w-full h-full object-cover rounded-2xl border border-primary/20"
                className="inset-0 w-full h-full object-cover rounded-2xl"
              />
              {/* <div className="absolute inset-0 w-full h-full border-2 border-primary rounded-2xl"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
