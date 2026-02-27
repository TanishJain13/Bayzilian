'use client';

import { motion } from 'framer-motion';
import { Eye, Star } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="h-full flex flex-col rounded-[2rem] overflow-hidden bg-card/40 border border-primary/10 hover:border-primary/40 transition-all duration-500 backdrop-blur-md hover:shadow-[0_20px_50px_rgba(15,46,35,0.3)]">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Badge */}
          <div className="absolute top-6 left-6 z-10">
            <div className="px-4 py-1.5 rounded-full luxury-gradient text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg">
              {product.badge}
            </div>
          </div>

          {/* Rating */}
          <div className="absolute top-6 right-6 z-10 flex items-center gap-1 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <Star size={12} className="text-primary fill-primary" />
            <span className="text-white text-[10px] font-bold">5.0</span>
          </div>

          {/* Image */}
          <motion.img
            src={product.image}
            alt={product.name}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />

          {/* Overlay Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-primary/20 flex items-center justify-center gap-4 transition-all duration-500"
          >
            <Link href={`/products/${product.slug}`} className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl">
              <Eye size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-8 bg-gradient-to-b from-transparent to-primary/5">
          <div className="mb-4">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-xs tracking-[0.2em] uppercase text-primary/60 font-medium">
              Professional {product.volume}
            </p>
          </div>

          {/* Features List */}
          <div className="flex-1 mb-8">
            <ul className="space-y-3">
              {product.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-foreground/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price and Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-primary/10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary/40 mb-1">MRP</p>
              <div className="text-2xl font-serif italic font-bold text-foreground">
                {product.price}
              </div>
            </div>

            <Link href={`/products/${product.slug}`}>
              <button className="relative overflow-hidden group/btn px-6 py-3 rounded-full border border-primary/20 text-primary font-bold text-sm hover:text-primary-foreground transition-all">
                <div className="absolute inset-0 luxury-gradient translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">Details</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Glow border on hover */}
      <div className={`absolute -inset-[1px] rounded-[2rem] luxury-gradient -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`} />
    </motion.div>
  );
}
