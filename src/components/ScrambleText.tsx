"use client";

import { useState, useEffect } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function ScrambleText({ text }: { text: string }) {
  const [displayValue, setDisplayValue] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayValue(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iterations += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseEnter={startScramble} className="cursor-default">
      {displayValue}
    </span>
  );
}
