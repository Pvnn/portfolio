'use client'

import { GitHubCalendar } from 'react-github-calendar'
import { CircleUserRound } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { GithubStats } from '@/lib/github'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { PORTFOLIO } from '@/lib/data'

export function GithubActivity({ stats }: { stats?: GithubStats }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="activity" className="py-20 bg-[#F4F4F5] dark:bg-neutral-900 border-t-2 border-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle>My <span className="font-bold">Activity</span></SectionTitle>
        <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-[-2rem] mb-12">
          A few numbers from my open-source journey and engineering activity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            [stats ? stats.totalRepos.toString() : '40+', 'Total Repositories'], 
            ['Latest', 'Active Now'], 
            ['1,240+', 'Contributions']
          ].map(([n, l]) => (
            <div key={l} className="bg-white dark:bg-black border-2 border-black rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-[4px_4px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform">
              <div className="font-display font-black text-4xl sm:text-5xl text-black dark:text-white mb-2">{n}</div>
              <div className="font-bold text-neutral-500 uppercase tracking-wider text-xs sm:text-sm">{l}</div>
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto relative pt-12">
          <div className="border-2 border-black dark:border-white rounded-xl p-6 sm:p-8 bg-white dark:bg-black shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#ffffff] relative z-10 overflow-x-auto">
          <div className="mb-6 flex items-center justify-between font-mono text-sm font-bold border-b-2 border-neutral-100 dark:border-neutral-800 pb-4">
            <a href={PORTFOLIO.githubUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-2">
               <CircleUserRound size={16} /> github.com/{PORTFOLIO.githubUsername}
            </a>
          </div>
          <div className="flex justify-center min-w-[700px] w-full pb-2">
            {mounted && (
              <GitHubCalendar 
                username={PORTFOLIO.githubUsername}
                colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                theme={{
                  light: ['#f4f4f5', '#d4d4d8', '#a1a1aa', '#52525b', '#000000'],
                  dark: ['#18181b', '#27272a', '#52525b', '#a1a1aa', '#ffffff']
                }}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
