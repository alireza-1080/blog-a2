import React from 'react'
import Test from '@/components/Test'

const Home = () => {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h1>Posts will be here</h1>
      </div>

      <Test />
    </div>
  )
}

export default Home
