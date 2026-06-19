'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Code2,
  Headset,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    image: '/webdevelopments.png',
    icon: ShieldCheck,
    text: 'We build a professional websites designed to showcase your business and increase sales.',
  },
  {
    title: 'App Development',
    image: '/app.png',
    icon: Code2,
    text: 'We develop mobile applications, helping you reach your target audience and grow your business.',
  },
  {
    title: 'IT Consultants',
    image: '/itconsultant.png',
    icon: Headset,
    text: 'Our IT consulting services provide expert guidance to help you achieve your business goals.',
  },
  {
    title: 'Data Analysis',
    image: '/dataanalytics.png',
    icon: BarChart3,
    text: 'We help analyze your data to provide insights and help you make informed business decisions.',
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Pattern Top Right */}
      <div
        className="absolute right-0 top-0 h-64 w-64 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(#d9e3f3 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Background Pattern Bottom Left */}
      <div
        className="absolute bottom-10 left-0 h-56 w-56 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(#d9e3f3 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              What We Do
            </p>

            <h2 className="max-w-md text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
              We Solve IT Problems With Technology
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              className="group overflow-hidden bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)]"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-9">
                <h3 className="mb-3 text-base font-bold text-gray-950">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-gray-500">
                  {service.text}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-blue-600 px-[18px] py-2 text-[13px] font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}