import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center px-6 bg-white dark:bg-gray-900 h-[calc(100vh-132px)]">
      <div className="max-w-md w-full text-center bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-md">
        {/* Header */}
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">
          404 - Page Not Found
        </h1>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Oops! It seems we can’t find the page you’re looking for. It might have been moved or deleted.
        </p>

        {/* Back Button */}
        <Link href="/">
          <Button 
            variant="secondary"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white border-2 border-blue-600 dark:border-blue-500 transition-colors"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
