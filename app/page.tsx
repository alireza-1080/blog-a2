// import React from 'react'

// const Home = async () => {
//   const postResponse = await fetch('https://blog-a2.vercel.app/api', {
//     credentials: 'include',
//     cache: 'no-store',
//   })

//   const post = await postResponse.json()

//   console.log(post[0])

//   return (
//     <div className="py-6">
//       <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <h1>{post[0].content}</h1>
//       </div>
//     </div>
//   )
// }

// export default Home
'use client'
import React from 'react'

const Page = () => {
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://blog-a2.vercel.app/api', {
          credentials: 'include',
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log('Fetched data:', data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return <div>page</div>
}

export default Page