"use client";

import GetInTouch from "@/components/ui/modules/Blogs/BlogDetails/GetInTouch";
import RelatedBlogs from "@/components/ui/modules/Blogs/BlogDetails/RelatedBlogs";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import CodeBlock from "@/components/ui/shared/CodeEditor/CodeBlock";
import { ArrowLeft, Calendar, Clock, Share2, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BlogPost() {
  const params = useParams();
  const blogId = params.id;
  const [copied, setCopied] = useState(false);

  const blog = {
    id: blogId,
    title: "Building Scalable React Applications",
    date: "2024-10-15",
    readTime: "8 min read",
    category: "Tech",
    author: "Your Name",
    excerpt:
      "Learn best practices for building scalable React applications from component architecture to performance optimization.",
  };

  const codeExamples = {
    component: `'use client'

import { useCallback, useMemo } from 'react'

export default function UserList({ users, onSelect }) {
  const sortedUsers = useMemo(() => {
    return users.sort((a, b) => a.name.localeCompare(b.name))
  }, [users])

  const handleSelect = useCallback((user) => {
    onSelect(user)
  }, [onSelect])

  return (
    <div className="space-y-2">
      {sortedUsers.map((user) => (
        <button
          key={user.id}
          onClick={() => handleSelect(user)}
          className="w-full text-left p-3 rounded hover:bg-primary/10"
        >
          {user.name}
        </button>
      ))}
    </div>
  )
}`,
    stateManagement: `import { create } from 'zustand'

export const useStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({
    users: [...state.users, user]
  })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter(u => u.id !== id)
  })),
  updateUser: (id, updates) => set((state) => ({
    users: state.users.map(u => 
      u.id === id ? { ...u, ...updates } : u
    )
  }))
}))`,
    performance: `// Implement code splitting for better performance
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
})

export default function App() {
  return (
    <div>
      <HeavyComponent />
    </div>
  )
}`,
  };

  const copyToClipboard = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="pt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Blogs
          </Link>

          <FadeInUp>
            <h1 className="text-4xl font-bold mb-6 text-balance">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-foreground/60 items-center">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                {blog.readTime}
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                {blog.category}
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-all text-foreground/60 hover:text-foreground"
                  title="Copy link"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-all text-foreground/60 hover:text-foreground"
                  title="Share"
                >
                  <Share2 size={18} />
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="space-y-8 text-foreground/80 leading-relaxed">
              {/* Introduction */}
              <div>
                <p className="text-lg">
                  Building scalable React applications requires careful planning
                  and architectural decisions. In this article, we'll explore
                  best practices for structuring large React applications that
                  can grow without performance degradation.
                </p>
              </div>

              {/* Component Architecture */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">
                  Component Architecture
                </h2>
                <p className="mb-4">
                  A well-organized component structure is crucial for
                  maintainability. Consider breaking down your application into
                  smaller, reusable components. This approach makes your code
                  more testable and easier to maintain.
                </p>
                <CodeBlock
                  code={codeExamples.component}
                  language="typescript"
                  title="UserList.tsx"
                />
              </div>

              {/* State Management */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">
                  State Management
                </h2>
                <p className="mb-4">
                  Choosing the right state management solution is important.
                  Whether you use Redux, Zustand, Context API, or other
                  solutions, ensure it scales with your application. Consider
                  the complexity of your state and the performance implications.
                </p>
                <CodeBlock
                  code={codeExamples.stateManagement}
                  language="typescript"
                  title="store.ts"
                />
              </div>

              {/* Performance Optimization */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">
                  Performance Optimization
                </h2>
                <p className="mb-4">
                  Implement code splitting, lazy loading, and memoization to
                  optimize your application's performance. Monitor your
                  application's performance metrics and identify bottlenecks.
                </p>
                <CodeBlock
                  code={codeExamples.performance}
                  language="typescript"
                  title="App.tsx"
                />
              </div>

              {/* Conclusion */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">
                  Conclusion
                </h2>
                <p>
                  Building scalable React applications is an ongoing process.
                  Keep learning, stay updated with best practices, and
                  continuously refactor your code to improve maintainability and
                  performance. Remember that premature optimization can be the
                  enemy of good software, so focus on writing clean,
                  understandable code first.
                </p>
              </div>
            </div>
          </FadeInUp>
          <RelatedBlogs />
          <GetInTouch />
        </div>
      </section>
    </main>
  );
}
