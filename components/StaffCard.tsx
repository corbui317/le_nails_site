import Image from 'next/image'
import Link from 'next/link'
import { Staff } from '@/types'

interface StaffCardProps {
  staff: Staff
}

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {staff.image_url && (
        <div className="relative h-64 w-full">
          <Image
            src={staff.image_url}
            alt={staff.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-script text-primary mb-1">
          {staff.name}
        </h3>
        {staff.title && (
          <p className="text-sm text-gray-600 mb-3">
            {staff.title}
          </p>
        )}
        {staff.bio && (
          <p className="text-gray-700 mb-4 line-clamp-3">
            {staff.bio}
          </p>
        )}
        {staff.specialties && staff.specialties.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Specialties:
            </p>
            <div className="flex flex-wrap gap-2">
              {staff.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent text-primary text-xs rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}
        <Link
          href="/booking"
          className="block text-center w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/80 transition-colors"
        >
          Book with {staff.name.split(' ')[0]}
        </Link>
      </div>
    </div>
  )
}
