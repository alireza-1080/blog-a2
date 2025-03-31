import React from 'react'
import isUserLoggedInFunc from '@/utils/isUserLoggedIn'
import { redirect } from 'next/navigation'

const Dashboard = async () => {

  const isUserLoggedIn = await isUserLoggedInFunc()

  if (!isUserLoggedIn) {
   return redirect('/auth')
  }

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard