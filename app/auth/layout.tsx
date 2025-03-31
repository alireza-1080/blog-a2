import React from 'react'
import { redirect } from 'next/navigation'
import isUserLoggedInFunc from '@/utils/isUserLoggedIn'

const Layout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
    const isUserLoggedIn = await isUserLoggedInFunc()

    if (isUserLoggedIn) {
        redirect('/dashboard')
    }

  return <>{children}</>
}

export default Layout
