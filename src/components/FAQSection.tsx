import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, ShieldCheck } from 'lucide-react';
import { FAQ_DATA, FAQItem } from '../data/faq';

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Loans & EMI', 'Fixed Deposits', 'Payments & Security'];

  const filteredFAQs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#020b17] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#38bdf8] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE & SUPPORT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-bajaj">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Find immediate answers regarding pre-approved loans, Insta EMI card limits, fixed deposit returns, and security guidelines.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#06172d] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0072ce]"
            />
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0072ce] text-white shadow'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-white hover:text-[#38bdf8] transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#38bdf8] bg-blue-500/20' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Fraud Caution Callout */}
        <div className="mt-12 p-5 rounded-2xl bg-[#00172e] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white">Beware of Fake Callers & Scam Links: </span>
              Bajaj Finance representatives will never ask for your confidential OTP, CVV, or passwords.
            </div>
          </div>
          <a
            href="https://www.bajajfinserv.in/fraud-awareness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 underline shrink-0"
          >
            Read Vigilance Advisory →
          </a>
        </div>

      </div>
    </section>
  );
};
