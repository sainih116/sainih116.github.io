import { motion } from "motion/react";
import Section from "./ui/Section";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology - BTech in Computer Science",
    school: "Raj Kumar Goel Institute of Technology, Ghaziabad",
    period: "09/2022 – 06/2026",
    location: "Ghaziabad, Uttar Pradesh"
  },
  {
    degree: "XII in PHYSICAL SCIENCES",
    school: "Gita Niketan Awasiya Vidyalaya, Kurukshetra",
    period: "04/2021 – 03/2022",
    location: "Kurukshetra, Haryana"
  },
  {
    degree: "X",
    school: "Gita Niketan Awasiya Vidyalaya, Kurukshetra",
    period: "04/2019 – 03/2020",
    location: "Kurukshetra, Haryana"
  }
];

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic background and qualifications.">
      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <GraduationCap size={24} />
              </div>
              {i !== education.length - 1 && <div className="w-px h-full bg-white/10 my-2" />}
            </div>
            
            <div className="pb-8">
              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-slate-400 mb-2">{edu.school}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {edu.location}
                </span>
                <span>{edu.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
