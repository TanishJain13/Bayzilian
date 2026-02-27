'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y: y2, opacity }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">Salon Professional Brand</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 text-foreground"
            >
              Sculpted <br />
              <span className="text-primary italic">Perfection</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-foreground/70 mb-10 font-light leading-relaxed max-w-xl"
            >
              The pinnacle of salon professional haircare. Advanced Nanoplastia technology for the world's most demanding stylists.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link href="/products">
                <button className="relative px-10 py-5 rounded-full luxury-gradient text-primary-foreground font-bold group overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all">
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    Shop Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/about">
                <button className="px-10 py-5 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                  <Sparkles size={18} /> Experience System
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image with Parallax */}
          <motion.div
            style={{ y: y1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
              <img
                src="/hero-luxury.jpg"
                alt="Luxury salon experience"
                className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <div className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Signature Result</p>
                  <h3 className="text-white text-2xl font-serif italic">The Bayzilian Gloss</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-50 hidden sm:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}
