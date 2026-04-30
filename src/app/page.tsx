"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Cpu, ArrowUpRight, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

const journeyData = [
  {
    year: "2022 - Present",
    title: "Full Stack Developer",
    company: "Karya Mandiri Dental",
    description: "Responsible for designing, developing, and maintaining comprehensive digital solutions and web applications for Karya Mandiri Dental.",
  },
  {
    year: "Current",
    title: "Undergraduate Student (Semester 8)",
    company: "Universitas Gunadarma",
    description: "Pursuing a Bachelor's degree in Informatics Engineering (Teknik Industri). Focusing on software engineering and modern web technologies.",
  },
  {
    year: "Previous",
    title: "Vocational High School Student",
    company: "SMKN 1 Kota Bekasi",
    description: "Graduated with foundational knowledge in technology and engineering, preparing for a career in software development.",
  }
];

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Node.js", "PostgreSQL", "Prisma", "Framer Motion"
];

// Asymmetrical layout logic for projects
const getProjectLayout = (index: number) => {
  switch (index % 5) {
    case 0: return "md:col-span-12 h-[60vh] md:h-[80vh]"; // Full top
    case 1: return "md:col-span-7 h-[50vh] md:h-[70vh]"; // Left large
    case 2: return "md:col-span-5 h-[50vh] md:h-[60vh] md:mt-24"; // Right short, offset down
    case 3: return "md:col-span-5 h-[50vh] md:h-[60vh]"; // Left short
    case 4: return "md:col-span-7 h-[50vh] md:h-[70vh] md:-mt-16"; // Right large, offset up
    default: return "md:col-span-12 h-[60vh]";
  }
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen overflow-hidden bg-black selection:bg-primary/30 scroll-smooth">
      
      {/* Flashlight Mouse Tracking Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04), transparent 40%)`
        }}
      />

      {/* --- 1. HERO SECTION (Asymmetrical & Unique) --- */}
      <section id="home" className="relative flex flex-col justify-center min-h-screen px-6 md:px-12 pt-24 pb-10 z-10 max-w-7xl mx-auto w-full">
        
        {/* Floating Background Icons - Rotating CPU */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 top-40 opacity-10 text-primary pointer-events-none -z-10"
        >
          <Cpu className="w-64 h-64 md:w-[400px] md:h-[400px]" strokeWidth={1} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 mt-10">
          <div className="lg:col-span-9 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm border-white/20 bg-white/5 rounded-full backdrop-blur-sm flex inline-flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Porto
              </Badge>
              <h1 className="text-6xl md:text-[8rem] font-extrabold tracking-tighter leading-[0.9] uppercase">
                Digital <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 italic">Architect.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-3xl text-muted-foreground max-w-2xl font-light border-l-2 border-primary pl-6"
            >
              Hi, I'm Fauzan. I engineer <span className="text-white font-medium">highly-performant</span> and visually stunning web applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 pt-6"
            >
              <Link href="#projects">
                <Button size="lg" className="rounded-none px-8 h-16 text-lg group bg-white text-black hover:bg-white/90">
                  See My Work
                  <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:flex lg:col-span-3 justify-end items-center">
             <div className="relative w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                <div className="absolute inset-2 border border-white/10 rounded-full border-dashed animate-spin-slow"></div>
                <div className="text-center space-y-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">FZN</p>
                  <p className="font-bold">(dev_)</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK GRID --- */}
      <div className="w-full bg-white/[0.02] border-y border-white/10 py-12 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-sm font-mono text-primary mb-8 uppercase tracking-widest text-center md:text-left">Frameworks & Technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 hover:bg-white/5 rounded-none transition-all duration-300 group"
              >
                <Code2 className="text-muted-foreground group-hover:text-primary transition-colors w-5 h-5" />
                <span className="font-bold text-white/80 group-hover:text-white transition-colors">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 2. EXPERTISE (Grid Brutalist) --- */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div style={{ y: yParallax }}>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">What I <br/><span className="text-primary">Do</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I reject boring design. I blend clean code with unforgettable visual interactions.
            </p>
            <div className="w-full h-[400px] relative rounded-none overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700">
               <Image src="/placeholder.png" alt="Profile" fill className="object-cover" />
            </div>
          </motion.div>

          <div className="space-y-0">
            {/* Wireframe Style List */}
            {[
              { num: "01", title: "Frontend Engineering", desc: "React, Next.js, Vue, Tailwind CSS. Pixel-perfect implementation." },
              { num: "02", title: "Backend Systems", desc: "Node.js, Express, Prisma, PostgreSQL. Scalable and secure." },
              { num: "03", title: "Interactive Design", desc: "Framer Motion, GSAP, WebGL. Crafting magical experiences." }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-b border-white/10 py-10 hover:pl-6 transition-all duration-300"
              >
                <p className="text-sm text-primary mb-2 font-mono">{skill.num} // Expertise</p>
                <h3 className="text-3xl font-bold mb-4">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. EXPERIENCE (Typography Timeline) --- */}
      <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-10 bg-white/[0.02] border-y border-white/10">
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-20 text-center">Journey.</h2>

        <div className="flex flex-col border-t border-white/10">
          {journeyData.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-white/10 group hover:bg-white/[0.03] transition-colors px-6"
            >
              <div className="md:col-span-3 text-2xl md:text-4xl font-light text-muted-foreground group-hover:text-primary transition-colors flex flex-col justify-center">
                {item.year.split(" - ")[0]} 
                {item.year.includes("-") && <span className="text-sm mt-1 uppercase tracking-widest block">To {item.year.split(" - ")[1]}</span>}
              </div>
              <div className="md:col-span-9 space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">{item.title}</h3>
                <div className="flex items-center gap-4">
                  <p className="text-xl text-primary font-medium">{item.company}</p>
                  <span className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground border border-white/20 px-2 py-1 rounded-full">{item.year}</span>
                </div>
                <p className="text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. PROJECTS (Isometric Phone Mockups + Masonry Grid) --- */}
      <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-10 overflow-hidden">
        <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Selected <br/><span className="text-primary text-stroke">Works.</span></h2>
          <Button variant="ghost" className="hidden md:flex text-lg group">
            View Archive <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
              className={getProjectLayout(index)}
            >
              <Link href={`/projects/${project.id}`} className="group block relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-500" style={{ perspective: "1000px" }}>
                
                {/* Desktop Background (Red Scribble) */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                  <Image src={project.image} alt={`${project.title} Desktop`} fill className="object-cover object-left-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                </div>

                {/* Isometric Tilted Smartphone Mockup inside the Card (White Circle) */}
                <div 
                  className="absolute -right-4 md:-right-10 top-20 md:top-24 w-[240px] md:w-[320px] h-[500px] md:h-[650px] rounded-[2.5rem] border-[8px] border-neutral-800 bg-black overflow-hidden shadow-[-20px_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out origin-bottom group-hover:[transform:rotateX(15deg)_rotateY(-15deg)_rotateZ(5deg)_translateY(-20px)]"
                  style={{ transform: "rotateX(25deg) rotateY(-25deg) rotateZ(10deg)" }}
                >
                  {/* Dynamic Island / iPhone Notch simulation */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-5 bg-neutral-800 rounded-b-xl z-20 shadow-md" />
                  
                  {/* The actual project screenshot inside the phone (Using mobile image without "(1)") */}
                  <Image 
                    src={project.imageMobile ? project.imageMobile.replace(" (1)", "") : project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                
                {/* Text Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 pointer-events-none">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0,3).map(tech => (
                        <span key={tech} className="text-[10px] md:text-xs uppercase tracking-widest font-mono bg-primary/20 text-primary px-3 py-1 backdrop-blur-sm">{tech}</span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>

                {/* Hover Arrow Indicator */}
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="text-white w-6 h-6" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. CONTACT (Massive Footer) --- */}
      <section id="contact" className="pt-32 pb-10 px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-black p-12 md:p-24 rounded-none flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
        >
          <div>
            <p className="text-black/60 font-bold uppercase tracking-widest mb-4">Got an idea?</p>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              Let's build <br/> something <br/> great.
            </h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-black/60 font-bold uppercase tracking-widest text-sm">Reach Out</p>
              <a href="mailto:cornwerso5118@gmail.com" className="text-xl md:text-3xl font-bold block hover:underline underline-offset-8 decoration-4 break-all">cornwerso5118@gmail.com</a>
              <a href="https://wa.me/6285283142289" className="text-2xl md:text-4xl font-bold block hover:underline underline-offset-8 decoration-4">WhatsApp Me</a>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-black/20">
               <p className="text-black/60 font-bold uppercase tracking-widest text-sm">Socials</p>
               <div className="flex flex-wrap gap-4">
                 <a href="https://github.com/prayersrain" target="_blank" className="font-bold uppercase border border-black px-6 py-3 hover:bg-black hover:text-primary transition-colors">
                   GitHub
                 </a>
                 <a href="https://instagram.com/prayersrain_" target="_blank" className="font-bold uppercase border border-black px-6 py-3 hover:bg-black hover:text-primary transition-colors">
                   Instagram
                 </a>
               </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground uppercase tracking-widest font-mono border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} M Fauzan Haikal Mugni Portfolio</p>
          <p>Bekasi, ID</p>
        </div>
      </section>

    </div>
  );
}
