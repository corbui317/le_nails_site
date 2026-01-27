# Soleil Nail Lounge - Next.js Website

A modern, full-featured website for Soleil Nail Lounge built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with custom branding
- 📅 Online booking system with date/time picker
- 💳 Stripe payment integration for deposits
- ⭐ Customer review system with approval workflow
- 📝 Blog/news section with dynamic content
- 👥 Staff profiles showcase
- 🔐 Admin dashboard for content management
- 📱 Mobile-friendly and accessible
- ⚡ Optimized performance with Next.js

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Vercel Postgres
- **Payments:** Stripe
- **Email:** Resend
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database (Vercel Postgres recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd le_nails_site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following:

```env
DATABASE_URL=your_postgres_connection_string
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
RESEND_API_KEY=your_resend_api_key
ADMIN_SECRET=your_admin_password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Set up the database:
Run the schema from `lib/db/schema.sql` in your PostgreSQL database.

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
/app                  # Next.js App Router pages
  /api               # API routes
  /admin             # Admin dashboard
  /booking           # Booking pages
  /blog              # Blog pages
  /staff             # Staff profiles
  /services          # Services page
  /contact           # Contact page
  /about             # About page
  /coupons           # Coupons page
  /faq               # FAQ page
/components          # React components
/lib                 # Utilities and database functions
  /db                # Database queries
  /stripe            # Stripe integration
/public              # Static assets
/types               # TypeScript type definitions
```

## Admin Dashboard

Access the admin dashboard at `/admin/login` with the password set in `ADMIN_SECRET`.

Features:
- View and manage bookings
- Approve customer reviews
- Create and edit blog posts
- Manage staff profiles

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set all required environment variables in your Vercel project settings:
- `DATABASE_URL`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `RESEND_API_KEY`
- `ADMIN_SECRET`
- `NEXT_PUBLIC_SITE_URL`

## Customization

### Colors
Edit colors in `tailwind.config.ts`:
- Primary: `#d1a3a4` (dusty rose)
- Accent: `#f1e4e6` (light blush)
- Gold: `#F4C542`

### Services
Update services in `lib/services-data.ts`

### Contact Information
Update phone numbers and addresses in:
- `components/Contact.tsx`
- `app/contact/page.tsx`
- Throughout the site as needed

## License

Private - All rights reserved

## Support

For support, contact: info@soleilnaillounge.com
