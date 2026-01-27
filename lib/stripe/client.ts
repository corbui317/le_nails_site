import Stripe from 'stripe'

// Allow build without env vars, will fail at runtime if actually used
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder'

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''

// Helper function to format amount for Stripe (in cents)
export function formatAmountForStripe(amount: number): number {
  return Math.round(amount * 100)
}

// Helper function to format amount for display
export function formatAmountFromStripe(amount: number): number {
  return amount / 100
}
