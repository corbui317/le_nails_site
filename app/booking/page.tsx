import { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Book Appointment | Soleil Nail Lounge',
  description: 'Schedule your appointment at Soleil Nail Lounge. Choose from our wide range of services and book your preferred date and time.',
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-accent py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-script text-primary mb-4">
            Book Your Appointment
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Fill out the form below to request an appointment. We'll contact you shortly to confirm your booking.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <BookingForm />
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-script text-primary mb-4 text-center">
            Booking Information
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Cancellation Policy</h3>
              <p>Please provide at least 24 hours notice for cancellations to avoid a cancellation fee.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Deposit</h3>
              <p>Some services may require a deposit to secure your appointment. We accept all major credit cards.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Questions?</h3>
              <p>Call us at <a href="tel:+12485551234" className="text-primary hover:underline">(248) 555-1234</a> if you have any questions about our services or booking process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
