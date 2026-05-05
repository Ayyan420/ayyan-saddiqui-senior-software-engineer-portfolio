'use client';

import { motion } from 'motion/react';
import { 
  Terminal, 
  Database, 
  Brain, 
  Globe, 
  Zap, 
  Code2, 
  LayoutDashboard,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function BentoGrid() {
  return (
    <section className="py-10 md:py-12 px-6 md:px-10 max-w-7xl mx-auto" id="experience">
      <div className="mb-16 border-l-4 border-accent pl-6 md:pl-8">
        <span className="editorial-label text-accent mb-4 block">
          Technical Portfolio
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
          Selected<br/>Work & Impact.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-y md:border border-border-subtle">
        
        {/* About Me / Vision (Large) */}
        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-8 md:row-span-2 editorial-card p-8 sm:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-border-subtle"
        >
          <div className="relative z-10">
            <span className="editorial-label text-accent mb-6 block">
              Architectural Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">
              Digital<br/> 
              <span className="text-gray-800">Ecosystems.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              Senior Software Engineer with 5+ years of expertise building 
              scalable backend systems, enterprise ERP software (Odoo), and 
              AI automation.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-2">
            {['Python', 'PostgreSQL', 'AWS', 'TensorFlow', 'React'].map(tag => (
              <span key={tag} className="editorial-label text-[8px] bg-white/5 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid (Right) */}
        <div className="md:col-span-4 md:row-span-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 md:border-l-0">
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="editorial-card p-6 sm:p-8 border-b sm:border-b-0 sm:border-r md:border-r-0 md:border-b border-border-subtle flex flex-col justify-center"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-none flex items-center gap-1 tracking-tighter">
               5<span className="text-accent">+</span>
            </div>
            <div className="editorial-label text-[10px] sm:text-xs">
              Years Experience
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="editorial-card p-6 sm:p-8 border-b sm:border-b-0 sm:border-r md:border-r-0 md:border-b border-border-subtle flex flex-col justify-center"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 leading-none tracking-tighter">v10-v19</div>
            <div className="editorial-label text-[10px] sm:text-xs">
              Odoo Lifecycle
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="editorial-card p-6 sm:p-8 border-0 flex flex-col justify-center"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-none tracking-tighter">06+</div>
            <div className="editorial-label text-[10px] sm:text-xs">
              Regions Served
            </div>
          </motion.div>
        </div>

        {/* UPGENIQ Featured Card (Wide) */}
        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-7 md:row-span-2 editorial-card p-8 sm:p-12 border-t md:border-t-0 md:border-r border-border-subtle group"
        >
          <div className="flex justify-between items-start mb-10">
            <div>
              <span className="editorial-label text-accent mb-2 block">
                Featured Product: 01
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">UPGENIQ AI</h3>
            </div>
            <Brain className="text-white/10 hidden sm:block" size={40} />
          </div>

          <p className="text-gray-400 max-w-md mb-10 font-medium text-sm md:text-base">
            A unified neural workspace for startups. Combines AI marketing, 
            algorithmic finance, and strategy orchestration into a central neural engine.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-10">
            {['Neural Post Maker', 'Budget Forecasting', 'Smart Invoicing', 'SOP Automation'].map(item => (
              <div key={item} className="flex items-center gap-3 editorial-label text-[9px] text-gray-500">
                <span className="w-1 h-1 bg-accent" /> {item}
              </div>
            ))}
          </div>

          <a 
            href="https://upgeniq.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="editorial-label text-accent font-bold border-b border-accent py-1 hover:text-white hover:border-white transition-all"
          >
            Launch Workspace
          </a>
        </motion.div>

        {/* Odoo AI Copilot Card */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="md:col-span-5 md:row-span-2 editorial-card p-8 sm:p-12 border-t md:border-t-0 border-border-subtle group"
        >
          <span className="editorial-label text-accent mb-2 block">
            Agentic Systems: 02
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-6">Odoo AI Copilot</h3>
          <p className="text-gray-400 font-medium leading-relaxed mb-10 text-sm md:text-base">
            Chat with your Odoo database in plain English. 
            Dynamically analyzes schema, generates reports, and drafts emails.
          </p>
          
          <div className="mb-10">
            <a 
              href="https://apps.odoo.com/apps/modules/18.0/odoo_ai_copilot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="editorial-label text-accent font-bold border-b border-accent py-1 hover:text-white hover:border-white transition-all uppercase"
            >
              View on Odoo Apps
            </a>
          </div>

          <div className="mt-10 pt-10 border-t border-border-subtle flex items-center justify-between">
            <span className="editorial-label text-white">Python / LLM</span>
            <span className="editorial-label text-green-500 font-bold">V18 Available</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
