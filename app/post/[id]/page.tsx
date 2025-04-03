import React from 'react'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent } from '@/components/ui/card'

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
  userRole: 'admin' | 'user',
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
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href="/">
        <Button variant={'secondary'} className="cursor-pointer">
          Back to posts
        </Button>
      </Link>

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <AspectRatio ratio={1 / 1} className="size-10 overflow-hidden rounded-full">
              <Image
                src={`/${post.author.image}`}
                fill
                alt={`@${post.author.username}`}
                className="object-cover"
                priority
              ></Image>
            </AspectRatio>
            <p className="font-medium">{`@${post.author.username}`}</p>
          </div>
          <p className="text-sm text-gray-500">
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(new Date(post.createdAt))}
          </p>
        </div>
      </div>

      <AspectRatio ratio={16 / 9} className="h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image src={`/${post.image}`} fill alt={post.title} priority></Image>
      </AspectRatio>

      <Card>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
      </Card>

      {userId === post.authorId || userRole === 'admin' && (
        <div className='mx-auto w-1/2 mt-4'>
          <Button variant={'destructive'} className='w-full '>Delete Post</Button>
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
