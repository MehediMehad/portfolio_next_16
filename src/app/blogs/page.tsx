import BlogGrid from "@/components/ui/modules/Blogs/BlogGrid";
import FilterButtons from "@/components/ui/modules/Blogs/FilterButtons";
import Header from "@/components/ui/modules/Blogs/Header";

const BlogsPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <FilterButtons />
      <BlogGrid />
    </main>
  );
};

export default BlogsPage;
