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
                        className="text-[4rem] md:text-[6.5rem] font-serif font-bold text-primary mb-8 leading-tight"
                    >
                        Connect with <span className="text-secondary italic font-light">Us</span>
                    </motion.h1>
                </div>
            </section>

            <Contact />

            {/* Map Placeholder */}
            <section id="directions" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="aspect-[21/9] rounded-[24px] overflow-hidden border-2 border-transparent shadow-xl relative group">
                        <div className="absolute inset-0 bg-secondary/5 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm transition-all group-hover:bg-secondary/10">
                            <div className="w-20 h-20 rounded-full border border-secondary/30 flex items-center justify-center mb-6 bg-white/50">
                                <div className="w-4 h-4 rounded-full luxury-gradient animate-ping"></div>
                            </div>
                            <h3 className="text-3xl font-serif font-bold mb-2 text-primary">Signature Studios, Mumbai</h3>
                            <p className="text-foreground/70 font-medium">Evergloss Cosmetics, Headquarters, MH, India</p>
                            <button className="mt-8 text-secondary font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2 hover:gap-4 transition-all">
                                Get Directions <div className="h-[1px] w-8 bg-secondary" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
