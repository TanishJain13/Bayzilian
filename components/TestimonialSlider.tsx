'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Creative Director, Elite Salon',
        content: "The Nanoplastia system has completely revolutionised our salon's straightening services. The results are consistent, breathtaking, and most importantly, safe for our clients.",
        rating: 5
    },
    {
        id: 2,
        name: 'Michael Rossi',
        role: 'Master Stylist',
        content: "I've tried every professional system on the market, but Bayzilian's Serum Illuminator is in a league of its own. The shine is unmatched and the heat protection is superior.",
        rating: 5
    },
    {
        id: 3,
        name: 'Isabella Chen',
        role: 'Salon Owner',
        content: "Our clients specifically ask for the 'Bayzilian Gloss' now. It has become our most requested high-end treatment. The support we get as a distributor is also excellent.",
        rating: 5
    }
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 px-4 bg-texture relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 text-primary mb-12"
                >
                    <Quote size={32} />
                </motion.div>

                <div className="relative min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                            className="px-6 sm:px-12"
                        >
                            <div className="flex justify-center gap-1 mb-8">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-primary fill-primary" />
                                ))}
                            </div>

                            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold italic text-foreground mb-12 leading-tight">
                                "{testimonials[currentIndex].content}"
                            </blockquote>

                            <div className="space-y-2">
                                <p className="text-xl font-bold tracking-widest text-primary uppercase">
                                    {testimonials[currentIndex].name}
                                </p>
                                <p className="text-sm text-foreground/40 font-medium">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-12 mt-16">
                    <button
                        onClick={prev}
                        className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-3">
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-primary scale-125' : 'bg-primary/20'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
