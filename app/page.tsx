'use client'
import React from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = React.useState<string>('')

  React.useEffect(() => {
    const fetchData = async () => {
      const postResponse = await axios.get('https://blog-a2.vercel.app/api', {
        withCredentials: true,
      })

      const post = postResponse.data

      setData(post[0].content)
    }

    fetchData()
  }, [])

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h1>{data}</h1>
      </div>
    </div>
  )
}

export default Home
