import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Info, 
  Sparkles, 
  ChevronRight,
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPLETE_CATALOGUE, CATALOGUE_CATEGORIES, Product } from '../data/products';

interface ProductCatalogueProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return COMPLETE_CATALOGUE.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalogue" className="py-24 relative bg-[#020b16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#38bdf8] text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>OFFICIAL BUSINESS VERTICALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Complete Product <span className="text-gradient-bajaj">Catalogue</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Explore 50+ official financial products spanning Consumer, MSME, Commercial, Rural, Deposits, Payments, and Advisory Services.
          </p>
        </div>

        {/* Search and Category Filter Toolbar */}
        <div className="mb-10 space-y-4">
          {/* Search Bar Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by product name, category, or feature (e.g. Solar, Gold, CIBIL, Doctors)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#07192f] border border-white/10 rounded-2xl py-3.5 pl-12 pr-10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#0072ce] focus:ring-2 focus:ring-[#0072ce]/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
            {CATALOGUE_CATEGORIES.map((category) => {
              const count =
                category === 'All'
                  ? COMPLETE_CATALOGUE.length
                  : COMPLETE_CATALOGUE.filter((p) => p.category === category).length;
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0072ce] text-white shadow-md shadow-blue-900/40'
                      : 'bg-[#06172d] text-slate-300 hover:bg-[#0b2447] hover:text-white border border-white/5'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400 px-1">
          <div>
            Showing <span className="font-bold text-white">{filteredProducts.length}</span> verified solutions in{' '}
            <span className="text-[#38bdf8] font-semibold">{selectedCategory}</span>
          </div>
          {searchQuery && (
            <div>
              Search results for <span className="text-white">"{searchQuery}"</span>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl glass-panel p-4 flex flex-col justify-between border border-white/10 hover:border-blue-400/40 hover:bg-[#081e3a]/80 transition-all duration-200 group"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] uppercase font-bold text-[#38bdf8] tracking-wider px-2 py-0.5 rounded bg-blue-950/60 border border-blue-400/20">
                        {product.category}
                      </span>
                      {product.badge && (
                        <span className="text-[9px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-white text-base group-hover:text-[#38bdf8] transition-colors leading-snug">
                      {product.title}
                    </h3>

                    <p className="text-[11px] text-[#91d2fb] font-medium mt-1 line-clamp-1">
                      {product.tagline}
                    </p>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {product.attribution && (
                      <div className="mt-2 text-[9px] text-slate-400 italic">
                        {product.attribution}
                      </div>
                    )}
                  </div>

                  {/* Bottom Footer Actions */}
                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group/btn"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#38bdf8] group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <a
                      href={product.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-white bg-[#0072ce] hover:bg-[#0084eb] px-2.5 py-1 rounded-lg font-medium transition-colors"
                      title="Apply on Official Website"
                    >
                      <span>Official</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 glass-panel rounded-2xl border border-white/10 max-w-md mx-auto">
            <Filter className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No products found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              We couldn't find any financial products matching "{searchQuery}". Try searching for loans, cards, or deposits.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
