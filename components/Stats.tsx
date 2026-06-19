'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Savannah Nguyen',
    role: 'Web Designer',
    image: '/testimonials/client-1.jpg',
    text: 'There are many variations of passages available but the majority have suffered alteration in some form, by injected humour or randomised words.',
  },
  {
    name: 'Ronald Richards',
    role: 'UI Designer',
    image: '/testimonials/client-2.jpg',
    text: 'There are many variations of passages available but the majority have suffered alteration in some form, by injected humour or randomised words.',
  },
  {
    name: 'Leslie Alexander',
    role: 'Product Manager',
    image: '/testimonials/client-3.jpg',
    text: 'Professional, reliable and fast. The team delivered exactly what we needed with excellent communication from start to finish.',
  },
];

export default function Stats() {
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const navigate = (dir: 'left' | 'right') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setStartIndex((prev) => {
        if (dir === 'right') {
          return (prev + 1) % testimonials.length;
        } else {
          return (prev - 1 + testimonials.length) % testimonials.length;
        }
      });
      setAnimating(false);
      setDirection(null);
    }, 400);
  };

  // We always render 3 cards: left offscreen, slot 1, slot 2, right offscreen
  const getCard = (offset: number) =>
    testimonials[(startIndex + offset + testimonials.length) % testimonials.length];

  const leftHidden  = getCard(-1); // slides in from left  when going back
  const card1       = getCard(0);  // left visible card
  const card2       = getCard(1);  // right visible card
  const rightHidden = getCard(2);  // slides in from right when going forward

  return (
    <section className="relative overflow-hidden bg-[#17146b] py-20 sm:py-24">
      <style>{`
        .track {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* On mobile only show 1 card */
        @media (max-width: 767px) {
          .track { grid-template-columns: 1fr; }
          .card-2 { display: none; }
        }

        /* Shift right: card1 → exit left, card2 → slot1, rightHidden → slot2 */
        .shift-right .card-hidden-left  { transform: translateX(-110%); opacity: 0; transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease; }
        .shift-right .card-1            { transform: translateX(-110%); opacity: 0; transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease; }
        .shift-right .card-2            { transform: translateX(-105%); transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .shift-right .card-hidden-right { transform: translateX(-105%); transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); }

        /* Shift left: card2 → exit right, card1 → slot2, leftHidden → slot1 */
        .shift-left .card-hidden-right  { transform: translateX(110%); opacity: 0; transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease; }
        .shift-left .card-2             { transform: translateX(110%); opacity: 0; transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease; }
        .shift-left .card-1             { transform: translateX(105%); transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .shift-left .card-hidden-left   { transform: translateX(105%); transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); }

        .card-hidden-left,
        .card-hidden-right {
          position: absolute;
          width: calc(50% - 0.75rem);
          top: 0;
        }
        .card-hidden-left  { left: calc(-50% - 0.75rem); }
        .card-hidden-right { right: calc(-50% - 0.75rem); }

        @media (max-width: 767px) {
          .card-hidden-left  { width: 100%; left: -105%; }
          .card-hidden-right { width: 100%; right: -105%; }
        }
      `}</style>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div className="absolute left-0 top-0 h-full w-20 bg-blue-700/20 blur-2xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            People Who Already Love Us
          </h2>
        </div>

        {/* Carousel track */}
        <div className="mx-auto max-w-6xl">
          <div className={`relative overflow-hidden`}>
            <div className={`track ${direction === 'right' ? 'shift-right' : direction === 'left' ? 'shift-left' : ''}`}>

              {/* Hidden left (slides in when going back) */}
              <div className="card-hidden-left">
                <TestimonialCard item={leftHidden} />
              </div>

              {/* Visible card 1 */}
              <div className="card-1">
                <TestimonialCard item={card1} />
              </div>

              {/* Visible card 2 */}
              <div className="card-2">
                <TestimonialCard item={card2} />
              </div>

              {/* Hidden right (slides in when going forward) */}
              <div className="card-hidden-right">
                <TestimonialCard item={rightHidden} />
              </div>

            </div>
          </div>
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate('left')}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-blue-500 hover:bg-blue-600"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => navigate('right')}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.45)] transition hover:bg-blue-700"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  return (
    <article className="bg-white px-6 py-7 shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:px-8">
      <div className="mb-6 flex items-start justify-between gap-5">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-base font-bold text-gray-950">{item.name}</h3>
            <p className="mb-2 text-sm text-gray-500">{item.role}</p>
            <div className="text-sm tracking-[0.18em] text-blue-600">★★★★★</div>
          </div>
        </div>
        <div className="text-5xl font-bold leading-none text-blue-600">"</div>
      </div>
      <p className="text-sm leading-7 text-gray-500">{item.text}</p>
    </article>
  );
}