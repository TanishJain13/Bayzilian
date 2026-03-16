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
                        transition={{ delay: 0.08 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground mb-6 sm:mb-8 break-words"
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
        </main>
    );
}
