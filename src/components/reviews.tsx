import Image from 'next/image';

export default function Reviews() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-12 md:px-12 lg:px-12">
                <div className="container grid items-center justify-center gap-12 px-2 md:px-6 lg:px-12">
                    <div className="grid gap-6 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Hear from the people who love using our product.
                            </p>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Avatar"
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div className="grid gap-0.5">
                                        <div className="font-bold text-lg text-left">Jane Doe</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 text-left text-left">CEO, Acme Inc</div>
                                    </div>
                                </div>
                                <blockquote className="flex-1 text-left">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        &ldquo;This product has been a game-changer for our team. It&apos;s intuitive, powerful, and has saved us so much
                                        time.&ldquo;
                                    </p>
                                </blockquote>
                                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">2 days ago</div>
                            </div>
                            <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Avatar"
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div className="grid gap-0.5">
                                        <div className="font-bold text-lg text-left">John Smith</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 text-left">CTO, Acme Inc</div>
                                    </div>
                                </div>
                                <blockquote className="flex-1 text-left">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        &ldquo;I was hesitant at first, but this product has exceeded all my expectations. It&apos;s a must-have for any
                                        business.&ldquo;
                                    </p>
                                </blockquote>
                                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">3 weeks ago</div>
                            </div>
                            <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Avatar"
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div className="grid gap-0.5">
                                        <div className="font-bold text-lg text-left">Sarah Lee</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 text-left">Product Manager, Acme Inc</div>
                                    </div>
                                </div>
                                <blockquote className="flex-1 text-left">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        &ldquo;This is the best product I&apos;ve used in years. The team is responsive, and the features are top-notch.&ldquo;
                                    </p>
                                </blockquote>
                                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">2 days ago</div>
                            </div>
                            <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Avatar"
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div className="grid gap-0.5">
                                        <div className="font-bold text-lg text-left">Michael Johnson</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 text-left">Sales Manager, Acme Inc</div>
                                    </div>
                                </div>
                                <blockquote className="flex-1 text-left">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        &ldquo;I&apos;ve tried many similar products, but this one stands out above the rest. Highly recommended!&ldquo;
                                    </p>
                                </blockquote>
                                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">3 weeks ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}