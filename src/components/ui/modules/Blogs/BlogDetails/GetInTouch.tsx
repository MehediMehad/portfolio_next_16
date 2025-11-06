import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="mt-16 p-8 rounded-lg bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
      <FadeInUp>
        <h3 className="text-2xl font-bold mb-4">
          Have thoughts on this article?
        </h3>
        <p className="text-foreground/70 mb-6">
          Share your feedback or discuss more about React best practices.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold"
        >
          Get in Touch
        </Link>
      </FadeInUp>
    </section>
  );
};

export default GetInTouch;
