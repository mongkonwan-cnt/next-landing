import { CombineIcon, BotIcon, ScalingIcon, InfoIcon, LockIcon, ComponentIcon } from "@/components/icon"

export default function Features() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-12 md:px-12 lg:px-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm bg-white">Key Features</div>
              {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unleash Your Team&apos;s Potential</h2> */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover What Makes Us Unique</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Streamline your workflow, boost productivity, and unlock new possibilities with our cutting-edge features, designed to deliver exceptional results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <CombineIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Seamless Collaboration</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Empower your team to work together effortlessly with built-in code review tools and real-time
                communication features.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <BotIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Automated Workflows</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Streamline your development process with continuous integration and delivery, ensuring your code is always
                up-to-date and secure.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <ScalingIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Scalable Infrastructure</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Easily scale your application with our cloud-based infrastructure, ensuring your users always have a fast
                and reliable experience.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <InfoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Powerful Analytics</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gain deep insights into your application&apos;s performance with real-time metrics and comprehensive reporting
                tools.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <LockIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Secure by Design</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Protect your data and ensure compliance with our robust security features and enterprise-grade encryption.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <ComponentIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Highly Customizable</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tailor our platform to your unique needs with our extensive customization options and flexible API
                integrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}
  
  