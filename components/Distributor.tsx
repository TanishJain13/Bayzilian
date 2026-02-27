'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Distributor() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/luxury-pattern.svg')] opacity-[0.03]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="rounded-[4rem] luxury-gradient p-[1px] shadow-2xl overflow-hidden">
          <div className="bg-background/90 backdrop-blur-3xl px-8 py-20 md:p-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-8">
                Distribute <br />
                <span className="text-primary italic">Excellence</span>
              </h2>

              <p className="text-xl text-foreground/50 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Join our elite global network of distributors and bring Nanoplastia innovation to salons worldwide. Partner with a brand that defined the standard of luxury.
              </p>

              <Link href="/distributor#apply">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full luxury-gradient text-primary-foreground font-bold tracking-[0.2em] uppercase text-sm shadow-2xl transition-all"
                >
                  Apply for Partnership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Benefit Grid */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {[
                { icon: Star, title: 'Bespoke Support', desc: 'White-glove marketing assistance and promotional assets.' },
                { icon: TrendingUp, title: 'Strategic Growth', desc: 'Accelerate your revenue with salon-exclusive high-demand products.' },
                { icon: Globe, title: 'Global Prestige', desc: 'Represent a brand recognized in elite styling centers internationally.' },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <benefit.icon size={24} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground/40 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
