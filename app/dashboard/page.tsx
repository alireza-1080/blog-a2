import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'
import BlogPostCard from '@/components/general/BlogPostCard'

type Author = {
  username: string
  role: string
  image: string
  id: string
}

type Post = {
  id: string
  title: string
  content: string
  image: string
  imagePath: string
  authorId: string
  createdAt: string
  updatedAt: string
  author: Author
}

const Dashboard = async () => {
  const cookieStore = await cookies()
  const auth_token = cookieStore.get('auth_token')?.value
  const postsResponse = await fetch('https://blog-a2.vercel.app/api/article/get-articles-by-user-id', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${auth_token}`,
    },
    credentials: 'include',
  })

  const postsData = await postsResponse.json()

  const posts: Post[] | [] = postsData.blogPosts

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-md flex items-center justify-between">
        Your Blog Articles
        <Link href={'/dashboard/create'}>
          <Button className="cursor-pointer">Create Post</Button>
        </Link>
      </h2>

      {posts.length !== 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => {
            return <BlogPostCard post={post} key={post.id} />
          })}
        </div>
      )}
    </div>
  )
}

export default Dashboard
