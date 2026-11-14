import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#031528] rounded-3xl border border-white/15 shadow-2xl overflow-hidden z-10 my-8 text-white max-h-[90vh] flex flex-col"
        >
          {/* Top Image Banner */}
          <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0 bg-slate-900">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031528] via-transparent to-black/60" />

            {/* Badges on Top */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#001c38]/90 text-xs font-bold text-white border border-white/20">
                {product.category}
              </span>
              {product.badge && (
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & Tagline at banner bottom */}
            <div className="absolute bottom-3 left-4 right-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {product.title}
              </h3>
              <p className="text-xs text-[#91d2fb] font-medium mt-0.5">
                {product.tagline}
              </p>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-xs sm:text-sm">
            
            {/* Description */}
            <div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                Overview
              </h4>
              <p className="leading-relaxed text-slate-200">
                {product.description}
              </p>
            </div>

            {/* Rates & Limit Highlights */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10">
              <div>
                <span className="text-[11px] text-slate-400 font-medium">Interest / Benefit</span>
                <div className="text-base font-extrabold text-emerald-400 mt-0.5">
                  {product.interestOrBenefit || 'Competitive Terms'}
                </div>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium">Tenure / Maximum Limit</span>
                <div className="text-base font-extrabold text-white mt-0.5">
                  {product.tenureOrLimit || 'Flexible Tenure'}
                </div>
              </div>
            </div>

            {/* Eligibility Requirements */}
            {product.eligibility && product.eligibility.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-2.5">
                  <UserCheck className="w-4 h-4 text-[#38bdf8]" />
                  <span>Eligibility Criteria</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.eligibility.map((el, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{el}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Required Documents */}
            {product.documents && product.documents.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-2.5">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Required Documents (100% Digital KYC)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.documents.map((doc, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span className="text-xs text-slate-200">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-2.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Product Features & Privileges</span>
              </div>
              <ul className="space-y-1.5">
                {product.highlights.map((hl, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attribution note if applicable */}
            {product.attribution && (
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-400/20 text-xs text-blue-200">
                <span className="font-bold">Entity Notice: </span> This product is offered and underwritten by {product.attribution}.
              </div>
            )}

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#020e1c] shrink-0">
            <span className="text-[11px] text-slate-400">
              Verified official product page on bajajfinserv.in
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
              >
                Close
              </button>

              <a
                href={product.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#0072ce] hover:bg-[#0084eb] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 transition-all hover:scale-[1.02]"
              >
                <span>Proceed to Official Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
