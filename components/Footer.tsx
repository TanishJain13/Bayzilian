'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const links = {
  Products: [
    { label: 'Nanoplastia', href: '/products/nanoplastia-1000ml' },
    { label: 'Botox Treatment', href: '/products/pro-botos-1000ml' },
    { label: 'Hair Serums', href: '/products/serum-illuminator' },
    { label: 'Full Collection', href: '/products' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Distributors', href: '/distributor' },
    { label: 'Transformations', href: '/transformations' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/#' },
    { label: 'Terms of Service', href: '/#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-background relative pt-32 pb-16 overflow-hidden border-t border-primary/10">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] luxury-gradient opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8">
              Bayzilian <span className="text-primary italic">Professional</span>
            </h3>
            <p className="text-foreground/50 text-base leading-relaxed mb-10 max-w-sm">
              Defining the future of luxury haircare with advanced nanotechnology and uncompromising safety standards for elite salons.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:border-primary"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8 underline underline-offset-8 decoration-primary/20">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors duration-300 text-sm font-medium"
                      >
                        {item.label}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] text-foreground/30 uppercase tracking-[0.2em] font-bold">
            <span>© 2026 Bayzilian</span>
            <span className="w-1 h-1 rounded-full bg-primary/20"></span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-foreground/30 uppercase tracking-[0.2em] font-bold mr-2">Marketed By</span>
            <span className="text-xs font-bold text-primary tracking-widest px-4 py-2 border border-primary/10 rounded-full">EVERGLOSS COSMETICS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
