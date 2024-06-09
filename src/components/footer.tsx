import Link from "next/link";
import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon, YoutubeIcon } from "@/components/icon";

export default function Component() {
  return (
    <footer className="max-w-full bg-[#0a192f] text-white">
      <div className="mx-auto px-4 sm:px-12 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-full md:col-span-1">
          <h5 className="text-xl font-bold mb-3">ABOUT COMPANY</h5>
          <p className="text-gray-400">
            Professionally redefine transparent ROI through low-risk high-yield imperatives. Progressively create
            empowered, cost effective users via team driven.
          </p>
          <div className="flex mt-4 space-x-3">
            <FacebookIcon className="h-6 w-6" />
            <TwitterIcon className="h-6 w-6" />
            <LinkedinIcon className="h-6 w-6" />
            <GithubIcon className="h-6 w-6" />
            <YoutubeIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="col-span-full md:col-span-1">
          <h5 className="text-xl font-bold mb-3">QUICK LINKS</h5>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Meet Our Team
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Help & FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-1">
          <h5 className="text-xl font-bold mb-3">IT SERVICES</h5>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Business Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Product Management
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Cloud services
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-1">
          <h5 className="text-xl font-bold mb-3">RECENT POSTS</h5>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gray-500 rounded-md" />
                  <div>
                    <p className="font-medium">Unsatable Entreaties May Collecting Power.</p>
                    <span className="text-gray-400 text-sm">21 June, 2024</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gray-500 rounded-md" />
                  <div>
                    <p className="font-medium">Regional Manager Limited Time Management.</p>
                    <span className="text-gray-400 text-sm">22 June, 2024</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-full mx-auto px-8 sm:px-12 lg:px-24">
          <p className="text-gray-400 text-sm">Copyright © 2024 UnityBizHub. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-gray-300" prefetch={false}>
              Terms & Condition
            </Link>
            <Link href="#" className="text-sm hover:text-gray-300" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="text-sm hover:text-gray-300" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
