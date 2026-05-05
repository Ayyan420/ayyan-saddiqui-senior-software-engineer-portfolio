'use client';

import { motion } from 'motion/react';
import { CreditCard, Truck, RefreshCw, Zap, Cpu } from 'lucide-react';

const integrationCategories = [
  {
    title: 'Fintech & Payments',
    icon: CreditCard,
    items: ['Bank of Maldives', 'HyperPay', 'Apple Pay', 'STC Pay', 'PayPal', 'Tabby', 'Tamara'],
    description: 'Seamless checkout experiences with local and international credit solutions.'
  },
  {
    title: 'Logistics & Shipping',
    icon: Truck,
    items: ['DHL Express', 'Shippa Shipping', 'Beez Logistics', 'Last Mile Automation'],
    description: 'Real-time tracking and automated shipping label generation for global trade.'
  },
  {
    title: 'ERP & Accounting Sync',
    icon: RefreshCw,
    items: ['QuickBooks Online', 'Sage Business Cloud', 'External ERP Bridging'],
    description: 'Bidirectional data synchronization for unified financial reporting.'
  },
  {
    title: 'Connectivity & AI',
    icon: Zap,
    items: ['IATA Travel APIs', 'SMS Gateways (Infobip/Twilio)', 'Custom AI Integrations'],
    description: 'Extending core systems with smart automation and communication layers.'
  }
];

export default function Integrations() {
  return (
    <section className="py-10 md:py-12 px-6 md:px-10 max-w-7xl mx-auto" id="integrations">
      <div className="mb-16 border-l-4 border-accent pl-6 md:pl-8">
        <span className="editorial-label text-accent mb-4 block">
          Ecosystem Hub
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
          Seamless<br/>Integrations.
        </h2>
        <p className="text-gray-500 max-w-2xl leading-relaxed font-medium text-sm md:text-base">
          Specialized in bridging the gap between Odoo ERP and the world&apos;s leading 
          payment, shipping, and business intelligence platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y md:border border-border-subtle">
        {integrationCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`editorial-card border-b border-border-subtle p-8 md:p-10 group ${
              idx % 2 === 0 ? 'md:border-r' : ''
            } ${idx >= integrationCategories.length - 2 ? 'md:border-b-0' : ''}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 border border-border-subtle group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                <cat.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tighter">{cat.title}</h3>
            </div>
            
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              {cat.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {cat.items.map(item => (
                <span 
                  key={item} 
                  className="editorial-label text-[9px] border border-border-subtle px-3 py-1 text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
