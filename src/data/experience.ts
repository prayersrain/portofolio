import type { Text } from "@/lib/i18n";

export type ExperienceItem = {
  period: Text;
  title: Text;
  org: string;
  description: Text;
};

export const experience: ExperienceItem[] = [
  {
    period: { en: "2025 – Present", id: "2025 – Sekarang" },
    title: { en: "Founder", id: "Founder" },
    org: "Hal-Creative",
    description: {
      en: "Run my own studio that builds, hosts and supports web systems, WhatsApp bots and SaaS for small businesses, including Karya Mandiri Dental and Yoyo Bolen.",
      id: "Menjalankan studio sendiri yang membangun, meng-hosting, dan menangani support sistem web, bot WhatsApp, dan SaaS untuk bisnis kecil, termasuk Karya Mandiri Dental dan Yoyo Bolen.",
    },
  },
  {
    period: { en: "2022 – Present", id: "2022 – Sekarang" },
    title: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
    org: "Karya Mandiri Dental",
    description: {
      en: "Built and run the company's whole digital system: a Next.js catalog and ordering site, a role-based admin dashboard, and a Gemini-powered WhatsApp bot, all in one monorepo deployed with Docker and CI to a single VPS.",
      id: "Membangun dan menjalankan seluruh sistem digital perusahaan: situs katalog dan pemesanan Next.js, dashboard admin berbasis peran, dan bot WhatsApp bertenaga Gemini, semuanya dalam satu monorepo yang di-deploy dengan Docker dan CI ke satu VPS.",
    },
  },
  {
    period: { en: "2023 – Present", id: "2023 – Sekarang" },
    title: { en: "Bot Developer & System Integrator", id: "Bot Developer & System Integrator" },
    org: "Yoyo Bolen",
    description: {
      en: "Designed the WhatsApp ordering system that handles 100+ customer chats a day: AI order parsing, Lalamove delivery quotes and dispatch, OCR payment checks, and an admin dashboard for orders and stock.",
      id: "Merancang sistem pemesanan WhatsApp yang menangani 100+ chat pelanggan per hari: parsing pesanan dengan AI, ongkir dan pemanggilan kurir Lalamove, pengecekan bukti bayar dengan OCR, dan dashboard admin untuk pesanan dan stok.",
    },
  },
];

export const education: ExperienceItem[] = [
  {
    period: { en: "2019 – 2022", id: "2019 – 2022" },
    title: { en: "Software Engineering", id: "Rekayasa Perangkat Lunak" },
    org: "SMKN 1 Kota Bekasi",
    description: {
      en: "Graduated with honors. Programming, databases and web development.",
      id: "Lulus dengan pujian. Pemrograman, database, dan pengembangan web.",
    },
  },
];
