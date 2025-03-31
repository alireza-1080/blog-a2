import React from 'react'
import Link from 'next/link'
import UserSection from './NavBar/UserSection'
import isUserLoggedInFunc from '@/utils/isUserLoggedIn'

const Navbar = async () => {
  const isUserLoggedIn = await isUserLoggedInFunc()

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

      <UserSection isUserLoggedInProp={isUserLoggedIn} />
    </nav>
  )
}

export default Navbar
