'use client';

import { motion } from 'framer-motion';
import { Star, Eye } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: any;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-card flex flex-col h-full overflow-hidden group/card"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden m-2 rounded-[20px]">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1 rounded-full luxury-gold-gradient text-white text-[9px] uppercase tracking-[0.2em] font-bold shadow-lg">
            {product.badge || 'Premium'}
          </div>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-white/40 backdrop-blur-md px-2 py-1 rounded-full border border-secondary/20 shadow-sm">
          <Star size={10} className="text-secondary fill-secondary" />
          <span className="text-primary text-[10px] font-bold">5.0</span>
        </div>

        {/* Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
        />

        {/* Overlay Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-primary/20 flex items-center justify-center gap-4 transition-all duration-500"
        >
          <Link href={`/products/${product.slug}`} className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
            <Eye size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 pt-2">
        <div className="flex justify-between items-start mb-4">
          <Link href={`/products/${product.slug}`} className="group/title">
            <h3 className="text-xl font-serif font-bold text-primary group-hover/title:text-secondary transition-colors leading-tight">
              {product.name}
            </h3>
          </Link>
          <div className="text-secondary font-bold text-base whitespace-nowrap bg-secondary/5 px-3 py-1 rounded-lg">
            {product.price}
          </div>
        </div>

        <p className="text-foreground/80 text-sm leading-[1.7] mb-6 font-normal line-clamp-3">
          {product.description}
        </p>

        {/* Features List */}
        <div className="flex-1 mb-6">
          <ul className="space-y-2">
            {product.features.slice(0, 2).map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2 text-[13px] text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-secondary/10 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold">
            {product.volume} Professional
          </span>
          <Link href={`/products/${product.slug}`} className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 group/btn">
            View Details <div className="w-4 h-[1px] bg-secondary group-hover/btn:w-6 transition-all"></div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
