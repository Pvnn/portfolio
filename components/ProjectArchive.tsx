'use client'

import { useMemo, useState } from 'react'
import { ExternalLink, Search, Star, GitFork, FolderGit2 } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import type { GithubRepo } from '@/lib/github'
import { PORTFOLIO } from '@/lib/data'

export function ProjectArchive({ repos }: { repos: GithubRepo[] }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

  // Reset pagination when filter or search changes
  useMemo(() => {
    setVisibleCount(6)
  }, [query, filter])
  
  // Extract unique languages/topics for filter pills (max 5 + All)
  const filters = useMemo(() => {
    const langs = new Set<string>()
    repos.forEach(r => {
      if (r.language) langs.add(r.language)
    })
    const arr = Array.from(langs).slice(0, 5)
    return ['All', ...arr]
  }, [repos])

  const filtered = useMemo(() => {
    return repos.filter((repo) => {
      const matchFilter = filter === 'All' || repo.language === filter || (repo.topics && repo.topics.includes(filter))
      const searchStr = `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase()
      const matchQuery = searchStr.includes(query.toLowerCase())
      return matchFilter && matchQuery
    })
  }, [filter, query, repos])
  
  const shown = filtered.slice(0, visibleCount)

  return (
    <section id="repositories" className="py-20 bg-[#F4F4F5] dark:bg-neutral-900 border-t-2 border-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle>All Repositories</SectionTitle>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              placeholder="Search across repositories..." 
              className="w-full border-2 border-black rounded-lg py-3.5 pl-11 pr-4 text-sm font-medium focus:ring-0 focus:border-black outline-none placeholder:text-neutral-400 shadow-[2px_2px_0px_#000000] dark:bg-black dark:text-white" 
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((item) => (
              <button 
                key={item} 
                onClick={() => setFilter(item)} 
                className={`border-2 border-black text-xs sm:text-sm font-bold px-4 py-1.5 rounded-md transition-colors shadow-[2px_2px_0px_#000000] ${filter === item ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black hover:bg-neutral-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'}`}
              >
                {item === 'All' ? `All (${repos.length})` : item}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((repo) => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="bg-white dark:bg-black border-2 border-black p-6 rounded-xl flex flex-col justify-between group shadow-[4px_4px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-md flex items-center justify-center border-2 border-black">
                    <FolderGit2 size={20} className="text-black dark:text-white" />
                  </div>
                  <ExternalLink size={16} className="text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-black dark:text-white mb-2 line-clamp-1" title={repo.name}>{repo.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {repo.description || 'No description provided.'}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-4 border-t-2 border-neutral-100 dark:border-neutral-800">
                {repo.language && (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700 dark:text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span> {repo.language}
                  </div>
                )}
                <div className="flex items-center gap-3 ml-auto text-xs font-bold text-neutral-500">
                  <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {shown.length === 0 && <p className="py-12 text-center text-sm text-neutral-600">No repositories match that search.</p>}
        
        {filtered.length > shown.length && (
          <div className="mt-12 text-center">
            <button onClick={() => setVisibleCount(v => v + 6)} className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3.5 rounded-md hover:bg-neutral-100 transition-all border-2 border-black shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5">
              Load More Repositories
            </button>
          </div>
        )}
        {filtered.length > 0 && filtered.length <= shown.length && (
          <div className="mt-12 text-center">
            <a href={`${PORTFOLIO.githubUrl}?tab=repositories`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-3.5 rounded-md hover:bg-neutral-800 transition-all border-2 border-black shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5">
              View All on GitHub <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
