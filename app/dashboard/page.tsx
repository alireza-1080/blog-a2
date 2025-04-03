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
  author: Author
  createdAt: Date
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
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link href={'/dashboard/create'}>
          <Button className="cursor-pointer">Create Post</Button>
        </Link>
      </div>

      {posts.length && (
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
