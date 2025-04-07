"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Database, Code, Rocket, Layers } from "lucide-react";

const PrismaPage = () => {
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
          Prisma
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
            src="/articlesImages/Prisma.png"
            fill
            alt="Prisma: Simplifying MongoDB in BlogA2"
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
                <Database className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Prisma Overview
              </h2>
              <p className="text-base">
                Prisma is a next-generation ORM (Object-Relational Mapping) tool
                that I’ve explored to manage my MongoDB database, including in
                projects like BlogA2. It’s designed to simplify database
                interactions, offering type safety, an intuitive query API, and
                a clean way to define data models—all while working seamlessly
                with MongoDB, a NoSQL database I already use in my MERN stack.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Code className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                What Is Prisma?
              </h2>
              <p className="text-base">
                Prisma is an open-source toolkit that bridges your application
                code and database, replacing traditional ORMs or manual
                query-writing with a modern, developer-friendly approach. For
                MongoDB, it provides a schema-based system to define your data
                models and generates a type-safe Prisma Client to interact with
                your database. Unlike MongoDB’s native driver or tools like
                Mongoose, Prisma focuses on simplicity, auto-completion, and
                strong typing (especially with TypeScript), making it a powerful
                addition to my workflow.
              </p>
              <p className="mt-2">
                In BlogA2, where I store user accounts and private articles,
                Prisma could streamline how I manage that data, replacing raw
                MongoDB queries with a more structured, maintainable setup.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Rocket className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why I’m Using Prisma with MongoDB
              </h2>
              <p className="text-base">
                Here’s why Prisma stands out for managing MongoDB in BlogA2:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Type Safety: Since BlogA2 uses TypeScript, Prisma’s generated
                  client ensures my queries match my schema. No more guessing if
                  user.email exists—it’s typed and checked at compile time.
                </li>
                <li>
                  Schema-Driven Development: I define my models (like User and
                  Post) in a schema.prisma file. For BlogA2, this keeps my data
                  structure clear and consistent, even with MongoDB’s flexible
                  nature.
                </li>
                <li>
                  Easy Queries: Prisma’s API is straightforward. Fetching a
                  user’s articles in BlogA2 could be as simple as{" "}
                  <code className="rounded bg-gray-100 px-1 dark:bg-gray-700">
                    prisma.user.findUnique(&#123; where: &#123; id &#125;,
                    include: &#123; posts: true &#125; &#125;)
                  </code>
                  —no complex MongoDB syntax required.
                </li>
                <li>
                  MERN Compatibility: Prisma slots right into my MERN stack
                  (MongoDB, Express.js, React, Node.js). It talks to MongoDB via
                  the backend, leaving my React frontend unchanged.
                </li>
                <li>
                  Less Boilerplate: Compared to setting up Mongoose schemas or
                  raw MongoDB connections, Prisma cuts down on repetitive code,
                  letting me focus on building features like article publishing.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Layers className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                How It Works in BlogA2
              </h2>
              <p className="text-base">
                In BlogA2, Prisma enhances database management by providing a
                structured, type-safe way to interact with MongoDB. Stay tuned
                for more details on its implementation!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default PrismaPage;
