import React from 'react'
import posts from '@/myPosts'
import BlogPostCardHome from '@/components/general/BlogPostCardHome'

const Home = async () => {
  await new Promise((resolver) => setTimeout(resolver, 1000))
  return (
    <div className="py-8 container mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold tracking-tight mb-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-md">
        Latest Posts
      </h1>

      {/* Posts Grid */}
      {posts.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
          {posts.map((post) => (
            <BlogPostCardHome post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-center py-6">No posts available yet.</p>
      )}
    </div>
  )
}

export default Home
