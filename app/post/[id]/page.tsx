import React from "react";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import DeleteButton from "@/components/general/BlogPostCard/DeleteButton";

type Params = Promise<{ id: string }>;

type Data = {
  post: {
    id: string;
    authorId: string;
    content: string;
    createdAt: string;
    image: string;
    title: string;
    author: {
      id: string;
      image: string;
      role: string;
      username: string;
    };
  };
  userRole: "admin" | "user";
  userId: string;
};

const PostIdPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const data = await fetchPostById(id);

  if (!data.post) {
    return notFound();
  }

  const { post, userRole, userId } = data;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Back Button */}
      <Link href="/dashboard">
        <Button
          variant="secondary"
          className="mb-6 cursor-pointer border border-gray-300 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Back to posts
        </Button>
      </Link>

      {/* Header Section */}
      <div className="mt-6 mb-12 rounded-xl border-2 border-gray-300 bg-gray-50 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800/50">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>

        <div className="flex w-full items-center justify-between">
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
                className={`ml-1.5 text-xs ${
                  post.author.role === "admin"
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-green-600 dark:text-green-500"
                }`}
              >
                {post.author.role[0].toUpperCase() + post.author.role.slice(1)}
              </span>
            </div>
          </div>
          <time className="text-xs text-gray-500 dark:text-gray-400">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.createdAt))}
          </time>
        </div>
      </div>

      {/* Main Image */}
      <AspectRatio
        ratio={16 / 9}
        className="mb-12 w-full overflow-hidden rounded-xl border-2 border-gray-300 shadow-md dark:border-gray-700"
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
      <Card className="rounded-xl border-2 border-gray-300 bg-white py-0 shadow-md dark:border-gray-700 dark:bg-gray-900">
        <CardContent className="bg-gray-50 p-6 dark:bg-gray-800/50">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {post.content}
          </p>
        </CardContent>
      </Card>

      {/* Delete Button (Conditional) */}
      {(userId === post.authorId || userRole === "admin") && (
        <div className="mt-8">
          <DeleteButton articleId={post.id} />
        </div>
      )}
    </div>
  );
};

export default PostIdPage;

const fetchPostById = async (id: string) => {
  const cookieStore = await cookies();
  const auth_token: string = cookieStore.get("auth_token")?.value || "";

  const response = await fetch(
    "https://blog-a2.vercel.app/api/article/get-article-by-id",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ postId: id }),
    },
  );

  const data: Data = await response.json();

  return data;
};
