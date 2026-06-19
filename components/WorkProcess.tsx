
'use client';
import Image from 'next/image';
import { ArrowRight, Asterisk } from 'lucide-react';

const skills = [
  'Web Development',
  'App Development',
  'IT Consultation',
  'Data Analytics',
];

const members = [
  {
    name: 'Cameron Williamson',
    role: 'Web Developer',
    image: '/team/team-1.jpg',
  },
  {
    name: 'Leslie Alexander',
    role: 'UI/UX Designer',
    image: '/team/team-2.jpg',
  },
  {
    name: 'Ronald Richards',
    role: 'Software Engineer',
    image: '/team/team-3.jpg',
  },
  {
    name: 'Floyd Miles',
    role: 'Project Manager',
    image: '/team/team-4.jpg',
  },
];

export default function WorkProcess() {
  const marqueeItems = [...skills, ...skills];

  return (
    <section className="relative overflow-hidden bg-white pb-20">
      
      <div className="border-y border-gray-100 bg-white py-6">
        <div className="team-marquee flex whitespace-nowrap">
          {marqueeItems.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="mx-5 inline-flex items-center gap-5 text-2xl font-bold text-gray-950 sm:text-3xl"
            >
              <Asterisk size={25} className="text-blue-600" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute right-0 top-32 h-64 w-64 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#dbe4f3 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      />

      {/* <div className="relative z-10 mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Team
            </p>

            <h2 className="max-w-sm text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
              Our Dedicated Team Members
            </h2>
          </div>

          <button className="inline-flex w-fit items-center gap-2 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            View All Member
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden bg-white shadow-[0_12px_35px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                  src="/background.png"
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative mx-4 -mt-12 bg-[#10156f] px-5 py-5 text-white">
                <button
                  type="button"
                  aria-label={`${member.name} LinkedIn`}
                  className="absolute -top-5 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
                >
                  <span className="text-sm font-bold leading-none">in</span>
                </button>

                <h3 className="pr-10 text-base font-bold leading-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-blue-100">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div> */}

      <style jsx>{`
        .team-marquee {
          width: max-content;
          animation: teamMarquee 22s linear infinite;
        }

        @keyframes teamMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}