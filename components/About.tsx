import Image from 'next/image'
import { SectionTitle } from './SectionTitle'
import { PORTFOLIO } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background border-b-2 border-black dark:border-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[350px] flex items-center justify-center">
              <Image src="/avatars/avatar.png" alt="About me illustration" width={350} height={350} className="w-full max-w-[350px] h-auto object-contain select-none" />
            </div>
          </div>
          <div className="lg:col-span-7 text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">About Me</h2>
            <div className="space-y-4">
              {PORTFOLIO.about.map((p, i) => (
                 <p key={i} className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
                    {p}
                 </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
