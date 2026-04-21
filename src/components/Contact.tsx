import { motion } from "motion/react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { Mail, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or just want to say hi? Feel free to reach out!">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card hover={false} className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
              <p className="text-white font-medium">sainih116@gmail.com</p>
            </div>
          </Card>
          
          <Card hover={false} className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Phone</p>
              <p className="text-white font-medium">+91 8006262813</p>
            </div>
          </Card>
          
          <Card hover={false} className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
              <p className="text-white font-medium">NOIDA, India</p>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card hover={false} className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me more about your project..."
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary/50 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}
