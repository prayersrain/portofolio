export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  discordInviteUrl?: string;
  serverFeatures?: string[];
  image: string;
  imageMobile?: string;
  isFramable?: boolean;
};

export const projectsData: Project[] = [
  {
    id: "karya-mandiri-dental",
    title: "Karya Mandiri Dental",
    description: "Full-stack e-commerce & WhatsApp bot platform for dental equipment sales and technician services.",
    longDescription: "Karya Mandiri Dental is an end-to-end digital platform serving dental clinics across Indonesia. The system includes:\n\n• A Next.js website with ISR, SEO-optimized product catalog with structured data, and dynamic category browsing.\n• An admin dashboard for managing products, orders, customers, warranties, blog content, and system settings.\n• A WhatsApp business bot powered by Gemini AI connected via Evolution API, handling automated conversations for product inquiries and technician booking.\n\nInfrastructure is fully containerized with Docker Compose (9 containers): Next.js apps, Express bot, PostgreSQL with Prisma ORM, Redis caching, Evolution API, and Nginx reverse proxy with SSL.\n\nTech Highlights: ISR caching strategy, WebP image optimization with sharp, service booking system, warranty management, blog CMS, and AI-powered WhatsApp bot with NLU context management.",
    techStack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Docker", "Gemini AI", "Evolution API"],
    githubUrl: "https://github.com/prayersrain/kmd-system",
    liveUrl: "https://karyamandiridental.cloud",
    image: "/projects/desktop/kmd-desktop.svg",
    imageMobile: "/projects/kmd-mobile.svg",
    isFramable: true,
  },
  {
    id: "yoyo-bakery-bot",
    title: "Yoyo Bakery Bot",
    description: "WhatsApp auto-order bot with AI NLU, delivery dispatch, and real-time admin dashboard.",
    longDescription: "A production WhatsApp business bot handling 100+ daily orders for Yoyo Bakery. The system replaces manual order-taking with an AI-driven conversational pipeline:\n\n• NLU parser powered by Gemini AI (gemini-3.1-flash-lite) that extracts product names, quantities, and customer intent from natural Indonesian language — including ambiguous multi-product templates, out-of-stock handling, and payment confirmation flows.\n• Session-based conversation management with state machine (IDLE → WAITING_ORDER → PAYMENT → ACKNOWLEDGE).\n• Lalamove API integration for delivery dispatch with HMAC webhook verification.\n• PWA admin dashboard for real-time order monitoring, stock management, and customer analytics.\n\nBuilt on Baileys (WhatsApp Web protocol) with Supabase PostgreSQL, Express.js, and PM2 process management. Served behind Nginx with SSL via yoyobolen.cloud.",
    techStack: ["Node.js", "Baileys", "Gemini AI", "Supabase", "Express", "PWA", "Lalamove API"],
    githubUrl: "https://github.com/prayersrain/wachatbot-dashboardweb",
    liveUrl: "https://yoyobackoffice.vercel.app",
    image: "/projects/desktop/yoyo-desktop.svg",
    imageMobile: "/projects/yoyo-mobile.svg",
    isFramable: true,
  },
  {
    id: "discord-bot",
    title: "Discord Community Hub",
    description: "A custom-built Discord server with automation bot, developer tools, and community engagement features.",
    longDescription: "A fully customized Discord community hub built around a custom discord.js v14 bot. The server serves as a central gathering space for developers and tech enthusiasts, featuring automated moderation, interactive commands, and community-driven tools.\n\nThe bot runs 24/7 on PM2 with auto-restart and log rotation, hosted on the same VPS infrastructure alongside the KMD and Yoyo systems.",
    techStack: ["Node.js", "discord.js", "PM2"],
    githubUrl: "",
    discordInviteUrl: "https://discord.gg/hnqUfxuCdk",
    serverFeatures: [
      "Custom bot with slash commands & message handlers",
      "Automated moderation & anti-spam",
      "Developer resources & code sharing",
      "Tech discussion channels (web dev, bots, self-hosting)",
      "Community events & project showcases",
      "24/7 uptime with PM2 auto-restart",
    ],
    image: "/projects/desktop/discord-desktop.svg",
    imageMobile: "/projects/discord-mobile.svg",
    isFramable: false,
  }
];
