import Link from 'next/link'
import { FaCalendarAlt, FaStar, FaBlog, FaUsers } from 'react-icons/fa'

export default function AdminDashboard() {
  const sections = [
    {
      title: 'Bookings',
      icon: FaCalendarAlt,
      description: 'View and manage customer bookings',
      href: '/admin/bookings',
      color: 'bg-blue-500',
    },
    {
      title: 'Reviews',
      icon: FaStar,
      description: 'Approve and manage customer reviews',
      href: '/admin/reviews',
      color: 'bg-yellow-500',
    },
    {
      title: 'Blog Posts',
      icon: FaBlog,
      description: 'Create and edit blog content',
      href: '/admin/blog',
      color: 'bg-green-500',
    },
    {
      title: 'Staff',
      icon: FaUsers,
      description: 'Manage staff profiles',
      href: '/admin/staff',
      color: 'bg-purple-500',
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-script text-primary mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className={`${section.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <section.icon className="text-2xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-600">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-script text-primary mb-4">Quick Stats</h2>
        <p className="text-gray-600">
          Dashboard statistics will be displayed here once the database is connected.
        </p>
      </div>
    </div>
  )
}
