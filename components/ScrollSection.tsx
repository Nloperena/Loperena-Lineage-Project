"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollSection({ children, className = "" }: ScrollSectionProps) {
  return (
    <section className={`snap-section min-h-screen w-full flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto px-8 py-20"
      >
        {children}
      </motion.div>
    </section>
  );
}



