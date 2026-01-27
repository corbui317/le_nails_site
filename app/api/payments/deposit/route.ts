import { NextRequest, NextResponse } from 'next/server'
import { stripe, formatAmountForStripe } from '@/lib/stripe/client'
import { z } from 'zod'

const depositSchema = z.object({
  amount: z.number().min(1, 'Amount must be greater than 0'),
  bookingId: z.number(),
  customerEmail: z.string().email(),
  customerName: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = depositSchema.parse(body)
    
    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: formatAmountForStripe(validatedData.amount),
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        bookingId: validatedData.bookingId.toString(),
      },
      receipt_email: validatedData.customerEmail,
      description: `Deposit for booking #${validatedData.bookingId} - ${validatedData.customerName}`,
    })
    
    return NextResponse.json({ 
      success: true, 
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors 
      }, { status: 400 })
    }
    
    console.error('Payment intent creation error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to create payment intent' 
    }, { status: 500 })
  }
}
