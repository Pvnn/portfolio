import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function GraspPaperPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 selection:bg-[#EBF3F5] selection:text-[#2C6575]">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        {/* Left: Avatar */}
        <div className="w-56 h-56 md:w-[320px] md:h-[320px] relative flex-shrink-0">
          <Image
            src="/avatars/blogwriting.png"
            alt="Writing a paper"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
          <div className="inline-flex items-center mb-5">
            <span className="inline-flex items-center gap-2 bg-white text-black text-xs sm:text-sm px-3 py-1 font-mono font-bold border-2 border-black shadow-[2px_2px_0px_#000000]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              STATUS: IN REVIEW
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-5 leading-tight">
            The Manuscript <br className="hidden md:block" /> is Cooking!
          </h1>
          
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
            The full paper for <strong>GRASP: Graph-Based Relevance & Span Pruning</strong> is currently undergoing peer review. Check back soon for the published manuscript.
          </p>

          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md font-bold text-base shadow-[3px_3px_0px_#000000] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_#000000] transition-all border-2 border-black active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>

      </div>
    </div>
  )
}
