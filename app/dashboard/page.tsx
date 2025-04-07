import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/general/BlogPostCard";

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

const Dashboard = async () => {
  const cookieStore = await cookies();
  const auth_token = cookieStore.get("auth_token")?.value;
  const postsResponse = await fetch(
    "https://blog-a2.vercel.app/api/article/get-articles-by-user-id",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
      credentials: "include",
    },
  );

  const postsData = await postsResponse.json();

  const posts: Post[] | [] = postsData.blogPosts;

  return (
    <div>
      <h2 className="mb-10 flex items-center justify-between rounded-xl border-2 border-gray-300 bg-gray-50 p-4 text-3xl font-bold tracking-tight text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100">
        Your Blog Articles
        <Link href={"/dashboard/create"}>
          <Button className="cursor-pointer">Create Post</Button>
        </Link>
      </h2>

      {posts.length !== 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            return <BlogPostCard post={post} key={post.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
