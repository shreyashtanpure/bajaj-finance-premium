export interface FAQItem {
  id: string;
  category: 'General' | 'Loans & EMI' | 'Fixed Deposits' | 'Payments & Security';
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Is this website an official portal of Bajaj Finance Limited?',
    answer: 'No. This website is an independent, educational portfolio concept and design prototype created to showcase world-class creative frontend development, 3D interactive UI, and fintech user experience. For official services, loan accounts, and transactions, always visit the official portal at https://www.bajajfinserv.in.',
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'What is the corporate structure of Bajaj Finance Limited?',
    answer: 'Bajaj Finance Limited (BFL) is a deposit-taking Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India (RBI). It is a subsidiary of Bajaj Finserv Limited. Other group companies include Bajaj Housing Finance Limited (BHFL), Bajaj Financial Securities Limited (BFSL), Bajaj Finserv Asset Management Limited, and joint ventures Bajaj Allianz Life Insurance and Bajaj Allianz General Insurance.',
  },
  {
    id: 'faq-3',
    category: 'Loans & EMI',
    question: 'How does the Bajaj Finserv Insta EMI Card work?',
    answer: 'The Insta EMI Card provides a pre-approved digital card limit up to ₹3,00,000 that allows you to buy over 1 million products across 1.5 Lakh+ offline stores and top e-commerce websites like Amazon and Flipkart on No-Cost EMIs. You can split your purchase price into comfortable monthly instalments of 3 to 24 months with zero down payment options.',
  },
  {
    id: 'faq-4',
    category: 'Loans & EMI',
    question: 'What is a Flexi Hybrid Loan and how does it reduce interest?',
    answer: 'A Flexi Hybrid Loan provides a sanctioned credit limit from which you can withdraw funds as and when required, and prepay surplus funds whenever you have excess cash. Interest is charged only on the exact amount utilized and for the duration it remains withdrawn, significantly reducing your total interest outflow compared to traditional term loans.',
  },
  {
    id: 'faq-5',
    category: 'Loans & EMI',
    question: 'Are there any foreclosure or prepayment penalties on personal loans?',
    answer: 'Under RBI guidelines for individual borrowers with floating rate loans, there are zero foreclosure charges. For fixed-rate loans or term loans, terms vary based on product specifications. Customers can easily track and manage foreclosure or part-prepayment schedules via the official Bajaj Finserv customer portal.',
  },
  {
    id: 'faq-6',
    category: 'Fixed Deposits',
    question: 'What does the CRISIL AAA and ICRA AAA rating on Bajaj Finance FDs mean?',
    answer: 'CRISIL AAA/Stable and ICRA AAA/Stable represent the highest degree of safety regarding timely servicing of financial obligations. FDs carrying this rating carry the lowest credit risk in the Indian financial sector, offering safety on par with sovereign instruments alongside market-leading interest yields up to 8.35% p.a.',
  },
  {
    id: 'faq-7',
    category: 'Fixed Deposits',
    question: 'What is the minimum investment required for a Fixed Deposit?',
    answer: 'You can start an online Bajaj Finance Fixed Deposit with a minimum amount of just ₹15,000. Flexible tenures range from 12 to 60 months, with options for cumulative (interest compounded annually and paid at maturity) or non-cumulative (monthly, quarterly, half-yearly, or annual interest payouts). Senior citizens enjoy an additional interest rate benefit of up to 0.40% p.a.',
  },
  {
    id: 'faq-8',
    category: 'Payments & Security',
    question: 'How do I set up and use Bajaj Pay UPI?',
    answer: 'Open the official Bajaj Finserv app, navigate to the Bajaj Pay section, verify your mobile number linked to your bank account, select your bank, and set your secure 4-digit or 6-digit UPI PIN. You can then scan any merchant QR code across India, make instantaneous P2P fund transfers, pay utility bills, and earn Bajaj Coins reward points.',
  },
  {
    id: 'faq-9',
    category: 'Payments & Security',
    question: 'What should I do if I suspect cyber fraud or receive fake loan calls?',
    answer: 'Bajaj Finance never asks for your OTP, UPI PIN, CVV, or passwords over phone calls, SMS, or WhatsApp. If you encounter fraudulent messages or fake loan offers, report them immediately to the official Bajaj Finserv customer vigilance helpline at 1800 103 3535 or the National Cyber Crime Reporting Portal at cybercrime.gov.in (Helpline: 1930).',
  },
];
