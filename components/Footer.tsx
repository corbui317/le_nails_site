'use client'

import Link from 'next/link'
import { FaYelp, FaInstagram } from 'react-icons/fa'
import { useFadeInOnScroll } from '@/lib/hooks'

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Booking', '/booking'],
  ['About', '/about'],
  ['Coupons', '/coupons'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
]

export default function Footer() {
  const fadeRef = useFadeInOnScroll<HTMLElement>()
  
  return (
    <footer
      ref={fadeRef}
      className="bg-primary text-white text-center py-6 mt-10 opacity-0 translate-y-4"
    >
      <nav className="mb-4">
        <ul className="flex justify-center space-x-6">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.yelp.com/biz/le-nails-novi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit us on Yelp"
        >
          <FaYelp size={30} className="hover:text-red-200" />
        </a>
        <a
          href="https://www.instagram.com/soleilnailsalon/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <FaInstagram size={30} className="hover:text-gray-200" />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Soleil Nail Lounge. All rights reserved.
      </p>
    </footer>
  )
}
