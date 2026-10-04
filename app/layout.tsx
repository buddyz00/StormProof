import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Caveat, Outfit } from 'next/font/google'
import './globals.css'

const _outfit = Outfit({ subsets: ['latin'] })
const _caveat = Caveat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stormproof Relationships | Relationship Wellness',
  description:
    'Build the skills to navigate conflict, restore emotional safety, and create a relationship that can weather any storm. Programs, courses, and community with Dr. Zephon Lister, PhD, LMFT.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
