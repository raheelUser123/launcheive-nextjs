import type { Metadata } from "next";
import Navbar from '@/components/layout/Navbar'
import EventTracker from "@/components/meta/EventTracker";
import RedditEventTracker from "@/components/meta/RedditEventTracker";

export const metadata: Metadata = {
  title: "Premium Product Audit for Founders — Launchieve",
};
import Footer from '@/components/layout/Footer'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'
import AuditHero from '@/components/audit/AuditHero'
import TheProblem from '@/components/audit/TheProblem'
import WhatTheAuditIs from '@/components/audit/WhatTheAuditIs'
import AuditWhoThisIsFor from '@/components/audit/AuditWhoThisIsFor'
import WhatWeLookAt from '@/components/audit/WhatWeLookAt'
import AuditCoversAreas from '@/components/audit/AuditCoversAreas'
import WalkAwayWith from '@/components/audit/WalkAwayWith'
import BeforeAfterAudit from '@/components/audit/BeforeAfterAudit'
import WhoIsReviewing from '@/components/audit/WhoIsReviewing'
import HowItWorks from '@/components/audit/HowItWorks'
import NotSureCTA from '@/components/audit/NotSureCTA'
import MostFoundersCTA from '@/components/audit/MostFoundersCTA'

export default function PremiumAuditPage() {
  return (
    <ScrollAnimationProvider>
      <EventTracker 
        eventName="ViewContent"
        pixelData={{ content_name: 'Premium Audit Page', content_category: 'Premium Audit' }}
        capiData={{ contentName: 'Premium Audit Page' }}
      />
      <RedditEventTracker eventName="ViewContent" />
      <Navbar />
      <main>
        <AuditHero />
        <TheProblem />
        <WhatTheAuditIs />
        <AuditWhoThisIsFor />
        <WhatWeLookAt />
        <AuditCoversAreas />
        <WalkAwayWith />
        <BeforeAfterAudit />
        <WhoIsReviewing />
        <HowItWorks />
        <NotSureCTA />
        <MostFoundersCTA />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  )
}
