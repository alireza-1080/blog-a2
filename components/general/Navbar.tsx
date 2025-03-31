'use client'
import React from 'react'
import Link from 'next/link'
import SignSection from './NavBar/SignSection'
import NavProfile from './NavBar/NavProfile'
import useSWR from 'swr'

const Navbar = () => {
  const isLoggedInFetcher = async (url: string) => {
    const isLoggedInResponse = await fetch(url, {
      method: 'POST',
      credentials: 'include',
    })

    const isUserLoggedInData = await isLoggedInResponse.json()

    const isUserLoggedIn = isUserLoggedInData.isUserLoggedIn

    return isUserLoggedIn
  }

  const {data: isUserLoggedIn} = useSWR('/api/user/is-logged-in', isLoggedInFetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 0
  })

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <Link href={'/'}>
          <h1 className="text-3xl font-semibold">
            Blog
            <span className="text-blue-500">
              A<sup>2</sup>
            </span>
          </h1>
        </Link>

        {/* Navbar */}
        <div className="hidden sm:flex items-center gap-6">
          {/* Home button */}
          <Link href={'/'} className="text-sm font-medium hover:text-blue-500 transition-colors">
            Home
          </Link>

          {/* Dashboard button */}
          <Link href={'/dashboard'} className="text-sm font-medium hover:text-blue-500 transition-colors">
            Dashboard
          </Link>
        </div>
      </div>

      {isUserLoggedIn ? <NavProfile /> : <SignSection />}
    </nav>
  )
}

export default Navbar
