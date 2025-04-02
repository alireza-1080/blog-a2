import { Button } from '@/components/ui/button'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

type Author = {
  username: string,
  role: string,
  image: string,
  id: string
}

type Post = {
  id: string
  title: string
  content: string
  image: string
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

  const posts: Post[] | []= postsData.blogPosts

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link href={'/dashboard/create'}>
          <Button className="cursor-pointer">Create Post</Button>
        </Link>
      </div>
      {posts.length && posts.map((post, index) => {
        return (<div key={post.id}>
          <h2>{`Article #${index+1}`}</h2>
          <h2>{post.title}</h2>
          <h2>{post.content}</h2>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>)
      })}
    </div>
  )
}

export default Dashboard
