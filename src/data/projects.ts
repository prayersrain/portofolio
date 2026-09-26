import type { Text, TextList } from "@/lib/i18n";

export type ProjectBadge = "live" | "private" | "open-source" | "concept" | "in-house";

export type Project = {
  slug: string;
  title: string;
  client?: Text;
  year: string;
  role: Text;
  tagline: Text;
  /** One concrete result or fact, shown in accent on the card. */
  impact: Text;
  badges: ProjectBadge[];
  stack: string[];
  links: { live?: string; repo?: string; release?: string };
  /** Embedded in laptop and phone frames on the case study page. */
  preview?: string;
  image?: string;
  imageMobile?: string;
  demo?: string;
  problem: Text;
  solution: Text;
  built: TextList;
  note?: Text;
};

export const projects: Project[] = [
  {
    slug: "karya-mandiri-dental",
    title: "Karya Mandiri Dental",
    client: { en: "Dental equipment supplier, Indonesia", id: "Supplier alat kedokteran gigi, Indonesia" },
    year: "2022",
    role: { en: "Full-stack developer, end to end", id: "Full-stack developer, dari awal sampai akhir" },
    tagline: {
      en: "Catalog site, admin dashboard and AI WhatsApp bot for a dental equipment supplier.",
      id: "Situs katalog, dashboard admin, dan bot WhatsApp AI untuk supplier alat kedokteran gigi.",
    },
    impact: {
      en: "One monorepo, 9 containers, CI-gated deploys to a single VPS",
      id: "Satu monorepo, 9 container, deploy lewat CI ke satu VPS",
    },
    badges: ["live", "private"],
    stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Express", "Gemini", "Evolution API", "Docker", "GitHub Actions"],
    links: { live: "https://karyamandiridental.cloud" },
    preview: "https://karyamandiridental.cloud",
    image: "/projects/kmd/desktop.webp",
    imageMobile: "/projects/kmd/mobile.webp",
    problem: {
      en: "Karya Mandiri Dental sells equipment and technician services to dental clinics across Indonesia. Product questions, orders, service bookings and warranties were all handled by hand over WhatsApp, so every enquiry waited for a person to reply.",
      id: "Karya Mandiri Dental menjual peralatan dan jasa teknisi untuk klinik gigi di seluruh Indonesia. Pertanyaan produk, pesanan, booking servis, dan garansi semuanya ditangani manual lewat WhatsApp, jadi setiap pertanyaan harus menunggu dibalas orang.",
    },
    solution: {
      en: "A monorepo with three apps on one shared database package: a public catalog website, a role-based admin dashboard and a WhatsApp bot. Everything runs in Docker Compose on one VPS, and only commits that pass CI reach production.",
      id: "Monorepo berisi tiga aplikasi yang memakai satu paket database bersama: situs katalog publik, dashboard admin berbasis peran, dan bot WhatsApp. Semuanya berjalan di Docker Compose pada satu VPS, dan hanya commit yang lolos CI yang sampai ke produksi.",
    },
    built: {
      en: [
        "Public site with a product catalog by category, service pages, blog, FAQ and order tracking, using ISR and structured data for SEO.",
        "Admin dashboard for orders, bookings, customers, warranties, invoices, blog, knowledge base, WhatsApp inbox and an audit log, with role-based access.",
        "WhatsApp bot on Evolution API with Gemini that answers product questions, books technician visits, sends booking and warranty reminders and generates PDF documents.",
        "Docker Compose stack with PostgreSQL 16, Redis 7 and Nginx, plus self-hosted analytics and uptime monitoring. Merges to main deploy the exact tested commit and run health checks.",
      ],
      id: [
        "Situs publik dengan katalog produk per kategori, halaman layanan, blog, FAQ, dan lacak pesanan, memakai ISR dan structured data untuk SEO.",
        "Dashboard admin untuk pesanan, booking, pelanggan, garansi, invoice, blog, knowledge base, inbox WhatsApp, dan audit log, dengan akses berbasis peran.",
        "Bot WhatsApp di Evolution API dengan Gemini yang menjawab pertanyaan produk, mem-booking kunjungan teknisi, mengirim pengingat booking dan garansi, serta membuat dokumen PDF.",
        "Stack Docker Compose dengan PostgreSQL 16, Redis 7, dan Nginx, plus analytics dan monitoring uptime yang di-hosting sendiri. Merge ke main men-deploy commit yang persis sudah dites lalu menjalankan health check.",
      ],
    },
  },
  {
    slug: "yoyo-bolen",
    title: "Yoyo Bolen",
    client: { en: "Home bakery, Jakarta", id: "Bakery rumahan, Jakarta" },
    year: "2023",
    role: { en: "Bot developer & system integrator", id: "Bot developer & system integrator" },
    tagline: {
      en: "WhatsApp ordering for a home bakery: an AI bot takes orders, quotes delivery and checks payments.",
      id: "Pemesanan lewat WhatsApp untuk bakery rumahan: bot AI menerima pesanan, menghitung ongkir, dan mengecek pembayaran.",
    },
    impact: {
      en: "Handles 100+ customer chats a day",
      id: "Menangani 100+ chat pelanggan per hari",
    },
    badges: ["live", "private"],
    stack: ["Node.js", "TypeScript", "Express", "Evolution API", "Gemini", "Tesseract OCR", "BullMQ", "Redis", "PostgreSQL", "Prisma", "React", "Lalamove API"],
    links: { live: "https://yoyobolen.cloud" },
    preview: "https://yoyobolen.cloud",
    image: "/projects/yoyo/desktop.webp",
    imageMobile: "/projects/yoyo/mobile.webp",
    problem: {
      en: "Orders arrived as free-form WhatsApp messages. The owner had to read each one, work out the total, quote delivery by hand and check every transfer receipt before baking could start.",
      id: "Pesanan masuk sebagai pesan WhatsApp bebas. Pemilik harus membaca satu per satu, menghitung total, menghitung ongkir manual, dan mengecek setiap bukti transfer sebelum mulai produksi.",
    },
    solution: {
      en: "A WhatsApp bot that understands orders written in everyday Indonesian and walks the customer from menu to payment, plus an admin dashboard and a landing page with a live menu.",
      id: "Bot WhatsApp yang memahami pesanan dalam bahasa sehari-hari dan memandu pelanggan dari menu sampai pembayaran, ditambah dashboard admin dan landing page dengan menu live.",
    },
    built: {
      en: [
        "AI order parser that turns chat messages into structured orders, including multi-item orders, out-of-stock items and returning customers.",
        "Delivery flow: the customer shares a location, the bot quotes the fare through the Lalamove API, and the admin dispatches the courier with one command.",
        "Payment check: transfer receipts are read with local OCR (Tesseract) and verified by an LLM before the order moves on.",
        "Queue-based outbound messaging with BullMQ and Redis, so bursts of orders don't drop replies.",
        "Admin dashboard for orders, stock, customers and sales charts, and a landing page at yoyobolen.cloud with a live menu.",
      ],
      id: [
        "Parser pesanan berbasis AI yang mengubah chat menjadi pesanan terstruktur, termasuk pesanan banyak item, stok habis, dan pelanggan lama.",
        "Alur pengiriman: pelanggan kirim lokasi, bot menghitung ongkir lewat Lalamove API, dan admin memanggil kurir dengan satu perintah.",
        "Cek pembayaran: bukti transfer dibaca dengan OCR lokal (Tesseract) lalu diverifikasi LLM sebelum pesanan diproses.",
        "Pengiriman pesan berbasis antrean dengan BullMQ dan Redis, jadi balasan tidak hilang saat pesanan ramai.",
        "Dashboard admin untuk pesanan, stok, pelanggan, dan grafik penjualan, serta landing page di yoyobolen.cloud dengan menu live.",
      ],
    },
  },
  {
    slug: "viewport-studio",
    title: "Viewport Studio",
    year: "2026",
    role: { en: "Creator & maintainer", id: "Pembuat & maintainer" },
    tagline: {
      en: "Free, open-source Chrome extension to preview any website on phones, tablets and desktops side by side.",
      id: "Ekstensi Chrome gratis dan open source untuk melihat situs apa pun di HP, tablet, dan desktop secara berdampingan.",
    },
    impact: {
      en: "Up to 4 synced devices in one tab, with no debugger banner and no account",
      id: "Sampai 4 perangkat tersinkron dalam satu tab, tanpa banner debugger dan tanpa akun",
    },
    badges: ["open-source"],
    stack: ["JavaScript", "Chrome Extension MV3", "declarativeNetRequest", "Node test runner", "Playwright"],
    links: {
      repo: "https://github.com/prayersrain/viewport-studio",
      release: "https://github.com/prayersrain/viewport-studio/releases/latest",
    },
    image: "/projects/viewport/desktop.webp",
    demo: "/projects/viewport/demo.webp",
    problem: {
      en: "Chrome DevTools device mode shows one screen at a time, and extensions that emulate devices through the debugger put a \"started debugging this browser\" banner on every tab. Checking a layout on several phones meant resizing over and over.",
      id: "Mode perangkat di Chrome DevTools cuma menampilkan satu layar, dan ekstensi yang mengemulasi perangkat lewat debugger memunculkan banner \"started debugging this browser\" di setiap tab. Mengecek layout di beberapa HP berarti resize berulang-ulang.",
    },
    solution: {
      en: "An extension that turns the current tab into a device studio. Sites load in real iframes, so there is no debugger banner, and up to four devices stay in sync while you browse.",
      id: "Ekstensi yang mengubah tab aktif menjadi studio perangkat. Situs dimuat di iframe asli, jadi tidak ada banner debugger, dan sampai empat perangkat tetap sinkron saat kita browsing.",
    },
    built: {
      en: [
        "Side-by-side comparison of up to 4 devices with synced navigation and scrolling, including carousels and inner scroll areas.",
        "Screenshots with or without the device frame, including full-page captures that show sticky headers only once, and video recording to MP4.",
        "Ten phone, tablet and desktop presets, custom sizes, rotation without reloading, and a mobile user agent switch.",
        "Private by design: no network calls, analytics, remote code or build step. Covered by unit tests and Playwright end-to-end tests in CI, released under the MIT license.",
      ],
      id: [
        "Perbandingan sampai 4 perangkat berdampingan dengan navigasi dan scroll yang sinkron, termasuk carousel dan area scroll di dalam halaman.",
        "Screenshot dengan atau tanpa bingkai perangkat, termasuk tangkapan satu halaman penuh yang menampilkan header sticky sekali saja, serta rekam video ke MP4.",
        "Sepuluh preset HP, tablet, dan desktop, ukuran kustom, rotasi tanpa reload, dan pengganti user agent mobile.",
        "Privat sejak awal: tanpa panggilan jaringan, analytics, kode remote, atau build step. Diuji dengan unit test dan test end-to-end Playwright di CI, dirilis dengan lisensi MIT.",
      ],
    },
  },
  {
    slug: "kapster",
    title: "Kapster.id",
    year: "2026",
    role: { en: "Full-stack developer", id: "Full-stack developer" },
    tagline: {
      en: "Operations SaaS for barbershops: booking, schedules, cashier, customers and reports in one system.",
      id: "SaaS operasional barbershop: booking, jadwal, kasir, pelanggan, dan laporan dalam satu sistem.",
    },
    impact: {
      en: "Owner, cashier, admin and public booking apps on one NestJS API",
      id: "Aplikasi owner, kasir, admin, dan booking publik di satu API NestJS",
    },
    badges: ["live", "open-source"],
    stack: ["Next.js 16", "React 19", "TypeScript", "Vite", "NestJS", "SQLite", "Zod", "Playwright"],
    links: { live: "https://kapster.id", repo: "https://github.com/prayersrain/kapster-id-fe" },
    preview: "https://kapster.id",
    image: "/projects/kapster/desktop.webp",
    imageMobile: "/projects/kapster/mobile.webp",
    problem: {
      en: "Small barbershops juggle bookings in chat, walk-ins on paper and sales in spreadsheets, so the owner never sees one clear picture of the day.",
      id: "Barbershop kecil mengurus booking lewat chat, pelanggan walk-in di kertas, dan penjualan di spreadsheet, jadi pemilik tidak pernah melihat gambaran utuh hari itu.",
    },
    solution: {
      en: "One system for the whole shop: a marketing landing page, dashboards for owners, cashiers and admins, and a public booking page, all backed by a single API with login and role checks.",
      id: "Satu sistem untuk seluruh toko: landing page pemasaran, dashboard untuk owner, kasir, dan admin, serta halaman booking publik, semuanya di atas satu API dengan login dan cek peran.",
    },
    built: {
      en: [
        "Responsive landing page at kapster.id with a product showcase, accessible FAQ accordion, keyboard focus states and reduced-motion support.",
        "Owner, cashier and admin apps in React and Vite, plus a public booking page for customers.",
        "NestJS API with login and role-based authorization for every dashboard.",
        "Playwright tests for the main flows. Payments and paid subscriptions are not switched on yet.",
      ],
      id: [
        "Landing page responsif di kapster.id dengan showcase produk, FAQ accordion yang aksesibel, focus state untuk keyboard, dan dukungan reduced motion.",
        "Aplikasi owner, kasir, dan admin dengan React dan Vite, plus halaman booking publik untuk pelanggan.",
        "API NestJS dengan login dan otorisasi berbasis peran untuk setiap dashboard.",
        "Test Playwright untuk alur utama. Pembayaran dan langganan berbayar belum diaktifkan.",
      ],
    },
  },
  {
    slug: "lighthouse",
    title: "Lighthouse",
    client: { en: "Boutique hotel on Gili Trawangan (prospective client)", id: "Hotel butik di Gili Trawangan (calon klien)" },
    year: "2026",
    role: { en: "Design & front-end development", id: "Desain & pengembangan front end" },
    tagline: {
      en: "Marketing site and direct-booking prototype for a boutique hotel on Gili Trawangan.",
      id: "Situs pemasaran dan prototype booking langsung untuk hotel butik di Gili Trawangan.",
    },
    impact: {
      en: "Full booking flow from dates to confirmation, with no personal data in the URL or storage",
      id: "Alur booking lengkap dari tanggal sampai konfirmasi, tanpa data pribadi di URL atau storage",
    },
    badges: ["concept"],
    stack: ["React", "Vite", "JavaScript", "CSS"],
    links: { live: "https://prayersrain.cloud/lighthouse/" },
    preview: "https://prayersrain.cloud/lighthouse/",
    image: "/projects/lighthouse/desktop.webp",
    imageMobile: "/projects/lighthouse/mobile.webp",
    problem: {
      en: "A boutique hotel needed a website that matches its luxury positioning and gives guests a direct way to book.",
      id: "Sebuah hotel butik butuh situs yang sesuai dengan kesan mewahnya dan memberi tamu cara untuk booking langsung.",
    },
    solution: {
      en: "A multi-page marketing site with a full-screen video hero and villa slider, and a separate booking experience that walks guests through dates, room, rate, details and payment.",
      id: "Situs pemasaran multi-halaman dengan hero video layar penuh dan slider villa, serta pengalaman booking terpisah yang memandu tamu dari tanggal, kamar, tarif, data diri, sampai pembayaran.",
    },
    built: {
      en: [
        "Pages for villas, wellness, dining, the island, celebrations, offers and events, each with detail pages.",
        "Booking flow with date and guest validation, capacity filtering, three rate options and a transparent price breakdown.",
        "Booking state lives in the URL so refresh and the Back button work, while personal details never enter the URL or browser storage.",
        "Ambient videos, reveal animations that respect reduced motion, and a headings and body type pairing of Gloock and Figtree.",
      ],
      id: [
        "Halaman villa, wellness, dining, pulau, perayaan, promo, dan acara, masing-masing dengan halaman detail.",
        "Alur booking dengan validasi tanggal dan jumlah tamu, filter kapasitas, tiga pilihan tarif, dan rincian harga yang transparan.",
        "State booking disimpan di URL sehingga refresh dan tombol Back tetap jalan, sementara data pribadi tidak pernah masuk ke URL atau storage browser.",
        "Video ambient, animasi reveal yang menghormati reduced motion, dan pasangan font Gloock dan Figtree.",
      ],
    },
    note: {
      en: "Prototype for a prospective client. Photos, prices and hotel details are placeholders, and no real bookings or payments are made.",
      id: "Prototype untuk calon klien. Foto, harga, dan detail hotel masih contoh, dan tidak ada booking atau pembayaran sungguhan.",
    },
  },
  {
    slug: "hal-support-bot",
    title: "Hal Support Bot",
    client: { en: "Hal-Creative (my studio)", id: "Hal-Creative (studio saya)" },
    year: "2026",
    role: { en: "Built and run it", id: "Membangun dan menjalankannya" },
    tagline: {
      en: "Discord helpdesk for Hal-Creative clients: bug reports, tickets and access requests in one place.",
      id: "Helpdesk Discord untuk klien Hal-Creative: laporan bug, tiket, dan permintaan akses di satu tempat.",
    },
    impact: {
      en: "One support desk for every client project, with AI ticket summaries",
      id: "Satu meja support untuk semua proyek klien, dengan ringkasan tiket dari AI",
    },
    badges: ["in-house"],
    stack: ["Node.js", "discord.js 14", "Node test runner"],
    links: {},
    problem: {
      en: "Bug reports from different clients arrived in scattered chats with missing details, and there was no record of who asked for access to what.",
      id: "Laporan bug dari berbagai klien datang lewat chat yang tercecer dengan detail yang kurang, dan tidak ada catatan siapa meminta akses ke apa.",
    },
    solution: {
      en: "A Discord bot that gives each client project its own ticket panel and structured forms, and routes every request to me for approval.",
      id: "Bot Discord yang memberi setiap proyek klien panel tiket dan form terstruktur sendiri, lalu meneruskan setiap permintaan ke saya untuk disetujui.",
    },
    built: {
      en: [
        "Ticket panels per client project, each with its own bug channel, discussion channel and client role.",
        "Bug reports through Discord modal forms that become ticket drafts, which I accept or reject with one click.",
        "Access-request form with owner approval, and a permission policy that decides who can report bugs or post status updates.",
        "Ticket summaries from an AI agent, automated tests with the Node test runner, and 24/7 uptime on my VPS.",
      ],
      id: [
        "Panel tiket per proyek klien, masing-masing dengan channel bug, channel diskusi, dan role klien sendiri.",
        "Laporan bug lewat form modal Discord yang menjadi draft tiket, lalu saya terima atau tolak dengan satu klik.",
        "Form permintaan akses dengan persetujuan owner, dan kebijakan izin yang menentukan siapa yang boleh melapor bug atau memposting update status.",
        "Ringkasan tiket dari agent AI, test otomatis dengan Node test runner, dan berjalan 24/7 di VPS saya.",
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
