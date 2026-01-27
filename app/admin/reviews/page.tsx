import { format } from 'date-fns'
import { FaStar } from 'react-icons/fa'
import { Review } from '@/types'

async function getReviews() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/reviews?all=true`, {
      cache: 'no-store',
    })
    const data = await response.json()
    return data.reviews || []
  } catch (error) {
    console.error('Failed to fetch reviews:', error)
    return []
  }
}

export default async function AdminReviewsPage() {
  const reviews: Review[] = await getReviews()

  return (
    <div>
      <h1 className="text-4xl font-script text-primary mb-8">Manage Reviews</h1>
      
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`bg-white rounded-lg shadow-md p-6 ${
                review.approved ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.customer_name}
                  </h3>
                  {review.created_at && (
                    <p className="text-sm text-gray-500">
                      {format(new Date(review.created_at), 'MMM d, yyyy')}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    review.approved 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {review.approved ? 'Approved' : 'Pending'}
                  </span>
                </div>
              </div>
              {review.comment && (
                <p className="text-gray-700 mb-4">"{review.comment}"</p>
              )}
              {!review.approved && (
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors">
                  Approve Review
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <p className="text-gray-600">No reviews yet.</p>
        </div>
      )}
    </div>
  )
}
