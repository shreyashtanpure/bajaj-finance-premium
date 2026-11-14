import React from 'react';
import { 
  ArrowUp, 
  ExternalLink, 
  ShieldAlert, 
  PhoneCall, 
  Building2, 
  Lock, 
  Sparkles,
  Download,
  HelpCircle,
  FileCheck2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#010611] border-t border-white/10 text-slate-400 text-xs">
      
      {/* Top Pre-Footer Official Callout Banner */}
      <div className="border-b border-white/5 bg-gradient-to-r from-[#001428] via-[#002855] to-[#001428] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to Finance Your Ambitions?
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 max-w-xl">
              Access the official Bajaj Finserv customer ecosystem for online loan applications, credit health checks, and instant fixed deposits.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Direct Download ZIP Button */}
            <a
              href="/bajaj-finance-premium.zip"
              download="bajaj-finance-premium.zip"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-900/40 transition-transform hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Git-Ready ZIP</span>
            </a>

            <a
              href="https://www.bajajfinserv.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white text-[#001c38] font-bold rounded-xl text-xs flex items-center gap-2 hover:bg-blue-50 shadow-lg transition-transform hover:scale-105"
            >
              <span>Visit Official Bajaj Finserv</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.bajajfinserv.in/reach-us"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white/10 text-white font-semibold rounded-xl text-xs flex items-center gap-2 hover:bg-white/15 transition-colors border border-white/10"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Care: 086980 10101</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#004c8c] via-[#0072ce] to-[#00a3ff] p-0.5 shadow-bajaj-glow">
                <div className="w-full h-full bg-[#001c38] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M18 16H34C41 16 46 20 46 26C46 30 43 33 39 34.5C44 36 48 40 48 46C48 52 42 56 34 56H18V16Z"
                      stroke="#00a3ff"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M18 35H35" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
                    <circle cx="48" cy="18" r="4" fill="#38bdf8" />
                  </svg>
                </div>
              </div>
              <span className="font-extrabold text-lg text-white">
                BAJAJ <span className="text-[#00a3ff]">FINANCE</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              An educational portfolio concept and frontend design prototype engineered to represent the visual language, product diversity, and digital scale of Bajaj Finance Limited.
            </p>

            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-400/20 text-slate-300 text-[11px] leading-tight space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Cyber Crime Caution</span>
              </div>
              <p>
                Never share OTP, CVV, or PIN with anyone. In case of suspected fraud, call national helpline <strong className="text-white">1930</strong> or visit <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-300">cybercrime.gov.in</a>.
              </p>
            </div>
          </div>

          {/* Col 2: Lending Products */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Lending Verticals
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Personal Loan', url: 'https://www.bajajfinserv.in/personal-loan' },
                { name: 'Insta EMI Card', url: 'https://www.bajajfinserv.in/emi-network-card' },
                { name: 'Business Loan', url: 'https://www.bajajfinserv.in/business-loan' },
                { name: 'Home Loan (BHFL)', url: 'https://www.bajajhousingfinance.in/home-loan' },
                { name: 'Gold Loan', url: 'https://www.bajajfinserv.in/gold-loan' },
                { name: 'Two-Wheeler Loan', url: 'https://www.bajajfinserv.in/two-wheeler-loan' },
                { name: 'Car Loan', url: 'https://www.bajajfinserv.in/car-loan' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Deposits & Payments */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Invest & Pay
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Fixed Deposit (CRISIL AAA)', url: 'https://www.bajajfinserv.in/fixed-deposit-application-form' },
                { name: 'Bajaj Pay UPI', url: 'https://www.bajajfinserv.in/bajaj-pay' },
                { name: 'Bill Payment (BBPS)', url: 'https://www.bajajfinserv.in/bill-payment' },
                { name: 'FASTag Recharge', url: 'https://www.bajajfinserv.in/fastag' },
                { name: 'Mutual Funds (AMC)', url: 'https://www.bajajamc.com' },
                { name: 'Demat & Broking (BFSL)', url: 'https://www.bajajbroking.in' },
                { name: 'Free CIBIL Score', url: 'https://www.bajajfinserv.in/check-free-cibil-score' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate & Group */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Group Companies
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Bajaj Finserv Limited', url: 'https://www.bajajfinserv.in' },
                { name: 'Bajaj Housing Finance Ltd', url: 'https://www.bajajhousingfinance.in' },
                { name: 'Bajaj Financial Securities', url: 'https://www.bajajbroking.in' },
                { name: 'Bajaj Allianz Life Insurance', url: 'https://www.bajajallianzlife.com' },
                { name: 'Bajaj Allianz General Ins.', url: 'https://www.bajajallianz.com' },
                { name: 'Bajaj Finserv Health', url: 'https://www.bajajfinservhealth.in' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Corporate Information & Regulatory Disclosures */}
        <div className="pt-8 border-t border-white/5 space-y-4 text-[11px] text-slate-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong className="text-slate-300">Bajaj Finance Limited Corporate Identification:</strong>
              <p>CIN: L65910MH1987PLC042961 | RBI Registration No. 13.00403 (NBFC-D)</p>
              <p>Registered Office: Mumbai - Pune Road, Akurdi, Pune - 411035, Maharashtra, India</p>
              <p>Corporate Office: 4th Floor, Bajaj Finserv Corporate Office, Off Pune-Ahmednagar Road, Viman Nagar, Pune - 411014</p>
            </div>
            <div>
              <strong className="text-slate-300">Regulatory Disclaimer:</strong>
              <p>
                Bajaj Finance Limited is a non-banking financial company regulated by the Reserve Bank of India. Fixed deposits are rated CRISIL AAA/Stable and ICRA AAA/Stable. All loans and credit lines are sanctioned at the sole discretion of the lender subject to credit appraisal.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-[10px] text-slate-400">
            <strong>PORTFOLIO CONCEPT NOTICE:</strong> This website is an educational demonstration developed as an independent creative portfolio project. It is not an authorized, affiliated, or transactional website of Bajaj Finance Limited, Bajaj Finserv Limited, or their affiliates. No user data, passwords, or payments are collected here. For all official inquiries, loan applications, and customer support, please navigate directly to <a href="https://www.bajajfinserv.in" target="_blank" rel="noreferrer" className="text-blue-400 underline font-semibold">https://www.bajajfinserv.in</a>.
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="pt-8 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Bajaj Finance Portfolio Concept • Creative Fintech Showcase
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/bajaj-finance-premium.zip"
              download="bajaj-finance-premium.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/50 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Git ZIP</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
