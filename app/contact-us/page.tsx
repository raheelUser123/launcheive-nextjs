import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contact Launchieve — Let's Talk",
};
import Footer from "@/components/layout/Footer";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import ContactHero from "@/components/contact-us/ContactHero";
import OurOffices from "@/components/contact-us/OurOffices";
import NotSureWhereToStart from "@/components/contact-us/NotSureWhereToStart";

export default function ContactUsPage() {
  return (
    <ScrollAnimationProvider>
      <Navbar />
      <main>
        <ContactHero />
        <OurOffices />
        <NotSureWhereToStart />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  );
}
