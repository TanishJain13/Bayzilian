'use client';

import { products } from '@/lib/products';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, ShieldCheck, Sparkles, Droplets, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function ProductDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const product = products.find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
                    <Link href="/products" className="text-primary hover:underline">Back to all products</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumbs / Back */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors mb-12 uppercase text-[10px] tracking-[0.2em] font-bold"
                >
                    <ArrowLeft size={14} /> Back to Collection
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-primary/10 shadow-2xl relative">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>

                            {product.badge && (
                                <div className="absolute top-6 left-6 px-6 py-2 rounded-full luxury-gradient text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold shadow-xl">
                                    {product.badge}
                                </div>
                            )}
                        </div>

                        {/* Decal Card */}
                        <div className="absolute -bottom-10 -right-10 p-1 rounded-3xl luxury-gradient hidden md:block">
                            <div className="bg-background rounded-[1.4rem] p-6 text-center">
                                <ShieldCheck className="text-primary mx-auto mb-2" size={32} />
                                <p className="text-[10px] uppercase font-bold text-primary mb-1">Authentic Quality</p>
                                <p className="text-xs italic font-serif">Salon Certified</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-10">
                        <div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-6 text-primary">
                                <Sparkles size={16} />
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Premium Professional Range</span>
                            </motion.div>
                            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-4">
                                {product.name}
                            </h1>
                            <p className="text-xl text-primary font-serif italic mb-8">
                                Professional {product.volume}
                            </p>
                            <p className="text-xl text-foreground/60 font-light leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* USPs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-card/40 border border-primary/5">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <ChevronRight size={14} />
                                    </div>
                                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-10 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-8">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-primary/40 mb-1">Suggested Salon Price</p>
                                <p className="text-4xl font-serif font-bold italic text-foreground">{product.price}</p>
                            </div>

                            <Link href="/distributor" className="w-full sm:w-auto">
                                <button className="w-full px-12 py-5 rounded-full luxury-gradient text-primary-foreground font-bold tracking-widest uppercase text-sm shadow-2xl hover:scale-105 transition-all">
                                    Distributor Inquiry
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
