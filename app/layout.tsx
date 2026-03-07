import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Bayzilian Professional - Advanced Nanoplastia Hair Treatment',
  description: 'Premium professional haircare products featuring advanced nanoplastia technology. 100% formaldehyde-free hair treatment solutions for all hair types.',
  generator: 'v0.app',
  keywords: 'nanoplastia, hair treatment, professional haircare, hair straightening, hair botox',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f2e23',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
