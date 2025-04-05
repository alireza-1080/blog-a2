'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Rocket, Layers, Server, Globe } from 'lucide-react';

const NextJsPage = () => {
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
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">Next.js</h1>

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
            src="/articlesImages/Nextjs.png"
            fill
            alt="Next.js: Turbocharging React for BlogA2 and Beyond"
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
                <Rocket className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Next.js Overview
              </h2>
              <p className="text-base">
                Next.js is a powerful React-based framework that I’ve explored as part of my journey in web development. While BlogA2 relies on the core MERN stack (MongoDB, Express.js, React, Node.js), Next.js is a tool I’ve come to appreciate for its ability to supercharge React projects with features like server-side rendering, static site generation, and a streamlined development experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Layers className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                What Is Next.js?
              </h2>
              <p className="text-base">
                Next.js is essentially React with extra powers. Built on top of React, it simplifies common web development tasks by providing a ready-to-use structure for building applications. Out of the box, it offers features like:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Server-Side Rendering (SSR): Pages are rendered on the server, improving performance and SEO.
                </li>
                <li>
                  Static Site Generation (SSG): Pre-builds pages at build time for lightning-fast load speeds.
                </li>
                <li>
                  File-Based Routing: No need to manually set up routes—just create a file in the pages folder, and Next.js handles the rest.
                </li>
                <li>
                  API Routes: Build backend endpoints right inside your Next.js app, reducing the need for a separate server.
                </li>
              </ul>
              <p className="mt-2">
                It’s still JavaScript and React at its core, but Next.js takes it to the next level by solving problems that raw React alone doesn’t address.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Server className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why I’m Interested in Next.js
              </h2>
              <p className="text-base">
                While BlogA2 sticks to a traditional MERN setup, Next.js has caught my attention for several reasons:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Better Performance: For a site like BlogA2, where users view articles, Next.js’s SSR or SSG could make pages load faster and rank higher on search engines—something pure client-side React struggles with.
                </li>
                <li>
                  Simplified Workflow: Setting up routing and rendering in BlogA2 took extra effort with React and Express.js. Next.js handles these natively, letting me focus on building features instead of configuring tools.
                </li>
                <li>
                  Full-Stack in One: With API routes, I could ditch the separate Express.js server and keep everything—frontend and backend—in one Next.js app. For small projects, that’s a huge time-saver.
                </li>
                <li>
                  Scalability: BlogA2 is a practice site, but if I wanted to turn it into a public platform, Next.js’s built-in optimizations would make scaling easier without rewriting everything.
                </li>
                <li>
                  Learning and Growth: Next.js is hot in the industry, used by companies like Netflix and GitHub. Mastering it adds a cutting-edge skill to my toolkit and keeps me competitive.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                How It Could Fit BlogA2 and Beyond
              </h2>
              <p className="text-base">
                Imagine BlogA2 with Next.js: instead of React fetching data client-side, Next.js could pre-render article pages on the server or at build time, making the site feel instant. Public articles (like my tech posts) could be statically generated for speed, while user-specific content (like private article panels) could use SSR to pull from MongoDB dynamically. API routes could handle login and publishing logic, all within the same codebase.
              </p>
              <p className="mt-2">
                For now, BlogA2 sticks to MERN because it’s a straightforward showcase of my core skills. But Next.js is on my radar for future experiments—it’s like MERN with a turbo boost.
              </p>
              <p className="mt-2">
                Why Not Use It Everywhere?
                Next.js isn’t perfect for every scenario. For BlogA2, a separate Express.js backend gave me more control over the server logic, which I wanted to practice. Next.js abstracts some of that away, which is great for speed but less ideal when I’m focusing on learning raw Node.js and Express.js. It’s a trade-off: simplicity versus granularity.
              </p>
              <p className="mt-2">
                In short, Next.js is a framework I’m excited about. It takes React—already a favorite of mine—and adds tools to make apps faster, more SEO-friendly, and easier to build. While BlogA2 sticks to the MERN basics, Next.js is a natural next step for bigger, bolder projects down the road.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default NextJsPage;