import React from "react";
import posts from "@/myPosts";
import BlogPostCardHome from "@/components/general/BlogPostCardHome";

const Home = async () => {
  await new Promise((resolver) => setTimeout(resolver, 1000));
  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <h1 className="mb-10 rounded-xl border-2 border-gray-300 bg-gray-50 p-4 text-3xl font-bold tracking-tight text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100">
        Latest Posts
      </h1>

      {/* Posts Grid */}
      {posts.length !== 0 ? (
        <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCardHome post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <p className="py-6 text-center text-gray-600 dark:text-gray-400">
          No posts available yet.
        </p>
      )}
    </div>
  );
};

export default Home;
