import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sahara Speedster - Magical Arabian Platformer',
  description: 'A fast-paced platformer with an Arabic character and mythology-based magic. Experience the thrill of speed with a touch of Arabian mythology.',
  generator: 'v0.app',
  keywords: ['platformer', 'game', 'Arabian mythology', 'magic', 'speedrunning'],
  authors: [{ name: 'Sahara Speedster Team' }],
  openGraph: {
    title: 'Sahara Speedster',
    description: 'A fast-paced platformer with an Arabic character and mythology-based magic.',
    url: 'http://localhost:8081/projects/8o12LU9pHKxDYKMyKWtv',
    siteName: 'Sahara Speedster',
    images: [{
      url: 'https://source.unsplash.com/1200x630/?desert,magic',
      width: 1200,
      height: 630,
      alt: 'Sahara Speedster Game'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahara Speedster',
    description: 'A fast-paced platformer with an Arabic character and mythology-based magic.',
    images: ['https://source.unsplash.com/1200x630/?desert,magic'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
