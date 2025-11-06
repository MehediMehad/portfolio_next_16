import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import Link from "next/link";

const RelatedBlogs = () => {
  return (
    <section className="mt-20 pt-12 border-t border-border">
      <FadeInUp>
        <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Advanced React Patterns",
              category: "Advanced",
              readTime: "10 min",
            },
            {
              title: "Next.js Performance Tips",
              category: "Performance",
              readTime: "7 min",
            },
          ].map((article, i) => (
            <Link
              key={i}
              href="/blogs"
              className="group p-6 rounded-lg border border-primary/30 bg-card/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h4>
              <div className="flex justify-between items-center text-sm text-foreground/60">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </FadeInUp>
    </section>
  );
};

export default RelatedBlogs;
