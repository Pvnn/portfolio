import { SectionTitle } from './SectionTitle'
import { PORTFOLIO } from '@/lib/data'
import Image from 'next/image'

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white border-t-2 border-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle dark>My <span className="font-bold">Experience</span></SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {PORTFOLIO.experience.map((exp, i) => (
            <article key={exp.company} className="border-2 border-neutral-800 bg-[#121212] p-6 sm:p-8 rounded-xl hover:border-neutral-600 transition-colors cursor-default">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  {/* @ts-expect-error adding optional fields dynamically */}
                  {exp.logo ? (
                    <div className="w-12 h-12 shrink-0 bg-white rounded-md overflow-hidden p-1 flex items-center justify-center">
                      {/* @ts-expect-error */}
                      <Image src={exp.logo} alt={exp.company} width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 shrink-0 bg-white text-black flex items-center justify-center font-display font-extrabold text-xl rounded-md">
                      {exp.company.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white flex flex-wrap items-center gap-2">
                      {exp.role} 
                      {/* @ts-expect-error */}
                      {exp.location && <span className="text-xs text-neutral-500 font-normal mt-0.5 hidden sm:inline-block">({exp.location})</span>}
                    </h3>
                    <p className="text-neutral-400 font-medium text-sm mt-1">{exp.company}</p>
                    {/* @ts-expect-error */}
                    {exp.location && <p className="text-xs text-neutral-500 font-normal mt-1 sm:hidden">{exp.location}</p>}
                  </div>
                </div>
                <span className="font-mono text-xs text-neutral-500 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800 whitespace-nowrap self-start sm:self-auto">
                  {exp.date}
                </span>
              </div>
              
              {/* @ts-expect-error */}
              {exp.bullets ? (
                <ul className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-16 space-y-2 list-none">
                  {/* @ts-expect-error */}
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="relative pl-4">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pl-0 sm:pl-16">
                  {exp.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
