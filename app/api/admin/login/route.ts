import { NextRequest, NextResponse } from 'next/server'
import { setAuthCookie } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    
    const success = await setAuthCookie(password)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid password' 
      }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Login failed' 
    }, { status: 500 })
  }
}
