import { useState } from "react";
// Change import from "motion/react" to "framer-motion" if needed, 
// but sticking to the system instruction "motion/react"
import { motion, AnimatePresence } from "motion/react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { Award, ExternalLink, Filter, X, Eye } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  color: string;
  link: string;
  categories: string[];
  importance: number; // For sorting
}

const ALL_CERTS: Certificate[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle University",
    date: "Sep 2025",
    color: "from-orange-500 to-red-500",
    link: "https://drive.google.com/file/d/1GKqpnYrBSFyMlya874U9aYZti26PMF1k/view?usp=drive_link",
    categories: ["Data Science", "AI"],
    importance: 1
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "HPE via Forage",
    date: "Sep 2025",
    color: "from-emerald-500 to-teal-500",
    link: "https://drive.google.com/file/d/175OFofVy3PFVjPa4neg3mWrqiMseY8A8/view?usp=drive_link",
    categories: ["Web/Software"],
    importance: 2
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Group via Forage",
    date: "Aug 2025",
    color: "from-blue-500 to-cyan-500",
    link: "https://drive.google.com/file/d/12wZ8MNC-AttplxjDERcLr3zQlXoYyZPQ/view?usp=drive_link",
    categories: ["Data Science"],
    importance: 3
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte via Forage",
    date: "Jul 2025",
    color: "from-green-500 to-emerald-500",
    link: "https://drive.google.com/file/d/1-G-5s7FCBJNVUfb__rX7Ma-teVbyJshP/view?usp=drive_link",
    categories: ["Data Science"],
    importance: 4
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Accenture via Forage",
    date: "Jul 2025",
    color: "from-purple-500 to-indigo-500",
    link: "https://drive.google.com/file/d/1OygVdiQ6YyWeae2hPzujdJ0zDsuSXKK8/view?usp=drive_link",
    categories: ["Web/Software"],
    importance: 5
  },
  {
    title: "Data Science Job Simulation",
    issuer: "British Airways via Forage",
    date: "Jul 2025",
    color: "from-red-500 to-blue-500",
    link: "https://drive.google.com/file/d/1T6VtAtkBs5oGiWaRMq08BPc0tjBdj7tB/view?usp=drive_link",
    categories: ["Data Science"],
    importance: 6
  },
  {
    title: "React.js Developer Assessment",
    issuer: "LearnTube.ai",
    date: "Jul 2025",
    color: "from-blue-400 to-cyan-400",
    link: "https://drive.google.com/file/d/1MJDEtYopG-1zE05WDqtCLaWPL-sb7Yys/view?usp=drive_link",
    categories: ["Web/Software"],
    importance: 7
  },
  {
    title: "AI for All",
    issuer: "Intel via Skill India",
    date: "Jul 2025",
    color: "from-blue-700 to-blue-500",
    link: "https://drive.google.com/file/d/14lAAyGbGe_lqEuajgePAcJYDsPVYqlGm/view?usp=drive_link",
    categories: ["AI"],
    importance: 8
  },
  {
    title: "Cybersecurity",
    issuer: "Tech Mahindra via Skill India",
    date: "Jul 2025",
    color: "from-red-600 to-orange-600",
    link: "https://drive.google.com/file/d/10LtITbYWClNXJq3QrUbzd9rE76-tR63M/view?usp=drive_link",
    categories: ["Web/Software"],
    importance: 9
  },
  {
    title: "Introduction to IoT",
    issuer: "NSDC via Skill India",
    date: "Jul 2025",
    color: "from-indigo-500 to-blue-500",
    link: "https://drive.google.com/file/d/1nm54ojtdXqppBZoXPYPSKTBIdjzzNxsa/view?usp=drive_link",
    categories: ["Workshops"],
    importance: 10
  },
  {
    title: "Data Analytics Using Power BI",
    issuer: "TechTip24",
    date: "Jul 2025",
    color: "from-yellow-400 to-yellow-600",
    link: "https://drive.google.com/file/d/1EXgzcms53OdSz7knFV2T2EzuZb67_6R2/view?usp=drive_link",
    categories: ["Data Science", "Workshops"],
    importance: 11
  },
  {
    title: "Adobe India Hackathon (Round 1)",
    issuer: "Adobe",
    date: "2025",
    color: "from-red-600 to-red-400",
    link: "https://drive.google.com/file/d/10APrE1lYiPloMHmWy3uCp0j1beQwrMqX/view?usp=sharing",
    categories: ["Workshops"],
    importance: 12
  },
  {
    title: "Data Analyst Professional",
    issuer: "DUCAT-IT Training School",
    date: "Apr 2025",
    color: "from-purple-500 to-pink-500",
    link: "https://drive.google.com/file/d/1S0DFoLrgG9fzNDke8S_yTCBwoeypZBMs/view?usp=drive_link",
    categories: ["Data Science"],
    importance: 13
  },
  {
    title: "Programming in Python",
    issuer: "Meta / Coursera",
    date: "Dec 2023",
    color: "from-blue-600 to-indigo-600",
    link: "https://drive.google.com/file/d/1qDTo3DCWJ5ftqvAI4vzgFT58MKNnICu3/view?usp=drive_link",
    categories: ["Web/Software"],
    importance: 14
  }
].sort((a, b) => a.importance - b.importance);

const categories = ["All", "Data Science", "AI", "Web/Software", "Workshops"];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCerts = ALL_CERTS.filter(cert => 
    activeFilter === "All" || cert.categories.includes(activeFilter)
  );

  return (
    <Section 
      id="certifications" 
      title="Certifications & Achievements" 
      subtitle="Validated skills through industry-recognized programs"
    >
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
              activeFilter === cat 
                ? "text-primary border-primary/50" 
                : "text-slate-400 hover:text-white border-white/5"
            } glass border`}
          >
            {activeFilter === cat && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-primary/10 -z-10"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {cat === "All" && <Filter size={14} />}
              {cat}
            </span>
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              key={`${cert.title}-${cert.issuer}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4 }}
              className="group h-full"
            >
              <Card 
                className="flex flex-col h-full relative overflow-hidden glass border-white/5 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 p-8"
                hover={false}
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`absolute -left-1 top-1/4 w-1 h-1/2 bg-gradient-to-b ${cert.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} p-0.5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <div className="w-full h-full bg-slate-900/90 rounded-[14px] flex items-center justify-center text-white">
                      <Award size={28} />
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="p-2 glass rounded-xl text-slate-500 hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <Eye size={18} />
                  </button>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-primary/80 font-medium text-sm mb-1">{cert.issuer}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-6">{cert.date}</p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex gap-1">
                    {cert.categories.map(c => (
                      <span key={c} className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-500 rounded-md font-bold uppercase tracking-tight">
                        {c}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 py-2 px-5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-fullscreen text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
                  >
                    View PDF
                    <ExternalLink size={14} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-[1.4/1] glass border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                <div>
                  <h4 className="text-lg font-bold text-white">{selectedCert.title}</h4>
                  <p className="text-xs text-slate-400">{selectedCert.issuer}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-colors"
                >
                  <X />
                </button>
              </div>

              <div className="flex-grow bg-slate-900/50 relative">
                {/* Fallback pattern if PDF viewer is restricted in some environments */}
                <iframe
                  src={selectedCert.link}
                  className="w-full h-full border-none"
                  title="Certificate Preview"
                />
                
                {/* Helpful overlay for mobile/iframes */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                   <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm">
                      Scroll to view certificate
                   </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 border-t border-white/5 flex justify-end">
                <a 
                  href={selectedCert.link}
                  target="_blank"
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
                >
                  Open in New Tab
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
