import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Payment Successful — Launchieve",
};
import Footer from "@/components/layout/Footer";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import OurOffices from "@/components/thankyou/OurOffices";
import NotSureWhereToStart from "@/components/thankyou/NotSureWhereToStart";
import ThankyouHero from "@/components/thankyou/ThankyouHero";
import RedditPurchaseTracker from "@/components/thankyou/RedditPurchaseTracker";

export default function PaymentSuccessPage() {
  return (
    <ScrollAnimationProvider>
      <RedditPurchaseTracker />
      <Navbar />
      <main>
        <ThankyouHero />
        <OurOffices />
        <NotSureWhereToStart />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  );
}
