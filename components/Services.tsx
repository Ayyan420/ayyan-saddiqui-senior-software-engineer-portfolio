'use client';

import { motion } from 'motion/react';
import { 
  Server, 
  Cpu, 
  Layers, 
  Settings,
  Monitor,
  Zap,
  Box
} from 'lucide-react';

const coreServices = [
  {
    title: 'Odoo  ERP  Implementation',
    icon: Box,
    description: 'End-to-end Odoo deployment, including module customization, seamless data migration, and workflow optimization for enterprise efficiency.'
  },
  {
    title: 'AI  Integrations',
    icon: Zap,
    description: 'Deploying agentic AI systems, LLM-powered business co-pilots, and custom RAG pipelines to automate decision-making across the stack.'
  },
  {
    title: 'System  Architecture',
    icon: Layers,
    description: 'Designing high-availability distributed systems that scale. Specialized in microservices, secure database modeling, and decoupled backends.'
  },
  {
    title: 'Solutions  Design',
    icon: Cpu,
    description: 'Translating complex business requirements into technical blueprints. Bridging the gap between strategy and execution with precision.'
  },
  {
    title: 'Server Setup & DevOps',
    icon: Server,
    description: 'Cloud infrastructure orchestration on AWS/DigitalOcean with Docker, Nginx, and automated CI/CD pipelines for production-ready systems.'
  },
  {
    title: 'Custom  Python  Systems',
    icon: Settings,
    isSpecial: true,
    description: 'Bespoke Python ecosystems tailored to unique operational flows that standard commercial software cannot handle.'
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-10 max-w-7xl mx-auto" id="services">
      <div className="mb-20 border-l-4 border-accent pl-6 md:pl-8">
        <span className="editorial-label text-accent mb-6 block tracking-[0.3em] uppercase opacity-80">
          Strategic Capabilities
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]">
          Engineering<br/>
          <span className="text-accent">&</span> Orchestration.
        </h2>
        <p className="text-gray-500 max-w-2xl leading-relaxed font-medium text-sm md:text-lg">
          Beyond code, I build the foundation for digital business. From initial architectural 
          blueprints to production server deployment, I handle the full technical lifecycle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-y md:border border-border-subtle">
        {coreServices.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`editorial-card border-b border-border-subtle p-10 md:p-12 flex flex-col group h-full transition-all duration-500 hover:bg-white/[0.02] ${
              idx % 3 !== 2 ? 'lg:border-r' : ''
            } ${idx % 2 === 0 ? 'sm:border-r lg:border-r' : 'sm:border-r-0 lg:border-r'}`}
          >
            <div className="mb-10">
              <service.icon size={36} className="text-white mb-8 group-hover:text-accent transition-all duration-300 transform group-hover:scale-110" />
              <h3 className={`text-2xl font-black text-white uppercase tracking-tighter mb-5 leading-none ${service.isSpecial ? 'tracking-[0.1em] text-accent' : ''}`}>
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 font-medium">
                {service.description}
              </p>
            </div>
            <div className="mt-auto">
               <span className="editorial-label text-[10px] text-gray-800 tracking-[0.2em] group-hover:text-gray-400 transition-colors">
                 Capability // 0{idx + 1}
               </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
