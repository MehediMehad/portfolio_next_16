"use client";
import { useState } from "react";

import { filters } from "@/lib/fakedata";
import StaggerAnimation from "../../shared/Animation/StaggerAnimation";

const FilterButtons = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {filters.map((f, index) => (
            <StaggerAnimation key={f.value} delay={index * 50}>
              <button
                onClick={() => setFilter(f.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-all smooth-transition ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-105"
                    : "bg-card border border-primary/30 text-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                }`}
              >
                {f.label}
              </button>
            </StaggerAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterButtons;
