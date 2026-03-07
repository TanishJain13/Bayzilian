'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductShowcase from '@/components/ProductShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="space-y-0">
        <About preview />
        <ProductShowcase limit={3} />
        <WhyChooseUs />
      </div>
    </main>
  );
}
