'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from './ProductCard';

export default function ProductShowcase({ limit }: { limit?: number }) {
  const displayedProducts = limit ? products.slice(0, limit) : products;
  return (
    <section id="products" className="py-32 px-4 bg-texture">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] luxury-gradient opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.62 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-primary"></div>
              <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Exquisite Formulations</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              Professional <br />
              <span className="text-primary italic">Collection</span>
            </h2>
            <p className="text-xl text-foreground/50 font-light max-w-lg">
              Each product is a masterpiece of hair science, designed to deliver uncompromising results for the world's most elite salons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.62 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <a href="/catalog.pdf" download className="inline-block px-10 py-5 rounded-full border border-primary/20 text-primary font-bold hover:luxury-gradient hover:text-primary-foreground transition-all duration-500 hover:scale-105">
              Download Catalog
            </a>
          </motion.div>
        </div>

        {/* Product Grid - 3 per row for premium spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {displayedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {limit && (
          <div className="mt-20 text-center">
            <Link href="/products" className="inline-flex items-center gap-4 px-12 py-5 rounded-full luxury-gradient text-primary-foreground font-bold tracking-widest uppercase text-sm hover:scale-105 transition-all">
              View All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
