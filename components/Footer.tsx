'use client';

import { ArrowRight, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className="relative overflow-hidden pt-16 text-white"
      style={{
        background:
          'linear-gradient(135deg, #080818 0%, #0a0f2e 40%, #0d1640 100%)',
      }}
    >
      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Soft glow accents */}
      <div
        className="absolute left-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full opacity-10"
        style={{
          background:
            'radial-gradient(circle, #2563eb 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute right-[-80px] bottom-[-80px] h-[300px] w-[300px] rounded-full opacity-10"
        style={{
          background:
            'radial-gradient(circle, #1d4ed8 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-5 text-lg font-bold">About Us</h3>
            <div className="mb-6 h-[2px] w-10 bg-blue-600" />

            <p className="mb-7 max-w-xs text-sm leading-7 text-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaXTwitter size={14} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Quick Links</h3>
            <div className="mb-6 h-[2px] w-10 bg-blue-600" />

            <ul className="space-y-3 text-sm text-gray-400">
              {[
                'Services',
                'About Us',
                'Our Team',
                'Latest Blog',
                'Contact Us',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <ArrowRight size={13} className="text-blue-600" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="mb-5 text-lg font-bold">IT Services</h3>
            <div className="mb-6 h-[2px] w-10 bg-blue-600" />

            <ul className="space-y-3 text-sm text-gray-400">
              {[
                'Web Development',
                'Cyber Security',
                'Cloud Service',
                'IT Management',
                'Data Analysis',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <ArrowRight size={13} className="text-blue-600" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Newsletter</h3>
            <div className="mb-6 h-[2px] w-10 bg-blue-600" />

            <p className="mb-7 text-sm leading-7 text-gray-400">
              Sign up to receive the latest articles and updates from our team.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-4 pr-14 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-blue-600"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="absolute right-1 top-1 flex h-11 w-11 items-center justify-center bg-blue-600 text-white transition hover:bg-blue-700"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div
          className="relative px-6 py-5 sm:px-8"
          style={{
            background: 'rgba(255,255,255,0.03)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href="#" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                i
              </span>

              <span className="text-2xl font-bold">infotek</span>
            </a>

            <p className="text-sm text-gray-400">
              Copyright © 2024 Infotek. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            className="absolute -right-3 -top-5 flex h-12 w-12 items-center justify-center rounded-full border-4 bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 sm:right-6"
            style={{ borderColor: '#080818' }}
          >
            <ArrowRight size={20} className="-rotate-90" />
          </button>
        </div> */}
      </div>
    </footer>
  );
}