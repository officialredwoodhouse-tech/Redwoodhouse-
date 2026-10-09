import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { TransactionSection } from '../components/TransactionSection';
import {
  ArrowLeft,
  ArrowUpRight,
  Calculator,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
} from 'lucide-react';

interface TransactionPageProps {
  onBack: () => void;
}

export const TransactionPage: React.FC<TransactionPageProps> = ({ onBack }) => {
  // Interactive Ad & Transaction ROI Simulator State
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(8500);
  const [currentConvRate, setCurrentConvRate] = useState<number>(1.2);
  const [projectedConvRate, setProjectedConvRate] = useState<number>(3.4);
  const [avgTransactionValue, setAvgTransactionValue] = useState<number>(45000);
  const [simCurrency, setSimCurrency] = useState<'INR' | 'USD'>('INR');

  // Custom Invoice Lookup / Milestone Settlement State
  const [customInvoiceId, setCustomInvoiceId] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [customVerified, setCustomVerified] = useState(false);

  const currentMonthlyTx = Math.round(monthlyVisitors * (currentConvRate / 100));
  const projectedMonthlyTx = Math.round(monthlyVisitors * (projectedConvRate / 100));
  const txLift = projectedMonthlyTx - currentMonthlyTx;

  const currentMonthlyRev = currentMonthlyTx * avgTransactionValue;
  const projectedMonthlyRev = projectedMonthlyTx * avgTransactionValue;
  const monthlyRevDelta = projectedMonthlyRev - currentMonthlyRev;

  const formatSimMoney = (val: number) => {
    if (simCurrency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      {/* Top Back Action Bar */}
      <div className="border-b border-[#E8E4DC] bg-[#FAF8F3]/80 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#58544E] hover:text-[#1C1A18] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio Overview</span>
          </button>
          <div className="text-xs font-mono text-[#78716C] hidden sm:block">
            Ad Funnels · Checkout Systems · Studio Transactions
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-16 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78716C]">
            <span>Ad Conversion Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Checkout Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Studio Billing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
            Ad-to-Transaction Engineering & Studio Checkout.
          </h1>
          <p className="text-lg sm:text-xl text-[#58544E] leading-relaxed">
            Traffic without transaction architecture is wasted spend. We engineer high-converting ad landing funnels, frictionless payment gateways, and transparent studio engagements.
          </p>
        </div>
      </div>

      {/* Interactive Ad & Website Transaction Lift Simulator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-b border-[#E8E4DC] bg-[#FAF8F3]/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3D1D18] font-semibold flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Ad & Conversion Simulator</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1A18]">
              Model your monthly transaction & revenue lift.
            </h2>
            <p className="text-sm text-[#58544E]">
              See how pairing sub-second web speed with dedicated ad landing pages and frictionless checkout architecture multiplies your completed customer transactions:
            </p>
          </div>

          <div className="inline-flex items-center p-1 bg-white border border-[#E8E4DC] rounded-md self-start">
            <button
              onClick={() => {
                setSimCurrency('INR');
                setAvgTransactionValue(45000);
              }}
              className={`px-3 py-1 text-xs font-mono font-semibold rounded transition-colors cursor-pointer ${
                simCurrency === 'INR' ? 'bg-[#1C1A18] text-white' : 'text-[#58544E]'
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => {
                setSimCurrency('USD');
                setAvgTransactionValue(1200);
              }}
              className={`px-3 py-1 text-xs font-mono font-semibold rounded transition-colors cursor-pointer ${
                simCurrency === 'USD' ? 'bg-[#1C1A18] text-white' : 'text-[#58544E]'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#E8E4DC] p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-2">
                <span className="font-medium text-[#1C1A18]">
                  Monthly Search + Paid Ad Visitors
                </span>
                <span className="font-mono font-semibold text-[#3D1D18]">
                  {monthlyVisitors.toLocaleString()} visitors/mo
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={100000}
                step={500}
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className="w-full accent-[#3D1D18] cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="font-medium text-[#58544E]">Current Conversion Rate</span>
                  <span className="font-mono font-semibold text-[#58544E]">{currentConvRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={0.4}
                  max={5.0}
                  step={0.2}
                  value={currentConvRate}
                  onChange={(e) => setCurrentConvRate(Number(e.target.value))}
                  className="w-full accent-[#78716C] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="font-medium text-[#1C1A18]">Redwood Flagship Conversion</span>
                  <span className="font-mono font-semibold text-[#3D1D18]">{projectedConvRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={8.0}
                  step={0.2}
                  value={projectedConvRate}
                  onChange={(e) => setProjectedConvRate(Number(e.target.value))}
                  className="w-full accent-[#3D1D18] cursor-pointer"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-2">
                <span className="font-medium text-[#1C1A18]">
                  Average Order / Client Transaction Value ({simCurrency})
                </span>
                <span className="font-mono font-semibold text-[#3D1D18]">
                  {formatSimMoney(avgTransactionValue)}
                </span>
              </div>
              <input
                type="range"
                min={simCurrency === 'INR' ? 2500 : 100}
                max={simCurrency === 'INR' ? 250000 : 10000}
                step={simCurrency === 'INR' ? 2500 : 100}
                value={avgTransactionValue}
                onChange={(e) => setAvgTransactionValue(Number(e.target.value))}
                className="w-full accent-[#3D1D18] cursor-pointer"
              />
            </div>
          </div>

          {/* Output Metrics */}
          <div className="lg:col-span-5 bg-[#FAF8F3] p-6 sm:p-8 rounded-lg border border-[#E8E4DC] space-y-5">
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
              Projected Monthly Impact
            </div>

            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#E8E4DC]">
              <div>
                <span className="text-xs text-[#78716C] block">Current Transactions</span>
                <span className="text-xl font-mono font-medium text-[#58544E] mt-0.5 block">
                  {currentMonthlyTx} / mo
                </span>
              </div>
              <div>
                <span className="text-xs text-[#3D1D18] font-medium block">Projected Transactions</span>
                <span className="text-2xl font-mono font-bold text-[#3D1D18] mt-0.5 block">
                  {projectedMonthlyTx} / mo ({txLift >= 0 ? `+${txLift}` : txLift})
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                Net Monthly Transaction Revenue Lift
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-medium text-[#1C1A18]">
                {monthlyRevDelta >= 0 ? `+${formatSimMoney(monthlyRevDelta)}` : formatSimMoney(monthlyRevDelta)}
                <span className="text-xs font-mono text-[#78716C] ml-1.5">/ month</span>
              </div>
            </div>

            <p className="text-xs text-[#58544E] leading-relaxed">
              Without spending a single extra rupee or dollar on ad clicks, upgrading your landing speed, trust architecture, and checkout flow compounds every visitor you already earn.
            </p>
          </div>
        </div>
      </div>

      {/* Main Package & Studio Transaction Terminal */}
      <TransactionSection />

      {/* Custom Milestone / Existing Invoice Settlement Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
              Existing Client Milestone Settlement
            </span>
            <h3 className="text-2xl font-serif text-[#1C1A18]">
              Have a custom studio invoice or milestone reference?
            </h3>
            <p className="text-sm text-[#58544E] leading-relaxed">
              Enter your Redwood House Invoice ID (e.g., <code className="font-mono text-xs bg-[#FAF8F3] px-1.5 py-0.5 border border-[#E8E4DC]">RWH-INV-2026</code>) and milestone amount to generate a direct settlement dispatch.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setCustomVerified(true);
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <input
                type="text"
                required
                value={customInvoiceId}
                onChange={(e) => {
                  setCustomInvoiceId(e.target.value);
                  setCustomVerified(false);
                }}
                placeholder="Invoice ID (RWH-...)"
                className="px-3.5 py-2.5 text-xs font-mono bg-[#FBF9F5] border border-[#D5CFC5] rounded-md focus:outline-none focus:border-[#1C1A18]"
              />
              <input
                type="text"
                required
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setCustomVerified(false);
                }}
                placeholder="Amount (e.g. ₹72,500)"
                className="px-3.5 py-2.5 text-xs font-mono bg-[#FBF9F5] border border-[#D5CFC5] rounded-md focus:outline-none focus:border-[#1C1A18]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                Verify & Settle
              </button>
            </form>

            {customVerified && (
              <div className="mt-4 p-3.5 bg-[#FAF8F3] border border-[#3D1D18]/40 rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#1C1A18]">
                  <CheckCircle2 className="w-4 h-4 text-[#3D1D18] shrink-0" />
                  <span>
                    Mandate <strong>{customInvoiceId}</strong> ({customAmount}) verified for dispatch.
                  </span>
                </div>
                <a
                  href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
                    `Invoice Settlement — ${customInvoiceId}`
                  )}&body=${encodeURIComponent(
                    `Hello Redwood House Billing Desk,\n\nPlease send the instant payment link / bank coordinates for Invoice ID: ${customInvoiceId}\nSettlement Amount: ${customAmount}`
                  )}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#3D1D18] underline underline-offset-4 shrink-0"
                >
                  <span>Request Instant Payment Link</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
