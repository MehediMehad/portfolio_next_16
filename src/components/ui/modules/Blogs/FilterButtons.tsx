"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import FadeInUp from "../../shared/Animation/FadeInUp";
import StaggerAnimation from "../../shared/Animation/StaggerAnimation";

const FilterButtons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogs = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt:
        "Learn best practices for structuring large React applications with proper state management and component architecture.",
      category: "tech",
      date: "2024-10-15",
      readTime: "8 min read",
      image: "Blog 1",
    },
    {
      id: 2,
      title: "Next.js 15: What's New and Why You Should Upgrade",
      excerpt:
        "Explore the latest features in Next.js 15 including improved performance, new APIs, and enhanced developer experience.",
      category: "tech",
      date: "2024-10-10",
      readTime: "6 min read",
      image: "Blog 2",
    },
    {
      id: 3,
      title: "My Journey from Frontend to Full Stack Developer",
      excerpt:
        "A personal story about transitioning from frontend development to full stack, challenges faced, and lessons learned.",
      category: "experience",
      date: "2024-10-05",
      readTime: "10 min read",
      image: "Blog 3",
    },
    {
      id: 4,
      title: "TypeScript Tips and Tricks for Better Code",
      excerpt:
        "Advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
      category: "tips",
      date: "2024-09-28",
      readTime: "7 min read",
      image: "Blog 4",
    },
    {
      id: 5,
      title: "Database Optimization Strategies",
      excerpt:
        "Practical strategies for optimizing database queries and improving application performance.",
      category: "tech",
      date: "2024-09-20",
      readTime: "9 min read",
      image: "Blog 5",
    },
    {
      id: 6,
      title: "The Art of Writing Clean Code",
      excerpt:
        "Principles and practices for writing clean, readable, and maintainable code that scales.",
      category: "tips",
      date: "2024-09-15",
      readTime: "8 min read",
      image: "Blog 6",
    },
  ];
  const categories = [
    { label: "All", value: "all" },
    { label: "Tech", value: "tech" },
    { label: "Tips", value: "tips" },
    { label: "Experience", value: "experience" },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <section className="pb-12 bg-card/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <FadeInUp className="mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-primary/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all smooth-transition"
            />
          </div>
        </FadeInUp>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, index) => (
            <StaggerAnimation key={cat.value} delay={index * 50}>
              <button
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-all smooth-transition ${
                  selectedCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-105"
                    : "bg-card border border-primary/30 text-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                }`}
              >
                {cat.label}
              </button>
            </StaggerAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterButtons;
