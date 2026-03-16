'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from './ProductCard';

export default function ProductShowcase({ limit }: { limit?: number }) {
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section id="products" className="py-[120px] bg-ivory-tint relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] gold-divider opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-secondary/50"></div>
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">The Salon Collection</span>
              <div className="h-[1px] w-8 bg-secondary/50"></div>
            </div>
            <h2 className="text-[4rem] font-serif font-bold text-primary mb-8 leading-tight text-glow">
              Professional <br />
              <span className="text-secondary italic font-light">Hair Systems</span>
            </h2>
            <p className="text-[1.125rem] text-foreground/70 max-w-2xl mx-auto leading-[1.7]">
              Explore our professional-grade formulas engineered for elite salon results. Advanced nanotechnology meets luxury hair restoration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <a
              href="/catalog.pdf"
              download
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full btn-gold font-bold tracking-widest uppercase text-xs shadow-md hover:shadow-secondary/30 transition-all duration-500 hover:scale-[1.03] shimmer-hover overflow-hidden relative"
            >
              Download Full Catalog
            </a>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {displayedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {limit && (
          <div className="mt-24 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-4 px-12 py-5 rounded-full btn-gold font-bold tracking-widest uppercase text-xs hover:scale-[1.03] transition-all shadow-xl hover:shadow-secondary/20 shimmer-hover overflow-hidden relative"
            >
              Explore All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
