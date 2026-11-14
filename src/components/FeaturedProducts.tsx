import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Check, 
  Info, 
  Sparkles,
  CreditCard,
  Briefcase,
  Tv,
  Wallet,
  TrendingUp,
  Coins,
  Bike,
  Car,
  Home,
  LineChart,
  QrCode,
  Stethoscope
} from 'lucide-react';
import { FEATURED_PRODUCTS, Product } from '../data/products';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
}

const getProductIcon = (id: string) => {
  switch (id) {
    case 'personal-loan': return CreditCard;
    case 'business-loan': return Briefcase;
    case 'consumer-durable-loan': return Tv;
    case 'insta-emi-card': return Wallet;
    case 'fixed-deposit': return TrendingUp;
    case 'gold-loan': return Coins;
    case 'two-wheeler-loan': return Bike;
    case 'car-financing': return Car;
    case 'home-loan': return Home;
    case 'loan-against-securities': return LineChart;
    case 'bajaj-pay': return QrCode;
    case 'professional-loan': return Stethoscope;
    default: return CreditCard;
  }
};

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onSelectProduct }) => {
  return (
    <section id="featured" className="py-24 relative bg-[#020817] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#38bdf8] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLAGSHIP FINANCIAL SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              12 Featured <span className="text-gradient-bajaj">Offerings</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              From instant personal liquidity and pre-approved shopping limits to CRISIL AAA fixed deposits and housing finance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all hover:scale-105"
            >
              <span>Explore All 50+ Products</span>
              <ArrowUpRight className="w-4 h-4 text-[#38bdf8]" />
            </a>
          </div>
        </div>

        {/* 12 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_PRODUCTS.map((product, index) => {
            const Icon = getProductIcon(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group relative rounded-3xl glass-card overflow-hidden border border-white/10 hover:border-blue-400/50 hover:shadow-bajaj-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041224] via-black/30 to-black/40" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#001428]/90 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-sm">
                        <Icon className="w-3.5 h-3.5 text-[#38bdf8]" />
                        {product.category}
                      </span>

                      {product.badge && (
                        <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-[10px] tracking-wide shadow-md">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Attribution if specific subsidiary like Housing Finance */}
                    {product.attribution && (
                      <div className="absolute bottom-2 left-3 right-3 text-[10px] bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-blue-200 truncate border border-white/10 font-medium">
                        Underwritten by: {product.attribution}
                      </div>
                    )}
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-white group-hover:text-[#38bdf8] transition-colors leading-tight">
                      {product.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#91d2fb] mt-1.5 line-clamp-1">
                      {product.tagline}
                    </p>

                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Metrics / Highlights */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Interest / Benefit</div>
                        <div className="font-extrabold text-emerald-400 text-sm mt-0.5">
                          {product.interestOrBenefit || 'Competitive Rates'}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Limit / Tenure</div>
                        <div className="font-extrabold text-white text-sm mt-0.5">
                          {product.tenureOrLimit || 'Flexible Tenure'}
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="mt-4 space-y-2">
                      {product.highlights.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-sky-400 shrink-0" />
                          <span className="line-clamp-1 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 mt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-white/10 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={product.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-[#0072ce] hover:bg-[#0084eb] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/40 transition-colors"
                    title={`Apply on official Bajaj Finserv site: ${product.title}`}
                  >
                    <span>Official Apply</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
