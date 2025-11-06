import ContactCTA from "@/components/ui/modules/Contact/ContactCTA";
import ContactSection from "@/components/ui/modules/Contact/ContactSection";
import ContactHeader from "@/components/ui/modules/Contact/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <ContactHeader />
      <ContactSection />
      <ContactCTA />
    </main>
  );
}
