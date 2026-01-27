'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useFadeInOnScroll } from '@/lib/hooks'

export default function Hero() {
  const fadeRef = useFadeInOnScroll<HTMLDivElement>()
  
  return (
    <section className="relative flex items-center justify-center text-center h-screen">
      <Image
        src="/images/gallery/nails-bg.jpg"
        alt="Nail salon background"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div
        ref={fadeRef}
        className="relative bg-white/70 p-10 rounded-lg shadow-lg opacity-0 translate-y-4 z-10"
      >
        <h2 className="text-5xl font-script text-primary drop-shadow">
          Welcome to Soleil Nail Lounge
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Where beauty meets relaxation
        </p>
        <Link
          href="/booking"
          className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary/80 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </section>
  )
}
