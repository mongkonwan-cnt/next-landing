"use client"

import Link from "next/link";
import Image from 'next/image';
import { ZapIcon, PieChartIcon, LayersIcon } from "@/components/icon"
import HeroContent from "./hero-content";
import SocialProof from "./social-proof";

export default function MainPage() {
  return (
    <>
      <HeroContent />
      <SocialProof />
    </>
  )
}