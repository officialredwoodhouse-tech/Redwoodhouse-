import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import {
  ArrowUpRight,
  Check,
  CreditCard,
  ShieldCheck,
  FileText,
  Sparkles,
  Copy,
  CheckCircle2,
  Building2,
  Zap,
  TrendingUp,
} from 'lucide-react';

interface TransactionSectionProps {
  onOpenFullTransactionPage?: (tierId?: string) => void;
}

export interface StudioPackage {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  inrPrice: number;
  usdPrice: number;
  timeline: string;
  badge?: string;
  deliverables: string[];
}

export const STUDIO_PACKAGES: StudioPackage[] = [
  {
    id: 'audit',
    code: 'RWH-01',
    name: 'Search, Presence & Ad Funnel Audit',
    subtitle: 'Complete technical diagnostic & conversion roadmap',
    inrPrice: 24000,
    usdPrice: 350,
    timeline: '5 Business Days',
    deliverables: [
      'Full Core Web Vitals, DOM & crawlability technical audit',
      'High-intent commercial keyword & competitor gap matrix',
      'Ad landing page & checkout transaction drop-off analysis',
      'Prioritized 90-day engineering & SEO execution blueprint',
      '100% fee credited toward a full Flagship build within 60 days',
    ],
  },
  {
    id: 'flagship',
    code: 'RWH-02',
    name: 'Digital Flagship Website + SEO Core',
    subtitle: 'Bespoke web engineering, brand presence & technical SEO',
    inrPrice: 145000,
    usdPrice: 1850,
    timeline: '4–6 Weeks',
    badge: 'Most Selected',
    deliverables: [
      'Custom 10–15 page React / Next.js high-speed web architecture',
      'Editorial brand positioning, copywriting & custom UI system',
      '99+ Core Web Vitals optimization across mobile & desktop',
      'Validated Schema.org JSON-LD graph & semantic URL silos',
      'Payment gateway (Razorpay / Stripe) or booking flow integration',
      '100% source code, domain & analytics ownership handover',
    ],
  },
  {
    id: 'growth-engine',
    code: 'RWH-03',
    name: 'Full Flagship + Programmatic SEO + Ad Transaction Engine',
    subtitle: 'End-to-end digital dominance, paid ad funnels & checkout systems',
    inrPrice: 265000,
    usdPrice: 3400,
    timeline: '6–8 Weeks',
    deliverables: [
      'Everything in the Digital Flagship Website + SEO Core package',
      '25+ programmatic SEO comparison & regional landing hubs',
      'High-converting Google Search & Meta Ad landing page funnels',
      'Full E-Commerce or Service Transaction Checkout & invoicing flow',
      'Server-side Conversion API (CAPI) & revenue attribution setup',
      '90 days of post-launch search indexing & ad conversion tuning',
    ],
  },
];

export const ADDON_MODULES = [
  {
    id: 'checkout-gateway',
    label: 'Custom Payment Gateway & Automated Invoice Engine (Stripe / Razorpay)',
    inr: 28000,
    usd: 360,
  },
  {
    id: 'ad-funnel',
    label: 'High-ROAS Search & Social Ad Landing Funnel + Conversion API',
    inr: 35000,
    usd: 450,
  },
  {
    id: 'programmatic-hub',
    label: '15 Additional Programmatic SEO City / Service Silo Pages',
    inr: 42000,
    usd: 540,
  },
];

export const TransactionSection: React.FC<TransactionSectionProps> = ({
  onOpenFullTransactionPage,
}) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [selectedPkgId, setSelectedPkgId] = useState<string>('flagship');
  const [paymentSchedule, setPaymentSchedule] = useState<'milestone' | 'upfront'>('milestone');
  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({});
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'wire'>('upi');
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientUrl, setClientUrl] = useState('');
  const [txGenerated, setTxGenerated] = useState<string | null>(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  const selectedPkg = STUDIO_PACKAGES.find((p) => p.id === selectedPkgId) || STUDIO_PACKAGES[1];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const baseAmount = currency === 'INR' ? selectedPkg.inrPrice : selectedPkg.usdPrice;
  const addonsAmount = ADDON_MODULES.reduce((acc, mod) => {
    if (selectedAddons[mod.id]) {
      return acc + (currency === 'INR' ? mod.inr : mod.usd);
    }
    return acc;
  }, 0);

  const subtotal = baseAmount + addonsAmount;
  const discount = paymentSchedule === 'upfront' ? Math.round(subtotal * 0.05) : 0;
  const netTotal = subtotal - discount;
  const payableNow = paymentSchedule === 'milestone' ? Math.round(netTotal * 0.5) : netTotal;

  const formatMoney = (val: number) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  const handleGenerateTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setTxGenerated(`RWH-TXN-${randomCode}`);
  };

  const activeAddonLabels = ADDON_MODULES.filter((m) => selectedAddons[m.id]).map((m) => m.label);

  const receiptSummaryText = [
    `REDWOOD HOUSE — STUDIO TRANSACTION & PRO-FORMA INVOICE`,
    `Transaction Reference: ${txGenerated || 'PENDING'}`,
    `Client: ${clientName || 'Valued Client'} (${clientCompany || 'Independent'})`,
    `Email: ${clientEmail || 'Not specified'}`,
    `Target Domain: ${clientUrl || 'New Digital Flagship'}`,
    `Selected Package: ${selectedPkg.name} (${selectedPkg.code})`,
    activeAddonLabels.length > 0 ? `Add-On Modules: ${activeAddonLabels.join('; ')}` : `Add-On Modules: None`,
    `Payment Schedule: ${paymentSchedule === 'milestone' ? '50% Kickoff Milestone Deposit' : '100% Upfront (5% Studio Discount Applied)'}`,
    `Preferred Payment Channel: ${paymentMethod.toUpperCase()}`,
    `Total Project Value: ${formatMoney(netTotal)}`,
    `Amount Payable to Initiate: ${formatMoney(payableNow)}`,
    `Studio Desk: ${BRAND.email} · Chandigarh, India`,
  ].join('\n');

  const handleCopyReceipt = () => {
    navigator.clipboard?.writeText(receiptSummaryText);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2500);
  };

  const mailtoTransactionHref = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `Studio Transaction ${txGenerated || 'Booking'} — ${selectedPkg.name}`
  )}&body=${encodeURIComponent(receiptSummaryText)}`;

  return (
    <section id="transactions" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#E8E4DC]">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] font-mono">
              <span>Transparent Engagements</span>
              <span aria-hidden="true">·</span>
              <span>Ad & Checkout Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Instant Initiation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
              Productized packages & studio transaction desk.
            </h2>
            <p className="text-lg text-[#58544E] leading-relaxed">
              We believe in transparent commercial terms. Select a fixed-scope Website, SEO, or Ad-Transaction engagement below, configure your milestone schedule, and generate an instant studio transaction mandate.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C]">
              Select Billing Currency
            </span>
            <div className="inline-flex items-center p-1 bg-[#F4F0E8] border border-[#E8E4DC] rounded-lg">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 text-xs font-mono font-semibold rounded-md transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-[#1C1A18] text-white shadow-xs'
                    : 'text-[#58544E] hover:text-[#1C1A18]'
                }`}
              >
                INR (₹) · India
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 text-xs font-mono font-semibold rounded-md transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#1C1A18] text-white shadow-xs'
                    : 'text-[#58544E] hover:text-[#1C1A18]'
                }`}
              >
                USD ($) · Global
              </button>
            </div>
          </div>
        </div>

        {/* Ad & Transaction Capabilities Highlight Strip */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-[#FAF8F3] border border-[#E8E4DC] rounded-lg flex items-start gap-3.5">
            <TrendingUp className="w-5 h-5 text-[#3D1D18] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-serif font-semibold text-[#1C1A18]">
                High-ROAS Ad Landing Funnels
              </h3>
              <p className="text-xs text-[#58544E] mt-1 leading-relaxed">
                Dedicated Google Search & Meta ad conversion pages engineered with sub-second speed to cut cost-per-acquisition.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[#FAF8F3] border border-[#E8E4DC] rounded-lg flex items-start gap-3.5">
            <CreditCard className="w-5 h-5 text-[#3D1D18] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-serif font-semibold text-[#1C1A18]">
                Payment & Checkout Engineering
              </h3>
              <p className="text-xs text-[#58544E] mt-1 leading-relaxed">
                Seamless Stripe, Razorpay, UPI, and multi-currency checkout flows with automated invoicing and webhook reliability.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[#FAF8F3] border border-[#E8E4DC] rounded-lg flex items-start gap-3.5">
            <Zap className="w-5 h-5 text-[#3D1D18] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-serif font-semibold text-[#1C1A18]">
                Server-Side Transaction Attribution
              </h3>
              <p className="text-xs text-[#58544E] mt-1 leading-relaxed">
                End-to-end tracking from first search keyword or ad click to closed payment transaction in GA4 and CRM.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {STUDIO_PACKAGES.map((pkg) => {
            const isSelected = selectedPkgId === pkg.id;
            const price = currency === 'INR' ? pkg.inrPrice : pkg.usdPrice;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPkgId(pkg.id)}
                className={`rounded-lg border p-8 transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#3D1D18] ring-1 ring-[#3D1D18] shadow-md'
                    : 'bg-white border-[#E8E4DC] hover:border-[#D5CFC5] shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#F4F0E8] mb-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#78716C]">
                      {pkg.code} · {pkg.timeline}
                    </span>
                    {pkg.badge ? (
                      <span className="text-[11px] font-mono font-semibold text-[#3D1D18] bg-[#F4F0E8] px-2.5 py-0.5 rounded-xs border border-[#E8E4DC]">
                        {pkg.badge}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-[#78716C]">Fixed Scope</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-[#1C1A18] leading-snug">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#58544E] mt-1.5">
                    {pkg.subtitle}
                  </p>

                  <div className="my-6 pt-4 border-t border-[#F4F0E8]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                      One-Time Engagement Investment
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-serif font-medium text-[#1C1A18]">
                        {formatMoney(price)}
                      </span>
                      <span className="text-xs font-mono text-[#78716C]">
                        {currency}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-[#4A4641]">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#3D1D18] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F4F0E8]">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPkgId(pkg.id);
                      const terminal = document.getElementById('transaction-terminal');
                      terminal?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 px-4 rounded-md text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#1C1A18] text-white hover:bg-[#3D1D18]'
                        : 'bg-[#F4F0E8] text-[#1C1A18] hover:bg-[#E8E4DC]'
                    }`}
                  >
                    {isSelected ? 'Selected in Transaction Terminal ↓' : 'Select Package & Configure'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Studio Transaction & Pro-Forma Invoice Terminal */}
        <div
          id="transaction-terminal"
          className="mt-14 bg-white rounded-lg border border-[#D5CFC5] shadow-sm overflow-hidden"
        >
          <div className="p-6 sm:p-8 bg-[#1C1A18] text-[#FBF9F5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A8A29E]">
                <ShieldCheck className="w-4 h-4 text-[#D6D3D1]" />
                <span>Redwood House · Studio Transaction Terminal</span>
              </div>
              <h3 className="text-2xl font-serif text-white">
                Configure Engagement & Generate Official Payment Mandate
              </h3>
            </div>
            {onOpenFullTransactionPage && (
              <button
                onClick={() => onOpenFullTransactionPage(selectedPkgId)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E7E3DC] hover:text-white border border-[#44403C] hover:border-white px-3.5 py-2 rounded-sm transition-colors cursor-pointer shrink-0"
              >
                <span>Open Dedicated Transaction & ROI Page</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E8E4DC]">
            {/* Left 7 Cols: Configuration Form */}
            <form onSubmit={handleGenerateTransaction} className="lg:col-span-7 p-6 sm:p-10 space-y-8">
              {/* Step 1: Schedule */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  1. Select Milestone Tranche Schedule
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentSchedule('milestone')}
                    className={`p-4 rounded-md border text-left transition-all cursor-pointer ${
                      paymentSchedule === 'milestone'
                        ? 'border-[#3D1D18] bg-[#FAF8F3]'
                        : 'border-[#E8E4DC] bg-white hover:border-[#D5CFC5]'
                    }`}
                  >
                    <div className="text-sm font-serif font-semibold text-[#1C1A18]">
                      50% Kickoff Deposit · 50% on Launch
                    </div>
                    <div className="text-xs text-[#58544E] mt-1">
                      Standard two-tranche milestone protection.
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentSchedule('upfront')}
                    className={`p-4 rounded-md border text-left transition-all cursor-pointer ${
                      paymentSchedule === 'upfront'
                        ? 'border-[#3D1D18] bg-[#FAF8F3]'
                        : 'border-[#E8E4DC] bg-white hover:border-[#D5CFC5]'
                    }`}
                  >
                    <div className="text-sm font-serif font-semibold text-[#1C1A18]">
                      100% Upfront Settlement (Save 5%)
                    </div>
                    <div className="text-xs text-[#3D1D18] mt-1 font-medium">
                      Includes 5% studio settlement discount.
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 2: Optional Add-on Architecture Modules */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  2. Optional Ad & Transaction Engineering Modules
                </label>
                <div className="space-y-2.5">
                  {ADDON_MODULES.map((mod) => {
                    const isChecked = !!selectedAddons[mod.id];
                    const modPrice = currency === 'INR' ? mod.inr : mod.usd;
                    return (
                      <button
                        type="button"
                        key={mod.id}
                        onClick={() => toggleAddon(mod.id)}
                        className={`w-full p-3.5 rounded-md border text-left flex items-center justify-between gap-4 transition-all cursor-pointer ${
                          isChecked
                            ? 'border-[#3D1D18] bg-[#FAF8F3]'
                            : 'border-[#E8E4DC] bg-white hover:border-[#D5CFC5]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                              isChecked
                                ? 'bg-[#3D1D18] border-[#3D1D18] text-white'
                                : 'border-[#A8A29E]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-[#1C1A18]">
                            {mod.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-[#3D1D18] shrink-0">
                          +{formatMoney(modPrice)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Preferred Payment Method */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  3. Select Transaction Settlement Rail
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-md border text-left cursor-pointer ${
                      paymentMethod === 'upi'
                        ? 'border-[#3D1D18] bg-[#FAF8F3]'
                        : 'border-[#E8E4DC] bg-white'
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#1C1A18]">UPI / IMPS</div>
                    <div className="text-[11px] text-[#78716C] mt-0.5">Instant India Transfer</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-md border text-left cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#3D1D18] bg-[#FAF8F3]'
                        : 'border-[#E8E4DC] bg-white'
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#1C1A18]">Corporate Card</div>
                    <div className="text-[11px] text-[#78716C] mt-0.5">Stripe / Razorpay Link</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('wire')}
                    className={`p-3 rounded-md border text-left cursor-pointer ${
                      paymentMethod === 'wire'
                        ? 'border-[#3D1D18] bg-[#FAF8F3]'
                        : 'border-[#E8E4DC] bg-white'
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#1C1A18]">Bank Wire / NEFT</div>
                    <div className="text-[11px] text-[#78716C] mt-0.5">GST / SWIFT Invoice</div>
                  </button>
                </div>
              </div>

              {/* Step 4: Client Details for Invoice */}
              <div className="space-y-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  4. Client & Entity Details (For Official Studio Invoice)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#58544E] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g., Arjun Mehta"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#D5CFC5] rounded-md focus:outline-none focus:border-[#1C1A18]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#58544E] mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      placeholder="e.g., Northstar Labs Pvt. Ltd."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#D5CFC5] rounded-md focus:outline-none focus:border-[#1C1A18]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#58544E] mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#D5CFC5] rounded-md focus:outline-none focus:border-[#1C1A18]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#58544E] mb-1">Current Website URL (Optional)</label>
                    <input
                      type="text"
                      value={clientUrl}
                      onChange={(e) => setClientUrl(e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#D5CFC5] rounded-md focus:outline-none focus:border-[#1C1A18]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-sm font-semibold rounded-md transition-colors shadow-xs cursor-pointer"
              >
                Generate Official Pro-Forma Invoice & Transaction ID
              </button>
            </form>

            {/* Right 5 Cols: Live Transaction Summary & Receipt */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#FAF8F3] flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] block">
                      Pro-Forma Ledger
                    </span>
                    <h4 className="text-lg font-serif font-medium text-[#1C1A18]">
                      Transaction Summary
                    </h4>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 bg-white border border-[#E8E4DC] rounded-xs text-[#3D1D18] font-semibold">
                    {txGenerated || 'DRAFT MANDATE'}
                  </span>
                </div>

                {/* Line Items */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="font-medium text-[#1C1A18] block">{selectedPkg.name}</span>
                      <span className="text-xs text-[#78716C] font-mono">{selectedPkg.code} · {selectedPkg.timeline}</span>
                    </div>
                    <span className="font-mono font-medium text-[#1C1A18]">
                      {formatMoney(baseAmount)}
                    </span>
                  </div>

                  {ADDON_MODULES.filter((m) => selectedAddons[m.id]).map((mod) => (
                    <div key={mod.id} className="flex justify-between items-start gap-4 pt-2 border-t border-[#E8E4DC]/60">
                      <span className="text-xs text-[#58544E]">{mod.label}</span>
                      <span className="font-mono text-xs text-[#1C1A18] shrink-0">
                        +{formatMoney(currency === 'INR' ? mod.inr : mod.usd)}
                      </span>
                    </div>
                  ))}

                  {discount > 0 && (
                    <div className="flex justify-between items-center pt-2 border-t border-[#E8E4DC]/60 text-[#3D1D18]">
                      <span className="text-xs font-medium">5% Upfront Settlement Discount</span>
                      <span className="font-mono text-xs font-semibold">-{formatMoney(discount)}</span>
                    </div>
                  )}
                </div>

                {/* Totals */}
                <div className="pt-4 border-t border-[#D5CFC5] space-y-2">
                  <div className="flex justify-between text-xs text-[#58544E]">
                    <span>Total Engagement Value</span>
                    <span className="font-mono font-medium text-[#1C1A18]">{formatMoney(netTotal)}</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-sm font-serif font-semibold text-[#1C1A18]">
                      {paymentSchedule === 'milestone' ? 'Due Now (50% Kickoff Deposit)' : 'Due Now (100% Settlement)'}
                    </span>
                    <span className="text-2xl font-serif font-bold text-[#3D1D18]">
                      {formatMoney(payableNow)}
                    </span>
                  </div>
                </div>

                {/* Generated Receipt Confirmation Box */}
                {txGenerated && (
                  <div className="p-4 bg-white border border-[#3D1D18] rounded-md space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#3D1D18]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Transaction ID {txGenerated} Ready</span>
                    </div>
                    <p className="text-xs text-[#58544E] leading-relaxed">
                      Your pro-forma transaction mandate has been generated for <strong>{clientName || 'your organization'}</strong>. Dispatch this mandate to our studio desk to receive your secure {paymentMethod.toUpperCase()} payment link & counter-signed SLA within 2 business hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                      <a
                        href={mailtoTransactionHref}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-sm transition-colors"
                      >
                        <span>Dispatch Mandate to Studio</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyReceipt}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-[#D5CFC5] hover:border-[#1C1A18] text-xs font-medium text-[#1C1A18] rounded-sm transition-colors cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedReceipt ? 'Copied!' : 'Copy Receipt'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Studio Protection Footer */}
              <div className="pt-4 border-t border-[#E8E4DC] text-[11px] text-[#78716C] space-y-1">
                <div className="flex items-center justify-between">
                  <span>GST / Commercial Tax Invoice Provided</span>
                  <span className="font-mono">Chandigarh, IN</span>
                </div>
                <div>
                  Direct Billing Desk: <span className="font-mono text-[#1C1A18]">{BRAND.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
