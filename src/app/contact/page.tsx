"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import ScrambleText from "@/components/ScrambleText";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        className="text-center space-y-8 w-full border-b border-white/10 pb-16"
      >
        <p className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Ready to start?</p>
        <h1 className="text-5xl md:text-[4vw] font-black uppercase leading-none">
          <ScrambleText text="Let's" /> <br/>
          <span className="text-primary italic"><ScrambleText text="Talk." /></span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          Have an amazing idea or need help bringing your digital product to life? <br className="hidden md:block" /> 
          Let&apos;s create something extraordinary together.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
        className="mt-20 w-full max-w-2xl p-10 md:p-16 border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
      >
        <form 
          className="space-y-10" 
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");
            
            const whatsappUrl = `https://api.whatsapp.com/send?phone=6285283142289&text=${encodeURIComponent(
              `Hi Fauzan! 🚀\n\nNew message from portfolio contact form:\n\n- *Name:* ${name}\n- *Email:* ${email}\n- *Message:* ${message}\n\nThank you!`
            )}`;
            
            window.open(whatsappUrl, "_blank");
          }}
        >
          <div className="space-y-3">
            <label className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Full Name</label>
            <input 
              name="name"
              type="text" 
              required
              placeholder="YOUR NAME"
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-primary outline-none transition-all placeholder:text-white/10 uppercase font-bold text-lg"
            />
          </div>
          
          <div className="space-y-3">
            <label className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Email Address</label>
            <input 
              name="email"
              type="email" 
              required
              placeholder="EMAIL@DOMAIN.COM"
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-primary outline-none transition-all placeholder:text-white/10 uppercase font-bold text-lg"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Message</label>
            <textarea 
              name="message"
              rows={4}
              required
              placeholder="TELL ME ABOUT YOUR VISION..."
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-primary outline-none transition-all placeholder:text-white/10 uppercase font-bold text-lg resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full rounded-none py-8 text-xl font-black bg-primary text-black hover:bg-white transition-colors uppercase tracking-widest">
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
