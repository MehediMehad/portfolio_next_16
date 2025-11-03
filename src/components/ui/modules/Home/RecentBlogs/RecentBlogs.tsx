import BlogCard from "@/components/ui/shared/Card/BlogCard";
import { recentBlogs } from "@/lib/fakedata";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

const RecentBlogs = () => {
  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">My Blogs</h2>
          <Link
            href="/blogs"
            className="text-primary hover:text-accent transition-colors flex items-center gap-2"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentBlogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
