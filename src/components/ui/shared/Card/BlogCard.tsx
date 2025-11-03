import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const BlogCard = ({
  blog,
}: {
  blog: { id: number; title: string; date: string; readTime: string };
}) => {
  return (
    <Link
      key={blog.id}
      href={`/blogs/${blog.id}`}
      className="group relative rounded-xl border border-primary/20 bg-linear-to-br from-primary/5 to-secondary/5 backdrop-blur-sm overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col hover-lift p-6"
    >
      <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
        <Calendar size={16} />
        {(() => {
          const date = new Date(blog.date);
          return isNaN(date.getTime())
            ? "Date unavailable"
            : date.toLocaleDateString();
        })()}
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {blog.title}
      </h3>
      <p className="text-foreground/60 text-sm mb-4 grow">{blog.readTime}</p>
      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
        Read More <ArrowRight size={16} />
      </div>
    </Link>
  );
};

export default BlogCard;
