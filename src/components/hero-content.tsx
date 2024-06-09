import Link from "next/link";
import Image from 'next/image';
import { ZapIcon, PieChartIcon, LayersIcon } from "@/components/icon"

export default function HeroContent() {
  return (
    <>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unlock the Power of Our Product
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Experience unparalleled benefits and transform the way you work. Our cutting-edge solution is designed
                to streamline your operations and drive your business forward.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <Image
            src="/placeholder.svg"
            alt="Hero"
            width={550}
            height={310}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container space-y-12 px-12 md:px-12 lg:px-12">
          <div className="grid max-w-12xl mx-auto items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
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