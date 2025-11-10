"use client";

import Link from "next/link";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
};

export function MobileNavigation({ isOpen, onClose, navItems }: Props) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}

      <div className="flex flex-col px-4 pt-2 gap-2">
        <Link
          href="/join"
          className="text-center px-4 text-[1rem] py-2 rounded-sm font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
          onClick={onClose}
        >
          Join My Circle
        </Link>
      </div>
    </div>
  );
}
