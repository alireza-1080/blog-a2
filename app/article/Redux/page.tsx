'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Box, Layers, Rocket, Globe } from 'lucide-react';

const ReduxPage = () => {
  const formattedDate = 'April 4, 2025';

  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <Link href="/" aria-label="Back to posts">
        <Button
          variant="secondary"
          className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-300 dark:border-gray-700 cursor-pointer"
        >
          Back to Posts
        </Button>
      </Link>

      <header className="mb-12 mt-6 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md">
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">Redux</h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-9 h-9 overflow-hidden rounded-full ring-2 ring-gray-300 dark:ring-gray-600">
              <Image
                src="/alireza.jpg"
                width={36}
                height={36}
                alt="Profile picture of alireza"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">@alireza</span>
              <span className="text-xs ml-1.5 text-blue-600 dark:text-blue-500">Admin</span>
            </div>
          </div>
          <time dateTime="2025-04-04T12:43:15.803+00:00" className="text-xs text-gray-500 dark:text-gray-400">
            {formattedDate}
          </time>
        </div>
      </header>

      <figure className="mb-12">
        <AspectRatio
          ratio={16 / 9}
          className="rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-700 shadow-md"
        >
          <Image
            src="/articlesImages/Redux.png"
            fill
            alt="Redux: Predictable State for BlogA2 and Beyond"
            className="object-cover"
            priority
          />
        </AspectRatio>
      </figure>

      <Card className="bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl shadow-md py-0 overflow-hidden">
        <CardContent className="p-6 bg-gray-50 dark:bg-gray-800/50 py-12">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Box className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Redux Overview
              </h2>
              <p className="text-base">
                Redux is a predictable state management library that I’ve explored as part of my web development toolkit. Designed to work seamlessly with JavaScript frameworks like React, it provides a centralized way to manage an application’s state, making it easier to track data flow and debug issues. While BlogA2 relies on simpler state management for now, Redux is a tool I’m keen to leverage for more complex projects—or even to enhance BlogA2 down the line.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Layers className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                What Is Redux?
              </h2>
              <p className="text-base">
                Redux is an open-source library that helps manage the state (data) of an application in a single, unified store. Instead of scattering state across components (like React’s local useState), Redux keeps everything in one place, accessible to any part of your app. It follows three core principles:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Single Source of Truth: All app data lives in one store.
                </li>
                <li>
                  State Is Read-Only: You can’t change state directly—you dispatch “actions” to describe what should happen.
                </li>
                <li>
                  Changes via Pure Functions: Reducers (pure functions) take the current state and an action, then return a new state.
                </li>
              </ul>
              <p className="mt-2">
                For a React app like BlogA2, Redux pairs with libraries like react-redux to connect the store to components, ensuring a smooth flow of data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why I’m Interested in Redux
              </h2>
              <p className="text-base">
                Redux has caught my attention for several reasons, even if BlogA2’s current scope doesn’t demand it:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Predictable State: In BlogA2, users log in and manage private articles. Redux could make it easier to track things like authentication status or article lists across the app, avoiding prop-drilling or messy state logic.
                </li>
                <li>
                  Scalability: BlogA2 is a small practice project, but if I added features—like public comments or real-time updates—Redux would keep state manageable as complexity grows.
                </li>
                <li>
                  Debugging Power: Redux’s tools (like Redux DevTools) let you inspect every state change and even time-travel through actions. For a developer like me, that’s invaluable for troubleshooting.
                </li>
                <li>
                  MERN Fit: Since BlogA2 uses React in the MERN stack, Redux slots in naturally, enhancing how the frontend handles data from the Express.js backend.
                </li>
                <li>
                  Industry Standard: Redux is widely used (though newer tools like Context API or Zustand compete). Learning it strengthens my skills and portfolio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why Not Use It in BlogA2 Yet and Alternatives
              </h2>
              <p className="text-base">
                BlogA2 is simple—users log in, publish articles, and view them in a private panel. React’s built-in useState and useEffect handle this fine for now. Redux shines in larger apps with shared state across many components, so adding it to BlogA2 might be overkill. Plus, it comes with boilerplate (actions, reducers, etc.) that could slow down a quick practice project.
              </p>
              <p className="mt-2">
                That said, if BlogA2 grew—say, with multiple user roles or real-time features—Redux could step in to keep things organized.
              </p>
              <p className="mt-2">
                Why Not Something Else?
                React’s Context API or newer libraries like Recoil or Zustand offer lighter alternatives. For BlogA2, Context might’ve been enough, but Redux’s robustness and ecosystem (like middleware for async actions) make it a heavier hitter for complex needs.
              </p>
              <p className="mt-2">
                In short, Redux is a powerhouse for state management that I’m excited to master. It’s overkill for BlogA2’s current minimalism, but it’s on my radar for projects where state complexity calls for a centralized, predictable solution. As I grow as a developer, it’s a tool I’ll keep in my back pocket.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default ReduxPage;