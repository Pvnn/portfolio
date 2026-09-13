import { SectionTitle } from './SectionTitle'
import { PORTFOLIO } from '@/lib/data'
import { Code2 } from 'lucide-react'
import { SiPython, SiPytorch, SiFastapi, SiReact, SiNextdotjs, SiTypescript, SiPostgresql, SiRedis, SiDocker, SiGit } from 'react-icons/si'
import React from 'react'

const skillIcons: Record<string, React.ReactNode> = {
  "Python": <SiPython size={40} className="mb-3" />,
  "PyTorch": <SiPytorch size={40} className="mb-3" />,
  "FastAPI": <SiFastapi size={40} className="mb-3" />,
  "React.js": <SiReact size={40} className="mb-3" />,
  "Next.js": <SiNextdotjs size={40} className="mb-3" />,
  "TypeScript": <SiTypescript size={40} className="mb-3" />,
  "PostgreSQL": <SiPostgresql size={40} className="mb-3" />,
  "Redis": <SiRedis size={40} className="mb-3" />,
  "Docker": <SiDocker size={40} className="mb-3" />,
  "Git": <SiGit size={40} className="mb-3" />
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background border-b-2 border-black dark:border-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle>My Skills</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {PORTFOLIO.skills.map((skill, i) => (
            <div key={skill} className={`aspect-square rounded-md flex flex-col items-center justify-center p-4 border-2 border-black dark:border-white shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all ${i % 3 === 0 ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-background'}`}>
              {skillIcons[skill] || <Code2 size={40} className="mb-3" />}
              <span className="font-bold text-sm sm:text-base tracking-wide">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
