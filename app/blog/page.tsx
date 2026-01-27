import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { BlogPost } from '@/types'

export const metadata: Metadata = {
  title: 'Blog & News | Soleil Nail Lounge',
  description: 'Stay updated with the latest nail trends, tips, and promotions from Soleil Nail Lounge.',
}

async function getBlogPosts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog`, {
      cache: 'no-store',
    })
    const data = await response.json()
    return data.posts || []
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const posts: BlogPost[] = await getBlogPosts()

  return (
    <div className="min-h-screen bg-accent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-script text-primary mb-4">
            Blog & News
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover the latest trends, tips, and updates from Soleil Nail Lounge.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {post.image_url && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image_url}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.created_at && (
                    <p className="text-sm text-gray-500 mb-2">
                      {format(new Date(post.created_at), 'MMMM d, yyyy')}
                    </p>
                  )}
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="inline-block mt-4 text-primary font-semibold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg">
              No blog posts yet. Check back soon for updates, tips, and news!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
