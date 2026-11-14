import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Sliders, 
  FileCheck2, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export const FinanceJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Check Pre-Approved Offer',
      subtitle: 'Instant mobile verification in 30 seconds',
      description: 'Enter your mobile number and date of birth to check your pre-approved loan, Insta EMI card, or credit line without impacting your bureau credit score.',
      icon: Smartphone,
      time: '30 Seconds',
      detailMetric: 'Zero Credit Impact',
      mockUI: {
        headline: 'Instant Eligibility Engine',
        inputLabel: 'Registered Mobile Number',
        inputValue: '+91 98765 •••••',
        status: 'Pre-Approved: ₹3,00,000',
        statusColor: 'text-emerald-400 bg-emerald-500/10',
      },
    },
    {
      step: '02',
      title: 'Customize Loan & EMI',
      subtitle: 'Tailor your loan amount and flexible tenure',
      description: 'Choose your desired loan amount, select tenure up to 96 months, and toggle between Term Loan or Flexi Hybrid Loan to match your monthly cash flow.',
      icon: Sliders,
      time: '1 Minute',
      detailMetric: 'Flexi Dropline Facility',
      mockUI: {
        headline: 'Interactive Tenure Selector',
        inputLabel: 'Sanctioned Amount: ₹5,00,000',
        inputValue: 'Tenure: 48 Months • EMI: ₹13,019/mo',
        status: 'Flexi Option Enabled',
        statusColor: 'text-blue-400 bg-blue-500/10',
      },
    },
    {
      step: '03',
      title: 'Paperless Digital KYC',
      subtitle: '100% online biometric & Aadhaar verification',
      description: 'Complete your KYC digitally using DigiLocker, Aadhaar OTP, and video verification. No physical visits, branch paperwork, or notary requirements.',
      icon: FileCheck2,
      time: '3 Minutes',
      detailMetric: '100% Paperless',
      mockUI: {
        headline: 'DigiLocker Government Portal',
        inputLabel: 'Aadhaar e-KYC Verification',
        inputValue: 'UIDAI Authenticated • PAN Verified',
        status: 'KYC Status: Completed',
        statusColor: 'text-emerald-400 bg-emerald-500/10',
      },
    },
    {
      step: '04',
      title: 'Instant Bank Disbursal',
      subtitle: 'Direct credit to your bank account via IMPS',
      description: 'Sign your digital loan agreement with an e-Mandate (NACH). Funds are wired directly into your designated bank account in under 10 minutes.',
      icon: Zap,
      time: '< 10 Minutes',
      detailMetric: 'Instant IMPS Credit',
      mockUI: {
        headline: 'Direct Bank Transfer',
        inputLabel: 'Account: HDFC Bank •••• 4012',
        inputValue: 'UTR: BFL20261114984210',
        status: 'Disbursal: ₹4,95,000 Credited',
        statusColor: 'text-emerald-400 bg-emerald-500/10',
      },
    },
  ];

  return (
    <section id="journey" className="py-24 relative bg-[#001020] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE 4-STEP DIGITAL JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How It Works — <span className="text-gradient-bajaj">Fast & Paperless</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Experience end-to-end digital borrowing from check to cash in under 15 minutes without stepping into a branch.
          </p>
        </div>

        {/* 4 Interactive Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Step Navigator */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeStep === index;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-[#061d3b] border-[#0072ce] shadow-bajaj-glow scale-[1.01]'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-tr from-[#0072ce] to-[#38bdf8] text-white shadow-md'
                          : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#38bdf8]">
                          STEP {item.step}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{item.time}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mt-0.5">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-300 mt-1">
                        {item.subtitle}
                      </p>

                      {isSelected && (
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed pt-2 border-t border-white/10">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Simulated Terminal / Mobile Visualizer */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl glass-panel p-8 border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    bajaj-fintech-gateway.live
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-[#38bdf8] border border-blue-500/20">
                  {steps[activeStep].detailMetric}
                </span>
              </div>

              {/* Dynamic Interactive Stage Content */}
              <div className="py-8">
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-mono">
                  Active Simulation • Step {steps[activeStep].step}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {steps[activeStep].mockUI.headline}
                </h4>
                <p className="text-xs text-slate-400 mb-6">
                  {steps[activeStep].description}
                </p>

                {/* Mock Card Preview */}
                <div className="p-4 rounded-xl bg-[#031528] border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center text-slate-400 text-[11px]">
                    <span>Transaction Parameter</span>
                    <span>Verified Value</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/40 text-slate-200 flex justify-between items-center border border-white/5">
                    <span className="text-slate-400">{steps[activeStep].mockUI.inputLabel}</span>
                    <span className="font-bold text-white">{steps[activeStep].mockUI.inputValue}</span>
                  </div>
                  <div className={`p-2.5 rounded flex items-center justify-between ${steps[activeStep].mockUI.statusColor}`}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-bold">{steps[activeStep].mockUI.status}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest">OK</span>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Previous Step
                  </button>

                  <button
                    onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#0072ce] to-[#00509e] hover:from-[#0084eb] hover:to-[#005fae] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md transition-all"
                  >
                    <span>{activeStep === 3 ? 'Restart Flow' : 'Next Step'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
