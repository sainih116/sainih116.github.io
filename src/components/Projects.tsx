import { motion } from "motion/react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { Github, ExternalLink, Database, MessageSquare, ShieldAlert, Train } from "lucide-react";

const projects = [
  {
    title: "Fake News Detector",
    description: "Built ML model with 92% classification accuracy using TF-IDF and Logistic Regression. Integrated real-time News API to analyze 1000+ live articles daily.",
    tech: ["Python", "Machine Learning", "TF-IDF", "Logistic Regression", "News API"],
    icon: <ShieldAlert className="text-red-400" />,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop"
  },
  {
    title: "Railway Coach Management System",
    description: "Designed and developed a full stack management system for railway coach operations with frontend drag-and-drop coach positioning.",
    tech: ["React", "Node.js", "SQL", "Tailwind CSS"],
    icon: <Train className="text-purple-400" />,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop"
  },
  {
    title: "File Upload & Document Management",
    description: "Designed and developed a secure file upload system for storing, managing, and retrieving user documents efficiently with multiple format support.",
    tech: ["Golang", "REST APIs", "Auth", "Secure Storage"],
    icon: <Database className="text-blue-400" />,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop"
  },
  {
    title: "Multi-Tenant Inventory Management",
    description: "Developed a scalable record system to manage products, stock levels, vendors, and orders across multiple tenants with robust database schemas.",
    tech: ["Golang", "PostgreSQL", "System Design", "Backend"],
    icon: <Database className="text-orange-400" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
  },
  {
    title: "WhatsApp Chat Analyzer",
    description: "Achieved 95% accuracy in message pattern recognition. Visualized user engagement metrics helping identify peak activity hours.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    icon: <MessageSquare className="text-green-400" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  }
];

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of my recent technical projects and research.">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <Card key={i} delay={i * 0.1} className="p-0 group">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white/10 hover:bg-primary/20 backdrop-blur-md rounded-full border border-white/10 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white/10 hover:bg-primary/20 backdrop-blur-md rounded-full border border-white/10 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full text-slate-500 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
