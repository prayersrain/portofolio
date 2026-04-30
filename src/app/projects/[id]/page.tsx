"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Komponen Ikon Github SVG
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // Next.js 15: Membuka variabel "params"
  const resolvedParams = use(params);
  
  // Mencari proyek yang cocok dengan URL ID
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  // Jika URL ngawur dan proyek tidak ditemukan
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto">
      
      {/* Tombol Back */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>
        </Link>
      </motion.div>

      {/* Header Proyek */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{project.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Konten Utama: Kiri (Desktop + Teks) & Kanan (Mobile) */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Kolom Kiri: Desktop Browser & Teks */}
        <div className="w-full lg:w-[65%] flex flex-col gap-8">
          
          {/* Desktop Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[50vh] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex-shrink-0 flex flex-col shadow-2xl"
          >
            {/* MacOS Window Bar */}
            <div className="h-10 bg-neutral-950 flex items-center px-4 gap-2 border-b border-white/10 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            {/* Scrollable Desktop Image */}
            <div className="relative w-full flex-1 overflow-y-auto no-scrollbar">
              <Image
                src={project.image}
                alt={`${project.title} Desktop`}
                width={1920}
                height={1080}
                className="w-full h-auto object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Deskripsi Panjang & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-2xl font-bold border-b border-white/10 pb-4 mb-6">About the Project</h2>
              <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl w-full sm:w-80 mt-4">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Project Links</h3>
              <Link href={project.githubUrl} target="_blank">
                <Button className="w-full justify-between group py-6">
                  <span className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5" />
                    View Source Code
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Kolom Kanan: Mobile Phone Mockup */}
        {project.imageMobile && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex w-[35%] relative items-start justify-center"
          >
            <div className="sticky top-32 w-full max-w-[320px] aspect-[9/19.5] rounded-[3rem] border-[12px] border-neutral-900 bg-black overflow-hidden shadow-2xl relative flex flex-col shrink-0">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-6 bg-neutral-900 rounded-b-2xl z-30 shadow-sm" />
              
              {/* iOS Status Bar (Solid Boundary) */}
              <div className="w-full h-10 px-6 flex justify-between items-center text-white z-20 bg-black shrink-0">
                <span className="text-[11px] font-semibold tracking-wider mt-1">9:41</span>
                <div className="flex items-center gap-1.5 mt-1">
                  {/* Signal */}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3"><path d="M1 9V7H3V9H1ZM5 9V5H7V9H5ZM9 9V3H11V9H9ZM13 9V1H15V9H13Z" fill="currentColor"/></svg>
                  {/* Wifi */}
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3"><path d="M7.5 11C8.25828 11 8.875 10.3833 8.875 9.625C8.875 8.86672 8.25828 8.25 7.5 8.25C6.74172 8.25 6.125 8.86672 6.125 9.625C6.125 10.3833 6.74172 11 7.5 11ZM7.5 5.5C5.74609 5.5 4.19531 6.07188 2.87109 6.99453L3.84375 8.27109C4.85938 7.58516 6.11328 7.15 7.5 7.15C8.88672 7.15 10.1406 7.58516 11.1562 8.27109L12.1289 6.99453C10.8047 6.07188 9.25391 5.5 7.5 5.5ZM7.5 2.75C5.00391 2.75 2.77344 3.59063 0.941406 4.96094L1.91406 6.2375C3.42188 5.09453 5.34766 4.4 7.5 4.4C9.65234 4.4 11.5781 5.09453 13.0859 6.2375L14.0586 4.96094C12.2266 3.59063 9.99609 2.75 7.5 2.75ZM7.5 0C4.26953 0 1.34375 1.09687 -0.996094 2.86641L-0.0234375 4.14297C2.01562 2.62891 4.58594 1.65 7.5 1.65C10.4141 1.65 12.9844 2.62891 15.0234 4.14297L15.9961 2.86641C13.6562 1.09687 10.7305 0 7.5 0Z" fill="currentColor"/></svg>
                  {/* Battery */}
                  <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-3"><path d="M18 3H19C19.5523 3 20 3.44772 20 4V7C20 7.55228 19.5523 8 19 8H18V3Z" fill="currentColor"/><rect x="0.5" y="0.5" width="17" height="10" rx="2.5" stroke="currentColor"/><rect x="2" y="2" width="11" height="7" rx="1" fill="currentColor"/></svg>
                </div>
              </div>
              
              {/* Scrollable Mobile Image */}
              <div className="relative w-full flex-1 overflow-y-auto no-scrollbar bg-neutral-950">
                <Image
                  src={project.imageMobile}
                  alt={`${project.title} Mobile`}
                  width={800}
                  height={1600}
                  className="w-full h-auto object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}

      </div>

    </div>
  );
}
