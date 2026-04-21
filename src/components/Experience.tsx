import { motion } from "motion/react";
import Section from "./ui/Section";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Software Developer / Backend & Full Stack",
    company: "ROVO AUTOMATION INDIA",
    period: "2026 - Present",
    description: [
      "Engineered scalable backend systems using Golang, focusing on API development, performance, and maintainability.",
      "Designed robust database architectures and workflow automation modules for enterprise-level applications.",
      "Delivered end-to-end full stack solutions, from backend logic to frontend integration.",
      "Improved system efficiency through process automation and optimized backend workflows."
    ]
  },
  {
    role: "Data Analyst",
    company: "Codeveda Technologies",
    period: "07/2025 – 09/2025",
    certificateLink: "https://drive.google.com/file/d/1epaSQ7Mhk7Mfe78wTs4esLA5wBPu3QSz/view?usp=drive_link",
    description: [
      "Analyzed datasets using Python and SQL to identify key business trends, improving data processing efficiency by 30%.",
      "Created interactive dashboards in Power BI that provided real-time insights into customer behavior patterns."
    ]
  }
];

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey and key achievements.">
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            
            <div className="glass p-8 rounded-2xl border-white/5 hover:border-primary/20 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm bg-white/5 px-4 py-2 rounded-full">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-400">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {exp.certificateLink && (
                <a 
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-primary/50"
                >
                  View Experience Certificate
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
