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
            alt="Shadcn: Custom UI Without the Baggage"
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
                shadcn/ui is a unique and increasingly popular tool in the web development world, and it’s one I’ve been keeping an eye on as I explore modern UI solutions. Unlike traditional component libraries that you install as an npm package, shadcn/ui flips the script: it’s a collection of beautifully designed, accessible React components that you copy and paste directly into your codebase. Built on top of Radix UI and Tailwind CSS, it’s less about dependency management and more about giving developers full ownership of their UI.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Layers className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                What Is shadcn/ui?
              </h2>
              <p className="text-base">
                At its heart, shadcn/ui isn’t a typical library—it’s a system for building your own component library. Created by a developer known as shadcn, it provides a set of reusable components like buttons, forms, modals, and more, all styled with Tailwind CSS and powered by Radix UI’s unstyled, accessible primitives. The twist? Instead of importing them from a package, you use a CLI tool (or manually copy the code) to bring the source files into your project. From there, they’re yours to customize, maintain, and extend.
              </p>
              <p className="mt-2">
                Key features include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Open Code: You get the raw component code, not a black-box package, so you can tweak every detail.
                </li>
                <li>
                  Accessibility: Built with Radix UI, it ensures components meet modern accessibility standards out of the box.
                </li>
                <li>
                  Tailwind Integration: Styling is handled with Tailwind’s utility classes, making it fast to adjust designs.
                </li>
                <li>
                  Framework Flexibility: It works with React-based setups like Next.js, Vite, and Remix, fitting into my JavaScript-centric workflow.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why I’m Intrigued by shadcn/ui
              </h2>
              <p className="text-base">
                As someone who built BlogA2 to showcase my skills, shadcn/ui appeals to me for a few reasons:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Total Control: In BlogA2, I used React for the frontend and Express.js for the backend. With shadcn/ui, I could’ve grabbed components like a Card or Dialog, dropped them into my project, and styled them to match my vision—no fighting with third-party library constraints.
                </li>
                <li>
                  No Dependency Hell: Traditional libraries tie you to their update cycles. shadcn/ui sidesteps this by making the code mine from day one, which suits a practice project like BlogA2 where I want simplicity.
                </li>
                <li>
                  Design Meets Function: The default styles are clean and modern, thanks to Tailwind, but I can override them easily. For a site like BlogA2, this balance could’ve made the UI pop without much extra effort.
                </li>
                <li>
                  Learning Value: Exploring shadcn/ui teaches me how to structure reusable components—a skill that’s gold for my portfolio and future gigs.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                How It Could Work in BlogA2 and Beyond
              </h2>
              <p className="text-base">
                Picture BlogA2 with shadcn/ui: the user panel could use a Tabs component to switch between article lists and settings, styled with Tailwind classes like bg-gray-100 p-4 rounded. The login form could lean on a Form component with built-in validation, connected to my Express.js backend. Since BlogA2’s articles are private, a Drawer component could slide out to show drafts, keeping the interface sleek.
              </p>
              <p className="mt-2">
                I stuck with a basic MERN stack for BlogA2 to keep it straightforward, but shadcn/ui could’ve been a lightweight way to polish the frontend without adding a heavy dependency.
              </p>
              <p className="mt-2">
                Why Not Use It Everywhere?
                shadcn/ui isn’t perfect for every scenario. For BlogA2, where I wanted to practice raw React and CSS, it might’ve felt like a shortcut. Plus, since you own the components, you’re also responsible for fixing bugs or keeping them updated—fine for a maintained project, less so for a quick demo. And if you’re not using Tailwind already, the learning curve might slow you down.
              </p>
              <p className="mt-2">
                In short, shadcn/ui is a breath of fresh air for developers like me who want flexibility, accessibility, and good design without the baggage of traditional libraries. It’s not in BlogA2 yet, but it’s definitely on my list for future projects where I want to build a custom UI fast and keep it my own.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default ShadcnPage;