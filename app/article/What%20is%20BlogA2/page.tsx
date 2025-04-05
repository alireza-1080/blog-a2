'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Code, Smartphone, Lock, Eye } from 'lucide-react';

const BlogA2Page = () => {
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
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">What is BlogA2</h1>

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
          <time dateTime="2025-04-04T10:41:44.186+00:00" className="text-xs text-gray-500 dark:text-gray-400">
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
            src="/articlesImages/Bloga2.png"
            fill
            alt="What is BlogA2: A Showcase of Simplicity and Skill"
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
                Purpose of BlogA2
              </h2>
              <p className="text-base">
                I created BlogA2 as a practice website, utilizing the technologies and skills I’ve mastered, to serve
                as both a portfolio piece and a sample of my work. This project was designed to showcase my abilities
                in web development while keeping things simple yet functional.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Smartphone className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Backend and Accessibility
              </h2>
              <p className="text-base">
                BlogA2 is equipped with a backend system that allows it to store the data you input. Once you log into
                your account, you can access the articles you’ve published from any device—be it a mobile phone,
                computer, or anything else. This cross-device accessibility ensures a seamless user experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Privacy by Design
              </h2>
              <p className="text-base">
                That said, there’s a catch. Since there are always individuals out there who might misuse or disrupt
                such platforms, and I didn’t want to invest time in moderating user-generated content, the articles
                you publish won’t be publicly visible. Instead, they’re stored privately in your personal user panel.
                This setup lets you see how the frontend and backend of the website work together without exposing
                your content to everyone.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Public Content and Philosophy
              </h2>
              <p className="text-base">
                The only articles available to the public are the ones I publish myself. These focus on the
                programming technologies I use, offering insights into the tools and techniques behind BlogA2. It’s a
                way to share knowledge while keeping the project’s scope manageable.
              </p>
              <p className="mt-2">
                I’m fully aware that I could’ve added a ton of extra features to this website—think advanced editing
                tools, social sharing options, or even a comment section. But I deliberately kept it minimal. My goal
                wasn’t to build a full-fledged platform but to create a quick preview of what a simple
                article-publishing website could look like. BlogA2 is a proof of concept, a snapshot of my skills,
                and a stepping stone for bigger things.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default BlogA2Page;