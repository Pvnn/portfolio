import { Mail } from 'lucide-react'
import Image from 'next/image'
import { PORTFOLIO } from '@/lib/data'

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  )
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function TwitterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 border-b-2 border-black dark:border-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 lg:px-12 pt-12 pb-20 lg:py-24 md:flex-row md:justify-between">
        <div className="max-w-xl flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Hello I&apos;m <span className="text-black dark:text-white">{PORTFOLIO.name.split(' ')[0]}.</span><br/>
              <span className="text-transparent [-webkit-text-stroke:1.5px_black] dark:[-webkit-text-stroke:1.5px_white] font-black">Software</span> <span className="text-black dark:text-white">Engineer</span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed pt-2">
              {PORTFOLIO.about[0]}
            </p>
          </div>
          <div className="flex items-center gap-3.5 mt-8">
            {[ 
              { icon: Mail, url: `mailto:${PORTFOLIO.email}`, label: 'Email' },
              { icon: GithubIcon, url: PORTFOLIO.githubUrl, label: 'GitHub profile' },
              { icon: LinkedinIcon, url: PORTFOLIO.linkedinUrl, label: 'LinkedIn profile' }
            ].map(({ icon: Icon, url, label }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} 
                 className="w-11 h-11 border-2 border-black dark:border-white flex items-center justify-center rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end relative items-center w-full max-w-md aspect-square">
          <div className="relative w-full max-w-[420px] transition-transform hover:scale-105 duration-300 flex items-center justify-center">
            <Image src="/avatars/hero.png" alt={PORTFOLIO.name} width={420} height={420} className="w-full max-w-[420px] h-auto object-contain block select-none pointer-events-none" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
