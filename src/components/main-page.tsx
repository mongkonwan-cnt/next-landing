"use client"

import Link from "next/link";
import Image from 'next/image';
import { ZapIcon, PieChartIcon, LayersIcon } from "@/components/icon"

export default function MainPage() {
  return (
    <>
      <section className="w-full pt-24 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-4 md:px-6 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                The complete platform for building the Web
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable.
                Open Source.
              </p>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Button
                </Link>
              </div>
            </div>
          </div>
          <div className="relative" style={{ width: '100%', paddingTop: '40%' }}>
            <Image
              alt="placeholder"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
              src="/placeholder.svg"
              fill
              priority
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="grid max-w-5xl mx-auto items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
            <div className="grid gap-1">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                <ZapIcon className="h-4 w-4" />
              </div>
              <h1 className="text-lg font-bold">Infinite scalability</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                <PieChartIcon className="h-4 w-4" />
              </div>
              <h1 className="text-lg font-bold">Real-time insights</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get granular, first-party, real-user metrics on site performance per deployment.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                <LayersIcon className="h-4 w-4" />
              </div>
              <h1 className="text-lg font-bold">Personalization</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}