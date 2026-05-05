'use client';

import { motion } from 'motion/react';
import { MousePointer2, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 px-6 md:px-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center md:text-left max-w-6xl w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="editorial-label mb-6 block text-accent text-center md:text-left"
        >
          Senior Software Engineer // Global Delivery
        </motion.div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-black text-white mb-10 w-full uppercase tracking-tighter leading-[0.8] text-center md:text-left">
          Ayyan Saddiqui:<br/>
          <span className="text-accent">Architecting</span><br/>
          Systems.
        </h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center md:items-start justify-between border-t border-border-subtle pt-10 text-center md:text-left">
          <p className="text-base md:text-lg text-gray-500 max-w-md font-medium leading-relaxed">
            Engineering scalable ERP systems, automation platforms, and AI-powered 
            business tools with Python and modern cloud stacks. Based in Lahore, building for the world.
          </p>
          
          <div className="flex gap-4">
             <div className="flex flex-col gap-1 items-center md:items-start">
                <span className="stat-val text-3xl md:stat-val">5+</span>
                <span className="stat-lbl">Years Exp</span>
             </div>
             <div className="w-px h-10 bg-border-subtle mx-4" />
             <div className="flex flex-col gap-1 items-center md:items-start">
                <span className="stat-val text-3xl md:stat-val">30+</span>
                <span className="stat-lbl">Projects</span>
             </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-accent text-white font-bold text-sm uppercase tracking-widest px-10 py-5 shadow-[4px_4px_0_0_#fff] hover:shadow-none transition-all text-center"
          >
            Explore Portfolio
          </motion.a>
          
          <div className="editorial-label text-gray-700 text-center sm:text-left text-[10px] sm:text-xs">
            Python • Odoo • AWS • Postgres • Docker • AI
          </div>
        </div>
      </motion.div>

      {/* Simplified background for Editorial feel */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/[0.02] border-l border-border-subtle -z-10" />
    </section>
  );
}
