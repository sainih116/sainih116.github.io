import { motion } from "motion/react";
import { ReactNode, Key } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  key?: Key;
}

export default function Card({ children, className = "", hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`glass rounded-2xl p-6 relative group overflow-hidden ${className}`}
    >
      {/* Subtle glow effect on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
