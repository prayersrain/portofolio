"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

import ScrambleText from "@/components/ScrambleText";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        className="space-y-6 mb-24 border-b border-white/10 pb-16"
      >
        <p className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Case Studies & Experiments</p>
        <h1 className="text-5xl md:text-[4vw] font-black uppercase leading-none">
          All <span className="text-primary italic"><ScrambleText text="Projects." /></span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl font-light leading-relaxed">
          A curated collection of digital experiences, ranging from complex full-stack applications 
          to experimental front-end interactions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.77, 0, 0.175, 1] }}
            className="group"
          >
            <Link href={`/projects/${project.id}`} className="block space-y-6">
              <div className="relative aspect-video overflow-hidden bg-neutral-900 border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl md:text-2xl font-black uppercase leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground line-clamp-2 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-primary uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
