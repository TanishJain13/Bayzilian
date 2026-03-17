'use client';

import { motion } from 'framer-motion';
import { Droplet, ShieldPlus, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function About({ preview = false }: { preview?: boolean }) {
  const intro =
    'Welcome to Bayzilian Professional, where high-performance hair science meets the purity of nature. We are a premium hair care brand dedicated to providing salon-grade solutions that transform hair health while staying committed to ethical beauty.';

  const mission =
    'Our mission is to empower both stylists and clients with professional-grade treatments that deliver "mirror-like" shine and long-lasting smoothness without compromising on safety. We believe that everyone deserves the confidence of a "perfect hair day," every single day.';

  return (
    <section id="about" className="py-[120px] bg-rich-cream relative overflow-hidden">
      {/* Background textures and effects */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-secondary/30"></div>
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">About Bayzilian Professional</span>
              <div className="h-[1px] w-12 bg-secondary/30"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-[4rem] font-serif font-bold text-primary mb-8 leading-tight text-balance">
              High-performance hair science, <br className="hidden sm:block" />
              <span className="text-secondary italic font-light">rooted in nature</span>
            </h2>
            <p className="text-[1.05rem] sm:text-[1.125rem] text-foreground/80 font-normal leading-[1.8] max-w-3xl mx-auto">
              {preview ? (
                <>
                  {intro} <span className="hidden sm:inline">{mission}</span>
                </>
              ) : (
                intro
              )}
            </p>
          </motion.div>
        </div>

        {!preview && (
          <div className="max-w-5xl mx-auto mb-20">
            <div className="space-y-8 sm:space-y-10">
              <div className="glass-card p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4 text-center sm:text-left">
                  Our Mission
                </h3>
                <p className="text-[1.05rem] sm:text-[1.125rem] text-foreground/80 leading-[1.85] max-w-3xl mx-auto sm:mx-0">
                  {mission}
                </p>
              </div>

              <div className="glass-card p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6 text-center sm:text-left">
                  The Bayzilian Standard
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-8 text-center sm:text-left max-w-3xl mx-auto sm:mx-0">
                  We pride ourselves on creating formulas that are as gentle as they are effective. Every product in our range is crafted with the following promises:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Sulfate-Free & Paraben-Free',
                      desc: 'We’ve removed harsh chemicals to ensure your hair retains its natural oils and color vibrancy.',
                      icon: Droplet,
                    },
                    {
                      title: 'Cruelty-Free',
                      desc: 'None of our products or ingredients are ever tested on animals.',
                      icon: Leaf,
                    },
                    {
                      title: 'Professional Integrity',
                      desc: 'Designed for experts, our formulas focus on deep structural repair, intense hydration, and complete frizz control.',
                      icon: ShieldPlus,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-[1.5rem] border border-secondary/20 bg-background/30 p-6 sm:p-7 flex gap-4"
                    >
                      <div className="shrink-0 w-11 h-11 rounded-full border border-secondary/30 flex items-center justify-center text-secondary bg-secondary/5">
                        <item.icon size={22} className="stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-serif font-bold text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          {preview && (
            <Link href="/about" className="group inline-flex flex-col items-center gap-3 text-primary font-bold tracking-widest uppercase text-sm">
              <span className="relative">
                Discover Our Story
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500"></span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
