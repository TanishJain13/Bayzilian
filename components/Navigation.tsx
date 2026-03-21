'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const navHeight = useTransform(scrollY, [0, 100], ['5rem', '4rem']);
  // Subtle transition from transparent to a soft greyish cream on scroll
  const navBg = useTransform(
    scrollY,
    [0, 100],
    [
      'rgba(248, 246, 241, 0)',         // transparent cream at top
      'rgba(225, 221, 213, 0.96)',      // greyish cream when scrolled
    ],
  );
  const navBorder = useTransform(scrollY, [0, 100], ['rgba(201, 162, 39, 0)', 'rgba(201, 162, 39, 0.2)']);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Transformations', href: '/transformations' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      style={{ height: navHeight, backgroundColor: navBg, borderColor: navBorder }}
      className="fixed top-0 w-full backdrop-blur-md border-b z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img src="/logo.png" alt="Bayzilian Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold tracking-widest uppercase relative group overflow-hidden transition-all duration-300 ${pathname === link.href ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform transition-transform duration-300 origin-left ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            {/* Can add another CTA here later if needed */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2 hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl rounded-[24px] mt-2 border border-secondary/20 shadow-xl"
        >
          <div className="py-6 px-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all font-serif italic text-lg ${pathname === link.href ? 'text-primary bg-secondary/10 font-bold' : 'text-foreground/70 hover:text-primary hover:bg-secondary/5'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label} <ChevronRight size={16} />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
