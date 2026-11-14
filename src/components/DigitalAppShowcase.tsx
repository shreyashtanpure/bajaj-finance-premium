import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  QrCode, 
  Zap, 
  CreditCard, 
  TrendingUp, 
  Star, 
  ShieldCheck, 
  Download, 
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const DigitalAppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upi' | 'bills' | 'loans' | 'fd'>('upi');

  const tabs = [
    { id: 'upi', label: 'Bajaj Pay UPI', icon: QrCode },
    { id: 'bills', label: 'BBPS Bill Pay', icon: Zap },
    { id: 'loans', label: 'Loan Manager', icon: CreditCard },
    { id: 'fd', label: 'FD & Invest', icon: TrendingUp },
  ];

  return (
    <section className="py-24 relative bg-[#010915] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#38bdf8] text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>THE ALL-IN-ONE SUPER APP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            One Super App. <span className="text-gradient-bajaj">Infinite Solutions.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Manage your personal loans, repay EMIs, scan any merchant UPI QR, book high-interest fixed deposits, and recharge FASTag in seconds.
          </p>
        </div>

        {/* Feature Tabs Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#061830] border border-white/10 overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#0072ce] text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulated App Feature Showcase Screen */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'upi' && (
              <motion.div
                key="upi"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase">
                    Zero Surcharge Digital Payments
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                    Bajaj Pay UPI & QR
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    Send money instantly to anyone, scan any retail shop QR code, link any Indian bank account, and earn rewarding Bajaj Coins with every payment.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Interoperable with all BHIM, Google Pay, and PhonePe QR codes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Multi-account bank switching with one biometric touch</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Exclusive cashback vouchers on grocery and supermarket spends</span>
                    </li>
                  </ul>
                  <a
                    href="https://www.bajajfinserv.in/bajaj-pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    <span>Explore Bajaj Pay</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-[#041427] border border-blue-500/20 shadow-inner flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white p-2 mb-4 shadow-lg">
                    <QrCode className="w-full h-full text-slate-900" />
                  </div>
                  <div className="text-sm font-bold text-white">Scan Any Merchant QR</div>
                  <div className="text-xs text-slate-400 mt-1">UPI ID: rahulsharma@bajaj</div>
                  <div className="mt-4 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/20">
                    Instant Bank Settlement
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'bills' && (
              <motion.div
                key="bills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    Bharat Bill Payment System (BBPS)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                    Utility Bills & FASTag
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    Clear electricity, piped gas, water, broadband, municipal taxes, and mobile recharge bills with automated fetch and payment reminders.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Over 20,000+ registered Indian utility providers on BBPS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Automated FASTag toll recharge before balance drops</span>
                    </li>
                  </ul>
                  <a
                    href="https://www.bajajfinserv.in/bill-payment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    <span>Pay Bills on Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: 'Electricity', icon: Zap, state: 'Fetch Due' },
                    { title: 'FASTag', icon: CreditCard, state: 'Auto-Recharge' },
                    { title: 'Broadband', icon: Smartphone, state: 'Instant' },
                    { title: 'Gas Cylinder', icon: ShieldCheck, state: 'Book Cylinder' },
                  ].map((b, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#041427] border border-white/5 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#38bdf8] flex items-center justify-center mb-2">
                        <b.icon className="w-4 h-4" />
                      </div>
                      <div className="font-bold text-white text-xs">{b.title}</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-1">{b.state}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'loans' && (
              <motion.div
                key="loans"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase">
                    Loan Portfolio Manager
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                    Track & Repay Loans
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    Download statement of accounts, tax certificates (ITR Form 16 interest certs), manage part-prepayments, and trigger 1-click top-up loans.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Instant loan statement & NOC download</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Pre-approved top-up loans with zero documentation</span>
                    </li>
                  </ul>
                  <a
                    href="https://www.bajajfinserv.in/my-account"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    <span>Access My Account</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-[#041427] border border-white/10 space-y-3 font-mono text-xs">
                  <div className="text-slate-400 text-[11px]">Active Loan Account</div>
                  <div className="text-xl font-bold text-white">#PL489210-98</div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Next EMI Due: 05 Dec</span>
                    <span className="font-bold text-emerald-400">₹13,019</span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Principal Outstanding: ₹3,84,200 • Tenure remaining: 32 Months
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'fd' && (
              <motion.div
                key="fd"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    Wealth Growth & Deposits
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                    Fixed Deposits & Mutual Funds
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    Book CRISIL AAA rated fixed deposits directly from your mobile app in 3 minutes with zero paperwork and instant digital FD receipts.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Up to 8.35% p.a. returns with senior citizen bonuses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>SEBI regulated mutual fund SIPs from Bajaj Finserv AMC</span>
                    </li>
                  </ul>
                  <a
                    href="https://www.bajajfinserv.in/fixed-deposit-application-form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    <span>Invest in FD Online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-[#041427] border border-amber-500/20 space-y-3 font-mono text-xs">
                  <div className="text-amber-300 font-bold">CRISIL AAA & ICRA AAA RATED</div>
                  <div className="text-3xl font-black text-white text-gradient-gold">8.35% p.a.</div>
                  <div className="text-slate-300 text-xs">
                    Fixed Deposit Account #FD882194
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Maturity Date:</span>
                    <span className="text-white font-bold">14 Nov 2029</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Official App Store Download Badges */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.5 Rating</span>
              <span className="text-xs text-slate-400">• 50M+ Downloads on Google Play & App Store</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=org.altruist.BajajFinserv"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-2 transition-colors border border-white/10"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Google Play</span>
              </a>
              <a
                href="https://apps.apple.com/in/app/bajaj-finserv-loans-upi-fd/id1081559495"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-2 transition-colors border border-white/10"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Apple App Store</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
