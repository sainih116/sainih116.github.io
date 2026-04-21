import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold font-display mb-2 block">
            HS<span className="text-primary">.</span>
          </a>
          <p className="text-slate-500 text-sm">
            © {currentYear} Harshit Saini. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/sainih116" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-slate-400 hover:text-white hover:border-primary/50 transition-all">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-slate-400 hover:text-white hover:border-primary/50 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sainih116@gmail.com" className="p-3 glass rounded-full text-slate-400 hover:text-white hover:border-primary/50 transition-all">
            <Mail size={20} />
          </a>
          <a href="#" className="p-3 glass rounded-full text-slate-400 hover:text-white hover:border-primary/50 transition-all">
            <Twitter size={20} />
          </a>
        </div>
        
        <div className="text-slate-500 text-sm text-center md:text-right">
          <p>Built with React, Tailwind & Framer Motion</p>
          <p className="mt-1">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
