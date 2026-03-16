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
        content: "Our clients specifically ask for the 'Bayzilian Gloss' now. It has become our most requested high-end treatment. The support we get is also excellent.",
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
        <section className="py-[120px] px-4 bg-rich-cream relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center p-6 rounded-full bg-secondary/10 text-secondary mb-12 shadow-inner"
                >
                    <Quote size={40} />
                </motion.div>

                <div className="relative min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                            transition={{ duration: 0.62, cubicBezier: [0.16, 1, 0.3, 1] }}
                            className="px-6 sm:px-12"
                        >
                            <div className="flex justify-center gap-1.5 mb-8">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={20} className="text-secondary fill-secondary drop-shadow-sm" />
                                ))}
                            </div>

                            <blockquote className="text-3xl sm:text-4xl lg:text-[3.5rem] font-serif font-bold italic text-primary mb-12 leading-[1.15] text-glow">
                                "{testimonials[currentIndex].content}"
                            </blockquote>

                            <div className="space-y-3">
                                <p className="text-2xl font-bold tracking-[0.2em] text-secondary uppercase">
                                    {testimonials[currentIndex].name}
                                </p>
                                <p className="text-sm text-foreground/50 font-medium">
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
                        className="w-14 h-14 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-500 hover:scale-[1.1] active:scale-95 shadow-sm"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-4">
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-secondary scale-125 shadow-gold' : 'bg-secondary/20'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-14 h-14 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-500 hover:scale-[1.1] active:scale-95 shadow-sm"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
