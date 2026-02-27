'use client';

import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '917506068946';
  const message = 'Hello! I am interested in Bayzilian Professional products.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.714.856 5.216 2.463 7.306L2.477 23l2.57-.827A9.864 9.864 0 0012.051 24c5.43 0 9.856-4.426 9.856-9.854 0-2.632-.648-5.123-1.886-7.306 1.238-2.183.768-4.681-1.118-6.799-1.885-2.118-5.285-2.785-8.052-1.47 0 0 0 0-.001 0 0 0 0 0 0 0z" />
      </svg>
    </motion.a>
  );
}
