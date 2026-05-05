'use client';

import { motion } from 'motion/react';
import { 
  Terminal, 
  Cloud, 
  Layout, 
  Settings2,
  Code
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend architecture',
    icon: Terminal,
    color: '#007AFF',
    skills: ['Python', 'Flask', 'Django', 'PostgreSQL', 'Redis', 'REST APIs']
  },
  {
    title: 'Enterprise ERP',
    icon: Settings2,
    color: '#6366F1',
    skills: ['Odoo v10-v19', 'OWL Framework', 'QWeb', 'XML', 'Odoo.sh']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: '#10B981',
    skills: ['Docker', 'Nginx', 'AWS', 'Linode', 'DigitalOcean', 'CI/CD']
  },
  {
    title: 'Frontend & UI',
    icon: Layout,
    color: '#EC4899',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Bootstrap']
  },
  {
    title: 'Integrations',
    icon: Code,
    color: '#F59E0B',
    skills: ['Payment Gateways', 'Banking APIs', 'WhatsApp', 'QuickBooks', 'Sage']
  }
];

export default function Skills() {
  return (
    <section className="py-10 md:py-12 px-6 md:px-10 max-w-7xl mx-auto" id="stack">
      <div className="mb-16 border-l-4 border-accent pl-6 md:pl-8">
        <span className="editorial-label text-accent mb-4 block">
          Technology Substrate
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
          Architectural<br/>Deep-Dive.
        </h2>
        <p className="text-gray-500 max-w-2xl leading-relaxed font-medium text-sm md:text-base">
          A multi-disciplinary approach to engineering. I select tools that 
          prioritize scalability, data integrity, and low-latency performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-y md:border border-border-subtle">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`editorial-card border-b border-border-subtle p-8 md:p-10 group ${
              idx % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0 lg:border-r'
            } ${idx === skillCategories.length - 1 ? 'border-b-0' : ''} lg:border-b`}
          >
            <h3 className="editorial-label text-white mb-8 flex items-center gap-3">
              <cat.icon size={16} className="text-accent" /> {cat.title}
            </h3>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {cat.skills.map(skill => (
                <span 
                  key={skill}
                  className="editorial-label text-[9px] text-gray-500 hover:text-accent transition-colors cursor-default"
                >
                  • {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
