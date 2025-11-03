import Link from "next/link";

const ScheduleMeeting = () => {
  return (
    <section className="py-20 bg-linear-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prefer to Schedule a Meeting?
        </h2>
        <p className="text-xl text-foreground/70 mb-8">
          Let's discuss your project and how I can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book-meeting"
            className="glow-button px-8 py-3 rounded-lg font-semibold"
          >
            Schedule a Meeting
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;
