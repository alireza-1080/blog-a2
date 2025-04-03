import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

const BlogPostCard = ({ post }: { post: Post }) => {
  console.log('createdAt value:', post.createdAt, typeof post.createdAt)
  return (
    <div className="group relative overflow-hidden rounded-lg border border-r-gray-200 shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${post.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={`/${post.image}`}
            fill
            alt={`${post.title}`}
            className="transition-transform duration-300 group-hover:scale-105"
          ></Image>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
          <p className="mb-4 text-sm line-clamp-2">{post.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={`/${post.author.image}`}
                  fill
                  alt={`${post.author.username}`}
                  className="object-cover"
                ></Image>
              </div>
              <p className="text-sm font-medium">{`${post.author.username}`}</p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium ${post.author.role === 'admin' ? 'text-blue-500' : 'text-green-500'}`}
              >{`@${post.author.role[0].toUpperCase()}${post.author.role.slice(1)}`}</h3>
            </div>
            <time className="text-xs">
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }).format(new Date(post.createdAt))}
            </time>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogPostCard
