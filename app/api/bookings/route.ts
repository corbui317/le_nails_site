import { NextRequest, NextResponse } from 'next/server'
import { createBooking, getAllBookings } from '@/lib/db/queries'
import { z } from 'zod'

const bookingSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service_category: z.string().optional(),
  service_name: z.string().optional(),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = bookingSchema.parse(body)
    
    // Create booking
    const booking = await createBooking(validatedData)
    
    return NextResponse.json({ 
      success: true, 
      booking,
      message: 'Booking created successfully'
    }, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors 
      }, { status: 400 })
    }
    
    console.error('Booking creation error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to create booking' 
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const bookings = await getAllBookings()
    return NextResponse.json({ success: true, bookings })
  } catch (error) {
    console.error('Get bookings error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch bookings' 
    }, { status: 500 })
  }
}
