'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

import Link from 'next/link';

export default function About({ preview = false }: { preview?: boolean }) {
  return (
    <section id="about" className={`py-32 px-4 bg-background relative overflow-hidden ${preview ? 'border-b border-primary/5' : ''}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-primary/10 shadow-2xl">
              <img
                src="/about-luxury.jpg"
                alt="Bayzilian Philosophy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            {/* Decal */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 luxury-gradient rounded-full p-1 shadow-2xl hidden md:block">
              <div className="w-full h-full rounded-full bg-background flex flex-col items-center justify-center text-center p-4">
                <Sparkles className="text-primary mb-2" size={24} />
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary">Est. 2018</p>
                <p className="text-xs font-serif italic text-foreground">Advanced Hair Science</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-primary"></div>
              <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Our Heritage</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">
              Science of <br />
              <span className="text-primary italic">Transformation</span>
            </h2>
            <p className="text-xl text-foreground/50 font-light leading-relaxed mb-10">
              Bayzilian Professional is not just a brand; it's a commitment to excellence. We've pioneered Nanoplastia technology to provide salon professionals with tools that deliver perfect results without compromise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                'Formaldehyde-Free',
                'Advanced Nanotechnology',
                'Ethically Sourced',
                'Cruelty Free'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-medium tracking-wide text-foreground/70">{item}</span>
                </div>
              ))}
            </div>

            {preview ? (
              <Link href="/about" className="group flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-sm">
                Learn More About Us
                <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
              </Link>
            ) : (
              <button className="group flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-sm">
                Discover Our Story
                <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
