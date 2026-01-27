# Deployment Guide for Soleil Nail Lounge

## Pre-Deployment Checklist

### 1. Database Setup (Vercel Postgres)

1. Go to your Vercel dashboard
2. Navigate to Storage > Create Database > Postgres
3. Copy the connection string
4. Run the schema from `lib/db/schema.sql` using the Vercel Postgres dashboard or CLI

### 2. Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe dashboard
3. For testing, use test mode keys
4. For production, switch to live mode and get live keys

### 3. Email Service Setup (Resend)

1. Sign up at https://resend.com
2. Get your API key from the dashboard
3. Verify your domain (optional but recommended)

### 4. Environment Variables

Set these in your Vercel project settings:

```
DATABASE_URL=your_vercel_postgres_connection_string
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
RESEND_API_KEY=re_your_resend_api_key
ADMIN_SECRET=your_secure_admin_password
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

⚠️ **Important:** 
- Never commit `.env` files to git
- Use strong passwords for `ADMIN_SECRET`
- Keep `STRIPE_SECRET_KEY` private

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Configure environment variables
5. Deploy!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Post-Deployment Tasks

### 1. Database Initialization

After first deployment, initialize your database:

```bash
# Connect to Vercel Postgres and run schema.sql
# You can do this via the Vercel dashboard or CLI
```

### 2. Test All Features

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Booking form submits successfully
- [ ] Payment integration works (test mode)
- [ ] Review submission works
- [ ] Admin login works
- [ ] All admin pages are accessible
- [ ] Images load correctly
- [ ] Mobile responsive design works
- [ ] Contact information is correct

### 3. SEO Configuration

- [ ] Update sitemap.xml with your domain
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Check meta tags on all pages
- [ ] Test Open Graph images

### 4. Domain Configuration

1. Add custom domain in Vercel dashboard
2. Update DNS records as instructed
3. Enable SSL certificate (automatic with Vercel)
4. Update `NEXT_PUBLIC_SITE_URL` to your domain

### 5. Content Population

Using the admin dashboard (`yourdomain.com/admin`):

1. Add staff profiles with photos
2. Create initial blog posts
3. Review and approve test reviews (or remove them)
4. Verify all services are listed correctly

### 6. Analytics Setup (Optional)

Add Google Analytics:

1. Create a GA4 property
2. Add tracking code to `app/layout.tsx`
3. Verify tracking is working

### 7. Email Configuration

Set up email notifications:

1. Configure Resend with your domain
2. Create email templates for:
   - Booking confirmations
   - Payment receipts
   - Admin notifications
3. Test email delivery

## Monitoring & Maintenance

### Regular Tasks

- Check booking submissions daily
- Approve customer reviews weekly
- Update blog content regularly
- Monitor Vercel analytics
- Check for security updates

### Backups

- Vercel Postgres includes automatic backups
- Export customer data monthly for additional safety
- Keep a local copy of important content

### Performance Monitoring

- Use Vercel Analytics
- Monitor Core Web Vitals
- Check Lighthouse scores regularly
- Test on multiple devices

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Issues

- Verify DATABASE_URL is correct
- Check database is accessible from Vercel
- Review connection pool settings

### API Route Errors

- Check server logs in Vercel dashboard
- Verify environment variables are set
- Test API routes individually

### Stripe Issues

- Verify API keys are correct
- Check webhook endpoints
- Test with Stripe test cards
- Review Stripe dashboard for errors

## Support

For issues:
1. Check Vercel logs
2. Review Next.js documentation
3. Contact support if needed

## Security Best Practices

- [ ] Change default admin password
- [ ] Enable 2FA on Vercel account
- [ ] Regularly update dependencies
- [ ] Monitor for security vulnerabilities
- [ ] Use environment variables for all secrets
- [ ] Enable Vercel's security headers
- [ ] Regular security audits

## Going Live Checklist

Before announcing your site:

- [ ] All content is finalized
- [ ] All images are optimized
- [ ] All links are tested
- [ ] Contact information is correct
- [ ] Hours of operation are accurate
- [ ] Pricing is up to date
- [ ] Test booking flow completely
- [ ] Test payment flow (real transaction)
- [ ] Mobile experience is perfect
- [ ] Load times are acceptable
- [ ] SSL certificate is active
- [ ] Social media links work
- [ ] Google My Business is updated
- [ ] 404 and error pages are styled
- [ ] Accessibility standards met
- [ ] Privacy policy added (if collecting data)
- [ ] Terms of service added (if needed)

## Launch!

Once everything is tested and ready:

1. Switch Stripe to live mode
2. Update environment variables with live keys
3. Announce on social media
4. Update Google My Business
5. Send announcement to existing customers
6. Consider a soft launch for final testing

## Post-Launch

- Monitor traffic and user behavior
- Collect feedback from customers
- Make iterative improvements
- Keep content fresh and updated
- Engage with reviews and comments
- Track conversion rates
- Optimize based on analytics

---

**Congratulations on your new website!** 🎉
