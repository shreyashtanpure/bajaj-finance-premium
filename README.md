# 🌟 Bajaj Finance — Premium Animated Portfolio Website

> **Unofficial Educational Portfolio Concept & Fintech UI/UX Showcase**  
> *Inspired by the digital scale and financial innovations of Bajaj Finance Limited & the Bajaj Finserv Ecosystem.*  
> Principal reference: [https://www.bajajfinserv.in](https://www.bajajfinserv.in)

---

## 🚀 Overview

This project is a high-performance, agency-grade fintech web application built using **React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion**. It showcases an interactive digital experience for India's leading diversified non-banking financial conglomerate, with deep navy surfaces, signature Bajaj blue accents, 3D card physics, and real-time financial calculators.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS with customized Bajaj brand palette & glassmorphism
- **Motion & 3D Effects:** Framer Motion (perspective tilts, 3D card flips, spring physics, staggered entrances)
- **Icons:** Lucide React
- **Micro-Interactions:** Canvas Confetti for calculation milestones
- **Deployment Ready:** Vercel (Vite preset), Netlify, GitHub Pages

---

## ✨ Key Features & Sections

1. **Brand Preloader:**
   - Cinematic opening sequence featuring the glowing Bajaj ribbon emblem, progress indicator, and smooth reveal.
2. **Sticky Navigation & Command Search:**
   - Responsive sticky header with backdrop blur.
   - Quick command palette (`Ctrl+K` / `Cmd+K`) searching across all 50+ financial products.
   - External verification link to the official portal with security badges.
3. **Cinematic Hero:**
   - Bold headline: **FINANCE YOUR POSSIBILITIES**
   - Subtitle: **Discover financial solutions designed for your ambitions.**
   - Interactive 3D Smartphone with interactive app dashboard (greeting, pre-approved limit, flippable mini card, recent feed).
   - Floating 3D financial cards with real-time stats.
   - Trust metrics: 88M+ Customers, ₹3.5+ Lakh Cr AUM, 4,000+ branches, CRISIL AAA rating.
4. **12 Featured Flagship Offerings:**
   - Personal Loan, Business Loan, Consumer Durable Loan, Insta EMI Card, Fixed Deposit, Gold Loan, Two-Wheeler Financing, Car Financing, Home Loan (BHFL), Loan Against Securities, Bajaj Pay, Professional Loans.
   - Realistic Indian lifestyle photography, interest rate badges, and interactive modals.
5. **Complete 7-Category Product Catalogue (50+ Offerings):**
   - Searchable and filterable by **Consumer, MSME, Commercial, Rural, Deposits, Payments, and Partnerships & Services**.
6. **3D Flippable Insta EMI Card Showcase:**
   - Flip front/back to inspect card number, CVV, chip, and contactless NFC symbol.
   - Real-time shopping limit slider (₹50,000 to ₹3,00,000) with dynamic monthly EMI calculator.
7. **4-Step Paperless Finance Journey:**
   - Step-by-step interactive timeline: Check Offer ➔ Customize ➔ e-KYC ➔ Disbursal in under 10 minutes.
8. **Interactive Dual-Mode EMI & FD Calculator:**
   - **Loan EMI Calculator:** Sliders for amount, interest, and tenure with standard amortization formula and donut payment breakdown.
   - **Fixed Deposit (FD) Yield:** Computes cumulative returns up to 8.35% p.a. with senior citizen privilege toggle (+0.35%).
9. **Bajaj Finserv Ecosystem Architecture:**
   - Clearly separated subsidiaries and joint ventures: Bajaj Finance, Bajaj Housing Finance, Bajaj Financial Securities, Bajaj Finserv AMC, Bajaj Allianz Life, Bajaj Allianz General, and Bajaj Finserv Health.
10. **Digital Super App Showcase:**
    - Interactive tab switcher for UPI payments, Bharat BillPay (BBPS), loan management, and deposits.
11. **FAQ Accordion & Fraud Caution Notice:**
    - Categorized FAQs with search and cyber fraud vigilance warning (National Cyber Helpline 1930).
12. **Comprehensive Regulatory Footer:**
    - CIN registration details, RBI NBFC guidelines, registered address at Akurdi Pune, and back-to-top button.

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn or pnpm

### 1. Installation
Clone the repository and install dependencies:
```bash
cd bajaj-finance-premium
npm install
```

### 2. Development Server
Start the local Vite dev server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 3. Production Build
Compile TypeScript and bundle for production:
```bash
npm run build
```
This generates optimized static files inside the `dist/` directory.

### 4. Preview Production Build
Preview the generated `dist/` build locally:
```bash
npm run preview
```

---

## 🚢 GitHub & Vercel Deployment Guide

### Deploying to GitHub
1. Initialize git in the project root:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit for Bajaj Finance Premium Website"
   ```
2. Create a new repository on your GitHub account (e.g. `bajaj-finance-premium`).
3. Add the remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/bajaj-finance-premium.git
   git push -u origin main
   ```

### Deploying to Vercel
1. Log in to [Vercel](https://vercel.com) and click **"Add New" ➔ "Project"**.
2. Import your GitHub repository `bajaj-finance-premium`.
3. Vercel will automatically detect the **Vite** framework preset:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. Vercel will build and deploy the site with global CDN distribution.
5. Every subsequent commit to `main` will automatically trigger a zero-downtime production deployment!

---

## ⚖️ Legal & Brand Notice

- This website is an independent educational design concept created solely for demonstration and portfolio purposes.
- All trademarks, logos, brand names, and product designations are the property of their respective owners, including **Bajaj Finance Limited** and **Bajaj Finserv Limited**.
- To apply for actual financial services, access official accounts, or contact verified customer care, please visit [https://www.bajajfinserv.in](https://www.bajajfinserv.in).
