import Link from "next/link";
import { signOut } from "next-auth/react";
import { NavLinks } from "./NavLinks";

import { useSession } from "next-auth/react";
interface MobileMenuProps {
  navItems: { label: string; href: string }[];
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { data: session } = useSession();

  if (!isOpen) return null;
  return (
    <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
      {/* Navigation */}

      {!session?.user ? (
        <div className="flex flex-col px-4 pt-2 gap-2">
          <Link
            href="/join"
            className="text-center px-4 text-[1rem] py-2 rounded-sm font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
            onClick={onClose}
          >
            Join My Circle
          </Link>
        </div>
      ) : (
        <div className="px-4 pt-2 space-y-2">
          <Link
            href="/profile"
            className="block text-center px-4 py-2 text-sm font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
            onClick={onClose}
          >
            {session.user.name || session.user.email}
          </Link>
          <button
            onClick={() => {
              signOut();
              onClose();
            }}
            className="w-full text-center px-4 py-2 text-sm font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
