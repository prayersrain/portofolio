export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export type Text = Record<Locale, string>;
export type TextList = Record<Locale, string[]>;

/** English lives at the site root, Indonesian under /id. */
export function localePath(locale: Locale, path = "/") {
  if (locale === "en") return path;
  return path === "/" ? "/id" : `/id${path}`;
}

/** Same page in the other language, for the header switch and hreflang. */
export function switchLocalePath(pathname: string, to: Locale) {
  const base = pathname === "/id" ? "/" : pathname.replace(/^\/id(?=\/)/, "");
  return localePath(to, base);
}

const en = {
  nav: { work: "Work", experience: "Experience", about: "About", contact: "Contact", cv: "CV", openMenu: "Open menu", closeMenu: "Close menu", language: "Language" },
  hero: {
    role: "Full-Stack Developer",
    headline: "I build WhatsApp bots, SaaS and web systems that real businesses run on.",
    intro:
      "From the database and the AI bot to the VPS it runs on, I design, build and host the whole stack. Through my studio Hal-Creative I work with businesses like Karya Mandiri Dental and Yoyo Bolen.",
    available: "Available for work",
    viewWork: "View my work",
    cv: "View CV",
  },
  work: {
    title: "Selected work",
    subtitle: "Systems in production, open-source tools and client concepts.",
    viewCase: "Read case study",
  },
  badge: { live: "Live", private: "Private repo", "open-source": "Open source", concept: "Client concept", "in-house": "In-house" },
  experience: { title: "Experience" },
  about: { title: "About", stack: "Tools I use" },
  testimonial: { title: "What clients say" },
  contact: {
    title: "Let's build something",
    body: "Have a project in mind or need a developer who can own it end to end? Send a message and I'll reply on WhatsApp or email.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send via WhatsApp",
    note: "Opens WhatsApp with your message filled in.",
    greeting: "Hi Fauzan! New message from your portfolio:",
  },
  project: {
    back: "All work",
    role: "Role",
    year: "Year",
    client: "Client",
    stack: "Stack",
    problem: "The problem",
    solution: "The solution",
    built: "What I built",
    live: "Visit site",
    source: "Source code",
    release: "Download release",
    privateRepo: "Private repository",
    livePreview: "Live preview. Scroll and click inside the frames.",
    next: "Next project",
  },
  cv: {
    download: "Download PDF",
    back: "Back to portfolio",
    summary: "Summary",
    experience: "Experience",
    projects: "Selected projects",
    skills: "Skills",
    education: "Education",
  },
  footer: { rights: "All rights reserved." },
  notFound: { title: "Page not found", back: "Back to home" },
};

const id: typeof en = {
  nav: { work: "Karya", experience: "Pengalaman", about: "Tentang", contact: "Kontak", cv: "CV", openMenu: "Buka menu", closeMenu: "Tutup menu", language: "Bahasa" },
  hero: {
    role: "Full-Stack Developer",
    headline: "Saya membangun bot WhatsApp, SaaS, dan sistem web yang dipakai bisnis sungguhan.",
    intro:
      "Dari database dan bot AI sampai VPS tempat semuanya berjalan, saya merancang, membangun, dan meng-hosting seluruhnya. Lewat studio saya, Hal-Creative, saya bekerja dengan bisnis seperti Karya Mandiri Dental dan Yoyo Bolen.",
    available: "Terbuka untuk proyek",
    viewWork: "Lihat karya saya",
    cv: "Lihat CV",
  },
  work: {
    title: "Karya pilihan",
    subtitle: "Sistem yang sudah berjalan, tool open source, dan konsep untuk klien.",
    viewCase: "Baca studi kasus",
  },
  badge: { live: "Live", private: "Repo privat", "open-source": "Open source", concept: "Konsep klien", "in-house": "Internal" },
  experience: { title: "Pengalaman" },
  about: { title: "Tentang", stack: "Tool yang saya pakai" },
  testimonial: { title: "Kata klien" },
  contact: {
    title: "Mari bangun sesuatu",
    body: "Punya ide proyek atau butuh developer yang bisa pegang dari awal sampai jalan? Kirim pesan, saya balas lewat WhatsApp atau email.",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    send: "Kirim lewat WhatsApp",
    note: "Membuka WhatsApp dengan pesan yang sudah terisi.",
    greeting: "Halo Fauzan! Pesan baru dari portfolio:",
  },
  project: {
    back: "Semua karya",
    role: "Peran",
    year: "Tahun",
    client: "Klien",
    stack: "Teknologi",
    problem: "Masalahnya",
    solution: "Solusinya",
    built: "Yang saya bangun",
    live: "Kunjungi situs",
    source: "Kode sumber",
    release: "Unduh rilis",
    privateRepo: "Repositori privat",
    livePreview: "Preview live. Scroll dan klik langsung di dalam bingkai.",
    next: "Proyek berikutnya",
  },
  cv: {
    download: "Unduh PDF",
    back: "Kembali ke portfolio",
    summary: "Ringkasan",
    experience: "Pengalaman",
    projects: "Proyek pilihan",
    skills: "Keahlian",
    education: "Pendidikan",
  },
  footer: { rights: "Hak cipta dilindungi." },
  notFound: { title: "Halaman tidak ditemukan", back: "Kembali ke beranda" },
};

export const ui: Record<Locale, typeof en> = { en, id };
