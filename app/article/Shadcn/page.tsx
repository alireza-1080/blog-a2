'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Palette, Layers, Rocket, Globe } from 'lucide-react';

const ShadcnPage = () => {
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
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">Shadcn</h1>

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
            src="/articlesImages/Shadcn.png"
            fill
            alt="Shadcn: Crafting BlogA2’s UI"
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
                <Palette className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Shadcn Overview
              </h2>
              <p className="text-base">
                shadcn/ui is a unique tool I’ve integrated into BlogA2 to craft a polished, accessible frontend. Unlike traditional component libraries that come as npm packages, shadcn/ui offers a collection of beautifully designed React components—built on Radix UI and styled with Tailwind CSS—that I’ve copied directly into my codebase. This approach gives me full control over my UI, making it a perfect fit for my Next.js-powered MERN stack project.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Layers className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                What Is shadcn/ui?
              </h2>
              <p className="text-base">
                shadcn/ui, created by a developer known as shadcn, isn’t your typical library—it’s a system for building your own component library. It provides reusable components like buttons, forms, modals, and tabs, all powered by Radix UI’s unstyled, accessible primitives and styled with Tailwind CSS. Instead of installing a package, I use its CLI (or manually copy the code) to bring the raw component files into BlogA2. From there, I own them—free to tweak, extend, or maintain as I see fit.
              </p>
              <p className="mt-2">
                Key features in BlogA2 include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Open Code: I’ve got the full source, not a locked-down package, so I can customize every detail.
                </li>
                <li>
                  Accessibility: Radix UI ensures BlogA2’s components meet modern standards—like keyboard navigation—out of the box.
                </li>
                <li>
                  Tailwind Integration: Styling with Tailwind classes keeps BlogA2’s look consistent and fast to adjust.
                </li>
                <li>
                  Next.js Compatibility: It slots perfectly into my Next.js setup, enhancing my React frontend.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why I’m Using shadcn/ui in BlogA2
              </h2>
              <p className="text-base">
                shadcn/ui has been a standout choice for BlogA2, and here’s why I went with it:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Total Control: In BlogA2, I needed a custom UI for features like the user panel and login form. shadcn/ui gave me components like Card and Dialog that I dropped in and styled with Tailwind to match my vision—no wrestling with third-party constraints.
                </li>
                <li>
                  No Dependency Overhead: Traditional libraries mean version updates and bloat. With shadcn/ui, the code is mine from day one, keeping BlogA2 lightweight and simple—ideal for a practice project.
                </li>
                <li>
                  Design Meets Function: The default styles are sleek and modern, thanks to Tailwind, but I’ve tweaked them to fit BlogA2. It’s made the UI pop with minimal effort.
                </li>
                <li>
                  Learning Value: Using shadcn/ui in BlogA2 has taught me how to structure reusable components—a skill that’s gold for my portfolio and future work.
                </li>
                <li>
                  MERN Synergy: Paired with Next.js, Tailwind, and my Express.js backend, shadcn/ui fits right into my JavaScript-driven stack.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                How It Works in BlogA2 and Why It Fits
              </h2>
              <p className="text-base">
                shadcn/ui brings BlogA2’s frontend to life:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  User Panel: I’ve used the Tabs component to let users switch between their article list and settings, styled with bg-gray-100 p-4 rounded for a clean look.
                </li>
                <li>
                  Login Form: The Form component handles input with built-in validation, tied to my Next.js API routes or Express.js backend, and styled with flex flex-col gap-4.
                </li>
                <li>
                  Article Previews: A Card component wraps each article, with Tailwind classes like shadow-md hover:shadow-lg p-4 for a subtle hover effect.
                </li>
                <li>
                  Drafts Drawer: Since BlogA2 keeps articles private, I’ve added a Drawer that slides out to show drafts, keeping the interface uncluttered.
                </li>
              </ul>
              <p className="mt-2">
                I brought these components into BlogA2 via the shadcn/ui CLI—running commands like npx shadcn-ui@latest add tabs—and customized them to suit my needs.
              </p>
              <p className="mt-2">
                Why It Fits BlogA2
                For a practice site like BlogA2, shadcn/ui is a lightweight yet powerful addition. I wanted to focus on the MERN stack’s core functionality, but I also needed a decent UI. shadcn/ui gave me pre-built, accessible components that I could adapt fast, saving time while still showcasing my ability to craft a custom frontend. It’s a perfect complement to Next.js and Tailwind.
              </p>
              <p className="mt-2">
                Why Not Something Else?
                I could’ve used a library like Material-UI, but its pre-styled components didn’t fit BlogA2’s custom vibe, and I’d be tied to its ecosystem. Raw React with Tailwind worked, but shadcn/ui saved me from building components from scratch while keeping full ownership. It’s the best of both worlds for this project.
              </p>
              <p className="mt-2">
                In short, shadcn/ui has elevated BlogA2’s frontend with flexibility, accessibility, and style. It’s let me build a custom UI that’s mine to control, seamlessly integrated with Next.js and Tailwind. For a practice project meant to flex my skills, it’s been a brilliant addition—and a tool I’ll keep using moving forward.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default ShadcnPage;