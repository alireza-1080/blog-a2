"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Paintbrush, Layers, Rocket, Globe } from "lucide-react";

const TailwindCssPage = () => {
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
          Tailwind CSS
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
            src="/articlesImages/Tailwindcss.png"
            fill
            alt="Tailwind CSS: Styling BlogA2 with Ease"
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
                <Paintbrush className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Tailwind CSS Overview
              </h2>
              <p className="text-base">
                Tailwind CSS is the utility-first CSS framework I’ve chosen to
                style BlogA2, and it’s been a perfect match for this practice
                project. By leveraging its vast collection of low-level utility
                classes, I’ve been able to craft a clean, responsive, and
                cohesive design for BlogA2 without the hassle of traditional
                CSS—making my MERN stack app look as good as it works.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Layers className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                What Is Tailwind CSS?
              </h2>
              <p className="text-base">
                Tailwind CSS flips the script on styling. Unlike frameworks like
                Bootstrap that hand you pre-built components, Tailwind provides
                a toolkit of small, single-purpose classes—like text-center,
                bg-blue-500, or p-4—that I apply directly in my HTML or React
                components. This lets me build custom designs on the fly,
                without writing separate CSS files or battling overrides. It’s
                all about flexibility, speed, and keeping control in my hands.
              </p>
              <p className="mt-2">
                For BlogA2, Tailwind powers the frontend alongside Next.js and
                React, turning functional code into a polished user experience.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Rocket className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why I’m Using Tailwind CSS in BlogA2
              </h2>
              <p className="text-base">
                Tailwind has been a game-changer for BlogA2, and here’s why I
                picked it:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Rapid Development: BlogA2’s focus was on functionality—like
                  user logins and article publishing—but I still wanted a decent
                  UI. Tailwind let me style components fast, like adding
                  className=&qoute;bg-blue-600 text-white p-3 rounded&qoute; to
                  a button, without leaving my React files.
                </li>
                <li>
                  Consistency: With Tailwind’s predefined scales for spacing,
                  colors, and typography, BlogA2’s user panel and article
                  layouts stay uniform. Classes like m-4 or text-lg keep
                  everything aligned without manual tweaking.
                </li>
                <li>
                  Customization: I’ve tailored Tailwind to BlogA2’s needs via
                  its config file, tweaking colors or adding breakpoints to
                  match the site’s vibe—all while keeping the utility-first
                  approach intact.
                </li>
                <li>
                  Lean Codebase: Traditional CSS can balloon into messy
                  stylesheets. Tailwind’s inline classes, combined with its
                  build-time purge of unused styles, keep BlogA2’s frontend
                  lightweight and maintainable.
                </li>
                <li>
                  MERN and Next.js Fit: Paired with Next.js and React in my MERN
                  stack, Tailwind feels right at home. It’s a modern tool that
                  complements my JavaScript-driven workflow and boosts my
                  portfolio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Globe className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                How It Works in BlogA2 and Why It Fits
              </h2>
              <p className="text-base">
                Tailwind CSS brings BlogA2’s UI to life:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Login Form: I used flex flex-col gap-4 max-w-md mx-auto p-6
                  bg-gray-100 rounded to create a clean, centered form that’s
                  mobile-friendly out of the box.
                </li>
                <li>
                  Article Cards: Each article preview gets shadow-md
                  hover:shadow-lg p-4 bg-white rounded transition for a subtle,
                  interactive lift—simple yet effective.
                </li>
                <li>
                  Responsive Design: The dashboard uses grid grid-cols-1
                  md:grid-cols-2 lg:grid-cols-3 gap-6 to adapt seamlessly from
                  mobile to desktop, ensuring users can access their articles
                  anywhere.
                </li>
                <li>
                  Public Pages: My tech articles (like this one) lean on prose
                  prose-lg mx-auto (via the @tailwindcss/typography plugin) for
                  readable, polished typography.
                </li>
              </ul>
              <p className="mt-2">
                It’s all done inline, so I can tweak a p-4 to p-6 or swap
                bg-gray-100 for bg-blue-50 in seconds—no CSS files to dig
                through.
              </p>
              <p className="mt-2">
                Why It Fits BlogA2 For a practice site like BlogA2, Tailwind
                strikes the perfect balance. I didn’t want to spend hours on
                design, but I still needed a professional look. Tailwind
                delivered that with minimal effort, letting me focus on the MERN
                stack logic—like connecting Next.js to MongoDB—while keeping the
                UI sharp. It’s flexible enough for quick prototypes but scales
                to bigger projects, making it ideal for my portfolio piece.
              </p>
              <p className="mt-2">
                Why Not Something Else? I could’ve used plain CSS for BlogA2 to
                practice fundamentals, but that’d mean more time on stylesheets
                and less on functionality. Bootstrap was an option, but its
                pre-made components felt too rigid for BlogA2’s custom needs.
                Tailwind’s utility approach gave me speed and freedom—exactly
                what I wanted.
              </p>
              <p className="mt-2">
                In short, Tailwind CSS is my styling superpower for BlogA2. It’s
                fast, flexible, and turns my Next.js and React frontend into a
                sleek, user-friendly experience. From login forms to article
                grids, it’s helped me build a site that’s as visually appealing
                as it is functional—all while keeping development a breeze.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default TailwindCssPage;
