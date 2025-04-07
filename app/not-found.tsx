import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-[calc(100vh-132px)] items-center justify-center bg-white px-6 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-xl border-2 border-gray-300 bg-gray-50 p-8 text-center shadow-md dark:border-gray-700 dark:bg-gray-800/50">
        {/* Header */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          404 - Page Not Found
        </h1>

        {/* Message */}
        <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
          Oops! It seems we can’t find the page you’re looking for. It might
          have been moved or deleted.
        </p>

        {/* Back Button */}
        <Link href="/">
          <Button
            variant="secondary"
            className="cursor-pointer border-2 border-blue-600 bg-blue-600 text-white transition-colors hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
