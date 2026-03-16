'use client';

import { motion } from 'framer-motion';
import { Sparkles, Droplet, ShieldPlus, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function About({ preview = false }: { preview?: boolean }) {
  return (
    <section id="about" className="py-[120px] bg-rich-cream relative overflow-hidden">
      {/* Background textures and effects */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-secondary/30"></div>
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">Excellence Since Inception</span>
              <div className="h-[1px] w-12 bg-secondary/30"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-[4rem] font-serif font-bold text-primary mb-8 leading-tight break-words">
              Science of <br />
              <span className="text-secondary italic font-light">Transformation</span>
            </h2>
            <p className="text-[1.125rem] text-foreground/80 font-normal leading-[1.7] max-w-3xl mx-auto mb-12">
              Bayzilian Professional is a salon-grade haircare brand focused on advanced hair treatments. We've pioneered Nanoplastia technology to provide salon professionals with tools that deliver perfect results without compromise. Our treatments restore damaged hair, eliminate frizz, improve shine, and strengthen hair from within without relying on harsh chemicals. Nanoplastia uses nanotechnology to penetrate the hair shaft and deliver essential nutrients deep into the hair fiber, providing long-lasting smoothness and nourishment for all hair types.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { title: 'Sulfate Free', desc: '100% clean formulations for compromised hair.', icon: Droplet },
            { title: 'Nano-Technology', desc: 'Deep cellular repair via advanced molecular science.', icon: Sparkles },
            { title: 'Deep Repair', desc: 'Intense nourishment and structure restoration.', icon: ShieldPlus },
            { title: '100% Safe', desc: 'Compliant with the strictest global safety standards.', icon: Leaf }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-full border border-secondary/30 flex items-center justify-center text-secondary bg-secondary/5 mb-6 group-hover:scale-110 transition-transform duration-500">
                <item.icon size={28} className="stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about" className="group inline-flex flex-col items-center gap-3 text-primary font-bold tracking-widest uppercase text-sm">
            <span className="relative">
              Discover Our Story
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
