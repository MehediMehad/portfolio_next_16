import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import Features from "./Features";
import Technologies from "./Technologies";
import CTASection from "./CTASection";

export default function ProjectDetail({ id }: { id: string }) {
  const project = {
    id: id,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
    longDescription:
      "This project showcases a complete e-commerce solution built with modern web technologies. It includes user authentication, product management, shopping cart functionality, and secure payment processing with Stripe integration. The platform is designed with performance, scalability, and user experience as core principles.",
    category: "Full Stack",
    technologies: [
      "React",
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    image:
      "https://i.pinimg.com/736x/ef/c8/60/efc8601f4d02e3edea22ec16b902c257.jpg",
    liveUrl: "#",
    backendGithubUrl: "#",
    frontendGithubUrl: "#",
    type: "Large-Scale Project",
    projectStatus: "Live in Production",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart with persistent storage",
      "Secure payment processing",
      "Order management system",
      "Admin dashboard for product management",
      "Responsive design for all devices",
      "Real-time inventory updates",
    ],
    userRoles: [
      {
        role: "Customer",
        features: [
          "Browse and search products",
          "Add items to cart",
          "Secure checkout with Stripe",
          "Order history tracking",
          "Wishlist management",
        ],
      },
      {
        role: "Admin",
        features: [
          "Manage product inventory",
          "View sales analytics",
          "Process refunds",
          "Manage user accounts",
          "Generate reports",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection project={project} />
      <OverviewSection project={project} />
      <Features project={project} />
      <Technologies project={project} />
      <CTASection />
    </main>
  );
}
