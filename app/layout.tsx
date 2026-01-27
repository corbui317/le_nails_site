import type { Metadata } from 'next'
import { Dancing_Script, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Soleil Nail Lounge | Premier Nail Salon in Novi, MI',
  description: 'Experience luxury nail care at Soleil Nail Lounge in Novi, Michigan. Offering manicures, pedicures, nail enhancements, lash extensions, and more.',
  keywords: 'nail salon, manicure, pedicure, Novi MI, nail enhancements, lash extensions, waxing',
  openGraph: {
    title: 'Soleil Nail Lounge | Premier Nail Salon in Novi, MI',
    description: 'Experience luxury nail care at Soleil Nail Lounge in Novi, Michigan.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${openSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
