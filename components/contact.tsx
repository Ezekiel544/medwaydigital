'use client';

import { useState } from 'react';
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Send,
// } from 'lucide-react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-0 overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)] lg:grid-cols-[360px_1fr]">

          {/* ── LEFT: dark info panel ── */}
          <div
            className="relative overflow-hidden px-8 py-10 text-white"
            style={{
              background:
                'linear-gradient(135deg, #0a1628 0%, #0d2a6e 50%, #1a4db8 100%)',
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-blue-500/10" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-400/10" />
            <div className="absolute top-10 -right-10 h-40 w-40 rounded-full bg-white/5" />

            <div className="relative z-10">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                Contact Us
              </p>
              <h2 className="mb-8 text-2xl font-bold leading-tight">
                Get in touch <br /> with us today
              </h2>

              {/* Address */}
              <div className="mb-6">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
                  Address
                </p>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                  <p className="text-sm leading-relaxed text-blue-100">
                    1234 Digital St, Block 4,<br />
                    New Jersey 45400
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-6">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
                  Contact
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Phone size={15} className="flex-shrink-0 text-blue-400" />
                    <span className="text-sm text-blue-100">+1(000) 000-0003</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={15} className="flex-shrink-0 text-blue-400" />
                    <span className="text-sm text-blue-100">info@example@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Open Time */}
              <div className="mb-8">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
                  Open Time
                </p>
                <div className="flex items-center gap-3">
                  <Clock size={15} className="flex-shrink-0 text-blue-400" />
                  <span className="text-sm text-blue-100">Monday - Friday: 9:00 - 20:06</span>
                </div>
              </div>

              {/* Stay Connected */}
             {/* Stay Connected */}
<div>
  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
    Stay Connected
  </p>
  <div className="flex items-center gap-3">
    {/* Facebook */}
    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-600">
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    </a>
    {/* Twitter / X */}
    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-600">
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    </a>
    {/* Instagram */}
    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-600">
      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    </a>
    {/* LinkedIn */}
    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-600">
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    </a>
  </div>
</div>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="bg-white px-8 py-10 sm:px-12">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Contact Us
            </p>
            <h3 className="mb-8 text-2xl font-bold text-gray-950 sm:text-3xl">
              Get Your{' '}
              <span className="text-blue-600">Free Quote</span> Today!
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ex. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">
                  Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 transition-colors appearance-none bg-white"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="brand-design">Brand Design</option>
                  <option value="cloud-computing">Cloud Computing</option>
                  <option value="it-consulting">IT Consulting</option>
                </select>
              </div>

              {/* Message — full width */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-gray-700">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Enter Here"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
              <Send size={15} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}