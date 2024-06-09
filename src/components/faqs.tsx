import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "@/components/icon"

export default function FAQS() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container space-y-12 px-12 md:px-12 lg:px-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get answers to the most common questions about our products and services.
          </p>
        </div>
        <div className="mx-auto mt-12 space-y-4">
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-lg font-medium">
              What is the difference between the Basic and Pro plans?
              <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pt-4 pb-6 text-gray-500 dark:text-gray-400">
              <p>
                Our Basic plan is designed for small businesses and individuals who need the core features to get started. The Pro plan includes additional features like advanced analytics, custom branding, and team collaboration tools to help growing businesses scale more effectively.
              </p>
              <p className="mt-4">
                The key differences are:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Basic: 1 user, 5GB storage, basic analytics</li>
                <li>Pro: Unlimited users, 50GB storage, advanced analytics, custom branding, team collaboration</li>
              </ul>
              <p className="mt-4">
                We recommend the Pro plan for businesses that need more robust features to support their growth. But the Basic plan is a great starting point for smaller projects or individuals.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-lg font-medium">
              How do I cancel my subscription?
              <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4 pt-2 text-gray-500 dark:text-gray-400">
              To cancel your subscription, log into your account and go to the Billing section. There you&apos;ll find an
              option to cancel your plan. We require 30 days&apos; notice to process cancellations.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-lg font-medium">
              What payment methods do you accept?
              <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4 pt-2 text-gray-500 dark:text-gray-400">
              We accept all major credit and debit cards, as well as PayPal and Apple Pay. You can update your payment
              method at any time in your account settings.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-lg font-medium">
              Do you offer any discounts or promotions?
              <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4 pt-2 text-gray-500 dark:text-gray-400">
              Yes, we offer periodic discounts and promotions. The best way to stay up-to-date is to subscribe to our
              newsletter or follow us on social media.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-lg font-medium">
              How do I get support if I have an issue?
              <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4 pt-2 text-gray-500 dark:text-gray-400">
              You can reach our support team by email, phone, or through our online chat. We have a dedicated team
              available 24/7 to assist you with any questions or problems you may have.
            </CollapsibleContent>
          </Collapsible>
        </div>
        {/* <div className="mt-12 flex justify-center">
          <Button variant="outline" className="px-6 py-3">
            Contact Us
          </Button>
        </div> */}
      </div>
    </section>
  )
}