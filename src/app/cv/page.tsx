"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Globe, ExternalLink, Download, Printer, Code, Briefcase, GraduationCap, Laptop } from "lucide-react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { journeyData } from "@/data/journey";

// Custom Github Icon
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 md:p-16 print:p-0">
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
              <Image src="/profile.jpg" alt="M Fauzan Haikal Mugni" fill className="object-cover grayscale" />
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
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://portofolio-prayersrain.vercel.app/`} className="w-20 h-20 invert opacity-80" alt="QR" />
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
                    {["Next.js", "React", "TypeScript", "Node.js", "Python", "PHP", "Laravel"].map(s => (
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
                 <a href="https://github.com/prayersrain" className="flex items-center gap-3 text-xs font-medium text-slate-600 hover:text-primary transition-colors">
                    <GithubIcon className="w-4 h-4 text-slate-900" /> github.com/prayersrain
                 </a>
                 <a href="#" className="flex items-center gap-3 text-xs font-medium text-slate-600 hover:text-primary transition-colors">
                    <Globe className="w-4 h-4 text-slate-900" /> prayersrain.vercel.app
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

      {/* PRINT STYLES */}
      <style jsx global>{`
        @media print {
          header, footer, nav, aside, .print\:hidden, button {
            display: none !important;
          }
          
          body { 
            background: #f1f5f9 !important; /* The paper background */
            margin: 0 !important;
            padding: 0.6cm !important; /* The "floating" gap */
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .cv-container {
            display: block !important;
            width: 19.8cm !important; /* Leave space for margins */
            height: 28.5cm !important; /* Fit within A4 height */
            margin: 0 auto !important;
            background: white !important;
            border-radius: 2rem !important;
            overflow: hidden !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
            border: 1px solid #e2e8f0 !important;
          }

          .cv-header {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 0.8cm 1.2cm !important;
            background-color: #0f172a !important;
            color: white !important;
            gap: 1.5rem !important;
          }

          .cv-header h1 { font-size: 20pt !important; margin: 0 !important; line-height: 1.1 !important; color: white !important; font-weight: 700 !important; }
          .cv-header .w-44 { width: 2.8cm !important; height: 2.8cm !important; border-width: 2px !important; border-color: rgba(255,255,255,0.1) !important; border-radius: 0 !important; }
          .cv-header .text-xs { font-size: 7.5pt !important; color: #94a3b8 !important; }
          
          /* Force QR visibility and size */
          .cv-header .hidden.lg\:block {
            display: block !important;
            opacity: 1 !important;
          }
          .cv-header .w-20 { width: 2cm !important; height: 2cm !important; }

          .cv-grid-wrapper {
            display: flex !important;
            flex-direction: row !important;
            width: 100% !important;
            height: calc(28.5cm - 4.4cm) !important;
          }

          .cv-main-content {
            flex: 7 !important;
            padding: 0.6cm 1cm !important;
            background: white !important;
          }

          .cv-sidebar {
            flex: 3 !important;
            padding: 0.6cm 0.8cm !important;
            background-color: #f8f9fa !important;
            font-size: 8pt !important;
            -webkit-print-color-adjust: exact !important;
          }

          h2 { font-size: 9.5pt !important; margin-bottom: 0.4rem !important; color: #0f172a !important; font-weight: 900 !important; }
          p, li { line-height: 1.25 !important; margin-bottom: 0.2rem !important; font-size: 9pt !important; color: #475569 !important; }
          
          section {
            margin-bottom: 0.8rem !important;
          }

          /* Compact Project Cards */
          .cv-main-content .bg-\[\#FAFAFA\] {
            padding: 0.5rem 0.8rem !important;
            margin-bottom: 0.4rem !important;
            border-radius: 1rem !important;
            border: 1px solid #f1f5f9 !important;
          }

          .space-y-12 > * + * { margin-top: 0.4rem !important; }
          .space-y-16 > * + * { margin-top: 0.8rem !important; }

          @page {
            margin: 0;
            size: A4;
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
