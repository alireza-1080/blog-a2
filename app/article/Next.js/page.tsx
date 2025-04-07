"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Rocket, Layers, Server, Globe } from "lucide-react";

const NextJsPage = () => {
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
          Next.js
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
            src="/articlesImages/Nextjs.png"
            fill
            alt="Next.js: Powering BlogA2"
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
                <Rocket className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Next.js Overview
              </h2>
              <p className="text-base">
                Next.js is the React-based framework I’ve chosen to build
                BlogA2, and it’s been a game-changer for this practice project.
                By extending React with server-side rendering, static site
                generation, and a streamlined development experience, Next.js
                has allowed me to create a fast, functional site that showcases
                my skills within the MERN stack.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Layers className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                What Is Next.js?
              </h2>
              <p className="text-base">
                Next.js takes React to the next level by adding powerful
                features out of the box. It’s a framework that simplifies
                building web applications with tools like:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Server-Side Rendering (SSR): Pages render on the server for
                  better performance and SEO.
                </li>
                <li>
                  Static Site Generation (SSG): Pre-builds pages at build time
                  for near-instant load speeds.
                </li>
                <li>
                  File-Based Routing: Drop a file in the pages folder, and
                  Next.js sets up the route automatically.
                </li>
                <li>
                  API Routes: Build backend endpoints right inside the app, no
                  separate server required.
                </li>
              </ul>
              <p className="mt-2">
                For BlogA2, Next.js serves as the frontend and part of the
                backend, working alongside MongoDB, Express.js, and Node.js to
                complete my MERN stack.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Server className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why I’m Using Next.js in BlogA2
              </h2>
              <p className="text-base">
                Next.js was a natural fit for BlogA2, and here’s why I went with
                it:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Performance Boost: BlogA2’s public articles—like my tech
                  posts—benefit from SSG, loading instantly for anyone visiting
                  the site. Private user panels use SSR to fetch data
                  dynamically, keeping things snappy.
                </li>
                <li>
                  Simplified Setup: Routing in BlogA2 is effortless. Pages like
                  /login or /dashboard are just files in the pages directory—no
                  manual configuration needed.
                </li>
                <li>
                  Full-Stack Power: I’ve used Next.js API routes to handle some
                  backend logic—like user authentication or article
                  saving—reducing my reliance on a separate Express.js server
                  for simple tasks.
                </li>
                <li>
                  MERN Integration: Next.js slots into my MERN stack seamlessly.
                  It runs on Node.js, talks to MongoDB via Express.js or API
                  routes, and powers the React frontend—all in one cohesive
                  package.
                </li>
                <li>
                  Portfolio Shine: Using Next.js in BlogA2 shows I can wield a
                  modern, in-demand framework, making my project stand out as a
                  practical showcase of my skills.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Globe className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why It Fits BlogA2 and Beyond
              </h2>
              <p className="text-base">
                For a practice site like BlogA2, Next.js strikes the perfect
                balance. It’s lightweight enough to set up quickly—I didn’t want
                to overcomplicate a demo—but robust enough to handle real
                features like user logins and article management. The
                public-facing tech articles benefit from static generation,
                while the private user experience stays dynamic and secure.
              </p>
              <p className="mt-2">
                Why Not Something Else? I could’ve stuck with plain React and a
                separate Express.js server, but Next.js cuts out extra setup.
                Its all-in-one approach let me focus on building BlogA2, not
                wrestling with configs. Alternatives like Remix exist, but
                Next.js’s maturity and community made it the safer bet for my
                portfolio piece.
              </p>
              <p className="mt-2">
                In short, Next.js is the engine driving BlogA2. It’s fast,
                flexible, and lets me showcase a modern MERN stack app with
                minimal fuss. From static public pages to dynamic user panels,
                it’s proven itself as the right tool for this project—and a
                skill I’ll carry into future ones.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default NextJsPage;
