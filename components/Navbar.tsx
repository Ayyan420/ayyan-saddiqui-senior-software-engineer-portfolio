'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Stack', href: '#stack' },
  { name: 'Marketplace', href: '#marketplace' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Connect', href: '#connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-[100] w-full"
    >
      <div 
        className={`flex items-center justify-between px-6 md:px-10 py-6 transition-all duration-500 border-b ${
          scrolled || mobileMenuOpen
            ? 'bg-[#050505]/95 backdrop-blur-md border-border-subtle' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
          Ayyan<span className="text-accent text-2xl md:text-3xl">.</span>Saddiqui
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="editorial-label text-gray-500 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <motion.a
            href="#connect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="editorial-label text-accent font-black border-b border-accent hidden sm:block"
          >
            Work with me
          </motion.a>

          <button 
            className="lg:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#050505] border-b border-border-subtle p-10 flex flex-col gap-8 shadow-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black text-white uppercase tracking-tighter hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-8 border-t border-border-subtle">
             <a 
               href="#connect"
               onClick={() => setMobileMenuOpen(false)}
               className="editorial-label text-accent font-black border-b border-accent uppercase tracking-widest"
             >
               Work with me
             </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
