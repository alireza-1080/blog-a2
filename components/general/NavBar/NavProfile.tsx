import { Button } from '@/components/ui/button'
import React from 'react'
import toast from 'react-hot-toast'
import { mutate } from 'swr'

const NavProfile = () => {

  const handleLogOut = async () => {

    await fetch('/api/user/logout', {
      method: 'POST',
      credentials: 'include'
    })

    mutate('/api/user/is-logged-in')
    toast.success('User logged out successfully')
  }

  return (
    <div>
      <Button onClick={handleLogOut} variant={'destructive'} className='cursor-pointer'>Logout</Button>
    </div>
  )
}

export default NavProfile