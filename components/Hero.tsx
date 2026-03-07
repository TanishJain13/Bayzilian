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

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-[-20%] z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-luxury.png')" }}
        ></div>
        {/* Gradients to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50"></div>
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10 flex pt-32 pb-48">
        <motion.div
          style={{ y: y2 }}
          className="flex flex-col items-start text-left max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.47 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">Salon Professional Brand</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.62 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 text-foreground"
          >
            Sculpted <br />
            <span className="text-primary italic">Perfection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.31, duration: 0.62 }}
            className="text-xl lg:text-2xl text-foreground mb-10 font-bold leading-relaxed text-shadow-sm"
          >
            The pinnacle of salon professional haircare. Advanced Nanoplastia technology for the world's most demanding stylists.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.47, duration: 0.62 }}
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
              <button className="px-10 py-5 rounded-full border-2 border-primary bg-background/50 backdrop-blur-md text-primary font-bold hover:bg-primary/20 transition-all flex items-center justify-center gap-2">
                <Sparkles size={18} /> Experience System
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.56 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-80 hidden sm:block z-10"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}
