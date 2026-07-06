export type JourneyItem = {
  year: string;
  title: string;
  company: string;
  description: string;
};

export const journeyData: JourneyItem[] = [
  {
    year: "2022 - Present",
    title: "Full Stack Developer",
    company: "Karya Mandiri Dental",
    description: "Architected and built the entire digital ecosystem: Next.js e-commerce platform with ISR, WhatsApp business bot with Gemini AI, admin dashboard with Prisma ORM, and Docker-based infrastructure serving 9 containers on a single VPS.",
  },
  {
    year: "2023 - Present",
    title: "Bot Developer & System Integrator",
    company: "Yoyo Bakery",
    description: "Designed and deployed a production WhatsApp auto-order bot handling 100+ daily transactions. Built NLU pipeline with Gemini AI for natural language order parsing, integrated Lalamove delivery dispatch, and developed a real-time PWA admin dashboard deployed on Vercel.",
  },
  {
    year: "2024",
    title: "Discord Community Developer",
    company: "Independent",
    description: "Built and deployed a custom Discord bot with discord.js v14 for community automation, moderation, and developer tooling. Managed 24/7 uptime with PM2 process management on self-hosted VPS.",
  },
  {
    year: "2022 - Present",
    title: "Undergraduate Student (Semester 8)",
    company: "Universitas Gunadarma",
    description: "Pursuing a Bachelor's degree in Informatics Engineering with focus on software engineering, web technologies, and system architecture.",
  },
  {
    year: "2019 - 2022",
    title: "Vocational High School",
    company: "SMKN 1 Kota Bekasi",
    description: "Graduated with honors in Software Engineering. Built foundational skills in programming, databases, and web development that launched my career.",
  },
  {
    year: "2018",
    title: "Started Coding",
    company: "Self-Taught",
    description: "Wrote my first HTML page and never looked back. What started as curiosity became a career building production systems for real businesses.",
  }
];
