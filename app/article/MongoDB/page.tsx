"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Database, Code, Rocket, Server } from "lucide-react";

const MongoDBPage = () => {
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
          MongoDB
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
            src="/articlesImages/MongoDB.png"
            fill
            alt="MongoDB: The Flexible Heart of BlogA2"
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
                MongoDB Overview
              </h2>
              <p className="text-base">
                MongoDB is a leading NoSQL database that I’ve chosen to use in
                BlogA2, and for good reason. Unlike traditional relational
                databases that store data in rigid tables with rows and columns,
                MongoDB takes a more flexible approach. It’s document-oriented,
                meaning it stores data in JSON-like structures called BSON
                (Binary JSON). This makes it a perfect fit for modern web
                applications like mine.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Code className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                What Is MongoDB?
              </h2>
              <p className="text-base">
                At its core, MongoDB is designed to handle unstructured or
                semi-structured data with ease. Instead of predefined schemas,
                it lets you store &quote;documents&quote; in collections—think
                of these as dynamic, self-contained records that can vary in
                structure. For example, one document might hold a user’s name
                and email, while another could include additional fields like
                article titles or timestamps, all without breaking a sweat.
              </p>
              <p className="mt-2">
                It’s also highly scalable. Whether you’re running a small
                project like BlogA2 or a massive app with millions of users,
                MongoDB can grow with you, thanks to its ability to distribute
                data across servers.
              </p>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Rocket className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Why I’m Using MongoDB in BlogA2
              </h2>
              <p className="text-base">
                I picked MongoDB for BlogA2 because it aligns perfectly with
                what I needed for this practice project:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Flexibility: Since BlogA2 is a simple article-publishing site,
                  I wanted a database that could store user data—like account
                  details and articles—without forcing me to define a strict
                  structure upfront. MongoDB’s schema-less design gave me the
                  freedom to experiment and adapt as I built.
                </li>
                <li>
                  JavaScript Compatibility: As part of the MERN stack (MongoDB,
                  Express.js, React, Node.js), MongoDB plays nicely with
                  JavaScript. The data I store in MongoDB flows seamlessly into
                  my Node.js backend and React frontend, keeping everything
                  consistent and easy to manage.
                </li>
                <li>
                  Speed: For a small project like this, MongoDB’s performance is
                  more than enough. It handles queries quickly, letting me
                  retrieve and display articles in a snap when a user logs in.
                </li>
                <li>
                  Ease of Use: Setting up MongoDB is straightforward, and its
                  documentation is top-notch. For a solo developer like me, that
                  means less time figuring out the database and more time coding
                  the fun stuff.
                </li>
                <li>
                  Learning Opportunity: Working with MongoDB helps me build my
                  skills in a widely-used, industry-standard tool. It’s a
                  valuable addition to my portfolio and a technology I can carry
                  into future projects.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Server className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                How It Works in BlogA2 and Beyond
              </h2>
              <p className="text-base">
                In BlogA2, MongoDB quietly does the heavy lifting behind the
                scenes. When you create an account or publish an article, that
                data gets stored as a document in a MongoDB collection. When you
                log in from any device, the backend pulls your articles from
                MongoDB and serves them up to your personal panel. It’s simple,
                reliable, and gets the job done without overcomplicating things.
              </p>
              <p className="mt-2">
                Why Not Something Else? Sure, I could’ve gone with a relational
                database like MySQL or PostgreSQL, but those are better suited
                for projects with highly structured data and complex
                relationships. BlogA2 didn’t need that level of
                rigidity—MongoDB’s flexibility and simplicity made it the
                smarter choice for a lightweight site like this.
              </p>
              <p className="mt-2">
                In short, MongoDB is the backbone of BlogA2’s data storage. It’s
                fast, flexible, and fits perfectly into the MERN stack I’m
                using. For a practice project meant to showcase my skills, it’s
                exactly what I needed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default MongoDBPage;
