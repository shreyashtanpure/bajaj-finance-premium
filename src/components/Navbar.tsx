import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ExternalLink, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured', href: '#featured' },
    { label: 'Catalogue (50+)', href: '#catalogue' },
    { label: 'Insta EMI Card', href: '#emi-card' },
    { label: 'How It Works', href: '#journey' },
    { label: 'EMI Calculator', href: '#calculator' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020817]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-2.5'
          : 'bg-[#020817]/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00386b] via-[#0072ce] to-[#00a3ff] p-0.5 shadow-bajaj-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#001428] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 64 64" fill="none">
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
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-wide text-white leading-none">
                BAJAJ <span className="text-[#00a3ff]">FINANCE</span>
              </span>
              <span className="text-[9px] text-[#38bdf8] font-semibold tracking-widest uppercase mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Premium Concept
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors group"
              title="Search products and categories (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#38bdf8] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] bg-white/10 text-slate-400 rounded border border-white/10 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Official Portal CTA */}
            <a
              href="https://www.bajajfinserv.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#0072ce] to-[#00509e] hover:from-[#0084eb] hover:to-[#005fae] rounded-xl shadow-md shadow-blue-900/30 transition-all hover:scale-[1.02]"
            >
              <span>Official Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/10 animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-lg"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold bg-white/10 text-white rounded-xl"
                >
                  <Search className="w-4 h-4 text-[#38bdf8]" />
                  <span>Search All 50+ Products</span>
                </button>
                <a
                  href="https://www.bajajfinserv.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold bg-gradient-to-r from-[#0072ce] to-[#00509e] text-white rounded-xl"
                >
                  <span>Visit Official Bajaj Finserv</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
