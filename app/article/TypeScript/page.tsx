"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Code, Layers, Rocket, Globe } from "lucide-react";

const TypeScriptPage = () => {
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
          TypeScript
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
            src="/articlesImages/Typescript.png"
            fill
            alt="TypeScript: Typing Up BlogA2"
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
                TypeScript Overview
              </h2>
              <p className="text-base">
                TypeScript is a superset of JavaScript that I’ve embraced to
                enhance my development process, including in projects like
                BlogA2. By adding static typing to JavaScript, TypeScript
                catches errors early, improves code quality, and makes my MERN
                stack projects more robust. It’s a game-changer for building
                reliable web applications.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Layers className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                What Is TypeScript?
              </h2>
              <p className="text-base">
                TypeScript is JavaScript with types. Developed by Microsoft, it
                extends JavaScript by letting you define the shapes of your
                data—like the structure of a user object or the expected return
                type of a function. It compiles down to plain JavaScript, so it
                runs anywhere JS does, but during development, it provides tools
                like autocompletion, type checking, and better IDE support.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Rocket className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why I’m Using TypeScript in BlogA2
              </h2>
              <p className="text-base">
                TypeScript fits perfectly into my workflow for BlogA2, and
                here’s why I’ve adopted it:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Error Prevention: In BlogA2, where users log in and manage
                  articles, TypeScript catches mistakes before runtime. If I try
                  to access user.phone when it’s not defined in my User type,
                  TypeScript flags it immediately.
                </li>
                <li>
                  MERN Stack Synergy: Since BlogA2 uses Node.js, Express.js, and
                  React—all JavaScript-based—TypeScript unifies them under one
                  typed language. My backend API responses and frontend
                  components stay consistent.
                </li>
                <li>
                  Better Refactoring: As a practice project, BlogA2 evolved as I
                  built it. TypeScript’s type system made renaming variables or
                  updating data structures painless—my IDE (like VS Code)
                  handles it with confidence.
                </li>
                <li>
                  Team-Ready Code: Even though I’m solo now, TypeScript’s
                  explicit types make my code self-documenting. If BlogA2 became
                  a team effort, others could jump in without guessing what data
                  contains.
                </li>
                <li>
                  Skill Growth: TypeScript is a must-know in modern web
                  development, used by big players like Airbnb and Slack.
                  Mastering it for BlogA2 boosts my portfolio and prepares me
                  for bigger challenges.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Globe className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why TypeScript Over Alternatives
              </h2>
              <p className="text-base">
                Why Not Plain JavaScript? JavaScript’s flexibility is great, but
                for BlogA2, it risked runtime errors—like passing a string where
                a number was expected. TypeScript adds a safety net without
                slowing me down (since it compiles away). For a small project, I
                could’ve skipped it, but the benefits outweigh the slight setup
                cost.
              </p>
              <p className="mt-2">
                Why Not Something Else? There aren’t many direct TypeScript
                alternatives—Flow exists, but it’s less popular. TypeScript’s
                dominance, huge community, and tight integration with tools like
                React and Node.js made it the clear choice for BlogA2.
              </p>
              <p className="mt-2">
                In short, TypeScript is my secret weapon for BlogA2. It catches
                bugs, clarifies my code, and scales with my ambitions—all while
                fitting snugly into the MERN stack. Whether I’m tweaking this
                practice site or tackling a massive app, TypeScript’s got my
                back.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default TypeScriptPage;
