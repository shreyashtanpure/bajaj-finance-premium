import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Sparkles, 
  AlertCircle, 
  TrendingUp, 
  CreditCard, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';

export const EMICalculator: React.FC = () => {
  const [calcMode, setCalcMode] = useState<'loan' | 'fd'>('loan');

  // Loan State
  const [loanType, setLoanType] = useState<'personal' | 'home' | 'business' | 'car'>('personal');
  const [principal, setPrincipal] = useState<number>(500000);
  const [rate, setRate] = useState<number>(11.5);
  const [tenureMonths, setTenureMonths] = useState<number>(48);

  // FD State
  const [fdAmount, setFdAmount] = useState<number>(100000);
  const [fdTenureMonths, setFdTenureMonths] = useState<number>(36);
  const [isSeniorCitizen, setIsSeniorCitizen] = useState<boolean>(false);

  // Loan EMI Calculation
  const loanResults = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    const totalAmount = emi * tenureMonths;
    const totalInterest = totalAmount - principal;

    const principalPercent = Math.round((principal / totalAmount) * 100);
    const interestPercent = 100 - principalPercent;

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principalPercent,
      interestPercent,
    };
  }, [principal, rate, tenureMonths]);

  // FD Calculation (Compounded Annually)
  const fdResults = useMemo(() => {
    // Bajaj Finance FD rate structure: ~7.90% to 8.10% + 0.25%-0.40% senior citizen
    let baseRate = 8.10;
    if (fdTenureMonths < 24) baseRate = 7.65;
    else if (fdTenureMonths < 36) baseRate = 7.85;
    else baseRate = 8.10;

    const effectiveRate = isSeniorCitizen ? baseRate + 0.35 : baseRate;
    const years = fdTenureMonths / 12;
    // Cumulative compound interest formula: A = P * (1 + r/100)^t
    const maturityAmount = fdAmount * Math.pow(1 + effectiveRate / 100, years);
    const interestEarned = maturityAmount - fdAmount;

    return {
      rate: effectiveRate.toFixed(2),
      maturityAmount: Math.round(maturityAmount),
      interestEarned: Math.round(interestEarned),
    };
  }, [fdAmount, fdTenureMonths, isSeniorCitizen]);

  const handleCalculateCelebration = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#0072ce', '#00a3ff', '#38bdf8', '#ffffff'],
    });
  };

  // Quick preset loader for loan types
  const handleLoanTypeChange = (type: 'personal' | 'home' | 'business' | 'car') => {
    setLoanType(type);
    if (type === 'personal') {
      setPrincipal(500000);
      setRate(11.5);
      setTenureMonths(48);
    } else if (type === 'home') {
      setPrincipal(3500000);
      setRate(8.5);
      setTenureMonths(240); // 20 years
    } else if (type === 'business') {
      setPrincipal(1500000);
      setRate(13.0);
      setTenureMonths(60);
    } else if (type === 'car') {
      setPrincipal(800000);
      setRate(9.5);
      setTenureMonths(60);
    }
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#000f22] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#38bdf8] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>FINANCIAL PLANNING SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="text-gradient-bajaj">EMI & Returns</span> Calculator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Plan your monthly cash flows with exact mathematical precision before making a borrowing or deposit decision.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-[#061830] border border-white/10 flex items-center gap-2">
            <button
              onClick={() => setCalcMode('loan')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                calcMode === 'loan'
                  ? 'bg-[#0072ce] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Loan EMI Calculator</span>
            </button>
            <button
              onClick={() => setCalcMode('fd')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                calcMode === 'fd'
                  ? 'bg-[#0072ce] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Fixed Deposit (FD) Yield</span>
            </button>
          </div>
        </div>

        {calcMode === 'loan' ? (
          /* LOAN EMI CALCULATOR */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Loan Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">
                  Select Loan Category:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'personal', label: 'Personal' },
                    { id: 'home', label: 'Home' },
                    { id: 'business', label: 'Business' },
                    { id: 'car', label: 'Auto / Car' },
                  ].map((lt) => (
                    <button
                      key={lt.id}
                      onClick={() => handleLoanTypeChange(lt.id as any)}
                      className={`py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                        loanType === lt.id
                          ? 'bg-blue-600 text-white shadow'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                      }`}
                    >
                      {lt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Loan Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-300">Loan Amount</span>
                  <span className="font-mono font-extrabold text-[#38bdf8] text-base">
                    ₹{principal.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={loanType === 'home' ? 10000000 : 5000000}
                  step={25000}
                  value={principal}
                  onChange={(e) => {
                    setPrincipal(Number(e.target.value));
                    handleCalculateCelebration();
                  }}
                  className="w-full cursor-pointer accent-[#0072ce]"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>₹50,000</span>
                  <span>{loanType === 'home' ? '₹50 Lakhs' : '₹25 Lakhs'}</span>
                  <span>{loanType === 'home' ? '₹1 Crore' : '₹50 Lakhs'}</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-300">Interest Rate (p.a.)</span>
                  <span className="font-mono font-extrabold text-[#38bdf8] text-base">
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={8.0}
                  max={24.0}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0072ce]"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>8.0%</span>
                  <span>16.0%</span>
                  <span>24.0%</span>
                </div>
              </div>

              {/* Slider 3: Loan Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-300">Loan Tenure</span>
                  <span className="font-mono font-extrabold text-[#38bdf8] text-base">
                    {tenureMonths} Months ({Math.round(tenureMonths / 12)} Yrs)
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={loanType === 'home' ? 360 : 96}
                  step={6}
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0072ce]"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>6 Months</span>
                  <span>{loanType === 'home' ? '15 Years' : '48 Months'}</span>
                  <span>{loanType === 'home' ? '30 Years' : '96 Months'}</span>
                </div>
              </div>

            </div>

            {/* Right Output Panel & Donut Chart */}
            <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                  Estimated Monthly EMI
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight text-gradient-bajaj mb-6">
                  ₹{loanResults.emi.toLocaleString('en-IN')}<span className="text-sm font-normal text-slate-400">/mo</span>
                </div>

                {/* SVG Visual Proportion Chart */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-6">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300 font-semibold">Payment Proportion</span>
                    <span className="font-mono text-slate-400">Total: ₹{loanResults.totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                  
                  {/* Progress Bar Proportion */}
                  <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${loanResults.principalPercent}%` }}
                      className="h-full bg-gradient-to-r from-[#0072ce] to-[#38bdf8] transition-all duration-300"
                      title={`Principal: ${loanResults.principalPercent}%`}
                    />
                    <div
                      style={{ width: `${loanResults.interestPercent}%` }}
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                      title={`Interest: ${loanResults.interestPercent}%`}
                    />
                  </div>

                  <div className="flex justify-between items-center text-xs mt-3 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00a3ff]" />
                      <span className="text-slate-300">Principal ({loanResults.principalPercent}%)</span>
                    </div>
                    <div className="font-mono font-bold text-white">
                      ₹{principal.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs mt-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="text-slate-300">Total Interest ({loanResults.interestPercent}%)</span>
                    </div>
                    <div className="font-mono font-bold text-amber-300">
                      ₹{loanResults.totalInterest.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Statutory Disclaimer */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-blue-950/40 border border-blue-400/20 text-[11px] text-slate-300 leading-tight">
                  <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    Illustrative calculation using standard compounding amortization formula. Final loan approval and rates are subject to underwriting by Bajaj Finance Limited.
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="https://www.bajajfinserv.in/personal-loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#0072ce] hover:bg-[#0084eb] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-900/40 hover:scale-[1.01]"
                >
                  <span>Apply with Pre-Approved Rates on Official Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        ) : (
          /* FIXED DEPOSIT (FD) CALCULATOR */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* FD Left Controls */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Senior Citizen Checkbox */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-500/10 border border-amber-400/20">
                <div>
                  <div className="font-bold text-amber-300 text-sm">Senior Citizen Privilege</div>
                  <div className="text-xs text-slate-300 mt-0.5">Avail up to +0.35% additional interest bonus</div>
                </div>
                <input
                  type="checkbox"
                  id="seniorCheck"
                  checked={isSeniorCitizen}
                  onChange={(e) => setIsSeniorCitizen(e.target.checked)}
                  className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                />
              </div>

              {/* FD Amount Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-300">Investment Deposit Amount</span>
                  <span className="font-mono font-extrabold text-[#38bdf8] text-base">
                    ₹{fdAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min={15000}
                  max={5000000}
                  step={10000}
                  value={fdAmount}
                  onChange={(e) => setFdAmount(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0072ce]"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Min ₹15,000</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>

              {/* FD Tenure Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-300">Tenure (Months)</span>
                  <span className="font-mono font-extrabold text-[#38bdf8] text-base">
                    {fdTenureMonths} Months ({Math.round(fdTenureMonths / 12)} Years)
                  </span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={60}
                  step={6}
                  value={fdTenureMonths}
                  onChange={(e) => setFdTenureMonths(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0072ce]"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>12 Months</span>
                  <span>36 Months</span>
                  <span>60 Months</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                <span>Credit Safety Rating:</span>
                <span className="font-extrabold text-amber-400">CRISIL AAA & ICRA AAA</span>
              </div>

            </div>

            {/* FD Right Output Panel */}
            <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                  Maturity Amount (Cumulative)
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight text-gradient-gold mb-6">
                  ₹{fdResults.maturityAmount.toLocaleString('en-IN')}
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Applicable Interest Rate</span>
                    <span className="font-mono font-extrabold text-emerald-400 text-sm">
                      {fdResults.rate}% p.a.
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Principal Deposit</span>
                    <span className="font-mono font-bold text-slate-200">
                      ₹{fdAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-white/10">
                    <span className="text-amber-400 font-semibold">Total Wealth Earned</span>
                    <span className="font-mono font-extrabold text-amber-300 text-sm">
                      +₹{fdResults.interestEarned.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-xl bg-blue-950/40 border border-blue-400/20 text-[11px] text-slate-300 leading-tight">
                  <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    Fixed Deposit rates as published on official Bajaj Finance schedule. Subject to periodic revision by ALCO.
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="https://www.bajajfinserv.in/fixed-deposit-application-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#0072ce] hover:bg-[#0084eb] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-900/40 hover:scale-[1.01]"
                >
                  <span>Open Paperless FD on Official Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
