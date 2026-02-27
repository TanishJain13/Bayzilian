'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductShowcase from '@/components/ProductShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import Distributor from '@/components/Distributor';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="space-y-0">
        <About preview />
        <ProductShowcase limit={4} />
        <WhyChooseUs />
        <Distributor />
      </div>
    </main>
  );
}
