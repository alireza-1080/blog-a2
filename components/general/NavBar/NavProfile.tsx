import { Button } from '@/components/ui/button'
import React from 'react'
import toast from 'react-hot-toast'
import { mutate } from 'swr'
import { useRouter } from 'next/navigation'

const NavProfile = () => {

  const router = useRouter()

  const handleLogOut = async () => {

    await fetch('/api/user/logout', {
      method: 'POST',
      credentials: 'include'
    })

    toast.success('User logged out successfully')

    mutate('/api/user/is-logged-in')

    router.refresh()
  }

  return (
    <div>
      <Button onClick={handleLogOut} variant={'outline'} className='cursor-pointer'>
        <h3 className='text-red-500'>Logout</h3>
      </Button>
    </div>
  )
}

export default NavProfile