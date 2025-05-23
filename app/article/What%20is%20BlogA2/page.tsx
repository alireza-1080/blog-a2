"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Code, Smartphone, Lock, Eye } from "lucide-react";

const BlogA2Page = () => {
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
          What is BlogA2
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
            dateTime="2025-04-04T10:41:44.186+00:00"
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
            src="/articlesImages/BlogA2.png"
            fill
            alt="What is BlogA2: A Showcase of Simplicity and Skill"
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
                Purpose of BlogA2
              </h2>
              <p className="text-base">
                I created BlogA2 as a practice website, utilizing the
                technologies and skills I’ve mastered, to serve as both a
                portfolio piece and a sample of my work. This project was
                designed to showcase my abilities in web development while
                keeping things simple yet functional.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Smartphone className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Backend and Accessibility
              </h2>
              <p className="text-base">
                BlogA2 is equipped with a backend system that allows it to store
                the data you input. Once you log into your account, you can
                access the articles you’ve published from any device—be it a
                mobile phone, computer, or anything else. This cross-device
                accessibility ensures a seamless user experience.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Lock className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Privacy by Design
              </h2>
              <p className="text-base">
                That said, there’s a catch. Since there are always individuals
                out there who might misuse or disrupt such platforms, and I
                didn’t want to invest time in moderating user-generated content,
                the articles you publish won’t be publicly visible. Instead,
                they’re stored privately in your personal user panel. This setup
                lets you see how the frontend and backend of the website work
                together without exposing your content to everyone.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Eye className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Public Content and Philosophy
              </h2>
              <p className="text-base">
                The only articles available to the public are the ones I publish
                myself. These focus on the programming technologies I use,
                offering insights into the tools and techniques behind BlogA2.
                It’s a way to share knowledge while keeping the project’s scope
                manageable.
              </p>
              <p className="mt-2">
                I’m fully aware that I could’ve added a ton of extra features to
                this website—think advanced editing tools, social sharing
                options, or even a comment section. But I deliberately kept it
                minimal. My goal wasn’t to build a full-fledged platform but to
                create a quick preview of what a simple article-publishing
                website could look like. BlogA2 is a proof of concept, a
                snapshot of my skills, and a stepping stone for bigger things.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default BlogA2Page;
