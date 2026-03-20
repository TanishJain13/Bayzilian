'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Whatsapp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
    />
  </svg>
);

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
            duration: 2.34,
            repeat: Infinity,
            ease: "easeInOut"
          },
          scale: { duration: 0.39 },
          opacity: { duration: 0.39 }
        }}
        whileHover={{ scale: 1.1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        className="group relative p-4 rounded-full glass-effect border border-green-500/20 text-green-500 shadow-2xl hover:border-green-500/50 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-green-500/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

        <Whatsapp
          className="relative z-10 text-[#25D366]"
          style={{ fontSize: 28 }}
          aria-hidden="true"
          focusable="false"
        />

        {/* Outer pulse */}
        <div className="absolute inset-0 rounded-full border border-green-500/30 animate-pulse opacity-20" />
      </motion.a>
    </div>
  );
}
