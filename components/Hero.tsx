import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden min-h-screen"
      style={{
        background: 'linear-gradient(110deg, #0a1628 0%, #0d2a6e 40%, #1a4db8 70%, #2563eb 100%)',
      }}
    >
      {/* Full background image blended into the gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bghero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.35,
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Dark overlay to keep text readable on the left */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.7) 45%, rgba(10,22,40,0.1) 100%)',
        }}
      />

      {/* Bottom-left spark icon */}
      <div className="absolute bottom-[72px] left-[16px] z-20">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#60a5fa" />
        </svg>
      </div>

      {/* Main content — flex col + justify-center so it sits in the middle of 100vh */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-[960px] mx-auto w-full px-6 pt-16 pb-36 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left */}
          <div className="text-white">

            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
              <span className="text-[11px] font-medium text-blue-200 uppercase tracking-widest">
                Best In Company
              </span>
            </div> */}

            {/* Heading */}
            <h1 className="text-[42px] sm:text-[52px] lg:text-[58px] font-extrabold leading-[1.1] tracking-tight text-white mb-5">
              {/* Get Our Business<br />This It Solution */}
              Modern Websites for Local Businesses
            </h1>

            {/* Body text */}
            <p className="text-[14px] text-blue-200 leading-relaxed mb-8 max-w-[420px]">
              We help plumbers, electricians, roofers, cleaners and local service businesses build a stronger online presence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-white text-blue-700 text-[13px] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                Contact Us <ArrowRight size={15} strokeWidth={2.5} />
              </button>
              <button className="inline-flex items-center gap-2 bg-transparent text-white text-[13px] font-semibold px-6 py-3 rounded-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors whitespace-nowrap">
                Our Services <ArrowRight size={15} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right — background image fills this space */}
          <div className="hidden lg:block h-[320px]" />
        </div>
      </div>

      {/* S-curve wave — flush at bottom, no white gap */}
      <div className="absolute bottom-0 left-0 w-full z-10 leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          style={{ display: 'block', marginBottom: '-1px' }}
        >
          <path
            d="M0,100 L0,72 C180,72 180,30 360,30 C540,30 540,85 720,85 C900,85 900,20 1080,20 C1260,20 1260,55 1440,45 L1440,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}