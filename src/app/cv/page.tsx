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
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 p-8 md:p-16 print:p-0 font-sans">
      {/* ACTION BAR */}
      <div className="max-w-5xl mx-auto mb-10 flex justify-between items-center print:hidden">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="hover:bg-slate-100 text-slate-600"
        >
          ← Back to Portfolio
        </Button>
        <Button 
          onClick={handlePrint}
          className="bg-slate-900 text-white hover:bg-slate-800 px-8 rounded-full font-bold transition-all shadow-lg"
        >
          <Printer className="w-4 h-4 mr-2" />
          Export as PDF
        </Button>
      </div>

      {/* CV MAIN WRAPPER */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto bg-white print:shadow-none shadow-[0_0_80px_rgba(0,0,0,0.03)] border border-slate-100 print:border-none overflow-hidden rounded-[2rem] print:rounded-none"
      >
        {/* TOP HEADER SECTION */}
        <div className="bg-slate-900 text-white p-12 md:p-16 flex flex-col md:flex-row items-center gap-10">
           <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shrink-0 rotate-1">
              <Image src="/profile.jpg" alt="M Fauzan Haikal Mugni" fill className="object-cover" />
           </div>
           <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3">M FAUZAN <span className="text-white/50">HAIKAL M.</span></h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 font-medium tracking-widest text-xs">
                <span className="flex items-center gap-2"><Mail className="w-3 h-3 text-white" /> CORNWERSO5118@GMAIL.COM</span>
                <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-white" /> BEKASI, INDONESIA</span>
                <span className="flex items-center gap-2 font-bold text-white tracking-normal text-sm border-b border-white/20 pb-0.5">FULL-STACK DEVELOPER</span>
              </div>
           </div>
           <div className="hidden lg:block">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://portofolio-prayersrain.vercel.app/`} className="w-20 h-20 invert opacity-80" alt="QR" />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* LEFT SIDE: MAIN CONTENT (70%) */}
          <div className="md:col-span-8 p-12 md:p-16 border-r border-slate-50">
            
            {/* ABOUT ME */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <Code className="w-5 h-5 text-slate-400" />
                <h2 className="text-lg font-black uppercase tracking-widest">Professional Summary</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">
                Software Developer focused on building high-performance web systems. 
                Expertise in the <span className="text-slate-900 font-bold">Modern Web Ecosystem</span> with a passion for clean code, 
                scalable architecture, and seamless user experiences. Experienced in managing 
                the end-to-end development lifecycle from concept to production.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8 text-slate-900">
                <Briefcase className="w-5 h-5 text-slate-400" />
                <h2 className="text-lg font-black uppercase tracking-widest">Work History</h2>
              </div>
              <div className="space-y-12">
                {journeyData.filter(i => i.title !== "Undergraduate Student (Semester 8)").map((item, idx) => (
                  <div key={idx} className="group relative">
                    <p className="font-mono text-[11px] font-bold text-slate-400 mb-2">{item.year}</p>
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-1">{item.title}</h3>
                    <p className="text-slate-500 font-bold mb-4 uppercase text-xs tracking-wider">{item.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-100 pl-4">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section>
              <div className="flex items-center gap-3 mb-8 text-slate-900">
                <Laptop className="w-5 h-5 text-slate-400" />
                <h2 className="text-lg font-black uppercase tracking-widest">Featured Projects</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {projectsData.slice(0, 3).map((project, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors bg-[#FAFAFA]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">{project.title}</h3>
                      <ExternalLink className="w-4 h-4 text-slate-300" />
                    </div>
                    <p className="text-slate-500 text-xs mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(s => (
                        <span key={s} className="text-[9px] font-mono font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600 uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: SIDEBAR (30%) */}
          <div className="md:col-span-4 bg-[#F8F9FA] p-12 md:p-16 space-y-16">
            
            {/* EDUCATION */}
            <section>
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <GraduationCap className="w-5 h-5 text-slate-400" />
                <h2 className="text-xs font-black uppercase tracking-[0.2em]">Education</h2>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-[10px] text-slate-400 font-bold mb-1 italic">2021 - CURRENT</p>
                  <p className="text-sm font-black text-slate-900 leading-tight">INFORMATICS ENGINEERING</p>
                  <p className="text-xs text-slate-500 font-bold mt-1">GUNADARMA UNIVERSITY</p>
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
              <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-400">Technical Arsenal</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase mb-3">Languages & Frameworks</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React", "TypeScript", "Node.js", "Python", "PHP", "Laravel"].map(s => (
                      <span key={s} className="px-2 py-1 bg-slate-900 text-white text-[9px] font-bold rounded uppercase tracking-tighter">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase mb-3">Web Core & Infrastructure</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["HTML5", "CSS3", "PostgreSQL", "Prisma", "PWA", "Tailwind"].map(s => (
                      <span key={s} className="px-2 py-1 bg-white border border-slate-200 text-slate-900 text-[9px] font-bold rounded uppercase tracking-tighter">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* LANGUAGES */}
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-400">Languages</h2>
              <div className="space-y-3">
                 <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Indonesian</span>
                    <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                 </div>
                 <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">English</span>
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                 </div>
              </div>
            </section>

            {/* SOCIALS */}
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-400">Find Me Online</h2>
              <div className="space-y-4">
                 <a href="https://github.com/prayersrain" className="flex items-center gap-3 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors">
                    <GithubIcon className="w-4 h-4 text-slate-900" /> GITHUB.COM/PRAYERSRAIN
                 </a>
                 <a href="#" className="flex items-center gap-3 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors">
                    <Globe className="w-4 h-4 text-slate-900" /> PRAYERSRAIN.VERCEL.APP
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

      <style jsx global>{`
        @media print {
          body { background: white !important; color: #0f172a !important; padding: 0 !important; }
          @page { margin: 0; size: A4; }
          .print\:hidden { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          h1, h2, h3, h4, p, span, div { color: #0f172a !important; }
          .bg-slate-900 { background-color: #0f172a !important; color: white !important; }
          .text-white { color: white !important; }
          .text-slate-400 { color: #94a3b8 !important; }
          .bg-white\/5 { background-color: rgba(255,255,255,0.05) !important; }
          .rotate-1 { transform: none !important; }
        }
      `}</style>
    </div>
  );
}
