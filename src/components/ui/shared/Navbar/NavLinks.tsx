import Link from "next/link";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

export const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className="text-sm mt-2.5 font-medium text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
      ))}
    </>
  );
};
