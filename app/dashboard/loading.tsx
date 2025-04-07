import React from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingDashboard = () => {
  return (
    <div>
      <h2 className="mb-10 flex items-center justify-between rounded-xl border-2 border-gray-300 bg-gray-50 p-4 text-3xl font-bold tracking-tight text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100">
        Your Blog Articles
        <Button className="cursor-pointer">Create Post</Button>
      </h2>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            key={index}
            className="group relative h-fit w-full overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-md transition-all hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          >
            {/* Image Section */}
            <div className="relative h-56 w-full animate-pulse overflow-hidden border-b-2 border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800" />

            {/* Content Section */}
            <div className="bg-gray-50 p-5 dark:bg-gray-800/50">
              {/* Title */}
              <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

              {/* Content Lines */}
              <div className="mb-4 space-y-2">
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

// <div className="py-8">
//       {/* Header */}
//       <h2 className="text-3xl font-bold tracking-tight mb-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-md flex items-center justify-between">
//         Your Blog Articles
//         <Button className="cursor-pointer">Create Post</Button>
//       </h2>

//       {/* Articles Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <Skeleton
//             key={index}
//             className="group relative overflow-hidden rounded-xl border-2 border-gray-300 dark:border-gray-700 shadow-md transition-all hover:shadow-2xl bg-white dark:bg-gray-900 w-full h-fit"
//           >
//             {/* Image Section */}
//             <div className="relative h-56 w-full overflow-hidden border-b-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 animate-pulse" />

//             {/* Content Section */}
//             <div className="p-5 bg-gray-50 dark:bg-gray-800/50">
//               {/* Title */}
//               <div className="h-6 w-3/4 mb-2 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />

//               {/* Content Lines */}
//               <div className="space-y-2 mb-4">
//                 <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
//                 <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
//               </div>

//               {/* Author Section */}
//               <div className="flex items-center justify-between border-t border-gray-300 dark:border-gray-700 pt-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="size-9 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse ring-2 ring-gray-300 dark:ring-gray-600" />
//                   <div className="space-y-2">
//                     <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
//                     <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
//                   </div>
//                 </div>
//                 <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
//               </div>
//             </div>
//           </Skeleton>
//         ))}
//       </div>
//     </div>
