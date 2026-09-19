import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Pavan Raj | ML Researcher & Software Engineer',
  description: 'Portfolio of Pavan Raj, a Machine Learning Researcher and Software Engineer specializing in intelligent systems and robust architectures.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: 'white',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
