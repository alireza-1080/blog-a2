import Image from "next/image";
import Link from "next/link";
import React from "react";

type Author = {
  username: string;
  role: string;
  image: string;
  id: string;
};

type Post = {
  id: string;
  title: string;
  content: string;
  image: string;
  imagePath: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
};

const BlogPostCardHome = ({ post }: { post: Post }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-md transition-all hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900">
      <Link href={`/article/${post.title}`} className="block h-full w-full">
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden border-b-2 border-gray-300 dark:border-gray-700">
          <Image
            src={`/${post.image}`}
            fill
            alt={post.title}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="bg-gray-50 p-5 dark:bg-gray-800/50">
          <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
            {post.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {post.content}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between border-t border-gray-300 pt-4 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="relative size-9 overflow-hidden rounded-full ring-2 ring-gray-300 dark:ring-gray-600">
                <Image
                  src={`/${post.author.image}`}
                  fill
                  alt={post.author.username}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {post.author.username}
                </p>
                <h3
                  className={`text-xs font-medium ${
                    post.author.role === "admin"
                      ? "text-blue-600 dark:text-blue-500"
                      : "text-green-600 dark:text-green-500"
                  }`}
                >
                  {`@${post.author.role[0].toUpperCase()}${post.author.role.slice(1)}`}
                </h3>
              </div>
            </div>
            <time className="text-xs text-gray-500 dark:text-gray-400">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(new Date(post.createdAt))}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCardHome;
