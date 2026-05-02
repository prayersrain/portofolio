"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

// Real Data
import { journeyData } from "@/data/journey";

import ScrambleText from "@/components/ScrambleText";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      
      {/* HEADER ABOUT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/10 pb-10"
      >
        <h1 className="text-5xl md:text-[4vw] font-black uppercase leading-none">
          <ScrambleText text="About" /> <br/>
          <span className="text-primary italic"><ScrambleText text="Me." /></span>
        </h1>
        <Link href="/cv">
          <Button className="rounded-none px-8 py-8 h-auto gap-4 text-xl font-black bg-white text-black hover:bg-white/90 uppercase tracking-tighter">
            <FileText className="w-6 h-6" />
            Download CV
          </Button>
        </Link>
      </motion.div>

      {/* BIODATA SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
        {/* Foto Profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
          className="lg:col-span-4 relative aspect-[4/5] rounded-none overflow-hidden border border-white/10 bg-neutral-900 group"
        >
          <Image 
            src="/profile.jpg" 
            alt="M Fauzan Haikal Mugni" 
            fill 
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
        </motion.div>

        {/* Info Biodata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
          className="lg:col-span-8 space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              M Fauzan <br/>
              <span className="text-primary">Haikal Mugni.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              I am a 22-year-old software developer crafting modern web ecosystems. 
              Currently finalizing my Informatics Engineering degree at Universitas Gunadarma, 
              I specialize in bridging complex logic with intuitive aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 border-y border-white/5">
            <div>
              <p className="text-xs text-primary font-mono uppercase tracking-[0.3em] mb-2">Email</p>
              <p className="font-bold text-xl uppercase">cornwerso5118@gmail.com</p>
            </div>
            <div>
              <p className="text-xs text-primary font-mono uppercase tracking-[0.3em] mb-2">Location</p>
              <p className="font-bold text-xl uppercase">Bekasi, Indonesia</p>
            </div>
            <div>
              <p className="text-xs text-primary font-mono uppercase tracking-[0.3em] mb-2">Role</p>
              <p className="font-bold text-xl uppercase">Full Stack Developer</p>
            </div>
            <div>
              <p className="text-xs text-primary font-mono uppercase tracking-[0.3em] mb-2">Status</p>
              <p className="font-bold text-xl uppercase">Available for Work</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* TIMELINE SECTION */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-[3vw] font-black uppercase leading-none mb-12">
          My <span className="text-primary italic"><ScrambleText text="Journey" /></span>
        </h2>
      </motion.div>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-0">
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="mb-16 ml-10 relative group"
          >
            <div className="absolute left-[-49px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-muted-foreground group-hover:bg-primary transition-colors duration-300 ring-2 ring-transparent group-hover:ring-primary/30" />
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/5">
                {item.year}
              </Badge>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <h4 className="text-lg text-muted-foreground mb-4">{item.company}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
