import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  RotateCw, 
  Sparkles, 
  Check, 
  ShoppingBag, 
  ShieldCheck, 
  ExternalLink,
  Store,
  Percent,
  CalendarCheck
} from 'lucide-react';

export const InstaEMICardShowcase: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [sliderLimit, setSliderLimit] = useState(250000);
  const [tenure, setTenure] = useState(12);

  const monthlyEMI = Math.round(sliderLimit / tenure);

  return (
    <section id="emi-card" className="py-24 relative bg-[#020b17] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDIA'S FAVORITE SHOPPING CARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Insta EMI Card — <span className="text-gradient-bajaj">Pre-Approved Limit</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Shop for 10 Lakh+ products on No-Cost EMI across 4,000+ cities with up to ₹3,00,000 pre-approved limit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive 3D Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="text-xs text-slate-400 mb-3 flex items-center gap-1.5 font-medium">
              <RotateCw className="w-3.5 h-3.5 text-[#38bdf8] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Tap the card to reveal security CVV and back details</span>
            </div>

            {/* Flippable 3D Card Container */}
            <div
              onClick={() => setFlipped(!flipped)}
              className="w-full max-w-md h-64 sm:h-72 cursor-pointer perspective-1000 select-none group"
            >
              <div
                className={`relative w-full h-full rounded-3xl transition-transform duration-700 preserve-3d shadow-[0_20px_50px_rgba(0,114,206,0.35)] ${
                  flipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* CARD FRONT */}
                <div className="absolute inset-0 backface-hidden rounded-3xl bg-gradient-to-tr from-[#001428] via-[#00386b] to-[#0072ce] p-6 sm:p-8 text-white border border-blue-400/30 flex flex-col justify-between overflow-hidden">
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Top Row: Brand & Chip */}
                  <div className="flex justify-between items-start z-10">
                    <div>
                      <div className="text-base sm:text-lg font-black tracking-widest text-white flex items-center gap-1">
                        BAJAJ <span className="text-[#38bdf8]">FINSERV</span>
                      </div>
                      <div className="text-[10px] text-blue-200 tracking-wider font-semibold uppercase">
                        Insta EMI Network Card
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-10 h-7 rounded bg-gradient-to-tr from-amber-400 to-yellow-200 p-0.5 shadow-md flex items-center justify-center">
                        <div className="w-6 h-4 border border-amber-800/50 rounded-xs flex items-center justify-center">
                          <div className="w-full h-0.5 bg-amber-800/40" />
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                        <path d="M12 19a8.5 8.5 0 0 0 0-14" />
                        <path d="M15.5 21.5a12 12 0 0 0 0-19" />
                      </svg>
                    </div>
                  </div>

                  {/* Middle Row: Limit & Masked Card Digits */}
                  <div className="z-10 my-auto">
                    <div className="text-xs text-blue-200 font-mono">
                      PRE-APPROVED LIMIT
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                      ₹{sliderLimit.toLocaleString('en-IN')}
                    </div>
                    <div className="text-base sm:text-lg font-mono tracking-widest text-slate-100 font-bold">
                      4028 •••• •••• 9924
                    </div>
                  </div>

                  {/* Bottom Row: Name, Validity & Network */}
                  <div className="flex justify-between items-end z-10 text-xs">
                    <div>
                      <div className="text-[9px] text-blue-200 uppercase font-mono">Cardholder</div>
                      <div className="font-bold tracking-wider text-slate-100">RAHUL SHARMA</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-blue-200 uppercase font-mono">Valid Thru</div>
                      <div className="font-bold tracking-wider font-mono">11/29</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded bg-white/20 text-white font-extrabold text-[10px] tracking-wider">
                        PLATINUM
                      </span>
                    </div>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-tr from-[#000e1f] via-[#002244] to-[#003e72] p-6 sm:p-8 text-white border border-white/20 flex flex-col justify-between overflow-hidden">
                  <div className="w-[115%] -mx-6 sm:-mx-8 h-10 bg-black mt-2 shadow-inner" />
                  
                  <div className="flex items-center justify-between px-2">
                    <div className="text-[10px] text-slate-300">
                      Authorized Signature • Non-Transferable
                    </div>
                    <div className="bg-white text-slate-900 px-3 py-1 rounded font-mono font-bold text-sm">
                      CVV: 572
                    </div>
                  </div>

                  <div className="space-y-1 text-[9px] text-slate-300 leading-tight">
                    <p>Issued by Bajaj Finance Limited. For customer support dial 086980 10101 or visit bajajfinserv.in.</p>
                    <p className="text-slate-400">Card is valid across all 1.5 Lakh+ partner merchant networks in India.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Slider to interactively adjust simulated card limit */}
            <div className="w-full max-w-md mt-6 p-4 rounded-2xl glass-panel border border-white/10">
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-slate-300">Simulate Shopping Limit:</span>
                <span className="text-[#38bdf8] font-mono text-sm font-bold">
                  ₹{sliderLimit.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={300000}
                step={10000}
                value={sliderLimit}
                onChange={(e) => setSliderLimit(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#0072ce]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹50,000</span>
                <span>₹1,75,000</span>
                <span>₹3,00,000 (Max)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Card Benefits & Instant Apply */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl glass-panel border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-[#38bdf8] flex items-center justify-center mb-2">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="font-bold text-white text-sm">No-Cost EMI</div>
                <div className="text-xs text-slate-400 mt-1">Split cost with zero extra interest charges across thousands of products.</div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <Store className="w-5 h-5" />
                </div>
                <div className="font-bold text-white text-sm">1.5 Lakh+ Stores</div>
                <div className="text-xs text-slate-400 mt-1">Accepted at Amazon, Flipkart, Croma, Reliance Digital, and local stores.</div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div className="font-bold text-white text-sm">Flexible Tenures</div>
                <div className="text-xs text-slate-400 mt-1">Choose comfortable repayment windows from 3 to 24 months.</div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="font-bold text-white text-sm">Zero Foreclosure</div>
                <div className="text-xs text-slate-400 mt-1">Prepay remaining balance anytime after first EMI with 0 penalties.</div>
              </div>
            </div>

            {/* Simulated Live EMI Breakdown Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#031c38] to-[#011428] border border-blue-500/30">
              <div className="flex items-center justify-between text-xs text-blue-200 mb-2">
                <span>Simulated Product Price: ₹{sliderLimit.toLocaleString('en-IN')}</span>
                <span>Tenure: {tenure} Months</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Monthly No-Cost EMI</div>
                  <div className="text-2xl font-extrabold text-white font-mono">
                    ₹{monthlyEMI.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-400">/month</span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {[6, 9, 12, 18, 24].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTenure(t)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-colors ${
                        tenure === t
                          ? 'bg-[#0072ce] text-white'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {t}M
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.bajajfinserv.in/emi-network-card"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-[#0072ce] to-[#00509e] hover:from-[#0084eb] hover:to-[#005fae] text-white font-bold text-sm rounded-xl flex items-center gap-2 shadow-lg shadow-blue-900/40 transition-all hover:scale-[1.02]"
              >
                <span>Apply for Insta EMI Card on Official Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
