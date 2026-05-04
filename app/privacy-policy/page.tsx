import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export default function PrivacyPolicyPage() {
  return (
    <ScrollAnimationProvider>
      <Navbar />
      <main>
        <PrivacyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  );
}
