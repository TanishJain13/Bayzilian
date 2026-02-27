'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = '917506068946';
  const message = 'Hello! I am interested in Bayzilian Professional products.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="px-4 py-2 rounded-xl glass-effect border border-primary/20 text-primary text-sm font-medium shadow-2xl"
          >
            Chat with us
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          },
          scale: { duration: 0.5 },
          opacity: { duration: 0.5 }
        }}
        whileHover={{ scale: 1.1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        className="group relative p-4 rounded-full glass-effect border border-primary/20 text-primary shadow-2xl hover:border-primary/50 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full luxury-gradient opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />

        <MessageCircle size={28} className="relative z-10" />

        {/* Outer pulse */}
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse opacity-20" />
      </motion.a>
    </div>
  );
}
