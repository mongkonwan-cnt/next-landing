
import { RocketIcon, ShieldIcon, PowerIcon } from "@/components/icon"

export default function Benefits() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-12 md:px-12 lg:px-12">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Benefits</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Solution?</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Discover the top reasons why our product is the best choice for your needs. Unlock unparalleled value and
                            experience the difference.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border border-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0 dark:border-gray-800">
                    <div className="grid gap-1 p-8 md:p-10">
                        <div className="flex items-center gap-2">
                            <RocketIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
                            <h3 className="text-xl font-bold">Increased Productivity</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                            Our intuitive platform streamlines your workflows, helping you accomplish more in less time. Say goodbye
                            to tedious tasks and hello to efficient productivity.
                        </p>
                    </div>
                    <div className="grid gap-1 p-8 md:p-10">
                        <div className="flex items-center gap-2">
                            <ShieldIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
                            <h3 className="text-xl font-bold">Unmatched Reliability</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                            Rely on our rock-solid infrastructure to keep your data secure and your applications running smoothly.
                            Experience the peace of mind that comes with a dependable solution.
                        </p>
                    </div>
                    <div className="grid gap-1 p-8 md:p-10">
                        <div className="flex items-center gap-2">
                            <PowerIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
                            <h3 className="text-xl font-bold">Exceptional Support</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                            Our dedicated team of experts is here to assist you every step of the way. Get personalized guidance and
                            timely resolutions to ensure your success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}