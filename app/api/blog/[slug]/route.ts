import { NextRequest, NextResponse } from 'next/server'
import { getBlogPostBySlug } from '@/lib/db/queries'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await getBlogPostBySlug(params.slug)
    
    if (!post) {
      return NextResponse.json({ 
        success: false, 
        message: 'Blog post not found' 
      }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error('Get blog post error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch blog post' 
    }, { status: 500 })
  }
}
