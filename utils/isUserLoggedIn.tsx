import { cookies } from 'next/headers'

const isUserLoggedIn = async (): Promise<boolean> => {
  const cookieStore = await cookies()
  const authTokenCookie = cookieStore.get('auth_token')

  let auth_token: string

  if (authTokenCookie) {
    auth_token = authTokenCookie.value
  } else {
    auth_token = ''
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${auth_token}`,
  }

  try {
    const response = await fetch('/api/user/is-logged-in', {
      method: 'POST',
      credentials: 'include',
      headers,
      cache: 'no-cache'
    })

    const data = await response.json()

    const isUserLoggedIn = data.isUserLoggedIn

    return isUserLoggedIn
  } catch (error) {
    console.log(error)
    return false
  }
}

export default isUserLoggedIn
