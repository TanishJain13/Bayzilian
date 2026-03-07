'use client';

import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <section className="pt-20 pb-10 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <div className="h-[1px] w-8 bg-primary"></div>
                        <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Reach Our Experts</span>
                        <div className="h-[1px] w-8 bg-primary"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8"
                    >
                        Connect with <span className="text-primary italic">Us</span>
                    </motion.h1>
                </div>
            </section>

            <Contact />

            {/* Map Placeholder */}
            <section id="directions" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-primary/10 shadow-2xl relative">
                        <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center text-center p-8">
                            <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center mb-6">
                                <div className="w-4 h-4 rounded-full luxury-gradient animate-ping"></div>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-2">Signature Studios, Mumbai</h3>
                            <p className="text-foreground/40 font-light">Evergloss Cosmetics, Headquarters, MH, India</p>
                            <button className="mt-8 text-primary font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2 hover:gap-4 transition-all">
                                Get Directions <div className="h-[1px] w-8 bg-primary" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
