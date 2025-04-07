import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingDashboard = () => {
  return (
    <div className="py-8">
      {/* Header */}
      <h1 className="mb-10 rounded-xl border-2 border-gray-300 bg-gray-50 p-4 text-3xl font-bold tracking-tight text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100">
        Latest Posts
      </h1>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="group relative flex h-[360px] w-full flex-col overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-md transition-all hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          >
            {/* Image Section */}
            <div className="relative h-56 w-full animate-pulse overflow-hidden border-b-2 border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800" />

            {/* Content Section - Flexible height */}
            <div className="flex flex-1 flex-col bg-gray-50 p-5 dark:bg-gray-800/50">
              {/* Title */}
              <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

              {/* Content Lines - Flexible growth */}
              <div className="mb-4 flex-1 space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              </div>

              {/* Author Section */}
              <div className="flex items-center justify-between border-t border-gray-300 pt-4 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="size-9 animate-pulse rounded-full bg-gray-200 ring-2 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600" />
                  <div className="space-y-2">
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                    <div className="h-3 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                  </div>
                </div>
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
    </div>
  );
};

export default LoadingDashboard;
