'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';
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
    { label: 'Transformations', href: '/transformations' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/#' },
    { label: 'Terms of Service', href: '/#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/bayzilianprofessionalofficial/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:info@bayzilian.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-texture relative pt-32 pb-16 overflow-hidden border-t border-secondary/20">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] gold-divider opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">
              Bayzilian <span className="text-secondary italic font-light">Professional</span>
            </h3>
            <p className="text-foreground/80 text-base leading-relaxed mb-10 max-w-sm">
              Defining the future of luxury haircare with advanced nanotechnology and uncompromising safety standards for elite salons.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-500 hover:border-secondary shadow-sm"
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
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8 underline underline-offset-8 decoration-secondary/30">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 text-foreground/80 hover:text-secondary transition-colors duration-300 text-sm font-medium"
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-300"></span>
                        </span>
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
        <div className="pt-12 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4 text-xs text-foreground/80 uppercase tracking-[0.2em] font-bold">
              <span>© 2026 Bayzilian</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>All Rights Reserved</span>
            </div>
            <div className="text-xs text-foreground/80 uppercase tracking-widest font-bold">
              Developed by{' '}
              <a 
                href="https://stwebworks.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors hover:underline"
              >
                S&T Web Works
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-foreground/80 uppercase tracking-[0.2em] font-bold mr-2">Marketed By</span>
            <span className="text-xs font-bold text-secondary tracking-widest px-4 py-2 border border-secondary/30 rounded-full bg-white/50">EVERGLOSS COSMETICS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
