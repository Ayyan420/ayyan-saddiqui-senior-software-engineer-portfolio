'use client';

import { motion } from 'motion/react';
import { ShoppingBag, ExternalLink, Code2, Layout, Database } from 'lucide-react';

const marketplaceApps = [
  {
    name: 'Odoo AI Copilot',
    description: 'The ultimate Agentic AI Assistant. Chat with your database in plain English and automate tasks.',
    price: '$198.98',
    icon: Database,
    tag: 'Best Seller'
  },
  {
    name: 'Google Sheets & Excel Pro',
    description: 'Seamlessly connect Odoo 18 with Google Sheets and Excel for advanced data orchestration.',
    price: '$179.08',
    icon: ExternalLink,
  },
  {
    name: 'POS Multi Currency System',
    description: 'Add full multi-currency support to Odoo POS. Accept and manage payments in multiple currencies.',
    price: '$99.49',
    icon: ShoppingBag,
  },
  {
    name: 'Lumina Theme',
    description: 'Modern and elegant Odoo 18 Backend Theme for a superior user experience.',
    price: '$99.49',
    icon: Layout,
    tag: 'Theme'
  },
  {
    name: 'POS Restaurant Pro',
    description: 'Advanced features for restaurant operations including table management and optimized flows.',
    price: '$298.47',
    icon: Code2,
  },
  {
    name: 'Universal Chat',
    description: 'WhatsApp & Viber Unified Inbox with advanced analytics dashboard and mobile responsive UI.',
    price: 'Custom',
    icon: ExternalLink,
  }
];

export default function Marketplace() {
  return (
    <section className="py-10 md:py-12 px-6 md:px-10 max-w-7xl mx-auto" id="marketplace">
      <div className="mb-16 border-l-4 border-accent pl-6 md:pl-8">
        <span className="editorial-label text-accent mb-4 block">
          Odoo App Store
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
          Enterprise<br/>Ready Modules.
        </h2>
        <p className="text-gray-500 max-w-2xl leading-relaxed font-medium text-sm md:text-base">
          Purpose-built solutions designed to bridge efficiency gaps in Odoo ERP. 
          Trusted by businesses globally for performance and scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-y md:border border-border-subtle">
        {marketplaceApps.map((app, idx) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`editorial-card border-b border-border-subtle p-8 md:p-10 flex flex-col justify-between group h-full ${
              idx % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0 lg:border-r'
            } lg:border-b`}
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 border border-border-subtle flex items-center justify-center text-gray-500 group-hover:text-accent group-hover:border-accent transition-all">
                  <app.icon size={20} />
                </div>
                {app.tag && (
                  <span className="editorial-label text-[8px] bg-accent text-white px-2 py-0.5">
                    {app.tag}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">
                {app.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {app.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-8 border-t border-border-subtle">
              <span className="editorial-label text-accent font-black">{app.price}</span>
              <a 
                href={`https://apps.odoo.com/apps/modules/browse?author=Ayyan%20Saddiqui`}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-label text-gray-700 hover:text-white flex items-center gap-1 transition-colors"
              >
                Buy <ExternalLink size={10} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <motion.a
          href="https://apps.odoo.com/apps/modules/browse?author=Ayyan%20Saddiqui"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white text-black font-bold text-xs uppercase tracking-[0.2em] px-12 py-5 shadow-[4px_4px_0_0_#ff4e00] hover:shadow-none transition-all"
        >
          View Full Marketplace
        </motion.a>
      </div>
    </section>
  );
}
