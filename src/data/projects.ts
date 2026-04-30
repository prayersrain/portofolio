export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  imageMobile?: string;
};

export const projectsData: Project[] = [
  {
    id: "pos-web",
    title: "PoS Web",
    description: "Modern, fast, and scalable Point of Sales application.",
    longDescription: "A web-based Point of Sales (POS) system designed to accelerate sales transactions, feature dynamic inventory management, and provide real-time business analytic dashboards.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/prayersrain/PoS-web",
    liveUrl: "https://po-s-web.vercel.app/",
    image: "/projects/desktop/screencapture-po-s-web-vercel-app-login-2026-04-30-17_40_38.png",
    imageMobile: "/projects/iPhone-12-PRO-po-s-web.vercel.app.webp",
  },
  {
    id: "backoffice-monitoring",
    title: "Backoffice Monitoring",
    description: "PWA for real-time back-office operational monitoring.",
    longDescription: "A Progressive Web App (PWA) enabling administrators to track operations, manage inventory (such as an iPhone registry system), and support offline usage in weak network conditions.",
    techStack: ["Next.js", "TypeScript", "PWA"],
    githubUrl: "https://github.com/prayersrain/backoffice-monitoring",
    liveUrl: "https://backoffice-monitoring.vercel.app/",
    image: "/projects/desktop/screencapture-backoffice-monitoring-vercel-app-login-2026-04-30-17_40_31.png",
    imageMobile: "/projects/iPhone-12-PRO-backoffice-monitoring.vercel.app.webp",
  },
  {
    id: "yoyobolen-backoffice",
    title: "Yoyobolen Backoffice",
    description: "Comprehensive back-office management system for Yoyobolen bakery.",
    longDescription: "This system integrates order tracking, financial modules, and a dynamic multi-bank payment solution (Virtual Account) using the Midtrans Core API.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Midtrans API"],
    githubUrl: "https://github.com/prayersrain/yoyobolen-backoffice",
    liveUrl: "https://yoyobolen-backoffice.vercel.app/",
    image: "/projects/desktop/screencapture-yoyobolen-backoffice-vercel-app-login-2026-04-30-17_40_23.png",
    imageMobile: "/projects/iPhone-12-PRO-yoyobolen-backoffice.vercel.app.webp",
  },
  {
    id: "easeyourneeds-web",
    title: "EaseYourNeeds",
    description: "B2B SaaS web application for business automation.",
    longDescription: "The platform provides a secure authentication system using NextAuth v5, Role-Based Access Control (RBAC), and comprehensive business metric dashboard visualizations.",
    techStack: ["Next.js", "TypeScript", "NextAuth v5", "Bcrypt"],
    githubUrl: "https://github.com/prayersrain/easeyourneeds-web",
    liveUrl: "https://easeyourneeds-web.vercel.app/",
    image: "/projects/desktop/screencapture-easeyourneeds-web-vercel-app-2026-04-30-17_39_52.png",
    imageMobile: "/projects/iPhone-12-PRO-easeyourneeds-web.vercel.app (1).webp",
  },
  {
    id: "karya-mandiri-dental",
    title: "Karya Mandiri Dental",
    description: "Professional website for a dental clinic with booking info.",
    longDescription: "Provides easy access to clinic services, doctor profiles, and scheduling, built with a responsive layout designed to build patient trust.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/prayersrain/karya-mandiri-dental",
    liveUrl: "https://karya-mandiri-dental.vercel.app/",
    image: "/projects/desktop/screencapture-karya-mandiri-dental-vercel-app-2026-04-30-17_40_14.png",
    imageMobile: "/projects/iPhone-12-PRO-karya-mandiri-dental.vercel.app (1).webp",
  }
];
