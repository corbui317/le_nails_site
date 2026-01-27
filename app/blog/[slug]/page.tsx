import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '@/types'

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog/${slug}`,
      { cache: 'no-store' }
    )
    const data = await response.json()
    return data.post || null
  } catch (error) {
    console.error('Failed to fetch blog post:', error)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Soleil Nail Lounge Blog`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      images: post.image_url ? [post.image_url] : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          ← Back to Blog
        </Link>

        {post.image_url && (
          <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <header className="mb-8">
          {post.created_at && (
            <p className="text-sm text-gray-500 mb-3">
              {format(new Date(post.created_at), 'MMMM d, yyyy')}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-script text-primary mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-700 leading-relaxed"
          />
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-primary hover:underline font-semibold"
            >
              ← Back to all posts
            </Link>
            <Link
              href="/booking"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
