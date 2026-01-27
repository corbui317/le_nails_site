import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaStar, FaUsers } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us | Soleil Nail Lounge',
  description: 'Learn about Soleil Nail Lounge - your premier destination for luxury nail care in Novi, Michigan.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96 w-full">
        <Image
          src="/images/gallery/nails-bg.jpg"
          alt="Soleil Nail Lounge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-script text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-script text-primary mb-6">
              Welcome to Soleil Nail Lounge
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Soleil Nail Lounge, we believe that beauty and relaxation go hand in hand. 
                Located in the heart of Novi, Michigan, our salon offers a luxurious escape where 
                you can unwind and treat yourself to premium nail care services.
              </p>
              <p>
                Our team of experienced and licensed professionals is dedicated to providing 
                exceptional service in a clean, comfortable, and welcoming environment. We use 
                only the highest quality products and maintain the strictest sanitation standards 
                to ensure your safety and satisfaction.
              </p>
              <p>
                Whether you're looking for a classic manicure, a luxurious pedicure, stunning 
                nail enhancements, or beautiful lash extensions, we have the expertise and 
                artistry to make your beauty vision a reality.
              </p>
            </div>
          </div>

          <div className="relative h-96 lg:h-auto">
            <Image
              src="/images/gallery/nails1.jpg"
              alt="Our salon"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-accent rounded-lg">
            <FaHeart className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Passion for Beauty
            </h3>
            <p className="text-gray-600">
              We're passionate about helping you look and feel your absolute best with every visit.
            </p>
          </div>

          <div className="text-center p-8 bg-accent rounded-lg">
            <FaStar className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Quality Service
            </h3>
            <p className="text-gray-600">
              Premium products, expert techniques, and attention to detail in everything we do.
            </p>
          </div>

          <div className="text-center p-8 bg-accent rounded-lg">
            <FaUsers className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Client-Focused
            </h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We listen to your needs and exceed your expectations.
            </p>
          </div>
        </div>

        <div className="bg-accent rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-script text-primary mb-6 text-center">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Cleanliness & Safety</h3>
              <p>
                We follow strict sanitation protocols and use hospital-grade disinfectants. 
                All tools are properly sterilized between clients.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Premium Products</h3>
              <p>
                We use only high-quality, professional-grade products from trusted brands 
                to ensure the best results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Skilled Professionals</h3>
              <p>
                Our team consists of licensed and experienced technicians who stay current 
                with the latest trends and techniques.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Customer Satisfaction</h3>
              <p>
                Your happiness is our success. We strive to provide an exceptional experience 
                with every visit.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-script text-primary mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why Soleil Nail Lounge is Novi's 
            premier destination for luxury nail care.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg text-lg hover:bg-primary/80 transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
