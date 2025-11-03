const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    images: [
      "https://i.pinimg.com/736x/b1/d1/1c/b1d11c2e6e5bacef27800edaa0abd2f2.jpg",
    ],
    description:
      "Full-featured e-commerce platform with product catalog, shopping cart, and payment integration. Support for multiple currencies and payment methods.",
    technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Task Management App",
    images: [
      "https://i.pinimg.com/1200x/84/50/d6/8450d6efd4f1cb16b2235b7e6487716a.jpg",
    ],
    description:
      "Collaborative task management application with real-time updates and team features.  Support for multiple users and project management.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    images: [
      "https://i.pinimg.com/1200x/84/50/d6/8450d6efd4f1cb16b2235b7e6487716a.jpg",
    ],
    description:
      "Real-time analytics dashboard with data visualization and custom reports. integration Support for multiple users and project management.",
    technologies: ["React", "Chart.js", "PostgreSQL"],
  },
];

const recentBlogs = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    date: "2024-10-15",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Next.js 15: What's New and Why You Should Upgrade",
    date: "2024-10-10",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "My Journey from Frontend to Full Stack Developer",
    date: "2024-10-05",
    readTime: "10 min read",
  },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
    category: "full-stack",
    technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
    image: "Project 1",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features. Support for  project management.",
    category: "frontend",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    image: "Project 2",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "API Gateway",
    description:
      "Scalable API gateway with authentication, rate limiting, and request logging. Support for multiple services and APIs.",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: "Project 3",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with data visualization and custom reports. Support for multiple users and project management.",
    category: "full-stack",
    technologies: ["React", "Chart.js", "PostgreSQL"],
    image: "Project 4",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Open Source CLI Tool",
    description:
      "Command-line tool for automating development workflows and deployment processes. Support for multiple services.",
    category: "backend",
    technologies: ["Node.js", "TypeScript", "CLI"],
    image: "Project 5",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Real-time Chat App",
    description:
      "WebSocket-based chat application with user authentication and message history. Support for multiple users and project management.",
    category: "full-stack",
    technologies: ["React", "Socket.io", "Node.js"],
    image: "Project 6",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "full-stack" },
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "frontend" },
  { label: "Feature", value: "feature" },
];
export { featuredProjects, recentBlogs, projects, filters };
