"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type Props = {
  navItems: { label: string; href: string }[];
};

export const MobileNavigation = ({ navItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="md:hidden ">
      {/*Always Visible Toggle Button */}
      <button
        className="absolute top-4 right-4 p-2 rounded-md text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dropdown (visible only when open) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg animate-in fade-in slide-in-from-top-2 p-3 z-50">
          {/* Navigation Links */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="mt-4 border-t border-border pt-3">
            {!session?.user ? (
              <Link
                href="/join"
                className="block w-full text-center px-4 py-2 text-sm font-medium rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Join My Circle
              </Link>
            ) : (
              <div className="space-y-2">
                <div className="text-sm text-center bg-muted/40 py-2 rounded-md font-medium text-foreground/80">
                  {session.user.name || session.user.email}
                </div>
                <Link
                  href="/profile"
                  className="block w-full text-center px-4 py-2 text-sm font-medium rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="w-full text-center px-4 py-2 text-sm font-medium rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-all"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
