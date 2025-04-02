import { Button } from '@/components/ui/button'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

const Dashboard = async () => {
  const cookieStore = await cookies()
  const auth_token = cookieStore.get('auth_token')?.value
  console.log(auth_token)
  

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link href={'/dashboard/create'}>
          <Button className="cursor-pointer">Create Post</Button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
