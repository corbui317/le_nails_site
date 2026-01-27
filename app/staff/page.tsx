import { Metadata } from 'next'
import StaffCard from '@/components/StaffCard'
import { Staff } from '@/types'

export const metadata: Metadata = {
  title: 'Our Team | Soleil Nail Lounge',
  description: 'Meet our talented team of nail technicians and beauty professionals at Soleil Nail Lounge.',
}

async function getStaff() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/staff`, {
      cache: 'no-store',
    })
    const data = await response.json()
    return data.staff || []
  } catch (error) {
    console.error('Failed to fetch staff:', error)
    return []
  }
}

export default async function StaffPage() {
  const staff: Staff[] = await getStaff()

  return (
    <div className="min-h-screen bg-accent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-script text-primary mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Our skilled and passionate professionals are dedicated to providing you with exceptional service and beautiful results.
          </p>
        </div>

        {staff.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member) => (
              <StaffCard key={member.id} staff={member} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg">
              Our team information will be available soon. Check back later to meet our talented professionals!
            </p>
          </div>
        )}

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-script text-primary mb-4 text-center">
            Join Our Team
          </h2>
          <p className="text-gray-700 text-center mb-6">
            Are you a talented nail technician or beauty professional? We're always looking for passionate individuals to join our team!
          </p>
          <div className="text-center">
            <a
              href="tel:+12485551234"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
            >
              Contact Us About Careers
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
