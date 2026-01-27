import { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Our Services | Soleil Nail Lounge',
  description: 'Explore our full range of nail care services including manicures, pedicures, nail enhancements, lash extensions, and waxing.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-script text-primary text-center mb-6">
          Our Services
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Discover our comprehensive range of beauty services designed to make you look and feel your best.
        </p>
      </div>
      <Services />
    </div>
  )
}
