import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ id, title, subtitle, children, className = "", dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden ${dark ? "bg-black" : ""} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
