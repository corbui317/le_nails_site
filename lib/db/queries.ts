import { sql } from './client'
import { Booking, Review, BlogPost, Staff } from '@/types'

// Bookings
export async function createBooking(booking: Booking) {
  const result = await sql`
    INSERT INTO bookings (
      customer_name, email, phone, service_category, 
      service_name, preferred_date, preferred_time, message
    )
    VALUES (
      ${booking.customer_name}, ${booking.email}, ${booking.phone},
      ${booking.service_category || null}, ${booking.service_name || null},
      ${booking.preferred_date || null}, ${booking.preferred_time || null},
      ${booking.message || null}
    )
    RETURNING *
  `
  return result.rows[0]
}

export async function getBookingById(id: number) {
  const result = await sql`
    SELECT * FROM bookings WHERE id = ${id}
  `
  return result.rows[0]
}

export async function getAllBookings() {
  const result = await sql`
    SELECT * FROM bookings ORDER BY created_at DESC
  `
  return result.rows
}

export async function updateBookingStatus(id: number, status: string) {
  const result = await sql`
    UPDATE bookings SET status = ${status} WHERE id = ${id}
    RETURNING *
  `
  return result.rows[0]
}

// Reviews
export async function createReview(review: Review) {
  const result = await sql`
    INSERT INTO reviews (customer_name, rating, comment)
    VALUES (${review.customer_name}, ${review.rating}, ${review.comment || null})
    RETURNING *
  `
  return result.rows[0]
}

export async function getApprovedReviews() {
  const result = await sql`
    SELECT * FROM reviews WHERE approved = true ORDER BY created_at DESC
  `
  return result.rows
}

export async function getAllReviews() {
  const result = await sql`
    SELECT * FROM reviews ORDER BY created_at DESC
  `
  return result.rows
}

export async function approveReview(id: number) {
  const result = await sql`
    UPDATE reviews SET approved = true WHERE id = ${id}
    RETURNING *
  `
  return result.rows[0]
}

// Blog Posts
export async function createBlogPost(post: BlogPost) {
  const result = await sql`
    INSERT INTO blog_posts (title, slug, content, excerpt, image_url, published)
    VALUES (
      ${post.title}, ${post.slug}, ${post.content},
      ${post.excerpt || null}, ${post.image_url || null},
      ${post.published || false}
    )
    RETURNING *
  `
  return result.rows[0]
}

export async function getPublishedBlogPosts() {
  const result = await sql`
    SELECT * FROM blog_posts WHERE published = true ORDER BY created_at DESC
  `
  return result.rows
}

export async function getBlogPostBySlug(slug: string) {
  const result = await sql`
    SELECT * FROM blog_posts WHERE slug = ${slug} AND published = true
  `
  return result.rows[0]
}

export async function getAllBlogPosts() {
  const result = await sql`
    SELECT * FROM blog_posts ORDER BY created_at DESC
  `
  return result.rows
}

export async function updateBlogPost(id: number, post: Partial<BlogPost>) {
  const result = await sql`
    UPDATE blog_posts 
    SET 
      title = COALESCE(${post.title}, title),
      slug = COALESCE(${post.slug}, slug),
      content = COALESCE(${post.content}, content),
      excerpt = COALESCE(${post.excerpt}, excerpt),
      image_url = COALESCE(${post.image_url}, image_url),
      published = COALESCE(${post.published}, published),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  return result.rows[0]
}

// Staff
export async function createStaff(staff: Staff) {
  const specialtiesArray = staff.specialties ? `{${staff.specialties.join(',')}}` : null
  const result = await sql`
    INSERT INTO staff (name, title, bio, image_url, specialties, display_order, active)
    VALUES (
      ${staff.name}, ${staff.title || null}, ${staff.bio || null},
      ${staff.image_url || null}, ${specialtiesArray},
      ${staff.display_order || 0}, ${staff.active !== false}
    )
    RETURNING *
  `
  return result.rows[0]
}

export async function getActiveStaff() {
  const result = await sql`
    SELECT * FROM staff WHERE active = true ORDER BY display_order ASC, name ASC
  `
  return result.rows
}

export async function getAllStaff() {
  const result = await sql`
    SELECT * FROM staff ORDER BY display_order ASC, name ASC
  `
  return result.rows
}

export async function updateStaff(id: number, staff: Partial<Staff>) {
  const specialtiesArray = staff.specialties ? `{${staff.specialties.join(',')}}` : undefined
  const result = await sql`
    UPDATE staff 
    SET 
      name = COALESCE(${staff.name}, name),
      title = COALESCE(${staff.title}, title),
      bio = COALESCE(${staff.bio}, bio),
      image_url = COALESCE(${staff.image_url}, image_url),
      specialties = COALESCE(${specialtiesArray}, specialties),
      display_order = COALESCE(${staff.display_order}, display_order),
      active = COALESCE(${staff.active}, active)
    WHERE id = ${id}
    RETURNING *
  `
  return result.rows[0]
}
