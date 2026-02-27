'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';

const transformations = [
  {
    id: 1,
    before: '/before-1.jpg',
    after: '/after-1.jpg',
    title: 'Nanoplastia Smoothing',
    description: '100% straight results with mirror-like shine and zero frizz.'
  },
  {
    id: 2,
    before: '/before-2.jpg',
    after: '/after-2.jpg',
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
    <section id="gallery" className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Visual Proof</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Real <span className="text-primary italic">Transformations</span>
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
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl font-serif font-bold text-foreground mb-6 italic">
                  {transformations[currentIndex].title}
                </h3>
                <p className="text-xl text-foreground/50 font-light leading-relaxed mb-12">
                  {transformations[currentIndex].description}
                </p>

                <div className="flex gap-4">
                  {transformations.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-12 h-[2px] transition-all duration-500 ${idx === currentIndex ? 'bg-primary w-20' : 'bg-primary/20'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Side */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-ew-resize border border-primary/10 shadow-2xl"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              {/* After Image (Background) */}
              <img
                src={transformations[currentIndex].after}
                className="absolute inset-0 w-full h-full object-cover"
                alt="After"
              />
              <div className="absolute top-6 right-8 z-10 bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">After</div>

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
                <div className="absolute top-6 left-8 z-10 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">Before</div>
              </motion.div>

              {/* Slider Handle */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-primary border border-primary/20">
                  <GripVertical size={24} />
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
