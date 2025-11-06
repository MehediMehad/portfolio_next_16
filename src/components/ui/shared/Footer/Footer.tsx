import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Navigation", links: ["Home", "About", "Projects", "Blogs"] },
    { title: "Resources", links: ["Resume", "Contact", "GitHub", "LinkedIn"] },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-linear-to-b from-background to-primary/5 border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold glow-text mb-4">Dev</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Building scalable and interactive web applications with modern
              technologies.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:border-primary hover:bg-primary/20 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-foreground mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">
              Let's Connect
            </h4>
            <p className="text-foreground/60 text-sm mb-4">
              Interested in working together? Let's talk!
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:border-primary hover:bg-primary/20 transition-all text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 gap-4">
            <p className="flex items-center gap-2">
              © {currentYear} Your Name. Built with{" "}
              <Heart size={16} className="text-primary" /> using Next.js &
              Tailwind
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
