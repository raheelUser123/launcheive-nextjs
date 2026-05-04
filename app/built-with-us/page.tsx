import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Build Your Product Properly — Launchieve",
};
import Footer from "@/components/layout/Footer";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import BuiltWithUsHero from "@/components/built-with-us/BuiltWithUsHero";
import WhoThisIsForBuild from "@/components/built-with-us/WhoThisIsForBuild";
import WhatWeBuild from "@/components/built-with-us/WhatWeBuild";
import HowWeEngage from "@/components/built-with-us/HowWeEngage";
import WhyFoundersWorkWithUsBuild from "@/components/built-with-us/WhyFoundersWorkWithUsBuild";
import TheProcessBuild from "@/components/built-with-us/TheProcessBuild";
import YouveDoneTheHardPartBuild from "@/components/built-with-us/YouveDoneTheHardPartBuild";
import EventTracker from "@/components/meta/EventTracker";
import CalendlyTracker from "@/components/meta/CalendlyTracker";

export default function BuiltWithUsPage() {
  return (
    <ScrollAnimationProvider>
      <EventTracker
        eventName="ViewContent"
        pixelData={{
          content_name: "Built With Us Page",
          content_category: "Development Service",
        }}
        capiData={{ contentName: "Built With Us Page" }}
      />
      <CalendlyTracker />
      <Navbar />
      <main>
        <BuiltWithUsHero />
        <WhoThisIsForBuild />
        <WhatWeBuild />
        <HowWeEngage />
        <WhyFoundersWorkWithUsBuild />
        <TheProcessBuild />
        <YouveDoneTheHardPartBuild />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  );
}
