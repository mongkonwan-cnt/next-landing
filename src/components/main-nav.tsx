"use client"

import Link from "next/link"
import Image from 'next/image';
import { NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ChevronRightIcon } from "@radix-ui/react-icons"

export default function MainNav() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <Image
              src="/unitybizhub-logo.png"
              alt="Logo"
              width={36}
              height={36}
              priority // optional: if the image is important and should be loaded first
            />
            <span className="font-bold">UnityBizHub</span>
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-full items-center px-4 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  href="#"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Powerful Features</div>
                        <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                          Discover our cutting-edge features that will transform your workflow.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Seamless Integrations
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                          Extend your workflow with our wide range of integrations.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Flexible Pricing</div>
                        <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                          Find the perfect plan to fit your needs and budget.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-full items-center px-4 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  href="#"
                >
                  Testimonials
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-full items-center px-4 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  href="#"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="outline">
                {/* <UnityBizHubLogo className="h-6 w-6" /> */}
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col items-start gap-6 p-6">
                <Link className="flex items-center gap-2" href="#">
                  {/* <MountainIcon className="h-6 w-6" /> */}
                  <span className="font-bold">Acme Inc</span>
                </Link>
                <nav className="grid gap-2">
                  <Link className="flex items-center gap-2 text-lg font-medium" href="#">
                    Home
                  </Link>
                  <Collapsible className="grid gap-2">
                    <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                      Features
                      <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="-mx-6 grid gap-4 bg-gray-100 p-6 dark:bg-gray-800">
                        <Link className="group flex items-center gap-2 text-base font-medium hover:underline" href="#">
                          Powerful Features
                        </Link>
                        <Link className="group flex items-center gap-2 text-base font-medium hover:underline" href="#">
                          Seamless Integrations
                        </Link>
                        <Link className="group flex items-center gap-2 text-base font-medium hover:underline" href="#">
                          Flexible Pricing
                        </Link>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  <Link className="flex items-center gap-2 text-lg font-medium" href="#">
                    Testimonials
                  </Link>
                  <Link className="flex items-center gap-2 text-lg font-medium" href="#">
                    Contact
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}