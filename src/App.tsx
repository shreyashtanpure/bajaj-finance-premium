import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductCatalogue } from './components/ProductCatalogue';
import { FinanceJourney } from './components/FinanceJourney';
import { InstaEMICardShowcase } from './components/InstaEMICardShowcase';
import { EcosystemSection } from './components/EcosystemSection';
import { EMICalculator } from './components/EMICalculator';
import { DigitalAppShowcase } from './components/DigitalAppShowcase';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { Product } from './data/products';

export function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030e1c] text-slate-100 flex flex-col font-sans selection:bg-[#0072ce] selection:text-white">
      {/* Cinematic Brand Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Top Disclaimer Notification */}
      <DisclaimerBanner />

      {/* Sticky Navigation Header */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Animated Hero */}
        <Hero />

        {/* 12 Featured Products Grid */}
        <FeaturedProducts onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* Complete 7-Category Product Catalogue */}
        <ProductCatalogue onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* Interactive 3D Flippable Insta EMI Card */}
        <InstaEMICardShowcase />

        {/* 4-Step Digital Borrowing Experience */}
        <FinanceJourney />

        {/* Comprehensive EMI & Fixed Deposit Calculator */}
        <EMICalculator />

        {/* Bajaj Finserv Ecosystem & Group Companies */}
        <EcosystemSection />

        {/* Digital Super App Feature Showcase */}
        <DigitalAppShowcase />

        {/* Interactive FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Regulatory & Company Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Quick Search Palette (Ctrl+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />
    </div>
  );
}

export default App;
