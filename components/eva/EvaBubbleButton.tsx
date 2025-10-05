import React from 'react';
import { motion } from 'framer-motion';

export default function EvaBubbleButton() {
  const handleClick = () => {
    try {
      window.dispatchEvent(new CustomEvent('eva:sound:open'));
      window.dispatchEvent(new CustomEvent('eva:toggle'));
      // eslint-disable-next-line no-console
      console.log('[eva] toggle dock');
    } catch {}
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Abrir chat con EVA"
      className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-sky-600 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <picture>
        <source srcSet="/eva/eva-baby-wave.webp" type="image/webp" />
        <img src="/eva/eva-baby-wave.png" alt="EVA" className="w-12 h-12 object-contain mx-auto" />
      </picture>
    </motion.button>
  );
}
