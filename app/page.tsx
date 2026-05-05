import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import Skills from '@/components/Skills';
import ProjectRegistry from '@/components/ProjectRegistry';
import Marketplace from '@/components/Marketplace';
import Integrations from '@/components/Integrations';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main className="relative selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Sidebar />
      <Hero />
      
      <div className="relative z-10 space-y-4">
        <BentoGrid />
        
        <Services />
        
        <Skills />

        <Marketplace />

        <ProjectRegistry />

        <Integrations />
      </div>

      <Footer />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-border-subtle" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
    </main>
  );
}
