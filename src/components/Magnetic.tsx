"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({ children }: { children: React.ReactElement }) {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = magnetic.current;
        if (!currentRef) return;

        const xTo = gsap.quickTo(currentRef, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(currentRef, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = currentRef.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.15);
            yTo(y * 0.15);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        currentRef.addEventListener("mousemove", mouseMove);
        currentRef.addEventListener("mouseleave", mouseLeave);

        return () => {
            currentRef.removeEventListener("mousemove", mouseMove);
            currentRef.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return React.cloneElement(children, { ref: magnetic } as any);
}
