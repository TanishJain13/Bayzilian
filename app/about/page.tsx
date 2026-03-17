'use client';

import { motion } from 'framer-motion';
import About from '@/components/About';
import { Sparkles, ShieldCheck, Zap, HeartPulse, Clock } from 'lucide-react';

export default function AboutPage() {
    const details = [
        {
            icon: Zap,
            title: 'Nanoplastia Technology',
            desc: 'Our proprietary nanotechnology penetrates deep into the hair cortex, realigning the molecular structure for permanent smoothness without breaking sulfur bonds.'
        },
        {
            icon: ShieldCheck,
            title: 'Chemical-Free Formula',
            desc: '100% formaldehyde-free and carbocysteine-free. We use organic acids, acai extracts, and amino acids to ensure absolute safety for both stylists and clients.'
        },
        {
            icon: Clock,
            title: 'Long-Lasting Results',
            desc: 'Typical results last between 65 to 70 washes, maintaining mirror-like shine and manageable texture even in high humidity conditions.'
        },
        {
            icon: HeartPulse,
            title: 'Deep Internal Repair',
            desc: 'Beyond straightening, our formula replenishes mass and seals the cuticle, dramatically reducing breakage and improving overall hair health.'
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-24">
            {/* Header Section */}
            <section className="py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 luxury-gradient opacity-5"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <div className="h-[1px] w-8 bg-primary"></div>
                        <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Innovation in Science</span>
                        <div className="h-[1px] w-8 bg-primary"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-foreground mb-8 text-balance"
                    >
                        About <span className="text-primary italic">Bayzilian</span> Professional
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.16 }}
                        className="text-base sm:text-lg md:text-xl text-foreground/60 font-light leading-relaxed max-w-3xl mx-auto"
                    >
                        Welcome to Bayzilian Professional, where high-performance hair science meets the purity of nature. We are a premium hair care brand dedicated to providing salon-grade solutions that transform hair health while staying committed to ethical beauty.
                    </motion.p>
                </div>
            </section>

            {/* Main About Component */}
            <About />

            {/* Detailed Science Section */}
            <section className="py-32 px-4 bg-texture">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {details.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2rem] bg-card/50 border border-primary/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl luxury-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={28} className="text-primary-foreground" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-foreground mb-4">{item.title}</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <Sparkles className="text-primary mx-auto mb-8 animate-glow" size={48} />
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">
                        Experience the <br /> <span className="text-primary italic">Future of Haircare</span>
                    </h2>
                    <a href="https://www.instagram.com/bayzilianprofessionalofficial/" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-12 py-5 rounded-full btn-gold font-bold tracking-widest uppercase text-sm shadow-xl hover:shadow-secondary/20 transition-all shimmer-hover overflow-hidden relative"
                        >
                            Explore Our World on Instagram
                        </motion.button>
                    </a>
                </div>
            </section>
        </main>
    );
}
