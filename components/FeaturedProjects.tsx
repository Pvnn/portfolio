import { ExternalLink } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { PORTFOLIO } from '@/lib/data'

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-white border-t-2 border-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="space-y-12 lg:space-y-16">
          {PORTFOLIO.featuredProjects.map((project, i) => (
            <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-2 border-black p-6 sm:p-8 rounded-xl shadow-[6px_6px_0px_#000000] bg-white group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              <div className={`lg:col-span-6 bg-neutral-100 border-2 border-black rounded-lg aspect-video flex items-center justify-center p-6 overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
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
              </div>
              <div className={`lg:col-span-6 flex flex-col justify-center py-4 ${i % 2 !== 0 ? 'lg:pl-8 lg:order-1' : 'lg:pl-8'}`}>
                <p className="font-display font-bold text-sm text-neutral-700 mb-2">0{i + 1} — {project.tags}</p>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-md font-bold text-sm shadow-[2px_2px_0px_#000000] hover:bg-neutral-800 transition-all border border-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
