import type { Metadata } from "next";
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: "Launchieve — From AI Prototype to Real Product",
};
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'
import HomeHero from '@/components/home/HomeHero'
import MobileToolsSlider from '@/components/home/MobileToolsSlider'
import EventTracker from "@/components/meta/EventTracker";
import RedditEventTracker from "@/components/meta/RedditEventTracker";

const BuildingHasNever = dynamic(() => import('@/components/home/BuildingHasNever'))
const HowWeHelp = dynamic(() => import('@/components/home/HowWeHelp'))
const WhatYouReceive = dynamic(() => import('@/components/home/WhatYouReceive'))
const BuildWithUs = dynamic(() => import('@/components/home/BuildWithUs'))
const WhoThisIsFor = dynamic(() => import('@/components/home/WhoThisIsFor'))
const HomeCTA = dynamic(() => import('@/components/home/HomeCTA'))

export default function HomePage() {
  return (
    <ScrollAnimationProvider>
      <EventTracker 
        eventName="ViewContent"
        pixelData={{ content_name: 'Homepage', content_category: 'Free Audit' }}
        capiData={{ contentName: 'Homepage' }}
      />
      <RedditEventTracker eventName="ViewContent" />
      <Navbar />
      <main>
        <HomeHero />
        <MobileToolsSlider />
        <BuildingHasNever />
        <HowWeHelp />
        <WhatYouReceive />
        <BuildWithUs />
        <WhoThisIsFor />
        <HomeCTA />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  )
}
