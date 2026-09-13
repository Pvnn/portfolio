'use client'

import { SectionTitle } from './SectionTitle'
import { PORTFOLIO } from '@/lib/data'
import Image from 'next/image'
import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-t-2 border-black scroll-mt-24 dark:bg-background dark:border-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-black dark:text-white">
              Contact <span className="font-black">Me</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-6">
              Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
            </p>
            <div className="relative w-72 sm:w-80 my-4 flex items-center justify-center">
              <Image src="/avatars/contact.png" alt="Contact waving illustration" width={320} height={320} className="w-full h-auto object-contain select-none" />
            </div>
            <div className="w-full flex flex-row items-center justify-center lg:justify-start gap-8 mt-8">
              <div className="flex flex-col text-left">
                <span className="font-bold text-xs uppercase tracking-widest text-neutral-400 mb-2">Email</span>
                <a href={`mailto:${PORTFOLIO.email}`} className="font-display text-lg sm:text-xl font-bold hover:underline decoration-2 underline-offset-4">{PORTFOLIO.email}</a>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-xs uppercase tracking-widest text-neutral-400 mb-2">Location</span>
                <span className="font-display text-lg sm:text-xl font-bold">{PORTFOLIO.basedIn}</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 border-2 border-black dark:border-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#ffffff] bg-white dark:bg-black">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="name">Your name</label>
                  <input required type="text" id="name" placeholder="Name" className="w-full border-2 border-black dark:border-white rounded-md p-3.5 focus:ring-0 focus:border-black outline-none shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] dark:bg-neutral-900" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input required type="email" id="email" placeholder="Email" className="w-full border-2 border-black dark:border-white rounded-md p-3.5 focus:ring-0 focus:border-black outline-none shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] dark:bg-neutral-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="message">How can I help?</label>
                <textarea required id="message" placeholder="Tell me about your project scope, timeline, and tech stack..." rows={4} className="w-full border-2 border-black dark:border-white rounded-md p-3.5 focus:ring-0 focus:border-black outline-none resize-none shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] dark:bg-neutral-900"></textarea>
              </div>
              <button type="submit" className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black font-bold px-10 py-3.5 rounded-md hover:bg-neutral-800 transition-colors shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] border-2 border-black dark:border-white active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-3">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
