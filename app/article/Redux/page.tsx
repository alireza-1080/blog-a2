"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Box, Layers, Rocket, Globe } from "lucide-react";

const ReduxPage = () => {
  const formattedDate = "April 4, 2025";

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" aria-label="Back to posts">
        <Button
          variant="secondary"
          className="mb-6 cursor-pointer border border-gray-300 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Back to Posts
        </Button>
      </Link>

      <header className="mt-6 mb-12 rounded-xl border-2 border-gray-300 bg-gray-50 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800/50">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Redux
        </h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-gray-300 dark:ring-gray-600">
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
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                @alireza
              </span>
              <span className="ml-1.5 text-xs text-blue-600 dark:text-blue-500">
                Admin
              </span>
            </div>
          </div>
          <time
            dateTime="2025-04-04T12:43:15.803+00:00"
            className="text-xs text-gray-500 dark:text-gray-400"
          >
            {formattedDate}
          </time>
        </div>
      </header>

      <figure className="mb-12">
        <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden rounded-xl border-2 border-gray-300 shadow-md dark:border-gray-700"
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

      <Card className="overflow-hidden rounded-xl border-2 border-gray-300 bg-white py-0 shadow-md dark:border-gray-700 dark:bg-gray-900">
        <CardContent className="bg-gray-50 p-6 py-12 dark:bg-gray-800/50">
          <div className="space-y-8 leading-relaxed whitespace-pre-wrap text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Box className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Redux Overview
              </h2>
              <p className="text-base">
                Redux is a predictable state management library that I’ve
                explored as part of my web development toolkit. Designed to work
                seamlessly with JavaScript frameworks like React, it provides a
                centralized way to manage an application’s state, making it
                easier to track data flow and debug issues. While BlogA2 relies
                on simpler state management for now, Redux is a tool I’m keen to
                leverage for more complex projects—or even to enhance BlogA2
                down the line.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Layers className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                What Is Redux?
              </h2>
              <p className="text-base">
                Redux is an open-source library that helps manage the state
                (data) of an application in a single, unified store. Instead of
                scattering state across components (like React’s local
                useState), Redux keeps everything in one place, accessible to
                any part of your app. It follows three core principles:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Single Source of Truth: All app data lives in one store.
                </li>
                <li>
                  State Is Read-Only: You can’t change state directly—you
                  dispatch “actions” to describe what should happen.
                </li>
                <li>
                  Changes via Pure Functions: Reducers (pure functions) take the
                  current state and an action, then return a new state.
                </li>
              </ul>
              <p className="mt-2">
                For a React app like BlogA2, Redux pairs with libraries like
                react-redux to connect the store to components, ensuring a
                smooth flow of data.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Rocket className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why I’m Interested in Redux
              </h2>
              <p className="text-base">
                Redux has caught my attention for several reasons, even if
                BlogA2’s current scope doesn’t demand it:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Predictable State: In BlogA2, users log in and manage private
                  articles. Redux could make it easier to track things like
                  authentication status or article lists across the app,
                  avoiding prop-drilling or messy state logic.
                </li>
                <li>
                  Scalability: BlogA2 is a small practice project, but if I
                  added features—like public comments or real-time updates—Redux
                  would keep state manageable as complexity grows.
                </li>
                <li>
                  Debugging Power: Redux’s tools (like Redux DevTools) let you
                  inspect every state change and even time-travel through
                  actions. For a developer like me, that’s invaluable for
                  troubleshooting.
                </li>
                <li>
                  MERN Fit: Since BlogA2 uses React in the MERN stack, Redux
                  slots in naturally, enhancing how the frontend handles data
                  from the Express.js backend.
                </li>
                <li>
                  Industry Standard: Redux is widely used (though newer tools
                  like Context API or Zustand compete). Learning it strengthens
                  my skills and portfolio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Globe className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why Not Use It in BlogA2 Yet and Alternatives
              </h2>
              <p className="text-base">
                BlogA2 is simple—users log in, publish articles, and view them
                in a private panel. React’s built-in useState and useEffect
                handle this fine for now. Redux shines in larger apps with
                shared state across many components, so adding it to BlogA2
                might be overkill. Plus, it comes with boilerplate (actions,
                reducers, etc.) that could slow down a quick practice project.
              </p>
              <p className="mt-2">
                That said, if BlogA2 grew—say, with multiple user roles or
                real-time features—Redux could step in to keep things organized.
              </p>
              <p className="mt-2">
                Why Not Something Else? React’s Context API or newer libraries
                like Recoil or Zustand offer lighter alternatives. For BlogA2,
                Context might’ve been enough, but Redux’s robustness and
                ecosystem (like middleware for async actions) make it a heavier
                hitter for complex needs.
              </p>
              <p className="mt-2">
                In short, Redux is a powerhouse for state management that I’m
                excited to master. It’s overkill for BlogA2’s current
                minimalism, but it’s on my radar for projects where state
                complexity calls for a centralized, predictable solution. As I
                grow as a developer, it’s a tool I’ll keep in my back pocket.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default ReduxPage;
