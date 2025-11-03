"use client";

import { useState } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import StaggerAnimation from "../../shared/Animation/StaggerAnimation";
import FadeInUp from "../../shared/Animation/FadeInUp";
const BlogGrid = () => {
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
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, index) => (
              <StaggerAnimation key={blog.id} delay={index * 100}>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="group relative rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col hover-lift"
                >
                  {/* Blog Image */}
                  <div className="aspect-video bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden relative">
                    <div className="text-center">
                      <div className="text-4xl font-bold glow-text mb-2">
                        {blog.image}
                      </div>
                      <p className="text-foreground/60 text-sm">
                        {blog.category}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Blog Info */}
                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(blog.date).toLocaleDateString()}
                      </div>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-foreground/60 mb-4 grow line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </StaggerAnimation>
            ))}
          </div>
        ) : (
          <FadeInUp>
            <div className="text-center py-20">
              <p className="text-xl text-foreground/60">
                No articles found matching your search.
              </p>
            </div>
          </FadeInUp>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
