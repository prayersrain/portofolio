"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<"default" | "project">("default");
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleProjectHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".project-card-hover")) {
        setCursorState("project");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleProjectHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleProjectHover);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
        width: cursorState === "project" ? 80 : 12,
        height: cursorState === "project" ? 80 : 12,
        backgroundColor: "white",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      {cursorState === "project" && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-black text-[10px] font-black uppercase tracking-widest"
        >
          View
        </motion.span>
      )}
    </motion.div>
  );
}
