"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
};

export function Button({ children, className = "", onClick, delay = 0 }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ opacity: { duration: 0.6, ease: "easeOut", delay } }}
      className={`gap-2 px-4 rounded-lg bg-transparent border border-white/30 text-white/90
        hover:border-white hover:shadow-lg hover:shadow-white/50 py-1.5
        transition-[background-color,border-color,box-shadow,color] ease-in-out duration-300 transitions
        hover:bg-white/20 hover:text-white backdrop-blur-sm active:shadow-md
        ${className}`}
    >
      {children}
    </motion.button>
  );
}