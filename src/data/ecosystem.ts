export interface EcosystemEntity {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  role: string;
  established: string;
  keyProducts: string[];
  metrics: { label: string; value: string }[];
  websiteUrl: string;
  color: string;
  accent: string;
}

export const ECOSYSTEM_ENTITIES: EcosystemEntity[] = [
  {
    id: 'bajaj-finance',
    name: 'Bajaj Finance Limited (BFL)',
    category: 'Lending & Fixed Deposits (NBFC)',
    role: 'Flagship Non-Banking Financial Company (NBFC)',
    established: '1987',
    shortDescription: 'India\'s leading diversified non-banking financial conglomerate serving over 88 million active customers.',
    description: 'Bajaj Finance Limited is the flagship NBFC of the Bajaj Finserv group, focusing on consumer finance, SME lending, commercial lending, fixed deposits, and digital payments across 4,000+ urban and rural branches.',
    keyProducts: ['Personal Loans', 'Insta EMI Card', 'Consumer Durables', 'Business Loans', 'Fixed Deposits', 'Gold Loans'],
    metrics: [
      { label: 'Active Customers', value: '88M+' },
      { label: 'AUM', value: '₹3.5+ Lakh Cr' },
      { label: 'Credit Rating', value: 'CRISIL AAA' },
    ],
    websiteUrl: 'https://www.bajajfinserv.in',
    color: '#0072CE',
    accent: '#00A3FF',
  },
  {
    id: 'bajaj-housing',
    name: 'Bajaj Housing Finance Limited (BHFL)',
    category: 'Mortgages & Housing Finance',
    role: 'Wholly Owned Housing Finance Subsidiary',
    established: '2015',
    shortDescription: 'Premier housing finance company providing customized home loans and loans against property.',
    description: 'A 100% subsidiary of Bajaj Finance Limited, offering long-term housing finance to individuals and corporate developers with external benchmark linked interest rates.',
    keyProducts: ['Home Loans', 'Balance Transfer', 'Loan Against Property', 'Developer Financing', 'Commercial Real Estate'],
    metrics: [
      { label: 'Home Loan Rates', value: 'From 8.50%*' },
      { label: 'Loan Tenure', value: 'Up to 30 Yrs' },
      { label: 'Max Loan', value: 'Up to ₹15 Cr' },
    ],
    websiteUrl: 'https://www.bajajhousingfinance.in',
    color: '#0284C7',
    accent: '#38BDF8',
  },
  {
    id: 'bajaj-securities',
    name: 'Bajaj Financial Securities Limited (BFSL)',
    category: 'Stock Broking & Wealth Capital',
    role: 'Full-Service Digital Broker & Depository Participant',
    established: '2010',
    shortDescription: 'State-of-the-art digital stock trading, Demat accounts, and low-brokerage investment platform.',
    description: 'BFSL provides smart trading tools, low brokerage subscription packs, IPO bidding, MTF (Margin Trading Facility), and algorithmic order routing for modern Indian equity investors.',
    keyProducts: ['Demat & Trading Account', 'Margin Trading Facility (MTF)', 'IPO Bidding', 'Equity SIPs', 'Bonds & NCDs'],
    metrics: [
      { label: 'Brokerage Packs', value: 'From ₹5/order' },
      { label: 'Margin Funding', value: 'Up to 4x MTF' },
      { label: 'Platform', value: 'Web & Mobile' },
    ],
    websiteUrl: 'https://www.bajajbroking.in',
    color: '#0369A1',
    accent: '#60A5FA',
  },
  {
    id: 'bajaj-amc',
    name: 'Bajaj Finserv Asset Management Limited',
    category: 'Mutual Funds & Wealth Management',
    role: 'SEBI Registered Asset Management Company',
    established: '2021',
    shortDescription: 'Future-focused mutual fund house driven by the INQUBE behavioral investment framework.',
    description: 'Bajaj Finserv AMC manages retail and institutional mutual fund investments across equity, hybrid, liquid, and fixed-income strategies designed to generate long-term wealth.',
    keyProducts: ['Equity Mutual Funds', 'Large & Mid Cap Funds', 'Flexi Cap Funds', 'Arbitrage & Liquid Funds', 'Systematic Investment Plans (SIP)'],
    metrics: [
      { label: 'Investment Philosophy', value: 'INQUBE' },
      { label: 'Min SIP', value: 'From ₹100' },
      { label: 'SEBI Regulated', value: 'Mutual Fund' },
    ],
    websiteUrl: 'https://www.bajajamc.com',
    color: '#1E40AF',
    accent: '#93C5FD',
  },
  {
    id: 'bajaj-allianz-life',
    name: 'Bajaj Allianz Life Insurance Co. Ltd.',
    category: 'Life & Retirement Insurance',
    role: 'Joint Venture with Allianz SE (Munich)',
    established: '2001',
    shortDescription: 'Trusted life insurance partner safeguarding millions of Indian families with transparent claim settlements.',
    description: 'A joint venture between Bajaj Finserv Limited and Allianz SE, one of the world\'s leading financial services entities, providing term protection, child education funds, and retirement pensions.',
    keyProducts: ['Term Life Plans', 'Savings Plans', 'Retirement & Pension', 'ULIPs', 'Child Education Insurance'],
    metrics: [
      { label: 'Claim Settlement', value: '99.04%' },
      { label: 'Lives Covered', value: '4.5+ Cr' },
      { label: 'Solvency Ratio', value: 'Above 500%' },
    ],
    websiteUrl: 'https://www.bajajallianzlife.com',
    color: '#0891B2',
    accent: '#22D3EE',
  },
  {
    id: 'bajaj-allianz-general',
    name: 'Bajaj Allianz General Insurance Co. Ltd.',
    category: 'Non-Life, Health & Motor Insurance',
    role: 'Joint Venture with Allianz SE (Munich)',
    established: '2001',
    shortDescription: 'Pioneering general insurer delivering swift digital claims for health, motor, travel, and home.',
    description: 'India\'s premier non-life insurer offering health insurance with cashless claims in 60 minutes, comprehensive motor insurance with spot repair, and global international travel protection.',
    keyProducts: ['Health Guard Insurance', 'Motor (Car & Bike) Cover', 'International Travel Insurance', 'Cyber Security Insurance', 'Commercial Asset Risk'],
    metrics: [
      { label: 'Network Hospitals', value: '10,000+' },
      { label: 'Cashless Settlement', value: '< 60 Mins' },
      { label: 'Network Garages', value: '7,500+' },
    ],
    websiteUrl: 'https://www.bajajallianz.com',
    color: '#0D9488',
    accent: '#2DD4BF',
  },
  {
    id: 'bajaj-health',
    name: 'Bajaj Finserv Health Limited',
    category: 'Digital Healthcare & Telemedicine',
    role: 'Healthcare Technology Entity',
    established: '2019',
    shortDescription: 'Integrated digital health ecosystem offering OPD consultations, lab tests, and health cards.',
    description: 'A health-tech subsidiary empowering customers with 24/7 doctor teleconsultations, discounts at 100,000+ partner doctors and labs, pharmacy deliveries, and Aarogya Care health plans.',
    keyProducts: ['Health Prime OPD Plans', 'Teleconsultations', 'Diagnostic Lab Tests', 'Aarogya Care Subscriptions', 'Doctor Appointments'],
    metrics: [
      { label: 'Partner Doctors', value: '100K+' },
      { label: 'Diagnostic Centers', value: '4,500+' },
      { label: 'Specialities', value: '35+' },
    ],
    websiteUrl: 'https://www.bajajfinservhealth.in',
    color: '#059669',
    accent: '#34D399',
  },
];
