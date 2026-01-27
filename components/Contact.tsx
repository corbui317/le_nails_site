'use client'

import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { useFadeInOnScroll } from '@/lib/hooks'

export default function Contact() {
  const fadeRef = useFadeInOnScroll<HTMLElement>()
  
  return (
    <section
      id="contact"
      ref={fadeRef}
      className="p-8 bg-white opacity-0 translate-y-4"
    >
      <h3 className="text-3xl font-script mb-8 text-center text-primary">
        Contact Us
      </h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center p-6 bg-accent rounded-lg shadow-md">
          <FaPhone className="text-primary text-4xl mb-4" />
          <h4 className="text-xl font-semibold mb-2">Phone</h4>
          <a
            href="tel:+12485551234"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            (248) 555-1234
          </a>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-accent rounded-lg shadow-md">
          <FaMapMarkerAlt className="text-primary text-4xl mb-4" />
          <h4 className="text-xl font-semibold mb-2">Location</h4>
          <p className="text-gray-700">
            Novi, MI 48375
          </p>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-accent rounded-lg shadow-md">
          <FaClock className="text-primary text-4xl mb-4" />
          <h4 className="text-xl font-semibold mb-2">Hours</h4>
          <div className="text-gray-700">
            <p>Mon-Sat: 10am - 7pm</p>
            <p>Sunday: 11am - 5pm</p>
          </div>
        </div>
      </div>
    </section>
  )
}
