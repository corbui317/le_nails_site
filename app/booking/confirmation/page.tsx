import { Metadata } from 'next'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Booking Confirmed | Soleil Nail Lounge',
  description: 'Your booking has been confirmed.',
}

export default function BookingConfirmationPage({
  searchParams,
}: {
  searchParams: { id?: string; payment_intent?: string }
}) {
  return (
    <div className="min-h-screen bg-accent flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        
        <h1 className="text-4xl font-script text-primary mb-4">
          Booking Confirmed!
        </h1>
        
        {searchParams.id && (
          <p className="text-gray-600 mb-2">
            Booking Reference: <span className="font-semibold">#{searchParams.id}</span>
          </p>
        )}
        
        {searchParams.payment_intent && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-semibold">Payment Successful</p>
            <p className="text-sm text-green-700 mt-1">
              Your deposit has been processed successfully.
            </p>
          </div>
        )}
        
        <div className="my-8 space-y-4 text-left">
          <div className="bg-accent p-6 rounded-lg">
            <h2 className="text-xl font-script text-primary mb-3">What's Next?</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>We'll send you a confirmation email shortly</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Our team will contact you to confirm your appointment details</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>You'll receive a reminder 24 hours before your appointment</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-accent p-6 rounded-lg">
            <h2 className="text-xl font-script text-primary mb-3">Need to Make Changes?</h2>
            <p className="text-gray-700">
              Please call us at{' '}
              <a href="tel:+12485551234" className="text-primary hover:underline font-semibold">
                (248) 555-1234
              </a>
              {' '}if you need to reschedule or have any questions.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/booking"
            className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-accent transition-colors"
          >
            Book Another Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
