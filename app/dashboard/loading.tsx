import React from 'react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingDashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Button className="cursor-pointer">Create Post</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
        <Skeleton className='w-full h-[350px]'/>
      </div>
    </div>
  )
}

export default LoadingDashboard
