import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Cloud,
  Code2,
  Cpu,
  MessageCircle,
  Smile,
  Trophy,
  Users,
} from 'lucide-react';

const stats = [
  { value: '7+',     label: 'Satisfied Clients',  icon: Smile            },
  { value: '5+',     label: 'Finished Projects',  icon: BriefcaseBusiness },
  { value: '5+',     label: 'Skilled Experts',    icon: Users            },
  { value: '1,001+', label: 'Media Posts',        icon: Trophy           },
];

const projects = [
  { category: 'Business',   title: 'Web Development', image: '/richiebrothers.png', icon: Code2, comments: '3 Comments' },
  { category: 'Marketing',  title: 'Brand Design',    image: '/africloth.png',      icon: Cpu,   comments: '5 Comments' },
  { category: 'Technology', title: 'Cloud Computing', image: '/primefit.png',       icon: Cloud, comments: '2 Comments' },
];

export default function CTA() {
  return (
    <section className="relative bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">

          {/* Base gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(110deg, #0a1628 0%, #0d2a6e 40%, #1a4db8 70%, #2563eb 100%)',
            }}
          />

          {/* Background image blended in */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/bgtwo.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat',
              opacity: 0.35,
              mixBlendMode: 'luminosity',
            }}
          />

          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(90deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.7) 45%, rgba(10,22,40,0.1) 100%)',
            }}
          />

          {/* ── Stats row ── */}
          <div className="relative z-10 grid grid-cols-1 gap-10 px-6 py-10 text-white sm:px-10 lg:grid-cols-[1.15fr_3fr] lg:items-center lg:px-14  ">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-200">
                Achievement
              </p>
              <h2 className="max-w-xs text-2xl font-bold leading-tight sm:text-3xl">
                We Are Increasing Business Success
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-7 sm:grid-cols-4 ">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-200">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold leading-none text-white">{item.value}</p>
                      <p className="mt-2 text-xs leading-5 text-blue-100">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Project banner ── */}
          <div className="relative z-10 min-h-[180px] px-6 pb-12 pt-8 sm:pt-20 sm:px-10 sm:pb-12 lg:px-14 ">
            <div className="max-w-sm text-white">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-200">
                Projects
              </p>
              <h3 className="sm:pb-6 text-2xl font-bold leading-tight sm:text-3xl">
                Our Latest Incredible Client's Projects
              </h3>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="relative z-10 grid grid-cols-1 gap-6 px-6 pb-14 sm:pt-8 sm:grid-cols-2 sm:px-10 sm:pb-16 sm:pt-0 lg:grid-cols-3 lg:px-14">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden bg-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] sm:-mt-12"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-950/10" />
                </div>

                {/* Card body */}
                <div className="px-6 pb-7 pt-6">
                  <div className="mb-4 flex flex-wrap items-center gap-5 text-xs font-medium text-gray-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={14} className="text-blue-600" />
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle size={14} className="text-blue-600" />
                      {project.comments}
                    </span>
                  </div>
                  <h3 className="mb-5 text-lg font-bold leading-snug text-gray-950 transition group-hover:text-blue-600">
                    {project.title}
                  </h3>
                  
                  <a href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium px-[18px] py-2 rounded-md transition-colors whitespace-nowrap"
                  >
                    View
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}