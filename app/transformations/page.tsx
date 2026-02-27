'use client';

import BeforeAfter from '@/components/BeforeAfter';
import { motion } from 'framer-motion';

export default function TransformationsPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <section className="py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <div className="h-[1px] w-8 bg-primary"></div>
                        <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Visual Results</span>
                        <div className="h-[1px] w-8 bg-primary"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8"
                    >
                        Art of <span className="text-primary italic">Transformation</span>
                    </motion.h1>
                    <p className="text-xl text-foreground/50 font-light max-w-2xl mx-auto">
                        Witness the power of Bayzilian Nanoplastia through real salon results. From coarse and damaged to mirror-smooth perfection.
                    </p>
                </div>
            </section>

            {/* Original Transformations Component */}
            <BeforeAfter />

            {/* Additional Staggered Gallery could go here */}
            <section className="py-32 px-4 bg-texture">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-primary/10"
                        >
                            <img src={`/gallery-${i}.jpg`} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
