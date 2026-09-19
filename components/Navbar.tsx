'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PORTFOLIO } from '@/lib/data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Activity', href: '#activity' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center group">
          <span className="font-display font-bold text-2xl tracking-tight text-black dark:text-white hover:text-neutral-700 transition-colors">
            pvn
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-10 font-medium text-sm lg:text-base text-black dark:text-white">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:underline underline-offset-8 decoration-2 transition-all">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action CTA (Mobile Menu Toggle) */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            className="border-2 border-black dark:border-white p-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-b-2 border-black dark:border-white flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold hover:underline underline-offset-8 decoration-2 transition-all text-black dark:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
