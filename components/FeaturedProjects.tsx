import { ExternalLink } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { PORTFOLIO } from '@/lib/data'
import GraspWireframe from './GraspWireframe'
import McqSolverWireframe from './McqSolverWireframe'
import CodeReviewWireframe from './CodeReviewWireframe'
import DataAnalystWireframe from './DataAnalystWireframe'

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-white border-t-2 border-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="space-y-12 lg:space-y-16">
          {PORTFOLIO.featuredProjects.map((project, i) => (
            <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-2 border-black p-6 sm:p-8 rounded-xl shadow-[5px_5px_0px_#000000] bg-white group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform">
              
              <div className={`lg:col-span-6 bg-neutral-100 border-2 border-black rounded-lg flex items-center justify-center overflow-hidden h-[280px] w-full ${i % 2 !== 0 ? 'lg:order-2' : ''} ${i >= 0 && i <= 3 ? 'p-0' : 'p-6 aspect-video'}`}>
                {i === 0 ? (
                  <GraspWireframe />
                ) : i === 1 ? (
                  <McqSolverWireframe />
                ) : i === 2 ? (
                  <CodeReviewWireframe />
                ) : i === 3 ? (
                  <DataAnalystWireframe />
                ) : (
                  <div className="w-full max-w-sm bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_#000000] p-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="flex gap-1.5 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-neutral-200 rounded-sm w-3/4"></div>
                      <div className="h-4 bg-neutral-200 rounded-sm w-full"></div>
                      <div className="h-4 bg-neutral-200 rounded-sm w-5/6"></div>
                      <div className="h-20 bg-neutral-100 border border-neutral-200 rounded mt-4"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className={`lg:col-span-6 flex flex-col justify-center py-4 ${i % 2 !== 0 ? 'lg:pl-8 lg:order-1' : 'lg:pl-8'}`}>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500">
                    {/* @ts-expect-error tagline property */}
                    0{i + 1} — {project.tagline || project.tags}
                  </span>
                  {/* @ts-expect-error optional badge field */}
                  {project.badge && (
                    <span className="bg-[#EBF3F5] text-[#2C6575] text-[10px] px-2 py-0.5 rounded font-mono font-semibold whitespace-nowrap">
                      {/* @ts-expect-error */}
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-3 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.split('·').map((tech) => (
                    <span
                      key={tech.trim()}
                      className="text-xs bg-[#F7F6F3] border border-black px-2 py-0.5 rounded font-mono text-black"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md font-bold text-sm shadow-[2px_2px_0px_#000000] hover:bg-neutral-800 transition-all border border-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
                    View Repository <ExternalLink size={14} />
                  </a>
                  {/* @ts-expect-error optional report field */}
                  {project.report && (
                    /* @ts-expect-error */
                    <a href={project.report} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-black underline underline-offset-4">
                      {/* @ts-expect-error optional label */}
                      {project.reportLabel || 'Read Project Report ↗'}
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
