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
          Let&apos;s <span className="text-primary italic">Talk</span>.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have an amazing idea or need help bringing your digital product to life? Don&apos;t hesitate to reach out.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
      >
        <form 
          className="space-y-6" 
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
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Your Name</label>
            <input 
              name="name"
              type="text" 
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Email</label>
            <input 
              name="email"
              type="email" 
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Message</label>
            <textarea 
              name="message"
              rows={4}
              required
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full rounded-xl py-6 text-lg font-bold">
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
