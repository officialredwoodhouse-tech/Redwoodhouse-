import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Send, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND } from '../constants/assets';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: 'Agencies',
    bottleneck: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    // Build mailto query so user client immediately triggers or shows success
    const subject = encodeURIComponent(`[${formData.industry}] System Bottleneck Inquiry from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nIndustry: ${formData.industry}\n\nWhere the system is getting in our way:\n${formData.bottleneck}\n`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-[#0A192F] py-section-lg text-white overflow-hidden relative">
      {/* Subtle crimson ambient glow accent */}
      <div className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-[#9B111E]/15 blur-3xl" />
      <div className="container-page relative z-10">
        {/* Top Header & Direct Email Button with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20 pb-12 border-b border-white/15"
        >
          <div className="max-w-3xl">
            <p className="text-caption font-semibold uppercase tracking-[0.18em] text-[#BA1A24]">
              Make the next move a considered one.
            </p>
            <h2 className="mt-5 font-display text-h1 text-white">
              Tell us where the system is getting in your way.
            </h2>
            <p className="mt-6 max-w-xl text-body-lg text-white/75">
              Share what is slowing the team down, what you want to make possible, or simply where you want to start. We will take it from there.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors bg-[#F4F1EB] text-[#0A111D] hover:bg-white shadow-sm h-12 rounded-none px-7 group"
            >
              <span>{BRAND.email}</span>
              <ArrowUpRight className="size-4 text-[#BA1A24] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white/90 hover:text-white px-4 h-12 text-xs uppercase tracking-wider font-mono transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="size-4 text-[#BA1A24]" /> : <Copy className="size-4" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </motion.div>

        {/* Interactive Direct Dispatch Form with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-caption font-semibold uppercase tracking-[0.16em] text-white/60 mb-6 font-mono">
            Direct System Briefing Form
          </p>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 p-8 text-center animate-in fade-in">
              <CheckCircle2 className="size-10 text-[#BA1A24] mx-auto mb-4" />
              <h3 className="font-display text-2xl font-semibold text-white">
                Brief Dispatched
              </h3>
              <p className="mt-2 text-sm text-white/80 max-w-md mx-auto">
                Your email client has opened with this inquiry, or you can write directly to{' '}
                <span className="font-mono underline font-medium">{BRAND.email}</span>. We respond within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs text-[#BA1A24] underline uppercase tracking-wider"
              >
                Send another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-white/70 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#BA1A24]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-white/70 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@organization.com"
                    className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#BA1A24]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-white/70 mb-1.5">
                  Your Industry / Sector
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full bg-[#0D203D] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#BA1A24]"
                >
                  <option value="Agencies">Agencies (Growth & Creative)</option>
                  <option value="Clinics">Clinics (Specialty & Practice)</option>
                  <option value="Hospitals">Hospitals (Health Systems)</option>
                  <option value="Gyms">Gyms & Fitness Centers</option>
                  <option value="SEO Marketing">SEO & Growth Marketing</option>
                  <option value="Custom Softwares">Custom Softwares & Portals</option>
                  <option value="Design">Brand & Interface Design</option>
                  <option value="Websites (Professional Way)">Websites (Engineered the Professional Way)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-white/70 mb-1.5">
                  Where is the system getting in your way?
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="Describe the handoff friction, manual spreadsheet work, or system you want automated..."
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#BA1A24] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0A192F] hover:bg-[#F4F1EB] px-7 py-3.5 text-sm font-semibold transition-colors group"
                >
                  <span>Submit System Brief</span>
                  <Send className="size-4 text-[#BA1A24] transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
