import Image from 'next/image'
import React from 'react'

const AuthLoading = () => {
  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center py-12 px-6 bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center gap-6 max-w-md w-full bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-md animate-pulse">
        {/* Padlock Image */}
        <div className="relative w-32 h-32">
          <Image
            src="/png/padlock-light.png"
            width={128}
            height={128}
            alt="Loading authentication"
            className="object-contain animate-spin-slow"
            priority
          />
        </div>

        {/* Loading Message */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Authenticating...
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Please wait while we secure your session.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthLoading