'use client';

import { motion } from 'motion/react';

const erpProjects = [
  'RAWNAQ Travel', 'MuExpress', 'MuStore', 'Linkserve', 'Best Oil', 
  'Clasiko', 'Hydrokleen Maldives', 'Newana', 'Silverquest', 'UTEC', 
  'Grassflorist', 'Happymarket', 'Healthglow', 'Olivetree', 'Gore Technologies', 
  'Frozen Delight', 'Betco Limited', 'Stonelines', 'Minum', 'Nivalon', 
  'Ticoat', 'Dalba', 'FluidXControllers', 'Vixnext', 'Nass', 'Twill', 'CDLFoods'
];

export default function ProjectRegistry() {
  return (
    <section className="py-10 md:py-12 px-6 md:px-10 max-w-7xl mx-auto" id="projects-registry">
      <div className="mb-16 border-l-4 border-accent pl-6 md:pl-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
        <div>
          <span className="editorial-label text-accent mb-4 block">
            ERP Implementation Registry
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-0 md:mb-6 uppercase tracking-tighter leading-[0.9]">
            Selected<br/>Client Assets.
          </h2>
        </div>
        <div className="md:block">
           <span className="editorial-label text-gray-800 text-[8px]">Index // v2026.0</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y md:border border-border-subtle mb-12">
        <div className="editorial-card p-8 md:p-10 border-b md:border-b-0 md:border-r border-border-subtle">
          <span className="editorial-label text-accent mb-2 block font-bold">Featured Case: 01</span>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter mb-4">ZATCA Phase-2 Integration</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Full-scale implementation of Saudi Arabia&apos;s Fatoora requirements inside Odoo. 
            Automated XML signing and real-time clearance systems.
          </p>
          <div className="flex gap-2">
            {['Fintech', 'Compliance', 'Security'].map(tag => (
              <span key={tag} className="editorial-label text-[7px] border border-border-subtle px-2 py-0.5">{tag}</span>
            ))}
          </div>
        </div>
        <div className="editorial-card p-8 md:p-10 border-border-subtle">
          <span className="editorial-label text-accent mb-2 block font-bold">Featured Case: 02</span>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter mb-4">RAWNAQ  Travel  Tourism  ERP</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Bespoke tourism ecosystem with complex multi-currency booking engines 
            and global inventory synchronization.
          </p>
          <div className="flex gap-2">
            {['Logistics', 'Travel', 'Odoo'].map(tag => (
              <span key={tag} className="editorial-label text-[7px] border border-border-subtle px-2 py-0.5">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border-y md:border border-border-subtle">
        {erpProjects.map((project, idx) => (
          <motion.div
            key={project}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.03 }}
            className={`editorial-card border-b md:border-b border-border-subtle p-4 sm:p-6 group flex flex-col justify-between aspect-square md:aspect-auto ${
              idx % 2 === 0 ? 'border-r' : 'border-r-0 md:border-r'
            }`}
          >
            <div>
              <span className="editorial-label text-gray-800 text-[8px] mb-2 block group-hover:text-accent transition-colors">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-tight">
                {project}
              </h3>
            </div>
            <div className="mt-4">
              <div className="w-0 group-hover:w-full h-px bg-accent transition-all duration-500" />
            </div>
          </motion.div>
        ))}
        
        {/* Placeholder for future growth */}
        <div className="editorial-card border-0 border-r border-b border-border-subtle p-6 flex items-center justify-center bg-accent/[0.02]">
           <span className="editorial-label text-gray-800 animate-pulse">Syncing New...</span>
        </div>
      </div>
    </section>
  );
}
