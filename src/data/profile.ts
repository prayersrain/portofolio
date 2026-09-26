import type { Text, TextList } from "@/lib/i18n";

export const profile = {
  name: "M Fauzan Haikal Mugni",
  shortName: "Fauzan",
  location: { en: "Bekasi, Indonesia", id: "Bekasi, Indonesia" } satisfies Text,
  email: "cornwerso5118@gmail.com",
  whatsapp: "6285283142289",
  site: "https://prayersrain.cloud",
  socials: {
    github: "https://github.com/prayersrain",
    instagram: "https://instagram.com/prayersrain_",
  },
  summary: {
    en: "Full-stack developer who builds and runs production systems for small businesses: WhatsApp bots with AI order parsing, e-commerce catalogs, admin dashboards and SaaS apps. I own projects end to end, from data modelling and integrations (Gemini, Lalamove, Evolution API) to Docker-based deployment, CI and monitoring on a VPS. I run my own studio, Hal-Creative.",
    id: "Full-stack developer yang membangun dan menjalankan sistem produksi untuk bisnis kecil: bot WhatsApp dengan parsing pesanan berbasis AI, katalog e-commerce, dashboard admin, dan aplikasi SaaS. Saya memegang proyek dari awal sampai akhir, mulai dari desain data dan integrasi (Gemini, Lalamove, Evolution API) sampai deployment berbasis Docker, CI, dan monitoring di VPS. Saya menjalankan studio sendiri, Hal-Creative.",
  } satisfies Text,
  about: {
    en: [
      "I started with a single HTML page in 2018 and learned the rest by shipping. Today most of my work is for businesses that sell over WhatsApp: the bot has to understand how customers actually type, and the admin has to trust the numbers on the dashboard.",
      "I like owning the whole system. I write the Next.js front end, the Node.js services and the database schema, then deploy it with Docker, Nginx and CI on a VPS I maintain myself. Through Hal-Creative I also handle support for the clients I build for.",
    ],
    id: [
      "Saya mulai dari satu halaman HTML di 2018 dan belajar sisanya sambil membangun proyek sungguhan. Sekarang sebagian besar pekerjaan saya untuk bisnis yang berjualan lewat WhatsApp: bot harus paham cara pelanggan mengetik, dan admin harus bisa percaya angka di dashboard.",
      "Saya suka memegang sistem secara utuh. Saya menulis front end Next.js, layanan Node.js, dan skema database, lalu men-deploy-nya dengan Docker, Nginx, dan CI di VPS yang saya kelola sendiri. Lewat Hal-Creative saya juga menangani support untuk klien yang sistemnya saya bangun.",
    ],
  } satisfies TextList,
};

export const skills: { group: Text; items: string[] }[] = [
  { group: { en: "Languages", id: "Bahasa" }, items: ["TypeScript", "JavaScript", "PHP", "SQL"] },
  { group: { en: "Front end", id: "Front end" }, items: ["Next.js", "React", "Tailwind CSS", "Vite"] },
  { group: { en: "Back end", id: "Back end" }, items: ["Node.js", "Express", "NestJS", "Prisma", "PostgreSQL", "Redis", "Supabase", "CodeIgniter"] },
  { group: { en: "AI & messaging", id: "AI & pesan" }, items: ["Gemini", "Evolution API", "Baileys", "discord.js", "Lalamove API"] },
  { group: { en: "Infrastructure", id: "Infrastruktur" }, items: ["Docker", "Nginx", "Linux VPS", "GitHub Actions", "PM2"] },
];

export const testimonial = {
  author: "Wahyudi",
  role: { en: "CEO, Karya Mandiri Dental", id: "CEO, Karya Mandiri Dental" } satisfies Text,
  quote: {
    en: "Fauzan transformed our manual operations into a seamless digital system. His ability to translate business needs into robust solutions is rare.",
    id: "Fauzan mengubah operasional kami yang serba manual menjadi sistem digital yang mulus. Kemampuannya menerjemahkan kebutuhan bisnis menjadi solusi yang andal itu langka.",
  } satisfies Text,
};
