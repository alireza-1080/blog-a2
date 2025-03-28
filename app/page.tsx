import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h1>Posts will be here</h1>
      </div>
      <Image
        src={'/usersAvatars/1743081367054-828210626.jpg'}
        alt="test"
        width={100}
        height={100}
        className='rounded-full'
      ></Image>
    </div>
  )
}

export default Home
