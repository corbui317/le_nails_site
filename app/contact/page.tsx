import { Metadata } from 'next'
import Contact from '@/components/Contact'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us | Soleil Nail Lounge',
  description: 'Get in touch with Soleil Nail Lounge in Novi, MI. Call us or visit our location for all your nail care needs.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-script text-primary text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          We'd love to hear from you! Reach out to schedule an appointment or ask any questions.
        </p>
      </div>
      
      <Contact />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-accent rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-script text-primary mb-6 text-center">
            Visit Us
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-700">Novi, MI 48375</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaPhone className="text-primary text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a
                  href="tel:+12485551234"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  (248) 555-1234
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a
                  href="mailto:info@soleilnaillounge.com"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  info@soleilnaillounge.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
