"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Globe, ExternalLink, Printer, Code, Briefcase, GraduationCap, Laptop } from "lucide-react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { journeyData } from "@/data/journey";
import GithubIcon from "@/components/GithubIcon";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-root min-h-screen bg-neutral-950 text-white p-8 md:p-16 print:p-0">
      {/* ACTION BAR */}
      <div className="max-w-5xl mx-auto mb-10 flex justify-between items-center print:hidden">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="text-white/60 hover:text-white uppercase font-mono text-xs tracking-widest"
        >
          ← Back to Portfolio
        </Button>
        <Button 
          onClick={handlePrint}
          className="bg-primary text-black hover:bg-white rounded-none font-black px-8 py-6 h-auto uppercase tracking-widest text-xs transition-colors"
        >
          <Printer className="w-4 h-4 mr-2" />
          Export as PDF
        </Button>
      </div>

      {/* CV MAIN WRAPPER */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="cv-container max-w-5xl mx-auto bg-white text-black print:shadow-none shadow-2xl border border-white/5 overflow-hidden rounded-none print:border-none"
      >
        {/* TOP HEADER SECTION */}
        <div className="cv-header bg-black text-white p-12 md:p-16 flex flex-col md:flex-row items-center gap-10">
           <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-none overflow-hidden border-4 border-primary/20 shrink-0">
              <Image src="/profile.jpg" alt="M Fauzan Haikal Mugni" fill className="object-cover" />
           </div>
           <div className="flex-1 text-center md:text-left space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                M. Fauzan Haikal Mugni
              </h1>
              <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase">Full-Stack Developer & Software Engineer</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-white/50 font-medium text-[11px] pt-2">
                <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-primary/70" /> cornwerso5118@gmail.com</span>
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary/70" /> Bekasi, Indonesia</span>
              </div>
           </div>
           <div className="hidden lg:block">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://prayersrain.cloud`} className="w-20 h-20 invert opacity-80" alt="QR" />
              </div>
           </div>
        </div>

        <div className="cv-grid-wrapper grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* LEFT SIDE: MAIN CONTENT (70%) */}
          <div className="cv-main-content md:col-span-8 p-12 md:p-16 border-r border-slate-50">
            
            {/* ABOUT ME */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <Code className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 border-b-2 border-primary/20 pb-1">Professional Summary</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-700 font-normal">
                Software Developer focused on building high-performance web systems. 
                Expertise in the <span className="text-slate-900 font-semibold">Modern Web Ecosystem</span> with a passion for clean code, 
                scalable architecture, and seamless user experiences. Experienced in managing 
                the end-to-end development lifecycle from concept to production.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8 text-slate-900">
                <Briefcase className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 border-b-2 border-primary/20 pb-1">Work History</h2>
              </div>
              <div className="space-y-12">
                {journeyData.filter(i => i.title !== "Undergraduate Student (Semester 8)").map((item, idx) => (
                  <div key={idx} className="group relative">
                    <p className="font-mono text-[11px] font-bold text-slate-400 mb-2">{item.year}</p>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">{item.title}</h3>
                    <p className="text-primary font-semibold mb-4 uppercase text-xs tracking-wider">{item.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-100 pl-4">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section>
              <div className="flex items-center gap-3 mb-8 text-slate-900">
                <Laptop className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 border-b-2 border-primary/20 pb-1">Featured Projects</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {projectsData.slice(0, 3).map((project, idx) => (
                  <div key={idx} className="p-6 rounded-none border border-slate-100 hover:border-primary/20 transition-colors bg-[#FAFAFA]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight">{project.title}</h3>
                      <ExternalLink className="w-4 h-4 text-slate-300" />
                    </div>
                    <p className="text-slate-500 text-xs mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(s => (
                        <span key={s} className="text-[9px] font-mono font-bold px-2 py-0.5 bg-white border border-slate-200 text-slate-600 uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: SIDEBAR (30%) */}
          <div className="cv-sidebar md:col-span-4 bg-[#F8F9FA] p-12 md:p-16 space-y-16">
            
            {/* EDUCATION */}
            <section>
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <GraduationCap className="w-5 h-5 text-slate-400" />
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em]">Education</h2>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-[10px] text-slate-400 font-bold mb-1 italic">2021 - CURRENT</p>
                  <p className="text-xs font-bold text-slate-900 leading-tight">INFORMATICS ENGINEERING</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">GUNADARMA UNIVERSITY</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-400 font-bold mb-1 italic">2018 - 2021</p>
                  <p className="text-sm font-black text-slate-900 leading-tight">INFORMATION TECHNOLOGY</p>
                  <p className="text-xs text-slate-500 font-bold mt-1">SMKN 1 KOTA BEKASI</p>
                </div>
              </div>
            </section>

            {/* TECHNICAL SKILLS */}
            <section>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6 text-slate-400">Technical Arsenal</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase mb-3 border-l-2 border-primary/40 pl-2">Languages & Frameworks</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React", "TypeScript", "Node.js", "PHP", "Express"].map(s => (
                      <span key={s} className="px-2 py-1 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase mb-3 border-l-2 border-primary/40 pl-2">Web Core & Infrastructure</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["HTML5", "CSS3", "PostgreSQL", "Prisma", "PWA", "Tailwind"].map(s => (
                      <span key={s} className="px-2 py-1 bg-white border border-slate-200 text-slate-900 text-[9px] font-bold uppercase tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* LANGUAGES */}
            <section>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6 text-slate-400">Languages</h2>
              <div className="space-y-3">
                 <div className="flex justify-between items-center bg-white p-3 rounded-none border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Indonesian</span>
                    <span className="text-[10px] font-medium text-slate-400 italic">Native</span>
                 </div>
                 <div className="flex justify-between items-center bg-white p-3 rounded-none border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">English</span>
                    <span className="text-[10px] font-medium text-slate-400 italic">Professional</span>
                 </div>
              </div>
            </section>

            {/* SOCIALS */}
            <section>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6 text-slate-400">Find Me Online</h2>
              <div className="space-y-4">
                 <a href="https://github.com/prayersrain" target="_blank" className="flex items-center gap-3 text-xs font-medium text-slate-600 hover:text-primary transition-colors">
                    <GithubIcon className="w-4 h-4 text-slate-900" /> github.com/prayersrain
                 </a>
                 <a href="https://prayersrain.cloud" target="_blank" className="flex items-center gap-3 text-xs font-medium text-slate-600 hover:text-primary transition-colors">
                    <Globe className="w-4 h-4 text-slate-900" /> prayersrain.cloud
                 </a>
                 <a href="https://discord.gg/hnqUfxuCdk" target="_blank" className="flex items-center gap-3 text-xs font-medium text-slate-600 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-slate-900"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg> discord.gg/hnqUfxuCdk
                 </a>
              </div>
            </section>
          </div>
        </div>
      </motion.div>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto mt-12 text-center text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 print:hidden pb-12">
        ESTABLISHED 2026 // DIGITAL MANIFESTO
      </footer>

      {/* === SINGLE-COLUMN PRINT CV (hidden on screen, shows on print) === */}
      <div className="cv-print-only hidden print:block bg-white text-black font-sans">
        <div style={{ maxWidth: '190mm', margin: '0 auto', padding: '8mm 12mm' }}>

          {/* HEADER with photo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5mm', marginBottom: '4mm', borderBottom: '2px solid #0f172a', paddingBottom: '3mm' }}>
            <img src="/profile.jpg" alt="" style={{ width: '25mm', height: '25mm', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            <div>
              <h1 style={{ fontSize: '20pt', fontWeight: 900, margin: 0, color: '#0f172a', textTransform: 'uppercase' }}>
                M. Fauzan Haikal Mugni
              </h1>
              <p style={{ fontSize: '10.5pt', color: '#475569', margin: '2mm 0 0 0' }}>
                Full-Stack Developer & Software Engineer
              </p>
              <p style={{ fontSize: '9pt', color: '#64748b', margin: '1mm 0 0 0' }}>
                Bekasi, Indonesia &nbsp;|&nbsp; cornwerso5118@gmail.com &nbsp;|&nbsp; github.com/prayersrain &nbsp;|&nbsp; prayersrain.cloud
              </p>
            </div>
          </div>

          {/* SUMMARY */}
          <div style={{ marginBottom: '4mm' }}>
            <h2 style={{ fontSize: '10.5pt', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '1mm', marginBottom: '2mm' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '9pt', lineHeight: 1.35, color: '#334155', margin: 0 }}>
              Software engineer with 4+ years building production web applications, WhatsApp bots, and self-hosted infrastructure. Currently managing 3 live systems: a dental equipment e-commerce platform, a 100+ daily order bakery WhatsApp bot with AI NLU, and a Discord community server. Proficient across the full stack — TypeScript, Node.js, PHP, Next.js, PostgreSQL, Docker — with a focus on pragmatic, maintainable code and self-hosted infrastructure.
            </p>
          </div>

          {/* TECHNICAL SKILLS */}
          <div style={{ marginBottom: '4mm' }}>
            <h2 style={{ fontSize: '10.5pt', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '1mm', marginBottom: '2mm' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2mm 8mm', fontSize: '9pt', color: '#334155', lineHeight: 1.4 }}>
              <span><strong>Languages:</strong> TypeScript, JavaScript, PHP, Node.js</span>
              <span><strong>Frontend:</strong> Next.js, React, Tailwind CSS, PWA</span>
              <span><strong>Backend:</strong> Express, CodeIgniter, Prisma ORM, REST APIs</span>
              <span><strong>Databases:</strong> PostgreSQL, Supabase, Redis</span>
              <span><strong>Infra:</strong> Docker, Docker Compose, Nginx, PM2, SSL</span>
              <span><strong>AI/ML:</strong> Gemini API, NLU pipelines, prompt engineering</span>
              <span><strong>APIs:</strong> WhatsApp (Baileys), Lalamove, Evolution, Discord</span>
              <span><strong>Tools:</strong> Git, Linux, VPS management, Bash scripting</span>
            </div>
          </div>

          {/* EXPERIENCE — tight */}
          <div style={{ marginBottom: '2mm' }}>
            <h2 style={{ fontSize: "10.5pt", fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5mm', marginBottom: "3mm" }}>
              Work Experience
            </h2>
            {[
              { year: '2022–Present', title: 'Full-Stack Developer', company: 'Karya Mandiri Dental', desc: 'Architected complete digital ecosystem: Next.js e-commerce, admin dashboard (Prisma + PostgreSQL), WhatsApp bot via Gemini AI. Docker infra (8 containers), Nginx, Redis. Service booking system, warranty management, blog CMS.' },
              { year: '2023–Present', title: 'Bot Developer', company: 'Yoyo Bakery', desc: 'WhatsApp auto-order bot handling 100+ daily transactions. NLU pipeline with Gemini AI for Indonesian order parsing. Lalamove delivery dispatch via HMAC webhook. PWA dashboard on Vercel with Supabase.' },
              { year: '2024', title: 'Community Developer', company: 'Independent (Discord)', desc: 'Custom Discord bot (discord.js v14) for automation and moderation. 24/7 via PM2. discord.gg/hnqUfxuCdk' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: "3mm" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: "9.5pt", fontWeight: 700, color: '#0f172a', margin: 0 }}>{item.title} — <span style={{ fontWeight: 400, color: '#64748b' }}>{item.company}</span></h3>
                  <span style={{ fontSize: "8pt", color: "#94a3b8", whiteSpace: "nowrap", marginLeft: "3mm" }}>{item.year}</span>
                </div>
                <p style={{ fontSize: "9pt", lineHeight: 1.3, color: '#334155', margin: '0.3mm 0 0 0' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* EDUCATION — 1 line */}
          <div style={{ marginBottom: "4mm" }}>
            <h2 style={{ fontSize: "10.5pt", fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5mm', marginBottom: "3mm" }}>
              Education
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: "9pt" }}>
              <span><strong style={{ color: '#0f172a' }}>Universitas Gunadarma</strong> — Informatics Engineering, Semester 8</span>
              <span style={{ color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: '2mm' }}>2021–Present</span>
            </div>
          </div>

          {/* KEY PROJECTS — compact */}
          <div>
            <h2 style={{ fontSize: "10.5pt", fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5mm', marginBottom: "3mm" }}>
              Key Projects
            </h2>
            {[
              { name: 'KMD System', url: 'karyamandiridental.cloud', stack: 'Next.js 14, PostgreSQL, Prisma, Docker, Gemini AI, Evolution API', desc: 'E-commerce + AI WhatsApp bot for dental equipment. 8 Docker containers, ISR, SEO.' },
              { name: 'Yoyo Bakery Bot', url: 'yoyobolen.cloud', stack: 'Node.js, Baileys, Gemini AI, Supabase, Lalamove API', desc: 'WhatsApp order bot 100+ orders/day, NLU parser, PWA dashboard.' },
              { name: 'Discord Community Hub', url: 'discord.gg/hnqUfxuCdk', stack: 'Node.js, discord.js v14, PM2', desc: 'Custom automation & moderation bot, 24/7 VPS deployment.' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2mm', marginBottom: "2mm", fontSize: "8.5pt" }}>
                <div style={{ minWidth: '28mm' }}>
                  <p style={{ fontWeight: 700, color: '#0f172a', margin: 0 }}>{p.name}</p>
                  <p style={{ color: '#94a3b8', margin: 0, fontSize: '6.5pt' }}>{p.url}</p>
                </div>
                <div>
                  <p style={{ color: '#64748b', margin: 0, fontSize: "8pt" }}>{p.stack}</p>
                  <p style={{ color: '#334155', margin: '0.2mm 0 0 0', lineHeight: 1.25 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRINT STYLES */}
      <style jsx global>{`
        @media print {
          @page { size: A4; margin: 0; }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }

          /* Hide all web UI — only show the dedicated print CV */
          .cv-root > *:not(.cv-print-only) {
            display: none !important;
          }

          .cv-root {
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
            min-height: auto !important;
          }

          .cv-root .hidden.print\\:block {
            display: block !important;
          }

          .cv-print-only {
            display: block !important;
            font-family: 'Inter', Arial, Helvetica, sans-serif !important;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
