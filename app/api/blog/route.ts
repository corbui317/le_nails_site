import { NextRequest, NextResponse } from 'next/server'
import { createBlogPost, getPublishedBlogPosts, getAllBlogPosts } from '@/lib/db/queries'
import { z } from 'zod'

const blogPostSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  excerpt: z.string().optional(),
  image_url: z.string().url().optional().or(z.literal('')),
  published: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = blogPostSchema.parse(body)
    
    // Create blog post
    const post = await createBlogPost(validatedData)
    
    return NextResponse.json({ 
      success: true, 
      post,
      message: 'Blog post created successfully'
    }, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors 
      }, { status: 400 })
    }
    
    console.error('Blog post creation error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to create blog post' 
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const showAll = searchParams.get('all') === 'true'
    
    const posts = showAll ? await getAllBlogPosts() : await getPublishedBlogPosts()
    
    return NextResponse.json({ success: true, posts })
  } catch (error) {
    console.error('Get blog posts error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch blog posts' 
    }, { status: 500 })
  }
}
