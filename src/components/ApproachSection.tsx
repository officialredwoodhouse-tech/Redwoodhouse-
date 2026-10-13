import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ApproachSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We map the customer journey, internal friction, and the outcome that matters most.',
    },
    {
      num: '02',
      title: 'Build',
      desc: 'We design and ship the right combination of software, automation, and digital touchpoints.',
    },
    {
      num: '03',
      title: 'Compound',
      desc: 'We leave your team with a clearer system, better signals, and room to keep growing.',
    },
  ];

  const stackPillars = [
    'Clear interfaces',
    'Responsible automation',
    'Compliance-aware processes',
  ];

  return (
    <section id="approach" className="scroll-mt-20 border-b border-[#DDD7CB] py-section-lg bg-[#F4F1EB] overflow-hidden">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
        {/* Left Column: 3 Stages */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-eyebrow">How we work</p>
            <h2 className="mt-4 max-w-2xl font-display text-h1 text-[#0A111D]">
              Start with the friction. Finish with more room to think.
            </h2>
          </motion.div>

          <div className="mt-12 border-t border-[#DDD7CB]">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group grid gap-4 border-b border-[#DDD7CB] py-7 sm:grid-cols-[5rem_0.7fr_1fr] sm:items-start sm:gap-6 transition-colors duration-200 hover:bg-[#E6E1D8]/40 px-2 -mx-2"
              >
                <span className="font-mono text-small text-[#9B111E] font-semibold transition-transform duration-200 group-hover:translate-x-1">
                  {step.num}
                </span>
                <h3 className="font-display text-h4 text-xl font-semibold text-[#0A111D] transition-colors group-hover:text-[#9B111E]">
                  {step.title}
                </h3>
                <p className="max-w-md text-body text-[#6B665E]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: A considered stack card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="border border-[#DDD7CB] h-fit rounded-none bg-[#EBE7DE] text-[#0A111D] shadow-none lg:mt-24 card-hover-effect transition-all duration-300 hover:bg-white hover:border-[#9B111E]/40"
        >
          <div className="p-7 sm:p-9">
            <div className="flex items-center justify-between border-b border-[#DDD7CB] pb-5">
              <span className="text-eyebrow">A considered stack</span>
              <ArrowUpRight className="size-5 text-[#9B111E]" />
            </div>

            <p className="mt-8 font-display text-h3 text-[#0A111D]">
              Good technology should feel calm to the people using it.
            </p>

            <p className="mt-5 text-body text-[#6B665E]">
              Every build is shaped around ownership, performance, secure data handling, and the real habits of the people it is meant to serve.
            </p>

            <div className="mt-8 grid gap-3 text-small text-[#0A111D]">
              {stackPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                  className="flex items-center gap-3 border-t border-[#DDD7CB] pt-3"
                >
                  <span className="size-1.5 bg-[#9B111E] shrink-0" aria-hidden="true" />
                  <span className="font-medium">{pillar}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
