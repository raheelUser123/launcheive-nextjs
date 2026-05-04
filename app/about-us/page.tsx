import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About Launchieve — The Team Behind the Audit",
};
import Footer from "@/components/layout/Footer";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import ThePersonBehindIt from "@/components/about-us/ThePersonBehindIt";
import LeadershipTeam from "@/components/about-us/LeadershipTeam";
import WhatWeBelieve from "@/components/about-us/WhatWeBelieve";
import TheTeam from "@/components/about-us/TheTeam";
import AboutUsCTA from "@/components/about-us/AboutUsCTA";

export default function AboutUsPage() {
  return (
    <ScrollAnimationProvider>
      <Navbar />
      <main>
        <AboutUsHero />
        <WhoWeAre />
        <ThePersonBehindIt />
        <LeadershipTeam />
        <WhatWeBelieve />
        <TheTeam />
        <AboutUsCTA />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  );
}
