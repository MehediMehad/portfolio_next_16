"use client";

import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import { Calendar, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-linear-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-4">
            Prefer to Schedule a Meeting?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's have a quick call to discuss your project and how I can help
            you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/meeting-schedules"
              className="glow-button px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover-lift"
            >
              Schedule a Meeting <Calendar size={20} />
            </Link>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
            >
              Back to Contact <Mail size={20} />
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
