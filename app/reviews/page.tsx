import { Metadata } from 'next'
import ReviewCard from '@/components/ReviewCard'
import ReviewForm from '@/components/ReviewForm'
import { FaStar } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Customer Reviews | Soleil Nail Lounge',
  description: 'Read what our customers say about Soleil Nail Lounge. Share your experience with us!',
}

// This will be replaced with actual database fetching in production
async function getReviews() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/reviews`, {
      cache: 'no-store',
    })
    const data = await response.json()
    return data.reviews || []
  } catch (error) {
    console.error('Failed to fetch reviews:', error)
    return []
  }
}

export default async function ReviewsPage() {
  const reviews = await getReviews()
  
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum: number, review: any) => sum + review.rating, 0) / reviews.length
    : 0

  return (
    <div className="min-h-screen bg-accent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-script text-primary mb-4">
            Customer Reviews
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Hear what our valued customers have to say about their experiences at Soleil Nail Lounge.
          </p>
          
          {reviews.length > 0 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex text-yellow-500 text-2xl">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-xl font-semibold text-gray-700">
                {averageRating.toFixed(1)} out of 5
              </p>
              <p className="text-gray-600">
                ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-script text-primary mb-6">
              What Our Customers Say
            </h2>
            {reviews.length > 0 ? (
              <div className="space-y-6">
                {reviews.map((review: any) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600">
                  No reviews yet. Be the first to share your experience!
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-script text-primary mb-6 text-center">
                Share Your Experience
              </h2>
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
