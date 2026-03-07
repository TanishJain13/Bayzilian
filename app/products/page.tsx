'use client';

import ProductShowcase from '@/components/ProductShowcase';
import { motion } from 'framer-motion';

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            {/* Search/Header */}
            <section className="py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <div className="h-[1px] w-8 bg-primary"></div>
                        <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Salon Exclusive</span>
                        <div className="h-[1px] w-8 bg-primary"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8"
                    >
                        The <span className="text-primary italic">Collection</span>
                    </motion.h1>
                    <p className="text-xl text-foreground/50 font-light max-w-2xl mx-auto">
                        Discover our full range of professional-grade Nanoplastia systems and maintenance products.
                    </p>
                </div>
            </section>

            {/* Show all products */}
            <ProductShowcase />
        </main>
    );
}
