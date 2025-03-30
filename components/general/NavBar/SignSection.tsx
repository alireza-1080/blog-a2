'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const SignSection = () => {
  const path = usePathname()
  const isItAuthPage = path.includes('auth')
  return (
    <>
      {!isItAuthPage ? (
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href={'/auth'} className="cursor-pointer">
            <Button className="scale-90 sm:scale-100 cursor-pointer">Sign in</Button>
          </Link>
          <Link href={'/auth?mode=signup'} className="cursor-pointer">
            <Button variant={'secondary'} className="scale-90 sm:scale-100 cursor-pointer">
              Sign up
            </Button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default SignSection
