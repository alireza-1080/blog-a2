"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Server, Layers, Rocket, Code } from "lucide-react";

const ExpressJsPage = () => {
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
          Express.js
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
            src="/articlesImages/Expressjs.png"
            fill
            alt="Express.js: The Backbone of BlogA2’s Backend"
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
                <Server className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Express.js Overview
              </h2>
              <p className="text-base">
                Express.js is a minimalist web framework for Node.js, and it’s
                one of the key technologies I’ve used to build the backend of
                BlogA2. Known for its simplicity and flexibility, Express.js
                makes it easy to create robust server-side applications and
                APIs, which is exactly what I needed for this practice project.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Layers className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                What Is Express.js?
              </h2>
              <p className="text-base">
                Express.js is essentially a layer on top of Node.js that
                simplifies the process of building web servers. Node.js, by
                itself, gives you the raw power to run JavaScript on the server,
                but it can feel a bit low-level for tasks like handling HTTP
                requests or setting up routes. That’s where Express.js comes
                in—it provides a clean, intuitive way to manage those tasks
                without bogging you down in boilerplate code.
              </p>
              <p className="mt-2">
                With Express.js, you can define routes (like /login or
                /articles), handle requests (GET, POST, etc.), and send
                responses—all in just a few lines of code. It’s lightweight but
                extensible, meaning you can add middleware or plugins to tailor
                it to your needs.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Rocket className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why I’m Using Express.js in BlogA2
              </h2>
              <p className="text-base">
                I chose Express.js for BlogA2 because it strikes the perfect
                balance between simplicity and functionality. Here’s why it made
                sense for this project:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Quick Setup: For a practice site like BlogA2, I didn’t want to
                  spend ages configuring the backend. Express.js let me get a
                  server up and running fast, so I could focus on building
                  features like user authentication and article storage.
                </li>
                <li>
                  MERN Stack Integration: As part of the MERN stack (MongoDB,
                  Express.js, React, Node.js), it fits seamlessly with the other
                  tools I’m using. It acts as the middleman, connecting
                  MongoDB’s data to the React frontend with ease.
                </li>
                <li>
                  Routing Made Easy: BlogA2 needed basic routes—like one to
                  fetch a user’s articles or save a new post. Express.js handles
                  this with a simple syntax, keeping my code clean and
                  organized.
                </li>
                <li>
                  Middleware Power: Express.js supports middleware, which lets
                  me add functionality like logging or error handling. For
                  BlogA2, I kept it minimal, but the option’s there if I want to
                  expand later.
                </li>
                <li>
                  Community Support: Express.js is hugely popular, with a
                  massive ecosystem of resources and libraries. That’s a big
                  plus for a solo developer like me—it means help is always a
                  quick search away.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Code className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                How It Works in BlogA2 and Beyond
              </h2>
              <p className="text-base">
                In BlogA2, Express.js is the engine driving the backend. When
                you log in, it handles the request, talks to MongoDB to verify
                your credentials, and sends back the data your React frontend
                needs. When you publish an article, Express.js takes that input,
                saves it to the database, and confirms it’s done—all behind the
                scenes. It’s the glue that keeps the app responsive and
                functional.
              </p>
              <p className="mt-2">
                For example, a typical route in BlogA2 might look like this (in
                simplified terms):
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>A user sends a request to /articles.</li>
                <li>
                  Express.js catches it, queries MongoDB for that user’s
                  articles, and sends them back as a JSON response.
                </li>
                <li>
                  The React frontend takes that data and displays it in your
                  panel.
                </li>
              </ul>
              <p className="mt-2">
                Why Not Something Else? There are other frameworks out
                there—like Koa or NestJS—but Express.js won out for BlogA2
                because of its simplicity and widespread use. It’s not overkill
                for a small project, and it’s a skill that’s highly transferable
                to bigger ones. Plus, it’s the go-to choice for MERN stack
                development, which aligns with my goals.
              </p>
              <p className="mt-2">
                In short, Express.js is the unsung hero of BlogA2’s backend.
                It’s fast to set up, easy to use, and gets the job done without
                unnecessary complexity. For a practice site meant to showcase my
                skills, it’s been a perfect fit.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default ExpressJsPage;
