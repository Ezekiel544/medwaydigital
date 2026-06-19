'use client';

import { useState } from 'react';
import { Plus, Minus, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'What services does your company provide?',
    answer:
      'We provide a full range of IT and digital services including web development, brand design, cloud computing, IT consulting, and 24/7 technical support tailored to your business needs.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve clients across various industries including healthcare, finance, retail, education, and technology. Our solutions are customized to meet the unique demands of each sector.',
  },
  {
    question: 'Do you offer customized IT solutions?',
    answer:
      'Yes, every solution we deliver is tailored specifically to your business goals, infrastructure, and budget. We never do one-size-fits-all.',
  },
  {
    question: 'How can I contact your support team?',
    answer:
      'You can reach our support team via phone, email, or live chat. We are available 24/7 to assist you with any issues or enquiries.',
  },
  {
    question: 'How secure are your IT solutions?',
    answer:
      'Security is at the core of everything we build. We follow industry best practices including end-to-end encryption, regular audits, and compliance with international security standards.',
  },
  {
    question: 'Do you offer 24/7 technical support?',
    answer:
      'Absolutely. Our dedicated support team is available around the clock, every day of the year, to ensure your systems run smoothly without interruption.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            FAQs
          </p>
          <h2 className="text-3xl font-bold text-gray-950 sm:text-4xl">
            Question?{' '}
            <span className="text-blue-600">Look here.</span>
          </h2>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">

          {/* Left — Accordion */}
          <div className="flex flex-col divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} className="py-1">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span
                    className={`text-sm font-semibold transition-colors sm:text-base ${
                      openIndex === index ? 'text-blue-600' : 'text-gray-950'
                    }`}
                  >
                    {faq.question}
                  </span>
               <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-gray-200 bg-white text-gray-400">
  {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
</span>
                </button>

                {/* Expanded answer with blue left bar */}
                {openIndex === index && (
                  <div className="mb-4 flex gap-4">
                    <div className="w-1 flex-shrink-0 rounded-full bg-blue-600" />
                    <div className="rounded-sm bg-blue-600 px-5 py-4 text-sm leading-relaxed text-white">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right — CTA card */}
          <div className="flex flex-col gap-6">

            {/* Top dark card */}
            <div
              className="relative overflow-hidden rounded-sm p-7 text-white"
              style={{
                background: 'linear-gradient(110deg, #0a1628 0%, #0d2a6e 60%, #1a4db8 100%)',
              }}
            >
              {/* Decorative circle */}
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/5" />
              <div className="absolute -right-2 top-8 h-16 w-16 rounded-full bg-blue-500/20" />

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Need Help?
              </p>
              <h3 className="mb-3 text-xl font-bold leading-snug">
                You have different questions?
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-blue-100">
                Our team is on hand to help with any questions you have about our services or solutions.
              </p>
              
                <a href="#contact"
                className="inline-block bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>

            {/* Bottom phone card */}
            <div className="flex items-center gap-4 border border-gray-100 px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-blue-600 text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                  Toll Free Phone
                </p>
                <p className="text-base font-bold text-gray-950">
                  0800 - 123 - 3000
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}