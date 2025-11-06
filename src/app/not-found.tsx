"use client";

import Link from "next/link";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <FadeInUp>
        <div className="text-center space-y-6 animate-in fade-in duration-500">
          <h1 className="text-8xl font-bold glow-text slide-up">404</h1>

          <p className="text-lg text-foreground/70 slide-up">
            The page you're looking for doesn't exist.
          </p>

          <Link
            href="/"
            className="glow-button inline-block px-8 py-3 rounded-lg font-semibold hover-lift smooth-transition"
          >
            Go Back Home
          </Link>
        </div>
      </FadeInUp>
    </main>
  );
}
