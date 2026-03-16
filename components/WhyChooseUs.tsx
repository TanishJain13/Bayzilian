'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Clock, Zap } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: 'Formaldehyde Free',
    description: 'Our revolutionary formula provides 100% straight results without any harmful chemicals or irritants.'
  },
  {
    icon: <Droplets className="w-10 h-10" />,
    title: 'Nano Technology',
    description: 'Ultra-refined particles penetrate deep into the hair cortex for internal repair and restructuring.'
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: 'Long Lasting',
    description: 'Enjoy impeccable results for up to 70 washes, maintaining shine and smoothness throughout.'
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Instant Results',
    description: 'Transformative results in a single session, saving time for both stylists and elite clients.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-[120px] px-4 bg-base-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-secondary/30"></div>
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">Excellence Guaranteed</span>
            <div className="h-[1px] w-12 bg-secondary/30"></div>
          </div>
          <h2 className="text-[4rem] font-serif font-bold text-primary mb-4 leading-tight">
            Why <span className="text-secondary italic font-light">Professionals</span> Prefer Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.47 }}
              viewport={{ once: true }}
              className="glass-card p-10 text-center relative overflow-hidden group/feature"
            >
              <div className="text-secondary mb-8 flex justify-center group-hover/feature:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover/feature:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-[1.7] mb-6 font-normal">
                {feature.description}
              </p>
              <div className="w-10 h-[2px] bg-secondary/20 group-hover/feature:w-full transition-all duration-700 mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
