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
    <section
      ref={containerRef}
      className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 overflow-hidden z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-[100%] min-h-[100%] w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          poster="/hero-luxury.png"
        >
          {/* Replace the src below with your actual video file */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
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
            <div className="h-[1px] w-12 bg-secondary/80"></div>
            <span className="text-secondary/90 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">Salon Professional Brand</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.62 }}
            className="text-4xl sm:text-5xl lg:text-[5.5rem] font-serif font-bold leading-[1.1] mb-6 sm:mb-8 text-white text-glow break-words"
          >
            Sculpted <br />
            <span className="text-secondary italic font-light">Perfection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.31, duration: 0.62 }}
            className="text-base sm:text-[1.125rem] text-white/90 mb-8 sm:mb-10 font-normal leading-[1.7] max-w-xl"
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
              <button className="relative px-10 py-5 rounded-full btn-gold font-bold group overflow-hidden shadow-2xl hover:shadow-secondary/30 transition-all hover:scale-[1.03] active:scale-95 shimmer-hover">
                <span className="relative flex items-center justify-center gap-3">
                  Shop Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
            <Link href="/about">
              <button className="px-10 py-5 rounded-full border border-secondary text-secondary font-bold bg-background/40 hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-95">
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
