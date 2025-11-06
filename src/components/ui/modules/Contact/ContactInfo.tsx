"use client";

import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from "lucide-react";
import StaggerAnimation from "@/components/ui/shared/Animation/StaggerAnimation";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";
import ContactInfoItem from "./ContactInfoItem";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <FadeInUp>
        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
      </FadeInUp>

      <ContactInfoItem
        delay={100}
        icon={Mail}
        title="Email"
        value="hello@example.com"
        copy
      />

      <ContactInfoItem
        delay={150}
        icon={Phone}
        title="Phone"
        value="+1 (234) 567-890"
        copy
      />

      <ContactInfoItem
        delay={200}
        icon={MapPin}
        title="Location"
        value="San Francisco, CA, USA"
      />

      <StaggerAnimation delay={250}>
        <div className="pt-8 border-t border-primary/20">
          <h3 className="font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all hover-lift"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </StaggerAnimation>
    </div>
  );
}
