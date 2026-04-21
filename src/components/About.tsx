import { motion } from "motion/react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { User, Target, Award } from "lucide-react";

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="A brief overview of my professional background and goals.">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-2 ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=800"
              alt="Harshit Saini - Technical Profile"
              className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
        </motion.div>

        <div className="space-y-8">
          <Card hover={false}>
            <p className="text-lg text-slate-300 leading-relaxed">
              Results-driven <span className="text-white font-semibold">Software Developer</span> with experience in 
              <span className="text-primary"> Golang backend development, full stack web applications, API development, and database architecture design</span>. 
              Proficient in building scalable systems and optimizing application performance.
            </p>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl glass">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Goal Oriented</h4>
                <p className="text-sm text-slate-400">Focused on delivering high-impact solutions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl glass">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Certified Pro</h4>
                <p className="text-sm text-slate-400">Oracle & Meta certified professional.</p>
              </div>
            </div>
          </div>

          <p className="text-slate-400">
            I specialize in engineering scalable backend systems and robust database architectures. 
            With a strong foundation in <span className="text-white font-medium">microservices, backend workflows, and end-to-end development</span>, 
            I focus on delivering reliable solutions that align with business requirements.
          </p>
        </div>
      </div>
    </Section>
  );
}
