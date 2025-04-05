import React from 'react'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent } from '@/components/ui/card'
import DeleteButton from '@/components/general/BlogPostCard/DeleteButton'

type Params = Promise<{ id: string }>

type Data = {
  post: {
    id: string
    authorId: string
    content: string
    createdAt: string
    image: string
    title: string
    author: {
      id: string
      image: string
      role: string
      username: string
    }
  }
  userRole: 'admin' | 'user'
  userId: string
}

const PostIdPage = async ({ params }: { params: Params }) => {
  const { id } = await params

  const data = await fetchPostById(id)

  if (!data.post) {
    return notFound()
  }

  const { post, userRole, userId } = data

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
  {/* Back Button */}
  <Link href="/dashboard">
    <Button 
      variant="secondary" 
      className="mb-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-300 dark:border-gray-700"
    >
      Back to posts
    </Button>
  </Link>

  {/* Header Section */}
  <div className="mb-12 mt-6 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md">
    <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">
      {post.title}
    </h1>

    <div className="w-full flex items-center justify-between">
  <div className="flex items-center space-x-2">
    <div className="relative size-9 overflow-hidden rounded-full ring-2 ring-gray-300 dark:ring-gray-600">
      <Image
        src={`/${post.author.image}`}
        width={100}
        height={100}
        alt={`@${post.author.username}`}
        className="object-cover"
        priority
      />
    </div>
    <div>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {`@${post.author.username}`}
      </span>
      <span 
        className={`text-xs ml-1.5 ${
          post.author.role === 'admin' 
            ? 'text-blue-600 dark:text-blue-500' 
            : 'text-green-600 dark:text-green-500'
        }`}
      >
        {post.author.role[0].toUpperCase() + post.author.role.slice(1)}
      </span>
    </div>
  </div>
  <time className="text-xs text-gray-500 dark:text-gray-400">
    {new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(post.createdAt))}
  </time>
</div>
  </div>

  {/* Main Image */}
  <AspectRatio 
    ratio={16 / 9} 
    className="w-full mb-12 rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-700 shadow-md"
  >
    <Image 
      src={`/${post.image}`} 
      fill 
      alt={post.title} 
      className="object-cover"
      priority
    />
  </AspectRatio>

  {/* Content */}
  <Card className="bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl shadow-md py-0">
    <CardContent className="p-6 bg-gray-50 dark:bg-gray-800/50">
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {post.content}
      </p>
    </CardContent>
  </Card>

  {/* Delete Button (Conditional) */}
  {(userId === post.authorId || userRole === 'admin') && (
    <div className="mt-8">
      <DeleteButton articleId={post.id} />
    </div>
  )}
</div>
  )
}

export default PostIdPage

const fetchPostById = async (id: string) => {
  const cookieStore = await cookies()
  const auth_token: string = cookieStore.get('auth_token')?.value || ''

  const response = await fetch('https://blog-a2.vercel.app/api/article/get-article-by-id', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${auth_token}`,
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ postId: id }),
  })

  const data: Data = await response.json()

  return data
}
