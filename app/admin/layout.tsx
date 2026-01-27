import { redirect } from 'next/navigation'
import { checkAuth } from '@/lib/auth'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = await checkAuth()

  if (!isAuthenticated) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-accent">
      <nav className="bg-primary text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-script">Admin Dashboard</h1>
          <div className="flex gap-6">
            <Link href="/admin" className="hover:underline">Dashboard</Link>
            <Link href="/admin/bookings" className="hover:underline">Bookings</Link>
            <Link href="/admin/reviews" className="hover:underline">Reviews</Link>
            <Link href="/admin/blog" className="hover:underline">Blog</Link>
            <Link href="/admin/staff" className="hover:underline">Staff</Link>
            <Link href="/" className="hover:underline">View Site</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto p-8">
        {children}
      </main>
    </div>
  )
}
