"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Code, Layers, Rocket, Server } from "lucide-react";

const MernStackPage = () => {
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
          MERN Stack
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
            src="/articlesImages/Mern.png"
            fill
            alt="MERN Stack: Powering Modern Web Development"
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
                <Code className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                MERN Stack Overview
              </h2>
              <p className="text-base">
                The MERN stack is a popular set of technologies used to build
                modern, full-stack web applications. It’s an acronym that stands
                for MongoDB, Express.js, React, and Node.js. Together, these
                four tools create a powerful, JavaScript-based ecosystem that
                allows developers like me to craft dynamic and efficient
                websites from front to back—all while sticking to a single
                programming language.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Layers className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Breaking It Down
              </h2>
              <p className="text-base">
                MongoDB: A NoSQL database that stores data in a flexible,
                JSON-like format. It’s perfect for handling large amounts of
                unstructured data and scales easily as a project grows.
              </p>
              <p className="mt-2">
                Express.js: A lightweight web framework for Node.js that
                simplifies building the backend. It handles things like routing
                and API creation with minimal fuss.
              </p>
              <p className="mt-2">
                React: A JavaScript library for building interactive user
                interfaces. It’s fast, component-based, and makes the frontend
                development process a breeze.
              </p>
              <p className="mt-2">
                Node.js: A runtime that lets JavaScript run on the server side.
                It’s the glue that ties the whole stack together, enabling
                seamless communication between the frontend and backend.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Rocket className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why I Chose the MERN Stack
              </h2>
              <p className="text-base">
                I decided to use the MERN stack for BlogA2 (and other projects)
                for a few key reasons:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  JavaScript Everywhere: With MERN, I can write both the
                  frontend and backend in JavaScript. This reduces the mental
                  overhead of switching between languages and keeps my workflow
                  smooth.
                </li>
                <li>
                  Efficiency: The stack’s components are designed to work well
                  together. For example, data flows effortlessly from MongoDB
                  through Express.js and Node.js to React, making development
                  faster and more cohesive.
                </li>
                <li>
                  Community and Resources: MERN is widely adopted, which means
                  there’s a huge community of developers, plenty of tutorials,
                  and a wealth of libraries to lean on when I need help or
                  inspiration.
                </li>
                <li>
                  Scalability: While BlogA2 is a small project, the MERN stack
                  is robust enough to handle larger, more complex applications
                  if I decide to expand later.
                </li>
                <li>
                  Learning and Portfolio Value: Working with MERN lets me
                  sharpen my skills in a modern, in-demand tech stack. It’s a
                  great addition to my portfolio, showing potential clients or
                  employers that I can handle full-stack development.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Server className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why It Fits BlogA2
              </h2>
              <p className="text-base">
                For a project like BlogA2, where I wanted a simple yet
                functional site to showcase my abilities, MERN was a natural
                fit. It allowed me to quickly set up a backend to store user
                data (like articles), build a responsive frontend for viewing
                them, and tie it all together without overcomplicating things. I
                didn’t need a massive feature set—just a clean, working example
                of what I can do—and MERN delivered exactly that.
              </p>
              <p className="mt-2">
                In short, the MERN stack is my go-to because it’s versatile,
                efficient, and lets me focus on building rather than wrestling
                with tools. Whether it’s a practice site like BlogA2 or
                something bigger down the road, it’s a stack I’ll keep coming
                back to.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default MernStackPage;
