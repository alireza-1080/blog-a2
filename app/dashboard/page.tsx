import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Dashboard = async () => {
  return (
    <div>
        <div className='flex items-center justify-between mb-4'>
            <h2 className='text-xl font-medium'>Your Blog Articles</h2>
            <Link href={'/dashboard/create'}>
              <Button className='cursor-pointer'>Create Post</Button>
            </Link>
        </div>
    </div>
  )
}

export default Dashboard
