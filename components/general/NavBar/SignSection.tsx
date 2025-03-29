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
          <Link href={'/auth'}>
            <Button className='scale-90 sm:scale-100'>Sign in</Button>
          </Link>
          <Link href={'/auth?mode=signup'}>
            <Button variant={'secondary'} className='scale-90 sm:scale-100'>Sign up</Button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default SignSection
