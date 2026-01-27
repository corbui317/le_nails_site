import { NextRequest, NextResponse } from 'next/server'
import { getBookingById, updateBookingStatus } from '@/lib/db/queries'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const booking = await getBookingById(id)
    
    if (!booking) {
      return NextResponse.json({ 
        success: false, 
        message: 'Booking not found' 
      }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, booking })
  } catch (error) {
    console.error('Get booking error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch booking' 
    }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const { status } = await request.json()
    
    const booking = await updateBookingStatus(id, status)
    
    return NextResponse.json({ 
      success: true, 
      booking,
      message: 'Booking updated successfully'
    })
  } catch (error) {
    console.error('Update booking error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update booking' 
    }, { status: 500 })
  }
}
