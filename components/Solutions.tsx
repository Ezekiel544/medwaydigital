'use client';

import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  FileText,
  Handshake,
  MonitorCheck,
} from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Choose A Service',
    description:
      'Begin your plan and grow with a complete customized service.',
    icon: ClipboardCheck,
    position: 'bottom',
  },
  {
    id: '02',
    title: 'Define Requirements',
    description:
      'Tell us the complete process of where your business needs support.',
    icon: FileText,
    position: 'top',
  },
  {
    id: '03',
    title: 'Request A Meeting',
    description:
      'We review your needs and create a dedicated action plan.',
    icon: Handshake,
    position: 'bottom',
  },
  {
    id: '04',
    title: 'Final Solution',
    description:
      'We deliver clear, secure and powerful business solutions.',
    icon: MonitorCheck,
    position: 'top',
  },
];

export default function Solutions() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            Work Process
          </p>

          <h2 className="text-3xl font-bold text-gray-950 sm:text-4xl">
            Standard Work Process
          </h2>
        </div>

        {/* ================= Desktop ================= */}
        <div className="relative hidden min-h-[260px] lg:block">
          <svg
            className="absolute left-0 top-20 h-28 w-full"
            viewBox="0 0 1200 140"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M110 25 L360 115 L610 25 L850 115 L1090 25"
              stroke="#E5EAF3"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
              }}
            />
          </svg>

          <div className="relative grid grid-cols-4 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isTop = step.position === 'top';

              return (
                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.25,
                  }}
                  className={`relative flex min-h-[230px] flex-col items-center text-center ${
                    isTop ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {isTop && (
                    <div className="mb-6 max-w-[230px]">
                      <h3 className="mb-2 text-base font-bold text-gray-950">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-6 text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  )}

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 shadow-[0_14px_35px_rgba(37,99,235,0.12)]">
                    <span className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {step.id}
                    </span>

                    <Icon size={32} className="text-blue-600" />
                  </div>

                  {!isTop && (
                    <div className="mt-6 max-w-[230px]">
                      <h3 className="mb-2 text-base font-bold text-gray-950">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-6 text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= Mobile ================= */}
        <div className="relative space-y-8 lg:hidden">
          {/* Background Line */}
          <div className="absolute left-10 top-8 h-[calc(100%-64px)] w-px bg-gray-200" />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-10 top-8 w-px bg-blue-600 origin-top"
            initial={{
              height: 0,
            }}
            whileInView={{
              height: 'calc(100% - 64px)',
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                className="relative flex gap-5"
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 shadow-[0_14px_35px_rgba(37,99,235,0.12)]">
                  <span className="absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {step.id}
                  </span>

                  <Icon size={30} className="text-blue-600" />
                </div>

                <div className="pt-2">
                  <h3 className="mb-2 text-base font-bold text-gray-950">
                    {step.title}
                  </h3>

                  <p className="max-w-sm text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}