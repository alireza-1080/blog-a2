'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Server, Code, Rocket, Layers } from 'lucide-react';

const NodeJsPage = () => {
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
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">Node.js</h1>

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
            src="/articlesImages/Nodejs.png"
            fill
            alt="Node.js: The Engine Driving BlogA2"
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
                <Server className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Node.js Overview
              </h2>
              <p className="text-base">
                Here’s an English article about Node.js, written for your website based on your request:
              </p>
              <p className="mt-2">
                Node.js: The Engine Behind BlogA2
                Node.js is a JavaScript runtime that I’ve used to power the server-side logic of BlogA2. Built on Chrome’s V8 JavaScript engine, it allows developers to run JavaScript outside the browser—on the server—which makes it a cornerstone of modern web development. For BlogA2, Node.js ties everything together, and here’s why I chose it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                What Is Node.js?
              </h2>
              <p className="text-base">
                Node.js is all about bringing JavaScript to the backend. Traditionally, JavaScript was confined to the client side—think interactive buttons or form validation in your browser. Node.js changes that by letting you write server-side code in JavaScript, handling tasks like processing requests, managing databases, or serving files.
              </p>
              <p className="mt-2">
                What makes Node.js special is its event-driven, non-blocking architecture. Instead of waiting for one task to finish before starting another (like traditional servers), it handles multiple operations at once. This makes it fast and efficient, even for a small project like BlogA2.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why I’m Using Node.js in BlogA2
              </h2>
              <p className="text-base">
                Node.js was a no-brainer for BlogA2, and here’s why it fits so well:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  JavaScript Everywhere: Since I’m already using JavaScript for the frontend with React, Node.js lets me stick to one language across the entire stack. This consistency speeds up development and reduces the learning curve.
                </li>
                <li>
                  MERN Stack Foundation: Node.js is the “N” in MERN (MongoDB, Express.js, React, Node.js). It works hand-in-hand with Express.js to build the backend, connects to MongoDB for data, and serves content to the React frontend seamlessly.
                </li>
                <li>
                  Lightweight and Fast: BlogA2 doesn’t need a heavy server setup—just something to handle user logins and article storage. Node.js is lightweight enough for this scale but powerful enough to grow if I ever expand the project.
                </li>
                <li>
                  NPM Ecosystem: Node.js comes with npm, the world’s largest package manager. For BlogA2, I used packages like Express.js and Mongoose (for MongoDB) to add functionality quickly without reinventing the wheel.
                </li>
                <li>
                  Portfolio Boost: Node.js is a must-know technology in the industry. Using it in BlogA2 sharpens my backend skills and shows I can build full-stack apps, which is a big plus for my portfolio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Layers className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                How It Works in BlogA2 and Beyond
              </h2>
              <p className="text-base">
                Node.js is the engine that keeps BlogA2 running. It powers the server, where Express.js lives, and handles all the behind-the-scenes work. When you log in, Node.js processes your request, talks to MongoDB via Express.js, and sends your articles back to the React frontend. When you publish a post, it takes your input, saves it to the database, and confirms success—all in real time.
              </p>
              <p className="mt-2">
                For example:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  A user hits the /login endpoint.
                </li>
                <li>
                  Node.js runs the Express.js code, checks credentials against MongoDB, and responds with a success or failure message.
                </li>
                <li>
                  The React frontend picks it up and updates your screen.
                </li>
              </ul>
              <p className="mt-2">
                It’s simple but effective, keeping BlogA2 responsive and functional.
              </p>
              <p className="mt-2">
                Why Not Something Else?
                I could’ve used Python with Django or Ruby on Rails, but those would’ve meant learning new languages and frameworks for a small project. Node.js leverages my existing JavaScript knowledge, aligns with the MERN stack, and gets the job done without extra complexity.
              </p>
              <p className="mt-2">
                In short, Node.js is the unsung hero of BlogA2. It’s the runtime that powers the backend, connects the dots between my tools, and keeps everything humming along. For a practice site meant to showcase my full-stack skills, it’s been the perfect choice.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default NodeJsPage;