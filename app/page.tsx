'use client'
import React from 'react'

const Home = () => {
  const setTestCookie = async () => {
    await fetch('https://blog-a2.vercel.app/api/test', {
      credentials: 'include',
    })
  }

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h1>Posts will be here</h1>
        <button onClick={setTestCookie}>Set cookie</button>
      </div>
    </div>
  )
}

export default Home
