import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from 'next/image';

export default function SocialProof() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-12 px-4 md:px-6">
        <div className="grid gap-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by the Best</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our products are used by leading companies and organizations around the world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex items-center justify-center">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Award"
                  width={60}
                  height={60}
                  layout="intrinsic" 
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Best SaaS Product</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Awarded by SaaS Awards 2022</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Award"
                  width={60}
                  height={60}
                  layout="intrinsic" 
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">ISO 9001 Certified</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quality Management System</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Award"
                  width={60}
                  height={60}
                  layout="intrinsic" 
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Fastest Growing SaaS</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Awarded by SaaS 100 2021</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Award"
                  width={60}
                  height={60}
                  layout="intrinsic" 
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">GDPR Compliant</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Data Privacy Certification</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Award"
                  width={60}
                  height={60}
                  layout="intrinsic" 
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Best Customer Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Awarded by SaaS Support Awards 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-square overflow-hidden rounded-lg object-contain object-center">
                <Image
                  src="/placeholder.svg"
                  alt="Award"
                  width={60}
                  height={60}
                  layout="intrinsic" 
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">SOC 2 Type II Certified</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Security and Compliance</p>
              </div>
            </div>
          </div>
        </div>
        <Carousel className="w-full max-w-2xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center gap-6">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;The customer service I received was exceptional. The support team went above and beyond to
                  address my concerns.&ldquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Jules Winnfield</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center gap-6">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;I&apos;ve been using this product for over a year now, and it has been a game-changer for my
                  business. The features are top-notch, and the support team is always there to help.&ldquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Founder, Startup Co.</div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center gap-6">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;This product has been a game-changer for my team. The intuitive interface and powerful features
                  have helped us streamline our workflows and increase productivity.&ldquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Alex Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">CTO, Tech Co.</div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}