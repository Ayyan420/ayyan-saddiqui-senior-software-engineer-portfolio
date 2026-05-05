'use client';

import { motion } from 'motion/react';
import { 
  User, 
  Briefcase, 
  Settings, 
  Sparkles, 
  Mail,
  Download,
  Github,
  Linkedin,
  ShoppingBag
} from 'lucide-react';

const iconItems = [
  { icon: User, label: 'About', href: '#' },
  { icon: Briefcase, label: 'ERP', href: '#experience' },
  { icon: Sparkles, label: 'Services', href: '#services' },
  { icon: Settings, label: 'Tech Stack', href: '#stack' },
  { icon: ShoppingBag, label: 'Marketplace', href: '#marketplace' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/ayyan420', target: '_blank' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayyan-saddiqui-211547204', target: '_blank' },
  { icon: Mail, label: 'Contact', href: '#connect' },
];

const basePath = '/ayyan-saddiqui-senior-software-engineer-portfolio';


export default function Sidebar() {
  return (
    <aside className="hidden xl:flex fixed left-0 top-1/2 -translate-y-1/2 z-[90] flex-col gap-6">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="editorial-card py-10 px-4 border-l-0 border-t-0 border-b-0 flex flex-col items-center gap-10"
      >
        <nav className="flex flex-col gap-8">
          {iconItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.target}
              rel={item.target ? "noopener noreferrer" : undefined}
              className="relative flex items-center justify-center text-gray-700 hover:text-white transition-all group/icon"
            >
              <item.icon size={18} />
              
              <span className="editorial-label absolute left-14 opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap bg-accent text-white px-2 py-1">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="h-20 w-px bg-border-subtle" />

        <motion.a
  href={`${basePath}/Ayyan_Saddiqui_Software_engineer_CV.pdf`}

          download
          whileHover={{ color: '#ff4e00' }}
          className="text-gray-700 transition-colors"
          title="Download CV"
        >
          <Download size={18} />
        </motion.a>
      </motion.div>
    </aside>
  );
}
