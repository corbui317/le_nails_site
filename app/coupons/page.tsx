import { Metadata } from 'next'
import Link from 'next/link'
import { FaGift, FaPercent, FaStar, FaCalendarAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Coupons & Promotions | Soleil Nail Lounge',
  description: 'Save on premium nail care services with our latest coupons and special offers at Soleil Nail Lounge.',
}

const currentPromotions = [
  {
    icon: FaGift,
    title: 'New Client Special',
    discount: '20% OFF',
    description: 'First-time clients receive 20% off any service',
    code: 'WELCOME20',
    terms: 'Valid for new clients only. Cannot be combined with other offers.',
  },
  {
    icon: FaPercent,
    title: 'Referral Reward',
    discount: '$10 OFF',
    description: 'Refer a friend and you both get $10 off your next visit',
    code: 'REFER10',
    terms: 'Both parties must mention referral at time of booking.',
  },
  {
    icon: FaStar,
    title: 'Birthday Month Special',
    discount: '15% OFF',
    description: 'Celebrate your birthday month with 15% off any service',
    code: 'BIRTHDAY15',
    terms: 'Valid ID required. Must book during birthday month.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Package Deal',
    discount: 'SAVE $25',
    description: 'Book 5 services in advance and save $25',
    code: 'PACKAGE5',
    terms: 'Services must be used within 6 months.',
  },
]

export default function CouponsPage() {
  return (
    <div className="min-h-screen bg-accent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-script text-primary mb-4">
            Coupons & Promotions
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Take advantage of our special offers and save on premium nail care services!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {currentPromotions.map((promo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary p-6 text-white text-center">
                <promo.icon className="text-5xl mx-auto mb-3" />
                <h2 className="text-2xl font-script mb-2">{promo.title}</h2>
                <p className="text-3xl font-bold">{promo.discount}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg mb-4">
                  {promo.description}
                </p>
                <div className="bg-accent p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 mb-1">Promo Code:</p>
                  <p className="text-xl font-bold text-primary font-mono">
                    {promo.code}
                  </p>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {promo.terms}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-script text-primary mb-4 text-center">
            How to Redeem
          </h2>
          <ol className="space-y-3 text-gray-700 max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="font-bold text-primary mr-3">1.</span>
              <span>Choose your desired service from our services page</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-3">2.</span>
              <span>Book your appointment online or call us at (248) 555-1234</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-3">3.</span>
              <span>Mention the promo code when booking or at check-in</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-3">4.</span>
              <span>Enjoy your service and savings!</span>
            </li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-primary to-pink-400 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-script mb-4">
            Stay Updated on Latest Offers
          </h2>
          <p className="mb-6 text-lg">
            Follow us on social media to never miss a special promotion!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/soleilnailsalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg text-lg hover:bg-primary/80 transition-colors"
          >
            Book Your Appointment Now
          </Link>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          *Offers subject to change. Some restrictions may apply. Cannot be combined with other offers unless specified.
        </p>
      </div>
    </div>
  )
}
