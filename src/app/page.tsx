"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cpu, ArrowUpRight, Code2, Database, Smartphone, Wallet, FileText, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

import { journeyData } from "@/data/journey";
import ScrambleText from "@/components/ScrambleText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const techStack = [
  { name: "Next.js", category: "Core", slug: "nextjs", source: "devicon" },
  { name: "TypeScript", category: "Core", slug: "typescript", source: "devicon" },
  { name: "Python", category: "Core", slug: "python", source: "devicon" },
  { name: "PHP", category: "Core", slug: "php", source: "devicon" },
  { name: "Node.js", category: "Core", slug: "nodejs", source: "devicon" },
  { name: "HTML5", category: "Frontend", slug: "html5", source: "devicon" },
  { name: "CSS3", category: "Frontend", slug: "css3", source: "devicon" },
  { name: "React", category: "Frontend", slug: "react", source: "devicon" },
  { name: "Tailwind CSS", category: "Frontend", slug: "tailwindcss", source: "simpleicons", color: "06B6D4" },
  { name: "Framer Motion", category: "Frontend", slug: "framer", source: "simpleicons", color: "0055FF" },
  { name: "Laravel", category: "Backend", slug: "laravel", source: "devicon" },
  { name: "PostgreSQL", category: "Backend", slug: "postgresql", source: "devicon" },
  { name: "Prisma", category: "Backend", slug: "prisma", source: "devicon" },
  { name: "Bcrypt", category: "Backend", slug: "auth0", source: "simpleicons", color: "EB5424" },
  { name: "PWA", category: "Expertise", slug: "pwa", source: "simpleicons", color: "5A0FC8" },
  { name: "NextAuth", category: "Expertise", slug: "nextauth", source: "custom" },
  { name: "Midtrans API", category: "Expertise", slug: "midtrans", source: "custom" },
  { name: "JWT", category: "Expertise", slug: "jsonwebtokens", source: "simpleicons", color: "ffffff" },
  { name: "Git", category: "Tools", slug: "git", source: "devicon" }
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
  const journeyRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"]
  });

  const journeyLineHeight = useTransform(journeyProgress, [0, 1], ["0%", "100%"]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(() => {
    // Reveal animation for Journey items
    gsap.from(".journey-card", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".journey-section",
        start: "top 70%",
      }
    });

    // Parallax background text for Projects
    gsap.to(".projects-bg-text", {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#projects",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Fade in effect for tech stack items
    gsap.from(".tech-card", {
      opacity: 0,
      y: 30,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".tech-grid",
        start: "top 80%",
      }
    });

    // Hero Text Reveal
    const heroTl = gsap.timeline();
    heroTl.from(".hero-line span", {
      y: 100,
      rotate: 5,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      opacity: 0
    });
  }, { scope: containerRef });

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: id, autoKill: true },
      ease: "power4.inOut"
    });
  };

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
            <div className="hero-line overflow-hidden">
              <Badge variant="outline" className="px-4 py-2 text-sm border-white/20 bg-white/5 rounded-full backdrop-blur-sm inline-flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Porto
              </Badge>
            </div>

            <div className="hero-line overflow-hidden">
                <h1 className="text-[7.5vw] md:text-[4vw] font-black leading-none uppercase">
                  <span className="inline-block"><ScrambleText text="Creative" /></span> <br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500 italic inline-block"><ScrambleText text="Developer." /></span>
                </h1>
            </div>

            <div className="hero-line overflow-hidden">
              <p className="text-xl md:text-3xl text-muted-foreground max-w-2xl font-light border-l-2 border-primary pl-6">
                <span className="inline-block">Hi, I&apos;m Fauzan. I engineer <span className="text-white font-medium">highly-performant</span> and visually stunning web applications.</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6 hero-line overflow-hidden">
              <Button 
                onClick={() => scrollToSection("#projects")}
                size="lg" 
                className="rounded-none px-8 h-16 text-lg group bg-white text-black hover:bg-white/90"
              >
                See My Work
                <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              
              <Link href="/cv">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-16 text-lg border-white/20 hover:bg-white/5 gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Download CV
                </Button>
              </Link>
            </div>
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

      {/* --- TECH STACK (Categorized) --- */}
      <section className="py-32 border-y border-white/10 bg-black/40 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Technical Arsenal</h2>
              <p className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">Powering <br/> Digital Solutions.</p>
            </div>
            <p className="text-muted-foreground max-w-sm">A curated list of technologies and tools I leverage to build high-performance digital products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 tech-grid">
            {[
              { 
                title: "Core & Languages", 
                items: techStack.filter(t => t.category === "Core") 
              },
              { 
                title: "Frontend & Design", 
                items: techStack.filter(t => t.category === "Frontend") 
              },
              { 
                title: "Backend & Data", 
                items: techStack.filter(t => t.category === "Backend") 
              },
              { 
                title: "Integrations & Tools", 
                items: techStack.filter(t => ["Expertise", "Tools"].includes(t.category)) 
              }
            ].map((group, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-primary/30 transition-colors group tech-card"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8 group-hover:text-primary transition-colors">{group.title}</h3>
                <div className="grid grid-cols-3 gap-6">
                  {group.items.map((tech, j) => (
                    <div key={j} className="flex flex-col items-center gap-3 group/item">
                      <div className="w-12 h-12 flex items-center justify-center p-2 bg-black/30 rounded-xl border border-white/5 group-hover/item:border-primary/50 transition-all duration-300">
                        {tech.source === "custom" ? (
                          tech.slug === "midtrans" ? (
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter grayscale group-hover/item:grayscale-0 transition-all duration-300">
                              <circle cx="12" cy="12" r="10" fill="#002B5B" />
                              <rect x="7" y="9" width="2" height="6" rx="1" fill="#81A1C1" />
                              <rect x="11" y="6" width="2" height="12" rx="1" fill="#5E81AC" />
                              <rect x="15" y="9" width="2" height="6" rx="1" fill="#88C0D0" />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white filter grayscale group-hover/item:grayscale-0 group-hover/item:text-primary transition-all duration-300">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                              <path d="M12 8v4" />
                              <path d="M12 16h.01" />
                            </svg>
                          )
                        ) : (
                          <Image 
                            src={tech.source === "devicon" 
                              ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.slug}/${tech.slug}-original.svg`
                              : `https://cdn.simpleicons.org/${tech.slug}/${tech.color || 'white'}`
                            }
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300"
                            unoptimized
                          />
                        )}
                      </div>
                      <p className="text-[10px] font-medium text-muted-foreground group-hover/item:text-white transition-colors text-center">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (The Core Offerings) --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Services</h2>
            <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Solving Problems <br/> with <span className="italic font-light">Code</span>.
            </h3>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              I provide end-to-end digital development services, from initial concept to high-scale production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { 
                title: "Frontend Development", 
                desc: "Crafting visually stunning, highly interactive, and responsive user interfaces.",
                icon: <Code2 className="w-8 h-8 text-primary" />
              },
              { 
                title: "Backend Architecture", 
                desc: "Designing secure APIs and robust database systems for data-driven apps.",
                icon: <Database className="w-8 h-8 text-primary" />
              },
              { 
                title: "PWA & Mobile", 
                desc: "Building installable web apps with offline capabilities and native-like feel.",
                icon: <Smartphone className="w-8 h-8 text-primary" />
              },
              { 
                title: "Fintech Integration", 
                desc: "Seamless payment gateway integration and financial module development.",
                icon: <Wallet className="w-8 h-8 text-primary" />
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 border border-white/5 bg-white/2 hover:bg-white/5 hover:border-primary/30 transition-all duration-300 group rounded-2xl"
              >
                <div className="mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{service.icon}</div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. EXPERTISE (Grid Brutalist) --- */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div style={{ y: yParallax }}>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">What I <br/><span className="text-primary">Do</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I reject boring design. I blend clean code with unforgettable visual interactions.
            </p>
            <div className="w-full relative rounded-none overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 shadow-2xl">
               <Image 
                 src="/profile.jpg" 
                 alt="Profile" 
                 width={800}
                 height={1200}
                 className="w-full h-auto" 
                 priority
               />
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
                <p className="text-sm text-primary mb-2 font-mono">{skill.num + " // Expertise"}</p>
                <h3 className="text-3xl font-bold mb-4">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. JOURNEY (Vertical Timeline with Tracing Line) --- */}
      <section id="journey" ref={journeyRef} className="journey-section py-32 px-6 relative overflow-hidden bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">My Progression</h2>
              <h3 className="text-3xl md:text-[4vw] font-black uppercase leading-none">
                <ScrambleText text="Career" /> <br/>
                <ScrambleText text="Journey" />
              </h3>
            </div>
          </div>

          <div className="relative space-y-12">
            {/* Static Background Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
            
            {/* Animated Tracing Line */}
            <motion.div 
              className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-primary -translate-x-1/2 hidden md:block"
              style={{ height: journeyLineHeight, originY: 0 }}
            />
            {journeyData.map((item, index) => (
              <div 
                key={index} 
                className={`journey-card relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 hidden md:block" />
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="text-sm font-mono text-primary mb-2">{item.year}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. PROJECTS (Isometric Phone Mockups + Masonry Grid) --- */}
      <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-10 overflow-hidden relative">
        
        {/* GSAP BACKGROUND TEXT */}
        <div className="absolute top-20 left-0 whitespace-nowrap opacity-[0.08] select-none pointer-events-none z-0 overflow-hidden w-full">
          <span className="projects-bg-text text-[15rem] md:text-[25rem] font-black uppercase inline-block">
            PROJECTS PROJECTS PROJECTS
          </span>
        </div>

        <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8 relative z-10">
          <h2 className="text-3xl md:text-[4vw] font-black uppercase leading-tight">
            <ScrambleText text="Selected" /> <br/>
            <span className="text-primary text-stroke"><ScrambleText text="Works." /></span>
          </h2>
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
              <Link href={`/projects/${project.id}`} className="group block relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-500 project-card-hover" style={{ perspective: "1000px" }}>
                
                {/* Desktop Background (Red Scribble) */}
                <motion.div 
                  initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                  viewport={{ once: true }}
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                >
                  <Image 
                    src={project.image} 
                    alt={`${project.title} Desktop`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top-left" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20" />
                </motion.div>

                {/* Isometric Tilted Smartphone Mockup inside the Card (White Circle) */}
                <div 
                  className="absolute -right-4 md:-right-10 top-20 md:top-24 w-[240px] md:w-[320px] h-[500px] md:h-[650px] rounded-[2.5rem] border-8 border-neutral-800 bg-black overflow-hidden shadow-[-20px_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out origin-bottom group-hover:transform-[rotateX(15deg)_rotateY(-15deg)_rotateZ(5deg)_translateY(-20px)]"
                  style={{ transform: "rotateX(25deg) rotateY(-25deg) rotateZ(10deg)" }}
                >
                  {/* Dynamic Island / iPhone Notch simulation */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-5 bg-neutral-800 rounded-b-xl z-20 shadow-md" />
                  
                  {/* The actual project screenshot inside the phone (Using mobile image without "(1)") */}
                  <Image 
                    src={project.imageMobile ? project.imageMobile.replace(" (1)", "") : project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                
                {/* Text Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 pointer-events-none">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0,3).map(tech => (
                        <span key={tech} className="text-[10px] md:text-xs uppercase tracking-widest font-mono bg-primary/20 text-primary px-3 py-1 backdrop-blur-sm">{tech}</span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                      <ScrambleText text={project.title} />
                    </h3>
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

      {/* --- TESTIMONIALS (Brutalist Redesign) --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Author Profile */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-none bg-primary border-4 border-black rotate-3 absolute inset-0 -z-10" />
              <div className="w-32 h-32 rounded-none bg-neutral-900 border-2 border-white/20 overflow-hidden flex items-center justify-center -rotate-3 transition-transform hover:rotate-0 duration-500">
                <span className="text-5xl font-black text-primary/30">W</span>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-black uppercase tracking-tighter">Wahyudi</h4>
              <p className="text-primary font-mono text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 inline-block mt-2">
                CEO, Karya Mandiri Dental
              </p>
            </div>
          </div>

          {/* Right Side: The Quote */}
          <div className="lg:col-span-8 relative">
            <Quote className="absolute -top-12 -left-12 w-24 h-24 text-white/5 opacity-20 -z-10" />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-3xl md:text-5xl font-black italic leading-[1.1] tracking-tighter text-white uppercase">
                &quot;Fauzan transformed our <span className="text-primary">manual operations</span> into a seamless digital system. His ability to translate business needs into <span className="text-stroke-white text-transparent">robust solutions</span>  is rare.&quot;
              </p>
              <div className="w-24 h-2 bg-primary" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- 5. CONTACT (Massive Footer) --- */}
      <section id="contact" className="pt-32 pb-10 px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-black p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          <div className="space-y-6">
            <p className="text-black/60 font-bold uppercase tracking-widest text-xs">Got an idea?</p>
            <h2 className="text-[6.5vw] md:text-[2.5vw] font-black leading-none uppercase">
              <ScrambleText text="Let's build" /> <br/>
              <ScrambleText text="something" /> <br/>
              <ScrambleText text="great." />
            </h2>
          </div>

          <div className="flex flex-col justify-between h-full space-y-10">
            <div className="space-y-6">
              <p className="text-black/60 font-bold uppercase tracking-widest text-[10px] border-b border-black/10 pb-2">Reach Out</p>
              <div className="space-y-4">
                <a href="mailto:cornwerso5118@gmail.com" className="text-lg md:text-xl font-bold block hover:opacity-70 transition-opacity break-words">
                  cornwerso5118@gmail.com
                </a>
                <Link href="/contact" className="text-lg md:text-xl font-bold block hover:opacity-70 transition-opacity flex items-center gap-2">
                  Send Message <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-black/60 font-bold uppercase tracking-widest text-sm border-b border-black/20 pb-2">Socials</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://github.com/prayersrain" target="_blank" className="font-bold uppercase border border-black px-6 py-3 hover:bg-black hover:text-primary transition-colors text-xs">
                  GitHub
                </a>
                <a href="https://instagram.com/prayersrain_" target="_blank" className="font-bold uppercase border border-black px-6 py-3 hover:bg-black hover:text-primary transition-colors text-xs">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

    </div>
  );
}
