import React from 'react'
import toast from 'react-hot-toast'
import { mutate } from 'swr'
import { useRouter } from 'next/navigation'
import { UserType } from '@/utils/getUser'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const NavProfile = ({ user: userInit }: { user: UserType | null }) => {
  const router = useRouter()

  const [user, setUser] = React.useState(userInit)
  const [imageUrl, setImageUrl] = React.useState<string>(userInit?.image ? `/${userInit?.image}` : '/png/user.png')

  const userFetcher = async (url: string) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      cache: 'no-store',
    })

    const data = await response.json()

    setUser(data.user)
  }

  useSWR('/api/user/get-me', userFetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 0,
  })

  const handleLogOut = async () => {
    await fetch('/api/user/logout', {
      method: 'POST',
      credentials: 'include',
    })

    toast.success('User logged out successfully')

    mutate('/api/user/is-logged-in')
    mutate('/api/user/get-me')

    router.refresh()
  }

  React.useEffect(() => {
    setImageUrl(user?.image ? `/${user?.image}` : '/png/user.png')
  }, [user])

  React.useEffect(() => {}, [imageUrl])

  return (
    <div className="flex items-center gap-2">
      <Link href={'/dashboard'}>
        <h3 className="hidden sm:block cursor-pointer">
          <span className="text-blue-500 font-extrabold">@</span>
          {user?.username}
        </h3>
      </Link>
      <Link href={'/dashboard'}>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt={`${user?.username} ? ${user?.username} : 'user'`}
          priority
          className="w-9 h-9 rounded-full cursor-pointer border-2 border-blue-500"
        ></Image>
      </Link>
      <Image
        src={'/png/power.png'}
        width={100}
        height={100}
        alt="logout"
        className="w-9 h-9 rounded-full cursor-pointer"
        onClick={handleLogOut}
      ></Image>
    </div>
  )
}

export default NavProfile
