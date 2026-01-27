import { cookies } from 'next/headers'

const ADMIN_PASSWORD_HASH = process.env.ADMIN_SECRET || 'admin123' // Change in production!

export async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('admin_auth')
  
  if (!authToken) {
    return false
  }
  
  return authToken.value === ADMIN_PASSWORD_HASH
}

export async function setAuthCookie(password: string): Promise<boolean> {
  if (password === ADMIN_PASSWORD_HASH) {
    const cookieStore = await cookies()
    cookieStore.set('admin_auth', ADMIN_PASSWORD_HASH, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
    })
    return true
  }
  return false
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_auth')
}
