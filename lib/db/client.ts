import { sql } from '@vercel/postgres'

export { sql }

// Note: When deploying to Vercel, you'll need to:
// 1. Create a Vercel Postgres database
// 2. Add DATABASE_URL to environment variables
// 3. Run the schema.sql file to create tables

// For local development, you can use a local PostgreSQL instance
// or use Vercel's development database

export async function initDatabase() {
  try {
    // Test connection
    await sql`SELECT NOW()`
    console.log('Database connection successful')
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}
