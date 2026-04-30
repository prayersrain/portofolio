"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-6 w-full"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Let's <span className="text-primary italic">Talk</span>.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Punya ide luar biasa atau butuh bantuan untuk mewujudkan produk digital Anda? Jangan ragu untuk menghubungi saya.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Nama Anda</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Email</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Pesan</label>
            <textarea 
              rows={4}
              placeholder="Ceritakan tentang proyek Anda..."
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            />
          </div>

          <Button size="lg" className="w-full rounded-xl py-6 text-lg font-bold">
            Kirim Pesan
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
