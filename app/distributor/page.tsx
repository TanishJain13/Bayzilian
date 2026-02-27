'use client';

import Distributor from '@/components/Distributor';
import { motion } from 'framer-motion';
import { Building2, LineChart, Users2, ShieldPlus } from 'lucide-react';

export default function DistributorPage() {
    const steps = [
        { title: 'Inquiry', icon: Building2, desc: 'Submit your profile and business details for review.' },
        { title: 'Validation', icon: ShieldPlus, desc: 'Our team verifies salon/distribution credentials.' },
        { title: 'Onboarding', icon: Users2, desc: 'Get access to marketing assets and technical training.' },
        { title: 'Growth', icon: LineChart, desc: 'Start distributing the world\'s most advanced nanoplastia.' }
    ];

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
                        <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Partnership Opportunity</span>
                        <div className="h-[1px] w-8 bg-primary"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8"
                    >
                        Global <span className="text-primary italic">Distribution</span>
                    </motion.h1>
                    <p className="text-xl text-foreground/50 font-light max-w-2xl mx-auto">
                        Bayzilian Professional is expanding its footprint. Join a network that prioritizes innovation, luxury, and salon success.
                    </p>
                </div>
            </section>

            <Distributor />

            {/* Partnership Steps */}
            <section className="py-32 px-4 bg-texture">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold text-center mb-20">Onboarding <span className="text-primary italic">Framework</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative text-center group">
                                <div className="w-20 h-20 rounded-3xl luxury-gradient flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform">
                                    <step.icon size={32} className="text-primary-foreground" />
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-4">{step.title}</h3>
                                <p className="text-sm text-foreground/40 leading-relaxed font-light">{step.desc}</p>
                                {idx < 3 && <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[1px] luxury-gradient opacity-20 -z-10" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section id="apply" className="py-32 px-4">
                <div className="max-w-3xl mx-auto p-12 rounded-[3rem] border border-primary/10 bg-card/30 backdrop-blur-xl shadow-2xl">
                    <h2 className="text-3xl font-serif font-bold text-center mb-12">Submit Your <span className="text-primary italic">Credential</span></h2>
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-primary/60 ml-1">Business Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-primary/20 p-4 focus:border-primary focus:outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-primary/60 ml-1">Contact Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-primary/20 p-4 focus:border-primary focus:outline-none transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-primary/60 ml-1">Region of Interest</label>
                            <input type="text" className="w-full bg-transparent border-b border-primary/20 p-4 focus:border-primary focus:outline-none transition-all" />
                        </div>
                        <button className="w-full py-6 rounded-full luxury-gradient text-primary-foreground font-bold tracking-widest uppercase text-sm shadow-xl hover:scale-[1.02] transition-all">
                            Request Partnership Brochure
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
