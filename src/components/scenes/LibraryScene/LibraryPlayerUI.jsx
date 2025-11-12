import React from 'react';
import { motion } from 'framer-motion';

export default function LibraryPlayerUI() {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/60 text-white px-4 py-2 rounded-lg text-sm text-center backdrop-blur-sm"
      >
        <div className="font-semibold mb-1">📚 Library Controls</div>
        <div className="flex gap-4 justify-center text-xs">
          <span>🖱️ Click to move</span>
          <span>⌨️ WASD to walk</span>
          <span>🔄 Right-click drag camera</span>
          <span>🔍 Scroll to zoom</span>
        </div>
        <div className="text-xs mt-1 opacity-80">
          💬 Click Cipher to talk
        </div>
      </motion.div>
    </div>
  );
}
