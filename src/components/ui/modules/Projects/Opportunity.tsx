import { Calendar, Mail } from "lucide-react";
import Link from "next/link";
import FadeInUp from "../../shared/Animation/FadeInUp";

const Opportunity = () => {
  return (
    <section className="py-20 bg-linear-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-meeting"
              className="glow-button px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 hover-lift"
            >
              Schedule a Meeting <Calendar size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Contact Me <Mail size={20} />
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Opportunity;
