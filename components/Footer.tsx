'use client';

import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Briefcase } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ayyan-saddiqui-211547204', name: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/ayyan420', name: 'GitHub' },
    { icon: Mail, href: 'mailto:ayyansaddiqui420@gmail.com', name: 'Email' },
    { icon: Briefcase, href: 'https://www.upwork.com/freelancers/~014dd13cfe9dc6a97b', name: 'Upwork' },
  ];

  return (
    <footer className="py-32 border-t border-border-subtle bg-[#050505] overflow-hidden" id="connect">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4 foot-md">
          <div className="text-4xl font-black tracking-tighter text-white uppercase mb-10">
            Ayyan<span className="text-accent">.</span>Saddiqui
          </div>
          <p className="text-gray-500 max-w-sm mb-12 text-sm leading-relaxed font-medium">
            Building systems that think, scale, and transform. Based in Lahore, 
            Pakistan. Open for strategic partnerships and high-impact engineering roles and freelance projects also, feel free to reach me out.
          </p>
          
          <div className="flex gap-10">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#ff4e00' }}
                className="text-gray-700 transition-colors"
                title={link.name}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <span className="editorial-label text-accent mb-8 block">Navigation</span>
          <div className="flex flex-col gap-4">
            {['Home', 'Experience', 'Stack', 'Marketplace'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="editorial-label text-gray-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <span className="editorial-label text-accent mb-8 block">Marketplace</span>
          <div className="flex flex-col gap-4">
            <a href="https://apps.odoo.com/apps/modules/browse?author=Ayyan%20Saddiqui" target="_blank" className="editorial-label text-gray-500 hover:text-white transition-colors">Odoo Modules</a>
            <a href="https://apps.odoo.com/apps/themes/browse?author=Ayyan%20Saddiqui" target="_blank" className="editorial-label text-gray-500 hover:text-white transition-colors">Odoo Themes</a>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <span className="editorial-label text-accent mb-8 block">Reach Out</span>
          <div className="flex flex-col gap-4">
            <a href="mailto:ayyansaddiqui420@gmail.com" className="editorial-label text-white hover:text-accent transition-colors lowercase font-black text-xs break-all">
              ayyansaddiqui420@gmail.com
            </a>
            <a href="https://www.upwork.com/freelancers/~014dd13cfe9dc6a97b" target="_blank" className="editorial-label text-gray-500 hover:text-white transition-colors">
              Upwork Profile
            </a>
            <a href="https://github.com/ayyan420" target="_blank" className="editorial-label text-gray-500 hover:text-white transition-colors">
              GitHub Repo
            </a>
            <a href="https://www.linkedin.com/in/ayyan-saddiqui-211547204" target="_blank" className="editorial-label text-gray-500 hover:text-white transition-colors">
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-32 flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-border-subtle">
        <div className="editorial-label text-gray-800">
          © 2026 Ayyan Saddiqui.
        </div>
        <div className="flex items-center gap-2">
           <span className="editorial-label text-gray-800">
              Open To Work: <span className="text-accent animate-pulse">24/7</span>
           </span>
        </div>
      </div>
    </footer>
  );
}
