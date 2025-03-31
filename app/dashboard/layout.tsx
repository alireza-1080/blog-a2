import React from 'react'
import isUserLoggedInFunc from '@/utils/isUserLoggedIn'
import { redirect } from 'next/navigation'

const DashboardLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const isUserLoggedIn = await isUserLoggedInFunc()

  if (!isUserLoggedIn) {
    return redirect('/auth')
  }

  return <>{children}</>
}

export default DashboardLayout
