'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

import Link from 'next/link';

export default function About({ preview = false }: { preview?: boolean }) {
  return (
    <section id="about" className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${preview ? 'border-b border-primary/5' : ''}`}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-scroll md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/hero-luxury.png')" }}
      ></div>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10 px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Our Heritage</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">
            Science of <br />
            <span className="text-primary italic">Transformation</span>
          </h2>
          <p className="text-xl text-foreground/70 font-medium leading-relaxed mb-12 max-w-2xl text-shadow-sm">
            Bayzilian Professional is not just a brand; it's a commitment to excellence. We've pioneered Nanoplastia technology to provide salon professionals with tools that deliver perfect results without compromise.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
            {[
              'Formaldehyde-Free',
              'Advanced Nanotechnology',
              'Ethically Sourced',
              'Cruelty Free'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CheckCircle2 size={12} />
                </div>
                <span className="text-sm font-bold tracking-wide text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {preview ? (
            <Link href="/about" className="group flex flex-col items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
              Learn More About Us
              <div className="w-12 h-[2px] bg-primary group-hover:w-24 transition-all duration-500"></div>
            </Link>
          ) : (
            <div className="group flex flex-col items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm cursor-default">
              Discover Our Story
              <div className="w-12 h-[2px] bg-primary"></div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
