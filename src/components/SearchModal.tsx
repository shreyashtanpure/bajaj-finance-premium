import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight, Layers, CreditCard } from 'lucide-react';
import { COMPLETE_CATALOGUE, Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = COMPLETE_CATALOGUE.filter((p) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.highlights.some((h) => h.toLowerCase().includes(q))
    );
  }).slice(0, 8); // Top 8 results for clean command palette view

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Search Palette Container */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-[#00172e] rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-10 text-white"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
            <Search className="w-5 h-5 text-[#38bdf8] shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search loans, fixed deposits, cards, insurance, investments..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
            <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {query ? `Search Results (${searchResults.length})` : 'Popular Recommendations'}
            </div>

            {searchResults.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-[#38bdf8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">
                      {item.tagline}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                    {item.category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}

            {searchResults.length === 0 && (
              <div className="py-8 text-center text-xs text-slate-400">
                No matching financial products found for "{query}".
              </div>
            )}
          </div>

          {/* Quick Footer info */}
          <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span>Press <kbd className="font-mono text-slate-300 px-1 bg-white/10 rounded">ESC</kbd> to exit</span>
            <span>Bajaj Finance Product Directory</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
