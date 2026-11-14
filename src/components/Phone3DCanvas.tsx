import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  CreditCard, 
  ArrowUpRight, 
  QrCode, 
  Send, 
  Receipt, 
  TrendingUp, 
  Sparkles, 
  Lock, 
  Bell,
  CheckCircle2,
  Percent,
  ChevronRight
} from 'lucide-react';

export const Phone3DCanvas: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [cardFlipped, setCardFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'cards' | 'invest'>('home');
  const [simulatedBalance, setSimulatedBalance] = useState(300000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -y * 0.03,
      y: x * 0.03,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex items-center justify-center py-4 perspective-1000 select-none w-full max-w-[420px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Ambient Background Aura */}
      <div className="absolute w-80 h-[520px] bg-gradient-to-tr from-[#004c8c]/30 via-[#0072ce]/25 to-[#00a3ff]/20 rounded-full blur-[90px] pointer-events-none animate-pulse-subtle" />

      {/* 3D Titanium Frame with specular border reflection */}
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 26 }}
        className="relative z-10 w-[310px] sm:w-[350px] h-[650px] rounded-[52px] bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 p-[3.5px] shadow-[0_30px_70px_-15px_rgba(0,114,206,0.5),0_0_35px_rgba(0,163,255,0.25)] border border-slate-500/50"
      >
        {/* Inner OLED Glass Chassis */}
        <div className="w-full h-full bg-[#030e1d] rounded-[48px] overflow-hidden flex flex-col relative border border-white/10 shadow-inner">
          
          {/* Top Notch Dynamic Island */}
          <div className="w-full pt-3 px-6 flex justify-between items-center text-[11px] text-slate-300 font-medium z-30 bg-[#030e1d]">
            <span className="font-semibold tracking-tight">9:41</span>
            
            {/* Interactive Dynamic Pill */}
            <div className="w-26 h-5.5 bg-black rounded-full flex items-center justify-center gap-1.5 border border-white/10 px-2.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[9px] font-mono text-slate-200">Bajaj Pay • Active</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-[10px] font-mono font-bold">5G</span>
              <div className="w-4 h-2 border border-white/70 rounded-xs p-0.5">
                <div className="w-full h-full bg-emerald-400 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header Inside Phone */}
          <div className="px-5 pt-3 pb-2 flex items-center justify-between z-20">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0072ce] to-[#38bdf8] p-0.5 shadow-sm">
                <div className="w-full h-full rounded-full bg-[#001c38] flex items-center justify-center font-bold text-xs text-white">
                  SV
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-white tracking-wide">Shreya Verma</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Pre-Approved Customer
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-full border border-white/10 text-slate-300 relative hover:bg-white/15 transition-colors cursor-pointer">
                <Bell className="w-3.5 h-3.5 text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
              </div>
            </div>
          </div>

          {/* Phone Scrollable Screen Content */}
          <div className="flex-1 px-4 overflow-y-auto space-y-3 pb-4 scrollbar-none">
            
            {/* Shimmering Pre-Approved Credit Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#004c8c] via-[#0066cc] to-[#002244] p-4 text-white border border-blue-400/40 shadow-xl group">
              <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-sky-400/30 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-1 text-[11px] text-blue-200">
                <span className="font-semibold tracking-wide">Instant Credit Line</span>
                <span className="inline-flex items-center gap-1 bg-emerald-400/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-bold border border-emerald-400/30">
                  <Sparkles className="w-2.5 h-2.5" /> 100% Digital
                </span>
              </div>

              <div className="text-2xl font-black tracking-tight text-white mb-2 font-mono">
                ₹{simulatedBalance.toLocaleString('en-IN')}
              </div>

              <div className="flex items-center justify-between pt-2.5 border-t border-white/20 text-[11px]">
                <div className="text-blue-100">
                  <span className="text-slate-300 text-[10px]">Available in Bank: </span>
                  <span className="font-bold text-white">₹2,85,500</span>
                </div>
                <a
                  href="#emi-card"
                  className="bg-white text-[#004c8c] hover:bg-blue-50 font-black px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition-all shadow-sm"
                >
                  Withdraw <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Interactive Metallic Flippable Insta EMI Card */}
            <div 
              onClick={() => setCardFlipped(!cardFlipped)}
              className="cursor-pointer group relative perspective-1000"
              title="Click to flip Insta EMI Card"
            >
              <div className="flex items-center justify-between px-1 mb-1 text-[10px] text-slate-400">
                <span className="font-bold text-slate-200 uppercase tracking-wider">Insta EMI Card</span>
                <span className="text-[#38bdf8] flex items-center gap-1 font-semibold">
                  Tap to {cardFlipped ? 'view front' : 'flip CVV'} ➔
                </span>
              </div>

              <div
                className={`relative h-34 rounded-2xl transition-transform duration-600 preserve-3d shadow-xl ${
                  cardFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-tr from-[#001c38] via-[#004c8c] to-[#0072ce] p-3.5 text-white border border-blue-400/30 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-4.5 bg-gradient-to-tr from-amber-400 to-yellow-200 rounded-sm shadow-sm flex items-center justify-center">
                        <div className="w-4 h-2.5 border border-amber-800/60 rounded-2xs" />
                      </div>
                      <span className="text-[11px] font-black tracking-widest text-white">BAJAJ FINSERV</span>
                    </div>
                    <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded text-white font-mono font-bold">
                      NO-COST EMI
                    </span>
                  </div>

                  <div>
                    <div className="text-sm font-mono tracking-widest text-white font-black drop-shadow">
                      4028 •••• •••• 9924
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-blue-200 mt-1 font-semibold">
                      <span>SHREYA VERMA</span>
                      <span>EXP 11/29</span>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-tr from-[#020b16] via-[#002244] to-[#00386b] p-3 text-white border border-white/20 flex flex-col justify-between">
                  <div className="w-full h-5 bg-black rounded-xs -mx-3 mt-1 shadow-inner" />
                  <div className="flex items-center justify-between px-2">
                    <span className="text-[8px] text-slate-400 font-mono">AUTHORIZED CARD</span>
                    <div className="bg-white text-slate-900 font-mono text-[10px] px-2 py-0.5 rounded font-extrabold shadow">
                      CVV: 572
                    </div>
                  </div>
                  <div className="text-[7.5px] text-blue-300 text-center leading-tight">
                    Issued by Bajaj Finance Limited • Accepted at 1.5 Lakh+ Stores across India
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {[
                { icon: QrCode, label: 'Scan QR', color: 'from-blue-600 to-sky-500' },
                { icon: Send, label: 'UPI Pay', color: 'from-emerald-600 to-teal-500' },
                { icon: Receipt, label: 'Bills', color: 'from-indigo-600 to-purple-500' },
                { icon: TrendingUp, label: 'FD 8.35%', color: 'from-amber-600 to-yellow-500' },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all cursor-pointer group"
                  >
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 text-center">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Live Financial Feed / Recent Activity */}
            <div className="pt-1">
              <div className="flex items-center justify-between text-[11px] mb-2 px-1">
                <span className="font-bold text-slate-300">Live Sanctions</span>
                <span className="text-[#38bdf8] text-[10px] font-semibold">Real-time</span>
              </div>
              <div className="space-y-1.5">
                {[
                  {
                    title: 'Personal Loan',
                    desc: '₹5,00,000 sanctioned to bank',
                    amount: 'Approved',
                    color: 'text-emerald-400',
                  },
                  {
                    title: 'Reliance Digital',
                    desc: 'No Cost EMI instalment',
                    amount: '-₹3,499',
                    color: 'text-slate-300',
                  },
                  {
                    title: 'Fixed Deposit Yield',
                    desc: 'Quarterly interest credited',
                    amount: '+₹8,350',
                    color: 'text-emerald-400',
                  },
                ].map((act, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-200">{act.title}</div>
                      <div className="text-[9.5px] text-slate-400">{act.desc}</div>
                    </div>
                    <div className={`font-mono font-bold ${act.color}`}>
                      {act.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="w-full bg-[#020b16] border-t border-white/10 px-6 py-2.5 flex items-center justify-around z-30">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-bold ${
                activeTab === 'home' ? 'text-[#00a3ff]' : 'text-slate-500'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => setActiveTab('cards')}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-bold ${
                activeTab === 'cards' ? 'text-[#00a3ff]' : 'text-slate-500'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setActiveTab('invest')}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-bold ${
                activeTab === 'invest' ? 'text-[#00a3ff]' : 'text-slate-500'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Invest</span>
            </button>
          </div>

        </div>
      </motion.div>

      {/* Floating 3D Financial Cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden xl:flex absolute -left-20 top-16 items-center gap-3 p-3.5 rounded-2xl glass-card shadow-2xl border border-white/15 max-w-[210px] z-20"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-[#38bdf8] shrink-0">
          <CreditCard className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-[#38bdf8] tracking-wider">
            Personal Loan
          </div>
          <div className="text-sm font-extrabold text-white">Up to ₹40L</div>
          <div className="text-[9px] text-slate-300">10-Minute Disbursal</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden xl:flex absolute -right-20 top-28 items-center gap-3 p-3.5 rounded-2xl glass-card shadow-2xl border border-white/15 max-w-[220px] z-20"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
            Fixed Deposit
          </div>
          <div className="text-sm font-extrabold text-white">8.35% p.a.</div>
          <div className="text-[9px] text-slate-300">CRISIL AAA Rating</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="hidden xl:flex absolute -left-16 bottom-20 items-center gap-3 p-3.5 rounded-2xl glass-card shadow-2xl border border-white/15 max-w-[210px] z-20"
      >
        <div className="w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
            Insta EMI Card
          </div>
          <div className="text-sm font-extrabold text-white">No-Cost EMI</div>
          <div className="text-[9px] text-slate-300">1.5 Lakh+ Partner Stores</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden xl:flex absolute -right-16 bottom-16 items-center gap-3 p-3.5 rounded-2xl glass-card shadow-2xl border border-white/15 max-w-[210px] z-20"
      >
        <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">
            Business Loan
          </div>
          <div className="text-sm font-extrabold text-white">Up to ₹50L</div>
          <div className="text-[9px] text-slate-300">Collateral-Free for MSME</div>
        </div>
      </motion.div>
    </div>
  );
};
