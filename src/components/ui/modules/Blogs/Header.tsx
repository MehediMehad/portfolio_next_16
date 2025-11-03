import FadeInUp from "../../shared/Animation/FadeInUp";

const Header = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="glow-text">Blogs</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Thoughts on web development, technology trends, and my journey as a
            developer.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Header;
