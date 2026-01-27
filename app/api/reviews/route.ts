import { NextRequest, NextResponse } from 'next/server'
import { createReview, getApprovedReviews, getAllReviews, approveReview } from '@/lib/db/queries'
import { z } from 'zod'

const reviewSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  rating: z.number().min(1).max(5, 'Rating must be between 1 and 5'),
  comment: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = reviewSchema.parse(body)
    
    // Create review (will be pending approval)
    const review = await createReview(validatedData)
    
    return NextResponse.json({ 
      success: true, 
      review,
      message: 'Review submitted successfully. It will appear after approval.'
    }, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors 
      }, { status: 400 })
    }
    
    console.error('Review creation error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit review' 
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const showAll = searchParams.get('all') === 'true'
    
    const reviews = showAll ? await getAllReviews() : await getApprovedReviews()
    
    return NextResponse.json({ success: true, reviews })
  } catch (error) {
    console.error('Get reviews error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch reviews' 
    }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id } = await request.json()
    const review = await approveReview(id)
    
    return NextResponse.json({ 
      success: true, 
      review,
      message: 'Review approved successfully'
    })
  } catch (error) {
    console.error('Approve review error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to approve review' 
    }, { status: 500 })
  }
}
