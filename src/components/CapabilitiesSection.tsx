import React from 'react';
import { MessageSquare, Workflow, Check, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="scroll-mt-20 border-b border-[#DDD7CB] bg-[#EBE7DE]/40 py-section-lg overflow-hidden">
      <div className="container-page">
        {/* Header Grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
        >
          <div>
            <p className="text-eyebrow">What we build</p>
            <h2 className="mt-4 max-w-sm font-display text-h1 text-[#0A111D]">
              The useful layer between ambition and execution.
            </h2>
          </div>
          <div className="max-w-2xl lg:pt-12">
            <p className="text-body-lg text-[#6B665E]">
              You do not need more disconnected tools. You need a thoughtful system that knows what should happen next — and makes it easier for your team to make that happen.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards Grid with hair-thin borders & staggered scroll reveal */}
        <div className="mt-16 grid gap-px border border-[#DDD7CB] bg-[#DDD7CB] md:grid-cols-2 lg:grid-cols-3">
          {/* Card 01 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex min-h-[25rem] flex-col bg-white p-7 sm:p-9 transition-all duration-300 ease-out hover:bg-[#F4F1EB] hover:shadow-xl hover:shadow-[#0A192F]/5"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-12 items-center justify-center border border-[#0A192F]/20 text-[#0A192F] transition-transform duration-200 ease-out group-hover:rotate-6 group-hover:border-[#9B111E] group-hover:text-[#9B111E]">
                <MessageSquare className="size-5" />
              </div>
              <span className="font-mono text-small text-[#6B665E]">01</span>
            </div>

            <div className="mt-auto pt-12">
              <h3 className="max-w-sm font-display text-h3 text-[#0A111D]">
                Turn enquiries into momentum
              </h3>
              <p className="mt-4 max-w-lg text-body text-[#6B665E]">
                Capture intent, qualify the right opportunities, and keep every customer conversation moving across the channels your team already uses.
              </p>

              <ul className="mt-7 grid gap-2 border-t border-[#DDD7CB] pt-5 text-small text-[#6B665E]">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Conversational assistants</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Messaging workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Lead and CRM systems</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 02 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex min-h-[25rem] flex-col bg-white p-7 sm:p-9 transition-all duration-300 ease-out hover:bg-[#F4F1EB] hover:shadow-xl hover:shadow-[#0A192F]/5"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-12 items-center justify-center border border-[#0A192F]/20 text-[#0A192F] transition-transform duration-200 ease-out group-hover:rotate-6 group-hover:border-[#9B111E] group-hover:text-[#9B111E]">
                <Workflow className="size-5" />
              </div>
              <span className="font-mono text-small text-[#6B665E]">02</span>
            </div>

            <div className="mt-auto pt-12">
              <h3 className="max-w-sm font-display text-h3 text-[#0A111D]">
                Make the back office flow
              </h3>
              <p className="mt-4 max-w-lg text-body text-[#6B665E]">
                Replace handoffs and repetitive follow-up with connected workflows for intake, bookings, reminders, reporting, and the work between them.
              </p>

              <ul className="mt-7 grid gap-2 border-t border-[#DDD7CB] pt-5 text-small text-[#6B665E]">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Intake and booking automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Business-tool connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Bespoke operational platforms</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 03 - Professional Websites */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex min-h-[25rem] flex-col bg-white p-7 sm:p-9 transition-all duration-300 ease-out hover:bg-[#F4F1EB] hover:shadow-xl hover:shadow-[#0A192F]/5 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-12 items-center justify-center border border-[#0A192F]/20 text-[#0A192F] transition-transform duration-200 ease-out group-hover:rotate-6 group-hover:border-[#9B111E] group-hover:text-[#9B111E]">
                <Globe className="size-5" />
              </div>
              <span className="font-mono text-small text-[#6B665E]">03</span>
            </div>

            <div className="mt-auto pt-12">
              <h3 className="max-w-sm font-display text-h3 text-[#0A111D]">
                Websites built the professional way
              </h3>
              <p className="mt-4 max-w-lg text-body text-[#6B665E]">
                No bloated drag-and-drop templates or fragile page builders. We engineer custom, lightning-fast web applications with sub-second speeds, bespoke typography, and direct backend automation hooks.
              </p>

              <ul className="mt-7 grid gap-2 border-t border-[#DDD7CB] pt-5 text-small text-[#6B665E]">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Clean React & TypeScript code</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Sub-second load & 100/100 Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#9B111E]" />
                  <span>Integrated conversion & intake pipelines</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
