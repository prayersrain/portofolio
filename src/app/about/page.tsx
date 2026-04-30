"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// Real Data
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

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto">
      
      {/* HEADER ABOUT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          About <span className="text-primary italic">Me</span>.
        </h1>
      </motion.div>

      {/* BIODATA SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-24">
        {/* Foto Profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5"
        >
          <Image 
            src="/placeholder.png" 
            alt="M Fauzan Haikal Mugni" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
          />
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" />
        </motion.div>

        {/* Info Biodata */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">M Fauzan Haikal Mugni.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a 22-year-old passionate software developer focused on modern web ecosystems. 
              Currently in my 8th semester studying Informatics Engineering at Universitas Gunadarma, 
              I enjoy solving complex problems and transforming them into robust, user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</p>
              <p className="font-medium text-lg">cornwerso5118@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Location</p>
              <p className="font-medium text-lg">Kota Bekasi, Jatiasih</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Role</p>
              <p className="font-medium text-lg">Full Stack Developer</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Age</p>
              <p className="font-medium text-lg">22 Years Old</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* TIMELINE SECTION */}
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10"
      >
        My <span className="text-primary italic">Journey</span>.
      </motion.h2>

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
            <div className="absolute -left-[49px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-muted-foreground group-hover:bg-primary transition-colors duration-300 ring-2 ring-transparent group-hover:ring-primary/30" />
            
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
