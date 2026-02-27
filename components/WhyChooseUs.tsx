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
    <section className="py-32 px-4 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Excellence Guaranteed</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-foreground">
            Why <span className="text-primary italic">Professional</span> Prefer Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[2.5rem] bg-card/30 border border-primary/5 hover:border-primary/30 transition-all duration-500 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 luxury-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="text-primary mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/40 leading-relaxed font-light mb-6">
                {feature.description}
              </p>
              <div className="w-10 h-[1px] bg-primary/20 group-hover:w-full transition-all duration-700 mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
