'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Code, Layers, Rocket, Monitor } from 'lucide-react';

const ReactJsPage = () => {
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
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">React.js</h1>

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
            src="/articlesImages/Reactjs.png"
            fill
            alt="React.js: Bringing BlogA2’s Frontend to Life"
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
                <Code className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                React.js Overview
              </h2>
              <p className="text-base">
                React.js is a powerful JavaScript library that I’ve used to build the frontend of BlogA2. Developed by Facebook, it’s all about creating fast, interactive user interfaces with a component-based approach. For a practice project like BlogA2, React.js was the ideal choice to bring the site to life on the client side.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Layers className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                What Is React.js?
              </h2>
              <p className="text-base">
                React.js is designed to make building UIs easier and more efficient. It lets you break down your 
                interface into reusable &quote;components&quote;—self-contained pieces of code that manage their own logic and appearance. For example, in BlogA2, I might have a Navbar component for navigation, an ArticleList component to display posts, and a LoginForm component for user authentication.
              </p>
              <p className="mt-2">
                What sets React apart is its virtual DOM (Document Object Model). Instead of directly updating the browser’s DOM every time something changes—which can be slow—React creates a lightweight copy, figures out what’s different, and updates only what’s necessary. The result? A snappy, responsive experience for users.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why I’m Using React.js in BlogA2
              </h2>
              <p className="text-base">
                I picked React.js for BlogA2 because it’s a perfect match for what I wanted to achieve. Here’s why:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Component Reusability: BlogA2 has a simple layout—things like a user panel, article previews, and a form to publish posts. React’s component system let me build these once and reuse them wherever needed, saving time and keeping the code DRY (Don’t Repeat Yourself).
                </li>
                <li>
                  MERN Stack Harmony: As part of the MERN stack (MongoDB, Express.js, React, Node.js), React integrates smoothly with my backend. It fetches data from Express.js APIs and displays it dynamically, making the app feel cohesive.
                </li>
                <li>
                  Speed and Performance: Even for a small site like BlogA2, I wanted the frontend to feel fast. React’s virtual DOM ensures that updates—like showing a new article—happen quickly without reloading the page.
                </li>
                <li>
                  Developer Experience: React’s ecosystem is packed with tools like hooks and state management, which make coding intuitive. For BlogA2, I kept it simple with basic state handling, but the flexibility is there if I want to scale up.
                </li>
                <li>
                  Industry Relevance: React is one of the most popular frontend libraries out there, used by companies big and small. Working with it on BlogA2 sharpens my skills and adds a valuable piece to my portfolio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Monitor className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                How It Works in BlogA2 and Beyond
              </h2>
              <p className="text-base">
                In BlogA2, React.js powers everything you see. When you log in, a React component sends a request to the Express.js backend, grabs your articles from MongoDB, and renders them in your personal panel. When you publish a new article, another component handles the form input, sends it to the server, and updates the screen—all without a full page refresh.
              </p>
              <p className="mt-2">
                For example:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  The ArticleList component fetches your articles when you log in and displays them in a clean list.
                </li>
                <li>
                  The PublishButton component triggers a POST request to save your new post, then refreshes the list automatically.
                </li>
              </ul>
              <p className="mt-2">
                It’s all about keeping the experience smooth and interactive, even for a simple site.
              </p>
              <p className="mt-2">
                Why Not Something Else?
                There are other options like Vue.js or Angular, but React won out for BlogA2. Vue is great but less dominant in the job market, while Angular feels heavier than I needed for a lightweight project. React strikes the right balance—powerful yet approachable, and perfectly suited for the MERN stack.
              </p>
              <p className="mt-2">
                In short, React.js is the beating heart of BlogA2’s frontend. It’s fast, flexible, and lets me build a clean, functional interface with minimal effort. For a practice site meant to showcase my skills, it’s been a game-changer.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default ReactJsPage;