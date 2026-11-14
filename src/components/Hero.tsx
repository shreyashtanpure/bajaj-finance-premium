import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Calculator, 
  ShieldCheck, 
  Award, 
  Users, 
  Building2, 
  Download,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Phone3DCanvas } from './Phone3DCanvas';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-6 pb-14 bg-radial-hero bg-grid-pattern">
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[520px] h-[520px] bg-gradient-to-br from-[#0072ce]/25 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-24 right-10 w-[480px] h-[480px] bg-gradient-to-bl from-[#00a3ff]/20 to-transparent rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Credibility & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Concept & Verification Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-400/30 text-blue-200 text-xs font-bold mb-6 shadow-bajaj-glow backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00a3ff] animate-ping" />
              <span>FINTECH PORTFOLIO CONCEPT</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#38bdf8] font-semibold">Official: bajajfinserv.in</span>
            </motion.div>

            {/* Main Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] mb-5 font-sans"
            >
              FINANCE YOUR{' '}
              <span className="text-gradient-hero block sm:inline">
                POSSIBILITIES
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-bold text-slate-100 max-w-2xl mb-4 leading-relaxed"
            >
              Discover financial solutions designed for your ambitions.
            </motion.p>

            {/* Descriptive Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
            >
              An interactive digital portfolio concept inspired by Bajaj Finance Limited. Explore instant Personal Loans up to ₹40 Lakh, pre-approved Insta EMI cards, Fixed Deposits with CRISIL AAA ratings yielding up to 8.35% p.a., and seamless payments across India.
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#featured"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#0072ce] via-[#0060b2] to-[#004c8c] hover:from-[#0084eb] hover:to-[#005fae] shadow-lg shadow-blue-600/40 transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Explore 12 Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calculator className="w-4 h-4 text-[#38bdf8]" />
                <span>EMI Calculator</span>
              </a>

              {/* Direct Download ZIP Button for Git */}
              <a
                href="/bajaj-finance-premium.zip"
                download="bajaj-finance-premium.zip"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                title="Download clean repository ZIP ready for GitHub"
              >
                <Download className="w-4 h-4" />
                <span>Download Git ZIP</span>
              </a>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full"
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-white font-black text-lg sm:text-xl font-mono">
                  <Users className="w-4 h-4 text-[#38bdf8]" />
                  <span>88M+</span>
                </div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Active Customers</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-white font-black text-lg sm:text-xl font-mono">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>4,000+</span>
                </div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Urban & Rural Branches</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-white font-black text-lg sm:text-xl font-mono">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>CRISIL AAA</span>
                </div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Highest Safety Rating</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-white font-black text-lg sm:text-xl font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#00a3ff]" />
                  <span>₹3.5+ L Cr</span>
                </div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Assets Under Mgt.</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Interactive Titanium Phone */}
          <div className="lg:col-span-5 flex justify-center">
            <Phone3DCanvas />
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="flex justify-center mt-4">
        <a
          href="#featured"
          aria-label="Scroll to featured products"
          className="p-2 text-slate-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-[#38bdf8]" />
        </a>
      </div>
    </section>
  );
};
