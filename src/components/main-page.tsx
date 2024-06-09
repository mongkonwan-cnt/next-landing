"use client"

import { useEffect, useState } from "react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import HeroContent from "./hero-content";
import SocialProof from "./social-proof";
import Benefits from "./benefits";
import Features from "./features";
import Reviews from "./reviews";
import FAQS from "./faqs";
import MainNav from "./main-nav";

export default function MainPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / (fullHeight - windowHeight)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const handleScroll = () => {
      calculateScrollProgress();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-indigo-500 z-50" style={{ width: `${scrollProgress}%` }} />

      <HeroContent />
      <SocialProof />
      <Benefits />
      <Features />
      <Reviews />
      <FAQS />

      {/* Scroll to top button */}
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="fixed bottom-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200"
              onClick={scrollToTop}
            >
              <ArrowUpIcon />
              <span className="sr-only">Go to Top</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Go to Top</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
