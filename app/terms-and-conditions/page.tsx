import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";

export default function TermsAndConditionsPage() {
  return (
    <ScrollAnimationProvider>
      <Navbar />
      <main>
        <TermsHero />
        <TermsContent />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  );
}
