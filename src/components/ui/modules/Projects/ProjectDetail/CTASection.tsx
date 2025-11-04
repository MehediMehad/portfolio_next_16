import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-linear-to-b from-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold"
          >
            Start a Conversation
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
};

export default CTASection;
