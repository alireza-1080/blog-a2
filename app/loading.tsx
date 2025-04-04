import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingDashboard = () => {
  return (
    <div className="py-8">
  {/* Header */}
  <h1 className="text-3xl font-bold tracking-tight mb-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-md">
    Latest Posts
  </h1>

  {/* Posts Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 10 }).map((_, index) => (
      <Skeleton 
        key={index}
        className="group relative overflow-hidden rounded-xl border-2 border-gray-300 dark:border-gray-700 shadow-md transition-all hover:shadow-2xl bg-white dark:bg-gray-900 w-full h-[360px] flex flex-col"
      >
        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden border-b-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 animate-pulse" />

        {/* Content Section - Flexible height */}
        <div className="p-5 bg-gray-50 dark:bg-gray-800/50 flex-1 flex flex-col">
          {/* Title */}
          <div className="h-6 w-3/4 mb-2 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          
          {/* Content Lines - Flexible growth */}
          <div className="space-y-2 mb-4 flex-1">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          </div>

          {/* Author Section */}
          <div className="flex items-center justify-between border-t border-gray-300 dark:border-gray-700 pt-4">
            <div className="flex items-center space-x-3">
              <div className="size-9 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse ring-2 ring-gray-300 dark:ring-gray-600" />
              <div className="space-y-2">
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
                <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
              </div>
            </div>
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          </div>
        </div>
      </Skeleton>
    ))}
  </div>
</div>
  )
}

export default LoadingDashboard
