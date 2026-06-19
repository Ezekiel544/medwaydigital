import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MessageCircle,
} from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Services That Grow Business & Solution',
    image: '/africloth.png',
    day: '20',
    month: 'Nov',
    category: 'Business',
    comments: '5 Comments',
  },
  {
    id: 2,
    title: 'How To Build Seamless IT Speed',
    image: '/africloth.png',
    day: '28',
    month: 'Nov',
    category: 'Business',
    comments: '3 Comments',
  },
  {
    id: 3,
    title: 'Recovery About Your Productive Problem',
    image: '/africloth.png',
    day: '30',
    month: 'Nov',
    category: 'Business',
    comments: '5 Comments',
  },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="absolute left-0 top-8 h-52 w-52 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#dbe4f3 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      />

      <div
        className="absolute right-0 top-20 h-60 w-60 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#dbe4f3 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Latest Blog
            </p>

            <h2 className="max-w-md text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
              Checkout Our Latest News & Articles
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous article"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              aria-label="Next article"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition hover:bg-blue-700"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-105"
                />

                {/* <div className="absolute left-6 top-0 flex h-16 w-14 flex-col items-center justify-center bg-blue-600 text-white">
                  <span className="text-xl font-bold leading-none">
                    {article.day}
                  </span>
                  <span className="mt-1 text-xs font-semibold">
                    {article.month}
                  </span>
                </div> */}
              </div>

              <div className="px-6 pb-7 pt-6">
                <div className="mb-4 flex flex-wrap items-center gap-5 text-xs font-medium text-gray-500">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={14} className="text-blue-600" />
                    {article.category}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <MessageCircle size={14} className="text-blue-600" />
                    {article.comments}
                  </span>
                </div>

                <h3 className="mb-5 text-lg font-bold leading-snug text-gray-950 transition group-hover:text-blue-600">
                  {article.title}
                </h3>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 transition hover:text-blue-600"
                >
                  Read More
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}