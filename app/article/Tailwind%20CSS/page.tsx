'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Paintbrush, Layers, Rocket, Globe } from 'lucide-react'

const TailwindCssPage = () => {
  const formattedDate = 'April 4, 2025'

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
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">Tailwind CSS</h1>

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
            src="/articlesImages/Tailwindcss.png"
            fill
            alt="Tailwind CSS: Styling Made Simple and Scalable"
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
                <Paintbrush className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Tailwind CSS Overview
              </h2>
              <p className="text-base">
                Here’s an English article about Tailwind CSS, written for your website. Since you didn’t specify whether
                Tailwind CSS was used in BlogA2, I’ll present it as a general exploration of the technology, with the
                possibility that it could enhance BlogA2 or future projects. Let me know if you’d like me to tie it
                directly to BlogA2!
              </p>
              <p className="mt-2">
                Tailwind CSS: Styling Made Simple and Scalable Tailwind CSS is a utility-first CSS framework that I’ve
                come to appreciate for its unique approach to styling web applications. While BlogA2’s frontend is built
                with React and focuses on functionality, Tailwind CSS is a tool I’ve explored to streamline and enhance
                the design process—whether for this project or ones to come.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Layers className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                What Is Tailwind CSS?
              </h2>
              <p className="text-base">
                Unlike traditional CSS frameworks like Bootstrap, which provide pre-designed components (think buttons
                or cards), Tailwind CSS takes a different route. It’s a collection of low-level utility classes—small,
                single-purpose styles like text-center, bg-blue-500, or p-4—that you combine directly in your HTML to
                build custom designs. Instead of writing separate CSS files with custom rules, you apply these classes
                to elements, crafting your UI on the fly.
              </p>
              <p className="mt-2">
                Tailwind’s philosophy is all about flexibility and speed. It gives you the building blocks to create
                anything you can imagine, without locking you into a specific look or forcing you to override defaults.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why I’m Drawn to Tailwind CSS
              </h2>
              <p className="text-base">
                Tailwind has piqued my interest for several reasons, even if BlogA2’s styling might currently lean on
                basic CSS or another approach:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Rapid Development: For a project like BlogA2, where I wanted to focus on functionality (like article
                  publishing), Tailwind lets me style components quickly without leaving my HTML or React files. A
                  {/* eslint-disable-next-line */}
                  button can be styled with className="bg-green-500 text-white p-2 rounded"—done in seconds.
                </li>
                <li>
                  Consistency: Tailwind’s predefined classes (e.g., spacing scales or color palettes) ensure a uniform
                  design. In BlogA2, this could keep the user panel and article layouts clean and cohesive without
                  manual tweaking.
                </li>
                <li>
                  Customization: While it’s utility-based, Tailwind is highly configurable. I can define my own colors,
                  fonts, or breakpoints in a config file, tailoring it to match BlogA2’s vibe—or any project’s branding.
                </li>
                <li>
                  No CSS Bloat: Writing custom CSS can lead to sprawling stylesheets that are hard to maintain. Tailwind
                  keeps styling inline and purges unused classes during the build process, making BlogA2’s codebase
                  leaner.
                </li>
                <li>
                  Modern Workflow: Paired with React (and tools like Next.js), Tailwind fits perfectly into my
                  JavaScript-driven stack. It’s a skill that complements my MERN expertise and boosts my portfolio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                How It Could Enhance BlogA2 and Beyond
              </h2>
              <p className="text-base">
                Imagine BlogA2 with Tailwind CSS: the login form could use flex flex-col gap-4 for a neat layout,
                article cards could get shadow-md hover:shadow-lg for a subtle interactive effect, and the whole site
                could adopt a responsive grid with grid grid-cols-1 md:grid-cols-2. It’d take minimal effort to make the
                UI polished and mobile-friendly—something I might not have prioritized in a practice project but could
                easily add with Tailwind.
              </p>
              <p className="mt-2">
                For now, BlogA2’s styling might be simpler, focusing on function over flair. But Tailwind is a tool I’d
                consider integrating to level up the visuals without slowing down development.
              </p>
              <p className="mt-2">
                Why Not Always Use It? Tailwind isn’t for everyone or every project. Its class-heavy approach can make
                HTML look cluttered—
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                  {/* eslint-disable-next-line */}
                  &lt;div className="flex
                  {/* eslint-disable-next-line */}
                  justify-between items-center p-4 bg-gray-100"&gt;
                </code>{' '}
                takes getting used to. For BlogA2, where I might’ve wanted to practice raw CSS or keep things
                ultra-minimal, plain styles or a lighter framework could make sense. Tailwind shines in bigger projects
                where design consistency and speed matter most.
              </p>
              <p className="mt-2">
                In short, Tailwind CSS is a styling superpower I’m excited to wield. It’s fast, flexible, and fits
                beautifully into modern web development workflows. While BlogA2 keeps things basic for now, Tailwind’s
                on my radar to make future projects—or even this one—look as good as they work.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}

export default TailwindCssPage
