"use client";

import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { AuthButtons } from "./AuthButtons";
import { MobileNavigation } from "./MobileNavigation";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    // { label: "Resume", href: "/resume" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold glow-text hover:opacity-80 transition-opacity"
          >
            Mehedi Mehad
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <NavLinks navItems={navItems} />
            <AuthButtons />
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation navItems={navItems} />
      </div>
    </nav>
  );
}
