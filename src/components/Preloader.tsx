import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#001428] text-white select-none"
      >
        <div className="relative flex flex-col items-center px-6 max-w-md w-full">
          {/* Animated Glow Halo */}
          <div className="absolute w-48 h-48 bg-bajaj-500/20 rounded-full blur-3xl animate-pulse" />

          {/* Logo Emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#003e72] via-[#0072ce] to-[#00a3ff] p-0.5 shadow-bajaj-glow">
              <div className="w-full h-full bg-[#001c38] rounded-2xl flex items-center justify-center">
                <svg className="w-11 h-11 text-white" viewBox="0 0 64 64" fill="none">
                  <path
                    d="M18 16H34C41 16 46 20 46 26C46 30 43 33 39 34.5C44 36 48 40 48 46C48 52 42 56 34 56H18V16Z"
                    stroke="#00a3ff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M18 35H35" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
                  <circle cx="48" cy="18" r="4" fill="#38bdf8" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Brand Wordmark */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="text-2xl font-extrabold tracking-wider text-white">
              BAJAJ <span className="text-[#00a3ff]">FINANCE</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-medium mt-1">
              Finance Your Possibilities
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-full bg-[#0a2540] rounded-full h-1.5 overflow-hidden mb-3 border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0072ce] via-[#00a3ff] to-[#38bdf8] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="flex justify-between w-full text-xs text-slate-400 font-mono">
            <span>Portfolio Prototype Concept</span>
            <span>{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
