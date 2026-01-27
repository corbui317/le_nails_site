'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-8 bg-white/90 backdrop-blur shadow-md border-b">
      <Link href="/">
        <h1 className="text-3xl font-script text-primary cursor-pointer">
          Soleil Nail Lounge
        </h1>
      </Link>
      <nav>
        <ul className="flex space-x-4 text-base">
          <li>
            <Link
              href="/"
              onClick={handleScrollToTop}
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-primary transition-colors duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              className="hover:text-primary transition-colors duration-200"
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              href="/staff"
              className="hover:text-primary transition-colors duration-200"
            >
              Staff
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/coupons"
              className="hover:text-primary transition-colors duration-200"
            >
              Coupons
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
