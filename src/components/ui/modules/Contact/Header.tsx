"use client";

import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";

export default function ContactHeader() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="glow-text">Touch</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Reach out and let's create something amazing
            together.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
