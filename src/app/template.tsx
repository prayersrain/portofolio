"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Efek awal: agak mengecil (0.95), blur, dan transparan
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      // Efek akhir: ukuran normal, tajam, dan solid
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      // Transisi kurva khusus (mirip Apple UI)
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
