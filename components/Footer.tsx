import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <span className="font-display font-bold text-xl tracking-tight text-white dark:text-black">
            pvn
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href={PORTFOLIO.githubUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm font-semibold">GitHub</a>
          <a href={PORTFOLIO.linkedinUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm font-semibold">LinkedIn</a>
          <a href={`mailto:${PORTFOLIO.email}`} className="text-neutral-400 hover:text-white transition-colors text-sm font-semibold">Email</a>
        </div>
      </div>
    </footer>
  )
}
