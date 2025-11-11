"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
type Props = {
  onClick?: () => void;
};

export const AuthButtons = ({ onClick }: Props) => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside); // Add event listener
    return () => document.removeEventListener("mousedown", handleClickOutside); // Remove event listener
  }, []);

  // If user not logged in → Show Join button
  if (!session?.user) {
    return (
      <Link
        href="/join"
        className="px-4 py-2 text-sm rounded-sm font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
        onClick={onClick}
      >
        Join My Circle
      </Link>
    );
  }

  // If logged in → Avatar + Dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="focus:outline-none"
        aria-label="User menu"
      >
        <Avatar className="cursor-pointer ring-2  ring-primary/80 transition mt-0.5">
          <AvatarImage src={session.user.image || ""} />
          <AvatarFallback>
            {session.user.name
              ?.split(" ")
              .map((n) => n[0])
              .join("") || "NN"}
          </AvatarFallback>
        </Avatar>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border border-border bg-background shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="px-3 py-2 border-b border-border text-sm font-medium">
            {session.user.name || "User"}
          </div>
          <Link
            href="/profile"
            className="block px-3 py-2 text-sm hover:bg-primary/10 transition-colors"
            onClick={() => {
              setOpen(false);
              onClick?.();
            }}
          >
            Profile
          </Link>
          <button
            onClick={() => {
              signOut();
              setOpen(false);
              onClick?.();
            }}
            className="w-full text-left px-3 py-2 text-sm hover:bg-primary/10 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
