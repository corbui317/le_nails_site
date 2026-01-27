import { NextRequest, NextResponse } from 'next/server'
import { createStaff, getActiveStaff, getAllStaff } from '@/lib/db/queries'
import { z } from 'zod'

const staffSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  title: z.string().optional(),
  bio: z.string().optional(),
  image_url: z.string().url().optional().or(z.literal('')),
  specialties: z.array(z.string()).optional(),
  display_order: z.number().optional(),
  active: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = staffSchema.parse(body)
    
    // Create staff
    const staff = await createStaff(validatedData)
    
    return NextResponse.json({ 
      success: true, 
      staff,
      message: 'Staff member added successfully'
    }, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors 
      }, { status: 400 })
    }
    
    console.error('Staff creation error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to add staff member' 
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const showAll = searchParams.get('all') === 'true'
    
    const staff = showAll ? await getAllStaff() : await getActiveStaff()
    
    return NextResponse.json({ success: true, staff })
  } catch (error) {
    console.error('Get staff error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch staff' 
    }, { status: 500 })
  }
}
