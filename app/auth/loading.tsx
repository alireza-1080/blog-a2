import Image from "next/image";
import React from "react";

const AuthLoading = () => {
  return (
    <div className="flex min-h-[calc(100vh-96px)] items-center justify-center bg-white px-6 py-12 dark:bg-gray-900">
      <div className="flex w-full max-w-md animate-pulse flex-col items-center gap-6 rounded-xl border-2 border-gray-300 bg-gray-50 p-8 shadow-md dark:border-gray-700 dark:bg-gray-800/50">
        {/* Padlock Image */}
        <div className="relative h-32 w-32">
          <Image
            src="/png/padlock-light.png"
            width={128}
            height={128}
            alt="Loading authentication"
            className="animate-spin-slow object-contain"
            priority
          />
        </div>

        {/* Loading Message */}
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Authenticating...
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Please wait while we secure your session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLoading;
