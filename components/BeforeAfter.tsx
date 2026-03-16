'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';

const transformations = [
  {
    id: 1,
    before: '/before.png',
    after: '/after.png',
    title: 'Nanoplastia Smoothing',
    description: 'Transform before treatment frizzy hair into after treatment smooth straight hair. 100% straight results with mirror-like shine and zero frizz.'
  },
  {
    id: 2,
    before: '/before.png',
    after: '/after.png',
    title: 'Argan Restoration',
    description: 'Deep repair for chemically treated hair, restoring elasticity.'
  }
];

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="gallery" className="py-[120px] px-4 bg-base-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] gold-divider opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-secondary"></div>
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs">Visual Proof</span>
            <div className="h-[1px] w-8 bg-secondary"></div>
          </motion.div>
          <h2 className="text-[4rem] font-serif font-bold text-primary mb-6">
            Real <span className="text-secondary italic font-light">Transformations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.39 }}
              >
                <h3 className="text-[2.5rem] font-serif font-bold text-primary mb-6 italic leading-tight">
                  {transformations[currentIndex].title}
                </h3>
                <p className="text-lg text-foreground/70 font-normal leading-relaxed mb-12">
                  {transformations[currentIndex].description}
                </p>

                <div className="flex gap-4">
                  {transformations.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-[3px] transition-all duration-500 rounded-full ${idx === currentIndex ? 'bg-secondary w-20' : 'bg-secondary/30 w-12 hover:bg-secondary/60'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Side */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              ref={containerRef}
              className="relative aspect-[9/16] max-h-[75vh] w-full sm:w-2/3 lg:w-[85%] rounded-[24px] overflow-hidden cursor-ew-resize border-4 border-white shadow-2xl hover:shadow-[0_20px_60px_rgba(201,162,39,0.15)] transition-shadow"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              {/* After Image (Background) */}
              <img
                src={transformations[currentIndex].after}
                className="absolute inset-0 w-full h-full object-cover"
                alt="After"
              />

              {/* Before Image (Clip) */}
              <motion.div
                className="absolute inset-0 w-full h-full object-cover border-r border-white/20"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={transformations[currentIndex].before}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Before"
                />
              </motion.div>

              {/* Labels pinned to sides so they remain readable when swiping */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-6 sm:px-8 z-20 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white shadow-lg">
                  Before
                </div>
                <div className="bg-secondary/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white shadow-lg">
                  After
                </div>
              </div>

              {/* Slider Handle */}
              <motion.div
                className="absolute top-0 bottom-0 w-[4px] bg-white z-20 shadow-[0_0_15px_rgba(201,162,39,0.5)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-secondary border border-secondary/20 hover:scale-110 transition-transform">
                  <GripVertical size={28} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
