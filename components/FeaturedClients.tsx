"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

function useCountUp(
  target: number,
  duration: number = 2200,
  delay: number = 400,
  trigger: boolean = false
): number {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }
    let raf: number | null = null;
    let startTime: number | null = null;

    const animate = (ts: number): void => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [target, duration, delay, trigger]);

  return count;
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function AboutSection() {
  const { ref, visible } = useScrollReveal();
  const count = useCountUp(7, 2200, 400, visible);

  return (
    <section ref={ref} className="bg-white py-[72px] px-6 overflow-hidden">
      <style>{`
        .slide-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .slide-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          transition-delay: 0.15s;
        }
        .slide-left.in,
        .slide-right.in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: 2×2 photo grid ── */}
        <div className={`slide-left ${visible ? 'in' : ''} relative flex items-center justify-center`}>

          <div className="relative w-[340px] h-[320px] rounded-[24px] border border-blue-100 bg-blue-50/30 p-3 shadow-sm">
            <div className="grid grid-cols-2 grid-rows-2 gap-2.5 h-full">
              <div className="rounded-[14px] overflow-hidden">
                <img
                  src="/carpenter.png"
                  alt="Business woman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[14px] overflow-hidden">
                <img
                  src="electricians.png"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[14px] overflow-hidden">
                <img
                  src="roofers.png"
                  alt="Office team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[14px] overflow-hidden">
                <img
                  src="resturant.png"
                  alt="Business presentation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Accents */}
          <div className="absolute left-[-18px] top-[50%] -translate-y-1/2 z-0">
            <svg width="22" height="110" viewBox="0 0 22 110" fill="none">
              <path
                d="M11 5 C22 20, 0 35, 11 50 C22 65, 0 80, 11 95 C22 105, 11 108, 11 110"
                stroke="#3b47f0"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />
            </svg>
          </div>
          <div className="absolute top-[-10px] right-[20px] z-10">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2 L15.5 12 L26 14 L15.5 16 L14 26 L12.5 16 L2 14 L12.5 12 Z" fill="#3b47f0" opacity="0.85" />
            </svg>
          </div>
          <div className="absolute bottom-[6px] left-[10px] z-10">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1 L10 8 L17 9 L10 10 L9 17 L8 10 L1 9 L8 8 Z" fill="#3b47f0" opacity="0.7" />
            </svg>
          </div>
        </div>

        {/* ── RIGHT: Text content ── */}
        <div className={`slide-right ${visible ? 'in' : ''}`}>

          <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-3">
            About Us
          </p>

          <h2 className="text-[32px] font-extrabold text-slate-900 leading-[1.2] mb-4">
            Built for local businesses that need clearer enquiries
          </h2>

          <p className="text-[13px] text-gray-500 leading-[1.8] mb-6 max-w-[400px]">
            Medway Digital helps local businesses improve their online presence
            with modern, professional websites designed to convert visitors into
            customers.
          </p>

          <div className="flex items-center gap-6 mb-7">
            <div className="flex flex-col gap-2.5">
              {[
                "Clear packages with editable pricing",
                "Sample concepts shown transparently",
                "No fake testimonials or client logos",
                "Built for UK local service businesses",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[13px] text-gray-700">
                  <span className="text-blue-600 font-bold text-[13px] flex-shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>

            {/* <div className="w-px h-[70px] bg-gray-200 flex-shrink-0" /> */}

            <div className="flex items-center gap-3 flex-shrink-0">
              {/* <div className="w-[42px] h-[42px] rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V5l-8-3z"
                    fill="#2563eb"
                    fillOpacity="0.15"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div> */}
              {/* <div>
                <div className="text-[24px] font-extrabold text-slate-900 leading-none mb-1">
                  {count.toLocaleString()}+
                </div>
                <div className="text-[11.5px] text-gray-500">Satisfied Clients</div>
              </div> */}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold px-6 py-3 rounded-lg transition-colors">
              Contact Us <ArrowRight size={15} strokeWidth={2.5} />
            </button>

            {/* <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Phone size={16} color="white" fill="white" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400">Call Us Now</p>
                <p className="text-[14px] font-bold text-slate-900">+328-385-0132</p>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}