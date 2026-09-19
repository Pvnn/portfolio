'use client'

import { useState } from 'react'
import { SectionTitle } from './SectionTitle'
import { PORTFOLIO } from '@/lib/data'
import Image from 'next/image'
import { Send, Loader2, MailCheck } from 'lucide-react'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      access_key: "65c9d413-c043-40fb-beab-53cbe80edb86",
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

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
          
          <div className="lg:col-span-7 border-2 border-black dark:border-white rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#ffffff] bg-white dark:bg-black relative overflow-hidden">
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[350px] text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-[#FBF9F6] dark:bg-black border-2 border-black dark:border-white shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] text-black dark:text-white rounded-md flex items-center justify-center mb-6">
                  <MailCheck size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm font-bold underline underline-offset-4 hover:text-neutral-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="name">Your name</label>
                    <input required type="text" id="name" name="name" placeholder="Name" className="w-full border-2 border-black dark:border-white rounded-md p-3.5 focus:ring-0 focus:border-black outline-none shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] dark:bg-neutral-900" disabled={status === 'loading'} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input required type="email" id="email" name="email" placeholder="Email" className="w-full border-2 border-black dark:border-white rounded-md p-3.5 focus:ring-0 focus:border-black outline-none shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] dark:bg-neutral-900" disabled={status === 'loading'} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="message">How can I help?</label>
                  <textarea required id="message" name="message" placeholder="Tell me about your project scope, timeline, and tech stack..." rows={4} className="w-full border-2 border-black dark:border-white rounded-md p-3.5 focus:ring-0 focus:border-black outline-none resize-none shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] dark:bg-neutral-900" disabled={status === 'loading'}></textarea>
                </div>
                
                {status === 'error' && (
                  <p className="text-red-500 font-bold text-sm">Something went wrong. Please try again or email me directly.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black font-bold px-10 py-3.5 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] border-2 border-black dark:border-white active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0 disabled:hover:bg-black dark:disabled:hover:bg-white"
                >
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                  {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
