import { FaStar } from 'react-icons/fa'
import { Review } from '@/types'
import { format } from 'date-fns'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            {review.customer_name}
          </h3>
          {review.created_at && (
            <p className="text-sm text-gray-500">
              {format(new Date(review.created_at), 'MMMM d, yyyy')}
            </p>
          )}
        </div>
        <div className="flex text-yellow-500">
          {Array.from({ length: review.rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
      
      {review.comment && (
        <p className="text-gray-700 leading-relaxed">
          "{review.comment}"
        </p>
      )}
    </div>
  )
}
