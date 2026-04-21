import { motion } from "motion/react";
import Section from "./ui/Section";
import Card from "./ui/Card";

const skills = [
  { name: "Golang", level: 90, category: "Backend" },
  { name: "Python", level: 85, category: "Programming" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "REST APIs", level: 95, category: "Backend" },
  { name: "SQL (MySQL/Postgres)", level: 90, category: "Database" },
  { name: "Microservices", level: 75, category: "Architecture" },
  { name: "Machine Learning", level: 80, category: "AI/ML" },
  { name: "System Design", level: 85, category: "Concepts" },
];

const otherSkills = [
  "JavaScript", "Docker", "Postman", "Git & GitHub", "JWT Auth", "MongoDB", "Linux", "Flask", "Claude Code", "Kiro"
];

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="My expertise across data analysis, AI, and full-stack development.">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Progress Bars */}
        <div className="space-y-6">
          {skills.map((skill, i) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{skill.category}</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-4 content-start">
          {otherSkills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="px-6 py-3 glass rounded-xl border-white/5 text-slate-300 hover:text-white hover:border-primary/30 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
          
          <Card className="w-full mt-8 border-dashed border-white/10" hover={false}>
            <h4 className="font-bold text-white mb-2">Tools & Technologies</h4>
            <p className="text-slate-400 text-sm">
              Canva, Adobe Photoshop (basic-intermediate), Adobe Illustrator (basic), Figma (basic), 
              Git, GitHub, VS Code, Jupyter Notebook, Google Colab.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
